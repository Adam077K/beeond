# Beeond — Design Excellence & Build-Enablement Playbook

**Date:** 2026-07-03
**Author:** Design Excellence Board
**Status:** build-enablement plan

> The single authoritative plan for building the Beeond landing page to Awwwards-grade, on-brand, non-slop craft — and for setting up the autonomous Fable-5 build session so it can *exceed* the brief, not merely satisfy it. This resolves every open persona disagreement with a decisive call. It supersedes ambiguity in the existing brief; where this document and `2026-07-03-fable5-landing-build.md` conflict, apply the CONCRETE BRIEF EDITS (§5) to the brief before the session runs.

---

## 1. What "best grade" concretely means for Beeond

"Best grade" is four things at once, and templates fail the last three even when they pass the first: **award-craft · sells to a B2B buyer · unmistakably Beeond · not slop.** For this brand specifically, the failure mode is not ugliness — it is *checklist-passing slop*: a page that satisfies every named gate (correct tokens, SSR H1 as LCP, no bento, founders in fold, reduced-motion fallback) and is nonetheless aesthetically dead, indistinguishable from every other competent SaaS landing. Because Beeond's entire pitch is "AI that doesn't look generic," a generic-but-pretty page does not merely miss — **it actively refutes the product.** No item on any checklist detects lifelessness; only the iteration loop (§3) does.

### The bar (all four must hold)
- **Award-craft** = one signature idea executed with total conviction; a coherent motion *language* (not a bag of effects); dramatic Rubik-only type hierarchy (violent weight/size contrast, editorial asymmetry, deliberate silence); and the invisible 10% a jury scores — custom easing per intent, exit animations, radius-following focus rings, empty states, the OG card, the 404.
- **Sells** = a distracted $4.5–15k/mo buyer, on mobile, in 5 seconds, with motion off, knows *what Beeond is, why it's different, that a credible human is behind it, and the one next step.* The craft is load-bearing PROOF of the "we run your visibility" pitch — a sub-2.5s, perfectly legible, crawlable page physically embodies the offer. Comprehension is the floor; craft is the ceiling; the order cannot invert.
- **On-brand** = passes the **logo-removed recognition test**: cover the wordmark and it is still unmistakably Beeond via three tells — (1) warm off-white/ink with one *pointing* yellow, (2) the hexagon as **load-bearing information architecture** (not wallpaper), (3) the converge-once-then-rest motion.
- **Not slop** = clears the 14-item anti-slop checklist AND carries zero template tells (centered hero, three equal cards, fade-up-everything, ease-in-out/linear, non-hexagon decorative shapes, bento, gradient mesh, marquee logos).

### The signature idea — ONE continuous motif, THREE chapters, ZERO loops
The hero swarm and the C7 channel-map are **one organism told as one story**, not two animations. This is the single highest-leverage decision in the build and the current brief under-specifies it.

- **Chapter 1 — Scatter → Converge → Rest (hero, load-triggered, one-shot ~1.6s spring).** Honey-yellow dots arrive from the viewport edges and settle onto the hex-"o", then go **completely still** (zero ambient drift, zero floating hexes) until the user reaches C7.
- **Chapter 2 — Release → Build (C7, scroll-scrubbed, deterministic, reversible).** The same visual vocabulary re-activates: the swarm lays each honeycomb cell of the channel-map as the user scrolls.
- **Chapter 3 — Rested Hive (dark final CTA, static payoff).** The fully-assembled hive as the closing frame.

**Decisive call on "one motif":** it means **narrative continuity via parametric identity, NOT stateful/technical continuity.** Same dot radius (~3px), same `#FFDB5B`, same offscreen-baked additive glow sprite (`globalCompositeOperation:'lighter'`), same spring (stiffness ~110, damping ~18) — across **two separate canvas contexts on two separate mount lifecycles.** Do **not** wire the hero swarm directly into the C7 ScrollTrigger or maintain one canvas spanning fold-to-fold — that is a perf disaster and it violates converge-once-then-rest. The "same bees" feeling is parametric, not shared state.

### The one unforgettable moment — THE KEYSTONE (protect it, fund it)
Name it in the brief and spend **~40% of the craft-polish budget** on ~1.5 seconds. As the C7 honeycomb assembles under scroll-scrub — cells revealing by **distance-to-anchor** (outer ring first, building inward, 40–60ms stagger, cap ~6 staggered then the rest together, total ≤500ms) — the **single yellow anchor cell (GEO / AI-search) locks LAST as the keystone that completes the hive**, with a spring overshoot-and-settle and one hairline pulse that fades under 400ms. The yellow fill is the *only* color change in the viewport at that instant; everything else is ink and cream. That is the frame people screenshot and share, and it is the exact moment the thesis — *one swarm, one coordinated system, GEO is the keystone of your whole footprint* — becomes legible without a word. Dilute it with a second yellow anywhere in that viewport and it disappears.

