# Beeond Website v7 — LOCKED DESIGN SPEC (Gate-3)

*The single hand-off document for the Phase-3 build session (one Fable-5 session, per the runbook). Everything binding is here or pointed to from here. Locked by the founder 2026-07-09.*

---

## 0. Status & sign-offs

| Gate | Decision | Date |
|------|----------|------|
| Gate 1 | Message hierarchy M1–M6 · 8-section arc · wizard structure — APPROVED | 2026-07-08 |
| Gate 2 | Visual world: **E · The Blueprint** + amendments — APPROVED | 2026-07-09 |
| Gate 3 | **Font: Rubik Bold/Black display** · **Hero: A-idea as 3 lines** · **SPEC LOCKED** | 2026-07-09 |

**The one open slot:** founders' public-credentials paragraphs (M5, §7) — `[FOUNDER INPUT NEEDED]` markers in the copy deck. Adam + Yarden supply 2–3 honest, checkable sentences each (HE-first) before or during the build; CMO-shapes on arrival. Everything else is final.

---

## 1. The world (binding visual direction)

**The Blueprint** — the footprint drawn as an architect's honeycomb: hairline construction lattice on vellum-cream, and **one honey-built glowing cell** — the thing Beeond built. Honey is **light**, not flat yellow. Approved visual bar: `concepts/wow/e1.png` + `e2.png` (the *register*; all lettering/numbers in them are superseded by the amendments below).

**Founder amendments (Gate-2, binding):**
1. **NO engineering dimension numbers** — no measurement callouts anywhere.
2. Drafting annotations instead **name the real jobs** (content engine, SEO, AI-answer visibility, ads, email, social, analytics) — real HE/EN HTML/SVG text with leader lines, never baked into raster.
3. **Type/layout register: Oriol × Speakeasy** — type-as-art editorial display, whitespace as luxury, tight accent discipline, split/asymmetric composition, cream↔dark rhythm.

**Gate-3 font ruling:** display = **Rubik Bold/Black** (founder call, Hebrew-native confidence; matches all 3 premium HE references). Rubik body/UI. **One family site-wide, zero new font bytes.** The serif candidate is retired.

## 2. Detailed specs (binding, by reference)

| Document | Scope |
|----------|-------|
| `design-spec/design-spec-v1.md` | The full visual system: tokens + `vellum-line` (color-mix, no 8th literal), one-built-cell-per-section cap, job-annotation system, type scale (apply to **Rubik display** now — recalibrate the FRL display sizes for Rubik Black's metrics), layout rules, motion doctrine, wizard UX, art program, component inventory. |
| `copy/copy-deck-v1.md` | ALL copy, HE + EN, verbatim — status LOCKED (hero finalized per Gate-3; M5 placeholders as noted). Copy is not editable by the build session; deviations require CMO + founder. |
| `04-BRAND-CONSTRAINTS.md` + `apps/web/src/lib/brand.lock.ts` | The 7 tokens + contrast law (yellow = fill-behind-ink only; glow = separate decorative aria-hidden layer per design-spec resolution), a11y/perf gates, RTL rules. |
| `docs/08-agents_work/briefs/2026-07-08-v7-strategy.md` | The argument (M1–M6), section arc, proof rules, banned-cliché list — the build must trace every section to its message. |

## 3. Critic directives (binding build instructions — from the Phase-2b critique, NOT fixed in the prototype by design)

- **P1-A · Hero comb is art-as-layout:** the lattice fills its column top-to-bottom and **bleeds off viewport edges** — "an infinite drafting table," never a centered illustration island. Built cell stays visually central.
- **P1-B · Final CTA resolve needs context:** surround the built cell with 2–4 faint drawn sibling-cells (`vellum-line` on `deep`) so it reads as *completion of the drawing*, not a floating gold hex.
- **P2-A:** §2 problem section spacing — eyebrow ~140–160px from section top; comb anchored to the headline, not sunk low.
- **P2-B:** ONE yellow-filled CTA above the fold — header CTA is ghost/outline on cream, fills yellow only over dark sections.
- **P2-C:** dashed construction strokes lifted to ~18–20% opacity — visible as craft, still quiet.
- **P3-B:** dark showpiece comb vertically centered / filling the dark field.
- (P3-A serif weight — obsolete; Rubik ruling supersedes.)

## 4. Prototype disposition

`concepts/blueprint-concept/` is a **planning prototype** — reference only (screenshots + what its toggles taught us). **The build session builds from zero in a fresh worktree.** Do not port its code.

## 5. Scope of the build (v1, per runbook)

Full main page — all 8 sections + header/footer/FAQ (JSON-LD mirror) — HE default/RTL-primary with full EN parity, one signature device (drawn→built cell: hero debut → M3 dark showpiece → final-CTA resolve, zero loops), **+ the Footprint-Audit wizard** (lean-real: templated honest reveal, real lead capture, all states, escape hatch) per design-spec + copy deck. Art: SVG/code-first; ≤3 generated rasters via the committed pipeline (prompts staged in design-spec §7; W2 constellation approved as dark-showpiece flavor candidate).

## 6. Definition of done (gates — unchanged, non-negotiable)

LH mobile ≥90/95/100/100 · real LCP <900ms · CLS <0.01 · WCAG AA, axe 0 serious/critical · RTL+LTR parity ×4 breakpoints, no h-scroll · reduced-motion rested from first paint · JS-off readable · brand-lint clean · e2e green · copy verbatim from the deck · QA-Lead Full-tier PASS · **founder merge word (Gate 4)**.

## 7. Build-session protocol (runbook Phase 3)

One **Fable-5** session · isolated worktree from origin/main · loads THIS file + its §2 references as one block · spawns design-critic / design-polisher / test-engineer as its evidence loop · session file + DECISIONS.md entry · deploy staging → prod only after Gate 4.

*Trigger when ready: "CEO, start Phase 3 — build from the locked SPEC.md."*
