# STORYBOARD — TEXT ONLY — NOT A DESIGN

**Beeond marketing site · Phase 1 · what the site SAYS and what the visitor GOES THROUGH.**
**NOT PLAN OF RECORD.** Nothing here is locked or shipped. Per `CLAUDE.md`, no direction becomes the plan of record without a customer signal earned since the last one closed. Two warm prospects remain un-called; said here once.

| Field | Value |
|---|---|
| Version | **0.1 — R0 frame** (0.2 R1 candidate map · 0.3 R2 spine vN · 0.4 R3 journey · 1.0 gate) |
| Session | `orchestrator-site-thinking` · gold · branch `ceo-1-1788359253` · started 2026-09-02 |
| Founder | Adam, present, reacting per round |
| Source of truth | `HANDOFF-CLEAN-START/` (5 files). Nothing here overrides it. |
| Locked and not reopened | G0 reference read · G1 design language (`DESIGN-LANGUAGE.md`) · the site's job |
| One input, not the answer | `docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md` |
| Markers | **FOUNDER** (a founder decision, dated) · **OPEN** (undecided) · **PROVISIONAL** (a voice string written from founder thesis, not customer language) |

**Every voice string in this document is PROVISIONAL.** ICP is OPEN by founder decision, zero customer interviews exist, `USER-INSIGHTS.md` is empty by design. Site copy, when it is eventually written, carries the claim `c-site-copy-is-founder-thesis-not-customer-language`.

---

## §0 — THE FRAME (R0 · closed 2026-09-02)

### §0.1 The one job

Convert a stranger into a **booked call**. The waitlist is fallback capture, never a competing ask: not in the nav; it lives inside Book a Call ("not ready yet?") and in the footer.
FOUNDER 2026-08-26 (`WEBSITE-DESIGN-PROCESS.md` §1, §3). Nav placement inherited from the G2 spine §A as the default — open to strike in R2.

### §0.2 Arrival states — by state, never by persona

A visitor is defined by what he knows, what he is weighing and what he is afraid of at the moment he lands. Three fixed axes, each of which changes what the storyboard must do:

