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

## Exceed-the-brief flourish — DECIDED: "the hive tightens"

- ~~Header hex-"o" fills yellow in sync with keystone lock~~ — REJECTED: a second yellow change in the keystone viewport kills the moment by its own rule.
- ~~F1 "flight line" (hero→C7 drawn path)~~ — REJECTED: decoration that risks reading as scroll-jack furniture; the chapters already cohere via parametric identity.
- **SHIPPED — "the hive tightens":** the instant the GEO keystone locks, all 10 ring tiles ease ~2.5px toward the anchor and settle there (scrub-mapped, reversible, `power2.inOut`, 0.05 progress). The anchor doesn't just complete the hive — it visibly pulls it together. This is the thesis (one keystone channel coordinates the whole footprint) expressed in 2.5 pixels. Gates honored: zero loops (one settle, becomes the rested state), transform-only, no new color, keystone scarcity intact.

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

### C7 — Round 0 (scrub live, progress mismapped)
- Evidence: `build-evidence/c7-r0-mismapped.png`
- Bug found by observation: tween positions were authored as progress fractions but GSAP scrub normalizes to timeline duration (~0.56) — everything played at ~half speed, keystone never fired inside the pin.
- Fix: `tl.set({}, {}, 1)` pins timeline duration to exactly 1 → positions ARE progress fractions, and 0.56→1 becomes the assembled-hold half of the pin. Progress instrumented on `[data-c7-root]` (`data-p`) for e2e.

### C7 — Round 1 (mapping exact: requested 0.2/0.38/0.43/0.46/0.5/0.75 → measured identical)
- Evidence: `build-evidence/c7b-0_2.png … c7b-0_75.png` (assembly → hole-in-hive → lock → hold)
- The pre-keystone frame (0.38) is the thesis made visual: the full hive stands with a HOLE at its center until GEO locks it. Keystone at 0.43–0.5: yellow face arrives with ferry dots, pulse fires, only yellow in an ink hive.
- Scores (buyer first): comprehension/sell **3.5** (11 channels + delivery-standard proof lines = the scope IS the map) · C7 award moment **3** · distinctiveness **4** (hex-as-IA at full strength) · motion quality **3.5** (deterministic, reversible, 60fps)
- **Single weakest thing:** the keystone pulse is barely perceptible (0.55 opacity hairline).
- Fix applied: pulse opacity 0.55→0.85, expansion 1.42→1.55, longer fade window (still <400ms at natural scroll; scrub-mapped so fully reversible).

### C7 — acceptance checks (measured)
- **JS-off (1440):** 11/11 proof lines present, assembled hive visible — `build-evidence/c7-jsoff-1440.png`
- **Mobile (390):** 11-row hive ledger, anchor row emphasized, `scrollWidth == clientWidth` (no h-scroll) — `build-evidence/c7-mobile-390.png`
- **Reduced-motion:** scrub never mounts; 260vh runway collapses to one viewport; assembled SSR hive stands.

---

## Motion-budget ledger (measured)

| Island | JS kb (gz) | INP (4× CPU, 390px) | FPS during scrub (4× CPU, 1440) |
|--------|-----------|--------------------|------------------|
| hero swarm (in page bundle; IO+idle-gated start, dies after one-shot) | included in page JS; zero rAF at rest | n/a (no interaction) | one-shot ~1.6s, then dead |
| C7 stage — GSAP+ScrollTrigger dynamic chunk, desktop ≥1024 only | **5.8 kb gz** (14.7 raw) | n/a (no C7 expand — D7) | **avg 16.7ms / worst 17.7ms / 0 frames >33ms over 99 frames = locked 60fps** |
| Real interactions (FAQ open+close, mobile menu open+close) | — | **worst 40ms** (12 events observed, Event Timing API) | — |

## §7 HARD GATES — measured results (artifacts in build-evidence/)

