# BUILD_LOG — Beeond landing (feat/landing-fable5)

Single Fable-5 session · started 2026-07-04 · brief: `docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md` (v2, board-hardened)
Reference pack read: `docs/05-marketing/references/` — 12 positives + 4-image NEGATIVE set + REFERENCES.md (17 BORROW/AVOID annotations). Every section gets diffed against the negatives before acceptance.

---

## Deviations & interpretations (running log)

| # | Deviation | Rationale | Gate still honored |
|---|-----------|-----------|-------------------|
| D1 | App scaffolded at `apps/web`, not the repo root | Repo root `package.json` is the GSA agent-kit package; CLAUDE.md's own routing references `apps/web/src/`. Root scaffold would collide with kit files. | Worktree protocol, clean `next build` |
| D2 | 7-token allowlist resolved as: ground, ink, yellow, panel, deep(#0A0A0A), hairline, **muted #5C5751**. Pure white `#FFFFFF` (v3's "Surface") **dropped entirely** | Brief says 7 tokens but enumerates 6; v3 doc lists 8. Muted is load-bearing (all secondary text). Pure white is the least brand-bearing and closest to slop-default; cards use ground/panel + hairline instead | 7-token compiled-CSS audit, "no pure white" spirit |
| D3 | Rubik woff2 sourced from `@fontsource-variable/rubik` npm package (devDep), copied into `public/fonts` | Direct fetch to Google Fonts denied by env permissions; npm registry allowed. Same gstatic-derived subset files, fully self-hosted at runtime | No external font request; unicode-range split intact |
| D4 | Hebrew strings beyond the founder-locked hero set (eyebrow HE, secondary/micro CTA HE, launch-hold HE) are **adaptations, flagged pending CMO/founder review** | Needed for the RTL proof toggle; full HE content is an explicit fast-follow | All copy traceable to POSITIONING (EN); HE hero H1/subhead/primary-CTA are the locked strings verbatim |
| D5 | Tailwind default palette/shadows/animations deleted at `@theme` level (`--color-*: initial` etc.) | Makes the Constitution executable at compile time: `bg-blue-500`, `animate-pulse`, `shadow-lg` are not classes in this app | Brand-lint gate redundancy (belt + suspenders) |

---

## Section rhythm map (written BEFORE coding — §8 directive)

Exactly ONE edge-to-edge content bleed (= C7). One tight/dense section (= anti-generic manifesto). No three consecutive sections share column structure. Two cream-panel beats, one true-black moment.

| # | Section | Container | Column DNA | Vertical padding | Background |
|---|---------|-----------|------------|-----------------|------------|
| 0 | Header | floating, inset | logo · toggle · CTA | — | glass pill on scroll (the ONE glass) |
| 1 | Hero (C8) | inset 1180 | **asym 62/38**, copy-start, swarm-end | ~96 top / ~96 | ground |
| 2 | Problem | inset 1180 | 2-col zig-zag, alternating offset rows | ~128 | ground + ONE panel pull-quote block |
| 3 | **C7 channel-map** | **FULL-BLEED** (the one bleed) | pinned scroll stage, hex lattice | pin ≤250vh | ground + hairline honeycomb |
| 4 | How it works | inset 900 (narrow) | horizontal flight-path, 3 UNEVEN nodes | ~112 | **panel beat 1** |
| 5 | Anti-generic promise | inset 720 (narrowest) | single column, manifesto type | **~72 (the dense beat)** | ground |
| 6 | Proof (C6) | inset 1180 | staggered/stepped editorial panels | ~128 | **panel beat 2** |
| 7 | Founders | inset 1180 | **asym 38/62 — mirror of hero** | ~112 | ground |
| 8 | Trust (C5) | inset 1180 | compact hairline-framed strip | ~64 (short beat) | ground |
| 9 | FAQ | inset 720 | single column, hairline dividers | ~112 | ground |
| 10 | Final CTA + footer | full-width bg, inset content | dark moment, rested hive | ~160 top | **deep #0A0A0A** |

DNA audit: split → zig-zag → bleed-stage → path → single → steps → mirrored-split → strip → single → dark. ✓ no repeats adjacent; padding ladder varies 64–160.

---

## Hero — 3 compositional variants (rationale, no throwaway builds)

**V-A — "Anthropic split, Beeond-ified" (the v3-spec baseline).** Asymmetric ~62/38. Start column: eyebrow (plain Rubik 500 + small yellow hex bullet — NOT a badge pill; the negative set's badge-pill is a slop tell) → locked H1 with line 2 accent word underlined → subhead (max 48ch, muted) → black-pill CTA + text-link secondary + one quiet micro-reassurance line → founder FIG-label strip. End column: one large outline hex on a faint hairline honeycomb field; the swarm rests inside it. Motion = Chapter 1 convergence into that cell. Strength: proven editorial pattern (Anthropic), spec-aligned, H1 center-x lands ~30% (asymmetry gate passes by construction). Risk: the "safe" choice — must earn distinctiveness via type violence + the swarm, not layout novelty.

**V-B — "Type-first, swarm-behind."** No art column: H1 spans ~85% at max clamp, swarm field runs BEHIND the full hero as a faint layer converging to a point in the top-right whitespace. Strength: maximum type drama, most magazine-like. Risk: dot field behind text degrades legibility and contaminates the LCP zone; convergence point lacks a "vessel" (the hex cell) so the motif reads as decoration, not "bees → hive." Weakens the three-chapter story C7 depends on.

**V-C — "Editorial ledger."** Horizontal split: full-width H1 block up top (type owns the fold), below it a 3-zone ledger row: subhead+CTA / founder proof / swarm-in-hex rail cropped at the end edge. Strength: most unusual composition; founders read as a ledger entry (fits "Hive Ledger" C8 name). Risk: fragments the fold into three competing zones; on 390px it stacks into FOUR blocks before the founders appear — buries the "who am I hiring" proof the price point demands; CTA drops below fold on short viewports.

**COMMITTED: V-A, with two V-C grafts** — (1) the founder strip is styled as a designed ledger row (hairline-topped, FIG-labels) not a floating avatar cluster; (2) the H1 is allowed to overhang the column boundary into the art zone by ~1 word at max clamp (breaks the too-clean split every SaaS hero has; Anthropic does a version of this). Written commitment — building this, no hero route experiments.

**Rested end-state designed FIRST (brief §3.12):** the hero ships as a complete static composition — SSR SVG: outline hex cell + rested dot cluster + faint honeycomb — screenshot-approved before ANY motion code. Pre-hydration state = reduced-motion state = JS-off state = the composition itself.

---

## Exceed-the-brief flourish — candidates (decide at keystone build; exactly ONE ships)

- ~~Header hex-"o" fills yellow in sync with keystone lock~~ — REJECTED: introduces a second yellow change in the keystone viewport; kills the moment by its own rule.
- **F1 — "flight line":** a 1px hairline SVG path that draws with scroll from hero→C7 and terminates INTO the anchor cell at the keystone — stitches the three chapters without shared state. Cheap, deterministic, RTL = mirrored path.
- **F2 — keystone "settle dust":** at anchor lock, 5–6 rest dots do one final micro-settle (2–3px spring, one-shot) as if the swarm exhales. Pure parametric reuse, zero new vocabulary.
- Decision logged when C7 keystone is tuned.

---

## Evidence loop ledger (per award section — appended as rounds complete)

*(format: section · round · 1440/390 screenshots · rubric 0–4 across 7 dims · single weakest thing · fix)*

### Hero — Round 0 (rested SSR state, before any motion code)
- Evidence: `build-evidence/hero-r0-1440.png`
- Scores: type-rhythm **2** · distinctiveness **3** · motion n/a · copy **3.5** (occlusion: what/who/next all present in fold)
- **Single weakest thing:** the locked H1 wraps into 4 mushy lines at 88px — all-headline fold, orphan rhythm.
- Fix applied (only that, plus its dependents): deliberate 3-line break ("The AI era moves fast." / "Your presence" / "needs to match.") at 74px max clamp with `lg:whitespace-nowrap` line 1 overhanging into the art zone; header nav underlines removed at rest; header CTA now fades in only after the hero CTA leaves (one CTA per fold); swarm gravity bias depth² → depth³ + 64 dots; ring-2 lattice per-cell deterministic fade instead of ⅓ erosion.

### Hero — Round 1 (fix verified)
- Evidence: `build-evidence/hero-r1-1440.png`, `build-evidence/hero-r1-390.png`
- Scores: type-rhythm **3.5** (violent scale + deliberate rag + overhang) · distinctiveness **3.5** (hex-IA + warm ink + one pointing yellow all present, logo-removed test passes) · copy **3.5** · asymmetry gate: H1 center-x ≈ 30% of viewport ✓
- Mobile 390: 4-line H1 clean, CTA in first viewport, no h-scroll.
- Deviation D6 logged: mobile keeps copy→CTA→art order (v3 wanted H1→art→CTA); CTA-in-fold beats spec order for a conversion page; occlusion test passes text-only.

### Hero — Chapter-1 motion (one-shot converge)
- Evidence: `build-evidence/swarm-f180/420/750/1300/2400.png` (frame-stepped)
- Flight → cluster → rest reads correctly; additive glow during flight only; canvas crossfades to the identical SSR rested frame at ~1.6s and the island goes fully dead (rAF cancelled, zero loops). Reduced-motion / JS-off / deep-link-below-hero: canvas never mounts.
- Spring: brand token (stiffness 110 / damping 18) at 0.62× time-scale + 0–500ms stagger → total ≈ 1.6s = DUR.hero. Round-2 polish deferred to the post-C7 evidence loop (cluster shape at rest slightly "spotty" — candidate weakest-thing).

---

## Motion-budget ledger (filled at gate time)

| Island | JS kb (gz) | INP (4× CPU, 390px) | FPS during scrub |
|--------|-----------|--------------------|------------------|
| hero swarm | — | — | — |
| C7 stage | — | — | — |