### Disagreements — resolved calls
- **Three.js vs Canvas-2D → Canvas-2D wins.** The brief's "GSAP and/or Three.js welcome" contradicts `HERO_CONCEPT_EXPLORATION §4` ("No GSAP/Three.js in v1"). Resolved: **GSAP + ScrollTrigger + Canvas-2D is the default and required first implementation.** Three.js/R3F is effectively banned unless prototype-proven ≥90 mobile Lighthouse *before* integration. OGL (~9kb) is the only permitted WebGL ceiling, also gated on a profiled ≥90. A visibility-agency site that loads slow on a Moto G is the most credible possible self-refutation; Canvas-2D is also purer in code and RTL-trivial.
- **"One organism" scope → build C7 standalone first, stitch continuity second.** Aesthetically the motif is one story, but attempting integrated hero↔C7 state in a single session multiplies risk on the two hardest sections at once. Build C7 as a complete, profiled, award-grade standalone scroll-scrubbed assembly FIRST; then add the hero→C7 narrative continuity (parametric identity) as a deliberate second pass. This ships the vision without a missed gate.
- **Variations gate → describe, don't build throwaway heroes.** For an autonomous agent, building 2–3 throwaway hero routes is anchoring bias that burns context (the agent picks the most complex, then post-hoc justifies). Instead: the model **writes 3 compositional variants as structured rationale paragraphs, commits to one in writing, and builds it.** The *one* sanctioned prototype detour is for **motion physics** (swarm + C7 scrub) tuned in isolation — that is where craft is genuinely won.
- **Photography → launch gate, not build gate.** The founders have already deferred photography. The build's job is to design the hex-cell placeholder as a *finished, intentional brand object* (ink-outline hex, initials in Rubik 700, full FIG-label) that reads as "this is the system," never "photo TBD." Real photography + credential bios + one hard proof signal + the measured C5 badge are a **separate launch gate** tracked as founder-side work (§6).
- **C5 "we grade ourselves" badge → truthful, business-framed, or dropped.** A hard-coded aspirational Lighthouse number is a caught lie in front of the exact skeptical buyer who will open DevTools. The badge value renders ONLY from a real build-time Lighthouse artifact (`public/scores.json`). If the measured score is below the branded threshold, **fix the site or drop the badge** — an aspirational number is a conversion liability, not an asset. Reframe from a self-issued "Lighthouse 95" certificate (a dev credential that reads insecure at this price point) to a restrained, methodology-linked build-integrity line in business-outcome language.
- **Category comprehension → mandatory eyebrow, brand-voiced.** The locked H1 ("The AI era moves fast. Your presence needs to match.") never names the category. A brand-voiced category eyebrow directly above it is mandatory and must pass the 5-second occlusion test — but it must sound like Beeond, not an AngelList descriptor. Keep it ≤5 words; final wording founder-approved.

---

## 2. The curated reference set (screenshot these; feed the model)

**How this is used:** the founders (not the agent) commit **12–18 annotated PNG screenshots** to `docs/05-marketing/references/` with a `REFERENCES.md` index BEFORE the session (§3, §6). Each filename encodes intent (`hero_anthropic_borrow-restraint-warmth.png`, `ANTI_purple-gradient-3card.png`). `REFERENCES.md` maps each image to **BORROW** (one specific thing) / **AVOID** (one thing) / **APPLIES-TO** (which Beeond section). Include the **NEGATIVE set** — 3–4 generic AI-SaaS templates labeled *"the slop this brand exists to reject — diff against this before every section."* Negative references prevent mean-regression more reliably than positive ones. Refero MCP is the in-session gap-filler (search `editorial B2B agency`, `warm monochrome hero`, `scroll assembly` — never `hexagon`/`honeycomb`, which surface web3/crypto slop).

Ranked (1 = highest priority to screenshot and study):

