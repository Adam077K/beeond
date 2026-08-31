#!/usr/bin/env node
/**
 * brand-lint — the executable Constitution gate. FAILS the build on:
 *   1. any hex color outside the 7-token allowlist (incl. #000/#fff)
 *   2. any Google-Fonts URL or next/font/google import
 *   3. `transition: all` / Tailwind `transition-all`
 *   4. raw `ease-in-out` / `linear` easing (CSS values or Tailwind classes)
 *   5. any `animation … infinite` / Tailwind infinite animations
 *   6. physical direction properties (left/right/ml/mr/pl/pr/text-left…)
 *   7. a three-equal-column grid (`grid-cols-3`) without justification
 *   8. `text-yellow` anywhere; `bg-yellow` without a justification marker
 *
 * Escape hatch: append a comment containing `brand-lint-allow: <reason>`
 * on the same line. Every allow is printed so it stays auditable.
 *
 * ── STATUS 2026-08-31: NO LONGER DORMANT ──────────────────────────────────
 * This block read "DORMANT ... Repoint the allowlist at the new brand lock
 * file once the new direction is locked". That file now exists, so the
 * allowlist is no longer typed here at all: it is READ, at run time, from
 * design/tokens/tokens.json — the generated token set, whose only source is
 * design/tokens/seeds.json. The retired v3–v7 palette it used to carry
 * (#faf9f5 #141413 #ffdb5b #f0eee6 #0a0a0a #e3ddd5 #5c5751) is gone and is
 * recorded here only so a reader of an old diff can tell the two apart.
 *
 * WHY THE PALETTE IS READ AND NOT RETYPED: a second hand-written copy of a
 * palette IS a second palette. It drifts on the first colour change, and it
 * drifts silently, because nothing compares them. Reading the generated file
 * means `npm run check:tokens` — which fails when design/tokens/ disagrees
 * with seeds.json — is transitively the check on this allowlist too.
 *
 * WHY tokens.json AND NOT tokens.ts: both are generated from the same seeds by
 * the same script and `check:tokens` fails if they disagree, so the choice is
 * not about trust. It is that JSON.parse reads tokens.json EXACTLY, while
 * reading tokens.ts from a plain .mjs would mean a regex over TypeScript
 * source — a parser that can silently under-read, which is how an allowlist
 * ends up smaller than the palette and this gate starts crying wolf.
 *
 * IF THE TOKEN FILE CANNOT BE READ THIS SCRIPT REFUSES (exit 2) rather than
 * linting against an empty or partial allowlist. Both directions of that
 * failure are bad and one of them is silent: an empty allowlist flags every
 * hex in the tree, and a partial one passes colours that are not tokens.
 *
 * ── THIS IS NOT THE SAME CHECK AS scripts/design-probe.mjs ────────────────
 * The two look redundant and are not, and deleting either as duplication
 * loses coverage nothing else has:
 *
 *   brand-lint (here) reads SOURCE TEXT. It catches a hex someone TYPED —
 *   in a .ts, .tsx, .css or .mjs file — whether or not that line ever
 *   renders. It needs no browser, runs in milliseconds, and it sees code on
 *   a branch nobody has looked at.
 *
 *   design-probe reads COMPUTED STYLE out of a real browser. It catches what
 *   actually RENDERED — a colour arriving by inheritance, by the cascade,
 *   from a font fallback, or from a component library's own default. None of
 *   those appear as a hex in this repository's source at all.
 *
 * Neither sees the other's failures. A hardcoded #ededed in a file that is
 * never imported is invisible to the probe; a Tailwind default grey that
 * paints half the page is invisible here.
 *
 * Usage: node scripts/brand-lint.mjs [--dist]   (--dist also scans .next CSS, report-only)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "src");
const REPO = join(ROOT, "..", "..");
const TOKENS = join(REPO, "design", "tokens", "tokens.json");

/**
 * The palette, read from the generated token file. See the header for why it is read.
 *
 * REFUSES rather than degrading. A missing file, unparseable JSON, a `color` group that is not an
 * object, or an entry with no `$value.hex` are all UNRESOLVED — this script cannot say whether the
 * tree is on-palette, and saying nothing is the only honest answer. It exits 2 so a caller can
 * tell "could not check" from "checked, and found violations" (1) and "checked, clean" (0).
 */