| Axis | Values | What it decides |
|---|---|---|
| **Warmth on arrival** | COLD (a link or a search, no context) · WARM (a founder, or a founder's post, put the idea in his head) | What the fold has to do: explain, or confirm |
| **What he is weighing** | the substitute he lives with today (`04-THE-PRODUCT.md` §10): DIY with AI tools · an agency or freelancer · a first hire, or nobody · point tools | Which objection surfaces first, and which section answers it |
| **Readiness** | browsing · evaluating · ready | Where the ask can honestly appear, and whether the call or the waitlist is the honest capture. The site cannot know this; the journey routes it |

FOUNDER 2026-09-02: first draft (four states on mixed axes) returned with "think more about that"; this revision accepted — "Accept, run R1 on these."

**Five states designed for.**

**S1 — COLD · burned by generic AI output · browsing.**
Knows: nothing of Beeond; a lot about what AI content looks like, has shipped some. Weighing: whether paying anyone beats what tools already give him for free. Afraid: paying for a wrapper; his brand sounding like everyone else's. Must believe: a named human calibrates every piece; the swarm does what he cannot (volume, coverage, consistency). Fold must: say what this is in plain words and put the human in the loop on screen one. First objection: "this is just AI." Answered by: the mechanism section and "what done means." Ask: late, after mechanism and proof-of-method. Fallback: waitlist. Evidence: the one data-backed fear — 53% of marketers struggle to make content stand out, 52% say AI made content less effective (HubSpot, HIGH confidence, `02-THE-PROBLEM.md` §2a).

**S2 — COLD · paying an agency or freelancer now · evaluating, shortlist or proposal in hand.**
Knows: nothing of Beeond; what a retainer costs; how little of the work he actually sees. Weighing: Beeond against two or three others. Afraid: another opaque, slow, siloed vendor; being locked in; switching cost. Must believe: he will see exactly what was done, at what volume, and why (the dashboard as an honest promise, not a screenshot); the engagement has a shape; cheaper and faster by mechanism, never by a figure. Fold must: differentiate in one screen, mechanism over adjectives. First objection: "where are your case studies." Answered by: honest status stated before he asks, then how we work. Ask: mid-page, at comparison by elimination. Fallback: the Approach page — he is evaluating, the waitlist is not honest for him. Evidence: inferred from `03-THE-MARKET.md` bands 1 and 4; interview cluster B tests it.

**S3 — COLD · nobody owns marketing, considering a first hire · evaluating, price-sensitive.**
Knows: something should be happening and is not; a hire is slow and expensive. Weighing: hire vs agency vs "later." Afraid: committing to a retainer before knowing what he gets each month; being the only one who cares about this. Must believe: the three-phase shape; what a month looks like in kind, not in number; a call is a diagnosis, not a pitch. Fold must: make the offer legible as "your whole footprint, run for you." First objection: "what do I actually get, and what does it cost." Answered by: the process shape and the Book a Call FAQ, which says plainly why no price is on the site. Ask: on Book a Call. Fallback: waitlist. Evidence: inferred; interview cluster C tests it.

**S4 — WARM · sent by Adam or Yarden · ready, or one push from it.**
Knows: the pitch and the people. Weighing: whether to take the call already offered. Afraid: too new; nothing behind it; wasting a meeting. Must believe: these are real, serious people with a real method, and there is a reason to talk now. Fold must: not repeat the pitch he heard; confirm it. Path: About → Book a Call in two clicks. First objection: "you have no clients yet." Answered by: honest status, stated before he asks. Ask: immediate. Fallback: none on the site; the referral does the follow-up. Evidence: the only channel that exists today (two warm prospects, founder-led LinkedIn).

**S5 — COLD · arrived from a search or an AI answer · browsing.** OPEN — FUTURE. SEO/GEO do not exist yet; the site should not need rebuilding when they do.
Knows: he asked a question ("done-for-you marketing", "AI marketing agency") and Beeond was one answer. Weighing: whether to read past the first screen. Afraid: a brochure that wastes his time. Must believe within one screen: what this is, for whom (broad), that it is real. Fold must: answer the query in the first line. Ask: late. Fallback: waitlist. Evidence: none today.

**Cross-cutting rules, derived from the states:**
1. **Fast path.** Anyone already ready reaches Book a Call in one click from anywhere — the persistent nav CTA. No state has to scroll to convert.
2. **The fold explains before it persuades.** For every COLD state the first screen answers "what is this" in plain words; the offer is invisible and has no screenshot (`WEBSITE-DESIGN-PROCESS.md` §2).
3. **Honest status precedes the proof question.** "We are new, here is exactly how we work" appears before any state reaches "who have you done this for."
4. **Forwardability.** Decision power is unknown (interview cluster A tests whether he decides alone or sells it up). Approach must read as a document one person can send to another.
5. **The language/market objection has a reserved place.** "Do you work in my market, in my language?" is real for any Israeli visitor and the answer is OPEN (`01-THE-IDEA.md` §6). The storyboard reserves the slot; it does not decide the answer.

**Not designed for, and why:** agency-owner/reseller (untested offer shape, `02` §4) · enterprise (excluded by the service-fit filter, `03` step 2) · curious peers, competitors, investors, candidates (not buyers; honest status keeps the founders from embarrassment in front of them, nothing is optimised for them).

### §0.3 What the site must NEVER claim

1. **No numbers.** No metrics, outcomes, percentages, counts, volumes, prices, hour budgets, onboarding durations (`04` §6 timeline untested; §10 prices stripped). Exception: "two founders" and "no clients yet" are true and may be said.
2. **No testimonials, quotes, logos, case studies, client names.** None exist. Bonim Atid is not citable (unconfirmed, Hebrew, consumer).
3. **No persona, no named segment** ("for B2B SaaS founders"). ICP is OPEN — FOUNDER 2026-08-08.
4. **No invented customer language.** Every voice string PROVISIONAL.
5. **No "the swarm has delivered for clients."** It has run Beeond's own planning only (`01` §1). The mechanism may be described as how we work, never as a track record.
6. **No dashboard screenshot, no "see it live."** It does not exist. Describe what it will show, as build target #1, stated honestly (`04` §2).
7. **No coined terms.** Hiveprint/Quorum reversed by the founder 2026-06-30. Plain descriptive language.
8. **No buzzwords** (leverage, unlock, seamless, robust, best-in-class, synergy) and **no AI self-labelling** ("AI-powered", "AI-generated") — `review-lenses.yml` voice lens.
9. **No "bilingual / Hebrew+English" as settled, and no "English-only" either.** Language scope is OPEN (`01` §6).
10. **No pricing page, tiers, "starting at," or guarantee language.**
11. **No competing ask.** No dual CTA, no waitlist in nav, no marquee logo strip (anti-slop tells, `WEBSITE-DESIGN-PROCESS.md` §8).
12. **Nothing from the deleted 2026-09-02 build.** Its three visions are not cited and not rebuilt.
13. **Nothing visual in Phase 1.** "What he sees" is described in prose; no image, mockup, wireframe or code.

### §0.4 What the site MAY say, because it is true

The founder positioning statement verbatim (`01` §1) · two named founders and their split (Adam: systems and the swarm; Yarden: marketing and growth, the calibration layer) · the three-part mechanism: swarm executes, human calibrates, dashboard proves · the three-phase onboarding shape without durations (`04` §6) · the Definition-of-Done method as "what done means" (`04` §8) · the CORE catalog as scope of coverage, not promises, GEO not leading (`04` §5) · the four substitutes as comparison by elimination, no figures (`04` §10) · the anti-generic thesis as a founder-held belief (`02` §5) · "we are new; here is exactly how we work" as a stance, not a cited statistic (`02` §2b, LOW confidence) · "drafted by the swarm · calibrated by Yarden".

### §0.5 Founder inputs collected at R0 (2026-09-02)

- **FOUNDER — what didn't land in the 2026-09-02 build:** *"The whole feeling."* Structure and imagery both. Recorded, not acted on in Phase 1. Implication, logged once: the shared nine-section structure was part of what failed, so the G2 spine is one input among four in R1, not a near-answer; the design language's Layer 3/4 role assignments are a Phase 2 question.
- **FOUNDER — founder-written vision:** none, and none coming (*"i wont do that"*). R1 runs as written; the founder's reactions in R2 are the vision.
- **FOUNDER — arrival states:** first draft returned with *"think more about that"*; the revision in §0.2 accepted.
- **FOUNDER — "Monteshoder":** the text-first reading is right. No specific method or document is named.

### §0.6 Rules for this session

Text only · commit after every round · every engine writes its packet to disk and returns ≤150 words plus the path · a risk is stated once and logged, never repeated · markers PROVISIONAL / FOUNDER / OPEN are mandatory · no engine returns BLOCKED on `user-language` (§0.7) · the orchestrator writes no section itself: it frames, dispatches, merges and holds the founder loop.

### §0.7 The exception every framer brief carries

The `growth`, `product` and `customer` lenses all carry `requires_claims: [user-language]`. That claim cannot be satisfied: ICP is OPEN by founder decision, zero interviews, `USER-INSIGHTS.md` empty by design. The logged exception is `WEBSITE-DESIGN-PROCESS.md` §10 (line 194: *"Copy is the weakest layer. It will be written from our own thesis, not from anything a buyer has said"*) and §9 row 6 (line 188: ICP *"stays broad until this lands"*). Structural work proceeds; voice is PROVISIONAL.

---

## §1 — R1 CANDIDATE MAP

*Not yet written. Filled after R1: every distinct section idea across the three framer sets, deduplicated, tagged by which set(s) proposed it, with the sourcer precedent beside it and a blank column for the founder.*

---

## §2 — R2 SPINE

<!-- R2 SPINE START -->
*Not yet written. Filled after the founder reacts to §1.*
<!-- R2 SPINE END -->

---

## §3 — R3 THE JOURNEY

<!-- R3 JOURNEY START -->
*Not yet written. One walk per arrival state S1–S4 (S5 FUTURE), scroll by scroll, page by page.*
<!-- R3 JOURNEY END -->

---

## §4 — OPEN

- OPEN · S5 (search / AI-answer arrival) — FUTURE; no SEO/GEO exists.
- OPEN · the language/market answer (rule 5 in §0.2).
- OPEN · nav labels, booking-widget implementation, FAQ content, "why now" framing on About — carried from the G2 spine §F.

---

## §5 — FOUNDER DECISION LOG (this document)

| Date | Round | Decision |
|---|---|---|
| 2026-09-02 | R0 | "The whole feeling" is what didn't land last time. Recorded, not acted on. |
| 2026-09-02 | R0 | No founder-written vision. R1 runs as written. |
| 2026-09-02 | R0 | Arrival states: three axes, S1–S5, five cross-cutting rules — accepted. |
| 2026-09-02 | R0 | "Monteshoder" = text-first. |