| # | Reference | Section | Steal this |
|---|-----------|---------|-----------|
| 1 | **Anthropic** — anthropic.com | Global palette + C8 hero | The palette twin: warm off-white ground, near-black ink, one restrained accent, editorial type doing the work with no decoration. Proof that restraint + warmth reads *premium*, not empty, and never cool-SaaS-blue. |
| 1 | **Linear** — linear.app | Global motion discipline + dark final CTA | Restraint that still sells to a technical buyer; how little motion, how deliberate each move; dark closing moment used as scarcity. Match the *rhythm* and inspect computed `transition` values — not the dark/purple palette. |
| 1 | **Family** — family.co | Swarm convergence + the keystone lock | The gold standard for spring-physics choreography: motion that feels physical, weighted, authored, with overshoot-and-settle. This is the quality bar for the hero converge and the keystone — study easing, not visual style. |
| 1 | **Emil Kowalski** — emilkowal.ski | Motion token file + easing doctrine | The doctrine to encode into the motion-token file: asymmetric enter/exit easing, exits faster than entrances, why most transitions are ~150–200ms not 300ms, spring feel, reduced-motion done right. (Source of the starred `emilkowal-animations` skill.) |
| 1 | **NEGATIVE SET** — generic AI-SaaS templates (harvest 3–4 via godly.website / Refero) | Whole build (anti-reference) | Purple/blue gradient-mesh, centered hero, three-equal-card bento, Inter/Geist, "Book a demo." Labeled explicitly as the slop to diff against before every section. The model's statistical prior IS these; naming and picturing them is the strongest intervention against regression. |
| 2 | **basement.studio** — basement.studio | C7 scroll spine + typographic voice | Fearless big-type editorial and GSAP ScrollTrigger craft with performance discipline — scrubbed where it should scrub, triggered where it should trigger, never scroll-jacked. The "agency proving itself through its own site" energy. |
| 2 | **Rauno Freiberg** — rauno.me/craft | Micro-interactions (FAQ, focus, cursor, optical alignment) | The living catalog of the 10% juries reward: radius-following focus rings, optical alignment, hover/press precision, keyboard-perfect components. The exact detail layer that separates SOTD from competent. |
| 2 | **Stripe** — stripe.com | Section rhythm + warm elevation + comprehension | "Beauty serves clarity" at scale: every section advances the sell, offer comprehensible in seconds, warm-tinted (never flat-gray) elevation, single-accent discipline. |
| 2 | **Igloo Inc** — igloo.inc | C7 award-moment choreography (with perf caution) | Ceiling reference for scroll-choreographed "assembly" storytelling — how a build-up sustains attention. **CAUTION: it is a multi-MB Three.js perf anti-pattern.** Take the choreography, reject the weight; deliver the feeling at 1/10th the cost. |
| 3 | **Lusion** — lusion.co | C7 assembling geometry | How elements build/converge under scrub with reversible, buttery choreography. Study the choreography of assembly, then deliberately under-build the payload to hold the perf gates. |
| 3 | **Resend** — resend.com | C6 proof block + testimonial empty-state | A B2B/dev brand that is fast, editorial, single-accent, crafted — and states proof honestly without fake logos. Models "the craft is the proof" and the "we're selective" empty-state. |
| 3 | **Mercury** — mercury.com | Founders/trust strip (C5/founders) | Warm, editorial, high-consideration B2B: trust signals for an expensive, trust-sensitive purchase; restrained motion that reads premium not empty. |
| 3 | **Ramp** — ramp.com | B2B conversion + price-anchor + non-blue accent | Warm-neutral ground + single non-blue accent that SELLS to numbers-driven buyers: proof stacked early, disciplined single-CTA hierarchy, self-qualification without a pricing card. |
| 3 | **Clay** — clay.com | C7 as value-stack | Makes an abstract "coordinated system" legible and desirable through a scroll story that never sacrifices comprehension — the frame for C7 as a price-justification engine a fast-scanner still "gets." |
| 4 | **Fey** — fey.com | Dark final CTA (quiet craft) | Extreme craft in a quiet, dark, restrained register — proof that "not loud" can be award-grade. Antidote to the assumption that award-grade needs a big WebGL flex. |
| 4 | **GSAP ScrollTrigger** — gsap.com/docs/v3/Plugins/ScrollTrigger (+ Codrops for particle/flight-path technique) | C7 mechanism | Canonical pin + scrub + batch patterns; `scrub:true` for deterministic reversible timelines; `ScrollTrigger.batch` for staggered reveals. Technique, not taste. |

---

## 3. Autonomy & tooling setup