| Gate | Result | Artifact |
|------|--------|----------|
| Mobile Lighthouse perf ≥90 | **97** | `lighthouse-mobile.json` (LH 13.4, emulated Moto G, slow-4G, 4× CPU) |
| Mobile Lighthouse a11y ≥95 | **100** (+ axe: 0 serious/critical, e2e) | same + e2e axe test |
| LCP <2.5s | **0.67s real trace** (CDP slow-4G+4×CPU, 390px); LH lantern estimate 2.6s logged for honesty — simulation pessimism on font-swap chain, real trace is the brief's primary artifact | trace numbers in this table; LH JSON |
| CLS <0.02 (fonts throttled) | **0.0026 real trace / 0 LH** | same |
| INP <200ms on real interaction @4×/390 | **40ms worst** (FAQ + menu) | Event Timing measurement above |
| H1 + all service one-liners in JS-off DOM | **11/11 visible + H1 verbatim** | e2e `JS-off` test + `c7-jsoff-1440.png` |
| Rubik self-hosted/subset, HE via unicode-range only | ✓ latin 35KB + hebrew 9KB, fallback metrics, no external font request | LH network audit |
| Zero off-palette color / no pure black/white | ✓ brand-lint 33 files, Tailwind palette deleted at theme | `pnpm brand-lint` |
| Yellow never text / never CTA bg | ✓ lint rule + 3 justified fill allowances | brand-lint output |
| Converge-once, zero infinite keyframes, exits present at ~0.8× | ✓ (menu + FAQ close at 0.8×; swarm island dies post-shot) | code + e2e |
| :focus-visible only, ring follows radius, inverts on dark | ✓ | globals.css + axe |
| No h-scroll 320/390/768/1440 | ✓ | e2e viewport sweep |
| Asymmetry gate (H1 glyph center vs viewport center) | ✓ (measured on painted glyphs) | e2e |
| No bento / three-equal-column | ✓ lint + design | brand-lint |
| RTL: logo/numerals unmirrored, columns swap, centroid-mirrored swarm | ✓ measured exact numeric mirror | e2e + `rtl-*.png` |
| C5 badge only from real artifact | ✓ scores.json from LH 13.4 run (97/100/2.6s) | `public/scores.json` + `measure-scores.mjs` |
| Launch-hold footer, no fabricated proof/logos/lorem | ✓ | page + POSITIONING trace |
| `next build` clean · tsc clean · eslint clean · e2e green | ✓ **18 passed / 0 failed** | CI-runnable `pnpm test:e2e` |

## Critique personas (recorded, per §6)

**Cold $10k/mo head-of-growth (buyer, first):** "I know what they run (the hive names 11 channels with delivery standards), who I'd be hiring (two named founders with a clear division of labor, above the fold and again in depth), what makes them different (the anti-generic specimen is the first honest AI-agency argument I've seen — they show the slop), and what to do next (one CTA, repeated, low-risk framing). The missing piece is proof I can verify — they say so themselves, which buys them the call. Would I book? At this price I'd take the free audit, yes." → book-the-call: **pass, with the launch-gate caveat the site itself admits.**

**Awwwards juror (second):** "Warm mono-palette held with discipline; the hexagon is load-bearing IA, not wallpaper. The keystone lock earns the scroll-back — the hive standing incomplete until GEO closes it is a real idea, and the tighten-on-lock is the kind of detail panels reward. Type is confident; the H1 overhang is the one compositional risk and it works at 1440. What keeps it from a sure SOTD today: founder cells are placeholders and the middle sections are competent rather than surprising — exactly the triage the build declared." → **award-band on the four flagship moments; honest about the rest.**

## Quality wave 1 (founder directive: "a lot more quality") — evidence

Independent design-critic subagent spawned on the full screenshot set; my own section-by-section pass ran in parallel. Findings fixed, before/after in `build-evidence/`:

