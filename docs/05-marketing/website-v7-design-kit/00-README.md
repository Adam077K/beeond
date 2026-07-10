# Beeond Website v7 — Design Re-Planning Kit

*Everything the next two sessions need to design and build a wowing new Beeond website. Assembled by CEO, 2026-07-07.*

> **The mandate:** build the least generic, most crafted marketing site in the AI-agency category — because **the site itself is the proof of the promise** ("AI won't make you look generic").

---

## The four locked decisions (founder, 2026-07-07)
1. **Clean visual slate** — keep only the name, the bee/honey/swarm concept, and cream+dark+yellow. Retire the v6 ink look + all current art.
2. **Hero CTA → free Footprint-Audit intake** — a designed multi-step onboarding wizard, not a `mailto:`.
3. **Hebrew-first, English parity** — HE/RTL is the primary design canvas.
4. **Full kit now** — this folder + captured references.

---

## Read in this order

| File | What it gives you |
|------|-------------------|
| `01-BRIEF.md` | The mandate, the product truth, the audience, the north star, the 3 candidate visual directions. **Read first.** |
| `08-PROCESS.md` | The three-session process (Kit → Design-Planning → Build), agent orchestration, gates, hand-off contracts. **The core of the kit.** |
| `02-references/README.md` | Annotated reference library + the pattern language + the 5 transferable moves. Screenshots per site. |
| `03-SKILLS-MANIFEST.md` | Every relevant design/UX/motion/copy/build skill, categorized, with a load order per session. |
| `04-BRAND-CONSTRAINTS.md` | Palette (7 tokens), Rubik/Hebrew type, motion doctrine, RTL rules, a11y/perf gates, anti-generic checklist. |
| `05-COPY-STRATEGY.md` | Hebrew-first voice + less-is-more rules + message hierarchy + seed copy (HE + EN). |
| `06-SITE-ARCHITECTURE.md` | The recommended scroll arc + the full Footprint-Audit wizard flow. |
| `07-VISUAL-GENERATION.md` | The OpenAI image pipeline (reuse), when to generate vs. use SVG/type, spend guardrails. |
| `SPEC.md` | *(Created by Session B.)* The locked, founder-approved build spec. Does not exist yet. |

---

## The three sessions at a glance

```
  A · KIT (done)           B · DESIGN PLANNING          C · BUILD
  this folder        →     Opus · Design-Lead chair  →  Fable-5 · one session
                           thinking/research/concepts   design + code + art + tests
                           /copy/architecture           in a worktree, QA-gated
                           → SPEC.md (founder-locked)    → shipped branch, awaits merge
```

Founder decision gates: **B-a** visual direction · **B-b** hero claim + messages · **B-c** arc + wizard · **D** merge. Four clean yes/no touch-points.

---

## What survives the reboot (the only carry-overs)
Name · bee/honey/swarm *concept* · the 7-token palette (`ground #FAF9F5 · ink #141413 · yellow #FFDB5B · panel #F0EEE6 · deep #0A0A0A · hairline #E3DDD5 · muted #5C5751`) · **Rubik** (native Hebrew) · the generate→brand-post-process→integrate art *method* · all quality gates · bilingual SSR + CSS-toggle architecture.

Everything else — the field-journal ink look, all `public/art/*`, the v6 section arc and copy, the `mailto:` CTA — is **retired** (git history keeps it).

---

## Related existing docs (read for thinking + gates, not v6 visual conclusions)
- `docs/01-foundation/FOUNDING_BRIEF.md` — strategy source of truth (valid).
- `docs/05-marketing/POSITIONING.md` — positioning (valid).
- `docs/05-marketing/BRAND_AND_LANDING_DESIGN.md`, `DESIGN_EXCELLENCE_PLAYBOOK.md`, `ART_DIRECTION_PROMPTS.md` — v6-ink direction; mine for craft/gates, ignore the visual conclusions.
- `apps/web/src/lib/brand.lock.ts` — the live token + gate source of truth.
