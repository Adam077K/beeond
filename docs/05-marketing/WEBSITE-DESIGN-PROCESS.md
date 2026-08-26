# The Beeond Website — Design & Build Process

*Plan of record. Written 2026-08-26 by CEO (`ceo-website-design-process`) with the founder, via structured grilling.*
*This document defines HOW we design and build the site. It does not contain any design decisions.*

---

## 1. The mission

Build the Beeond website: **one landing page plus three supporting pages, at the highest design, craft and conversion grade we can reach.**

**Its one job:** get a qualified stranger onto a call. A waitlist captures everyone not ready to talk today.

**Success looks like:** a site that a professional designer would stop on, that explains an invisible service without a single product screenshot, and that a stranger finishes wanting to talk to us.

---

## 2. The hardest problem on this site — name it before we start

**Beeond sells a service and an outcome, not software.** There is no product to screenshot, no dashboard to tilt at an angle, no feature grid to fill. Every section has to make something invisible legible — and do it with *pictures and structure*, not paragraphs.

Two founder constraints follow directly, and they govern every gate below:

1. **Text is rationed.** No section carries its meaning in prose if an image, a diagram, or a piece of structure can carry it instead.
2. **Attention is rationed.** Sections are deliberately unequal. Some shout, most don't. A page where every section demands the same energy is a page with no rhythm and no hierarchy.

Both are enforced as budgets at Gate 2, not left to taste.

---

## 3. Locked this session

| Decision | Locked |
|---|---|
| Site's job | Book a call · waitlist as fallback capture |
| Scope | Landing page + 3 supporting pages |
| References | Founder-supplied, committed to `docs/05-marketing/references/founder-brain/` (105 files) |
| Reference authority | **Mixed** — some references are literal spec, some are vibe. Founder maps which is which at G0. |
| Logo | **Mark is LOCKED.** Palette is open. |
| Art-direction north star | human · bees · nature · **ASCII** · clean · simple · flowers · hive |
| Design pipeline | **AI full-page image mockups → then code** |
| Fidelity rule | **Full-page, production-realistic mockups only. Never moodboards, never fragments, never palette tiles.** |
| Motion | **GSAP + ScrollTrigger** — scroll-choreographed, pinned/scrubbed sequences |
| Imagery | Free + owned sources, plus generated — all transformed into one owned system |
| Gates | **5** (G0–G4) + a binding QA gate |
| Models | Opus 5 direction & critique · Fable 5 build · GPT Image 2 art · Sonnet 5 support · Haiku never for judgment |
| Quality bar | Anti-slop diff · adversarial design critique · awards-grade benchmark |
| Copy | Agents write it; founder approves at the gates |
| Timeline | **No deadline. Done when it's excellent.** |
| Lead capture plumbing | **Deferred** — decided later |
| ICP | **Unchanged and open.** "SMB" was art-direction vocabulary, not a segment call. |
| Anti-supersession mechanism | **None.** Founder holds the line personally. Logged as a deliberate choice. |

---

## 4. The gates

Five decision points. At each one you are shown something complete and you make one call. Nothing proceeds past a gate without you.

### G0 — THE READ
**Owner:** Design-Lead (Opus 5)

Agents look at all 105 references, rename every file so the name carries its meaning, and index them. Then Design-Lead writes the **Art Direction Read**: your taste, stated back to you as rules — what's in, what's out, palette territory, type register, texture technique, motion character.

**You supply:** the SPEC-vs-VIBE map. Which references are literal instructions ("this section, like this") and which are feeling only.
**You decide:** is this read of your taste correct?

> This gate exists because correcting a misread here costs minutes. Correcting it at G3 costs days.

**Produces:** `ART-DIRECTION-READ.md` · `_index-*.md` per reference folder · the anti-slop tell list.

### G1 — DIRECTION
**Owner:** Design-Lead + product-designer · **Art:** GPT Image 2

Three complete, full-page homepage mockups. Three genuinely different theses — not three shades of one idea. Each arrives with a real palette (hex), a real type pairing, a one-line motion character, and the locked mark placed in it.

Every direction is diffed against the anti-slop set **before** it reaches you.

**You decide:** pick one, or graft — A's palette with B's type is a legitimate answer.

**Produces:** 3 full-page mockups · 3 one-page direction specs.

### G2 — SHAPE
**Owner:** CPO + CMO (structure and copy) · Design-Lead reviews

Page architecture across all four pages, and the homepage section spine. Per section: **the job**, **the belief the visitor holds after it**, and **the device that makes it legible without a screenshot** (diagram, process strip, before/after, numbers, treated photography, quote).

Plus the two budgets. Both are **evidence-backed**, not asserted — G0's teardown of six real outcome-selling sites (Ada, Agentwork, Base44, Jasper, Superside, Speakeasy) measured the rule:

> **The loudest sections carry the least text.** Across all six pages prose clusters in the QUIET sections — testimonials, FAQ, comparison rows — while LOUD sections are made of image, scale and number. Observed LOUD count per page: 1, 1, 2, 3, 4, 5 (the 5 is a 14-section page).

- **Attention budget** — every section marked LOUD / MEDIUM / QUIET. **1-3 LOUD per page.** Never two LOUD adjacent. The hero is one of them; the close is usually another.
- **Text budget** — a word cap per section. **A section may be loud or wordy, never both.**

Copy is drafted here, into the typed content layer — never inline in components, so any headline is a one-file change forever.

**You decide:** right shape, right words.

**Produces:** `SITE-ARCHITECTURE.md` · `SECTION-SPINE.md` (with both budgets) · `content/` copy layer.