| Section | Before | Finding | After |
|---|---|---|---|
| how-it-works | `q-how.png` — flight path STRUCK THROUGH the "Foundation" heading; wave unanchored | P1 broken geometry | `p3-how.png` — one continuous line strung under all three nodes on a shared baseline, sags between, yellow landing dot at 03; editorial stagger moved to the text blocks |
| problem | `q-problem.png` — full-width heading with a dead right zone; invisible hairline bullets | P2 composition | `p2-problem.png` — cost panel rises beside the heading (stepped 2-col), options become a numbered hairline ledger |
| C6 proof | `q-c6.png` — same dead-zone pattern | P2 composition | `p2-c6.png` — method panel top-aligns with the heading; question specimen below-left; numbered enabler rows |
| page-wide | flat digital ground; unrelated section headers | P2 texture/grammar | feTurbulence paper grain (3.2% multiply, fixed layer — perf re-verified 97) + numbered eyebrow grammar 01–07 with hairline dash |
| founders / final | plain placeholder cells; small hive | P3 | cells get their ring-1 lattice neighborhood (`p3-founders.png`); final hive enlarged + more rested bees; C5 badge dates its measurement |
| hero | rest cluster "spotty" (round-2 note) | P3 | 66 dots, 10 edge perchers, steeper gravity (`p2-hero.png`) |

Post-wave gates: LH perf **97** / a11y **100**, TBT 10ms, CLS 0, e2e **18/18**, brand-lint 0/34, mobile h-scroll 0 (`m2-*.png`).

## Quality wave 2 — independent design-critic verdict + remediation

Design-critic subagent verdict on the full screenshot set: **NEEDS_WORK** (4×P1, 5×P2). Triage + outcome:

| Finding | Triage | Resolution |
|---|---|---|
| P1 Mobile menu bleeds hero text | CONFIRMED (my 96% color-mix glass still bled in practice) | Menu is now an **opaque ground surface** (`r3-menu.png` — clean); grain keeps it physical |
| P1 "Foundation" strikethrough | Stale artifact — it was the broken flight path, already rebuilt in wave 1 | Verified resolved (`p3-how.png`) |
| P1 Mobile C7 = generic list, signature geometry lost | CONFIRMED — the deliberate D8 ledger under-served the brand | **Keystone emblem added**: assembled HiveMark (yellow GEO dominant) + caption above the ledger (`r2-c7-mobile.png`); mobile now passes logo-removed recognizability |
| P1 Yarden hero-ledger line dangles mid-sentence | CONFIRMED | Both founder lines rewritten as complete sentences ("the builder of the swarm itself." / "the keeper of the standard it ships to.") |
| P2 Social proof visually empty | CONFIRMED | Empty-state framed as a designed hairline object with yellow-cored hex; section padding tightened (`r2-social.png`) |
| P2 ~200px dead-air before problem/FAQ | CONFIRMED | Problem pt 112→80/96, FAQ pt 96→56/64, social py 80→56/64 — slack cut, ladder variety kept |
| P2 Calibrated voice box lacks hierarchy | CONFIRMED | Yellow start-bar + panel bg + larger bolder type vs deliberately flat slop specimen (`r2-anti.png`) — critic's #3 leverage fix |
| P2 Identical eyebrows read template | PARTIAL — variety yes, yellow everywhere no (accent scarcity) | Hex glyph added to the two yellow-thread sections only (02 The swarm, 05 GEO) |
| P2 Orphan ferry dots pre-keystone | CONFIRMED (stills read as leak) | Ferry windows tightened: never outlive their tile's reveal (`t1 ≤ reveal end`, spread 0.25) |

Post-remediation: build clean · e2e **18/18** · LH **97/100** · brand-lint 0/35 · scores.json refreshed.
Critic's "what's working" (final CTA award-grade, OG card best-in-category, 404 delightful, keystone concept the right centerpiece, desktop logo-removed pass) — preserved untouched.

## QA gate status — CLOSED: PASS

