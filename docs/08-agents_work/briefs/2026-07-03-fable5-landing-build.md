# BUILD BRIEF v2 — Beeond landing page (awwwards-grade) · single Fable-5 session

> **v2 — board-hardened.** Incorporates the 21 edits from `docs/05-marketing/DESIGN_EXCELLENCE_PLAYBOOK.md`. **Paste everything below the line into a fresh Claude Code session running Fable 5 (`claude-fable-5`) at max thinking, `/clear`'d, 1M context, generous maxTurns, in the Beeond repo.** Self-contained.
>
> **Founder pre-conditions (do BEFORE starting the session — see playbook §6):** (1) commit the reference pack — `docs/05-marketing/references/` already holds 12 captured PNGs + `REFERENCES.md`; **add BORROW/AVOID/APPLIES-TO annotations and a 3-4-image NEGATIVE set** (generic AI-SaaS templates, labeled as the slop to reject); (2) resolve the versioned `Bee⬡nd` inline-SVG logotype; (3) confirm the Rubik Hebrew woff2 subset covers the locked HE H1; (4) approve the category-eyebrow wording; (5) supply credential-dense founder microlines; (6) pre-approve Refero MCP read tools + WebFetch/WebSearch. Standing: brand is **launch-held** (internal staging build), founder photography deferred (hex-cell placeholders).

---

You are a **world-class product designer + creative front-end engineer** in ONE session. Build the Beeond landing page to **Awwwards-winning craft** — on-brand, that sells, not slop — then **prove it with Playwright**. You write the code yourself. Zero placeholders, zero TODOs, all states.

**The bar (all four must hold — templates fail the last three):** award-craft · sells to a B2B buyer · unmistakably Beeond · not slop. The real enemy is **checklist-passing slop** — a page that passes every gate yet is aesthetically dead. Because Beeond's pitch is "AI that doesn't look generic," generic-but-pretty *refutes the product*. No checklist catches lifelessness — only the evidence-mandatory iteration loop (§6) does.

## §0 — Read first, tools, process setup

**Read (load as ONE upfront cached block):** `docs/05-marketing/DESIGN_EXCELLENCE_PLAYBOOK.md` (governs; on conflict it wins) · `docs/05-marketing/BRAND_AND_LANDING_DESIGN.md` (v3 system) · `docs/05-marketing/POSITIONING.md` (copy — every claim traces here) · `docs/04-features/OFFER_SPEC.md` §3 (C7 channel clusters) · `docs/05-marketing/HERO_CONCEPT_EXPLORATION.md` (§5 anti-slop checklist) · `.claude/memory/DECISIONS.md` (2026-07-03).

**Reference pack (required):** before building each award section, open its 2-3 mapped screenshots in `docs/05-marketing/references/` (+ `REFERENCES.md`) **and the negative set**. Borrow the ONE noted thing — never copy layout. Diff every section against the negative set.

**MCP grants:** Playwright (`mcp__playwright__*`) · Refero (`mcp__refero__*`; query `editorial B2B agency`, `warm monochrome hero`, `scroll assembly` — never `hexagon`/`honeycomb`) · WebFetch + WebSearch (pull **version-correct** GSAP/ScrollTrigger/Lenis/OGL/Next 16/`next/font`/@vercel/og APIs — do not code motion from memory).
**EXCLUDED (do not reach for these):** Stitch, Pencil, Figma-generate (templated-screen slop vector); RunPod / any GPU image / 3D / HDRI / texture gen (code-driven assets only); claude-in-chrome / computer-use. Figma / @vercel/og allowed ONLY to emit the static OG card.

**Skills — load 2-3 per section at the point of building it. Do NOT preload** (9 SKILL reads = 18-36k wasted tokens). Highest value: `design-taste-frontend`, `frontend-design`, `high-end-visual-design`, `ui-typography`, `emilkowal-animations`, `12-principles-of-animation`, `wcag-audit-patterns`, `playwright-skill`, `nextjs-app-router-patterns`, `tailwind-design-system`.