### G3 — THE FULL SET
**Owner:** product-designer · **Art:** GPT Image 2

The chosen direction rendered across every section of every page. Desktop and mobile. Plus a written **motion spec** per section — what moves, when, how, and what it does on reduced-motion — because a still image cannot show motion and motion is half of this site.

**You decide:** approve the complete visual set. **This is the last cheap moment.**

**Produces:** full mockup set · `MOTION-SPEC.md`.

### G4 — LIVE
**Owner:** frontend-engineer + design-polisher (Fable 5) · Design-Lead orchestrates

The real site at a preview URL. Real GSAP choreography, real ASCII renderer, typed content layer, real responsive behaviour.

**You decide:** does the built thing hold what the mockups promised?

### QA — BINDING, NOT YOURS TO OVERRIDE
**Owner:** QA-Lead, independent of everyone above.

Full tier. A BLOCK stops the merge. Neither the CEO nor the founder-facing gates can wave it through.

---

## 5. Where quality actually comes from — the craft loop

The gates approve direction. **This loop is what produces award-grade craft**, and it runs inside G4, per section, not once at the end:

```
BUILD  →  design-critic judges  →  design-polisher adds craft density  →  re-judge  →  ship section
              ↑______________________ loop until it clears ______________________|
```

- **design-critic** judges from two seats — a buyer's and a professional designer's — against the reference set and the anti-slop list. It never edits.
- **design-polisher** adds what separates functional from exceptional: depth, micro-interactions, signature details, motion choreography, optical alignment, spacing and type refinement.
- A section is not done when it works. It is done when the critic stops finding things.

---

## 6. Knowledge — what gets loaded, and when

Skills load **on demand only**. 3–5 per lead, 2–3 per worker. Never preloaded.

| Phase | Skills |
|---|---|
| G0 · G1 direction | `frontend-design` · `high-end-visual-design` · `design-taste-frontend` · `design-orchestration` · `stitch-design-taste` |
| G1 systems | `tailwind-design-system` · `minimalist-ui` · `core-components` · `ui-typography` (global) |
| G2 structure & copy | `copywriting` · `page-cro` · `marketing-psychology` · `form-cro` |
| G3 · G4 motion | `emilkowal-animations` · `12-principles-of-animation` (global) · `vercel-react-view-transitions` |
| G4 build | `nextjs-app-router-patterns` · `react-patterns` · `react-ui-patterns` · `vercel-react-best-practices` |
| QA | `web-design-guidelines` · `wcag-audit-patterns` · `ui-visual-validator` · `playwright-skill` · `e2e-testing` |

**External knowledge to pull rather than recall:** the GSAP ScrollTrigger docs (pin, `scrub`, `batch`) at build time, and the dither/ASCII rendering technique before the renderer is written.

---

## 7. Models

| Stage | Model | Why |
|---|---|---|
| Orchestration, art direction, critique | **Opus 5** | The taste layer. Judgment, not throughput. |
| Frontend build, GSAP choreography | **Fable 5** | The build tier. |
| Full-page mockups, art generation | **GPT Image 2** | Strongest at legible text inside a generated design — which is the whole point when a mockup must show real headlines. |
| Structure, copy, research, docs | **Sonnet 5** | Default. Strong and cheap. |
| Judgment of any kind | **Never Haiku** | Lookup only — lint, log parsing, file classification. |

---

## 8. The bar — measurable, or it's just a wish

**Design bar (chosen by the founder):**
1. **Anti-slop diff.** Every section is diffed against the negative set. Any tell — centred hero, gradient mesh, glassmorphism pills, three-equal-card bento, generic geometric sans, marquee logo strip, "Book a Demo" dual CTA — and it gets redone.
2. **Adversarial design critique.** The loop in §5. A section ships when the critic runs out of findings.
3. **Awards-grade benchmark.** Sections are self-scored against award-jury criteria before the founder ever sees them.

**Engineering floor (not a design choice — the merge gate):** Lighthouse ≥95 across the board, real CDP-trace LCP under 1s, CLS 0, zero axe violations, e2e green, reduced-motion honoured. GSAP-grade choreography makes this a live risk, not a formality — the choreography ships, the payload does not. The harness already exists in `apps/web/scripts/`.

---

## 9. Open — what still has to land

| # | Item | Owner | Blocks |
|---|---|---|---|
| 1 | **SPEC-vs-VIBE map** across the references | Founder | Closing G0 |
| 2 | Font licensing — free-only, or is there budget? | Founder | G1 type pairing |
| 3 | **Lead capture plumbing** — booking + waitlist have no backend. Deferred by decision. | Founder | The site *doing its job*, not the site existing |
| 4 | Domain — `beeond.ai` unsecured | Founder | Public launch, not design |
| 5 | Yarden's role in copy | Founder | Nothing yet; agents draft, founder approves |
| 6 | ICP | Open by decision | Copy sharpness — it stays broad until this lands |

---

## 10. Risks I'm carrying, stated once

- **Copy is the weakest layer.** It will be written from our own thesis, not from anything a buyer has said. The typed content layer is the mitigation: every word on the site is cheap to replace the moment real language exists.
- **No deadline plus no supersession brake** means the only thing holding a direction is the founder's own discipline. That is a deliberate, logged choice, not an oversight.
- **GSAP choreography plus ASCII rendering is a real performance risk.** The engineering floor in §8 is the control, and it is binding.

---

*Reference set: `docs/05-marketing/references/founder-brain/` · Source of truth for the company: `HANDOFF-CLEAN-START/`*
