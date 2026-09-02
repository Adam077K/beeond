# STORYBOARD — TEXT ONLY — NOT A DESIGN

**Beeond marketing site · Phase 1 · what the site SAYS and what the visitor GOES THROUGH.**
**NOT PLAN OF RECORD.** Nothing here is locked or shipped. Per `CLAUDE.md`, no direction becomes the plan of record without a customer signal earned since the last one closed. Two warm prospects remain un-called; said here once.

| Field | Value |
|---|---|
| Version | **0.3 — R2 spine v1** (0.1 R0 frame · 0.2 R1 candidate map · 0.4 R3 journey · 1.0 gate) |
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

### §0.6b The experience principle — FOUNDER 2026-09-02

*"Easy to understand, easy to learn, easy to use."* The founder's own words for what the visitor must get from the site, stated mid-session, verbatim in substance. It governs R2 and R3 above every device: a section that is clever but not immediately understood is cut; the journey is judged on how little the visitor has to work. Phase 1 is text, storytelling and the user experience; Phase 2 — visuals, images, motion, animation, video, components per section, style and references — opens only after the text and storytelling are settled, per the founder.

### §0.7 The exception every framer brief carries

The `growth`, `product` and `customer` lenses all carry `requires_claims: [user-language]`. That claim cannot be satisfied: ICP is OPEN by founder decision, zero interviews, `USER-INSIGHTS.md` empty by design. The logged exception is `WEBSITE-DESIGN-PROCESS.md` §10 (line 194: *"Copy is the weakest layer. It will be written from our own thesis, not from anything a buyer has said"*) and §9 row 6 (line 188: ICP *"stays broad until this lands"*). Structural work proceeds; voice is PROVISIONAL.

### §0.8b The vibe — FOUNDER 2026-09-02, verbatim in substance

*"Expensive, technology, minimalistic, futuristic, but clean. A human vibe for the brand and the experience. Visuals like the bee or flowers, ink, adding layers — ASCII, dot circles, other animations, numbers — to create a futuristic vibe that includes the human and the sky. All the references in the design brain are in those styles."*

This is the one-line brief for the register of every word in this document and for every visual decision in Phase 2. It is consistent with the locked design language (Layer 2: real photography with a light technological layer; Layer 3: the seven signature moments, including the ASCII/glyph field, the dot-matrix halftone and the honeycomb mesh), so nothing here reopens G1. For the text it means: spare, exact, confident; no hype; the loudness comes from the image and the words stay quiet and expensive. **Numbers** are a Phase 2 texture (a running head, coordinates, a ticking local time, a section index — DESIGN-LANGUAGE Layer 3 "craft detail worth keeping"); they are never a claim (§0.3 item 1).

### §0.9 UX laws the storyboard obeys — FOUNDER 2026-09-02: "include the UX laws and how the human brain reacts"

Heuristics, not measurements; named so every decision can be traced to one. Index: lawsofux.com (accessed 2026-09-02, confidence high that these are the canonical statements; they are design heuristics, not Beeond-specific evidence). Each law is applied twice: to the text and structure now (R2, R3), and to interactions and motion in Phase 2.

| Law | What it says | Applied now (text, structure, journey) | Applied in Phase 2 (interaction, motion, visuals) |
|---|---|---|---|
| **Hick's law** | Decision time grows with the number of choices | One ask, one label, site-wide. Nav of two links plus the CTA. Never a competing ask | One interactive element per screen invites action; secondary controls stay quiet |
| **Miller's law** | People hold about four things at once | No group over three or four: three mechanism parts, three phases, four comparison rows, four or five FAQ rows | Grids and card sets capped the same way; no six-tile bento |
| **Cognitive load** | Every extra element costs attention | One idea per section; a headline a stranger understands in one read; prose only in QUIET sections | Motion happens on one thing at a time; an animation never competes with the headline |
| **Serial position effect** | First and last items are remembered best | The first and last sections of each page carry its most important belief; the middle carries evidence | The hero and the close are where the signature moments spend hardest |
| **Von Restorff effect** | The one thing that differs is the one thing remembered | One distinct element per page: the LOUD section, the single accent on the CTA | One signature moment per section, each used once site-wide (Layer 3) |
| **Jakob's law** | People expect a site to work like the sites they know | Logo left, CTA right, URL field then email, FAQ as question and answer; conventions kept where they carry no meaning | Scroll behaves like scroll; the pinned set-piece is the one deliberate exception, below the fold |
| **Progressive disclosure** | Show only what is needed at each step | Home states, Approach deepens, the ask page resolves; nothing fully explained on Home | Hover and scroll reveal detail; nothing essential is hidden behind an interaction |
| **Peak-end rule** | An experience is judged by its peak and its end | The close of every page is its second-best moment, never an afterthought; the ask page ends on what happens next, not on a form | The closing moment gets a quiet, warm treatment (Layer 3 candidate: motion blur / long exposure) |
| **Aesthetic-usability effect** | Beautiful things are perceived as easier to use | Noted; not acted on in text | The whole reason the craft bar is award-grade rather than functional (`WEBSITE-DESIGN-PROCESS.md` §8) |
| **Doherty threshold** | Interaction feels fluid under roughly 400 ms | Not applicable to text | The engineering floor already binds it: LCP under one second, CLS zero, `scrub-fps.mjs` at 4× throttle |
| **Zeigarnik effect** | An unfinished task stays in mind | The two-step audit is an open loop the visitor started; the confirmation names the next step so the loop stays open on purpose | The form's submitted state shows what happens next |
| **Fitts's law** | Targets that are big and near are reached faster | The CTA is a button, not a text link; the direct-booking line is visibly smaller by design | Target sizes at or above the stated minimum, measured (`craft` review lens) |

**How R3 uses this:** every journey walk names, per scroll, which law the section is leaning on, so that a section that leans on none is a section to question.

---

## §1 — R1 CANDIDATE MAP (v0.2 · 2026-09-02)

Three framers returned complete sites: **P** = `framer` [product] (mechanism-first, `packets/2026-09-02-r1-framer-product.md`), **G** = `framer` [growth] (conversion-first, `…-growth.md`), **C** = `framer` [customer] (objection-first, with an 18-row objection register, `…-customer.md`). Every distinct section idea across the three is one row below, deduplicated conservatively. The strike-through is the orchestrator's, by founder delegation (§0.6), and every CUT traces to a FOUNDER decision in §5 or to the attention budget. Nothing here is a new idea of the orchestrator's; MERGE rows combine two proposals into one section, which is what the founder asked for over "pick one of three".

**Two founder decisions did most of the cutting:** honest status is *implied only* (three "honest status" sections and two About "company-state" blocks go), and the waitlist is *retired* (one section goes). **One founder decision re-shaped the top of Home:** outcome first, mechanism at section two.

### Home

| # | Section idea | By | Decision | Why | Attention |
|---|---|---|---|---|---|
| H1 | **Hero / opening statement** — what this is, in plain words, over a real human photograph, one line under it, the nav CTA beside it | P G C | **KEEP, re-shaped** | FOUNDER: outcome first. The hero states what he gets (his whole footprint, run for him) and puts a human on screen one; it does not name the swarm. G's per-state fold jobs carried into R3 | LOUD |
| H2 | **Honest status / honest ground** — two founders, no clients yet, stated before any proof | P G C | **CUT** | FOUNDER: status implied only. The belief it carried ("they are not hiding that they are new") moves to About's named founders and to the method shown in full | — |
| H3 | **The mechanism** — swarm executes · human calibrates · dashboard proves, as three named parts | P G C | **KEEP at section two** | FOUNDER: mechanism at section two. ORCHESTRATOR picks P's variant (A): each part paired with what the client concretely experiences from it, in sequence — that pairing is what makes it *easy to understand* (§0.6b). G/C's three-parallel-beats variant is the fallback if it runs wordy | MEDIUM |
| H4 | **The standard, shown on a real piece** — a proof substitute that is true | P3 P4 G4 C4 | **MERGE** | Two ideas competed for one slot: the Definition-of-Done preview (P3, G4 recommended) and illustrative artefact cards (P4, C4 recommended). Merged: one or two artefacts *mid-calibration*, each showing a written rule being applied to a real draft (a hook line rejected for opening on a buzzword; a founder-voice post sent back because it was a company post with a name swapped). The object makes it tangible, the rule makes it true. Caption states it is illustrative, not client work | MEDIUM |
| H5 | **The process** — Foundation · Content Engine · Amplification, in kind, no durations | P G C | **KEEP** | Unanimous; S3's must-believe. Framed as "what a month looks like", never a calendar | MEDIUM |
| H6 | **What's covered** — the CORE catalog as a scannable self-qualification list, GEO not leading | P G C | **KEEP, as its own section** | P and C both offered folding it into H3 (G2 spine §F.8); ORCHESTRATOR keeps it separate because self-qualification ("does this cover me") is a different job from "how it runs", and folding makes H3 wordy at MEDIUM. Low text: a list | QUIET |
| H7 | **Comparison by elimination** — in-house hire · agency retainer · point tools · doing it yourself, subtraction only | P G C | **KEEP** | Unanimous; the one evidence-backed device (`04` §10). LOUD and low-text, ~20 words a row | LOUD |
| H8 | **Mid-page ask beat** — one line and the CTA, right after the comparison, not inside it | G | **KEEP, as a beat** | S2's ask sits here by §0.2. G's argument holds: a CTA inside the table reads as a fifth alternative. A beat, not a section with an argument; not counted against the LOUD budget | QUIET |
| H9 | **Objection handling** — three or four quiet FAQ rows | P G C | **KEEP** | The prose-bearing QUIET section Layer 5 expects. Rows: "is this just AI tools" · "I already have an agency" · "why no price" (the one FOUNDER sentence of *how*) · the reserved language/market row (OPEN, rule 5) | QUIET |
| H10 | **Close + CTA** — one line, the audit ask, no recap | P G C | **KEEP** | Unanimous | LOUD |