**Process artifacts — create these FIRST, before any component:** ① the **motion-token file** (§2), ② **`brand.lock.ts` + the `brand-lint` gate** (§2), ③ note the reference pack is read. Then create **`BUILD_LOG.md`** (deviations+rationale, per-section rubric scores, before/after screenshots, Lighthouse/axe JSON, RTL shots — return as a deliverable) and checkpoint to **`BUILD_STATE.md`** at ~60% and ~80% context. **Do NOT `/compact` mid-build** (it erases the visual memory that prevents cross-section drift).

## §1 — What to build

A bilingual-ready landing **one-pager** for **Beeond** — an AI-native done-for-you marketing/growth agency running a B2B company's "whole digital footprint as one coordinated swarm." Buyers: B2B/SaaS founders & heads of growth ($4.5-15k/mo). Two founders (Adam = AI systems, Yarden Morgan = growth) are the proof.

**Scope:** build **English fully**, architecture **RTL/i18n-ready** (§5); wire the locked HE hero strings behind a toggle to prove RTL. Full HE content is a fast-follow — don't let it eat the session.

**Sections (the locked layered combination — NOT a flat template):**
1. **Hero (C8)** — restrained, fast, editorial, **asymmetric** (H1 center-x NOT within 10% of viewport center). **H1 is real SSR text and IS the LCP.** A **mandatory brand-voiced category eyebrow — "Done-for-you growth, AI-native"** (founder-approved) sits above the locked H1: **"The AI era moves fast. Your presence needs to match."** (2nd line accented; one key word yellow-underlined per §2). Subhead carries explicit what/who/how. Primary CTA "Get a free footprint audit" (black pill). **Founders surfaced immediately** (hex-cell avatar placeholders w/ initials, credential FIG-label — NO photos). Signature motion = Chapter 1 (§3).
2. **Channel-map (C7)** — the mid-page scroll spine + the award moment (§3). The owned honeycomb assembles into one hive from the ~8-12 OFFER_SPEC clusters. Each cell's one-line proof is **real SSR DOM text**.
3. **How it works** — 3-step path (Foundation → Content Engine → Amplification), flight-path line draws on scroll.
4. **Anti-generic promise** — manifesto beat; before/after (generic vs Beeond-calibrated) frame.
5. **Proof (C6)** — answer-engine "become the cited answer," framed as *demonstrating method* (editorial reinterpretation — **never a literal ChatGPT/Perplexity screenshot**). "We're selective" testimonial empty-state (no fake logos).
6. **Founders** — deeper treatment; designed hex placeholders, credential FIG-labels, pull-quotes. **Soft self-qualification** line here (not a pricing card): e.g. "Built for founders who move fast and spend seriously on growth."
7. **Trust badge (C5)** — build-time "we grade ourselves": renders **only from a real measured `public/scores.json` artifact**; if below threshold, fix the site or **drop the badge**. Business-outcome/methodology framing — never a self-issued "Lighthouse 95" certificate.
8. **FAQ** — accordion, hex `+`↔`×` morph (both directions).
9. **Final CTA + footer (dark moment)** — Chapter 3 rested hive; "Book a footprint call"; footer launch-hold line (Rubik 300, ~11px, "Launching 2026 — trademark clearance in progress").

Nail **hero · C7 · founders · final CTA** to award depth; build the rest solid-but-simpler. Copy from POSITIONING — invent no claims; use its empty-state framings.

## §2 — Brand as executable code (before any component)

**`brand.lock.ts` + Tailwind theme** — the ONLY tokens that exist:
`ground #FAF9F5` · `ink #141413` (no `#000`) · `yellow #FFDB5B` **as a fill/highlight token only — no `text-yellow`/`cta-yellow` token may exist** · `panel #F0EEE6` · optional `true-black` deep-moment · `hairline #E3DDD5` · CTA = black pill (`ink` fill, `ground` text). ~90/10 ink-and-ground to yellow. **Rubik the only registered font.**

**`brand-lint` grep gate — FAILS the build on:** any hex outside the 7-token allowlist · any Google-Fonts URL / `next/font/google` · `transition: all` · raw `ease-in-out`/`linear` easing · `@keyframes … infinite` · physical `left/right/ml/mr` · a three-equal-column service grid. **Run to zero before any acceptance gate.**

