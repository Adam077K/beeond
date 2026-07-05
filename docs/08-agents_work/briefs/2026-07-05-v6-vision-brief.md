# Beeond Landing v6 — Vision & Build Brief (handoff)

**From:** the Fable-5 v4/v5 designer-engineer session (2026-07-03 → 2026-07-05)
**To:** the next single designer-engineer session (one agent, full ownership, founder in the loop)
**Status:** VISION LOCKED BY FOUNDER IN PRINCIPLE — hero concept pick + section arc confirmation are the two open founder decisions (§8).

---

## 0. Mandatory first hour — no exceptions

1. **Identity:** `/color` + `/name designer-v6-[slug]` at session start.
2. **Read the skills** (`.claude/skills/[name]/SKILL.md`): `high-end-visual-design`, `design-taste-frontend`, `emilkowal-animations`, `web-design-guidelines`, `tailwind-design-system`. Where a skill conflicts with the brand constitution (e.g., it suggests perpetual loops, non-Rubik fonts), **the constitution wins** — log the conflict, don't obey it.
3. **Read the canon:** `apps/web/src/lib/brand.lock.ts` (executable constitution) · `apps/web/BUILD_LOG.md` (all five quality waves + deviations D1–D9) · `.claude/memory/DECISIONS.md` (top 6 entries) · `docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md` (original gates — still binding) · `docs/05-marketing/ART_DIRECTION_PROMPTS.md` (style system) · this brief.
4. **Worktree:** new branch from `main` after the journal-hero branch resolves; never commit to `main`; `.worktrees/` protocol per CLAUDE.md.
5. **Evidence loop:** every visual change is screenshot-verified (Playwright) against intent before moving on. No unverified "done".

---

## 1. The founder's vision, verbatim distillation (2026-07-05)

> "It's too bee. We're trying to show we have advanced, we have the technology, we are modern — but we can support small businesses. … The thing that I like is the drawing style and the very minimalistic drawings — but drawings that have meaning. It has text, and some cool things like a robotic view — transform the bees to agents, agents' names, agents' roles. … Rethink the hero from scratch. Maybe rethink the whole website — each section, what components, what storytelling, what animations — more immersive in the storyline, more modern, but still with the drawing vibe, more like the Anthropic style and design. In the middle section I'm looking for something very designed, very cool, very professional, but still designy, with a vision that represents us. The hive vibe is a cool idea but maybe rethink it — or add more animation, more layers, more development when you scroll."

**Identity to project:** advanced / technological / modern **and** warm / human / supportive of small business. The bee-hive is a *metaphor layer*, never the subject. If a drawing would work on a honey jar, it's wrong. If it argues something about the system we built, it's right.

**The register:** Anthropic-style editorial restraint. Vast whitespace, typography leads, and ONE small meaningful ink drawing per moment that carries the idea. Drawings may contain hand-lettered labels when the labels ARE the meaning.

**Structural reference:** Diamo (screenshot in founder chat, 2026-07-05): light hero → stat strip → long dark immersive feature-scroll block → capability cards → "meet the AI copilot" persona moment → integrations map → testimonials → big typographic closing CTA. Borrow the *arc grammar*, never the aesthetics.

---

## 2. The core visual idea — "bees become agents"

The one drawing idea the founder responded to: **metamorphosis**. Nature's swarm becomes our agent swarm. Probes exist (medium-quality, `apps/web/art-src/`):

| Probe | File | What it argues |
|---|---|---|
| **A — Metamorphosis** | `concept-metamorphosis-*-norm.png` | A dashed flight path; along it a bee transforms step-by-step into a minimal geometric agent glyph; hand-lettered roles beneath: `research · content · distribution · reporting`. Nature → machine, warmth → precision, in one line. |
| **B — Specimen (robotic view)** | `concept-specimen-*-norm.png` | A living ink bee beside the SAME bee redrawn as an exploded engineering schematic with capability call-outs ("seeks/speaks your brand", "works every channel"). We understand the biology AND we built the machine. |
| **C — Layered hive (unprobed)** | — | The hive idea retained as *scroll architecture*, not hero art: layers of the system assemble as you scroll the showpiece section. |

