#!/usr/bin/env node
/**
 * build-skill-routers.mjs — the two-tier discovery layer.
 *
 * POSTURE: BLOCKS with --check, as `npm run check:skill-routers`. A STEP of the suite
 * (scripts/lib/check-suite.js) and a step of .github/workflows/ci.yml.
 *
 * ── THE PROBLEM, MEASURED AGAINST beeond's OWN TREE (2026-08-31) ─────────────────────────────
 *
 * `.claude/skills/MANIFEST.json` is 53,463 bytes / ~14,850 tokens across 147 entries, and
 * CLAUDE.md tells every agent to consult it before loading a skill. It grows linearly with the
 * library, so adding a good skill makes every unrelated task more expensive.
 *
 *   tier 1  routers/INDEX.md         six namespaces, one line each        ~250 tokens
 *   tier 2  routers/<namespace>.md   the skills in that namespace         ~800-1,200 tokens
 *   tier 3  the SKILL.md itself
 *
 * A typical lookup becomes index + one namespace instead of the whole manifest. The script
 * prints both figures when it writes, so the saving is re-measured on every run rather than
 * quoted from this comment.
 *
 * ── PORTED FROM agentvibe, AND WHAT WAS ADAPTED ──────────────────────────────────────────────
 *
 * The machinery is agentvibe's. Three things were changed, and they are named here because an
 * unrecorded adaptation is how a ported file starts lying about its origin:
 *
 *   1. SCRIPT NAMES. agentvibe says `npm run build:routers` and `npm run check:manifest`;
 *      beeond's are `build:skill-routers` and `check:skills-manifest`. Both appear in text this
 *      script WRITES, so a copied name would have sent every reader of INDEX.md to a command
 *      that does not exist here.
 *
 *   2. THE FIGURES IN INDEX.md ARE DERIVED, NOT LITERAL. agentvibe's version writes "~15,000
 *      tokens across 147 entries" as fixed prose — a measurement of agentvibe's manifest,
 *      rendered into every generated file. Here the byte count, the token estimate, the entry
 *      count and the namespace count are all read at generation time. beeond's manifest happens
 *      to hold 147 entries too, which is exactly why this mattered: a copied figure that is
 *      accidentally close is the kind that survives being wrong.
 *
 *   3. NOTHING ELSE. In particular the manifest fields this reads — `skills[].name` and
 *      `skills[].description` — are both present in beeond's manifest, so no field had to be
 *      invented or defaulted. MANIFEST.json IS NOT REGENERATED OR RESHAPED BY THIS SCRIPT; it
 *      is read. `npm run check:skills-manifest` remains the only thing that compares it to disk.
 *
 * ── WHY THE ROUTERS LIVE OUTSIDE THE SKILL DIRECTORIES ───────────────────────────────────────
 *
 * A router implemented AS a skill would carry its own SKILL.md, land in MANIFEST.json, and
 * inflate the exact file it exists to avoid reading — six more entries on every lookup, forever.
 * `.claude/skills/routers/` holds plain markdown with no SKILL.md, so
 * `build-skills-manifest.mjs` (which requires one) ignores the directory and the manifest stays
 * at 147. That is checked, not assumed: `npm run check:skills-manifest` runs in the same suite.
 *
 * MANIFEST.json IS NOT DELETED. It stays the exhaustive index. The routers are a cheaper path to
 * the same place, not a second source of truth — both are generated from the same directory and
 * both are `--check`ed, so they cannot disagree without CI saying so.
 *
 * ── ON WRITING INTO A PROTECTED PATH ─────────────────────────────────────────────────────────
 *
 * `.claude/skills` is in the PROTECTED list of scripts/protected-write-tripwire.cjs. That guard
 * preloads only into `node --test` scripts, so it does not apply here — the same arrangement
 * `build:tokens` already has with `design/tokens`. If this generator ever acquires a test that
 * runs under the tripwire, that test must write its fixtures to a temp directory, never to
 * `.claude/skills/routers/`.
 *
 * Usage: node scripts/build-skill-routers.mjs [--check]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { parseYamlSubset } = require('./lib/claims.js');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS = path.join(ROOT, '.claude', 'skills');
const ROUTERS = path.join(SKILLS, 'routers');

// One copy of each namespace's one-line summary, and this is it. CURATION.yml deliberately does
// NOT restate them — two descriptions of one thing disagree silently, and the routers are the
// place a reader actually meets the text.
//
// `thinking` is kept although beeond declares no such namespace: its 28 skills are not installed
// here (see CURATION.yml), and this line is what the key would need on the day they are. An
// unused entry costs nothing — the loop below iterates the NAMESPACES, not this table.
const HEADLINE = {
  engineering: 'Backend, data modelling, refactoring, debugging, documentation — how the thing is built',
  'frontend-design': 'UI, visual design, component systems, accessibility — what the user sees',
  'quality-security': 'Testing, review, auth, secrets, compliance — what stops it shipping broken',
  'ai-agents': 'LLM applications, agents, retrieval, prompts, tools — the AI layer itself',
  'ops-delivery': 'Deploy, CI, git workflow, jobs, ticketing — running it in production',
  'business-growth': 'Pricing, metrics, market, positioning, copy, conversion — why anyone pays',
  thinking: 'Named mental models for diagnosis, decision and critique — each with a stop rule and an over-application guard. Start at thinking-model-router, which may return NONE',
};

const CURATION = path.join(SKILLS, 'CURATION.yml');
if (!fs.existsSync(CURATION)) {
  process.stderr.write(`✗ no ${path.relative(ROOT, CURATION)} — the namespace map is authored, not inferred.\n`);
  process.exit(1);
}
const doc = parseYamlSubset(fs.readFileSync(CURATION, 'utf8')) || {};
const namespaces = doc.namespaces || {};
if (!Object.keys(namespaces).length) {
  process.stderr.write(`✗ ${path.relative(ROOT, CURATION)} declares no \`namespaces:\` — nothing to route.\n`);
  process.exit(1);
}

const MANIFEST = path.join(SKILLS, 'MANIFEST.json');
const manifestBytes = fs.statSync(MANIFEST).size;
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const describe = Object.fromEntries(manifest.skills.map((s) => [s.name, s.description || '']));

const onDisk = fs
  .readdirSync(SKILLS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(SKILLS, d.name, 'SKILL.md')))
  .map((d) => d.name);

// ── refuse an incoherent mapping ──
// A skill in no namespace is unreachable through the routers; a skill in two makes the
// routers disagree about where it lives. Both are silent failures at read time, so they are
// loud failures at build time instead. Nothing is written while any of the three holds.
const assigned = [];
for (const list of Object.values(namespaces)) assigned.push(...list);
const dupes = assigned.filter((x, i) => assigned.indexOf(x) !== i);
const orphans = onDisk.filter((x) => !assigned.includes(x));
const ghosts = assigned.filter((x) => !onDisk.includes(x));
const problems = [];
if (dupes.length) problems.push(`in more than one namespace: ${[...new Set(dupes)].join(', ')}`);
if (orphans.length) problems.push(`in NO namespace, so unreachable via routers: ${orphans.join(', ')}`);
if (ghosts.length) problems.push(`assigned to a namespace but not on disk: ${ghosts.join(', ')}`);
if (problems.length) {
  for (const p of problems) process.stderr.write(`✗ ${p}\n`);
  process.stderr.write('  Fix the `namespaces:` block in .claude/skills/CURATION.yml.\n');
  process.exit(1);
}

// Descriptions arrive from mixed corpora and several carry a leftover YAML block-scalar
// marker or a stray quote at the front. Trimmed here rather than in 147 files.
const clean = (s) =>
  String(s)
    // Undecoded \uXXXX escapes reach here as literal text from corpora whose frontmatter was
    // written as a JSON string. Rendering "—" to a reader is a small lie about what the
    // description says, and it is six characters of noise on every lookup.
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\n/g, ' ')
    .replace(/^[|>"'\s]+/, '')
    .replace(/["'\s]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();

const first = (s, n) => {
  const t = clean(s);
  return t.length <= n ? t : `${t.slice(0, n - 1).replace(/[,;:\s]\S*$/, '')}…`;
};

const nsCount = Object.keys(namespaces).length;
const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const nsWord = WORD[nsCount] || String(nsCount);
const manifestTokens = Math.round(manifestBytes / 3.6);

function indexFile() {
  const L = [];
  L.push('# Skill routers — read this first, not MANIFEST.json');
  L.push('');
  L.push('**Generated by `node scripts/build-skill-routers.mjs` — do not edit.**');
  L.push('');
  L.push(`Discovery is two-tier on purpose. Reading the full manifest costs ~${manifestTokens.toLocaleString('en-US')} tokens across`);
  L.push(`${manifest.skills.length} entries and grows with every skill added, so a good new skill makes every unrelated task`);
  L.push(`more expensive. Read the ${nsWord} lines below, open the ONE namespace that matches, then load the skill.`);
  L.push('');
  L.push('| Namespace | Covers | Skills |');
  L.push('|---|---|---|');
  for (const ns of Object.keys(namespaces)) {
    L.push(`| [\`${ns}\`](${ns}.md) | ${HEADLINE[ns] || ''} | ${namespaces[ns].length} |`);
  }
  L.push('');
  L.push(`${onDisk.length} skills total. \`MANIFEST.json\` remains the exhaustive index and is what`);
  L.push('`npm run check:skills-manifest` verifies; it is not the place to start a lookup.');
  L.push('');
  return L.join('\n');
}

function namespaceFile(ns) {
  const L = [];
  L.push(`# ${ns}`);
  L.push('');
  L.push('**Generated — do not edit.** Load with `READ .claude/skills/<name>/SKILL.md`.');
  L.push('');
  L.push(`${HEADLINE[ns] || ''}`);
  L.push('');
  L.push('| Skill | What it carries |');
  L.push('|---|---|');
  for (const name of [...namespaces[ns]].sort()) {
    L.push(`| \`${name}\` | ${first(describe[name] || '—', 150).replace(/\|/g, '\\|')} |`);
  }
  L.push('');
  L.push('[← all namespaces](INDEX.md)');
  L.push('');
  return L.join('\n');
}

const want = new Map([['INDEX.md', indexFile()]]);
for (const ns of Object.keys(namespaces)) want.set(`${ns}.md`, namespaceFile(ns));

if (process.argv.includes('--check')) {
  const stale = [];
  for (const [f, body] of want) {
    let cur = '';
    try { cur = fs.readFileSync(path.join(ROUTERS, f), 'utf8'); } catch { /* missing = stale */ }
    if (cur !== body) stale.push(f);
  }
  const extra = (fs.existsSync(ROUTERS) ? fs.readdirSync(ROUTERS) : []).filter((f) => !want.has(f));
  if (stale.length || extra.length) {
    if (stale.length) process.stderr.write(`✗ stale router file(s): ${stale.join(', ')}\n`);
    if (extra.length) process.stderr.write(`✗ router file(s) with no namespace: ${extra.join(', ')}\n`);
    process.stderr.write('  Run `npm run build:skill-routers`.\n');
    process.exit(1);
  }
  const tokens = Math.round([...want.values()].reduce((a, b) => a + b.length, 0) / 3.6);
  process.stdout.write(`✓ routers match CURATION.yml — ${want.size} files, ${onDisk.length} skills, ~${tokens} tokens total.\n`);
  process.exit(0);
}

fs.mkdirSync(ROUTERS, { recursive: true });
for (const f of fs.existsSync(ROUTERS) ? fs.readdirSync(ROUTERS) : []) {
  if (!want.has(f)) fs.rmSync(path.join(ROUTERS, f));
}
for (const [f, body] of want) fs.writeFileSync(path.join(ROUTERS, f), body);

const idxTokens = Math.round(want.get('INDEX.md').length / 3.6);
const nsTokens = Math.round(
  [...want.entries()].filter(([f]) => f !== 'INDEX.md').reduce((a, [, b]) => a + b.length, 0) / 3.6 / nsCount
);
process.stdout.write(
  `✓ wrote ${want.size} router files — index ~${idxTokens} tokens, average namespace ~${nsTokens} tokens.\n` +
    `  A typical lookup is index + one namespace ≈ ${idxTokens + nsTokens} tokens, against ~${manifestTokens} for MANIFEST.json.\n`
);
