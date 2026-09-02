# STORYBOARD — TEXT ONLY — NOT A DESIGN

**Beeond marketing site · Phase 1 · what the site SAYS and what the visitor GOES THROUGH.**
**NOT PLAN OF RECORD.** Nothing here is locked or shipped. Per `CLAUDE.md`, no direction becomes the plan of record without a customer signal earned since the last one closed. Two warm prospects remain un-called; said here once.

| Field | Value |
|---|---|
| Version | **0.1 — R0 frame** (0.2 R1 candidate map · 0.3 R2 spine vN · 0.4 R3 journey · 1.0 gate) |
| Session | `orchestrator-site-thinking` · gold · branch `ceo-1-1788359253` · started 2026-09-02 |
| Founder | Adam, present, reacting per round |
| Source of truth | `HANDOFF-CLEAN-START/` (5 files). Nothing here overrides it. |
| Locked and not reopened | G0 reference read · G1 design language (`DESIGN-LANGUAGE.md`). The site's job was re-shaped by the founder on 2026-09-02 — see §0.1 |
| One input, not the answer | `docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md` |
| Markers | **FOUNDER** (a founder decision, dated) · **OPEN** (undecided) · **PROVISIONAL** (a voice string written from founder thesis, not customer language) |

**Every voice string in this document is PROVISIONAL.** ICP is OPEN by founder decision, zero customer interviews exist, `USER-INSIGHTS.md` is empty by design. Site copy, when it is eventually written, carries the claim `c-site-copy-is-founder-thesis-not-customer-language`.

---

## §0 — THE FRAME (R0 · closed 2026-09-02)

### §0.1 The one job — REVISED 2026-09-02 (founder, R0 grill)

The site's primary action is a **free footprint audit request**: the visitor submits his URL and email; the audit is prepared and sent; he is invited to a call to present it. The call is still the destination — the audit is the on-ramp to it, not a substitute for it.

- **Persistent nav CTA:** the free audit. One ask everywhere.
- **The ask page** (formerly "Book a Call"): the audit request dominates; a quiet *"already sure? book a call directly"* line serves S4 and anyone evaluating who does not want to wait.
- **Waitlist: retired.** The audit request is the low-commitment capture; a waitlist has no job left and would be a competing ask.

FOUNDER 2026-09-02, three decisions in sequence, each an override or acceptance taken with the orchestrator's recommendation in view: (1) the ask is a free footprint audit, not a working call; (2) delivery is two-step (submit → audit sent → call), not audit-on-the-call; (3) nav = audit, waitlist retired. This supersedes the "Book a Call · waitlist as fallback" line of the 2026-08-26 lock (`WEBSITE-DESIGN-PROCESS.md` §3) — logged as deliberate.

Risk, stated once and not repeated: the board's 2026-07-13 finding was against a *templated site wizard*; this audit is founder-prepared and real, which is a different thing, but it spends founder time per lead before any call exists, and capacity is bounded by sales time (`04-THE-PRODUCT.md` §3). Every audit sent is also a proof artefact the site can later point to — that is the upside.

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
3. **The proof question is answered by method, never by fake proof — and never by a stated status.** REVISED 2026-09-02 (founder): Beeond's stage is *implied only* — the named founders, the absence of logos and case studies, and the method shown in full say it; no sentence states "we are new" or "no clients yet." Where an arrival state reaches "who have you done this for," the answer is how we work, not a status line.
4. **Forwardability.** Decision power is unknown (interview cluster A tests whether he decides alone or sells it up). Approach must read as a document one person can send to another.
5. **The language/market objection has a reserved place.** "Do you work in my market, in my language?" is real for any Israeli visitor and the answer is OPEN (`01-THE-IDEA.md` §6). The storyboard reserves the slot; it does not decide the answer.

**Struck by rule 3's revision:** any "honest status" section, badge or block (the G2 spine's device 7 included). Framers proposing one in R1 will see it cut in R2.

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

### §0.6 Rules for this session — REVISED 2026-09-02 (founder)

Text only · commit after every round · every engine writes its packet to disk and returns ≤150 words plus the path · a risk is stated once and logged, never repeated · markers PROVISIONAL / FOUNDER / OPEN / ORCHESTRATOR are mandatory · no engine returns BLOCKED on `user-language` (§0.7) · the orchestrator writes no section itself: it frames, dispatches, merges and holds the loop.