Hero art = A or B (founder pick, §8), refined at high quality with the locked pipeline (§5). The agent glyph that emerges from the metamorphosis becomes a reusable brand element (the "agent mark") across the page.

---

## 3. What is LOCKED (change = founder proposal, never silent)

- 7-token palette. The v5 `gold #B28834` amendment was **rolled back same-day** — yellow underline is the accent again. Gold exists only in git history; do not resurrect without founder words.
- Rubik only, self-hosted subsets; the metric-matched fallback.
- H1 + subhead + CTA copy **verbatim** from `brand.lock.ts` (EN+HE); yellow `u-accent` underline on "match"/"בקצב".
- v4 hero typography/layout (post-revert `e5d83a6`): ink H1, hex-bullet eyebrow, old nav (The swarm / How it works / Founders / FAQ), deferred header CTA. **Only the hero IMAGE (and, per §4, section storytelling) is the redesign surface.**
- Motion doctrine: converge-once-then-rest, zero perpetual loops, named eases (`--ease-settle/swift/exit`), duration ladder, exits ≈0.8× entrances, reduced-motion = rested end-state, JS-off = rested end-state.
- i18n architecture: both languages SSR'd, `html[lang]` picks; RTL must be structurally proven, not bolted on. Hand-lettered text inside raster art is EN-only → HE uses clean variants or code-overlaid real text (v5's counter-flip chip pattern is proven and reusable).
- Gates (all measured, not asserted): brand-lint 0 · tsc/eslint 0 · e2e suite green · axe serious/critical 0 · LH mobile perf ≥90 / a11y ≥95 · CLS <0.02 · **real CDP trace** (Slow-4G + 4× CPU) LCP <2.5s · JS-off DOM parity · no h-scroll 320–1440.
- Process: QA-Lead PASS (cannot be self-issued or overridden) + founder confirmation before ANY merge; session file at `docs/08-agents_work/sessions/`; BUILD_LOG updated per wave; DECISIONS entry for anything affecting others; launch-hold footer until TM clearance.

## 4. What is OPEN (the actual work)

**The storytelling arc** — rebuild the page as one immersive story (components/sections/animations may change, copy themes must stay traceable to POSITIONING.md):

1. **C8 Hero** — v4 text layout + the NEW meaningful drawing (concept A/B). Subtle one-shot choreography; art must not fight the H1.
2. **Stat / proof strip** (Diamo grammar) — pre-launch honesty problem: we have no revenue numbers. Candidates: `11 channels · 1 swarm · 90 days to compound` (process facts). CMO/founder wording gate.
3. **C2 Problem** — "nothing connects": scattered-cells art exists (`nothing-connects-*-norm.png`, accepted). Short, quiet.
4. **THE SHOWPIECE (middle)** — founder wants "very designed, very cool". Direction: dark immersive scroll block (the page's ONE deep-dark moment may move here from final CTA — or stay light; designer's call with critic loop): **"Meet the swarm"** — the agent roster assembles in scroll-developed layers (concept C). Each agent = the agent mark + role + one honest line of what it does. The GEO/keystone story keeps its "locks last" beat. This section replaces/evolves C7's channel-map scrub; channels become *what the agents work*, agents become the heroes. GSAP+ScrollTrigger with the proven sticky+`tl.set({},{},1)` progress pattern; 60fps at 4× CPU throttle; mobile gets the no-pin ledger treatment.
5. **C4 How it works** — 90-day build-line; `build-line-*-norm.png` viable (crop the oversized bees or regenerate bee-less + sprite).
6. **C3 Anti-generic** — `anti-generic v2` art accepted (struck "generic" → underlined "calibrated").
7. **C5 Trust / C6 proof / social empty state** — keep; `vessel` art optional for the empty state.
8. **Founders** — keep (the human layer is the differentiator).
9. **FAQ** — keep as-is (JSON-LD parity is load-bearing).
10. **Final CTA** — `night-page-0-deep.png` (accepted, already mapped to `#0A0A0A`) if the dark moment stays here; if the showpiece goes dark, redesign this beat lighter to avoid two heavy dark blocks.