Home after the map: 8 sections + 1 beat (H1 H3 H4 H5 H6 H7 · H8 beat · H9 H10 — an earlier draft of this line said nine; the rows say eight). LOUD at H1, H7, H10 — never adjacent. (Before the map: 10/9/10 across the three sets; H2 cut, H3+H4 collapsed from up to three sections into two.)

### Approach

| # | Section idea | By | Decision | Why | Attention |
|---|---|---|---|---|---|
| A1 | **Reading this cold** — header that makes the page stand alone for someone it was forwarded to, with the three chapter anchors as its table of contents | G1 + P1 | **MERGE** | Rule 4 (forwardability) is the page's reason to exist; G's "reading this cold" framing and P's chapter anchors are one header | QUIET |
| A2 | **Page structure: three chapters keyed to the mechanism** (Executes · Calibrates · Proves) with onboarding inside Executes, the standard inside Calibrates, the monthly view inside Proves | P | **KEEP over the flat sequence** | G and C kept the G2 spine's flat six-section list. ORCHESTRATOR takes P's chapters: one idea per chapter, the same three words as Home H3, forwardable as "here is exactly how it works". P's own risk (a reader scanning for "onboarding" or "quality" by name) is met by plain-word chapter subtitles, e.g. *Executes — how the work runs, phase by phase* | — |
| A3 | **Executes** — the three phases in full, what changes for the client in each, no durations | P2 G3 C3 | **KEEP** inside chapter 1 | Unanimous content | MEDIUM |
| A4 | **Calibrates** — Yarden named as the calibration layer; the Definition-of-Done method with its two sharpest rules | P3 G4 C4 | **KEEP** inside chapter 2 | Unanimous; the deepest honest answer to "will my brand sound generic" | MEDIUM |
| A5 | **Proves** — what he sees every month: what was done, how much, why, with the human sign-off | P4 G5 C5 | **KEEP, rewritten** | All three wrote it as "the dashboard, honestly: build target #1, not built yet". FOUNDER: promise the practice, not the product — so this chapter describes the monthly practice as how Beeond works; no product name, no screenshot, no "not built yet", no "coming" | MEDIUM |
| A6 | **Close + CTA** | P G C | **KEEP** | Unanimous | LOUD |

### About

| # | Section idea | By | Decision | Why | Attention |
|---|---|---|---|---|---|
| B1 | **Two people, named** — Adam and Yarden by name and photograph, one line on the split | P G C | **KEEP** | FOUNDER: named with roles. The credential-fact slot (one dated, verifiable fact each) is reserved here, OPEN until the founder supplies them | MEDIUM |
| B2 | **What each of them actually does** — two bios, tied to the mechanism part each owns | P G C | **KEEP** | P's tie to Executes/Calibrates makes About evidence for Home. ORCHESTRATOR: written in each founder's first person | QUIET |
| B3 | **Honest company-state block** — zero clients, stated plainly | P C, G (merged with why-now) | **CUT** | FOUNDER: status implied only | — |
| B4 | **Why now** — timing and conviction, no moat claim | P4 C4 G3 | **KEEP, at the understated setting** | P's "founder motivation" framing and C's (B) are the same move; C's (A) blunt moat-assessment is rejected by all three. Says why these two are doing this now; claims no moat (`01` §5); states no status | MEDIUM |
| B5 | **Close + CTA** | P G C | **KEEP** | Unanimous | LOUD |

### The ask page (formerly Book a Call — slug OPEN)

