# Handoff → Phase 3: Build the Beeond v7 Website (one Fable-5 session)

*Written by CEO (ceo-1-1783458846), 2026-07-12. Self-contained — the build session needs only this file and what it points to. The founder pastes the PROMPT below into a fresh session (Fable-5 model).*

---

## Context (30 seconds)

The v7 design planning is COMPLETE and founder-locked (Gates 1–3). Strategy, copy, visual direction, design system, wizard UX, and quality gates are all decided and merged to `main`. **Nothing is open for re-litigation.** The one remaining step is yours: build the site, once, from the locked spec.

## Current state

- **The binding hand-off:** `docs/05-marketing/website-v7-design-kit/SPEC.md` — read it FIRST; it points to everything else (design spec, copy deck, brand constraints, strategy brief).
- Live v6 site remains on `main` (`apps/web`) and in production preview — you are replacing its landing experience per the SPEC.
- A concept prototype exists at `docs/05-marketing/website-v7-design-kit/concepts/blueprint-concept/` — **reference only; build from zero, do not port its code.**
- Open founder input: M5 founder-credential paragraphs (copy deck placeholders). If still unfilled when you start, ask the founder for them at session start — they block only §7's copy, not the rest of the build.

## What remains (your scope)

Full main page (8 sections + header/footer/FAQ with JSON-LD) + the Footprint-Audit wizard (lean-real: honest templated reveal, real lead capture, all states, escape hatch). Hebrew default / RTL-primary, full EN parity. One signature device (drawn→built cell: hero → dark showpiece → final-CTA resolve; zero loops). Visuals SVG/code-first; ≤3 generated rasters via the committed pipeline. Critic directives in SPEC §3 are binding build instructions. Definition of done = SPEC §6 gate checklist. Then: independent QA-Lead (Full tier) → founder merge word (Gate 4) → staging first.

---

## THE PROMPT (founder: paste everything below into a fresh Fable-5 session)

```
You are the Phase-3 BUILD session for the Beeond website v7 — the single Fable-5
session that builds the entire site from the locked, founder-approved spec.
Set /color pink and /name designer-v7-blueprint.

THE CONTRACT
- All design-planning decisions are FINAL (founder Gates 1–3). Do not re-litigate
  strategy, copy, direction, fonts, or structure. Your job is world-class execution.
- Read as ONE block, in this order, before any code:
  1. docs/05-marketing/website-v7-design-kit/SPEC.md   ← the binding hand-off
  2. docs/05-marketing/website-v7-design-kit/design-spec/design-spec-v1.md
  3. docs/05-marketing/website-v7-design-kit/copy/copy-deck-v1.md  (copy is VERBATIM)
  4. docs/05-marketing/website-v7-design-kit/04-BRAND-CONSTRAINTS.md + apps/web/src/lib/brand.lock.ts
  5. docs/08-agents_work/briefs/2026-07-08-v7-strategy.md
  Also LOOK at concepts/wow/e1.png + e2.png (the founder-approved visual bar) and
  02-references/speakeasy/speakeasy-FOUNDER-PICK-fullpage.png + 02-references/oriol/.
- Load skills per docs/05-marketing/website-v7-design-kit/03-SKILLS-MANIFEST.md
  "Session C" load order (frontend-dev-guidelines, nextjs-app-router-patterns,
  tailwind-design-system, radix-ui-design-system; then motion/wizard/gate sets).

BUILD RULES
- Fresh git worktree from origin/main (git -C <main-repo> worktree add …), branch
  feat/landing-v7. Build from ZERO — the blueprint-concept prototype is reference
  only, never port its code. Atomic conventional commits.
- Scope: full main page (8 sections + header/footer/FAQ JSON-LD) + the
  Footprint-Audit wizard (lean-real reveal — real and specific, never fake-live;
  real lead capture, no mailto; all states; "talk to the founders" escape hatch).
- Hebrew default, RTL-primary, full EN parity (SSR both, CSS toggle — keep the
  v6 i18n architecture pattern). Display font: Rubik Bold/Black (founder-locked).
- SPEC §3 critic directives are BINDING: hero comb is full-bleed art-as-layout
  (never an illustration island); final CTA cell resolves inside faint drawn
  sibling cells; ONE yellow-filled CTA above the fold; construction strokes
  ~18–20% opacity; dark showpiece comb fills its field.
- Visuals: SVG/code-first. ≤3 generated rasters total via apps/web/scripts/
  generate-art.mjs (gpt-image-1, key in env or ~/.beeond/openai.key) +
  deterministic post-processing (normalize_paper/flatten_paper/despecular).
  Prompts staged in design-spec §7. No lettering in raster. Watch the spend:
  one batch, curate, never regenerate for color.
- If the copy deck's M5 [FOUNDER INPUT NEEDED] slots are still empty, ask the
  founder for the two credential paragraphs at session start.

EVIDENCE LOOP (mandatory, per section)
build → screenshot (Playwright, desktop 1440 + mobile 390, HE + EN) → spawn
design-critic (judges vs concepts/wow/e1.png bar + SPEC) → design-polisher on
NEEDS_WORK → re-critique until PASS. Then test-engineer: e2e (locked H1 verbatim,
JS-off readable, RTL/LTR toggle, no h-scroll ×4 breakpoints, reduced-motion rested,
axe 0 serious/critical, branded 404) + real Lighthouse + CDP LCP → scores.json.

DEFINITION OF DONE (SPEC §6 — all non-negotiable)
LH mobile ≥90/95/100/100 · real LCP <900ms · CLS <0.01 · WCAG AA · RTL+LTR parity
· reduced-motion rested from first paint · JS-off readable · brand-lint clean ·
e2e green · copy verbatim from the deck · zero placeholder UI.

CLOSE-OUT (no merge without ALL of these)
1. Independent QA-Lead spawn, Full tier → PASS required (you cannot override BLOCK).
2. Session file at docs/08-agents_work/sessions/YYYY-MM-DD-designer-v7-blueprint.md
   (frontmatter incl. qa_verdict + tier) + DECISIONS.md entry.
3. STOP and ask the founder for the merge word (Gate 4). Staging deploy first
   (beeond-preview), production only on explicit founder confirmation.
```

---

## Key files (for the humans)

| What | Where |
|------|-------|
| Locked spec (start here) | `docs/05-marketing/website-v7-design-kit/SPEC.md` |
| Copy deck (verbatim) | `…/copy/copy-deck-v1.md` |
| Design system | `…/design-spec/design-spec-v1.md` |
| Visual bar | `…/concepts/wow/e1.png`, `e2.png` |
| Process runbook | `docs/08-agents_work/briefs/2026-07-08-v7-process-runbook.md` |
| Planning close-out | `docs/08-agents_work/sessions/2026-07-09-ceo-v7-design-planning-complete.md` |