**Motion-token file (authored FIRST):** named curves per intent — `--ease-settle` `cubic-bezier(0.16,1,0.3,1)` (entrances) · `--ease-swift` ~150-200ms (hovers) · `--ease-exit` ~120-150ms (**always faster than its entrance**) · spring `stiffness ~110 / damping ~18` (swarm + CTA arrow). A **6-step duration ladder scaled by travel distance**: 120/180/240/400/640/1600ms. Ban `transition: all` and any uniform global duration.

**Logotype:** `Bee⬡nd` is a **versioned inline-SVG component**, NOT a Unicode hexagon — aspect ratio locked to Rubik 700 cap-height, +4-6% optical size vs a round "o", stroke variants for header/OG/favicon, color-scheme variants. (Founder resolves pre-session; if absent, build a clean interim and flag.)

**Yellow underline:** a hand-tuned `background-image` bar (or clipped span) with `box-decoration-break: clone`, thickness ~0.09em, ~0.12em below baseline, terminals matched to Rubik — **NOT `text-decoration: underline`**. Present in static CSS at paint-zero (survives JS-off + reduced-motion).

**Type hierarchy must be dramatic** (Rubik-only hides nothing): violent weight/size contrast, editorial asymmetry, deliberate silence. `text-wrap: balance` on headings, `pretty` on body, manual H1 break, `hanging-punctuation` to true the optical left spine. Verify H1 `line-height` 1.0-1.05 at clamp min AND max with the specced tracking.

## §3 — Motion: one motif, three chapters, the keystone

**The hero swarm and C7 are ONE motif told as THREE chapters — zero perpetual loops:**
- **Ch.1 Scatter→Converge→Rest** (hero, load-triggered, one-shot ~1.6s spring): yellow dots arrive from viewport edges, settle onto the hex-"o", then go **completely still** until the user reaches C7.
- **Ch.2 Release→Build** (C7, **scroll-scrubbed**, deterministic, reversible): the same vocabulary lays each honeycomb cell as the user scrolls.
- **Ch.3 Rested Hive** (dark final CTA, static payoff).

**Continuity = parametric identity, NOT shared state:** same dot radius (~3px), same `#FFDB5B`, same offscreen-baked additive glow (`globalCompositeOperation:'lighter'`), same spring — across **two separate canvas contexts / mount lifecycles**. Do NOT wire the hero swarm into the C7 ScrollTrigger or span one canvas fold-to-fold.

**THE KEYSTONE (name it, fund ~40% of polish budget on ~1.5s):** as C7 assembles under scrub — cells revealing **by distance-to-anchor** (outer ring inward, 40-60ms stagger, cap ~6 staggered then the rest, ≤500ms total) — the **single yellow GEO/AI-search anchor cell locks LAST** with a spring overshoot-and-settle + one hairline pulse fading <400ms. Yellow is the **only** color change in that viewport at that instant. A second yellow anywhere kills it.

**Library allowlist:** APPROVED = GSAP + ScrollTrigger + Canvas-2D + native View Transitions (EN↔HE toggle) + satori/@vercel/og (OG card only). GATED (require prototype-proven ≥90 mobile first) = OGL (~9kb ceiling), Lenis (only if measured INP <200ms on emulated Moto G4 @4× CPU with C7 active — else native scroll). **BANNED without a founder proposal** = Three.js/R3F, Spline, Lottie, any perpetual-loop engine. **Hero custom JS < 15kb above the fold.**

**C7 is two-layer:** decorative Canvas-2D/SVG sits BEHIND real SSR `<details>` hex tiles; **JS-off shows the full built hive + every proof one-liner** (a Playwright acceptance shot). Scroll-**scrubbed**, never autoplay; no scroll-jacking; pin ≤200-300% viewport height with the assembled state visible for the last ~50% of the pin. **Build C7 standalone & profile it BEFORE stitching hero continuity.** Return a **motion-budget ledger** (kb JS/island, measured INP, FPS during scrub).

**Reduced-motion / SSR rested end-state is designed FIRST** and screenshot-approved as its own composition before any motion code (in App Router SSR the pre-hydration state IS the reduced-motion state — architecturally required for LCP/CLS).

