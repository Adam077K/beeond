---
date: 2026-07-13
board: v7 Phase-3 build decision
decision_type: strategic
protocol: 4-round board-meeting (R0 framing → R1 independent → R2 cross-critique → R3 fresh-context synthesis)
personas: visionary · strategist · architect · risk-modeler · customer-voice · broad-adversary
final_verdict: PAUSE
tally_r1: 2 KILL (visionary, broad-adversary) · 1 PROCEED_WITH_CONDITIONS (risk-modeler) · 3 PAUSE (strategist, architect, customer-voice)
tally_r2: 2 KILL · 4 PAUSE · 0 PROCEED  (risk-modeler moved PWC→PAUSE; strategist confirmed PAUSE)
status: BOARD ADVISORY — awaiting founder decision (Gate 4 equivalent)
---

# Board Review — v7 Phase-3 Build Decision (2026-07-13)

## Question put to the board (R0)

> Build the founder-locked v7 marketing site NOW as spec'd — right move, right shape, or is there a 10x-different play to validated demand? (`decision_type: strategic`, founder instruction: *think outside the box; "locked" is not a reason to approve*.)

## Final verdict: **PAUSE** (not KILL)

**0 of 6 personas voted PROCEED.** The lone affirmative (risk-modeler, PROCEED_WITH_CONDITIONS in R1) abandoned it for PAUSE after peer critique. Two KILLs held.

PAUSE, not KILL, because the honeycomb visual world, the M1–M6 argument, and the wizard structure are **correct assets in a later phase** once paired with validated buyer language and real proof — preserve them, don't discard them. The objection is to **sequence and timing**, not to the spec's quality.

## Why — the dispositive facts (all six lenses converged here)

1. **A live, QA-passed v6 already exists** at beeond-preview.vercel.app. The counterfactual to "build v7" is not "no site" — it is "iterate the working v6." No persona found the from-scratch marquee rebuild cleared that bar.
2. **M1–M6 copy was locked without the warm-prospect interviews it rests on.** The entire message spine is assumed buyer language. If wrong, copy + section arc + wizard framing all rebuild under the most expensive iteration mode (PR + QA-Full).
3. **M5 — the only pre-revenue proof — is still an empty `[FOUNDER INPUT NEEDED]` placeholder.** Shipping around it violates the site's own "founder-is-the-proof" thesis and Rule #6 (no placeholder UI).
4. **The wizard's conversion moment is templated/heuristic.** The one interactive proof-of-taste on the page risks reading as a Buzzfeed quiz at the exact moment it must dazzle — the site's thesis ("human taste, not generic") contradicting its own wizard.
5. **Opportunity cost is a live burning fuse, not an abstraction.** Customer-voice's "Yossi" analog has a competitor proposal on his desk on a ~10–14 day clock while both warm prospects sit un-called. Every Fable-5 hour is an hour not closing the only validated demand Beeond has.
6. **Supersession cadence (broad-adversary, the preserved dissent):** 7 locked marketing-site directions in 14 days, ~2-day average lifespan, **0/7 → revenue**. v6 was superseded 1 day after merging to main. v7 is the same plan-shape from the same well.

## The recommended re-sequence (best outside-the-box idea)

**Don't build a new site this window. Iterate the live v6 in place and let the wizard become the product.**

1. Swap the v6 hero to the strongest v7 message + drop in the freshly-written M5 paragraph — **a two-file diff, no rebuild.**
2. Mount the Footprint-Audit wizard as a standalone `/audit` route (~3 days: component + Supabase capture + Resend) with **one live signal** in the Step-3 reveal (fetch prospect's homepage og:title/H1, echo one specific unforgeable observation).
3. Make each completed audit a **shareable, permalinked, structured artifact** ("Audited by Beeond" badge + unique URL) → every submission is simultaneously a lead, a backlink, an AI-answer-citable receipt, and a free buyer-language interview.
4. Run both warm prospects through the audit **live on a call** and hand-send each a scoped paid-pilot SOW.
5. The marquee v7 ships **later**, decorated with real customer quotes and a receipts wall instead of an empty M5.

**Cheap test (the tripwire):** A 5-day validation sprint, ~2–4 founder-hours up front. Call both warm prospects (recorded) within 5 days + hand-send each a scoped SOW. Falsifier both directions:
- ≥1 signs a pilot **or** describes their pain in M1–M6's language unprompted → copy lock validated, marquee build de-risked to PROCEED.
- Neither engages → the offer/message was wrong and a beautiful site would have failed regardless.

Either outcome is decisive, and cheaper than a single QA cycle of the full build.

## Locked recommendations (board, pending founder ratification)

| ID | Recommendation | Reversibility |
|----|----------------|---------------|
| LD-1 | Do NOT open the full 8-section v7 Fable-5 build this window; re-sequence to validation/revenue-first. | soft |
| LD-2 | Both warm prospects interviewed (recorded) before any copy-locked code; M1–M6 red-teamed line-by-line vs. verbatim language. | soft |
| LD-3 | M5 written + locked (each with one verifiable artifact link) BEFORE any build. **Hard block.** | medium |
| LD-4 | Keep live v6 on main. Ship the wizard first as a standalone `/audit` route on the existing surface. | soft |
| LD-5 | Upgrade wizard Step-3 from pure-templated to templated-plus-one-live-signal (~4h, one server action, zero new vendor). | soft |
| LD-6 | If v7 is ever built: back copy with a schema (Supabase/MDX + ISR), not hard-coded strings; split into two gated sessions. | medium |
| LD-7 | Record a 90-day no-supersession commitment in DECISIONS.md before any build session opens. | medium |

## Gate to build the full v7 marquee

Wizard → booked-call rate **≥15%** AND **≥1 paid engagement signed.** Miss both and the wizard IS the site; the marquee stays deferred.

## Preserved dissent — broad-adversary (with visionary): **KILL, not PAUSE**

> Seventh locked marketing-site direction in 14 days, 0/7 → revenue. The disease is not the spec but the founders' decision loop; "build the site more carefully" is the same failure mode as v3–v6. The founders cannot hold any bet for 90 days — so even a well-conditioned PAUSE-then-build risks feeding the supersession cycle. When your own risk model shows five CRITICAL/HIGH failure modes, the honest answer is KILL this shape.

**Vindication conditions (watch these):**
- Founder locks a v8/v7.x direction or supersedes the wizard-first sequence within 30–60 days.
- Wizard-first also fails: no booked call from ≥3 unique non-network domain submissions AND neither prospect advances → the problem is the offer, not the storefront.
- Either warm prospect churns to a competitor during the window because a founder was building instead of calling.
- M1's hero line does not appear (verbatim/near) in either prospect's unprompted description of their pain.

## Open questions deferred to founder

- **Tripwire to flip PAUSE→PROCEED:** a signed pilot before any build, using the locked copy's language unprompted.
- Does v6 have meaningful accumulated indexing/inbound worth preserving vs. a fresh `/audit` landing?
- If v7 eventually builds: is HE-first RTL parity a Phase-3 deliverable or deferrable to the post-revenue marquee?
- Actual half-life of the "Yossi" ~10–14-day competitor-proposal clock — validate on the first call.
- Consent/legal path for an audit-as-marketing corpus beyond the two consented prospects (unsolicited teardowns = spam/consent risk).

*Full R1 + R2 per-persona verdicts: `R1-R2-verdicts.md` (this folder). Raw JSON: workflow `wf_7375760a-6b2` journal.*
