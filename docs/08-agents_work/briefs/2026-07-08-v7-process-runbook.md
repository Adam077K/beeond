# Beeond Website v7 — Design-Planning & Build Process (Macro Runbook)

> **Status:** APPROVED by founder 2026-07-08. This is the macro process the agent team + build session follow to plan and build the v7 site. It is NOT the design itself — each phase's content is produced inside that phase, gated by the founder. CEO orchestrates; CEO does not write the content. One-off for this reboot, structured to generalize into a reusable playbook later.

## Context

Beeond is rebooting its marketing site to Speakeasy-caliber craft: **clean visual slate**, cream+dark+yellow, **Hebrew-first**, hero CTA opens a **Footprint-Audit wizard**. v6 is live on `beeond-preview.vercel.app`. An earlier pass overstepped into producing concept boards + seed copy — those are **non-binding scratch**; the process below regenerates them properly at the right time.

## Locked decisions (founder grill, 2026-07-08)

| # | Decision | Choice |
|---|----------|--------|
| 1 | Backbone sequence | **Strategy → Design → Build** |
| 2 | Research base | **Desk research + flagged persona assumptions** (no customer interviews) |
| 3 | Copy timing | **Message locked in Strategy; copy written in Design** (words + art co-evolve) |
| 4 | Direction pick | **Moodboards + written proposals first → founder picks → build the one** |
| 5 | Build model | **One Fable-5 session builds it all** + helper agents |
| 6 | Visuals | **Image-gen-led** (OpenAI, brand-post-processed, perf-protected) |
| 7 | Reusability | **One-off now, generalizable later** |
| 8 | Founder gates | **4 approve-and-proceed** |
| 9 | v1 scope | **Full main page + lean-real wizard** (templated audit reveal + real lead capture; live agent-scan deferred) |

## The process at a glance

```
 PHASE 0            PHASE 1              PHASE 2                         PHASE 3
 Inputs      →      Strategy      →      Design                  →       Build            →   Ship
 (gathered)         (desk research       (moodboards→PICK→build-out       (1 Fable-5
                     + message +          concept + copy + critic/polish)  session + helpers)
                     structure)
                        │ GATE 1             │ GATE 2      │ GATE 3            │ QA-Lead PASS
                     message+structure    direction     locked spec        │ GATE 4 merge/ship
```

Founder touches exactly 4 points; agents run autonomously between them.

---

## Phase 0 — Inputs (already gathered)

- **Valid inputs (keep):** reference library `docs/05-marketing/website-v7-design-kit/02-references/` (incl. **Speakeasy founder-pick** + `NOTES.md`); skills manifest (`03-SKILLS-MANIFEST.md`); brand constraints (`04-BRAND-CONSTRAINTS.md` — 7-token palette, Rubik/Hebrew, quality gates); strategy docs (`docs/01-foundation/FOUNDING_BRIEF.md`, `docs/05-marketing/POSITIONING.md`); live token/gate source `apps/web/src/lib/brand.lock.ts`.
- **Non-binding scratch (regenerated properly by the process):** `05-COPY-STRATEGY.md` seed copy, `01-BRIEF.md §5` visual directions, `concepts/concept-boards.html` + `_moodboard/`. Illustration only, not decisions.

## Phase 1 — Strategy  →  GATE 1