**FOUNDER 2026-09-02, mid-session, verbatim in substance:** *stop discussing the small details; go with the orchestrator's vision and the agents' thinking; the founder reviews the final outputs and edits the text then; go deeper into text — what should appear and what is said; earlier decisions may be changed where they do not align with the vision or the storytelling.* Consequences:
- The founder loop moves to the end. R2 strike-through and R3 acceptance are the orchestrator's, marked **ORCHESTRATOR**, and the founder reacts to the finished 1.0.
- **Text depth is raised.** Every section in §2 carries a **TEXT (PROVISIONAL)** field — headline, deck, and the body in full where the section is wordy — not only an intent line. Still no numbers, no invented customer language, nothing on the §0.3 list. `copywriting` may now be loaded for it.
- Remaining grill items closed by orchestrator decision, OPEN to the founder's edit at the end: Yarden reads the finished storyboard with Adam, before Phase 2 · the bar (a percent) is named by the founder on the finished 1.0 · voice is "we" for the company, first person for each founder on About · the audit's turnaround expectation is set in the confirmation after submitting, never as a number on the page · the four-page architecture stands unless R2 finds a reason.

### §0.8 The feeling — evidence base for WHAT HE SEES

G0 and G1 are closed and locked. Phase 1 stays text-only, but every "WHAT HE SEES" line is conceived inside the locked feeling, so the engines read the analysis, not only the frame. All of it is committed in this worktree; the founder's `docs/design-brain/` folders (105 files, untracked in the main checkout) are byte-identical subsets of `references/founder-brain/` (verified by checksum 2026-09-02: 68/68, 20/20, 17/17), which also carries the meaning-named copies and the indexes.

| Read | What it is |
|---|---|
| `docs/05-marketing/DESIGN-LANGUAGE.md` | The build contract. Layer 1 invariants, Layer 2 the through-line ("real photography with a light technological layer — humanity constant, tech dialled"), Layer 3 the seven signature moments, Layer 5 the attention budget |
| `docs/05-marketing/references/ART-DIRECTION-BRIEF.md` | The art-direction read: the founder's taste stated back as rules |
| `docs/05-marketing/references/FOUNDER-REFERENCE-NOTES.md` | The founder's own notes on the references — which are spec and which are vibe |
| `docs/05-marketing/references/founder-brain/_brief-01..05-*.md` | The founder's five briefs: websites · branding · artistic direction · dreamy nature grids · addendum |
| `docs/05-marketing/references/founder-brain/_techniques-branding.md` · `_techniques-landing.md` | Techniques mined from the set |
| `docs/05-marketing/references/founder-brain/branding-feeling/_index-A.md` · `_index-B.md` · `_index-C.md` | Index of the 68 feeling images, each named by its meaning |
| `docs/05-marketing/references/founder-brain/landing-page/_index-landing.md` | Index of the 20 landing-page references |
| `docs/05-marketing/references/founder-brain/logo/_index-logo.md` | Index of the 17 logo images; the mark is locked |
| `docs/05-marketing/references/REFERENCES.md` | 12 craft boards (borrow / avoid) and the 4-image anti-slop negative set |
| `docs/05-marketing/references/site-captures/README.md` · `speakeasy/NOTES.md` | Teardowns of 9 external sites; Speakeasy is the founder's pick |
| `docs/05-marketing/g1-directions/A-crossstitch-poster.png` | The one surviving G1 direction image (cross-stitch is on the not-used list; context only) |
| `design/tokens/contrast.md` · `design/references/README.md` | The measured token contrast table |
| `docs/08-agents_work/sessions/2026-08-26-ceo-website-design-process.md` | The G0/G1 session record |

**Reading budget for an engine:** the design language (Layers 1–3, 5), the art-direction brief, the founder notes, `_brief-03-artistic-direction.md`, and the three feeling indexes — then up to eight images, chosen by their index names, only where a section's "what he sees" needs one. Never the whole image set.

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
- OPEN · the two founder credential facts — founder supplies before Phase 2 (decided 2026-09-02).
- OPEN · nav labels, audit-form implementation, FAQ content, "why now" framing on About — carried from the G2 spine §F.

