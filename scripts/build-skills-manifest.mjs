#!/usr/bin/env node
/**
 * build-skills-manifest.mjs — generate .claude/skills/MANIFEST.json from disk.
 *
 * Adapted from agentvibe's scripts/build-skills-manifest.mjs. Output shape is
 * unchanged from beeond's existing manifest: {version, generated, note,
 * totalSkills, skills:[{name, description, tags, path}]}.
 *
 * WHY THIS EXISTS: the manifest it replaces was hand-maintained and had drifted
 * three ways at once. It claimed 154 skills; the tree held 147. Seven skills were
 * self-nested (`<name>/<name>/SKILL.md`, a byte-identical duplicate of the outer
 * tree) and each was counted twice. Four AWS skills sat under a `security/`
 * grouping folder that has no SKILL.md and is not itself a skill. A manifest that
 * disagrees with disk is worse than none, because every consumer trusts it.
 *
 * Rules:
 *   - A skill is a TOP-LEVEL directory under .claude/skills/ containing SKILL.md.
 *     Nothing nested deeper is a skill. This is what makes the count reproducible.
 *   - An entry is emitted only if its SKILL.md exists. Names are never invented.
 *   - description/tags come from SKILL.md frontmatter; tags fall back to the
 *     previous manifest when frontmatter declares none.
 *
 * Usage:
 *   node scripts/build-skills-manifest.mjs           # write MANIFEST.json
 *   node scripts/build-skills-manifest.mjs --check   # exit 1 if out of date
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = path.join(REPO_ROOT, '.claude', 'skills');
const MANIFEST_PATH = path.join(SKILLS_DIR, 'MANIFEST.json');
const CHECK = process.argv.includes('--check');

/**
 * Minimal frontmatter reader for the three shapes present in this corpus:
 * `key: value`, a quoted `key: "value"`, and a YAML block scalar
 * (`description: |` with the text on following indented lines).
 *
 * The block-scalar case is why this differs from agentvibe's copy. 16 of beeond's
 * 147 skills use it, and a parser that treats the `|` as the value produces a
 * description of literally "|" — which is what the previous manifest carried for
 * ai-engineer, and a leading "| " for 12 others.
 */
function readFrontmatter(file) {
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch {
    return {};
  }
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return {};

  const out = {};
  let key = null;
  const buf = [];
  const flush = () => {
    if (key) {
      out[key] = buf
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^(["'])([\s\S]*)\1$/, '$2')
        .trim();
    }
    buf.length = 0;
  };

  for (const raw of m[1].split(/\r?\n/)) {
    const top = /^([A-Za-z_][\w-]*):\s?(.*)$/.exec(raw);
    if (top && !/^\s/.test(raw)) {
      flush();
      key = top[1];
      const value = top[2].trim();
      // `|`, `>`, `|-`, `>2` etc. are block-scalar indicators, not the value.
      if (value && !/^[|>][-+]?\d*$/.test(value)) buf.push(value);
    } else if (key && raw.trim()) {
      buf.push(raw.trim());
    }
  }
  flush();
  return out;
}

function parseTags(value) {
  if (!value) return null;
  const inline = /^\[(.*)\]$/.exec(value.trim());
  const body = inline ? inline[1] : value;
  const tags = body
    .split(',')
    .map((t) => t.trim().replace(/^["'-]\s*/, '').replace(/["']$/, ''))
    .filter(Boolean);
  return tags.length ? tags : null;
}

let previous = { skills: [] };
try {
  previous = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
} catch {
  /* first run, or the file is corrupt — regenerate from disk either way */
}
const prevTags = new Map();
for (const e of previous.skills || []) {
  if (e?.name && Array.isArray(e.tags) && e.tags.length && !prevTags.has(e.name)) {
    prevTags.set(e.name, e.tags);
  }
}

const names = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(SKILLS_DIR, d.name, 'SKILL.md')))
  .map((d) => d.name)
  .sort();

const skills = names.map((name) => {
  const rel = path.posix.join('.claude', 'skills', name, 'SKILL.md');
  const fm = readFrontmatter(path.join(SKILLS_DIR, name, 'SKILL.md'));
  return {
    name,
    description: fm.description || '',
    tags: parseTags(fm.tags) || prevTags.get(name) || [],
    path: rel,
  };
});

const manifest = {
  version: previous.version ?? '1.0.0',
  generated: new Date().toISOString().slice(0, 10),
  note: 'Generated from disk by scripts/build-skills-manifest.mjs. Every path resolves to a top-level .claude/skills/<name>/SKILL.md. Do not hand-edit — run the script.',
  totalSkills: skills.length,
  skills,
};

const serialise = (o) => `${JSON.stringify(o, null, 2)}\n`;

// `generated` is a timestamp, so compare everything except that field.
const comparable = (o) => serialise({ ...o, generated: '' });

if (CHECK) {
  const current = fs.existsSync(MANIFEST_PATH) ? fs.readFileSync(MANIFEST_PATH, 'utf8') : '';
  let parsed = null;
  try {
    parsed = JSON.parse(current);
  } catch {
    console.error('✗ MANIFEST.json is not valid JSON.');
    process.exit(1);
  }
  if (comparable(parsed) !== comparable(manifest)) {
    console.error('✗ MANIFEST.json is out of date with .claude/skills/ on disk.');
    console.error('  Run: node scripts/build-skills-manifest.mjs');
    const onDisk = new Set(names);
    const listed = new Set((parsed.skills || []).map((s) => s.name));
    const missing = [...onDisk].filter((n) => !listed.has(n));
    const stale = [...listed].filter((n) => !onDisk.has(n));
    if (missing.length) console.error(`  on disk but not listed: ${missing.join(', ')}`);
    if (stale.length) console.error(`  listed but not on disk: ${stale.join(', ')}`);
    process.exit(1);
  }
  console.log(`✓ MANIFEST.json matches disk — ${skills.length} skills.`);
  process.exit(0);
}

fs.writeFileSync(MANIFEST_PATH, serialise(manifest));
const blank = skills.filter((s) => !s.description).map((s) => s.name);
console.log(`✓ wrote ${skills.length} skills to ${path.relative(REPO_ROOT, MANIFEST_PATH)}`);
if (blank.length) console.log(`  ⚠ ${blank.length} without a description: ${blank.join(', ')}`);