**Objective:** lock the *argument, message hierarchy, site structure/IA, wizard flow structure*. **Not** final copy.
**Chair:** CMO (+ CPO), CEO-supervised. **Model:** Opus. **Workers:** research-lead → researcher(s).
**Activities (macro):**
1. Desk research (no interviews): competitor **messaging teardown** ("what everyone says" → so we don't), ICP/market, 2–3 premium **RTL/Hebrew** references (fills the reference gap).
2. **Assumption-flagged personas** → populate `USER-INSIGHTS.md` (satisfies CMO's mechanical hard gate).
3. Positioning check vs `POSITIONING.md` → **message hierarchy** → **anti-generic differentiation** → **section arc** (~7–9 sections) → **Footprint-Audit wizard flow** structure.
**Skills:** `competitive-landscape`, `marketing-psychology`, `page-cro`, `copywriting` (strategy only).
**Output:** `docs/08-agents_work/briefs/2026-07-08-v7-strategy.md` — hierarchy + IA + wizard flow + flagged personas + differentiation + anti-generic checklist.
**GATE 1 (founder):** approve message + structure.

## Phase 2 — Design  →  GATE 2 (direction) + GATE 3 (spec)

**Objective:** pick a visual direction, then build it out *with copy* into a locked spec.
**Chair:** design-lead (under CPO); **CMO writes the copy inside this phase.** **Model:** Opus.
**Step 2a — Direction exploration → GATE 2.** Reference **moodboards** (captured library + additions) + **2–3 written direction proposals**, anchored on the Speakeasy pick, spanning the gravitas↔warmth dial; each names type/color/motion intent. Founder **picks one**.
**Step 2b — Build-out → GATE 3.** design-lead + product-designer build the chosen direction (hero + key sections); **CMO writes the copy** (HE-first, EN parity, less-is-more) alongside. Validate via **`design-orchestration`** (brainstorm → `multi-agent-brainstorming` → APPROVED/REVISE). Run **design-critic → design-polisher** loop to the craft bar.
**Output — LOCKED DESIGN SPEC** (`docs/08-agents_work/briefs/2026-07-XX-v7-design-spec.md`, new template): chosen direction + concept; full copy deck (HE+EN); section-by-section spec (message, layout, motion beat, **art asset list + generation prompts**); wizard spec (screens/fields/all states/lead-capture); component inventory; build gate checklist; founder sign-offs.
**GATE 3 (founder):** lock the spec.

## Phase 3 — Build  →  QA-Lead PASS  →  GATE 4  →  Ship

**Executor:** ONE **Fable-5** session in an isolated **git worktree**. **Helpers:** design-critic, design-polisher, test-engineer.
**Scope:** full main page (all sections, HE+EN, motion, gates) + **lean-real wizard** (templated/heuristic audit reveal — real + specific, not faked — with real lead capture; live agent-scan deferred).
**Visuals (image-gen-led):** author prompts → OpenAI `gpt-image-1` (`scripts/generate-art.mjs`) → **deterministic brand post-process** (`normalize_paper`/`flatten_paper`/`despecular`) → **optimize** (webp, lazy, sized, no load-bearing text, alt) → integrate. Spend watched; regenerate only for composition, never brand color.
**Evidence loop:** build → screenshot → design-critic → design-polisher → test-engineer (e2e: locked strings, JS-off, RTL toggle, no h-scroll ×4 breakpoints, reduced-motion, axe) → measure (LH + real CDP LCP).
**Quality gates (non-negotiable):** LH mobile ≥90/95/100/100 · LCP <900ms · CLS <0.01 · WCAG AA (yellow = fill behind dark text only) · full RTL+LTR parity · reduced-motion rested state · JS-off readable · `brand-lint` clean · e2e green.
**QA:** QA-Lead independent, **Full tier** (site + lead-capture data) → code-reviewer + qa-engineer + security-engineer + craft-reviewer → **PASS/BLOCK** (CEO/CTO cannot override BLOCK).
**GATE 4 (founder):** merge/ship word → deploy **staging (`beeond-preview`) → prod** on confirmation.

---

## Conventions, models, cost

- **Handoff artifacts (reuse existing):** `briefs/` (Strategy brief, design spec), `handoffs/_TEMPLATE.md`, `sessions/` (per-session log), `INDEX.md`; append to `DECISIONS.md` at each gate.
- **Models:** Opus = Strategy + Design chairs/synthesis · **Fable-5 = Build** · Sonnet = workers · Haiku = trivial subagents.
- **Worktrees:** every code effort in its own `.worktrees/[slug]` (gitignored).
- **Cost posture:** lean on planning (desk research, moodboards over rendered concepts), rich on the build; **`/clear` between phases** — each phase is ideally its own fresh session that loads the kit + this runbook as one cached block.

## Gaps this runbook defines fresh

1. Research→messaging chain + **Strategy brief** template (Phase 1).
2. **Direction-exploration** step: moodboards + written proposals → pick (Phase 2a).
3. **Design-spec** handoff template (Phase 2b output).
4. **Strategy-locked → direction-locked** founder gates (Gates 1–3).

## Verification

- **Gate 1:** founder-approved Strategy brief exists.
- **Gate 2/3:** direction picked from moodboards; locked spec exists with founder sign-off + full HE/EN copy deck + wizard spec.
- **Build:** quality checklist green; QA-Lead **PASS** filed; session file written; `DECISIONS.md` updated.
- **Gate 4:** founder merge word; deployed staging → prod; site is portfolio-grade, Hebrew-first, wizard captures a real lead end-to-end.

## Kickoff (Phase 1)

Recommended in a **fresh `/clear`'d session** (per cost posture). Trigger: *"CEO, start Phase 1 (Strategy) of the v7 process runbook."* CEO spawns research-lead (desk research + RTL refs + competitor teardown) and CMO/CPO (flagged personas → message hierarchy → section arc → wizard flow) → Gate-1 Strategy brief. **Open founder input:** any hard launch date (else phases run back-to-back, quality-first).