**One sanctioned prototype detour** (the `prototype` skill): tune swarm + C7 scrub physics in isolation, profiled on emulated Moto G4 @4× CPU, then integrate. **No throwaway HERO routes** — write 3 compositional variants as rationale paragraphs, commit to one in writing, build it.

**Charter of Autonomy (honor verbatim):**
> You are invited to EXCEED this brief — invent ONE flourish we did not specify (concentrated on the keystone), add/reorder/merge sections, use an approved tool we didn't name — if it makes the site more award-grade AND more persuasive to a B2B buyer. Two conditions: (1) never touch a Constitution invariant (below); (2) log every deviation in `BUILD_LOG.md` with a one-line rationale and the gate it still honors. Exceeding = an invented micro-detail on the keystone, a novel transition, a sharper line than POSITIONING supplied. It is NOT a second accent color, a Three.js flex, or a fourth CTA. If a locked invariant genuinely hurts the outcome, STOP and write a one-paragraph founder proposal — do not silently drift.

**LOCKED (Constitution — encoded in brand.lock/brand-lint, a wall):** (1) 7-token palette + 90/10 ratio; (2) Rubik-only self-hosted+subset; (3) yellow fill/highlight/underline only; (4) converge-once-then-rest, zero loops; (5) `Bee⬡nd` hex-"o", no bee mascot in headers; (6) locked H1 verbatim; (7) no bento-grid-of-services; (8) LCP = hero H1 in SSR; (9) all copy traces to POSITIONING; (10) the mobile perf/a11y gates.
**OPEN (your call — exceed us):** section order/count, the C7 mechanic, composition, easing curves, the surprise moment, micro-interactions, which approved libs.

## §4 — Stack
Next.js 16 (App Router) · React 19 (Server Components; hydrate islands only — C7 + interactive reveals) · TypeScript strict · Tailwind (brand.lock tokens as CSS vars/theme) · self-hosted Rubik. GSAP/ScrollTrigger + Canvas-2D as dynamic imports, IntersectionObserver-mounted below the fold. No UI-kit defaults left unstyled.

## §5 — Bilingual / RTL (proven, not claimed)
CSS logical properties everywhere (`padding-inline`, `margin-inline`, `inset-inline`) — no physical `left/right/ml/mr`. Latin words, numerals, logo never mirror. Ship EN; toggle reveals the locked HE hero. **Prove RTL in Playwright:** screenshot HE hero + C7, assert logo/numerals unmirrored + columns swapped; **mirror swarm flight-path bezier control points from mirrored centroid coordinates** (not a CSS `dir` flip); validate stroke-dashoffset draw direction in the mirror.

## §6 — Self-verify (evidence-mandatory; this IS "check your work")
Use the Playwright MCP. **For each award section (hero, C7, founders, final CTA):** 1) build → 2) screenshot 1440 + 390 → 3) score each rubric dimension 0-4 → 4) write the single weakest thing as one sentence → 5) fix ONLY that → 6) re-screenshot → 7) **paste before/after screenshots + numeric scores into `BUILD_LOG.md`.** Not done until every dimension ≥3. **A claimed iteration with no pasted screenshot did not happen.** Min 2 rounds on hero/C7/keystone/final CTA.
- **Observe motion + keyboard, not stills:** record hero convergence + C7 scrub + hover/press under 4-6× CPU throttle and frame-step the timing.
- **Two critique personas, buyer FIRST then juror:** (a) cold $10k/mo head-of-growth — "who am I hiring, would I book the call?"; (b) Awwwards juror — "does this earn a scroll-back?" Record both in `BUILD_LOG.md`.
- **Cross-section fresh-eyes pass** after all sections exist: reload full page 1440+390, critique **rhythm drift** — any two sections sharing padding/column DNA, redesign one. Metronomic sameness is the AI tell a per-section loop misses.
- **5-second occlusion test (HARD gate):** screenshot hero, occlude below-fold — a stranger must answer what/who/next.