### 3.1 Tools / MCPs — grant, exclude, why
**GRANT:**
- **Playwright MCP** (`mcp__playwright__*`, already approved) — the self-verification instrument: multi-viewport screenshots, `prefers-reduced-motion` emulation, CPU-throttle (4–6×) **motion capture** (record + frame-step the swarm, C7 scrub, hover/press), INP measurement via the Performance API, axe injection, mobile-throttled Lighthouse via CDP, and the JS-off crawl check.
- **Refero MCP** (`mcp__refero__*`) — pre-approve the read tools so the session doesn't stall on prompts. In-session live reference DB to fill gaps in the static pack. Query editorial/warm/scroll terms, never hexagon/honeycomb.
- **WebFetch + WebSearch** — pull **version-correct** GSAP ScrollTrigger / Lenis / OGL / Next 16 / `next/font` / satori(@vercel/og) APIs. Motion APIs changed recently; do not let the model code from stale memory (hallucinated library APIs are the #1 cause of broken motion code). Also to fetch live reference sites' rendered output.

**EXCLUDE (state explicitly so the model doesn't reach under deadline):**
- **Stitch, Pencil, Figma-generate** for the build — generative-UI MCPs pull output toward templated screens; a direct slop vector for a "not-a-template" brand. Figma / @vercel/og allowed ONLY to produce the static OG card.
- **RunPod / GPU image-gen / any AI 3D/HDRI/texture generation** — this is a flat, procedural, code-driven brand. Use code-driven assets: SVG `feTurbulence` for warm paper grain, Canvas-2D for the swarm, procedural SVG for the hex grid, satori for the OG image. On-brand, RTL-safe, zero raster slop.
- **claude-in-chrome / computer-use** — Playwright headless covers all verification; fewer tools = smaller failure surface.

**Library allowlist:** APPROVED = GSAP + ScrollTrigger, Canvas-2D, native View Transitions API (for the EN↔HE toggle), satori/@vercel/og (OG card only). GATED (require prototype-proven ≥90 mobile before use) = OGL, Lenis (only if measured INP <200ms on emulated Moto G4 @4× CPU with the C7 spine active — otherwise native scroll, which is smooth enough with ScrollTrigger scrub and zero-weight). BANNED without founder proposal = Three.js/R3F, Spline, Lottie, any perpetual-loop particle engine. Hard hero JS budget: **custom JS < 15kb above the fold.**

### 3.2 How references are fed
Founders commit the reference pack + `REFERENCES.md` before the session (orchestration pre-condition — NOT a §0 agent task; if the agent builds the pack it burns 10–20 turns before a line of award code). Brief §0 instruction: *"Before building each award-priority section, look at its 2–3 mapped reference screenshots and the negative set. Borrow the ONE noted thing; do not copy layout."*

### 3.3 Latitude vs guardrails — free within the system, locked on the invariants
Give MAXIMUM freedom over **HOW** and ZERO freedom over a short list of **anti-slop invariants**. Autonomy without that spine produces a page that exceeds the brief in effort and fails it in taste.

**LOCKED (the Constitution — a wall, encoded as executable code, not prose):**
1. The 7-token palette + ~90/10 ratio. 2. Rubik-only, self-hosted + subset (Latin+Hebrew). 3. Yellow = fill/highlight/underline ONLY — never body text, never CTA background. 4. Swarm converges ONCE then rests — zero perpetual loops. 5. `Bee⬡nd` hex-"o" logotype, no bee mascot in headers. 6. The locked H1 copy, verbatim. 7. No bento-grid-of-services. 8. LCP = the hero H1 in SSR HTML. 9. All copy traceable to POSITIONING (no invented claims). 10. The mobile perf/a11y gates.

**OPEN (its call — encouraged to exceed us):** exact section order/count, the C7 interaction mechanic, composition, easing curves, the surprise moment, micro-interactions, and which approved libraries it reaches for. It MAY reorder, merge, or add a section if the narrative or the sell wins.

### 3.4 The exceed-the-brief charter (on the record)
Add to the brief verbatim:

> **Charter of Autonomy.** You are invited to EXCEED this brief — invent ONE flourish we did not specify (concentrated on the keystone moment), add or reorder sections, swap techniques, use an approved tool we didn't name — if it makes the site more award-grade AND more persuasive to a B2B buyer. Two conditions: (1) never touch a Constitution invariant; (2) log every deviation in `BUILD_LOG.md` with a one-line rationale and which gate it still honors. **Exceeding** means an invented micro-detail on the keystone, a novel section transition, a sharper line of copy than POSITIONING supplied. It does **not** mean a second accent color, a Three.js flex, or a fourth CTA. If you believe a locked invariant genuinely hurts the outcome, **STOP and write a one-paragraph founder proposal** — do not silently drift. Suppressed ambition is this brief's ceiling; unlogged ambition is unaccountable. Log, then go beyond.

### 3.5 The build → screenshot → self-critique → polish loop (evidence-mandatory)
A text instruction to "iterate" is not an iteration; without a forcing function the model narrates polish it did not perform. **Evidence is the gate, not the instruction.**

For each award-priority section (**hero, C7, founders, final CTA**):
1. Build. 2. Playwright screenshot at **1440 + 390**. 3. Score each rubric dimension **0–4**. 4. Write the single weakest thing as one sentence. 5. Fix ONLY that. 6. Re-screenshot. 7. Paste before/after screenshots + numeric scores into `BUILD_LOG.md`.
**A section is not done until every dimension ≥3 and the screenshots are present. A claimed iteration with no pasted screenshot did not happen.** Minimum 2 rounds on hero/C7/keystone/final CTA.

The loop must observe **motion and keyboard**, not stills alone — the craft layer is invisible to a static screenshot. Record the hero convergence + C7 scrub + hover/press under 4–6× CPU throttle and frame-step the timing.

Two critique personas, **buyer FIRST then juror** (buyer-first ensures craft serves the pitch from the start): (a) cold $10k/mo head-of-growth — *"who am I hiring, would I book the call?"*; (b) Awwwards juror — *"does this earn a scroll-back?"* Record both verdicts in `BUILD_LOG.md`.

**Cross-section fresh-eyes pass** after all sections exist: reload the full page top-to-bottom at 1440 + 390 and critique **rhythm drift** — any two sections sharing identical padding/column DNA get one redesigned. Metronomic sameness across sections is the real AI tell that a per-section loop misses.

### 3.6 Process discipline for a long single session
- **Motion-token file + brand.lock.ts + reference pack are the FIRST three artifacts, before any component** — front-loaded into the model's context at max cache-hit efficiency, and they create enforcement that doesn't depend on remembering prose 6,000 tokens later.
- **`BUILD_LOG.md` is created as §0 step 2** and maintained throughout — home for deviations+rationale, per-section rubric scores, before/after screenshots, Lighthouse/axe JSON, RTL screenshots, and the exceed-the-brief invention with its defense. Return it as a deliverable.
- **Skills load on demand — 2–3 per section at the point of building it. Do NOT preload the starred set** (9 SKILL.md reads = 18–36k tokens competing with the reference pack and the actual work).
- **Triage sequencing is a hard rule:** do not write a single line of any secondary section until **hero + C7 are at rubric ≥3 with Playwright screenshots in `BUILD_LOG.md`.** Context exhaustion across a 9-section build is the most predictable quality threat; sequencing the award sections first protects them.
- **`BUILD_STATE.md` checkpoints at ~60% and ~80% estimated context** (sections complete + current scores, in-progress, one open issue each, current Lighthouse number) — the only structural defense against a context-exhausted partial ship. Do **not** `/compact` mid-build (it erases the visual memory that prevents cross-section drift); the checkpoint file is the insurance instead.

### 3.7 Model / effort
Run **Fable 5 (`claude-fable-5`) at maximum thinking/effort**, single fresh `/clear`'d session, **1M context, generous maxTurns.** This is the ONE build where you do not cost-optimize turns — award craft lives in the iteration loops. Load the 5 docs + reference pack + 4 starred design skills as ONE upfront cached block.

---

## 4. Evaluation rubric (scoreable — the output must pass)

### 4.1 HARD GATES (binary — any fail = not done, no numeric claim accepted without its artifact)
- Mobile Lighthouse **performance ≥90**, **a11y ≥95** (mobile-throttled JSON pasted, not desktop, not estimated).
- **LCP <2.5s** (perf trace, not just Lighthouse estimate), **CLS <0.02** (measured with fonts network-throttled).
- **INP <200ms** on a REAL interaction (C7 expand + accordion) under 4× CPU throttle at 390px.
- H1 + every service one-liner present in the **JS-off DOM** (crawl check).
- **Rubik self-hosted + subset**, `size-adjust`/ascent-override fallback metrics applied and CLS verified; **no external font request** (no `next/font/google`, no `fonts.googleapis.com`).
- **Zero color outside the 7-token allowlist** (compiled-CSS grep). No `#000000`, no blue/purple/cyan hue, no gradient mesh, no drop-shadow beyond the hairline, no glassmorphism except the one header pill.
- **Yellow never on body text, never CTA background.**
- Motion converges once + `prefers-reduced-motion` rested from first paint; **zero `@keyframes … infinite`**, zero `transition: all`, zero raw `ease-in-out`/`linear` values.
- **No bento-grid-of-services**; hero H1 **center-x NOT within 10% of viewport center** at 1440 (asymmetry gate).
- No horizontal scroll at 320 / 390 / 768 / 1440; zero console errors / failed requests.
- **Exit animations present** (accordion close, mobile menu close) at ~0.8× their entrance duration; `:focus-visible` only, ring follows border-radius, inverts on dark/yellow.
- All physical `left/right/ml/mr` absent (RTL lint); locked HE hero + C7 render in Playwright with logo/numerals unmirrored, columns swapped.
- **C5 badge value drawn only from a real measured build artifact** (or the badge is dropped).
- Launch-hold footer note present; every claim traceable to POSITIONING; no fabricated logos/testimonials/lorem.
- `next build` clean; zero TypeScript errors; lint clean; small Playwright e2e passes.

### 4.2 SCORED 0–4 (award band = mean ≥3.3, no dimension <3, and **C7 + distinctiveness ≥3.5**)
1. **Typographic rhythm** — dramatic weight/size contrast, optical left-spine truing, deliberate silence.
2. **Distinctiveness** — passes the logo-removed recognizability test (3 tells present).
3. **The C7 award moment** — earns a scroll-back; the keystone is genuinely screenshot-worthy.
4. **Motion quality** — hand-tuned per-intent easing vs library default; durations scale with travel distance; observed in motion capture, not stills.
5. **Copy/voice persuasion** — cold-buyer would-book-a-call; 5-second occlusion test (what/who/next) passes.
6. **Cross-section consistency** — no two sections share identical rhythm DNA.
7. **RTL structural readiness** — mirrored motion paths from mirrored centroids, not a CSS flip.

---

## 5. Concrete brief edits (apply to `2026-07-03-fable5-landing-build.md` before the session)

1. **§0 — add "Reference pack (required read)":** point to `docs/05-marketing/references/` + `REFERENCES.md`. Instruct: look at each award section's 2–3 mapped screenshots + the negative set before building it; borrow the ONE noted thing, do not copy layout. **List the exact MCP grants and explicit exclusions** (grant Playwright + Refero + WebFetch/WebSearch; exclude Stitch/Pencil/Figma-generate/RunPod/chrome/computer-use; code-driven assets only).
2. **§0 — skills load on demand:** "Load exactly 2–3 skills per major section at the point of building it. Do NOT preload the starred set."
3. **§0 step 2 — create `BUILD_LOG.md`** and maintain it throughout (deviations+rationale, per-section rubric scores, before/after screenshots, Lighthouse/axe JSON, RTL shots). Return it as a deliverable. Add `BUILD_STATE.md` checkpoints at ~60%/80% context.
4. **§2 / new §2.5 — "Brand as executable code, before any component":** ship a committed `brand.lock.ts` + Tailwind theme where the only yellow token is a fill/highlight token (no `text-yellow`/`cta-yellow` token exists), ink is `#141413` (no `#000`), Rubik is the only registered font. Add a **`brand-lint` grep gate** that FAILS the build on any hex outside the 7-token allowlist, any Google-Fonts URL, any `transition: all`, any raw `ease-in-out`/`linear`, any `@keyframes … infinite`, any physical `left/right/ml/mr`, any three-equal-column service grid. Run to zero violations before any acceptance gate.
5. **§2 — motion-token file authored FIRST:** named curves per intent (`--ease-settle` cubic-bezier(0.16,1,0.3,1) entrances; `--ease-swift` ~150–200ms hovers; `--ease-exit` ~120–150ms, always faster than its entrance; spring stiffness ~110 / damping ~18 for swarm + CTA arrow) and a 6-step duration ladder scaled by travel distance (120/180/240/400/640/1600ms). Ban `transition: all` and any uniform global duration.
6. **§2 — the Bee⬡nd logotype is a versioned inline-SVG component, NOT a Unicode hexagon:** aspect ratio locked to Rubik 700 cap-height, stroke-weight variants for header/OG/favicon, +4–6% optical-size vs a round "o", color-scheme variants (ink-on-ground, ground-on-ink, yellow-fill). Resolve before the session.
7. **§2 — the yellow underline is a hand-tuned `background-image` bar (or clipped span) with `box-decoration-break: clone`, thickness ~0.09em, ~0.12em below baseline, terminals matched to Rubik — NOT `text-decoration: underline`.** Present in static CSS at paint-zero. Add: "Hierarchy must be dramatic — Rubik-only leaves nowhere to hide timid type." Use `text-wrap: balance` on headings, `text-wrap: pretty` on body, manual H1 break, hanging-punctuation to true the optical left spine; verify H1 line-height 1.0–1.05 at clamp min AND max with the specced tracking.
8. **§1 — mandatory category eyebrow** above the locked H1 (brand-voiced, ≤5 words, names the category; final wording founder-approved) + subhead carrying explicit what/who/how. Add a codified **5-second occlusion test** to §6 as a HARD gate (screenshot hero, occlude below-fold, answer what/who/next).
9. **§1 — soft self-qualification signal** in prose (founders section, not a pricing card, not the hero) — e.g. "Built for founders who move fast and spend seriously on growth."
10. **§3 — REWRITE motion to mandate continuity and name the keystone:** "The hero swarm and the C7 map are ONE motif told as THREE chapters — scatter→converge→rest (hero, one-shot), release→build (C7, scroll-scrubbed), rested hive (dark CTA). Continuity is **parametric identity** (same dot size/color/glow/spring across two separate canvas contexts), NOT shared state; after converge-and-rest the swarm is DEAD until C7. The unforgettable moment is the **KEYSTONE**: the single yellow GEO/AI-search anchor cell locks LAST with overshoot-and-settle + one hairline pulse; cells reveal by distance-to-anchor (outer→inner, 40–60ms stagger, ≤500ms total). Spend ~40% of the polish budget here."
11. **§3 — library discipline:** replace "GSAP and/or Three.js welcome" with the allowlist (§3.1 above). C7 MUST be scroll-**scrubbed** (deterministic, reversible), never autoplay. Two-layer C7: decorative canvas sits BEHIND real SSR `<details>` hex tiles; JS-off must leave the complete honeycomb content + every proof one-liner (make "JS-off shows the full built hive" a Playwright acceptance shot). Build C7 SVG/Canvas-2D standalone and profile it BEFORE stitching hero continuity. Add a **motion-budget ledger** (kb JS per island, measured INP, FPS during scrub) as a required return artifact. No scroll-jacking; pin ≤200–300% viewport height with the assembled state visible for the last ~50% of the pin.
12. **§3 — design the reduced-motion / SSR rested end-state FIRST** and screenshot-approve it as its own composition before writing any motion code (in App Router SSR, the pre-hydration state IS the reduced-motion state — this is architecturally required for LCP/CLS, not just a11y).
13. **§3 — one sanctioned prototype detour** (the `prototype` skill): tune the swarm + C7 scrub physics in isolation, profiled on Playwright-emulated Moto G4 @4× CPU, then integrate. No throwaway HERO variations — instead write 3 compositional variants as rationale paragraphs, commit to one, build it.
14. **§3.1 — add the "Charter of Autonomy"** (§3.4 verbatim) and a LOCKED-vs-OPEN latitude table (§3.3).
15. **§6 — evidence-mandatory self-critique loop** (§3.5): per award section, build→screenshot 1440+390→score 0–4→fix weakest→re-screenshot→paste evidence; ≥2 rounds; not done until every dim ≥3. Add motion-capture under CPU throttle, the cross-section fresh-eyes pass, and the two critique personas (buyer first, then juror).
16. **§6 — RTL is proven, not claimed:** render locked HE hero + C7 in Playwright, screenshot both, assert logo/numerals unmirrored and columns swapped; mirror the swarm flight-path bezier control points from mirrored centroid coordinates (not a CSS `dir` flip); validate stroke-dashoffset draw-on direction in the mirrored layout.
17. **§7 — Rubik/CLS hardening:** ban `next/font/google`; commit self-hosted woff2 Latin+Hebrew subsets; load Hebrew subset via `unicode-range` only (must NOT load in EN-default); measure actual Rubik metrics, apply ascent/descent/line-gap overrides, verify CLS <0.02 with fonts network-throttled.
18. **§7/§8 — embed the §4 rubric** (binary hard gates + scored 0–4 thresholds) so "done" is measured, not vibed. Add the asymmetry gate, the color-token audit, and a **section-rhythm directive** (explicit rhythm map before coding: vary vertical padding, alternate inset vs full-bleed, exactly one edge-to-edge bleed = C7 and one tight/dense section, forbid three consecutive sections sharing column structure).
19. **§8 — 10%-craft checklist:** designed radius-following focus rings; FAQ hex `+`↔`×` morph both directions; the anchor tile's hover differs from outline tiles (inner-glow, not lift — it is already "on"); interactive-hive cursor state; designed empty states; branded 404; a real satori/@vercel/og OG card (reversed Bee⬡nd wordmark, category line, one hex cell — not an auto-screenshot); designed founder hex-placeholder; designed launch-hold footer line (Rubik 300, ~11px, "Launching 2026 — trademark clearance in progress").
20. **§7 — C5 badge honesty rule:** value renders only from a real build-time Lighthouse artifact (`public/scores.json` consumed by a Server Component); if measured below threshold, fix the site or drop the badge; reframe in business-outcome / methodology-linked language, never a self-issued "Lighthouse 95" certificate.
21. **§9 — triage sequencing as a hard rule:** no line of any secondary section until hero + C7 are at rubric ≥3 with screenshots in `BUILD_LOG.md`. If running long, cut DEPTH on secondary sections, never correctness or an invariant. Four award-grade sections beat ten competent ones.

---

## 6. Founder to-provide (before the session)

1. **Reference pack** — 12–18 annotated PNGs in `docs/05-marketing/references/` + `REFERENCES.md` (BORROW/AVOID/APPLIES-TO), INCLUDING the 3–4-image negative set. Highest-leverage pre-session action; founders' work, not the agent's.
2. **The versioned Bee⬡nd logotype** as an inline-SVG component (header/OG/favicon variants, optical-size adjustment, color-scheme variants) — resolve before the build so no screenshot ships a broken mark.
3. **Confirm the Rubik Hebrew woff2 subset** exists in the repo and covers every glyph in the locked HE H1 string (§0 pre-flight; fail fast if missing).
4. **The category-eyebrow wording** (brand-voiced, ≤5 words, names the category) — approve the exact string.
5. **Credential-dense founder microlines** (specific accomplishments, not "AI systems" / "growth") — the best TRUE text available now; restraint has nowhere to hide weak copy.
6. **Approve the tool grants** (Refero MCP read tools pre-approved; WebFetch/WebSearch enabled) and the exclusions.
7. **Confirm model/effort settings** — Fable 5 at max thinking, fresh `/clear`'d session, 1M context, generous maxTurns.
8. **LAUNCH-GATE work stream (separate from the build gate, tracked independently):** real editorial founder photography · one hard non-testimonial proof signal (a real audit artifact / methodology demonstration / verifiable result) · verified credential bios · native-Hebrew RTL review on a real device · the measured C5 badge score. The build produces a beautiful *staging demo*; these convert real $10k/mo buyers. Do NOT let "build complete" be mistaken for "launch ready."

---

## 7. Risks & preempts

| Risk | Preempt |
|------|---------|
| **Checklist-passing slop** (the meta-risk): passes every gate, aesthetically dead, indistinguishable from any SaaS landing — actively refutes the product. | Mandatory evidence-gated build→critique→rebuild loop (§3.5) + cross-section fresh-eyes pass + two critique personas. No checklist detects lifelessness; only the loop does. |
| **Regression to the training prior** (centered hero, purple/blue gradient, Inter, three-card bento, "Book a demo"). | Executable Constitution (brand.lock.ts + brand-lint) + NEGATIVE reference set labeled as the slop to reject + the asymmetry gate (H1 center-x not within 10% of center). |
| **Three.js tanks mobile Lighthouse** — self-refuting for a visibility pitch. | Canvas-2D is the required first implementation; Three.js banned unless prototype-proven ≥90 mobile first; hard hero JS budget <15kb; heavy libs dynamically imported + IntersectionObserver-mounted below the fold. |
| **Motion fractures into two disconnected effects** (hero swarm + generic "yellow-fills-a-chart"). | One-motif / three-chapter / parametric-identity spec + named+protected keystone + 40% polish budget on ~1.5s. |
| **The self-critique loop collapses to one pass** — the model narrates polish it didn't do. | Evidence is the gate: before/after screenshots + numeric scores pasted into `BUILD_LOG.md`; a claimed iteration with no screenshot did not happen; not done until every dim ≥3. |
| **Craft is invisible to stills** (uniform 300ms, no exit animations, color-only hovers, default underline). | Motion-token file enforced by lint; exit animations + 5-states as binary gates; self-verify via CPU-throttled motion capture + keyboard, not screenshots alone. |
| **Context exhaustion / cross-section rhythm drift** in a long single session. | Triage sequencing (hero+C7 first to ≥3), `BUILD_STATE.md` checkpoints at 60/80%, no `/compact`, skills on demand, fresh-eyes rhythm pass. |
| **C5 badge lies or reads insecure** — a caught overstatement in front of the exact buyer. | Value from real build artifact only; fix-or-drop below threshold; business-outcome/methodology framing, not a self-issued certificate. |
| **Trust vacuum** — beautiful staging demo the orchestration mistakes for launch-ready; placeholders, no proof, no price anchor. | Separate launch gate (§6.8); design every placeholder as a finished intentional brand object; soft self-qualification signal in prose. |
| **RTL shipped as "ready" but broken** — mirrored motion paths, flipped logo/numerals, physical margins. | Prove RTL in Playwright (screenshot HE hero + C7); mirror bezier control points from mirrored centroids; RTL lint bans physical margins; native-Hebrew review on the launch gate. |
| **Rubik font-swap CLS** on the LCP element. | Ban `next/font/google`; self-hosted subset woff2; Hebrew via `unicode-range` only; measured `size-adjust`/ascent overrides; verify CLS <0.02 fonts-throttled. |
| **Scope collapse** — all 9 sections at 70%. | Hard triage: hero + C7 + founders + final CTA to award depth; rest solid-but-simple; cut depth not correctness. |
| **Over-reach on WebGL to chase the award.** | Igloo Inc studied as a cautionary perf anti-pattern; unilateral floor-protection authority to drop C7 to the CSS-only staggered hex-fill (still beautiful, RTL-trivial) if ≥90 mobile is ever at risk. |

---

*Prepared by the Design Excellence Board as the build-enablement plan. The site remains launch-held pending trademark clearance; this governs an internal staging build.*