function readPalette() {
  if (!existsSync(TOKENS)) {
    return { error: `${relative(REPO, TOKENS)} does not exist. Run: npm run build:tokens` };
  }
  let doc;
  try {
    doc = JSON.parse(readFileSync(TOKENS, "utf8"));
  } catch (e) {
    return { error: `${relative(REPO, TOKENS)} is not readable JSON — ${e.message}` };
  }
  if (!doc.color || typeof doc.color !== "object") {
    return { error: `${relative(REPO, TOKENS)} has no \`color\` group, so there is no palette to lint against` };
  }
  const hex = new Set();
  const bad = [];
  for (const [name, token] of Object.entries(doc.color)) {
    if (name.startsWith("$")) continue; // $comment and friends are metadata, not tokens
    const v = token?.$value?.hex;
    if (typeof v !== "string" || !/^#[0-9a-f]{6}$/i.test(v)) {
      bad.push(`${name} -> ${JSON.stringify(v)}`);
      continue;
    }
    hex.add(v.toLowerCase());
  }
  if (bad.length) {
    return { error: `${relative(REPO, TOKENS)} has ${bad.length} colour(s) with no readable hex: ${bad.join(", ")}` };
  }
  if (hex.size === 0) {
    return { error: `${relative(REPO, TOKENS)} parsed cleanly and yielded ZERO colours — an empty allowlist would flag every hex in the tree` };
  }
  return { hex };
}

const palette = readPalette();
if (palette.error) {
  console.error(
    `\n✗ brand-lint UNRESOLVED — the palette could not be read, so NOTHING was checked.\n` +
    `  ${palette.error}\n` +
    `  This is not a pass. Fix the token file and re-run.`
  );
  process.exit(2);
}
const ALLOWED_HEX = palette.hex;

const EXTS = new Set([".ts", ".tsx", ".css", ".mjs", ".js", ".jsx"]);

/** rule: [id, severity, regex, message, postFilter?] */
const RULES = [
  {
    id: "google-fonts",
    sev: "FAIL",
    re: /fonts\.googleapis\.com|fonts\.gstatic\.com|next\/font\/google/,
    msg: "Google Fonts is banned — Rubik is self-hosted in public/fonts",
  },
  {
    id: "transition-all",
    sev: "FAIL",
    re: /transition:\s*all\b|\btransition-all\b/,
    msg: "`transition: all` is banned — transition named properties only",
  },
  {
    id: "raw-easing",
    sev: "FAIL",
    re: /\bease-(?:in-out|linear)\b|(?:transition|animation)[^;{}\n]*[\s,(]linear\b(?!-gradient)/,
    msg: "raw ease-in-out/linear is banned — use --ease-settle/swift/exit",
  },
  {
    id: "default-easing",
    sev: "WARN",
    re: /\bease-(?:in|out)\b(?!-)/,
    msg: "library-default ease-in/ease-out — prefer the named intent curves",
  },
  {
    id: "infinite-animation",
    sev: "FAIL",
    re: /animation[^;{}\n]*\binfinite\b|\banimate-(?:spin|ping|pulse|bounce)\b|\[animation[^\]]*infinite[^\]]*\]/,
    msg: "perpetual loops are banned — converge once, then rest",
  },
  {
    id: "physical-direction",
    sev: "FAIL",
    re: /\b(?:m|p)(?:l|r)-(?:\d|\[|auto)|\b(?:left|right)-(?:\d|\[)|\btext-(?:left|right)\b|\brounded-(?:l|r|tl|tr|bl|br)\b|\brounded-(?:l|r|tl|tr|bl|br)-|(?:margin|padding)-(?:left|right)\s*:|\btext-align\s*:\s*(?:left|right)\b|(?:margin|padding)(?:Left|Right)\s*:|^\s*(?:left|right)\s*:/m,
    msg: "physical direction is banned — use logical properties (ms/me/ps/pe/start/end/inset-inline)",
  },
  {
    id: "css-left-right",
    sev: "FAIL",
    re: /[;{]\s*(?:left|right)\s*:\s*[^;}]+/,
    msg: "CSS left/right positioning is banned — use inset-inline-start/end",
    exts: [".css"],
  },
  {
    id: "three-col-grid",
    sev: "FAIL",
    re: /\bgrid-cols-3\b/,
    msg: "three-equal-column grid — the bento tell; restructure or justify",
  },
  {
    id: "text-yellow",
    sev: "FAIL",
    re: /\btext-yellow\b/,
    msg: "yellow is NEVER a text color",
  },
  {
    id: "bg-yellow-unjustified",
    sev: "FAIL",
    re: /\bbg-yellow\b/,
    msg: "yellow fill requires a `brand-lint-allow:` justification on the line (never on a CTA)",
    needsAllow: true,
  },
  {
    id: "color-fn-literal",
    sev: "WARN",
    re: /\b(?:rgba?|hsla?|oklch|oklab)\s*\(/,
    msg: "raw color function — derive from brand.lock tokens instead",
  },
];

const findings = { FAIL: [], WARN: [], ALLOW: [] };

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (EXTS.has(extname(name))) out.push(p);
  }
  return out;
}