## §7 — Hard gates + tests (no numeric claim without its artifact)
`next build` clean · zero TS errors · lint clean · small Playwright e2e passes. Plus:
- Mobile Lighthouse **perf ≥90 / a11y ≥95** (mobile-throttled JSON pasted) · **LCP <2.5s** (perf trace) · **CLS <0.02** (fonts network-throttled) · **INP <200ms** on a real interaction (C7 expand + accordion) @4× CPU / 390px.
- H1 + every service one-liner in the **JS-off DOM**.
- **Rubik self-hosted + subset**, Hebrew via `unicode-range` only (must NOT load in EN-default), measured ascent/descent/line-gap overrides, CLS verified fonts-throttled. **Ban `next/font/google` / `fonts.googleapis.com`.**
- `brand-lint` = zero violations · zero color outside the 7 tokens · yellow never body text / never CTA bg · no `#000`, no blue/purple, no gradient mesh, no glassmorphism except the one header pill.
- Converge-once + reduced-motion rested from first paint · zero `@keyframes … infinite` · **exit animations present** (accordion/menu close) at ~0.8× entrance · `:focus-visible` only, ring follows border-radius, inverts on dark/yellow.
- No h-scroll at 320/390/768/1440 · zero console errors · **asymmetry gate** (H1 center-x not within 10% of center) · **no bento** · RTL lint (no physical margins) · **C5 badge from real artifact or dropped** · launch-hold footer present · no fabricated logos/testimonials/lorem.

## §8 — Craft rubric (scored 0-4; award band = mean ≥3.3, no dim <3, C7 + distinctiveness ≥3.5)
1. Typographic rhythm (dramatic contrast, optical left-spine, silence). 2. Distinctiveness (logo-removed recognizability: warm-ink+one-pointing-yellow / hexagon-as-IA / converge-once). 3. The C7 award moment + keystone screenshot-worthy. 4. Motion quality (per-intent easing vs default; durations scale with travel; judged in motion capture). 5. Copy/voice persuasion (would-book-a-call; occlusion test). 6. Cross-section consistency (no two sections share rhythm DNA). 7. RTL structural readiness (mirrored motion from mirrored centroids).
**Section-rhythm directive (before coding):** write a rhythm map — vary vertical padding, alternate inset vs full-bleed, exactly ONE edge-to-edge bleed (= C7) and one tight/dense section; forbid three consecutive sections sharing column structure.
**10%-craft checklist:** radius-following focus rings · FAQ `+`↔`×` morph both ways · the anchor tile's hover differs from outline tiles (inner-glow, not lift — it's already "on") · interactive-hive cursor state · designed empty states · branded 404 · a real satori/@vercel/og OG card (reversed `Bee⬡nd`, category line, one hex cell — not an auto-screenshot) · designed founder hex-placeholder · designed launch-hold footer line.

## §9 — Workflow, triage, deliverable
Work in a **git worktree off `main`** (`git -C <main-root> worktree add <root>/.worktrees/landing-fable5 -b feat/landing-fable5`). Atomic conventional commits. **Do NOT merge to main** — a QA-Lead PASS + founder confirmation is required first. Put the app at the repo web root (check layout; scaffold if none).
**Triage sequencing (hard rule):** write NO line of any secondary section until **hero + C7 are at rubric ≥3 with screenshots in `BUILD_LOG.md`.** If running long, cut DEPTH on secondary sections — never correctness or an invariant. Four award-grade sections beat ten competent ones. You hold floor-protection authority: if ≥90 mobile is ever at risk, drop C7 to the CSS-only staggered hex-fill (still beautiful, RTL-trivial).
**Return:** branch/worktree path · files created · `BUILD_LOG.md` (with the exceed-the-brief invention + its defense) · the motion-budget ledger · Playwright screenshots (desktop+mobile+RTL) + Lighthouse/axe JSON · which §7 hard gates + §8 scores pass · honest deferrals (esp. full Hebrew) · how to run locally (install && dev).
**Definition of done:** builds clean; §7 hard gates all pass with artifacts; §8 award band met; evidence-mandatory loop done with pasted screenshots (≥2 rounds on hero/C7); real SSR copy from POSITIONING; hero + C7 keystone + founders + final CTA genuinely award-grade in motion capture, not just stills; nothing fake; no founder photos; launch-hold footer present.

Now build.