First QA-Lead spawn died on an account session limit; retry ran post-reset on the final state (12 commits, all three quality waves). **Independent verdict: PASS, full tier — 0×P1, 0×P2, 2×P3** (both fixed in the close-out commit: `.playwright-mcp/` runtime artifacts removed + gitignored; scores.json re-derived from the final Lighthouse artifact so timestamps are co-incident). QA confirmed independently: all four mechanical gates, canvas/GSAP lifecycle cleanliness, hydration-safe seeded PRNGs, both `dangerouslySetInnerHTML` sites static-only, scores.json ↔ Lighthouse consistency, FAQ JSON-LD verbatim mirror, D9 gradient deviation rationale upheld, mobile-menu focus flow, decorative-SVG aria discipline. Merged to main with founder confirmation standing.

## Quality wave 3 — founder reference audit → visual-craft act (2026-07-04 evening)

**Founder verdict:** visuals (bees/hives) not at target grade; references supplied: Diamo (motif threaded everywhere + dimensional ending), Anthropic Fable-5 page (specimen artwork composing a glyph), Ramp (density/proof), paper-cut Ocean hero (carved layered depth).

**Audit conclusion (professional-designer lens, dissatisfied by default):** the page had typographic discipline but its visual artifacts were WIREFRAMES — outline hexes + 3px dots read as a technical diagram; the references build grade from *material richness*: depth, layering, density, a crafted centerpiece. Constraint honored: v3 brand lock keeps literal bee illustration at favicon scale (hex-forward), so the grade lever is the COMB itself.

**Act — every hive artifact got a material pass (7 tokens only, layered fills, zero drop shadows):**
| Artifact | Before → After |
|---|---|
| Hero art | outline hex + floating dots → **"the comb under construction"**: main cell with real wall thickness (outer wall/inner face), a HONEY POOL with meniscus shade, surface line and ground-token bubbles; swarm hovers above the surface with a sitter row ON it and rim perchers; attached neighbor cells at three construction states; distant lattice + far cells for atmosphere (`v2-hero.png`) |
| C7 tiles | flat outline stickers → **stacked-paper cells**: hairline sheet peeking beneath each tile (tile lifts OFF its sheet on hover), inner rim = wall thickness, anchor face = honey material (single-hue token-derived gradient, deeper toward the floor) (`v2-c7.png`) |
| Final CTA hive | thin line drawing → **the glowing room**: cells carry faint face fills (built comb in shadow), the keystone emits a real blur-halo glow — the one lit cell; bees perched on walls not floating (`v2-final.png`) |
| Founder cells | flat panel hex → built cell with wall thickness, a small honey pool at the floor, rim bees |
| HiveMark (mobile emblem + dark) | outline → face-filled comb with honey-shaded keystone |

Deviation **D9**: two single-hue gradients (C7 anchor honey; both stops token-derived via color-mix) — the playbook bans gradient *mesh* and gradient *text*; material shading inside the brand yellow is neither. Logged, reversible.
Post-wave gates: e2e **18/18** · LH **97/100** · CLS 0 · brand-lint 0/35.
**Open founder proposal:** if visible bees (beyond dots) are wanted at hero scale, that requires amending brand-lock A1 (bee device is favicon-scale only today) — one line from the founder unlocks it.

## Quality wave 4 — v4 art direction: the Founders' Field Journal hero (2026-07-05)

**Founder unlock:** reference image (ink+watercolor comb, hand-drawn bees, dashed paths, dark keystone cell with bee emblem) + "replace the current visuals… stay in the reference style" + funded direct gpt-image-1 access. A1's favicon-scale bee cap was explicitly lifted for generated art (DECISIONS).

**Pipeline (all deterministic post-gen, brand-as-code):**
1. `scripts/generate-art.mjs` — direct API; STYLE_LOCK hardened against sepia paper, gloss, eyes, oversized bees; `--transparent` mode.
2. `scripts/normalize_paper.py` — per-channel white-balance so the art's paper hits ground `#FAF9F5` **exactly** → the image edge is invisible on-page (no sticker seam, no paper mismatch).
3. `scripts/despecular.py` — hue-aware matte pass (only repaints bright pixels ringed by honey hue; letter counters/empty cells untouched — v1 flood-fill approach damaged the "GEO" O and was rejected on evidence).
4. Layered hero: comb generated WITHOUT bees; 6 bee poses generated once on transparent alpha (`bee-sheet`), cropped by connected-components, composited in code at true field-sketch scale (~half a cell), where the model itself kept drawing storybook-sized bees with eyes.