function scanFile(file, { distMode = false } = {}) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const ext = extname(file);

  lines.forEach((line, i) => {
    const loc = `${rel}:${i + 1}`;
    const allowed = /brand-lint-allow:\s*(.+?)(?:\*\/|$)/.exec(line);

    // hex allowlist
    for (const m of line.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
      const hex = m[0].toLowerCase();
      if (!ALLOWED_HEX.has(hex)) {
        // The count is DERIVED from the file that was actually read. It was the literal `7` until
        // 2026-08-31, and it stayed 7 through every palette change, because a number typed into a
        // message is not read by anything.
        const f = `${loc}  off-palette color ${m[0]} — only the ${ALLOWED_HEX.size} tokens in design/tokens/tokens.json exist`;
        if (allowed) findings.ALLOW.push(`${f}  (allowed: ${allowed[1].trim()})`);
        else findings[distMode ? "WARN" : "FAIL"].push(f);
      }
    }

    for (const rule of RULES) {
      if (rule.exts && !rule.exts.includes(ext)) continue;
      if (!rule.re.test(line)) continue;
      const f = `${loc}  [${rule.id}] ${rule.msg}\n      ${line.trim().slice(0, 120)}`;
      if (allowed) {
        findings.ALLOW.push(`${loc}  [${rule.id}] allowed: ${allowed[1].trim()}`);
      } else if (rule.needsAllow || rule.sev === "FAIL") {
        findings[distMode ? "WARN" : "FAIL"].push(f);
      } else {
        findings.WARN.push(f);
      }
    }
  });
}

const files = walk(SRC);
files.forEach((f) => scanFile(f));

if (process.argv.includes("--dist")) {
  const distCss = join(ROOT, ".next", "static");
  if (existsSync(distCss)) {
    const cssFiles = walk(distCss).filter((f) => f.endsWith(".css"));
    cssFiles.forEach((f) => scanFile(f, { distMode: true }));
    console.log(`(dist scan: ${cssFiles.length} compiled css files, report-only)`);
  }
}

if (findings.ALLOW.length) {
  console.log(`\n· ${findings.ALLOW.length} justified allowance(s):`);
  findings.ALLOW.forEach((f) => console.log(`  ${f}`));
}
if (findings.WARN.length) {
  console.log(`\n⚠ ${findings.WARN.length} warning(s):`);
  findings.WARN.forEach((f) => console.log(`  ${f}`));
}
if (findings.FAIL.length) {
  console.error(`\n✗ brand-lint: ${findings.FAIL.length} violation(s):`);
  findings.FAIL.forEach((f) => console.error(`  ${f}`));
  process.exit(1);
}
console.log(
  `\n✓ brand-lint: ${files.length} files clean against ${ALLOWED_HEX.size} tokens ` +
  `from ${relative(REPO, TOKENS)} — the Constitution holds`
);
