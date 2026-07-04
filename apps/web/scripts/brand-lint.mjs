#!/usr/bin/env node
/**
 * brand-lint — the executable Constitution gate. FAILS the build on:
 *   1. any hex color outside the 8-token allowlist (incl. #000/#fff)
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
 * Usage: node scripts/brand-lint.mjs [--dist]   (--dist also scans .next CSS, report-only)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "src");

const ALLOWED_HEX = new Set([
  "#faf9f5", // ground
  "#141413", // ink
  "#ffdb5b", // yellow
  "#f0eee6", // panel
  "#0a0a0a", // deep
  "#e3ddd5", // hairline
  "#5c5751", // muted
  "#b28834", // gold — v5 founder amendment: watercolor-gold DISPLAY accent (H1 line 2, eyebrow via ink-mix); sampled from the founder's hero mock, deepened to ≥3:1 on ground
]);

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
        const f = `${loc}  off-palette color ${m[0]} — only the 8 brand tokens exist`;
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
console.log(`\n✓ brand-lint: ${files.length} files clean — the Constitution holds`);