**Animation architecture:** exactly ONE scroll-driven immersive moment (the showpiece). Everything else: converge-once reveals. That asymmetry is the taste.

## 5. The art pipeline (working, committed — reuse, don't rebuild)

- `apps/web/scripts/generate-art.mjs` — direct gpt-image-1; key from `OPENAI_API_KEY` or `~/.beeond/openai.key` (never print/commit); `--quality`, `--n`, `--transparent`; STYLE_LOCK + DARK_LOCK embedded; concept prompts for A/B live in the session scratchpad — port the winner into the script when picked.
- `scripts/normalize_paper.py` — white-balance paper → ground `#FAF9F5` exactly (light art); affine dark-map for `#0A0A0A` proven inline (night-page) — fold in as `--dark` when first needed.
- `scripts/despecular.py` — hue-aware matte pass for honey gloss.
- **Hard-won rules:** opaque + normalize beats transparent for large pieces (sticker-halo); small elements (bees/icons) as transparent specimen sheets → crop by alpha components/grid; the model ignores "no bees" in empty zones — design a crop window so baked strays never render; pin code overlays to **CV-measured** centroids, never eyeballed; `fetchPriority=high` on art that phones hide kills the perf gate (twice proven) — art loads eager but unprioritized; mobile `sizes` capped to the 1024w candidate.
- Sprite/icon inventory in `public/art/`: 6 bee poses, 6 hand-inked channel icons, v4 hero combs (EN annotated / HE clean), v5 full-bleed comb (unused post-revert — prune at merge or keep for the showpiece).
- Video/motion assets: founder can generate videos from prompts → cut to frames → canvas scrub (pipeline designed in ART_DIRECTION_PROMPTS.md §video, not yet exercised).

## 6. Definition of done (per wave, then per session)

Wave: build → screenshot-verify vs intent → gates (brand-lint/tsc/eslint) → e2e → founder checkpoint on anything visual-directional.
Session end: prod build + LH + real CDP trace + full e2e + design-critic loop (independent) → QA-Lead gate → founder merge word → session file + BUILD_LOG + DECISIONS.

## 7. Repo state at handoff

- Branch `feat/journal-hero` @ `e5d83a6` (pushed): v4 hero live (journal comb art), v5 full-bleed experiment reverted (in history at `becf0e8`), art tooling committed, QA-Lead **PASS exists for v4 scope only** (a78edeb+820e697+2149e45) — any v6 work needs a fresh gate.
- `main` @ `3665c31` (v3 code-drawn site + tooling). The journal-hero branch has NOT merged.
- Dev/prod preview conventions: dev :3000, prod :3010, e2e owns :3001 (kill stale listeners first).
- Accepted-but-unintegrated art in `art-src/` (gitignored): night-page (deep-mapped), anti-generic v2, nothing-connects v2, build-line, cited-answer, vessel, og-backdrop, 404-spot, concept probes A/B.

## 8. Open founder decisions (block only what they touch)

1. **Hero concept: A (metamorphosis) or B (specimen/robotic view)** — or a hybrid (A as hero, B as a section moment).
2. **Showpiece darkness:** dark immersive middle (moves the page's deep moment) vs. light middle + dark final CTA (current).
3. **Stat strip:** include with process-fact numbers, or drop until real client numbers exist.
4. **v5 asset pruning** at merge (unused `hero-bleed`/icon files) — keep for showpiece reuse or delete.

---
*Provenance: founder direction messages 2026-07-04/05 (reference images: ink-honeycomb original, founder hero mock, Diamo full-page); five build waves logged in BUILD_LOG; this brief supersedes the v5 mock as the active design directive.*