**Integration (`journal-comb.tsx` + globals):** zero hero JS (old canvas island deleted — TBT 10ms→0–10ms). One `.journal-page` coordinate system for art+bees; desktop crops to the comb spread via pure CSS (`.journal-crop`), mobile shows the full page. EN art = annotated variant (hand-lettered "every channel"/"one swarm"/"GEO" with painted-yellow underline — the artist's `.u-accent`); HE = clean letter-free variant, mirrored by one `html[lang=he] .journal-stage{scaleX(-1)}` (all offsets physical, brand-lint allowance audited). Bees converge once via CSS keyframes (stagger 250–740ms, settle ease); no-JS/reduced-motion base state IS the rested swarm. `loading=lazy` bees; art eager without fetchPriority (below-fold on phones — must not outrank text-LCP fonts).

**Evidence:** `hero-v3-desktop.png`, `hero-v2-he.png`, `hero-v2-mobile-art.png`. Gates: e2e **18/18** · brand-lint **34 clean +1 audited allowance** · LH **95/100/96/100** · CLS **0** · real CDP trace (Slow-4G, 4× CPU): **LCP 732ms / CLS 0.003** (baseline 668ms — +64ms for the art direction). Assets: EN comb 108KB + 47KB/1024w + 27KB/768w; HE 98/37/21KB; bees ~20KB each. `art-src/` raws gitignored; prompts + candidates reproducible via the script.

**Dead code honestly removed:** `swarm.tsx`, `swarm-rested.tsx`, `swarm-data.ts`; locale-toggle swarm-mirroring pruned (art mirrors itself).

## Quality wave 5 — founder mock: the artwork IS the hero (2026-07-05)

**Founder verdict on wave 4:** "this was more like my vision. not just a small image — the main hero statement" + a full mock (full-bleed comb, channel icons+labels INSIDE cells, two-tone gold H1, big bees, always-on header CTA) + instruction to re-read the design/code skills. Skills loaded: high-end-visual-design, design-taste-frontend, emilkowal-animations, web-design-guidelines.

**Constitution amendment (founder-driven):** 8th token `gold #B28834` — the mock's headline gold (#CDA555 sampled) fails WCAG at 2.19:1, so the hue was kept and deepened to 3.08:1 for display text; eyebrow/tagline use an ink-mix at 4.56:1. Yellow remains fill/underline-only; gold is display-text-only. INVARIANTS updated (8-token; LCP wording).

**Architecture:**
- `hero-bleed` art regenerated at mock cell density (regen v2 after v1's cells ran ~40% oversized); stray baked bee paper-patched; despecular matte pass; paper==ground normalization.
- The comb IS the channel map: 6 chips (hand-inked icon sheet, cropped like the bee sheet + REAL bilingual text labels) pinned to **measured** empty-cell centroids (flood-fill CV on the final art — never eyeballed). Crawlable, i18n, crisp at any DPI.
- `.journal-window` clips to the page's right ~62% (the model's insistent left-zone bees never render); left edge melts via mask fade. `.journal-page` = one coordinate system, container-query (cqh) scaling for chips/bees at every viewport. Mobile band shows the same 62% window below the copy.
- RTL: one `scaleX(-1)` on the page; chip inners counter-flip so labels read correctly. HE H1 line-break moved to the natural phrase boundary (3 lines, verbatim text unchanged).
- Header: always-on CTA pill ("Get a free audit"), logo tagline caps ("AI-native growth"), mock nav (How it works / What we do / Results / About us / FAQ → real section ids, `#proof` added).
- Bees: 2 on-comb + 3 free over hero whitespace, one-shot converge (existing keyframes).
- LCP lesson RE-learned: `fetchPriority=high` on art that phones hide dropped perf to 88; removed (93). Mobile `sizes` capped to 1024w.

**Evidence:** `hero-v5-final.png` (vs founder mock), `hero-v5-he2.png` (RTL mirror + counter-flipped labels), `hero-v5-mobile2.png`. Gates: e2e **18/18** (RTL logo-selector updated for the tagline wrapper) · brand-lint **34 clean** · LH **93/100/96/100** · CLS **0** · real CDP trace: **LCP 632ms / CLS 0**. Art 135KB + icons ~13KB each.

## Cross-section fresh-eyes (rhythm drift audit)

Full-page reloads reviewed at 1440 (`build-evidence/full-1440.png`) + 390. DNA sequence: asym-split → zig-zag → full-bleed pin → path-on-panel → narrow-dense → stepped-panels → mirrored-split → hairline-strip → centered-short → narrow-list → dark-bleed. No two adjacent sections share padding/column DNA; the two panel beats (4, 6) are separated by the dense manifesto; the two short beats (C5 strip, social) use opposite alignment grammars (start-aligned row vs centered). Verdict: no redesign required; metronome avoided by construction of the rhythm map.

## §8 craft rubric — final self-scores (0–4)

1. Typographic rhythm **3.5** · 2. Distinctiveness (logo-removed: warm ink + one pointing yellow + hex-IA + converge-once all present) **4** · 3. C7 award moment + keystone **3.5** · 4. Motion quality (per-intent curves, ladder durations, 60fps scrub capture) **3.5** · 5. Copy/voice persuasion (occlusion passes: what/who/next in fold) **3.5** · 6. Cross-section consistency **3** · 7. RTL structural readiness (numeric centroid mirror, measured) **4**
**Mean 3.57 · no dimension <3 · C7 3.5 & distinctiveness 4 ≥3.5 → award band met (self-assessed; design-critic verification recommended at QA).**

## Honest deferrals (launch-gate vs fast-follow)

| Item | Class |
|------|-------|
| Full Hebrew content beyond the locked hero (all sections, hreflang/urls) | fast-follow (sanctioned by brief) |
| Founder credential-dense microlines + editorial photography (placeholders are designed objects) | **launch gate** (founder-side) |
| Real booking link — CTA is `mailto:hello@beeond.ai`; mailbox must be created or href swapped | **launch gate** |
| `Bee⬡nd` logotype refinement (interim v0.9 inline SVG shipped) | founder vector pass |
| Native-Hebrew review on a real device; real mid-range-Android INP | **launch gate** |
| C7 on mobile = ledger, no scrub (D8, floor-protection) | v2 candidate |
| LH lantern LCP reads 2.6s vs 0.67s real trace — re-verify on real field data at launch | monitoring |
| Hero swarm round-3 polish (rest-cluster shape) if design-critic flags it | QA follow-up |

## How to run

```bash
cd apps/web && pnpm install
pnpm dev            # http://localhost:3000
pnpm brand-lint     # constitution gate (zero tolerance)
pnpm lint && pnpm build
pnpm test:e2e       # 18 gates, builds+serves on :3001
node scripts/measure-scores.mjs <lighthouse.json>  # refresh C5 artifact
```

---

# v6 — content-first rebuild (feat/landing-v6, designer-v6-content-first)

Brief: `docs/08-agents_work/briefs/2026-07-05-v6-designer-handoff.md`. Session started 2026-07-05.

**Skill-conflict log (§0.2 — constitution wins, conflicts recorded, not obeyed):**
- `high-end-visual-design` demands non-Rubik "premium fonts" (Geist/Clash Display), heavy glass, banned-shadow aesthetics → Rubik-only + hairline-shadow constitution wins.
- `design-taste-frontend` §4/§9 mandates PERPETUAL micro-interactions and infinite bento loops → converge-once-then-rest doctrine wins, zero loops.
- Both push Framer Motion; repo's proven stack is CSS one-shots + GSAP/ScrollTrigger (desktop dynamic import) → stack unchanged.
- `emilkowal-animations` aligns with the motion doctrine (ease-out defaults, ≤300ms UI, reduced-motion) — adopted where it doesn't touch locked tokens.

## v6 Wave 1 — Hero: art column retired, small gesture (2026-07-05)

§2.1: v4 typography verbatim (locked H1 3-line break, eyebrow, subhead, CTA pair, ledger). JournalComb removed from the hero — sprite bees sat above the fold, which v6 forbids. Replacement: `hero-gesture.tsx`, one inline-SVG ink gesture in the right whitespace — dashed flight line descending into a single wobbled hex cell with a yellow nucleus (movement → structure; seeds the optional One-Line spine). Decorative, desktop-only, `[data-reveal]` one-shot, RTL self-mirror (`html[lang=he] .hero-gesture`). H1 128%-overhang hack removed with its column; LCP stays SSR text; zero hero JS still.
Evidence: `v6-hero-r0-1440.png` · `v6-hero-r0-he.png` · `v6-hero-r0-390.png`. Gates: tsc ✓ eslint ✓ brand-lint 35 clean (3 audited allowances). Founder checkpoint: gesture keep/drop pending.

**Founder checkpoint 1 (2026-07-05):** gesture = ADJUST → r1 ships scattered ink dots falling in along the dashed line and converging into the cell (scatter→structure, the Ch.1 story in still ink), larger + better anchored. Facts strip wording LOCKED: "11 channels · 1 swarm · weeks, not months". Audit scorecard: 5 dimensions APPROVED (AI-answer visibility leads as the keystone gap).

## v6 Wave 2 — Artifact strip: the sample Footprint Audit (2026-07-05)

§2.2, the tangibility slot. New `sections/artifact-strip.tsx` on a panel beat between hero and (interim) problem: a typeset SAMPLE audit sheet — double-hairline frame (border + offset outline = printed object), FOOTPRINT AUDIT header, rotated SAMPLE stamp, 5 founder-approved score rows (10-cell bars; the GEO row is the only yellow: u-accent on its name + yellow bar cells), gap note per row, 11-hex gap map with a yellow-cored keystone gap, "14 quick wins · 6 structural fixes". All sample data lives inside a page stamped SAMPLE — honesty doctrine holds. Beside it: locked facts ledger (11 / 1 / Weeks) + copy traced to POSITIONING §5/CTA-micro ("where your footprint has gaps"). Fully bilingual SSR; RTL fixes: score "2 / 10" wrapped dir=ltr (bidi reordered it), HE meta line re-authored Hebrew-first ("חברת B2B SaaS · כ-15 עובדים").
Evidence: `v6-artifact-1440.png` · `v6-artifact-he.png` · `v6-artifact-390*.png` · hero r1 `v6-hero-r1-1440.png`. Gates: tsc ✓ brand-lint 36 clean.

---

| # | Deviation (appended) | Rationale | Gate still honored |
|---|-----------|-----------|-------------------|
| D6 | Mobile hero order: copy→CTA→art (v3 wanted H1→art→CTA) | CTA in first viewport on a conversion page; occlusion passes text-only | LCP=H1, founders adjacent |
| D7 | C7 tiles show proof lines statically — no `<details>` expand | Proof always visible beats hidden-behind-interaction for GEO/crawlability and the 5-second scan; INP gets measured on FAQ accordion + mobile menu instead | "JS-off shows every proof one-liner" (stronger than the letter of the gate) |
| D8 | C7 mobile = plain-flow hive ledger, no pin/scrub/canvas | Text-in-hex unreadable at 390; pin+canvas is the INP risk on mid-range Android; yellow anchor row keeps the keystone emphasis | Floor-protection authority (§9); all 11 proofs SSR |
