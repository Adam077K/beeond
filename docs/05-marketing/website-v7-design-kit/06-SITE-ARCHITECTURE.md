# Site Architecture & Onboarding Flow

*The scroll arc + the Footprint-Audit wizard. Hebrew-first (RTL). This is the recommended structure for Session B to refine and lock — not a final wireframe.*

---

## Principle: the page is a single argument, not a menu

The reference pattern: **claim → proof → capability → proof → convert.** Every section advances one argument — *"Beeond runs your whole footprint as one swarm; here's the proof; here's the obvious next step."* Less is more: if a section doesn't move that argument forward, cut it. Target **7–9 sections**, not the 11 of v6.

The CTA (**Get your free Footprint Audit** / **קבלו ניתוח נוכחות חינם**) is present from the hero and repeats at exactly the natural decision points — not on every section.

---

## The scroll arc (recommended)

| # | Section | Job (the one argument it advances) | Proof / device | CTA? |
|---|---------|-----------------------------------|----------------|------|
| 0 | **Header** | Nav + always-on CTA | Logo mark (new), 3–4 nav links, yellow CTA pill | ✅ persistent |
| 1 | **Hero** | State the claim with tension. Signature device debuts. | The hero claim (see `05-COPY-STRATEGY`), signature motion, one line of who-we-are | ✅ primary |
| 2 | **Proof strip** | *Directly under the hero* — earn the right to continue | Concrete numbers (channels run, speed, hours saved) or logos when we have them; today: honest "first cohort" framing + the founders' credibility | — |
| 3 | **The problem, sharp** | Name the buyer's real pain in one beat | "Your buyers — and the AIs they ask — are evaluating you right now. Most brands are invisible where it counts." | — |
| 4 | **What Beeond does** | The capability grid, scannable | 3 jobs (Be found everywhere · A content engine that ships · Intelligence that compounds), shown as outcomes not a services list | ✅ secondary |
| 5 | **The swarm showpiece** | *The* differentiator, made visceral | The one scroll-choreographed showpiece: the swarm/agents + 2 founders converging on one goal. "Automation does the volume. Humans do the taste." | — |
| 6 | **The whole footprint** | Prove "whole footprint, one system" | The 11 channels as one coordinated map (comb/constellation), *including GEO/AI-search* as the modern edge | — |
| 7 | **How it works** | De-risk: phased, not chaos | The ~12-week arc: Foundation → Content engine → Amplification. "We don't light up 20 channels in week one." | ✅ secondary |
| 8 | **Honesty / fit** | Anti-generic trust: who it's for, who it's not | "It's for you if… / honestly not for you if…" + the founders, real faces/names | — |
| 9 | **Final CTA** (dark `deep`) | Convert. Signature device resolves. | "Your buyers are looking. Let's make sure they find you." → opens the wizard | ✅ primary |
| — | **Footer** | Meta, honesty, launch status | "Launching 2026" etc. | — |

Sections 3/8 are candidates to merge or cut in the less-is-more pass. The **non-negotiables** are: hero claim (1), proof (2), capability (4), the swarm showpiece (5), how-it-works (7), final CTA (9).

**FAQ + JSON-LD:** keep a lean FAQ (6 Qs max) that mirrors `FAQPage` structured data — it's a GEO/AI-search asset (the AIs read it), and Beeond *sells* AI-search visibility, so the site must practice it.

---

## The Footprint-Audit onboarding wizard (the locked CTA destination)

**What it is:** a short, designed, multi-step flow that opens when the hero (or any primary) CTA is clicked. It turns "book a call" into a *value-first* experience — the prospect gives us their brand, we show them a real audit, we capture the lead. It doubles as the sales asset already conceived on v6 (the "SAMPLE Footprint Audit" doc).

**Design intent:** feels like the *first taste of the product*, not a contact form. It is the site's second signature moment. RTL-native. Every step earns the next.

### Recommended step flow (Session B locks the fields)

```
  STEP 1 — The ask (1 field)
    "Where does your brand live online?"  → website URL (or brand name)
    Yellow CTA: "Show me my footprint" / "הראו לי את הנוכחות שלי"
    Micro: "No deck. No pitch. A real look at where your footprint has gaps."

  STEP 2 — Quick context (2–3 fields, optional-feeling)
    Industry · rough size · primary goal (more leads / more visibility / ship faster)
    Progress indicator. Skippable where honest.

  STEP 3 — The reveal (the wow)
    A generated/templated Footprint Audit snapshot for their brand:
    channels scored, gaps highlighted in yellow, "here's what it'd take to close them."
    (MVP: a fast heuristic/templated audit; later: a real agent-run scan.)
    This is the value moment — it proves the promise before we ask for anything.

  STEP 4 — Capture (the exchange)
    "Want the full audit + a 30-min plan with Yarden & Adam?"
    Name · work email → lead captured (CRM/email). Confirmation state.
    Fallback if they bounce at step 4: we still have URL+context = a warm lead.
```

**States to design (all required):** empty · in-progress (per step) · loading (the reveal computing) · success · error (bad URL, network) · and a **reduced-scope path** for someone who just wants to talk (a "skip to booking" escape hatch).

**Lead plumbing:** the wizard must write to a real destination (email to `hello@beeond.ai` at minimum; ideally a CRM/Sheet/Resend flow). No dead `mailto:`. Session B specifies; Session C builds; this is a **Full-tier** surface (form + data capture) for QA.

**Honest-MVP note:** Step 3's "reveal" can start as a fast templated/heuristic snapshot (still real, still specific) and graduate to an actual agent-run scan later. Do not fake precision — specificity + honesty beats a fake dashboard. That *is* the anti-generic promise.

---

## RTL layout notes

- Wizard progresses **right-to-left** in Hebrew; the "next" motion and progress bar mirror.
- Hero claim sets in Hebrew display type first; EN mirror must hold the same visual weight.
- Numbers/logos in the proof strip: check numeral direction and logo lockups in RTL.
- The swarm showpiece's "convergence" reads inward-to-one-goal — direction-neutral by design, which makes it RTL-safe (a point in its favor as the signature device).

---

## What to reuse from v6 (structure, not look)

Keep the *architecture patterns* that tested well — bilingual SSR toggle, IntersectionObserver reveals, the phased how-it-works timeline content, the FAQ↔JSON-LD mirror, the "grade ourselves" trust strip that self-drops if scores fail. Rebuild their **appearance** from the new visual language.