---

## §5 — FOUNDER DECISION LOG (this document)

| Date | Round | Decision |
|---|---|---|
| 2026-09-02 | R0 | "The whole feeling" is what didn't land last time. Recorded, not acted on. |
| 2026-09-02 | R0 | No founder-written vision. R1 runs as written. |
| 2026-09-02 | R0 | Arrival states: three axes, S1–S5, five cross-cutting rules — accepted. |
| 2026-09-02 | R0 | "Monteshoder" = text-first. |
| 2026-09-02 | R0 grill | **The ask is a FREE FOOTPRINT AUDIT**, not a working call. Founder override of the orchestrator's recommendation (working call), taken with the board's 2026-07-13 templated-audit finding and the funnel's CBO-proposal status in view. The audit is founder-delivered, not a site wizard. |
| 2026-09-02 | R0 grill | **Audit delivery is two-step**: submit URL + email → audit prepared and sent → invitation to a call to present it. Founder override of the recommendation (book first, audit on the call). Risk stated once: founder time is spent per lead before any call is booked; capacity is bounded by sales time (`04-THE-PRODUCT.md` §3). |
| 2026-09-02 | R0 grill | **Nav CTA = the free audit. Waitlist retired.** The ask page carries the audit request plus a quiet direct-booking line for S4. Accepted the orchestrator's recommendation. Supersedes the 2026-08-26 "book a call · waitlist fallback" line, logged as deliberate. |
| 2026-09-02 | R0 grill | **Audit content = the four-part audit** from `04-THE-PRODUCT.md` §7: technical SEO scan · GEO/AI-search readiness · content and LinkedIn gap · competitor snapshot, as a short written document. The site says what it covers, never how many findings, pages, or days. Accepted the recommendation. |
| 2026-09-02 | R0 grill | **Honest status is IMPLIED ONLY.** Nothing on the site states "we're new" or "no clients yet"; the founders, the absence of logos, and the method say it. Founder override of the recommendation (plain words on Home and About), taken with the buyer-trust finding (`02-THE-PROBLEM.md` §2b, LOW confidence) in view. Risk stated once: S2's "where are your case studies" goes unanswered on the page and must be answered by method alone; a transparency company that does not state its own stage carries a tension a sharp visitor may notice. Rule 3 in §0.2 rewritten. |
| 2026-09-02 | R0 grill | **Founders named with roles; credential facts supplied by the founder before Phase 2 opens.** Adam: systems and the swarm. Yarden: marketing and growth, the calibration layer. One dated, verifiable fact each, no adjectives (spec: the 2026-07-03 pre-session pack §2, archived). Accepted the recommendation. OPEN until the facts arrive — About's founder section reserves the slot. |
| 2026-09-02 | R0 grill | **Dashboard: promise the practice, not the product.** "Every month you see exactly what was done, how much, and why" stated as how Beeond works, human sign-off in the same breath; no screenshot, no product name, no "see it live", no "coming soon". Accepted the recommendation. |
| 2026-09-02 | R0 grill | **Fold = outcome first; the swarm and the human arrive at section two.** Screen one says what he gets (his whole footprint, run for him — PROVISIONAL intent, not copy); the mechanism is the second beat. Founder override of the recommendation (name the swarm on screen one). Never "AI-powered" as a label anywhere. Consequence for R2: cross-cutting rule 2 ("the fold explains before it persuades") is satisfied by the outcome statement, and S2's one-screen differentiation moves to section two. |
| 2026-09-02 | R0 grill | **Pricing: one sentence of how, no figure**, in the ask page's FAQ — monthly, scoped to the footprint, told on the call after the audit. No tiers, no "starting at", no range. Accepted the recommendation. |
| 2026-09-02 | R0 grill | **Language/market slot stays empty, marked OPEN.** The storyboard reserves the place; nothing fills it until ICP and language scope land. Accepted the recommendation. |
| 2026-09-02 | R0 grill → close | **FOUNDER: stop the grill; go with the orchestrator's vision and the agents' thinking; review the finished outputs; go deeper into text.** Founder loop moves to the end; text depth raised (§0.6). Feeling evidence base handed to every engine (§0.8). Remaining grill items closed by orchestrator decision, OPEN to the founder's edit. |