| # | Section idea | By | Decision | Why | Attention |
|---|---|---|---|---|---|
| D1 | **Header** — the two-step flow stated plainly: submit → audit sent → a call to go through it | P C | **KEEP** | Answers "is this a sales trap" (C's O18) before the form | QUIET |
| D2 | **The audit request** — URL and email, the dominant element, with one trust line at the point of friction saying what the URL and email are used for | P C | **KEEP, merged** | C's trust line beside the form (O15 fires there, not in a distant FAQ) merged into P's form section | LOUD |
| D3 | **Already sure? book a call directly** — a quiet line beside the form for S4 | P C | **KEEP** | FOUNDER: the direct-booking line. Beside the form, not after the FAQ, because S4 wants speed | QUIET |
| D4 | **What to expect** — four or five FAQ rows | P C G | **KEEP** | Rows: what is in the audit (the four parts, in kind) · when you will hear back (in kind, never a number) · why no price (FOUNDER: one sentence of how) · what if I want to stop (OPEN: names the question, defers terms to the call; no invented policy) · my market and language (OPEN slot). G's ordering rule kept in spirit: the FAQ comes before any exit | QUIET |
| D5 | **Not ready yet? / waitlist** | G | **CUT** | FOUNDER: waitlist retired | — |

### Carried from the three sets into R2, not as sections

- **Nav** (all three): logo · Approach · About · the audit CTA, persistent. No waitlist anywhere.
- **C's objection register** (18 rows) is the checklist R3 walks: every row must be answered by a surviving section, deferred as OPEN, or acknowledged as unanswerable.
- **G's per-state fold jobs** for Home and its ask-position counts per page feed R3.
- **P's chapter subtitles** and **client-experience pairing** are the "easy to learn" devices; R2 writes them out.
- The **sourcer's ten-site read** (`packets/2026-09-02-r1-sourcer-agency-site-structure.md`, PARTIAL: ten fetched, Tuff Growth lost to a 403) landed after R2 was dispatched; the spine framer did not see it. Checked against §2 afterwards by the orchestrator, on the file: **ask in the hero body** (9 of 10) — met, H1 carries the CTA · **one label everywhere** (5 of 10, the rest vary) — met, one label site-wide · **ask in the nav** (9 of 10) — met · **the ask repeats three or more times** (9 of 10; mode nav · hero · mid · close) — met on Home (nav, hero, beat, close) · **client-identity proof at section two** (8 of 10; logos 10 of 10) — Beeond has none and, by founder decision, section two is the mechanism; the thin-proof sites' substitutes are a shown process (7 of 10 — H5, A3), a homepage FAQ handling cost, timeline and fit (5 of 5 — H9, D4), named humans (6 of 10 — B1, B2) and risk-reversal (their guarantees and published prices; here, the free audit itself and H10's "yours whether we end up working together or not") · **a comparison table on the homepage** (2 of 10, both AI-native entrants) — H7 keeps Beeond in that company · **a dedicated CTA block before the footer** (6 of 10) — met on every page. One conflict, noted once: **8 of 10 carry a proof destination in the nav** (Case Studies, Results, Portfolio); Beeond's nav has none and cannot honestly have one, so About and Approach carry that job between them.

## §2 — R2 SPINE

<!-- R2 SPINE START -->

**Every voice line in this section is PROVISIONAL.** Said once here, not repeated per line. It is written from the founder's 2026-08-08 positioning statement (`01-THE-IDEA.md` §1) and the plain descriptive language he locked on 2026-06-30 — never from anything a buyer has said, because no buyer has said anything yet (§0.7). **OPEN** is marked inline wherever a thing is undecided. The section list and its order are §1's KEEP/MERGE rows; where an attention mark differs from §1's default, the reason is written beside it.

**Four pages: Home · Approach · About · The Ask.** Section counts: Home 8 + one ask beat · Approach 5 · About 4 · The Ask 4.

> **Counting note.** §1's Home summary line reads "9 sections + 1 beat." The surviving KEEP/MERGE rows are H1, H3, H4, H5, H6, H7, H9, H10 — **eight** sections, plus H8 as the beat. H2 was cut. The rows are the authority; the summary line is an arithmetic slip. R2 builds eight.

> **Reading the TEXT fields.** Everything after a `>` inside a **TEXT (PROVISIONAL)** block is proposed site copy. Everything in bold before an em-dash is a **structural label for this document, not copy** — "Block one," "Card two," "Anchor three," "Field one," "Eyebrow," "Deck," "Headline," "CTA." None of those words appear on the page. Anything in `[square brackets and code style]` is an OPEN slot: it stays visibly empty until the founder fills it, and **no engine fills one with a plausible-sounding substitute.**
>
> **Counts appear nowhere in the copy, deliberately.** Not "three parts," not "two founders," not "four things in the audit." §0.3.1 bans counts and the brief for this round repeats the ban without §0.3.1's exception, so R2 wrote every line without one. Where a count would have been the natural connective, the copy names the things instead. This is the rule that most shaped the sentences below, and it is worth knowing before reading them as odd.

---

### §2.0 — Nav and footer

**NAV — persistent, every page, unchanged as you scroll.**
Logo left, links centre-right, ask far right — the arrangement every visitor already knows, so none of his attention is spent learning it (Jakob's law). Two links only: **Approach · About**. Then the ask. Nothing else. No waitlist, no second CTA, no dropdown, no announcement bar, no services menu — and that last one is a deliberate departure: eight of the sourcer's ten sites carry a services or solutions item, and the two that don't are the two single-offer productized businesses, which is what Beeond is. Coverage is a section on Home, not a destination. Reachable from any scroll position on any page, which is cross-cutting rule 1 satisfied. On The Ask page the nav ask scrolls to the form rather than reloading.

**ONE LABEL, EVERYWHERE: "Get your free footprint audit."**
Every instance of the ask on every page carries these exact words — nav, hero, mid-page beat, close, and the form's own submit button. Five of the sourcer's ten sites reuse one label and five vary it; one of the varying sites uses four different labels for the same ask. Varying it is how a single ask starts reading as several. This is Hick's law in one decision: one ask, one label, nothing to choose between.

**THE ACCENT BUDGET — a real conflict, resolved here rather than left to Phase 2.**
Layer 1 of the design language is a hard rule: one accent, only on the primary CTA, **at most twice per page**. The sourcer's mode is **four** ask placements on a homepage (nav, hero, mid, close). Both survive, because *placement* and *accent fill* are different things:

| Position | Treatment | Accent fill? |
|---|---|---|
| Nav | Outlined in the accent, not filled — it is chrome, present always, and does not need to shout | No |
| Hero | **Accent-filled button** | **Yes — one of two** |
| Mid-page beat | Text link, accent as text colour (measured 8.2:1 AAA on both grounds, so this is supported, not a compromise) | No |
| Close | **Accent-filled button** | **Yes — two of two** |

Four placements, two fills. The fill is the page's one visually distinct element (von Restorff), and it lands at the two moments that matter: the first screen and the last. Everything else on the page earns attention through scale, ground and photography, never through colour.

**FOOTER — quiet, low, no ask of its own.** Three groups, nothing loose:
- **Where to go** — Approach · About · the audit page, as a plain text link, never a button.
- **Who to reach** — one contact address, and the sign-off line **"drafted by the swarm · calibrated by Yarden"**, set small in the utility face. §0.4-sanctioned, and the one place the mechanism appears as a signature rather than an argument.
- **The small print** — wordmark, copyright, privacy link. `[OPEN — no privacy page exists]`

**No waitlist. No newsletter. No logo strip. No social proof band. No awards row.**

---

### §2.1 — HOME

**The page's job.** Make a stranger understand, in one screen, what he would be buying — then give him the mechanism, the standard, the shape and the alternatives in that order, and ask once he has enough to decide.

**Arrival states served.** S1 (burned by generic AI output, browsing) and S3 (nobody owns marketing, evaluating) are the states this page is built for end to end. S2 (paying an agency, evaluating) is served from section two onward and takes his ask at the mid-page beat. S4 (warm, ready) does not read this page — he uses the nav button or goes to About. S5 is FUTURE.

**Where the ask appears — four instances of one ask, never a second one.** The nav (outlined, position zero, no scroll). **The hero body**, accent-filled. The mid-page beat at item 7, as accent text. The close at item 9, accent-filled. Count: **4** — which is the sourcer's mode exactly (nav, hero, mid, close), and an ask sits in the hero body in nine of its ten sites. Two accent fills, per Layer 1.

> **The proof problem, and what carries it.** Client-identity proof sits at section two in eight of the sourcer's ten sites, and **no site of the ten carries none.** Beeond has none and, by founder decision, section two is the mechanism instead. The sourcer's own finding is that its three thinnest-proof sites answer with structural substitutes rather than evidence — a shown process (seven of ten), a homepage FAQ that handles cost, timeline and fit (five of five FAQs found), named humans (six of ten), and risk-reversal. All four are available to Beeond and all four are load-bearing here, so they are named rather than left to happen:
>
> | Substitute | Carried by | Note |
> |---|---|---|
> | A shown process | **H5**, and H3 for the mechanism behind it | Free — it is true and costs nothing to state |
> | An FAQ handling cost, timeline and fit | **H9**, rebuilt to cover all three | Every FAQ the sourcer found handles exactly these |
> | Named humans | **H3 block two** names Yarden on Home, About names both | Available to any company that has people |
> | Risk-reversal | **The free audit itself** — stated in the hero, in H10, on the ask page | The only form available: no guarantee and no price may be used |
>
> Two of the sourcer's substitutes are closed to us and stay closed: a **guarantee** (three of ten) and a **published price** (four of ten). Both are on the never-claim list. That leaves Beeond running the thin-proof playbook with two of its five instruments missing, which is worth knowing rather than discovering in Phase 2.

---

#### H1 · Hero — LOUD

**THE JOB.** Say what he gets, in words a stranger understands in one read, with a person on screen.

**WHAT HE SEES.** One photograph, full-bleed, running off at least two edges of the frame — a real person, warm, shot from low against open sky, the kind of light that is clearly a real afternoon and not a studio. It is not a desk, not a laptop, not a screen. Over it, set in the open part of the frame and never crossing the person: a short headline, one line beneath it, **and the accent-filled button directly under that** — the ask is in the hero body, not only in the nav, because an ask sits in the hero body in nine of the sourcer's ten sites. One quiet line under the button carries the risk-reversal, which is the only such instrument the never-claim list leaves open. Nothing else on the screen. He reads the headline first, the line second, and the button is already in his eye because it is the only piece of colour on the page.

*The register, per the founder: expensive, minimal, futuristic, clean, human. The loudness is entirely in the image; the words stay quiet. No exclamation, no superlative, no verb that strains. If a line could appear on a discount landing page it is wrong here.* *Phase 2 note: pulls toward Layer 3 moment 1 (the glyph field masked to the subject) at the dramatic end of the dial — human against sky with the technological layer over it is the through-line at its loudest. Not assigned. Instrument texture — a running head, a section index, the ticking local-time stamp with its "(Scroll)" cue — belongs here if anywhere; it is a visual device, never a claim.*

**TEXT (PROVISIONAL).**

> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

*Two alternates the founder may prefer, with the reason each loses.* (B) *"We run your marketing. All of it. And we show you every piece."* — better rhythm, and it puts transparency in the headline; loses because it carries two ideas into a LOUD slot. (C) *"Everything your marketing needs, run as one."* — closest to the founder's own "like a single, coordinated agency"; loses because it describes us rather than what he gets, and the founder's decision was outcome first.

**THE BELIEF AFTER.** I know what they would do for me, and there is a person in this somewhere.

**ARRIVAL STATES.** S1, S2, S3 (the fold explains before it persuades) · S5 FUTURE. Not S4 in content — his fold is About.
**OBJECTIONS ANSWERED.** None. This section makes the later ones legible; answering one here would break outcome-first.
**MUST NOT CLAIM.** §0.3.3 (no persona — "your" must never become "for B2B SaaS founders") · §0.3.8 (no "AI-powered") · §0.3.1 (no numbers) · and the FOUNDER decision this section exists to carry: **do not name the swarm here.** The mechanism is section two.

---

#### H3 · How the work gets done — MEDIUM

**THE JOB.** Turn one blurry claim into three named parts, each paired with what he would actually experience from it.

**WHAT HE SEES.** Three blocks read top to bottom as a sequence, not a grid of equal peers — the second follows from the first, the third follows from the second, and the layout has to say so. Each block is a plain-language label, one line of what it is, and one line of what it means for him. Light ground, hairlines exposing the column grid, no icons, no feature cards. Short enough that all three can be held at once.

**TEXT (PROVISIONAL).**

> **Eyebrow** — How it works
>
> **Headline** — What happens, in order, every time.
>
> **Block one — The work gets done.**
> A swarm of agents runs the output: content, pages, posts, technical fixes, campaigns, across every channel at once, coordinated as one thing rather than a pile of tools.
> *What that means for you:* the work happens without you managing it.
>
> **Block two — A person signs off on it.**
> Yarden reads every piece against a written standard before it reaches you or your audience. Not a spot check — a standard, written down, that a piece has to clear before it counts as finished.
> *What that means for you:* nothing goes out that doesn't sound like you.
>
> **Block three — You see all of it.**
> Every month you see exactly what was done, how much of it, and why — with the name of the person who signed it off.
> *What that means for you:* you never have to ask what you're paying for.

**THE BELIEF AFTER.** This isn't "AI does everything." It's three specific things, and I can see which one stops it being generic.

**ARRIVAL STATES.** S1 (block two is the answer to "this is just AI") · S2 (block three is the answer to agency opacity) · S3 (block one is the answer to "who does the work").
**OBJECTIONS ANSWERED.** O1 · O5 · O14.
**MUST NOT CLAIM.** §0.3.5 — the hardest temptation on this page. Every verb here is present-tense *how we work*; not one is *how it went*. §0.3.6 — block three describes the practice and **never names a product, never says "dashboard", never implies a thing to log into, never says "coming."** §0.3.8 — "a swarm of agents" is the mechanism and is allowed; "AI-powered" is a label and is not.

---

#### H4 · What "done" means — MEDIUM

**THE JOB.** Show one written rule catching one real thing, so the standard is an object rather than a promise.

**WHAT HE SEES.** One or two artefact cards — hard rectangles at the system radius, overlapping at slightly different depths, shadow and overlap doing the depth rather than any glass. Each card holds a fragment of work mid-calibration: a draft line struck through with the rule that killed it set beside it in the utility face, and the rewritten line under it. Small caption under the set. The eye lands on the struck-through line first because it is the only thing on the page that looks like it failed. *Phase 2 note: pulls toward Layer 3 moment 6, the blueprint / construction overlay — the page showing its own working is exactly this section's argument. Not assigned.*

**TEXT (PROVISIONAL).**

> **Eyebrow** — The standard
>
> **Headline** — A piece of work isn't finished because it got produced.
>
> **Deck** — It's finished when it clears a written rule. Here's what that looks like, and what it catches:
>
> **Card one — rule:** A post can't open on a buzzword.
> *Caught:* "In today's rapidly evolving landscape, unlocking growth means…" → sent back, rewritten to open on the thing that actually happened.
>
> **Card two — rule:** A founder's post is written from the founder — interview, draft, their edit. Never the company post with a name swapped in.
> *Caught:* the same paragraph running on both accounts → sent back, rewritten as one post from the founder and a different one from the company.
>
> **Caption** — Illustrative. Made to show the rule, not taken from a client's work.

**THE BELIEF AFTER.** There's an actual bar here, and I've now seen it stop something.

**ARRIVAL STATES.** S1 primarily — the sharpest thing on the site against "it'll look generic." S2 secondarily.
**OBJECTIONS ANSWERED.** O2 (as far as it can honestly go — a method shown, not an outcome promised) · O1 reinforced · O4 answered by method rather than by status, which is the whole of what the founder's rule-3 revision left this page.
**MUST NOT CLAIM.** §0.3.2 — the caption is load-bearing; without it an artefact card reads as client work. §0.3.5 — the rules exist and are real; **they have not been run against a paying client's deliverable and nothing here may suggest they have.** No pass rate, no "we catch N% of…", no guarantee that your brand won't sound generic.
*Note for the Phase 2 editor: card one deliberately contains banned buzzwords ("rapidly evolving landscape," "unlocking growth"). They appear only inside the struck-through line, as the thing the rule rejects. This is the one place on the site where a §0.3.8 word is correct, and a lint pass that strips it removes the section's entire demonstration.*

---

#### H5 · The shape of it — MEDIUM

**THE JOB.** Let him picture what he is signing up for, without a calendar.

**WHAT HE SEES.** Three named phases as a horizontal strip, each a label and one line. Low text, plainly sequential, no dates, no numbers, no progress bar. *Phase 2 note: this is the natural pin for the Layer 4b scroll set-piece — the sequence is already a scrub. It is below the fold, which the budget requires. Not assigned.*

**TEXT (PROVISIONAL).**

> **Eyebrow** — What happens
>
> **Headline** — It doesn't all switch on at once.
>
> **Foundation** — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it.
>
> **Content Engine** — Output starts moving. The first channels go live and the first month's record lands in front of you.
>
> **Amplification** — The footprint is fully on, and the work turns from starting things to making them better.

**THE BELIEF AFTER.** I know roughly what the first stretch looks like, and nobody is pretending it all lights up on day one.

**ARRIVAL STATES.** S3 primarily — this is his named must-believe. S2 secondarily (the engagement has a shape).
**OBJECTIONS ANSWERED.** O7 (the shape half).
**MUST NOT CLAIM.** §0.3.1 — **no weeks, no days, no months-to-results, no phase durations.** The source flags the original timeline as an untested hypothesis; the phases survive, the calendar does not. No price attached to a phase.

---

#### H6 · What's covered — QUIET

**THE JOB.** Let him find his own channel in a list and decide for himself whether this covers him.

**WHAT HE SEES.** A plain scannable list in four labelled groups, set in columns, no icons, no cards, no ticks. The quietest thing on the page and deliberately so — it is a reference, not an argument. One line above it and one below. **The grouping is the section's whole design decision:** a flat run of a dozen channel names is a dozen things to hold, and nobody holds a dozen. Four groups of three or four is Miller's law applied literally, and it converts a list into a shape a visitor can scan for himself in one pass.

**TEXT (PROVISIONAL).**

> **Eyebrow** — Coverage
>
> **Headline** — What "whole footprint" actually covers.
>
> **Getting found** — SEO content · Technical SEO and schema · Visibility in AI answers · Rank tracking
>
> **Being worth reading** — LinkedIn and social · Founder-led content · Email lifecycle and deliverability
>
> **Turning visits into conversations** — Paid ads · Landing pages and CRO · Website build
>
> **Knowing what happened** — Reporting · Brand monitoring
>
> **Closing line** — Not all of it, for everyone. It starts narrow and widens, scoped to what your footprint actually needs.

**THE BELIEF AFTER.** This covers the thing I actually care about, and they're not claiming to do everything for everyone.

**ARRIVAL STATES.** S2 · S3 — both are checking whether the whole footprint genuinely reaches them.
**OBJECTIONS ANSWERED.** O7 (the scope half, completing what H5 started).
**MUST NOT CLAIM.** §0.3.1 — no counts of channels, pieces or deliverables. The add-on lines stay off this list; naming them would present unconfirmed scope as confirmed. **GEO does not lead** — its position at the top of the source catalog is inherited order, not priority, and leading with it would pitch the one thing the market file calls table stakes.

---

#### H7 · What you're choosing between — LOUD

**THE JOB.** Make the offer concrete by subtraction, against the four things he is actually weighing.

**WHAT HE SEES.** The page changes ground here — this is a chapter break, and the darkest, quietest surface on the site. Four rows, hairline-separated, each a label and one short line. No Beeond row: adding a fifth row would turn an elimination into a comparison and hand him a scorecard. Very little text for a loud section, which is the point.

**TEXT (PROVISIONAL).**

> **Headline** — What you're choosing between.
>
> **An in-house hire** — You get the skills of the person you hired, and nothing ships until they start.
>
> **An agency retainer** — The work happens somewhere you can't see, at whatever pace their team has room for.
>
> **A stack of tools** — You still have to run them, and none of them joins your channels up.
>
> **Doing it yourself** — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't.

**THE BELIEF AFTER.** I can see where this sits against my real options, and it isn't arguing against a straw man.

**ARRIVAL STATES.** S2 primarily — §0.2 places his ask right here. S3 secondarily (hire vs agency vs later).
**OBJECTIONS ANSWERED.** O3.
**MUST NOT CLAIM.** §0.3.1 — no figures on either side; no "cheaper than an agency," no hours, no percentages, no implied price. No named competitor. Nothing that reads as a slur on a category rather than a structural observation about it.

---

#### H8 · The ask beat — QUIET *(a beat, not a section; not counted against the LOUD budget)*

**THE JOB.** Take S2's ask at the exact moment the comparison lands, without putting a button inside the comparison.

**WHAT HE SEES.** One line and the same button, set small, immediately under the comparison on the same ground. It has no argument of its own and is visually subordinate to what it follows.

**TEXT (PROVISIONAL).**

> **Line** — Want to see where yours actually stands?
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** This is a reasonable moment to just ask about my own situation.

**ARRIVAL STATES.** S2 primarily · S3.
**OBJECTIONS ANSWERED.** None. It is the ask, not an answer.
**MUST NOT CLAIM.** §0.3.11 — this is the same ask restated, never a second one. A button inside the comparison table would read as a fifth alternative, which is why this is a beat and not a row.

---

#### H9 · Before you ask — QUIET

**THE JOB.** Answer the three sharpest doubts plainly, in his words, before he has to go looking.

**WHAT HE SEES.** The page's one prose home. Three question-and-answer rows, hairline-separated, questions in the display face and answers in running text near sixty-five characters. Nothing visual. This is where the text budget is spent.

**TEXT (PROVISIONAL).**

> **Headline** — Before you ask.
>
> **Q. Is this just AI tools with a markup?**
> A. The agents do the volume — that part is a machine and we're not going to pretend otherwise. What makes it worth paying for is the standard it gets held to and the person who holds it there. Without that check the work would look like everyone else's, which is the thing we built this to avoid.
>
> **Q. I already have an agency. What's different?**
> A. Mostly, what you can see. Every month you get the record of what was done, how much of it, and why, with a name attached to the sign-off. That's the part we'd want to see if we were the ones paying.
>
> **Q. Why isn't there a price on this site?**
> A. Because it depends on how much footprint there is to run, and we haven't seen yours. Look at your site first — that's what the audit is — and the number comes on the call after it.

**THE BELIEF AFTER.** They answered the awkward ones without dodging, and one of the answers was "we don't know yet."

**ARRIVAL STATES.** S1 (row one) · S2 (row two) · S3 (row three).
**OBJECTIONS ANSWERED.** O1 · O3 · O8 (the short form; the founder's full sentence of *how* lives on The Ask, D4) · O14 reinforced.
**MUST NOT CLAIM.** §0.3.4 — these are founder-anticipated questions, structurally inferred, not things a buyer has said. §0.3.10 — row three explains *why* there is no price and must never drift into *how much*, a range, or "starting at." §0.3.5 — row one must not become "and here's how well it has worked."

---

#### H10 · Close — LOUD

**THE JOB.** One ask, no recap.

**WHAT HE SEES.** A last full-bleed photograph and very little on it: one line and the button. No summary of the page, no feature list, no new argument. *Phase 2 note: pulls toward Layer 3 moment 7, the knockout logotype cut out of a photograph and cropped hard by both edges — a closing signature rather than a closing argument. Not assigned.*

**TEXT (PROVISIONAL).**

> **Headline** — Start with a look at what you've got.
>
> **Deck** — Free, real, and yours whether we end up working together or not.
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** The next step costs me nothing and I get something out of it either way.

**ARRIVAL STATES.** All. This is the terminus for every state that read the page.
**OBJECTIONS ANSWERED.** O18 pre-emptively — "yours whether we work together or not" is the honest answer to "is this a trap," and it is true.
**MUST NOT CLAIM.** §0.3.1 — no turnaround, no "in 48 hours," no count of what the audit contains. No manufactured scarcity or urgency; nothing about limited slots. No new claim that wasn't earned above.

---

**HOME — ATTENTION AUDIT.** Nine items: eight sections and one beat.

| # | Section | Attention |
|---|---|---|
| 1 | H1 Hero | **LOUD** |
| 2 | H3 How the work gets done | MEDIUM |
| 3 | H4 What "done" means | MEDIUM |
| 4 | H5 The shape of it | MEDIUM |
| 5 | H6 What's covered | QUIET |
| 6 | H7 What you're choosing between | **LOUD** |
| 7 | H8 The ask beat | QUIET |
| 8 | H9 Before you ask | QUIET |
| 9 | H10 Close | **LOUD** |

**LOUD positions: 1, 6, 9.** Three, inside the 1–3 budget.
**Adjacency: passes.** Gaps of four and two. The two items between 6 and 9 are both QUIET.
**Loud-or-wordy: passes, counted.** H1 is a headline and one line. H7 is a headline and four rows averaging fourteen words. H10 is a headline and one line. No LOUD section on this page carries a paragraph. Prose — continuous running sentences — appears in exactly one place on Home, H9, which is QUIET. That is the rule satisfied rather than asserted.

---

### §2.2 — APPROACH

**The page's job.** Be the document one person sends another. It has to stand alone for a reader who never saw Home and explain the whole mechanism in order, without selling at every paragraph.

**Arrival states served.** S2 primarily — the evaluator who wants the shape proven out, and the one most likely to forward it (§0.2 rule 4). S3 for the depth on what a month contains. S1 for the standard.

**Where the ask appears — two.** The persistent nav button, and the close. Nothing in between: a forwarded document that pitches at every section reads as sales collateral, which is the one thing that would stop it being forwarded. Count: **2**.

**Structure — three chapters, keyed to the three parts.** The chapters carry the same three plain labels Home used, in the same order, so a reader arriving here from Home finds the page already familiar and a reader arriving cold gets the mechanism and the page structure in one move. P's named risk — a reader scanning for the word "onboarding" or "quality" finds neither — is met by giving every chapter a plain-word subtitle that says what is inside it.

> **ORCHESTRATOR-level change to §1's attention marks, with the reason.** §1 marks A3, A4 and A5 **MEDIUM**. R2 runs all three **QUIET**. Reason: the founder's experience principle as it governs this round says prose lives only in QUIET sections, and these three chapters are the site's prose — this page exists to be read, not scanned. A MEDIUM chapter carrying paragraphs would either force the prose out (and this page would stop being forwardable) or break the rule. Nothing else moves; the page keeps its single LOUD at the close, exactly as all three R1 sets had it.

---

#### A1 · Reading this cold — QUIET

**THE JOB.** Make the page stand alone for someone who was sent it, and hand him the table of contents that is also the argument.

**WHAT HE SEES.** No photograph. A header line, one line under it, and three chapter anchors set as a short list — each a label and a plain subtitle. Light ground, generous space, hairlines. It looks like the first page of a document, which is what it is. He should be able to tell in one glance how long this is and what is in it.

**TEXT (PROVISIONAL).**

> **Headline** — How it works, start to finish.
>
> **Deck** — If someone sent you this, you don't need anything else to read it. This is the whole thing, in order.
>
> **Anchor one — The work gets done.** How a footprint actually gets built, phase by phase.
> **Anchor two — A person signs off on it.** The written standard every piece has to clear.
> **Anchor three — You see all of it.** What lands in front of you every month.

**THE BELIEF AFTER.** I know what this document is, how long it is, and why someone sent it to me.

**ARRIVAL STATES.** S2 primarily (the forwarder and the forwarded-to) · S3 · S1 via the link from Home.
**OBJECTIONS ANSWERED.** None directly — it sets up A3, A4, A5.
**MUST NOT CLAIM.** Nothing new. This header restates; it must not add a claim Home did not make. §0.3.7 — the three chapter labels are plain verbs, and must stay plain: the moment they become a named model with initial capitals they are a coined term.

---

#### A3 · The work gets done — QUIET *(chapter one)*

**THE JOB.** Prove the execution claim by showing the operating shape in full, phase by phase, with what changes for him in each.

**WHAT HE SEES.** Running text, one column, near sixty-five characters. Three phase headings, a paragraph each, and one italic line per phase saying what changes for him. No strip, no diagram, no numbered circles — Home already gave him the strip; this is the version with the detail in it. Possibly one quiet inline image, rectangle at the system radius, no bigger than the column.

**TEXT (PROVISIONAL).**

> **Chapter head** — The work gets done
> **Subtitle** — How a footprint actually gets built, phase by phase.
>
> A footprint doesn't get switched on. It gets built, and the order matters — lighting up every channel at once is how agencies produce a lot of work in the first month and nothing that compounds after it.
>
> **Foundation.** We take a brand and voice intake, audit the site technically and for whether AI answer engines can read it, set up schema, wire the tracking and the monthly record, and get your voice calibrated and signed off before a single piece ships. It ends on a kickoff call.
> *What changes for you:* not much you can see. This is the phase where we learn how you sound and where the gaps are, so nothing that ships later has to be walked back.
>
> **Content Engine.** Output starts moving. Content goes to a cadence, the first channels turn on — LinkedIn first, then the paid, email and landing-page work where those are in scope — and the first month's record lands.
> *What changes for you:* you start seeing work, and at the same time you start seeing the account of the work.
>
> **Amplification.** The footprint is fully on and the job changes from starting things to improving them. Placements land, ads optimise against real conversions, the reporting widens.
> *What changes for you:* your question stops being "is it running" and starts being "what's working."

**THE BELIEF AFTER.** I could explain to someone else what the first stretch of this actually involves.

**ARRIVAL STATES.** S3 primarily — the deepest version of his must-believe. S2 secondarily.
**OBJECTIONS ANSWERED.** O7 (full depth).
**MUST NOT CLAIM.** §0.3.1 — **no durations anywhere in this chapter**, and it is the single most tempting place on the site to put them, because the source's original phasing had weeks attached. It does not survive; the source flags it as untested. §0.3.5 — every verb is what happens, not what happened; no phase may be described as having run for a client.

---

#### A4 · A person signs off on it — QUIET *(chapter two)*

**THE JOB.** Turn the calibration claim into a checkable standard by showing two of the standards in full.

**WHAT HE SEES.** Running text, then the two rules set apart — indented, in the utility face, hairline above and below, so they read as quoted policy rather than as more argument. If a photograph appears anywhere on this page it is here: Yarden, organic blob crop per the photography invariants, small, set in the margin beside the text rather than above it. The subtle end of the tech dial — this is a portrait, not a statement.

**TEXT (PROVISIONAL).**

> **Chapter head** — A person signs off on it
> **Subtitle** — The written standard every piece has to clear.
>
> Yarden Morgan owns marketing and growth here, and she is the last read before anything reaches you or your audience. That on its own is just a promise to care about quality, and every agency makes it. So here is the thing underneath it.
>
> Every service line carries a written standard for what "done" means — a specific, checkable rule, not a feeling. A piece of work is not done because it got produced. It is done when it clears the rule. Here's what they actually look like, in full, so you can see how specific they get:
>
> > **LinkedIn.** A post's opening line cannot be a buzzword. It has to end on a real question or a real ask, not "thoughts?". And the company post and the founder's post are written separately — never the same post with a name swapped in.
>
> > **Founder-led content.** It is written *from* the founder: an interview first, then a draft, then the founder's own edit. It is not written by us and put in their mouth.
>
> Written down, they are checkable — by us, and by you. That is the whole reason they are written down rather than felt.

**THE BELIEF AFTER.** There is a real bar here that would actually catch a lazy version of this, and I've read two of them.

**ARRIVAL STATES.** S1 primarily — the deepest answer the site has to "will it sound generic." S2 secondarily.
**OBJECTIONS ANSWERED.** O2 (as far as honesty allows — the method, not the outcome) · O14 · O1 at depth.
**MUST NOT CLAIM.** §0.3.5 — **these standards have never been run against a paying client's deliverable.** Nothing here may imply a track record of catching things for clients. No pass rate, no "we reject N in ten." §0.3.10 — no guarantee that your brand will not sound generic; the standard is the mechanism meant to prevent it, not a warranty.

---

#### A5 · You see all of it — QUIET *(chapter three)*

**THE JOB.** Describe the monthly practice concretely enough to be worth something, as how we work — not as a product, and not as a thing that is on its way.

**WHAT HE SEES.** Running text with four short labelled paragraphs. **No image, no mockup, no screenshot, nothing that looks like an interface.** The absence is deliberate and is the section's most important design decision: the moment there is a rectangle with rounded corners on this part of the page, a reader assumes a product exists.

**TEXT (PROVISIONAL).**

> **Chapter head** — You see all of it
> **Subtitle** — What lands in front of you every month.
>
> Every month you see exactly what was done, how much of it, and why — and who signed it off. Each of those is a decision about what we owe you:
>
> **What was done.** The work itself, in language you can read: the pages, the posts, the fixes, the campaigns. Not agent logs, not raw activity — those are our problem, not yours.
>
> **How much.** The volume. "A swarm works at scale" is a sentence anyone can write; this is the part that makes it something you can check instead of something we say.
>
> **Why.** For each piece, what it was for — which goal it maps to and what we expected it to do. This is the one most reporting leaves out, and it is the one that tells you whether anybody was thinking.
>
> **Who signed it off.** A name. The person who read it before you did.
>
> This is how the work runs, not a report we send if you chase us for one. It is the same record we use to run your account — you are looking at the actual thing, not a summary of it made for you.

**THE BELIEF AFTER.** The transparency claim has a real shape, and it's an operating habit rather than a feature.

**ARRIVAL STATES.** S2 primarily — the honest promise he is weighing against agency opacity. S1 secondarily.
**OBJECTIONS ANSWERED.** O5 (full — completes what H3's third block opened).
**MUST NOT CLAIM.** §0.3.6, and this is the section it was written for. **No screenshot. No mockup. No product name. No "dashboard." No "log in." No "see it live." No "coming soon," no "we're building it," no "not yet."** FOUNDER 2026-09-02: promise the practice, not the product. The word "record" is doing the work a product name would otherwise do, and it must stay a practice word.

---

#### A6 · Close — LOUD

**THE JOB.** One ask, after the document has done its work.

**WHAT HE SEES.** Ground change, one line, the button. No recap of the three chapters.

**TEXT (PROVISIONAL).**

> **Headline** — That's the whole of it.
>
> **Deck** — Start with a free look at your own footprint.
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** I'm ready to ask — or I now have the document I'd send to whoever decides this with me.

**ARRIVAL STATES.** All who reach it.
**OBJECTIONS ANSWERED.** None new.
**MUST NOT CLAIM.** §0.3.11 — one ask. The direct-booking bypass lives on The Ask page only; putting it here would make two.

---

**APPROACH — ATTENTION AUDIT.** Five sections.

| # | Section | Attention |
|---|---|---|
| 1 | A1 Reading this cold | QUIET |
| 2 | A3 The work gets done | QUIET *(changed from MEDIUM — reason above)* |
| 3 | A4 A person signs off on it | QUIET *(changed from MEDIUM — reason above)* |
| 4 | A5 You see all of it | QUIET *(changed from MEDIUM — reason above)* |
| 5 | A6 Close | **LOUD** |

**LOUD positions: 5.** One, inside the 1–3 budget.
**Adjacency: passes trivially** — there is only one LOUD.
**Loud-or-wordy: passes, counted.** The one LOUD section carries a headline and one line. All four prose-bearing sections are QUIET. This page holds the site's prose, which is why every section on it that carries a paragraph is quiet by construction rather than by luck.

---

### §2.3 — ABOUT

**The page's job.** Put the two names and the two faces on the site, and make the mechanism stop being abstract — each part of it has a person attached.

**Arrival states served.** S4 primarily — this is the page a warm referral opens first, and it has to confirm rather than re-pitch. S2 secondarily, as the trust check before shortlisting.

**Where the ask appears — two.** The persistent nav button, and the close. Count: **2**.

> **ORCHESTRATOR-level change to §1's attention marks, with the reason.** §1 marks B4 **MEDIUM**. R2 runs it **QUIET**, for the same reason as Approach's chapters: it is prose, and prose lives in quiet sections. About keeps its MEDIUM at B1, where the two faces are.

> **Voice.** B1 is company voice. B2 is each founder's own first person — the one place on the site where "I" appears. B4 returns to "we," because it is a statement the two of them are making together.

---

#### B1 · Adam and Yarden — MEDIUM

**THE JOB.** Put the faces and the names on the site and say who does what, before anything else on the page.

**WHAT HE SEES.** Two photographs, side by side, organic cell-derived blob crop per the photography invariants — not rectangles, not circles, not avatars. Real portraits: available light, someone's actual face, the subtle end of the tech dial because a portrait that has been heavily treated stops being a person. A name under each and one line under the pair. Underneath each name, the credential slot, which is empty and marked. The eye lands on the faces first, which is the entire point of the page.

**TEXT (PROVISIONAL).**

> **Headline** — Adam and Yarden.
>
> **Deck** — Adam builds the systems and the swarm. Yarden owns marketing and growth, and she is the last read on everything that reaches a client.
>
> **Under Adam's name** — `[OPEN — one dated, verifiable fact; founder supplies]`
> **Under Yarden's name** — `[OPEN — one dated, verifiable fact; founder supplies]`

**THE BELIEF AFTER.** These are two specific people, not a team page, and I know which one does what.

**ARRIVAL STATES.** S4 primarily — this is the page a referral opens, and it has to confirm what he was already told. S2 secondarily, as the trust check.
**OBJECTIONS ANSWERED.** O12. And O9 / O10 by implication only — the founder's rule-3 revision means nothing on this page states the company's stage; the fact that About is two people and no logo wall is what says it. **That is implication, not an answer**, and it is logged as such in §2.5.
**MUST NOT CLAIM.** §0.3.2 — no "worked with brands like," no past-client roster, no award. The credential slot stays visibly `[OPEN]` in this document and **is never filled with a plausible-sounding fact by any engine**; the founder supplies both or the site ships without them. No "our team" — there are no other people. No invented title.

---

#### B2 · In their own words — QUIET

**THE JOB.** Let each founder say what they actually do, in their own voice, tied to the part of the mechanism they own.

**WHAT HE SEES.** Two short blocks of running text, one under each portrait, in the first person. No photograph beyond B1's. No credential list, no logo row, no "previously at." It reads like two people writing rather than a company describing its staff.

**TEXT (PROVISIONAL).**

> **Adam** — I build the systems. The swarm is a set of agents that plan, draft, publish and check work across every channel a company has, coordinated as one thing instead of a pile of tools that don't talk to each other. My job is that it runs, that it runs fast, and that everything it does gets written down somewhere you can read it. The last part is the one I care most about — a system you can't inspect is just a promise with more steps.
> `[OPEN — one dated, verifiable fact; founder supplies]`
>
> **Yarden** — I own marketing and growth, and I'm the last read on anything that goes to a client or their audience. The swarm is fast and it produces a lot. Whether a piece sounds like you, and whether it's worth putting your name on, is a judgment call, and that one is mine. Everything goes through me before it goes out — not as a spot check, but against the standards we wrote down, which you can read on the approach page.
> `[OPEN — one dated, verifiable fact; founder supplies]`

**THE BELIEF AFTER.** I know who I'd actually be dealing with, and about what.

**ARRIVAL STATES.** S4 · S2 · S1 (Yarden's block is the human-in-the-loop claim with a person attached).
**OBJECTIONS ANSWERED.** O12 at depth · O14 · O1 reinforced.
**MUST NOT CLAIM.** §0.3.2 — no fabricated history, no years of experience, no company names. §0.3.5 — Yarden's block describes the standing process, not deliveries that have happened. Neither bio may claim a client.

---

#### B4 · Why now — QUIET

**THE JOB.** Give a reason these two are doing this at this moment, without claiming a moat the company does not have and without stating its stage.

**WHAT HE SEES.** A short piece of running text on a plain ground, set larger than the bios and quieter than everything else — a statement rather than an argument. No image. No pull-quote treatment, which would make it feel performed.

**TEXT (PROVISIONAL).**

> **Headline** — Why we're doing this now.
>
> Here's our reading of it.
>
> Producing marketing work stopped being the bottleneck. What used to take a team to make can now be made quickly, by anyone willing to set the machinery up. And precisely because of that, most of it started to sound the same — because a lot of what gets produced this way isn't read carefully by anyone before it ships.
>
> We don't think the answer is less of it. We think the answer is a lot of it, with someone whose taste you can name standing between the machine and your audience — and a record of what was done that you don't have to ask for.
>
> We're not claiming nobody else could build this. Plenty could. We're saying that the part most people skip — showing you exactly what was done and why — is the part we started with.

**THE BELIEF AFTER.** There's a real reason these two are doing this, and they didn't oversell it to me.

**ARRIVAL STATES.** S4 (the reason to talk now) · S2 (the sophisticated reader who came to this page looking for exactly this).
**OBJECTIONS ANSWERED.** O11 — acknowledged, not resolved. The honest moat assessment says every claimed source has a counter-argument; this section concedes the point in one clause and moves, rather than staging the objection and knocking it down.
**MUST NOT CLAIM.** No moat. **No "proprietary," no "unmatched," no "nobody else can," no "compounds over competitors."** §0.3.1 — the anti-generic fear is real and there is sourced data on it, but the data is a number and numbers do not go on this site; the belief is stated as ours. §0.3.5 — "the part we started with" describes what we built first, not what we have delivered. And under the founder's rule-3 revision: **no sentence here states we are new or have no clients.**

---

#### B5 · Close — LOUD

**THE JOB.** One ask, once he knows who he'd be working with.

**WHAT HE SEES.** Ground change, one line, the button. Short — S4 arrived here to confirm, not to be persuaded, and every extra line between him and the button is a cost.

**TEXT (PROVISIONAL).**

> **Headline** — Now you know who you'd be working with.
>
> **Deck** — The next step is a free look at your own footprint.
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** Right, that's the next step, and it's one click.

**ARRIVAL STATES.** S4 primarily — this completes his two-click path (About → the button → the form, with the direct-booking bypass sitting beside it when he lands). All others secondarily.
**OBJECTIONS ANSWERED.** None new.
**MUST NOT CLAIM.** §0.3.11 — one ask. The temptation here is to give S4 the direct-booking link on this page because he is the visitor most likely to want it. That would put the bypass in two places and make the site's single ask read as a choice. **The bypass stays on The Ask page, beside the form, once.**

---

**ABOUT — ATTENTION AUDIT.** Four sections.

| # | Section | Attention |
|---|---|---|
| 1 | B1 Adam and Yarden | MEDIUM |
| 2 | B2 In their own words | QUIET |
| 3 | B4 Why now | QUIET *(changed from MEDIUM — reason above)* |
| 4 | B5 Close | **LOUD** |

**LOUD positions: 4.** One, inside the budget.
**Adjacency: passes trivially** — one LOUD.
**Loud-or-wordy: passes, counted.** B5 is a headline and one line. Both prose-bearing sections, B2 and B4, are QUIET. B1 carries a headline, one line and two bracketed slots — no paragraph.

---

### §2.4 — THE ASK

**The page's job.** Get the URL and the email, having first made the flow so plain that handing them over does not feel like a trap.

**Arrival states served.** All of them. S1, S2 and S3 arrive here having been argued into it. S4 arrives here directly and takes the quiet bypass.

**Where the ask appears — one, plus one bypass.** The form is the page. The nav button scrolls to it. The direct-booking line sits beside the form, deliberately subordinate, and is the site's only bypass — one bypass, one location. Count: **1 + 1**.

**Slug: OPEN.** `/audit` reads as the thing rather than the transaction and is the working preference; `/start` and `/get-your-audit` are the alternatives. Not decided here.

---

#### D1 · Header — QUIET

**THE JOB.** State the two-step flow plainly, before the form, so handing over a URL and an email doesn't feel like a trap.

**WHAT HE SEES.** No photograph. A short header and two short paragraphs, set above the form and clearly subordinate to it — this page's centre of gravity is the form and the header must not compete. Plenty of space. He should reach the fields within one screen.

**TEXT (PROVISIONAL).**

> **Headline** — A free look at your footprint.
>
> Tell us your website. We read it, write up what we find, and send it to you. Then, if you want it, we get on a call and go through it together.
>
> The write-up is yours either way. It's a real read of your site by the people who'd be doing the work — not an automatic report that gets generated the second you hit send.

**THE BELIEF AFTER.** I know exactly what happens after I submit, and there's something in it for me even if I never take the call.

**ARRIVAL STATES.** All. S1, S2 and S3 arrive persuaded; S4 arrives direct and skims this on his way to the bypass.
**OBJECTIONS ANSWERED.** O18 (the first move against "is this a sales trap") · O16 (opened; D4 finishes it).
**MUST NOT CLAIM.** §0.3.1 — **no turnaround, no "within two business days," no number of findings, no "N-point audit."** No promise of what the audit will find. No guarantee language. The word "free" is a fact about price, not an offer with conditions attached.

---

#### D2 · The audit request — LOUD

**THE JOB.** This section is the page. Get the URL and the email, and answer the objection that fires at the exact moment of asking for them.

**WHAT HE SEES.** The form, dominant — the largest and highest-contrast thing on the site after a hero. Two fields, stacked, generously sized. One accent-filled submit button, the same accent as everywhere else. Directly under the button, one small line in the utility face saying what the two pieces of information are for. Nothing beside the form except D3's quiet line. No image, no illustration, no reassurance badges, no "as seen in." **Implementation OPEN** — form endpoint, storage and confirmation email do not exist yet, and the founder's decision that turnaround expectation is set in the confirmation makes the confirmation copy a real deliverable, not an afterthought.

**TEXT (PROVISIONAL).**

> **Label above the fields** — Where should we look?
>
> **Field one** — Your website
> **Field two** — Where to send it
>
> **Submit** — Send me the audit
>
> **Trust line, under the button** — We use your address to send the audit and to talk to you about it. That's all it's for.

**THE BELIEF AFTER.** That was easy, and I know what happens to what I just typed in.

**ARRIVAL STATES.** S1, S2, S3 primarily — the honest capture for anyone not already at "ready."
**OBJECTIONS ANSWERED.** O15, at the point of friction rather than in a distant FAQ, which is the whole reason the trust line sits under the button · O18 reinforced.
**MUST NOT CLAIM.** No data-handling promise beyond the flow that actually happens — **no invented privacy policy, no "we'll never share your data" unless a real policy backs it.** §0.3.1 — nothing on this section may state or imply a turnaround. §0.3.11 — the submit button is the only button on this page; D3 is a text link.
*Note on the loud-or-wordy rule: this LOUD section carries field labels, a button label and one line. Labels are not prose. Counted in the audit below.*

---

#### D3 · Already sure? — QUIET

**THE JOB.** Route the visitor who doesn't need the on-ramp, without making it look like a second choice.

**WHAT HE SEES.** One line and a text link, set small, beside or beneath the form and visually subordinate to it by construction — smaller type, no fill, no border, muted rather than accent. It is findable by someone looking for it and skippable by someone who isn't.

**TEXT (PROVISIONAL).**

> **Line** — Already sure? Book a call directly.

**THE BELIEF AFTER.** I don't have to sit through a step I don't need.

**ARRIVAL STATES.** S4 primarily — the fast path terminates here. S2 secondarily, the evaluator who has finished comparing.
**OBJECTIONS ANSWERED.** None. It is a routing decision, not an answer.
**MUST NOT CLAIM.** §0.3.11 — **must never read as an equally weighted second ask.** If it ever gets a button, a border or the accent colour, the site has two CTAs and the rule is broken. No scheduling promise beyond a plain link. **Booking mechanism OPEN** — nothing is wired.

---

#### D4 · What to expect — QUIET

**THE JOB.** Answer the questions that sit between deciding and submitting, without inventing a policy, a timeframe or a capability.

**WHAT HE SEES.** Five question-and-answer rows below the form, hairline-separated, quiet. This is the page's prose. The FAQ sits before any exit from the page — nothing below it but the footer.

**TEXT (PROVISIONAL).**

> **Headline** — What to expect.
>
> **Q. What's actually in it?**
> A. A technical read of your site. A check on whether AI answer engines can find you and cite you. A look at your content and your LinkedIn against the gaps we can see. And a snapshot of what the people you compete with are doing. Written in plain language, not a scored report.
>
> **Q. When will I hear back?**
> A. A person writes this, so it goes out when it's genuinely ready rather than on a timer. You'll get a note the moment we start, and that note will tell you when to expect it.
>
> **Q. What does it cost, if we end up working together?**
> A. It's monthly, and it's scoped to how much footprint there is to run. We tell you the number on the call, once you've seen the audit and we've seen your site. There's no price on this website because anything we put here would be a guess about you.
>
> **Q. What if I want to stop?** `[OPEN — terms not decided]`
> A. Worth asking on the call, and we'd rather agree it with you than post terms here that don't fit what you're actually buying.
>
> **Q. Do you work in my market, in my language?** `[OPEN — §0.2 rule 5; the reserved slot lands here]`
> A. Ask us directly. It's a fair question and the honest answer depends on your market, so we'd rather tell you straight than make a blanket claim on a webpage.

**THE BELIEF AFTER.** They answered the awkward ones, and where they didn't have an answer they said so instead of making one up.

**ARRIVAL STATES.** S1, S2, S3.
**OBJECTIONS ANSWERED.** O16 · O17 · O8 (the founder's full sentence of *how*, which lives here and only here) · O6 (named, deferred, no invented policy) · O13 (the reserved slot) · O18 reinforced — a FAQ that admits what it can't promise is itself the argument against "sales trap."
**MUST NOT CLAIM.** §0.3.1 — row two is the single most tempting line on the site for a number and **must not get one**; the founder's decision puts the turnaround expectation in the confirmation email, not on the page. §0.3.10 — row three states monthly and scoped, and stops. **No figure, no range, no "starting at," no tier name.** Rows four and five must stay honestly empty; **no engine fills either one with a plausible policy or a plausible language answer.**

---

**THE ASK — ATTENTION AUDIT.** Four sections.

| # | Section | Attention |
|---|---|---|
| 1 | D1 Header | QUIET |
| 2 | D2 The audit request | **LOUD** |
| 3 | D3 Already sure? | QUIET |
| 4 | D4 What to expect | QUIET |

**LOUD positions: 2.** One, inside the budget.
**Adjacency: passes trivially** — one LOUD.
**Loud-or-wordy: passes, counted.** D2 carries two field labels, a button label and one line of eighteen words. No paragraph. The two prose-bearing sections, D1 and D4, are both QUIET. This is deliberately the most concentrated page on the site: one job, one loud moment.

---

### §2.5 — THE REGISTER, WALKED

Every row of the customer packet's objection register (O1–O18), and where it lands. Three rows are answered by implication only, which is a consequence of the founder's rule-3 revision and is recorded here rather than smoothed over.

| # | Objection | Lands at | Status |
|---|---|---|---|
| O1 | "This is just AI." | H3 block two · H9 row one · A4 | Answered |
| O2 | "Will MY brand sound generic?" | H4 · A4 | Method shown, outcome not promised. Still UNANSWERABLE as asked |
| O3 | "I already pay an agency." | H7 · H9 row two | Answered |
| O4 | "Where are your case studies?" | H4 · A3 · A4 · A5 — **by method alone** | No section states the status. FOUNDER decision |
| O5 | "Another opaque vendor?" | H3 block three · A5 | Answered |
| O6 | "What if I want to stop?" | D4 row four | OPEN, named not answered |
| O7 | "What do I get, month to month?" | H5 · H6 · A3 | Answered as shape and scope, never as number |
| O8 | "Why is there no price?" | H9 row three (short) · D4 row three (the founder's sentence of *how*) | Answered as *why*, never as *how much* |
| O9 | "You have no clients yet." | B1 · B2 — **implication only** | Not stated. FOUNDER decision |
| O10 | "Why believe it works when nobody's used it?" | Nowhere — **implication only** | UNANSWERABLE, and now unstated too |
| O11 | "What stops anyone else doing this?" | B4 | Conceded in one clause, not resolved |
| O12 | "Who am I talking to?" | B1 · B2 | Answered |
| O13 | "My market, my language?" | D4 row five | OPEN, slot reserved |
| O14 | "Will agents run unsupervised on my brand?" | H3 block two · A4 · B2 (Yarden) | Answered |
| O15 | "What do you do with my URL and email?" | D2 trust line | Answered at the point of friction |
| O16 | "What's in the free audit?" | D1 · D4 row one | Answered in kind |
| O17 | "How long until I hear back?" | D4 row two | Expectation set, deliberately without a number |
| O18 | "Is this a sales trap?" | D1 · D2 · H10 · D4 | Answered |

**The one thing R2 has to say plainly about this table.** Under the founder's revision, O4, O9 and O10 have no sentence anywhere on the site. The risk was stated once at §5 and is not restated as an argument here; what R2 adds is the mechanical consequence, which is that **H4 and A4 are now load-bearing in a way they were not in any R1 set.** They are the only places a skeptical S2 gets anything in exchange for the proof he came looking for. If either gets cut or softened in Phase 2, the site loses its answer to O4 entirely and gets nothing back.

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
| 2026-09-02 | R2 | **FOUNDER: the vibe** — expensive, technology, minimalistic, futuristic, clean, human; bee, flowers, ink, ASCII and dot layers, numbers as texture, human and sky. Recorded as §0.8b, the register for all text and for Phase 2. **FOUNDER: include the UX laws** and how the brain reacts to interaction, visuals, text, layout, motion — recorded as §0.9, applied to text and journey now and to Phase 2 later. |
