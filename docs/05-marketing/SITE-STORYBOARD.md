# STORYBOARD — TEXT ONLY — NOT A DESIGN

**Beeond marketing site · Phase 1 · what the site SAYS and what the visitor GOES THROUGH.**
**NOT PLAN OF RECORD.** Nothing here is locked or shipped. Per `CLAUDE.md`, no direction becomes the plan of record without a customer signal earned since the last one closed. Two warm prospects remain un-called; said here once.

| Field | Value |
|---|---|
| Version | **1.0 — for founder review** (0.1 R0 frame · 0.2 R1 candidate map · 0.3 R2 spine · 0.4 R3 journey · reviewed · v3 applied). The gate percent is the founder's; Phase 2 opens only on his word. |
| Session | `orchestrator-site-thinking` · gold · branch `ceo-1-1788359253` · started 2026-09-02 |
| Founder | Adam, present, reacting per round |
| Source of truth | `HANDOFF-CLEAN-START/` (5 files). Nothing here overrides it. |
| Locked and not reopened | G0 reference read · G1 design language (`DESIGN-LANGUAGE.md`). The site's job was re-shaped by the founder on 2026-09-02 — see §0.1 |
| One input, not the answer | `docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md` |
| Markers | **FOUNDER** (a founder decision, dated) · **OPEN** (undecided) · **PROVISIONAL** (a voice string written from founder thesis, not customer language) |

**Every voice string in this document is PROVISIONAL.** ICP is OPEN by founder decision, zero customer interviews exist, `USER-INSIGHTS.md` is empty by design. Site copy, when it is eventually written, carries the claim `c-site-copy-is-founder-thesis-not-customer-language`.


```claims
claims:
  - id: c-site-copy-is-founder-thesis-not-customer-language
    assert: "Every voice line in the site storyboard is PROVISIONAL founder thesis; no customer language exists because no customer interview has happened"
    kind: internal-fact
    scope: project
    verified_by: command
    evidence: {cmd: "test $(grep -c 'PROVISIONAL' docs/05-marketing/SITE-STORYBOARD.md) -gt 0 && grep -q 'EMPTY BY DESIGN' .claude/memory/USER-INSIGHTS.md", expect_exit: 0}
    valid_until: 2026-12-31
    confidence: 0.99
```

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
Knows: nothing of Beeond; a lot about what AI content looks like, has shipped some. Weighing: whether paying anyone beats what tools already give him for free. Afraid: paying for a wrapper; his brand sounding like everyone else's. Must believe: a named human calibrates every piece; the swarm does what he cannot (volume, coverage, consistency). Fold must: say what he gets, in plain words, with a real person present in the photograph on screen one; the human *in the loop* — the sign-off — is named at section two. *(Amended 2026-09-02 by ORCHESTRATOR to match the founder's later decision "outcome first, mechanism at section two"; the original line read "put the human in the loop on screen one" and was superseded three decisions later. Escalated by R3 §3.6, resolved here.)* First objection: "this is just AI." Answered by: the mechanism section and "what done means." Ask: late, after mechanism and proof-of-method. Fallback: waitlist. Evidence: the one data-backed fear — 53% of marketers struggle to make content stand out, 52% say AI made content less effective (HubSpot, HIGH confidence, `02-THE-PROBLEM.md` §2a).

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
- **FOUNDER — the two credential facts:** owner Adam (one for himself, one from Yarden), trigger *before Phase 2 opens* — the Phase 2 handoff lists them as its first prerequisite and the About page ships without them if they do not arrive. No engine fills the slots.
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

> **Reading the TEXT fields.** Everything after a `>` inside a **TEXT (PROVISIONAL)** block is proposed site copy. Everything in bold before an em-dash is a **structural label for this document, not copy** — "Block one," "The rule," "Anchor three," "Field one," "Eyebrow," "Deck," "Headline," "CTA." None of those words appear on the page. Anything in `[square brackets and code style]` is an OPEN slot: it stays visibly empty until the founder fills it, and **no engine fills one with a plausible-sounding substitute.**
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
| Mid-page beat | **Outlined in the accent, not filled** — the nav's own treatment, set smaller. R2 had this as a text link; the accent measures 8.2:1 AAA as text on both grounds, so legibility was never the question and affordance was. A text link is not a target (Fitts's law), and this is the one ask instance §0.2 designates for an actively evaluating visitor | No |
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

**Where the ask appears — four instances of one ask, never a second one.** The nav (outlined, position zero, no scroll). **The hero body**, accent-filled. The mid-page beat at item 7, as an outlined button in the nav's treatment, carrying no fill. The close at item 9, accent-filled. Count: **4** — which is the sourcer's mode exactly (nav, hero, mid, close), and an ask sits in the hero body in nine of its ten sites. Two accent fills, per Layer 1.

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

> **This section sits where client proof sits on eight of the sourcer's ten sites, and it has none to offer.** Two of the four available substitutes are deliberately loaded here rather than left to chance. **Named humans** (six of ten): block two names Yarden, which is the first and earliest point on the site where a person is attached to a promise — it is not decoration and it must not be softened to "a human" or "our team." **A shown mechanism**, which is the honest half of what a process device buys. What this section cannot do is carry identity proof, and it must not try: no "trusted by," no implied roster, no volume figure standing in for a client count.

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

**THE BELIEF AFTER.** Stated per block and per state. R2 wrote one line here for all three, and it was S1's line — the section already names which block serves which state, and the belief has to follow suit or Phase 2 will optimise this section for one visitor and quietly cost the other two.
- **Block one → S3.** The work actually gets done by someone, and that someone isn't going to be me.
- **Block two → S1.** A named person reads it before my audience does, so this isn't just AI output with a markup on it.
- **Block three → S2.** I'd see what was done without having to ask, which is the part I don't get today.

**ARRIVAL STATES.** S1 (block two is the answer to "this is just AI") · S2 (block three is the answer to agency opacity) · S3 (block one is the answer to "who does the work").
**OBJECTIONS ANSWERED.** O1 · O5 · O14.
**MUST NOT CLAIM.** §0.3.5 — the hardest temptation on this page. Every verb here is present-tense *how we work*; not one is *how it went*. §0.3.6 — block three describes the practice and **never names a product, never says "dashboard", never implies a thing to log into, never says "coming."** §0.3.8 — "a swarm of agents" is the mechanism and is allowed; "AI-powered" is a label and is not.
**Block two carries a founder trigger (FM-7), and the copy is not weakened for it.** *"Yarden reads every piece"* is a present-tense capacity claim: true at zero clients, untrue at some number of engagements nobody has named. It stays exactly as written, because it is the site's answer to O1 and O14 and hedging it would forfeit both. What is recorded instead is when it gets revisited: **the founder decides how many engagements one calibration layer serves, before the second signed client**, and this sentence is rewritten then if the answer requires it — not softened now against a number that does not exist yet.

---

#### H4 · What "done" means — MEDIUM

**THE JOB.** Show one written rule catching one real thing, so the standard is an object rather than a promise.

> **Cut from two cards to one in this revision.** Three of the four §3 walks argued the second card independently: it served S1's fear twice over, did close to nothing for S3, and did not answer what S2 came for. Its rule survives in full at A4, so **nothing leaves the site** — it moves one click deeper, which is what progressive disclosure is for. §2.7's progressive-disclosure row already described this section as showing one rule; it now does. Home's densest moment halves at the exact scroll where S1 decides, and that is the cheapest real improvement the four walks found.

**WHAT HE SEES.** One artefact card — a hard rectangle at the system radius, sitting slightly off the column grid, shadow and tilt doing the depth rather than any glass. It holds a fragment of work mid-calibration: a draft line struck through, the rule that killed it set beside it in the utility face, and the rewritten line under it. Small caption beneath. The eye lands on the struck-through line first because it is the only thing on the page that looks like it failed. One card, and a second is not a Phase 2 addition — the depth version is the approach page, not a longer section here. *Phase 2 note: pulls toward Layer 3 moment 6, the blueprint / construction overlay — the page showing its own working is exactly this section's argument. Not assigned.*

**TEXT (PROVISIONAL).**

> **Eyebrow** — The standard
>
> **Headline** — A piece of work isn't finished because it got produced.
>
> **Deck** — It's finished when it clears a written rule. Here's one of them, and what it caught:
>
> **The rule** — A post can't open on a buzzword.
> *Caught:* "In today's rapidly evolving landscape, unlocking growth means…" → sent back, rewritten to open on the thing that actually happened.
>
> **Caption** — Illustrative. Made to show the rule, not taken from a client's work.
>
> **After the caption** — Every service line has rules like this one, written down. You can read more of them on the approach page.

*The last line is **the site's one in-body route from Home to Approach**, and it is deliberately the whole of it. Home points at Approach from the nav and nowhere else, which makes progressive disclosure — the law the four-page architecture depends on — unenforced for every visitor who does not already know what the nav word means. It lands here rather than at H5 or H3 for three reasons: this is the section the single-card cut just made shallower, so the promise of more is true and specific rather than a generic "learn more"; A4 is the deepest answer on the site to the fear S1 and S2 both arrive with; and B2 on About already routes this way in these words, so the device is consistent rather than new. **One route, not two**, and the sentence stays a sentence.*

**THE BELIEF AFTER.** There's an actual bar here, and I've now seen it stop something.

**ARRIVAL STATES.** S1 primarily — the sharpest thing on the site against "it'll look generic." S2 secondarily.
**OBJECTIONS ANSWERED.** O2 (as far as it can honestly go — a method shown, not an outcome promised) · O1 reinforced · O4 answered by method rather than by status, which is the whole of what the founder's rule-3 revision left this page.
**MUST NOT CLAIM.** §0.3.2 — the caption is load-bearing; without it an artefact card reads as client work. §0.3.5 — the rules exist and are real; **they have not been run against a paying client's deliverable and nothing here may suggest they have.** No pass rate, no "we catch N% of…", no guarantee that your brand won't sound generic. §0.3.11 — the approach-page line is a plain sentence with a link and **must never become a button, an accent, or a second ask**; the moment it is styled it is a competing CTA at the site's densest scroll.
**No-cut flag (FM-5), and it binds Phase 2.** Under the founder's rule-3 revision, O4 — "where are your case studies" — has no sentence anywhere on the site. **H4 and A4 are the only exchange a skeptical S2 gets for the proof he came for, and neither may be cut or softened in Phase 2 without a replacement answer to O4.** The single-card cut above sits inside this flag rather than against it: one demonstrated rule still establishes that written rules exist, which is the whole of what S2 takes from the section. A second cut leaves nothing, and the site loses its answer to O4 entirely and gets nothing back.
*Note for the Phase 2 editor: the card deliberately contains banned buzzwords ("rapidly evolving landscape," "unlocking growth"). They appear only inside the struck-through line, as the thing the rule rejects. This is the one place on the site where a §0.3.8 word is correct, and a lint pass that strips it removes the section's entire demonstration.*

---

#### H5 · The shape of it — MEDIUM

**THE JOB.** Let him picture what he is signing up for, without a calendar.

> **This is the shown-process substitute, and it is the cheapest proof on the site.** Seven of the sourcer's ten sites show a step-by-step process; the three that don't are the three traditional agencies, which have case studies instead. Beeond is in the first group by necessity. The device costs nothing, requires no client, and is entirely true — which is exactly why it must stay specific. A process section that softens into "we work closely with you throughout" stops being a substitute for proof and becomes the thing it was meant to replace.

**WHAT HE SEES.** Three named phases as a horizontal strip, each a label and one line. Low text, plainly sequential, no dates, no numbers, no progress bar. *Phase 2 note: this is the natural pin for the Layer 4b scroll set-piece — the sequence is already a scrub. It is below the fold, which the budget requires. Not assigned.*

**TEXT (PROVISIONAL).**

> **Eyebrow** — What happens
>
> **Headline** — It doesn't all switch on at once.
>
> **Foundation** — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it.
>
> **Output** — The first channels go live, the work starts moving, and the first month's record lands in front of you.
>
> **Compounding** — The footprint is fully on, and the work turns from starting things to making them better.


**THE BELIEF AFTER.** I know roughly what the first stretch looks like, and nobody is pretending it all lights up on day one.

**ARRIVAL STATES.** S3 primarily — this is his named must-believe. S2 secondarily (the engagement has a shape). **Switching cost — S2's second fear in §0.2 — is answered here, incidentally, by the phasing itself** rather than by any sentence, and it is answered nowhere else: no register row carries it and no other section's objections line names it. Recorded so Phase 2 cannot cut or flatten the phases without knowing what else goes with them.
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
> **Getting a reply** — Paid ads · Landing pages and CRO · Website build
>
> **Knowing what happened** — Reporting · Brand monitoring
>
> **Closing line** — Not all of it, for everyone. It starts narrow and widens, scoped to what your footprint actually needs.

*The third group label changed in this revision.* It read *"Turning visits into conversations"* — the one label on the list written in the register of a marketing deck rather than of its own neighbours, which are three plain verbs a stranger reads without translating. Four groups, unchanged; same three items inside this one.

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
> **An agency retainer** — What you see is what they choose to show you, at whatever pace their team has room for.
>
> **A stack of tools** — You still have to run them, they still sound like themselves, and none of them joins your channels up.
>
> **Doing it yourself** — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't.

*Two rows were rewritten in this revision, both PROVISIONAL.* The agency row read *"The work happens somewhere you can't see"* — a claim about S2's own vendor, and the one line on the site he can falsify from his inbox: he may well see plenty, and one row he knows to be wrong discredits the three he cannot check. The new line describes the **structure** instead, which holds whether or not his agency shows him a lot: what he sees is selected by them. The tools row named only the running of the tools and missed the case that S1 actually lives in, which is the tools **also writing** — that is where his fear sits, and the row that omits it leaves his real substitute split across two rows and answered by neither. Four rows either way; no fifth row, so this stays an elimination rather than a scorecard.

**THE BELIEF AFTER.** I can see where this sits against my real options, and it isn't arguing against a straw man.

**ARRIVAL STATES.** S2 primarily — §0.2 places his ask right here. S3 secondarily (hire vs agency vs later). **The DIY row carries "later" for S3**, which is his real alternative and has no row of its own: four rows is Miller's cap and the elimination shape is founder-endorsed, so *"It gets done in the weeks you have time"* is doing that work by implication. Recorded so Phase 2 does not rewrite it into something narrower — a row about tools he already owns, or about his own skill — and silently remove the only answer this state's actual choice gets.
**OBJECTIONS ANSWERED.** O3.
**MUST NOT CLAIM.** §0.3.1 — no figures on either side; no "cheaper than an agency," no hours, no percentages, no implied price. No named competitor. Nothing that reads as a slur on a category rather than a structural observation about it.

---

#### H8 · The ask beat — QUIET *(a beat, not a section; not counted against the LOUD budget)*

**THE JOB.** Take S2's ask at the exact moment the comparison lands, without putting a button inside the comparison.

**WHAT HE SEES.** One line and the ask as an **outlined button** — the nav's exact treatment, accent on the border and the label, no fill — set small, immediately under the comparison on the same ground. It has no argument of its own and is visually subordinate to what it follows, by scale rather than by shape. This is the third of four ask placements and the second of the two that carry no accent fill, so Layer 1's two-fills-per-page rule is intact and untouched.

> **Changed in this revision, from accent text to an outlined button.** This is the ask instance at the exact scroll §0.2 designates for S2, the state most likely to be actively evaluating, and R2 made it the only instance on the site with a weak affordance. §0.9's Fitts's row says the CTA is a button, not a text link. The defence R2 gave — Layer 1's two-fill budget — does not survive its own file: **the nav ask is already an outlined button carrying no fill**, which proves the rule constrains the fill and not the button. The 8.2:1 measurement R2 cited answers legibility, and legibility was not the objection. The change costs no accent, breaks no budget, and changes no copy.

**TEXT (PROVISIONAL).**

> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** This is a reasonable moment to just ask about my own situation.

**ARRIVAL STATES.** S2 primarily · S3 · **S1 secondarily** — by §0.2's own ordering his ask sits after mechanism and proof-of-method, and both are behind him by this scroll, so he is ready here too. Recorded because R2 omitted him, and because it changes no copy: the beat serves him as it stands.
**OBJECTIONS ANSWERED.** None. It is the ask, not an answer.
**MUST NOT CLAIM.** §0.3.11 — this is the same ask restated, never a second one. A button inside the comparison table would read as a fifth alternative, which is why this is a beat and not a row.

---

#### H9 · Before you ask — QUIET

**THE JOB.** Do the work a case-study wall would do. Answer cost, timeline and fit plainly, before he has to go looking for any of them.

**WHAT HE SEES.** The page's one prose home. Five question-and-answer rows, hairline-separated, questions in the display face and answers in running text near sixty-five characters. Nothing visual. This is where the page's text budget is spent.

> **Rebuilt against the sourcer's finding, and this is the section that changed most.** Every homepage FAQ in the ten-site read handles **cost, timeline and fit** — five of five, without exception. The first draft of this section had cost and neither of the other two. It now carries all three. Five rows is Miller's ceiling, so nothing more may be added here without something leaving. Order is by serial position: the sharpest objection opens, the decision-shaped one closes, evidence sits in the middle.

**TEXT (PROVISIONAL).**

> **Headline** — Before you ask.
>
> **Q. Is this just AI tools with a markup?**
> A. The agents do the volume — that part is a machine and we're not going to pretend otherwise. What makes it worth paying for is the standard the work gets held to, and the person who holds it there. Without that check it would read like everything else produced this way, which is the thing we built this to avoid.
>
> **Q. I already have an agency. What's different?**
> A. Mostly, what you can see. Every month you get the record of what was done, how much of it, and why, with a name attached to the sign-off. That's the part we'd want to see if we were the ones paying.
>
> **Q. How soon does anything actually happen?**
> A. Foundation comes first and it's quiet — the audit, your voice, the plumbing — and you'll see comparatively little while it runs. Output starts in the phase after it. We won't put a date on that here, because at this point we'd be inventing one.
>
> **Q. Why isn't there a price on this site?**
> A. Because it depends on how much footprint there is to run, and we haven't seen yours. We look at your site first — that's what the audit is — and the number comes on the call after it.
>
> **Q. Is this right for a company like mine?**
> A. It fits if you have more channels than attention, and nobody whose whole job is holding them together. It fits badly if what you want is one channel run deeply by a specialist in it — that's a different purchase, and there are people who do it well.

**THE BELIEF AFTER.** They answered the awkward ones without dodging, they told me where it doesn't fit, and one of the answers was "we'd be making that up."

**ARRIVAL STATES.** S1 (row one) · S2 (row two) · S3 (rows three and four) · every COLD state (row five).
**OBJECTIONS ANSWERED.** O1 · O3 · O7 as timeline · O8 (the short form; the founder's full sentence of *how* lives on The Ask, D4) · O14 reinforced. Row five is the site's only explicit disqualification, and it is the register's answer to fit.
**MUST NOT CLAIM.** §0.3.4 — these are founder-anticipated questions, structurally inferred, not things a buyer has said. §0.3.1 — **row three is the most number-tempting line on Home and gets none**; "comparatively little" and "the phase after it" are the honest ceiling. §0.3.10 — row four explains *why* there is no price and must never drift into *how much*, a range, or "starting at." §0.3.3 — **row five must answer fit by shape, never by segment.** "More channels than attention" is a situation; "for B2B SaaS founders" is a persona and is banned. §0.3.5 — row one must not become "and here's how well it has worked."

---

#### H10 · Close — LOUD

**THE JOB.** One ask, no recap.

**WHAT HE SEES.** A last full-bleed photograph — a meadow, flowers, sky, the warm end of the palette — and very little on it: one line, one supporting line, and the second of the page's two accent-filled buttons. No summary of the page, no feature list, no new argument. Peak-end says this is the page's second-best moment and it gets built like one, not appended like a footer. *Phase 2 note: pulls toward Layer 3 moment 7, the knockout logotype cut out of a photograph and cropped hard by both edges — a closing signature rather than a closing argument. Not assigned.*

**TEXT (PROVISIONAL).**

> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**THE BELIEF AFTER.** The next step costs me nothing and I get something out of it either way.

**ARRIVAL STATES.** All. This is the terminus for every state that read the page.
**OBJECTIONS ANSWERED.** O18 pre-emptively — "yours whether we work together or not" is the honest answer to "is this a trap," and it is true.
**MUST NOT CLAIM.** §0.3.1 — no turnaround, no "in 48 hours," no count of what the audit contains. No manufactured scarcity or urgency; nothing about limited slots. No new claim that wasn't earned above.
**Load-bearing elsewhere, recorded here because this is where S1 decides.** The sentence that actually converts him is not on this page: it is D1's *"not an automatic report that gets generated the second you hit send,"* which answers his specific fear about the audit itself and sits one click past the moment he would have converted. Home may not promise it — a turnaround or a quality claim here would be exactly the §0.3.1 breach this section is guarded against — and **D1 may not lose that sentence in Phase 2.** It is the only line on the site that answers the fear the free audit itself provokes in the one state built on a verified figure.

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
**Loud-or-wordy: passes, re-counted after this revision.** H1 is a headline, one line and one line under the button. H7 is a headline and four rows of 15, 18, 19 and 17 words — **69 in total, averaging seventeen**, up from sixty-one and fifteen, because two rows were rewritten to be structural rather than falsifiable. Every row is still one line and the section still carries no paragraph, which is the rule; it is now the wordiest LOUD section on the site and that is the ceiling, not the target. H10 is a headline and one line. Prose — continuous running sentences — appears in exactly one place on Home, H9, which is QUIET.
**Accent fills: 2** — H1 and H10, per Layer 1, unchanged by H8 becoming an outlined button. **Ask placements: 4** — nav, H1, H8, H10, per the sourcer's mode. **One label at all four.** **Buttons: 4, fills: 2** — nav and H8 outlined, H1 and H10 filled. **H8 stays QUIET and stays off the LOUD budget:** an outlined button set small under the page's darkest ground is an affordance, not a distinct element, and the one distinct element per page (von Restorff) is still the fill.
**Miller's law: passes, re-counted.** Largest group on the page is four: H6's largest sub-group, H7's four rows. H3 has three blocks, H5 three phases, **H4 one card** (two before this revision), H9 five rows at the stated ceiling. Nothing on Home asks the visitor to hold more than five of anything, and the scroll where S1 decides now holds half of what it held before, which is the single-card cut showing up in the count rather than only in the argument for it.

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
> **Output.** Work starts moving. Content goes to a cadence, the first channels turn on — LinkedIn first, then the paid, email and landing-page work where those are in scope — and the first month's record lands.
> *What changes for you:* you start seeing work, and at the same time you start seeing the account of the work.
>
> **Compounding.** The footprint is fully on and the job changes from starting things to improving them. Placements land, ads optimise against real conversions, the reporting widens.
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
**No-cut flag (FM-5), and it binds Phase 2.** Under the founder's rule-3 revision, O4 — "where are your case studies" — has no sentence anywhere on the site. **A4 and H4 are the only exchange a skeptical S2 gets for the proof he came for, and neither may be cut or softened in Phase 2 without a replacement answer to O4.** This chapter now carries more of that weight than it did: H4 was cut to one card in this revision on the explicit ground that the second rule survives here in full. If the two rules below are trimmed to one, summarised, or turned into a description of having standards rather than the standards themselves, the site loses its answer to O4 entirely and gets nothing back.
**Founder trigger (FM-7), and the copy is not weakened for it.** *"She is the last read before anything reaches you or your audience"* is a present-tense capacity claim, the same one H3 block two makes: true at zero clients, untrue at some number of engagements nobody has named. It stays as written — it is the deepest form of the site's answer to O1 and O14. **The founder decides how many engagements one calibration layer serves, before the second signed client**, and this passage is revisited then.

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
> This is how the work runs, not a report you have to ask for. It is the same record we use to run your account — you are looking at the actual thing, not a version of it made for you.

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
**Loud-or-wordy: passes, re-counted after this revision.** The one LOUD section carries a headline and one line. All four prose-bearing sections are QUIET. This page holds the site's prose, which is why every section on it that carries a paragraph is quiet by construction rather than by luck. **Nothing on this page changed volume in the v3 pass:** A4's two additions are MUST NOT CLAIM flags, which are instructions to Phase 2 and never reach the page.

---

### §2.3 — ABOUT

**The page's job.** Put the two names and the two faces on the site, and make the mechanism stop being abstract — each part of it has a person attached.

**Arrival states served.** S4 primarily — this is the page a warm referral opens first, and it has to confirm rather than re-pitch. S2 secondarily, as the trust check before shortlisting.

**About is the intended referral landing URL** — stated because the whole page is built on the assumption that a founder sends *this* page rather than the root, and an assumption a page depends on belongs on the file rather than in the heads of the two people sending the links. If the root goes out instead, the warm visitor lands on a page written to explain the offer to a stranger and never sees the faces he came to check.

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

**ARRIVAL STATES.** S2 primarily — the sophisticated reader who came to this page looking for exactly this. **S4: it confirms tone, it does not supply his reason to act.** R2 had it as "the reason to talk now," and that is the one thing it cannot be for him: he heard the thesis from the founder who sent him, so this section reads back a conviction he already has rather than giving him a new one. Recorded so Phase 2 does not treat B4 as load-bearing for the warm path and build it up on his behalf. It stays as it is — About with only bios and a close has no argument in it at all.
**OBJECTIONS ANSWERED.** O11 — acknowledged, not resolved. The honest moat assessment says every claimed source has a counter-argument; this section concedes the point in one clause and moves, rather than staging the objection and knocking it down.
**MUST NOT CLAIM.** No moat. **No "proprietary," no "unmatched," no "nobody else can," no "compounds over competitors."** §0.3.1 — the anti-generic fear is real and there is sourced data on it, but the data is a number and numbers do not go on this site; the belief is stated as ours. §0.3.5 — "the part we started with" describes what we built first, not what we have delivered. And under the founder's rule-3 revision: **no sentence here states we are new or have no clients.**

---

#### B5 · Close — LOUD

**THE JOB.** One ask, once he knows who he'd be working with.

**WHAT HE SEES.** Ground change, one line, the button. Short — S4 arrived here to confirm, not to be persuaded, and every extra line between him and the button is a cost.

**TEXT (PROVISIONAL).**

> **Headline** — That's the two of us.
>
> **Deck** — The next step is a free look at your own footprint.
>
> **CTA** — Get your free footprint audit

*One alternate, with the reason it loses.* (B) *"Now you know who you'd be working with."* — the line R2 carried. It is right for S2, who arrived cold and did just learn something on this page. It loses because About is built for S4 first, and **he learned nothing here**: he was sent by one of these two people and came to check the faces against what he was already told. A close that tells a warm visitor he now knows something misreads the visitor the page serves first, and it is the last thing he reads before the button. The primary line closes for both — it lands as a plain sign-off for S2 without claiming anything about what S4 took from the page.

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
**Loud-or-wordy: passes, re-counted after this revision.** B5's headline changed and is still a headline and one line — four words now where there were seven, so the page's one LOUD section got shorter rather than longer. The alternate beneath it is document prose and never reaches the page. Both prose-bearing sections, B2 and B4, are QUIET. B1 carries a headline, one line and two bracketed slots — no paragraph.

---

### §2.4 — THE ASK

**The page's job.** Get the URL and the email, having first made the flow so plain that handing them over does not feel like a trap.

**Arrival states served.** All of them. S1, S2 and S3 arrive here having been argued into it. S4 arrives here directly and takes the quiet bypass.

**Where the ask appears — one, plus one bypass.** The form is the page. The nav button scrolls to it. The direct-booking line sits beside the form, deliberately subordinate, and is the site's only bypass — one bypass, one location. Count: **1 + 1**. **The bypass must fall within the first screen**, which is a requirement of this page rather than a preference of Phase 2's; the reason is written out at D3.

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
> **Submit** — Get your free footprint audit
>
> **Trust line, under the button** — We use your address to send the audit and to talk to you about it. That's all it's for.

*The submit button carries the site's one label rather than a form-specific one ("Send me the audit," "Submit," "Request"). Five of the sourcer's ten sites reuse a single label everywhere and the worst offender uses four. The button is the ask, so it says what the ask says. Field order — website, then email — is the order he expects (Jakob's law); reversing it costs nothing and gains nothing.*

**THE BELIEF AFTER.** That was easy, and I know what happens to what I just typed in.

**ARRIVAL STATES.** S1, S2, S3 primarily — the honest capture for anyone not already at "ready."
**OBJECTIONS ANSWERED.** O15, at the point of friction rather than in a distant FAQ, which is the whole reason the trust line sits under the button · O18 reinforced.
**MUST NOT CLAIM.** No data-handling promise beyond the flow that actually happens — **no invented privacy policy, no "we'll never share your data" unless a real policy backs it.** §0.3.1 — nothing on this section may state or imply a turnaround. §0.3.11 — the submit button is the only button on this page; D3 is a text link.
*Note on the loud-or-wordy rule: this LOUD section carries field labels, a button label and one line. Labels are not prose. Counted in the audit below.*

---

#### D3 · Already sure? — QUIET

**THE JOB.** Route the visitor who doesn't need the on-ramp, without making it look like a second choice.

**WHAT HE SEES.** One line and a text link, set small and visually subordinate to the form by construction — smaller type, no fill, no border, muted rather than accent. It is findable by someone looking for it and skippable by someone who isn't. **It sits within the first screen of the page**, beside the form rather than beneath it wherever the viewport forces the choice. R2 said "beside or beneath," which leaves the two treatments equivalent and they are not: **S4 arrives on this page for the call he was already offered**, and the one instruction the site gives a ready buyer must not be reachable only by scrolling past a form he does not want to fill in. Subordination is carried by type, weight and colour, all of which cost him nothing; distance is the one form of it that does, and it is spent on the state the site can least afford to lose.

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
> **Q. What if I want to stop?** `[OPEN — terms not decided]`
> A. Worth asking on the call, and we'd rather agree it with you than post terms here that don't fit what you're actually buying.
>
> **Q. Do you work in my market, in my language?** `[OPEN — §0.2 rule 5; the reserved slot lands here]`
> A. Ask us directly. It's a fair question and the honest answer depends on your market, so we'd rather tell you straight than make a blanket claim on a webpage.
>
> **Q. What does it cost, if we end up working together?**
> A. It's monthly, and it's scoped to how much footprint there is to run. We tell you the number on the call, once you've seen the audit and we've seen your site. There's no price on this website because anything we put here would be a guess about you.
>
> **Q. When will I hear back?**
> A. A person writes this, so it goes out when it's genuinely ready rather than on a timer. You'll get a note the moment we start, and that note will tell you when to expect it.

*Row order is serial position, and it changed after the first draft. The strongest row opens. **The two OPEN rows sit in the middle**, where the least attention lands, rather than at either end. The page then ends on the next thing that actually happens to him — which is peak-end applied to a page whose peak is the form above it. Ending on "we don't know yet," as the first draft did, spent the end position on the site's weakest sentence.*

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
**Loud-or-wordy: passes, re-counted after this revision.** D2 carries two field labels, a button label and one line of eighteen words. No paragraph. The two prose-bearing sections, D1 and D4, are both QUIET. **No copy changed on this page in the v3 pass** — D3's new first-screen requirement is a placement rule, and its one line of copy is untouched. This is deliberately the most concentrated page on the site: one job, one loud moment.

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

---

### §2.6 — THE REGISTER THE WORDS ARE WRITTEN IN

**FOUNDER 2026-09-02, verbatim in substance:** *expensive, technology, minimalistic, futuristic, but clean; a human vibe. Human and sky and bee and flowers, with a technological layer — ASCII, dots, ink — over it.*

Applied to text, that is one instruction: **the image is loud and the words are quiet.** The extravagance is spent entirely in the picture, which is also what the art-direction brief already says about type. So every line above is spare, exact and unhurried. No exclamation appears anywhere in this spine. No superlative. No verb that strains — nothing is unleashed, supercharged, transformed or elevated. No sentence that would read correctly on a discount landing page. Where a line had energy that came from volume rather than from precision it was cut: *"Want to see where yours actually stands?"* became *"See where yours stands."*, and *"Free, real, and yours whether…"* became *"It's free, and it's yours to keep whether…"* — the second in each pair is the more expensive sentence, and it is shorter.

**Where the images sit, per the founder's four nouns.** Human at H1, B1 and B2. Sky at H1. Flowers at H10. The bee is the mark and lives in the nav and the footer, never as an illustration in a section. The technological layer — glyph, dot, ink — is the dial, dramatic at H1 and H10, subtle at B1's portraits, absent at A5 where any interface-shaped rectangle would imply a product that does not exist.

---

### §2.7 — THE UX LAWS, AND WHERE EACH ONE CHANGED SOMETHING

Not a list of principles the spine happens to agree with. Each row names the decision that would have gone the other way.

| Law | Where it changed a decision |
|---|---|
| **Hick's** | One label at every ask position site-wide, including the form's submit button — which was "Send me the audit" until this rule. Nav carries two links, not a services menu. The comparison has no Beeond row, so it stays an elimination rather than a five-way choice. |
| **Miller's** | **H6 was a flat run of a dozen channel names.** It is now four groups of three or four, which is the single largest structural change in this revision. H9 capped at five rows; H3 three; H5 three; H7 four; A1 three; D4 five. |
| **Serial position** | **H9's rows were reordered** so the sharpest objection opens and the fit question closes, evidence in between. **D4's rows were reordered** so the two OPEN answers sit in the middle rather than at an end. Each page's first and last sections carry its belief; the middles carry evidence. |
| **Von Restorff** | Resolved the accent conflict in §2.0: four ask placements, **two** accent fills. The fill is the one distinct element per page, so it cannot also be the nav's default state — the nav ask is outlined, and the mid-page beat is outlined in the same treatment. *(Amended in this revision: the beat was accent text until the Fitts's row below.)* |
| **Cognitive load** | One idea per section, and the H1 alternates were judged on it — option (B) lost the hero specifically for carrying two ideas into a LOUD slot. Every headline in this spine is meant to land on one read; any that needs a second is wrong and should be marked. |
| **Jakob's** | Logo left, links centre-right, ask far right. Website field before email field. Neither is interesting, and that is the point. |
| **Progressive disclosure** | Home states, Approach deepens, the ask page resolves. H4 shows one rule catching one thing; A4 gives the rules in full. H5 is three lines; A3 is three paragraphs. H3 names the monthly record; A5 breaks it into its parts. **Home never carries the full explanation of anything.** |
| **Peak-end** | H10 gets a photograph, a ground change and the second accent fill rather than being a strip under the FAQ. A6 and B5 are built as closes, not as sign-offs. D4's last row was changed so the ask page ends on what happens next instead of on an unanswered question. |
| **Fitts's** | **H8's ask was accent text and is now an outlined button** — the law contradicted at the one scroll §0.2 designates for an actively evaluating visitor, and the row this table was missing when the contradiction was written. The two-fill budget was the stated defence and it does not hold: the nav ask is already an outlined button with no fill, so Layer 1 constrains the fill and not the shape. Applied correctly at **D2**, where the ask is the largest target on the site and the fields are generously sized, and correctly **inverted at D3**, where the bypass is deliberately small and unfilled so it is findable without competing — the same law used to make one thing easy to hit and one thing easy to skip. |
| **Zeigarnik** | Already applied and previously uncredited. **D4's closing row** was reordered to end the page on what happens next, so the loop the visitor opened by submitting stays open on purpose rather than closing on an unanswered question. **D2's confirmation note** is the same law: the founder's decision to put the turnaround expectation in the confirmation rather than on the page keeps the started task alive with a next step attached, which is why that confirmation copy is a real deliverable and not an afterthought. The two-step audit is itself the open loop — the site's structural bet, not a copy device. |
| **Aesthetic-usability** | **Noted for Phase 2, not acted on here.** It predicts that a site this carefully made will be judged as easier to use than it is, which is a reason to keep the underlying flows genuinely simple rather than a licence to decorate. No text decision was made on it. |

<!-- R2 SPINE END -->

---

## §3 — R3 THE JOURNEY

<!-- R3 JOURNEY START -->

**Every walk in this section is simulated, not observed, and every voice line it quotes is PROVISIONAL.** Said once here, not repeated per scroll. Beeond has no customers and no interviews; the five arrival states are constructs (§0.2 — only S1's fear carries a sourced input). Where a walk says a belief "holds" or "does not hold", that is the framer's reasoning about a defined state, not a measured reaction. §3.6's ranked changes are a proposal to the spine, not a validated backlog; nothing in §3 becomes plan of record without a customer signal (`CLAUDE.md`). *Added by ORCHESTRATOR after the customer-value review, 2026-09-02.*

**How to read this section.** Four walks — S1, S2, S3, S4 — each written as the visitor moves, scroll by scroll, page by page. Then §3.5 on S5, which is not walked. Then §3.6 across all four.

Three rules govern what is below. **Every quoted line is verbatim from §2** — if it is in quotation marks it is on the spine, and if a walk needs a line that is not on the spine it appears only inside GAPS FOUND, marked as a suggestion. **Every belief is tested against the specific state**, which means the spine's own BELIEF AFTER is treated as a claim to check, not a fact to repeat: several sections turn out to earn their belief for the state they were written for and not for the other states listed beside it, and that is recorded rather than smoothed. **Every scroll names the §0.9 law it leans on**, and where a section leans on none, that is written as "none" and carried into GAPS FOUND, per §0.9's closing instruction.

Two things this section is not allowed to do and does not do. It does not edit §2, even where a walk finds a defect in it — each one is recorded as a proposed fix addressed to the §2 revision and routed by the orchestrator. And it does not invent a visitor: the states are what he knows, weighs and fears, per §0.2, and where a section does nothing for a state the walk says so instead of manufacturing someone it helps.

**The register.** Objection numbers are the customer packet's (O1–O18, Part 1 of `packets/2026-09-02-r1-framer-customer.md`); §2.5 is where each one lands on the spine. A walk marks each objection it meets as **answered**, **deferred (OPEN)**, or **standing**.

### §3.1 — S1 · COLD · burned by generic AI output · browsing

**Where he lands, and why.** Home, from a link — the only cold channel that exists. He knows nothing of Beeond and a great deal about what machine-written marketing looks like, because he has shipped some. He is weighing whether paying anyone beats what tools already give him free. He is afraid of paying for a wrapper, and of his brand sounding like everyone else's. Before he reads a word the nav has already spent Hick's law on his behalf: two links and one ask, nothing to choose between.

**Scroll 1 · H1 · Hero — LOUD.**
*Reads first:* "Your whole marketing footprint, run for you." Then "Every channel handled, month after month — and you see exactly what was done." Then the button, then "Free, and yours to keep either way."
*Believes after:* the spine claims "I know what they would do for me, and there is a person in this somewhere." The first half holds. **The second half does not hold for this visitor.** The person is a photograph, and a warm human photograph over confident copy is the precise pairing he has been inoculated against — it is what the output he already distrusts looks like. What he actually believes is narrower: someone will run all his channels, and he will get a list of what they did. §0.2 requires this fold to "put the human in the loop on screen one" for him; the founder's later decision at §5 puts the human at section two. Both are binding and they disagree. Escalated below rather than resolved here.
*Law:* Serial position effect (the page's first section carrying its belief) · Von Restorff effect (the single accent fill).
*Register:* O1 "this is just AI" goes live on the first line. This section answers nothing, by design. **Standing.**

**Scroll 2 · H3 · How the work gets done — MEDIUM.**
*Reads first:* "What happens, in order, every time." Then block one, "A swarm of agents runs the output: content, pages, posts, technical fixes, campaigns, across every channel at once, coordinated as one thing rather than a pile of tools."
*Believes after:* the order is right for him. The machine is named before the person, so nothing is being hidden, and that is what buys block two its hearing: "Yarden reads every piece against a written standard before it reaches you or your audience. Not a spot check — a standard, written down, that a piece has to clear before it counts as finished." The spine's belief holds here — he is the state it was written for. It holds **provisionally**: one named person reading everything is a claim about capacity, and a visitor who knows how much output a swarm produces will silently ask whether one reader can clear it. Home never touches that, and neither does Approach.
*Law:* Miller's law (three blocks) · Progressive disclosure.
*Register:* O1 **answered** · O14 **answered**.

**Scroll 3 · H4 · What "done" means — MEDIUM.**
*Reads first:* "A piece of work isn't finished because it got produced." Then card one, "A post can't open on a buzzword," and the line it caught.
*Believes after:* "There's an actual bar here, and I've now seen it stop something." This is the section that converts him, and it earns its belief more completely for S1 than for any other state, because the struck-through line is a sentence he has personally written or deleted. It is recognition rather than persuasion, which is the cheapest form of belief there is.
*Cost:* two cards, each carrying three registers — the rule, the line it caught, the rewrite. Six things at the moment his decision is being made. §2.7 states that "H4 shows one rule catching one thing"; H4 shows two. The spine contradicts itself here and it resolves in the direction of less work.
*Law:* Progressive disclosure · Von Restorff effect **at a scale §0.9 does not define** — the struck line is the one thing in the section that looks like it failed, but §0.9 assigns Von Restorff per page, and Home's page-level distinctness is already spent on the LOUD sections and the accent.
*Register:* O2 — method shown, outcome not promised, which is as far as honesty goes. His literal question, "will *my* brand sound generic," stays **UNANSWERABLE as asked**, correctly.

**Scroll 4 · H5 · The shape of it — MEDIUM.**
*Reads first:* "It doesn't all switch on at once."
*Believes after:* nothing he needed. **This section does nothing for S1** and that is the honest reading rather than a defect — he is browsing, not buying, and phasing answers a question he has not yet asked. It belongs to S3. Recorded here because the brief requires it to be said rather than a beneficiary invented.
*Law:* Miller's law (three phases).
*Register:* none live for him.

**Scroll 5 · H6 · What's covered — QUIET.**
*Reads first:* "What 'whole footprint' actually covers." Then the group labels.
*Believes after:* weakly, yes. He scans for the channels he has already tried and failed at, and finds them under "Being worth reading — LinkedIn and social · Founder-led content." The four-group revision matters for him specifically: he is scanning, not reading, and a grouped list survives a scan where a flat dozen does not.
*Law:* Miller's law (four groups of three or four).
*Register:* O7, the scope half. Not his live question.

**Scroll 6 · H7 · What you're choosing between — LOUD.**
*Reads first:* "What you're choosing between." His eye goes to "Doing it yourself — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't."
*Believes after:* only partly. §0.2 puts his substitute at "DIY with AI tools" — and that substitute is split across two rows here, "A stack of tools" and "Doing it yourself," neither of which names the combination. The spine's belief, "I can see where this sits against my real options," requires him to read two rows as one. The row that would land hardest for him, the one about doing it yourself *with tools that write for you*, is the row the table does not have.
*Law:* Miller's law (four rows) · Von Restorff effect (the ground change).
*Register:* O3 is not his.

**Scroll 7 · H8 · The ask beat — QUIET.**
*Reads first:* "See where yours stands."
*Believes after:* the spine assigns this beat to "S2 primarily · S3." By §0.2's own rule S1's ask comes "late, after mechanism and proof-of-method" — and he has had the mechanism at scroll 2 and the proof-of-method at scroll 3. **He qualifies here and the spine does not list him.**
*Law:* Fitts's law — **leaned on and contradicted.** §0.9 states plainly that the CTA is a button, not a text link. This instance is accent-coloured text.
*Register:* none. It is the ask, not an answer.

**Scroll 8 · H9 · Before you ask — QUIET.**
*Reads first:* "Q. Is this just AI tools with a markup?" — which is his own sentence, nearly verbatim, and the reason he keeps reading. The answer opens "The agents do the volume — that part is a machine and we're not going to pretend otherwise."
*Believes after:* more than anywhere else on the page. The answer concedes before it argues, and every vendor who has sold to him has done the opposite. Rows three and four are not his. Row five lets him disqualify himself without asking anyone, which costs him nothing and buys the site credibility.
*Law:* Serial position effect (his row opens the set) · Miller's law (five rows, at the stated ceiling).
*Register:* O1 **answered** a third time, at its plainest.

**Scroll 9 · H10 · Close — LOUD.**
*Reads first:* "Start with a look at what you've got." Then "It's free, and it's yours to keep whether we work together or not."
*Believes after:* the spine claims the next step costs him nothing. True as to money, and money is not his risk. **His risk is that the audit is itself machine-generated** — that he hands over a URL and gets back the same output he can already produce for free. The sentence that kills that fear is "not an automatic report that gets generated the second you hit send," and it is on D1, one click past the decision it would have unlocked.
*Law:* Peak-end rule · Serial position effect.
*Register:* O18 pre-empted.

**By the fold.** Someone will run every channel for him and show him what was done; whether a machine writes it is still open, and that is the question he is reading on to settle.

**His first objection.** O1, live on the first line of H1, unanswered for one scroll, then answered three times with rising specificity — H3 block two, H4, H9 row one. That escalation is the strongest sequence on Home for any state.

**Where the ask appears for him.** Four placements. He is honestly ready at H8 and the spine does not offer him that instance by name; he is unambiguously ready at H10, after H9 row one has done its work. He takes the close.

**If he is not ready.** The waitlist is retired, so there is no low-commitment capture left for a browsing visitor. His two honest exits are the Approach page for A4, the deepest answer the site has to his fear, or **leaving with nothing** — which is what a browsing S1 who is not persuaded by H4 actually does. That is stated plainly because it is true for a real share of this state.

**How the supporting pages feed back to the ask.** Home → Approach is one click, on the nav. A4 sits at scroll 3 of that page and A6's close is the ask: **two clicks from Home to the ask by way of his deepest answer.** The path works and nothing on Home points at it — no section of Home links to Approach in body copy, while B2 on About does exactly that ("which you can read on the approach page").

**The experience test.** Three places he has to work. H4 asks him to hold six things (two cards, three registers each) at the moment his decision turns. H7 asks him to read two rows as one to find his own substitute. And at the exit he has to guess that the nav word "Approach" is where the standard is explained in full, because Home never says so. Against "easy to understand, easy to learn, easy to use," the first and third are real costs and the middle one is a comprehension cost he may simply not pay.

**The vibe test.** Mostly right. H9 row one — "that part is a machine and we're not going to pretend otherwise" — is the most expensive-sounding sentence he reads, because confidence that concedes is the register the founder asked for. The exception is H4: the struck-through line "In today's rapidly evolving landscape, unlocking growth means…" is the cheapest-sounding sentence on the site, and it carries the site's most load-bearing argument. It works only if Phase 2 makes the rejection unmissable at a glance. If it reads as copy rather than as a line being killed, the section inverts against precisely this visitor.

**GAPS FOUND — S1.**

1. **H1's belief is half-earned, and the cause is a §0-level contradiction, not a §2 defect.** §0.2 requires the fold to put the human in the loop on screen one for S1; §5's later founder decision puts the human at section two. The later decision governs. *Proposed fix — routed to the orchestrator, not to §2:* amend §0.2's S1 fold line to match the founder's decision, so the spine is not measured against a requirement that was superseded. **No change to H1 is proposed, because the human's position on screen one is founder-decided.**
2. **H4 shows two cards; §2.7 says it shows one.** *Proposed fix to §2:* H4 carries card one only. The founder-led-content rule already appears in full at A4, so nothing is lost from the site, and Home's densest moment halves at the exact scroll where S1 decides.
3. **H7 has no row for his actual substitute.** DIY-with-AI-tools spans "A stack of tools" and "Doing it yourself." *Proposed fix to §2 — PROVISIONAL suggestion, not copy:* the tools row could name the case where the tools also write, along the lines of *"A stack of tools — You still have to run them, they still sound like themselves, and none of them joins your channels up."* Keeps four rows, so Miller's law is untouched.
4. **H8 does not list S1 among its arrival states.** By §0.2's own ordering he is ready here. *Proposed fix to §2:* add S1 to H8's ARRIVAL STATES as a secondary, changing no copy.
5. **The argument that converts S1 is one click past his decision.** D1's "not an automatic report that gets generated the second you hit send" is the answer to his specific fear about the audit itself. *Proposed fix to §2:* nothing on Home should promise it, but H10's MUST NOT CLAIM should record that this sentence is load-bearing for S1 and cannot be cut from D1 in Phase 2.
6. **Home never routes to Approach in body copy**, though §2.7's progressive-disclosure row makes Approach the necessary continuation of every Home section. *Proposed fix to §2:* one plain in-body link, in the manner B2 already uses.

### §3.2 — S2 · COLD · paying an agency or freelancer now · evaluating

**Where he lands, and why.** Home, cold, from a link, with a shortlist or a proposal already in hand. He knows what a retainer costs and how little of the work he actually sees. He is weighing Beeond against two or three others and is afraid of another opaque, slow, siloed vendor and of the switching cost. He is the only state that arrives with a comparison already running, which changes what every section has to do: it is not competing with nothing, it is competing with a named incumbent.

**One departure, said once.** Eight of the sourcer's ten sites carry a dedicated proof destination in the nav — Case Studies, Results, Portfolio, Wall of Love, Before/After. This nav has Approach and About. **He looks for proof in the nav first, because that is where every site he has just evaluated keeps it, and there is no such destination here.** He will not read that as restraint; he will read it as absence. The spine knows this and answers by method instead, which is the founder's decision and is not reopened.

**Scroll 1 · H1 · Hero — LOUD.**
*Reads first:* "Your whole marketing footprint, run for you." Then "Every channel handled, month after month — and you see exactly what was done."
*Believes after:* the headline is category language to him — his current agency claims exactly this, in these words. **The only new information on screen one is the deck's second clause.** §0.2 asks this fold to "differentiate in one screen, mechanism over adjectives," and it does, but on a subordinate clause of the second line rather than on the headline. What he believes is "another full-service pitch, with one clause I have not heard before." That is enough to earn scroll two, which is all the fold owes him, but the spine's stated belief — "there is a person in this somewhere" — is not what he takes from it. He is not looking for a person yet. He is looking for a difference.
*Law:* Serial position effect · Von Restorff effect (the accent fill).
*Register:* O3 "I already pay an agency — what's different?" goes live immediately. **Standing**, by design.

**Scroll 2 · H3 · How the work gets done — MEDIUM.**
*Reads first:* block three, not block one. His eye goes to "You see all of it" and "Every month you see exactly what was done, how much of it, and why — with the name of the person who signed it off."
*Believes after:* the spine's belief for this section is "I can see which one stops it being generic" — **which is S1's question, not his.** Genericness is not what he fears; opacity is. What he actually believes is that the record is the differentiator and that it is monthly rather than on request. The belief as written is a single-state belief asserted for three states. His partial answer to O3 arrives here, four scrolls before the section the spine credits with answering it.
*Law:* Miller's law (three blocks).
*Register:* O5 **answered** in outline · O3 **partially answered**, earlier than §2.5 records.

**Scroll 3 · H4 · What "done" means — MEDIUM.**
*Reads first:* "A piece of work isn't finished because it got produced."
*Believes after:* he believes there is a standard. He does not believe what he came for. He came for evidence that it has worked for someone, and a rule shown catching an invented example is a method, not a track record. §2.5 already states this and it is confirmed by the walk: **O4 is left standing for him and no later section picks it up.** What H4 buys is narrower and still real — a vendor who shows a written rule is a vendor with a written rule, which is more than adjectives, and he can check it against his current agency's answer to the same question.
*Law:* Progressive disclosure · Von Restorff effect at within-section scale.
*Register:* O4 **standing** · O2 method shown.

**Scroll 4 · H5 · The shape of it — MEDIUM.**
*Reads first:* "It doesn't all switch on at once."
*Believes after:* yes, and for a reason the spine does not name. His fear is switching cost, and a phased start is the answer to it — the section reads to him as "you will not have to rip everything out on day one." §2 lists him as secondary here on the grounds that the engagement has a shape. The stronger reason is switching cost, and it is the one thing on Home that speaks to it.
*Law:* Miller's law (three phases).
*Register:* O7, the shape half. Switching cost has no register row at all.

**Scroll 5 · H6 · What's covered — QUIET.**
*Reads first:* the group labels, scanning for the channels his current agency handles badly.
*Believes after:* yes, with a reservation. The closing line — "Not all of it, for everyone. It starts narrow and widens, scoped to what your footprint actually needs" — reads to an evaluator as a scoping caveat, which is honest and also slightly deflating at the exact moment he is checking coverage.
*Law:* Miller's law (four groups).
*Register:* O7, the scope half.

**Scroll 6 · H7 · What you're choosing between — LOUD.**
*Reads first:* "What you're choosing between." His row is "An agency retainer — The work happens somewhere you can't see, at whatever pace their team has room for."
*Believes after:* the spine claims "it isn't arguing against a straw man." For most of this state, correct — it names the two things he already resents. **For the S2 whose agency is genuinely transparent, the row is wrong about his experience**, and a site that is wrong about his experience in a LOUD section loses more than the row was worth. Said once, not repeated: this is the one row on Home that can be falsified by the visitor's own life.
*A counted departure, said once.* A comparison table appears on two of the sourcer's ten homepages, and both are the AI-native entrants arguing against the incumbent category. **This device places Beeond with the challengers**, which is where it belongs and which he will recognise — he has probably just read one of those two sites. The risk is that a challenger claim with no proof behind it is the one shape of argument he is most practised at discounting.
*Law:* Miller's law (four rows) · Von Restorff effect (the ground change).
*Register:* O3 **answered** by elimination.

**Scroll 7 · H8 · The ask beat — QUIET.**
*Reads first:* "See where yours stands."
*Believes after:* "This is a reasonable moment to just ask about my own situation" — and it is, exactly as §0.2 places it. **This is the single most conversion-critical instance of the ask on the site, and it is the one rendered with the weakest affordance.** §0.9's Fitts's row says the CTA is a button, not a text link; this is accent-coloured text, set small, immediately under a LOUD section, on the same ground, and deliberately subordinate to what it follows. The spine defends the treatment on Layer 1's two-fills-per-page rule — but the nav ask is an *outlined* button and carries no fill, so the rule does not force a text link. The constraint is the fill, not the button.
*Law:* Fitts's law — **leaned on and contradicted**, at the state's designated ask moment. §2.7 has no Fitts's row at all.
*Register:* none.

**Scroll 8 · H9 · Before you ask — QUIET.**
*Reads first:* "Q. I already have an agency. What's different?" Answer: "Mostly, what you can see."
*Believes after:* this is his second answer to O3 and it arrives one scroll after his ask. That is not a defect — H7 answered him at scroll 6, so the beat follows an answer rather than preceding one, and row two functions as the second chance for the S2 who did not take the beat. Row five, the fit row, is the site's only explicit disqualification, which two of the ten sites do and which reads to an evaluator as confidence rather than as hedging.
*Law:* Serial position effect (rows reordered so the fit question closes) · Miller's law (five rows at the ceiling).
*Register:* O3 **answered** again · fit **answered**.

**Scroll 9 · H10 · Close — LOUD.**
*Reads first:* "Start with a look at what you've got." Then "It's free, and it's yours to keep whether we work together or not."
*Believes after:* for an evaluator holding a proposal, a free read of his own site is a low-cost way to sample the vendor's actual judgment — which is worth more to him than to any other state, because he has a comparison to run it against. He may well take the audit purely as a work sample.
*Law:* Peak-end rule.
*Register:* O18 pre-empted.

**Then Approach, which is his page.** He clicks it from the nav, either to read or to forward.

**A1 · Reading this cold — QUIET.** *Reads:* "If someone sent you this, you don't need anything else to read it. This is the whole thing, in order." *Believes:* he knows what the document is and how long it is. **This section is not written for him** — it is written for the person he forwards it to, who is not one of the five arrival states. That is stated rather than resolved: §0.2 defines no state for the forwarded-to reader, and A1 exists for rule 4's downstream audience. *Law:* Miller's law (three anchors) · Serial position effect. *Register:* none.

**A3 · The work gets done — QUIET.** *Reads:* "A footprint doesn't get switched on. It gets built, and the order matters." *Believes:* the operating shape is real and specific enough to compare against a proposal. *Law:* Progressive disclosure (Home's strip becomes paragraphs) · Miller's law. *Register:* O7 at full depth.

**A4 · A person signs off on it — QUIET.** *Reads:* "That on its own is just a promise to care about quality, and every agency makes it. So here is the thing underneath it." *Believes:* the pre-emption works on him specifically, because he has been told exactly that promise by the vendor he is paying. Then two rules in full. *Believes after:* there is a checkable standard. Still not a track record. *Law:* Progressive disclosure · Von Restorff at within-section scale. *Register:* O2, O14 **answered** · O4 still **standing**.

**A5 · You see all of it — QUIET.** *Reads:* "This is how the work runs, not a report you have to ask for. It is the same record we use to run your account — you are looking at the actual thing, not a version of it made for you." *Believes after:* this is his section and it earns its belief. The distinction between the operating record and a report made for the client is one he can evaluate immediately, because he receives the second kind every month. **The asymmetry is worth stating and cannot be fixed in copy:** he is comparing a described practice against a delivered artefact from his current vendor, and §0.3.6 rightly forbids the site from showing or promising the thing. He weighs a sentence against a document. That is the cost of the founder's decision, and the decision is sound. *Law:* Miller's law (four labelled parts, at the cap). *Register:* O5 **answered** in full.

**A6 · Close — LOUD.** *Reads:* "That's the whole of it." *Believes:* "I now have the document I'd send to whoever decides this with me" — which is the truer half of the spine's belief for him, since decision power is untested (§0.2 rule 4). *Law:* Peak-end rule. *Register:* none new.

**Then About, as the trust check before shortlisting.** *Reads:* "Adam and Yarden." and the split. *Believes:* two specific people, roles clear. **Then he reads two visibly empty credential slots.** For an evaluator, About's job is to convert names into people with histories, and the slots that would do it are `[OPEN]` by design until the founder supplies them. B2's first-person bios carry more weight than B1 for him — "a system you can't inspect is just a promise with more steps" is the sentence that sounds like a person rather than a company. **B4 leans on no §0.9 law at the scale §0.9 defines**: its distinctness is typographic and within-page, while About's page-level Von Restorff is already spent on B1's portraits and B5's fill. For him B4 is a thesis he mostly agrees with and does not need.

**Then The Ask.** D1 tells him the flow. D2 takes the URL and the email; the trust line answers O15 where it fires. **D3 is his secondary route** — the spine names him there as "the evaluator who has finished comparing," and it is correct: an S2 who has read Approach may not want the on-ramp at all. D4's five rows close on when he hears back.

**By the fold.** Another full-service pitch with one unfamiliar clause about seeing the work, and no proof destination anywhere in the navigation.

**His first objection.** O3, live at H1, partially answered at H3 block three (scroll 2), answered by elimination at H7 (scroll 6), answered plainly at H9 row two (scroll 8). Three passes, escalating. **O4 is his second objection and it is never answered** — by founder decision, and the walk confirms §2.5's warning that H4 and A4 are the only things he gets in exchange.

**Where the ask appears for him.** Four on Home; his is the beat at scroll 7. He is ready there because H7 landed one scroll earlier, and unready only in the sense that the affordance is a text link.

**If he is not ready.** Approach, which is the honest fallback for an evaluator and the one page built for him. No waitlist, and none is wanted here — a visitor comparing three vendors does not want a mailing list, he wants a document. The site serves him correctly.

**How the supporting pages feed back to the ask, counted.** Home → Approach (nav, one click) → the ask at A6 or the nav (one click) = **two clicks**. Home → the beat at H8 = **one click**. Forwarded path: his colleague lands on Approach cold, A1 addresses that reader in its second line, and reaches the ask in **one click**. All three verified against the spine's own ask counts: Home four, Approach two, About two.

**The experience test.** He has to do one piece of work no other state has to do: **assemble the proof case himself.** No section states the company's stage, so he must infer it from the absence of logos, the two-person About and the method shown in full, then decide what that adds up to. That is the founder's decision working as intended, and it is still work, and he is the visitor least inclined to do it for a vendor. Second cost: "what was done, how much of it, and why, with a name attached" is a four-part structure he meets three times — H3 block three, H9 row two, A5. Repetition helps him; each instance sits at Miller's cap.

**The vibe test.** H7's rows are the most expensive-sounding lines he reads, spare and structural with no adjective doing the work. A5's "Not agent logs, not raw activity — those are our problem, not yours" is confident and human. One line is off-register: H6's group label **"Turning visits into conversations"** is agency-deck phrasing in a document that otherwise refuses it, and it sits two lines from "Being worth reading," which is exactly right.

**GAPS FOUND — S2.**

1. **H8's ask is a text link at the one moment §0.2 designates for this state.** *Proposed fix to §2:* render the mid-page beat as an outlined button in the nav's treatment — no accent fill, so Layer 1's two-fills rule is untouched and §0.9's Fitts's row is satisfied. The spine's own nav proves outlined buttons are compatible with the budget.
2. **§2.7 omits Fitts's law and the Zeigarnik effect**, both of which §0.9 assigns work in text. Fitts's is the law H8 contradicts; Zeigarnik is in fact applied, uncredited, at D4's closing row and in D2's confirmation note. *Proposed fix to §2:* add both rows so the table covers every law §0.9 says applies now.
3. **H3's BELIEF AFTER is written for S1 and asserted for three states.** *Proposed fix to §2:* state the belief per block and per state, since each block is aimed at a different one — the section already names which block serves which state and the belief line does not follow suit.
4. **H7's agency row can be falsified by his own experience.** *Proposed fix to §2 — PROVISIONAL suggestion, not copy:* the row could describe the structure rather than assert his case, along the lines of *"An agency retainer — What you see is what they choose to show you, at whatever pace their team has room for."* Same length, same register, no longer a claim about his vendor.
5. **Switching cost has no home.** It is one of two fears §0.2 names for this state and it appears in no register row and no section's objections-answered line, though H5 answers it incidentally. *Proposed fix to §2:* record switching cost against H5 in its ARRIVAL STATES line, so Phase 2 cannot cut the phasing without knowing what else goes with it.
6. **A1 serves a reader no arrival state describes.** No fix to §2 proposed and none needed — recorded so that §0.2's state list, not the spine, is where the gap is answered if the orchestrator wants it answered.
7. **H6's "Turning visits into conversations" is off-register.** *Proposed fix to §2 — PROVISIONAL suggestion:* a plainer label in the register of its neighbours, such as *"Getting a reply."*

### §3.3 — S3 · COLD · nobody owns marketing, considering a first hire · evaluating, price-sensitive

**Where he lands, and why.** Home, cold, from a link. He knows something should be happening and is not, and that a hire is slow and expensive. He is weighing a hire against an agency against "later," and he is afraid of committing to a retainer before knowing what he gets each month — and, separately, of being the only person in his company who cares about this. He is the least marketing-fluent of the four, which makes him the state the experience principle is really about.

**One departure, said once.** Eight of the sourcer's ten sites carry a services or solutions item in the nav. He is the visitor most likely to look for one, because he does not know the category's conventions and simply wants to see what he would be buying. There is no such destination; coverage is a section five scrolls down. The spine's reason is sound — Beeond is a single-offer business, and the two sites of the ten without a services item are the two that are also single-offer — but **the cost lands on this state specifically**, and it is a scroll he has to take on trust.

**Scroll 1 · H1 · Hero — LOUD.**
*Reads first:* "Your whole marketing footprint, run for you."
*Believes after:* **this is the closest match between any headline and any state's requirement in the whole document.** §0.2 asks the fold to "make the offer legible as 'your whole footprint, run for you'" and the headline is that sentence. Then the deck, "Every channel handled, month after month," which glosses "footprint" as "every channel" on the very next line — the term the site is named around gets defined one line after it is first used, which is what keeps it legible for the state least likely to know it. He believes he is looking at someone who will do all of it. The residual cost is the nav, where "Get your free footprint audit" sits from second one with no gloss beside it, for a visitor who has not yet scrolled.
*Law:* Serial position effect · Cognitive load (a headline understood in one read — this one, for this visitor, genuinely is).
*Register:* O7 "what do I actually get, month to month" goes live, and O8 with it. Both **standing**.

**Scroll 2 · H3 · How the work gets done — MEDIUM.**
*Reads first:* block one, "The work gets done," and under it "*What that means for you:* the work happens without you managing it."
*Believes after:* the spine assigns him block one as the answer to "who does the work." The line that actually lands is the pairing beneath it. **His second fear is being the only one who cares, and "the work happens without you managing it" is the site's answer to it** — the engagement does not depend on his attention. That fear appears in no register row and this section answers it anyway, uncredited.
*Law:* Miller's law (three blocks) · Cognitive load (each block one idea, paired with one consequence).
*Register:* O14 **answered**. The unregistered fear — being the only one who cares — **answered**.

**Scroll 3 · H4 · What "done" means — MEDIUM.**
*Reads first:* "A piece of work isn't finished because it got produced."
*Believes after:* little that he needed. **This section does close to nothing for S3.** He has not been burned by generic AI output, because he has not produced any; a written standard is a reassurance about a problem he has not had. It is not wasted on him — a vendor with written rules reads as a vendor with a method — but the belief the spine claims for it is S1's, and the two-card version costs this visitor twice as much attention for the same small return. He is the strongest evidence for cutting Home's second card.
*Law:* Progressive disclosure · Von Restorff at within-section scale.
*Register:* none of his.

**Scroll 4 · H5 · The shape of it — MEDIUM.**
*Reads first:* "It doesn't all switch on at once." Then "Foundation — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it."
*Believes after:* this is his named must-believe and it is met. He can picture the first stretch without being given a calendar he would not have believed anyway. **One cost, and it is his:** of the three phase labels, "Foundation" explains itself and "Content Engine" and "Amplification" do not. He is the visitor least equipped to guess them, and this is his most important section. The one-line descriptions carry him, which means the labels are doing no work and are still charging him for the attempt.
*Law:* Miller's law (three phases) · Progressive disclosure.
*Register:* O7, the shape half, **answered**.

**Scroll 5 · H6 · What's covered — QUIET.**
*Reads first:* "What 'whole footprint' actually covers." Then the four group labels.
*Believes after:* this is where he finally gets what a services page would have given him in the nav, and the grouping is what makes it work for him. He cannot evaluate twelve channel names — he does not know what half of them cost or take. He can evaluate four groups. **The four-group revision is worth more to S3 than to any other state**, because he is the one who was going to bounce off a flat list.
*Law:* Miller's law (four groups of three or four).
*Register:* O7, the scope half, **answered**.

**Scroll 6 · H7 · What you're choosing between — LOUD.**
*Reads first:* "An in-house hire — You get the skills of the person you hired, and nothing ships until they start."
*Believes after:* the hire row is the sharpest sentence on the site for him, because it names the two costs of hiring he has already worked out for himself and one he may not have — that a single hire's ceiling is that person's own skill set. His third option, "later," has no row of its own; "Doing it yourself — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't" addresses inaction in effect without naming it. **His real competitor is doing nothing, and the table argues against doing it badly.** That is close, and it is not the same thing.
*Law:* Miller's law (four rows) · Von Restorff effect (the ground change).
*Register:* O3 answered, though it was never his.

**Scroll 7 · H8 · The ask beat — QUIET.**
*Reads first:* "See where yours stands."
*Believes after:* he is listed here as secondary and he is genuinely close, because the word "free" has been in the ask label since scroll one. **That is the quiet achievement of the one-label decision for this state:** the price-sensitive visitor has been reading a price on every screen since the fold, and it is zero. He still may not take it, because §0.2 puts his ask on the ask page and his live question is what the engagement costs, not what the audit costs.
*Law:* Fitts's law — leaned on and contradicted, as for S2.
*Register:* none.

**Scroll 8 · H9 · Before you ask — QUIET.**
*Reads first:* "Q. How soon does anything actually happen?" Then, one row later, "Q. Why isn't there a price on this site?"
*Believes after:* **this section changed most for him and it shows.** Both of his live questions are now here, adjacent, and both are answered without a number: "We won't put a date on that here, because at this point we'd be inventing one," and "Because it depends on how much footprint there is to run, and we haven't seen yours." A price-sensitive visitor who is told plainly why there is no price, and told that the reason is about him rather than about them, does not read it as evasion. Then row five: "It fits if you have more channels than attention, and nobody whose whole job is holding them together." **That is his situation described back to him without a persona being named** — the clearest statement on the site that he is the intended buyer, achieved inside §0.3.3.
*Law:* Serial position effect (the fit row closing the set) · Miller's law (five rows at the ceiling).
*Register:* O7 as timeline **answered** · O8 **answered as why** · fit **answered**.

**Scroll 9 · H10 · Close — LOUD.**
*Reads first:* "Start with a look at what you've got." Then "It's free, and it's yours to keep whether we work together or not."
*Believes after:* the next step has no price and no commitment, which is the only shape of next step this state was ever going to take first. He converts here or at the ask page.
*Law:* Peak-end rule.
*Register:* O18 pre-empted.

**Then The Ask, which is where §0.2 puts his ask.**

**D1 · Header — QUIET.** *Reads:* "Tell us your website. We read it, write up what we find, and send it to you. Then, if you want it, we get on a call and go through it together." *Believes:* he knows the whole flow before he types anything, including that the call is optional. **His third must-believe was "a call is a diagnosis, not a pitch," and under the two-step decision that belief has migrated:** the diagnosis is now the audit, and the call is where it gets explained. D1's second paragraph — "It's a real read of your site by the people who'd be doing the work" — is what carries the migrated belief. *Law:* Progressive disclosure · Zeigarnik effect (the loop opens here). *Register:* O16 opened · O18 **answered**.

**D2 · The audit request — LOUD.** *Reads:* "Where should we look?" then two fields, then the trust line. *Believes:* "That was easy." Two fields is the lowest-friction capture the site could honestly ask for, and for a visitor who is not sure he is ready, every field removed is a real gain. *Law:* Fitts's law (a large near target, correctly applied here) · Jakob's law (website before email) · Hick's law (one button). *Register:* O15 **answered** where it fires.

**D4 · What to expect — QUIET.** *Reads:* row one on what is in the audit, then the cost row: "It's monthly, and it's scoped to how much footprint there is to run. We tell you the number on the call, once you've seen the audit and we've seen your site." *Believes:* he now knows the shape of the commitment — monthly, scoped, told on a call — which is the most a price-sensitive visitor can be given without a figure, and more than he had at scroll one. The page then closes on when he hears back, which leaves him with a next step rather than an open question. *Law:* Serial position effect · Peak-end rule · Miller's law (five rows). *Register:* O8 in full · O16, O17 **answered** · O6, O13 **deferred (OPEN)**, correctly.

**By the fold.** Someone will run every channel for him, the whole thing has a name he now understands, and the first step costs nothing.

**His first objection.** O7 and O8 together — what do I get, and what does it cost — both live from scroll one. O7 is answered progressively at H5 and H6 (scrolls 4 and 5) and completed at A3 if he goes there. **O8 stays live for eight scrolls**, mitigated the whole way by the word "free" sitting in every instance of the ask, and answered at H9 row four. That mitigation is real and it is worth naming, because without it this state would be reading an unpriced page for eight scrolls.

**Where the ask appears for him.** Four on Home; §0.2 puts his conversion on the ask page, and the walk agrees — he arrives there from H10 with both of his questions answered, which is not true of him at H8.

**If he is not ready.** The waitlist is retired, so a price-sensitive visitor who wants to think about it has no way to stay in contact. **He leaves with nothing, or he reads Approach.** For this state that is the sharpest consequence of the waitlist decision anywhere in the four walks: he is the one most likely to want to come back later, and the site now has no mechanism for later. The free audit is the intended answer and it is a bigger step than a waitlist was.

**How the supporting pages feed back to the ask, counted.** Home → the ask page from H10 or the nav = **one click**. Home → Approach (nav) → A3 for the full phase detail → the ask at A6 = **two clicks**. Nothing on Home tells him A3 exists, which is the same routing gap S1 hits.

**The experience test.** Four places he works, more than any other state. The nav label carries "footprint" before anything defines it. Two of three phase labels in his most important section are terms he has to infer from the line beneath them. There is no services destination, so he takes five scrolls on trust before he sees coverage. And H4 spends two cards of his attention on a fear he does not have. Against "easy to understand, easy to learn, easy to use," he is the state the site currently costs the most, and he is the state §0.2 describes as least equipped to pay.

**The vibe test.** Right more often than not. "Quiet on the surface. Most of this phase is underneath it" is calm and expensive and exactly the register the founder asked for. "Because at this point we'd be inventing one" is human, and a visitor who has been quoted confident timelines by an agency will notice. Off-register: **"Content Engine" and "Amplification"** are the two most category-sounding words on the site, and they sit inside the section built for the visitor least able to decode them.

**GAPS FOUND — S3.**

1. **H5's phase labels are jargon for the state the section is built for.** *Proposed fix to §2 — PROVISIONAL suggestion, not copy:* keep the phase structure and plain the labels, along the lines of *Foundation · Output · Compounding*, or let the existing one-line descriptions serve as the labels. §0.3.7 bans coined terms and these are inherited rather than coined, so this is a legibility fix, not a compliance one.
2. **H4 does close to nothing for S3 and costs him two cards.** *Proposed fix to §2:* the same single-card fix S1's walk proposes, reinforced here — one card serves S1 fully and costs S3 half as much.
3. **H7 has no row for "later," which is this state's real alternative.** *Proposed fix to §2:* record in H7's ARRIVAL STATES that the DIY row carries inaction for S3, so Phase 2 does not rewrite it into something narrower. A fifth row is not proposed — four rows is Miller's cap and the elimination shape is founder-endorsed.
4. **The waitlist's retirement leaves this state with no "later."** No fix to §2 is proposed, because the waitlist is a founder decision and the audit is its intended replacement. Recorded so the consequence is visible: **S3 is the state that leaves with nothing most often**, and the ask he is offered is larger than the one that was removed.
5. **Nothing on Home routes to A3**, which is the full version of his must-believe. Same fix as S1's gap 6 — one in-body link.
6. **The nav ask carries "footprint" with no gloss** for a visitor who has not scrolled. No fix to §2 proposed: the one-label decision is Hick's law applied deliberately and the term is glossed at H1's second line, which is as early as it can honestly be. Recorded because it is a real cost for this state and because it is the argument against ever making the label longer.

### §3.4 — S4 · WARM · sent by Adam or Yarden · ready, or one push from it

**Where he lands, and why.** A link sent by a founder — the only channel that exists today, and the one both warm prospects will arrive through. He already knows the pitch and the people. He is weighing whether to take the call that has effectively already been offered, and he is afraid the company is too new, that there is nothing behind it, and that he will waste a meeting. §0.2 and §2.3 both assume he opens **About**.

**An assumption that has to be stated before the walk starts.** Which URL a founder sends is not decided anywhere in this document. The spine is built on About being that URL. If the root is sent instead, he lands on H1 — a page §2.1 explicitly says he does not read — and reaches the bypass in two clicks anyway via the nav, but **without ever seeing the two faces, which is the only thing he came to confirm.** The walk below assumes the About link. The alternative is not broken; it is emptier.

**Scroll 1 · B1 · Adam and Yarden — MEDIUM.**
*Reads first:* "Adam and Yarden." Then "Adam builds the systems and the swarm. Yarden owns marketing and growth, and she is the last read on everything that reaches a client."
*Believes after:* the spine claims "these are two specific people, not a team page." True, and for him it is confirmation rather than information — he was told these names by one of them. The section does the job §0.2 sets, which is to confirm rather than repeat. **Then his eye reaches two visibly empty credential slots.** His central fear is that there is nothing behind this, and the one element on the site designed to answer it is `[OPEN]` until the founder supplies both facts. That is correctly marked and correctly unfilled — no engine may invent them — and it means **this state's most important belief currently rests on two blank spaces.**
*Law:* Serial position effect (the page's first section carrying its belief) · Von Restorff effect (the blob-cropped portraits as the page's one distinct element).
*Register:* O12 **answered** · O9 and O10 **implication only**, per the founder's rule-3 revision.

**Scroll 2 · B2 · In their own words — QUIET.**
*Reads first:* Adam's block, ending "a system you can't inspect is just a promise with more steps." Then Yarden's, "Whether a piece sounds like you, and whether it's worth putting your name on, is a judgment call, and that one is mine."
*Believes after:* **this is the section that actually confirms him, more than B1.** A referral arrives holding a memory of how a person talked, and first-person prose is the only thing on the site that can match against it. If the bios sound like the people who pitched him, the referral holds; if they sound like a company describing its staff, it weakens. The spine's voice decision — first person here and nowhere else — is doing real work for this state and no other.
*Law:* Cognitive load (prose confined to a QUIET section) · Miller's law (two blocks).
*Register:* O12 at depth · O14 **answered**.

**Scroll 3 · B4 · Why now — QUIET.**
*Reads first:* "Why we're doing this now." Then "We're not claiming nobody else could build this. Plenty could."
*Believes after:* very little that is new. **This is the third time he meets the thesis** — once from the founder who sent him, once implicitly in B1's deck, and now in full. §2 credits it to him as "the reason to talk now," and for a visitor who has not heard the pitch that is right. For S4 it confirms tone rather than adding an argument. The concession — "Plenty could" — is the one part that earns its place with him, because a referral is primed to hear overclaiming and does not.
*Law:* **none, at the scale §0.9 defines.** Its distinctness is typographic and within-page, while About's page-level Von Restorff is already spent on B1's portraits and B5's fill. Serial position places evidence in the middle of a page; B4 carries an argument. This is the one section in the four walks that leans on no law.
*Register:* O11 conceded, not resolved.

**Scroll 4 · B5 · Close — LOUD.**
*Reads first:* "Now you know who you'd be working with." Then "The next step is a free look at your own footprint," then the accent-filled button.
*Believes after:* the spine claims "right, that's the next step, and it's one click." Mostly true, with one seam: **the headline assumes he learned something on this page**, and he arrived already knowing it. For every other state that line closes a loop; for the state the page is built for it slightly overstates what just happened. The deck then offers him the audit, which is not the step he wants — he wants the call — and the button's label says audit too.
*Law:* Peak-end rule · Fitts's law (a button, correctly).
*Register:* none new.

**Click one — About to The Ask.** He takes B5's button or the nav ask; both carry the same label and both land him on the ask page.

**Scroll 5 · D1 and D2, skimmed.** He reads "A free look at your footprint," registers that this page is about the audit rather than the call, and scans past the form. The two-step explanation he skims is written for a visitor who needs persuading, which he does not. *Law:* Progressive disclosure, working against him here — the page discloses the on-ramp he was trying to skip.

**Scroll 5 · D3 · Already sure? — QUIET.** *Reads:* "Already sure? Book a call directly." *Believes:* "I don't have to sit through a step I don't need," which is exactly right and is the belief the section was written for. *Law:* **Fitts's law, deliberately inverted** — §0.9 states in terms that "the direct-booking line is visibly smaller by design," so this is the law correctly applied rather than violated. The consequence is still worth naming: **the site's only ready-to-buy state is given its smallest, lowest-affordance target**, and that is the price of §0.3.11's single-ask rule. The price is worth paying and it is not free.

**Click two — the bypass, taken.** *Destination:* `[OPEN]`. §2.4 records that the **booking mechanism is not wired**, so his two-click path currently terminates on a link with nothing behind it. That is an implementation gap, not a storyboard gap, and it is the single most consequential unbuilt thing for the only channel Beeond has.

**By the fold.** Two real people, the roles he was told, in a voice that matches the person who sent him.

**His first objection.** "You have no clients yet," in its sharper private form: is there anything behind this. It surfaces at B1 the moment he reaches the empty credential slots. **No section answers it**, by founder decision — the site implies its stage and never states it — and the two facts that would speak to it are `[OPEN]`. The register records this as O9 and O10, implication only, and the walk confirms it: for S4 the implication is carried entirely by B2's voice.

**Where the ask appears for him.** Two on About, nav and close, and he needs neither for its own sake — both are routes to a page whose bypass is what he wants.

**If he is not ready.** §0.2 is explicit and the walk confirms it: **no fallback on the site. The referral does the follow-up.** That is honest and it is the correct design — a warm prospect who does not book is a founder's phone call, not a form. Nothing on the site needs to catch him.

**How the supporting pages feed back to the ask, counted and verified against the spine.** From About: **one click** reaches the ask page, where D3 sits beside the form; **the second click is the bypass itself.** So the direct-booking line is *visible* in one click and *taken* in two, which satisfies §0.2's two-click requirement with a click to spare. Verified against B5's own arrival-states line, which describes the same path, and against §2.4's placement of D3 beside the form rather than after the FAQ. Two frictions ride on it. **Both click-one targets are labelled "Get your free footprint audit,"** so nothing tells him the page also books a call — he takes the audit link on faith that it leads somewhere useful, which is a guess. And §2.4 places D3 "beside or beneath the form," which leaves open whether it is on his first screen.

**The experience test.** He works in two places, and both are label-guessing rather than reading. He has to infer that the audit ask leads to a page that also holds a call, because the site's one label cannot say both. And he has to find a deliberately quiet line on a page whose entire visual weight is a form he does not intend to fill in. Against "easy to understand, easy to learn, easy to use," his path is short and slightly opaque — three sections he does not need, then a guess.

**The vibe test.** B2 is the most human writing on the site and it is the right thing in the right place for a referral. B4's concession is confident in the way the founder asked for. Off-register for him alone: **"Now you know who you'd be working with"** tells a man who already knew what he now knows.

**GAPS FOUND — S4.**

1. **His central belief rests on two `[OPEN]` credential slots.** No fix is proposed and none is possible here — the founder supplies both facts or the site ships without them, and no engine may fill them. Recorded as the highest-value OPEN in the document for the only channel that exists.
2. **The referral landing URL is undecided.** *Proposed fix to §2:* record in §2.3 that About is the intended referral destination, so the assumption the page is built on is written down rather than implied. If the root is sent instead, S4 never sees the faces.
3. **B4 leans on no §0.9 law and adds little for the state About is built for.** *Proposed fix to §2:* not a cut — it earns its place for S2 — but B4's ARRIVAL STATES should say plainly that it confirms tone for S4 rather than supplying his reason to act, so Phase 2 does not treat it as load-bearing for the warm path.
4. **B5's headline assumes he learned something.** *Proposed fix to §2 — PROVISIONAL suggestion, not copy:* a close that works for both states, along the lines of *"That's the two of us."* The current line is right for S2 and slightly wrong for the state the page serves first.
5. **Nothing signals that the ask page also books a call.** *Proposed fix to §2:* no second label and no second ask — §0.3.11 governs. Instead, §2.4 should require **D3 to sit within the first screen of the ask page**, not merely "beside or beneath the form," so a visitor arriving for the call finds it without scrolling past a form he does not want.
6. **The bypass has no destination.** Implementation, not storyboard. Recorded because the two-click path the site is designed around currently ends nowhere, and it ends nowhere for the only visitors Beeond actually has.

---

### §3.5 — S5 · FUTURE · search or AI-answer arrival

**Not walked, and deliberately.** S5 is OPEN — FUTURE by founder decision. No SEO or GEO work exists, no queries are known, and §0.2 records the evidence for this state as "none today." Walking it would mean inventing what he searched for, which is the one thing a walk cannot do. What follows is only **what would have to change** when the channel exists, so that it can be checked against the spine rather than rebuilt from it.

- **The fold would have to answer a query, not open an argument.** H1 leads with an outcome — "Your whole marketing footprint, run for you." A visitor who typed "done-for-you marketing agency" needs his own words in the first line to know he landed right. That is a copy change gated on knowing the queries, which is gated on the channel existing.
- **His arrival state is a mix the three axes do not currently produce.** An AI answer has already told him what Beeond is, so he is warm on content and cold on trust — the opposite of S1. **His fold job would be to verify, not to explain**, and verification is the thing this site is least equipped to do: no logos, no case studies, and two credential slots still `[OPEN]`.
- **Three parts of the spine are already well shaped for extraction and should not be undone.** D4 and H9 are question-and-answer pairs, which is the most quotable structure on the site. H6's four labelled groups are cleanly parseable scope. A5's refusal to show an interface leaves a description in words rather than a picture, which a machine can read and a screenshot cannot.
- **The one structural gap.** No page carries a single self-contained sentence defining what Beeond is — the definition is split across H1's headline and its deck, which reads well and quotes badly. That is the thing an answer engine would need and the thing the site does not have.
- **Nothing above justifies changing the spine now.** Every item is either a copy decision that needs the queries first, or a strength already present. **The site as specified does not need rebuilding when S5 arrives**, which was the requirement §0.2 set for it.

---

### §3.6 — Across the four walks

**Tally.** Twenty-five gaps across four walks — S1 six, S2 seven, S3 six, S4 six. **One section leans on no §0.9 law** at the scale §0.9 defines: B4, met in two of the four walks. Four further scrolls lean on the Von Restorff effect at a within-section scale that §0.9 assigns per page — H4 in three walks and A4 in one — which is a gap in the law table's granularity rather than in the sections.

#### Load-bearing — the sections every state leans on

**H3 and H9 are the site's load-bearing pair, and for the same reason:** each gives every cold state its own entry point. H3 hands S1 block two, S2 block three and S3 block one; H9 hands S1 row one, S2 row two, S3 rows three and four, and every state row five. No other section on the site serves three states without one of them reading someone else's answer. **If Phase 2 cuts or compresses either, it removes a different state's only answer three times over.** H9 is also the section the sourcer's finding rebuilt, and the walks confirm the rebuild: cost, timeline and fit are now three separate live questions belonging to three different states.

**H1 and H10 are load-bearing structurally rather than argumentatively** — every state that reads Home meets both, and neither earns its stated belief for every state. H1's belief holds fully only for S3, whose fold requirement it quotes almost exactly.

**D1 and D2 carry every conversion on the site.** D1's "not an automatic report that gets generated the second you hit send" is load-bearing for S1 specifically and sits one click past the moment it would have converted him.

**B2 is load-bearing for the only channel that exists.** First-person prose is the only thing on the site that can match against a referral's memory of how a founder talks, and S4's walk is where that becomes visible.

#### Sections no state needed — and the honest answer

**No whole section is unneeded by every state.** Two come close and neither is a cut:

- **A1** is needed by a reader §0.2 does not define — the person the page was forwarded to. The gap is in the state list, not in the section, and rule 4 is the page's reason to exist.
- **B4** is needed by no state's must-believe. It adds a thesis for S2, who mostly agrees already, and confirms tone for S4, who has heard it. It is also the one section leaning on no law. **Still not a cut** — About with only bios and a close has no argument in it at all.

**The one genuine cut is not a section.** It is **H4's second card**, which three of four walks independently argue against: it serves S1's fear twice over, does nothing for S3, does not answer what S2 came for, and its rule already appears in full at A4. §2.7 states that H4 shows one rule; H4 shows two.

Two sections do nothing for a particular state and each has a state that needs it, which is stated rather than smoothed: **H5 does nothing for S1**, and **H4 does close to nothing for S3.** Neither is a defect. A four-page site serving four states will always have sections a given visitor scrolls past, and the test is whether every section is somebody's answer. Every one of them is.

#### Laws most and least used

**Most used, by a distance: Miller's law.** It shapes H3, H5, H6, H7, H9, A1, A3, A5, B2 and D4 — and after this revision it is the law that changed the most on the page, since H6's four groups are worth more to S3 than any other single structural decision in the spine. **Serial position, peak-end and Von Restorff** follow, all three concentrated at page openings and closes. **Progressive disclosure** is the law that makes the four-page architecture cohere, and it is the law the walks found unenforced: it depends on visitors moving from Home to Approach, and Home never routes them there in body copy.

**Least used, in three different senses.** **Aesthetic-usability and the Doherty threshold** are zero by §0.9's own instruction — one is Phase 2, the other does not apply to text. **Hick's law** is used exactly once and permanently, at the nav and the single label, after which no section leans on it again; that is the law working, not the law idle. **Fitts's law and the Zeigarnik effect are the real finding:** both are assigned text work by §0.9, both appear in the walks — Fitts's three times, at D2 correctly, at D3 correctly inverted, and at H8 contradicted — and **neither has a row in §2.7.** The law table omits the two laws that produced the most consequential per-scroll findings in this section.

#### The three changes to §2 I would fight for

**In priority order, and all three are reversible.**

1. **Render H8's ask as an outlined button, not accent text — and give §2.7 a Fitts's law row.** This is the ask instance at the exact scroll §0.2 designates for S2, the state most likely to be actively evaluating, and it is the only instance on the site with a weak affordance. §0.9 says the CTA is a button, not a text link. The spine defends the text treatment on Layer 1's two-fills-per-page rule, but **the nav ask is already an outlined button carrying no fill**, which proves the rule constrains the fill and not the button. The fix costs no accent, breaks no budget, and changes no copy.
2. **Cut H4 to one card.** §2.7 already claims this is what H4 does. Three walks argue for it independently, the second rule survives in full at A4, and Home's densest moment — six things held at the scroll where S1 decides — halves. This is the cheapest real improvement to the site's experience that the four walks found.
3. **Give Home one in-body route to Approach.** The waitlist's retirement made Approach the only honest fallback for S1, S2 and S3, and §2.7's own progressive-disclosure row makes it the necessary continuation of every Home section. Home currently points at it only from the nav, while B2 on About already does exactly the thing being asked for. Without it, the fallback for three of four states is a nav word they have to guess the meaning of.

#### A fourth priority, added by the orchestrator after review

**Wire the direct-booking destination and the audit form before the first link goes to a warm prospect.** §3.4 rates the unwired bypass "the single most consequential unbuilt thing for the only channel Beeond has" and then classifies it out of the storyboard's remit; the customer-value review (§3.7, finding 2) names that omission as a high finding. It is a build item, not a spine change, and it belongs on this list because the two-click path the site is designed around ends nowhere until it is done. Owner: founder (a calendar link is enough); builder for the form. Trigger: before the first referral link is sent.

#### One escalation, which is not a §2 change

**§0.2 and §5 disagree about the fold, and §2 is being measured against the losing side.** §0.2 requires S1's fold to "put the human in the loop on screen one." §5's later founder decision puts the swarm *and the human* at section two. The later decision governs, so H1 is correct as written and **S1's stated fold requirement cannot be met by design.** The consequence is real: S1's belief at H1 is half-earned, and the human on his screen one is a photograph — the exact pairing that visitor is inoculated against. **No change to H1 is proposed**, because the human's position is founder-decided and reopening it is not this engine's call. What is proposed is that the orchestrator route the contradiction: amend §0.2's S1 fold line to match the founder's decision, so the spine stops carrying a requirement that was superseded three decisions later.

<!-- R3 JOURNEY END -->

### §3.7 — Reviewer findings, verbatim (`reviewer`, lenses `customer-value` + `risk`, Opus, 2026-09-02)

*Pasted verbatim from the reviewer's return, in three parts as it arrived (the first return truncated in the channel after finding 4). Line numbers are the reviewer's, against the file as it stood at commit `4998441`; later edits have moved lines. Disposition follows the findings.*

```json
{
  "status": "COMPLETE",
  "lenses_applied": ["customer-value", "risk"],
  "findings": [
    {"lens": "customer-value", "severity": "high", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1056,
     "issue": "§2 opens with a standing PROVISIONAL banner (line 235); §3 opens with none. §3's rules instead say each belief is 'tested against the specific state' and the walks return verdict language — 'earns its belief' (1080), 'does not hold' (1068), 'his situation described back to him' (1295). Nothing at the head of §3 says every walk is simulated rather than observed. §3.6 then produces a ranked change list (1442) that reads as a validated backlog. This is the mechanism by which founder thesis becomes plan of record, which is the exact failure CLAUDE.md's customer-signal rule exists to prevent. Fix is one banner line in §2's own wording.",
     "state_affected": "none — no customer is affected. Beeond has zero customers and zero interviews; all five states are constructs. Only S1's fear carries a sourced input (line 49, verified). S2 and S3 are marked 'inferred' at lines 52 and 55, S5 'none today' at 61.",
     "confidence": "high"},
    {"lens": "customer-value", "severity": "high", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1372,
     "issue": "S4's designed two-click path terminates on a link with nothing behind it — §2.4 line 937 records 'Booking mechanism OPEN — nothing is wired.' §3.4 calls this 'the single most consequential unbuilt thing for the only channel Beeond has' and then classifies it out of the storyboard's remit (1395), so it does not appear in §3.6's three changes (1442). The artifact rates an item most consequential and then omits it from its own priority list. Cost to the visitor, in kind: he acts on the one instruction the site gives a ready buyer and gets nothing, spending trust that a warm referral was the sole source of.",
     "state_affected": "S4 — and this is the closest the document comes to a real person. Two warm prospects exist (line 58); they are prospects, not customers, and neither has been called.",
     "confidence": "high"},
    {"lens": "customer-value", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1323,
     "issue": "§3.3 finds S3 pays four comprehension costs, more than any state, and is the state §0.2 describes as least equipped to pay them: 'footprint' in the nav before it is glossed, two of three phase labels he must infer inside his most important section, five scrolls before coverage, and two H4 cards on a fear he does not have. §3.3 proposes a plain-label fix (1329). §3.6's priority list (1442) carries the H4 cut and the Approach route but drops the label fix — the one change aimed at the state the artifact says the site costs most. Churn trigger, in the register's founder-thesis wording: O7 'What do I get, month to month?' (line 1003) stays legible only through the one-line descriptions, while the labels charge attention and return none.",
     "state_affected": "S3 — hypothetical. No actual customer is affected today.",
     "confidence": "high"},
    {"lens": "customer-value", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1390,
     "issue": "S4's central fear is answered by two credential slots that are `[OPEN]` (1344, 765-766, 785-788). §3.4 calls this 'the highest-value OPEN in the document' and says 'no fix is proposed and none is possible here.' Correct that no engine may fill them (772). Not correct that nothing is possible: an OPEN whose resolver is the founder needs an owner and a trigger, and within §0–§3 it carries neither. Cost, in kind: the only belief S4 came to confirm currently rests on two blank spaces, on the only channel that exists.",
     "state_affected": "S4 — the two warm prospects arrive through this path.",
     "confidence": "medium"},
    {"lens": "customer-value", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 49,
     "issue": "The escalated conflict. §0.2 requires S1's fold to put the human in the loop on screen one; H1 puts a photographed human there (301) and forbids naming the mechanism (321), so the human in the loop arrives at H3 block two (344). A depicted human is not a human in the loop — S1's must-believe is that a named human calibrates every piece, and an unnamed portrait does not deliver it. Full reasoning in part B.",
     "state_affected": "S1 — hypothetical, though S1 is the one state built on a verified figure.", "confidence": "high"},
    {"lens": "risk", "severity": "high", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1376,
     "issue": "FM-1: Status-implied-only and no-proof-destination compound. §2.5 records O9 and O10 as having no sentence anywhere on the site (1005-1006); S2 reads the missing nav proof destination as absence, not restraint (1148); S4's version surfaces at two empty credential slots and no section answers it (1376).",
     "probability": "high",
     "severity_driver": "The referral channel is the entire pipeline and its visitors arrive with exactly this fear (58). Second input, from a source the storyboard itself cites at line 92: 02-THE-PROBLEM.md §2b names transparency-about-being-small as the trust device for a vendor with no track record, LOW confidence.",
     "mitigation": "Founder supplies both credential facts. This sits inside the founder decision, not against it — a dated verifiable fact is not a status statement.",
     "owner": "founder", "when": "Trigger — before the first link is sent to either warm prospect.", "confidence": "high"},
    {"lens": "risk", "severity": "high", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 32,
     "issue": "FM-2: The free audit is the sole ask and spends founder time per lead before any call exists. §0.1 states this once and correctly does not repeat it. What §0–§3 add is pressure: four placements on Home, one label site-wide, and the close of all four pages, all pointing at the most expensive-to-fulfil ask the company has. §3.2 line 1201 predicts S2 may take the audit purely as a work sample.",
     "probability": "medium",
     "severity_driver": "§0.1's own note that capacity is bounded by sales time. Theoretical today because no traffic exists; high the day marketing starts.",
     "mitigation": "Name a per-week audit capacity ceiling and the behaviour when it is hit.",
     "owner": "founder", "when": "Trigger — before the first non-referral traffic reaches the site.", "confidence": "high"},
    {"lens": "risk", "severity": "high", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 697,
     "issue": "FM-3: Promise-the-practice-not-the-product makes A5 and H3 block three a present-tense description of a monthly record no system produces. §2 is scrupulous about tense (355, 637), so the risk is not dishonest copy — §0.3.6 forbids saying it does not exist, so the site describes an operating habit never run. §3.2 line 1213 names the resulting asymmetry for S2 and rightly says copy cannot fix it.",
     "probability": "high that it becomes a delivery obligation on signature; medium that a prospect discounts it before then",
     "severity_driver": "The only promise on the site creating an operational commitment rather than describing an existing capability, against a repo with no database and no dashboard.",
     "mitigation": "The monthly record must exist in some deliverable form, a written document being sufficient, before it is owed to anyone.",
     "owner": "founder, with builder for whatever produces it", "when": "Trigger — before the first signed engagement, not before launch.", "confidence": "high"},
    {"lens": "risk", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1452,
     "issue": "FM-4: Outcome-first leaves S1's live objection unanswered for one scroll, and §0.2 line 49 permanently carries a fold requirement H1 cannot satisfy, so every future review re-derives the same escalation.",
     "probability": "high that the contradiction recurs in review; low-to-medium that the one-scroll delay costs anything",
     "severity_driver": "§3.1 line 1123 records O1 answered three times with rising specificity from scroll 2 — the delay is bounded and that sequence is the strongest on Home for the state.",
     "mitigation": "Amend §0.2's S1 fold line to match the founder decision, exactly as §3.6 proposes.",
     "owner": "orchestrator", "when": "Next revision, same pass as the §3 provisional banner.", "confidence": "high"},
    {"lens": "risk", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1016,
     "issue": "FM-5: §2.5 flags H4 and A4 as the only exchange a skeptical S2 gets for the proof he came for and warns that cutting or softening either loses O4 entirely. §3.6's priority 2 cuts H4 by half (1447). Its argument that the second rule survives at A4 is sound, but the two passages are never reconciled in writing, so a reader applying priority 2 has no record it touches the section §2.5 marks no-cut.",
     "probability": "medium",
     "severity_driver": "O4 is already standing for S2 with no answer anywhere (1223), so this widens an acknowledged gap rather than creating one.",
     "mitigation": "Encode the no-cut flag in H4 and A4 themselves, where §2.5 currently argues it only in prose.",
     "owner": "orchestrator", "when": "Next revision of §2.", "confidence": "medium"},
    {"lens": "risk", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1319,
     "issue": "FM-6: The waitlist's retirement leaves no later-capture. §3.3 records S3 as the state that leaves with nothing most often; §3.1 line 1127 says the same for a browsing S1 unpersuaded by H4. Both walks state it plainly instead of inventing a fallback, which is the right handling.",
     "probability": "high that browsing and price-sensitive visitors leave uncaptured",
     "severity_driver": "Zero cost today with no traffic; scales directly with the marketing phase. The audit is the intended replacement and is a larger step than the one removed.",
     "mitigation": "Do not re-add a capture. Instrument abandonment on the ask page so the consequence is measured rather than argued.",
     "owner": "builder", "when": "At Phase 2 build, before first non-referral traffic.", "confidence": "high"},
    {"lens": "risk", "severity": "medium", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 344,
     "issue": "FM-7: Yarden reads every piece against a written standard is a present-tense capacity claim, repeated at 652 and 787. True at zero clients, false at some client count nobody has named. §3.1 line 1074 identifies the silent question and notes neither Home nor Approach touches it.",
     "probability": "medium",
     "severity_driver": "It is the site's answer to O1 and O14, the two objections §2.5 marks answered. If it becomes untrue, the strongest claim on the site is the one that fails.",
     "mitigation": "Decide how many engagements one calibration layer serves, and write the copy so it survives that number.",
     "owner": "founder", "when": "Trigger — before the second signed client.", "confidence": "medium"},
    {"lens": "risk", "severity": "low", "file": "docs/05-marketing/SITE-STORYBOARD.md", "line": 1406,
     "issue": "FM-8: No page carries a self-contained sentence defining what Beeond is; the definition splits across H1's headline and deck. §3.5 identifies this as the one structural gap for a future search or answer-engine arrival.",
     "probability": "low today, high the day the channel exists",
     "severity_driver": "§3.5's analysis is sound and the fix is one sentence, gated on queries that do not exist.",
     "mitigation": "Recheck §3.5's five bullets against the spine rather than rebuilding from it.",
     "owner": "orchestrator", "when": "Trigger — when the first SEO or GEO task is briefed.", "confidence": "high"}
  ],
  "dismissed_modes": [
    "FM-a: H7 places Beeond with AI-native challengers and invites practised discounting (raised at 1183) — dismissed. A consequence the elimination-table decision already accepts, stated once per §0.6, with no new information available until a real evaluator sees it.",
    "FM-b: H4's struck-through buzzword line ships as copy, or a lint pass strips it — dismissed as controlled. The instruction to the Phase 2 editor is written at the point of use (386), which is where a mitigation belongs.",
    "FM-c: Four ask placements plus one label reads as pressure — dismissed. Four is the sourcer's mode across ten sites (282) and two of the four carry no accent fill.",
    "FM-d: A1 serves a reader no arrival state defines (1207, 1429) — dismissed as a gap in §0.2's state list, not a risk. Rule 4 is the page's reason to exist and the section is correct as written.",
    "FM-e: D2 collects a URL and an email with no privacy page (270, 918) — dismissed from this pass. Real, but a security and evidence question about an unbuilt form, not a customer-value or risk finding about the text."
  ],
  "concur_with_3_6": [
    {"change": "Render H8's ask as an outlined button and give §2.7 a Fitts's law row", "concur": true,
     "why": "The stated defence of the text link does not survive its own file: §2.0's accent table makes the nav ask an outlined button with no fill (261), proving Layer 1 constrains the fill and not the shape, and the 8.2:1 measurement at 262 answers legibility, not affordance, which is what Fitts's law is about."},
    {"change": "Cut H4 to one card", "concur": true,
     "why": "Concur with one condition: §2.5 line 1016 flags H4 as load-bearing and §3.6 never reconciles the two in writing. It still holds, because one demonstrated rule establishes that they have written rules, which is the whole of what §3.2 line 1164 says S2 actually takes from the section."},
    {"change": "Give Home one in-body route to Approach", "concur": true,
     "why": "Progressive disclosure is the law the four-page architecture depends on and the only one the walks found unenforced (1438), Approach is the honest fallback for three of four states now the waitlist is gone, and B2 already does exactly this (787) — a consistency fix, not a new device."}
  ],
  "escalated_conflict_verdict": "It is a defect for S1, and it is medium by this lens, not high. A photographed human is not a human in the loop: S1's must-believe at line 49 is that a named human calibrates every piece, and an unnamed warm portrait delivers a mood, not a mechanism. §0.2's fold requirement is genuinely unmet and §3.1 line 1068 is right to refuse to call it met. What holds severity at medium is that the cost is one scroll and H3 spends it well — naming the machine before the person is what buys block two its hearing (1074), and O1 is then answered three times with rising specificity (1123). The defect is also not the one §0.2's wording implies: the requirement is miswritten, not the copy. It was drafted before the founder decided outcome-first, and a superseded requirement no artifact can satisfy will regenerate this finding on every future pass. I concur with §3.6's escalation and with its refusal to change H1. One caution: §3.1 and §3.6 both go further and assert that a warm photograph over confident copy is the exact pairing that visitor is inoculated against. That is founder thesis stated in the register of a finding, with no source and no marker, and it is the strongest single instance of the pattern behind the first customer-value finding.",
  "verdict": {"customer-value": "fail", "risk": "pass"},
  "out_of_scope_notes": [
    "Single model family, single reviewer. This is not an independent panel. Both lenses declare independent: false, so no independence mode was owed and none is claimed.",
    "risk PASS does not mean low risk. The lens blocks only at critical and nothing in §0–§3 reaches it: nothing is public, no code exists, no data is collected. Three modes sit at high, and FM-1 and FM-3 both carry triggers that fire before any revenue.",
    "customer-value FAIL rests on two high findings, both cheap to clear: one banner line at the head of §3, and one entry in §3.6's priority list. It is not a judgement on the quality of the artifact.",
    "Bounded citation checks, both permitted by the brief and both resolving. HANDOFF-CLEAN-START/02-THE-PROBLEM.md line 30 carries the 53% and 52% HubSpot figures at HIGH confidence, matching §0.2 line 49 exactly. I also read lines 44 and 173 of that file because the storyboard cites §2b at line 92 — its LOW-confidence characterisation is accurate, and line 44's named-founders and transparency-about-being-small pattern is the second input behind FM-1's score. HANDOFF-CLEAN-START/01-THE-IDEA.md line 25 carries the founder positioning statement including 'like a single, coordinated agency', matching H1 alternate (C) at line 315. Nothing else was carried out of either file.",
    "§4 and §5 were not opened. Findings that say an OPEN carries no owner or trigger are scoped to §0–§3; if §4 assigns one, the fourth customer-value finding weakens. The packets were not opened, so every claim attributed to the sourcer or a framer is read as the storyboard reports it.",
    "What already works and should survive the next revision. §3 says plainly when a section does nothing for a state — H5 for S1 (1087), H4 for S3 (1265) — instead of inventing a beneficiary, which is the fourth customer-value check satisfied at section granularity and is rare. §2.5 marks O2 and O10 UNANSWERABLE rather than claiming coverage. Both walks reaching an unpersuaded visitor say he leaves with nothing (1127, 1319). §2's OPEN slots stay visibly empty with an explicit ban on any engine filling them (772, 972), and the walks respect it. The counting note at 239 corrects §1's own arithmetic against itself rather than propagating it. §3.4's statement that the referral landing URL is undecided (1340) is the kind of assumption most storyboards leave silent."
  ]
}
```

**Disposition (orchestrator, 2026-09-02).** Finding 1 (§3 banner) — **closed**, commit `a23c71b`. Finding 2 (the unwired bypass off the priority list) — **closed**, added to §3.6 as a fourth priority with owner and trigger. Finding 3 (S3's plain-label fix dropped) — **routed to the v3 spine pass**. Finding 4 (credential facts need owner and trigger) — **closed**, §0.5 and §4. Finding 5 and FM-4 (the fold conflict) — **closed**, §0.2 amended `a23c71b`; H1 unchanged, as the reviewer and §3.6 both concur. FM-1, FM-2, FM-3, FM-7 — **founder triggers, recorded in §4**, not spine changes. FM-5 (H4/A4 no-cut flag) — **routed to v3**. FM-6 (instrument abandonment) — **build item, §4**. FM-8 — **§4, with §3.5**. All three §3.6 concurrences — **routed to v3**. The reviewer's caution on §3.1/§3.6's "inoculated against" line is covered by the §3 banner and is not otherwise edited: the walks are the framer's text. **The customer-value verdict is FAIL on the artifact as reviewed; both high findings are closed on the file. This is a text storyboard, tier lite, not a merge to `main`; no binding QA gate is invoked, and the founder reviews the finished 1.0.**


---

## §4 — OPEN (as of R3, 2026-09-02)

**Founder-owned**
- OPEN · **The two founder credential facts** — one dated, verifiable fact each, under the names on About (B1, B2). The founder supplies both before Phase 2. §3.4 rates this the highest-value OPEN in the document: the warm referral's central belief currently rests on two blank slots.
- OPEN · **The language/market answer** (rule 5; D4 row five) — waits on ICP and language scope.
- OPEN · **Pause / stop terms** (D4 row four) — `04-THE-PRODUCT.md` §11; the row names the question and defers it to the call. No engine invents a policy.
- OPEN · **The referral landing URL** — the About page is what the spine assumes a founder sends (§3.4). If the root is sent instead, the warm visitor never sees the two faces. A founder habit, not a build item.

**Founder triggers from the risk review (§3.7), recorded once**
- OPEN · **FM-2 — audit capacity.** Name a per-week audit capacity ceiling and what the site or the confirmation says when it is hit. Trigger: before the first non-referral traffic.
- OPEN · **FM-3 — the monthly record must exist in some deliverable form** (a written document is enough) before it is owed to a signed client. Trigger: before the first signed engagement.
- OPEN · **FM-7 — how many engagements one calibration layer serves**, and whether "Yarden reads every piece" survives that number. Trigger: before the second signed client.
- OPEN · **FM-1 — the credential facts** (above) are also the mitigation for the compounding of status-implied-only with no proof destination. Trigger: before the first link is sent to a warm prospect.

**Phase 2 (visual experience) must resolve**
- OPEN · **The accent budget.** `DESIGN-LANGUAGE.md` Layer 1 caps the accent at twice per page, on the primary CTA only. §2.0 resolves four ask placements as two fills (hero, close) plus an outlined nav button and a mid-page beat; §3.6 asks for that beat to be an outlined button. Phase 2 verifies the outline and any accent text against the letter of Layer 1; if they count, nav and beat use ink, not accent. The storyboard does not override the design language.
- OPEN · **The closing photograph** (H10: meadow, flowers, sky) is derived from the reference corpus and the founder's vibe line, never from the deleted 2026-09-02 build's "golden-hour meadow" vision (§0.3 item 12).
- OPEN · **H4's rejected line must read as a rejection at a glance** — if the struck-through buzzword line reads as copy, the section inverts against the visitor it exists for (§3.1).
- OPEN · **D3 within the first screen of the ask page**, not merely "beside or beneath the form" (§3.4).
- OPEN · Signature-moment assignment (Layer 3), the scroll set-piece's subject and pin (Layer 4b; H5 is the natural pull), and every "Phase 2 note" in §2 — pull, not assignment.
- OPEN · **S5 (search / AI-answer arrival)** — FUTURE. §3.5 records what would change and finds the spine does not need rebuilding for it; one structural gap noted: no single self-contained sentence defining Beeond exists on any page.

**Build (Phase 2 or later) must resolve**
- OPEN · **FM-6 — instrument abandonment on the ask page** so the waitlist's absence is measured, not argued (builder, at Phase 2 build).
- OPEN · **Form endpoint, storage, and the confirmation message** — the confirmation carries the audit's turnaround expectation by founder decision (§0.6), so its copy is a real deliverable, not plumbing.
- OPEN · **The direct-booking destination** (D3) — nothing is wired; §3.4: the two-click path for the only channel that exists currently ends nowhere.
- OPEN · The ask page slug (`/audit` preferred, `/start`, `/get-your-audit`) · a privacy page for the footer link.

**Consequences recorded, not to be re-argued**
- The waitlist's retirement leaves the price-sensitive visitor (S3) with no "later" — he takes the audit, reads Approach, or leaves with nothing (§3.3). The free audit is the founder's intended replacement and is a larger step than the one removed.
- Status implied only: the evaluator with a shortlist (S2) assembles the proof case himself from the absence of logos, a two-person About and the method shown in full; his "where are your case studies" is answered by method alone (§3.2, §2.5).
- No proof destination in the nav (8 of 10 agency sites have one): About and Approach carry that job between them.

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
| 2026-09-02 | R2 | ORCHESTRATOR: spine v1 written by `framer` [product] on Opus (text is the deliverable); v2 applied the sourcer's counted patterns, the vibe register and the UX laws. Attention marks changed from §1 with reasons written beside them: A3, A4, A5, B4 run QUIET because prose lives in quiet sections. Language row on D4 only; pricing *why* on H9, *how* on D4. |
| 2026-09-02 | R3 | ORCHESTRATOR: journey walked by `framer` [growth] on Opus for S1–S4, S5 noted not walked. 25 gaps, one section on no law (B4). Three changes to fight for, in priority: H8 as an outlined button with a Fitts's row in §2.7 · H4 cut to one card · one in-body route from Home to Approach. Routed to the v3 spine pass together with the reviewer's findings. |
| 2026-09-02 | R3 → review | ORCHESTRATOR: the §0.2/§5 fold conflict resolved in favour of the founder's later decision — S1's fold line amended; H1 stands. §3 given the same PROVISIONAL / simulated banner §2 carries (reviewer finding 1). Credential facts given an owner and a trigger (reviewer finding 4). |
| 2026-09-02 | Review | ORCHESTRATOR: `reviewer` (customer-value + risk) — customer-value FAIL on two high findings, both closed on the file; risk PASS with three high modes carried as founder triggers in §4. Findings pasted verbatim at §3.7 with disposition. Reviewer concurs with all three §3.6 changes; a fourth (wire the bypass and the form before the first referral link) added. |
| 2026-09-02 | v3 → 1.0 | ORCHESTRATOR: spine v3 applied all fourteen routed changes (framer-spine-v3, Opus); verified on the file — H4 one card, H8 outlined button, Home→Approach route in H4, H5 labels Foundation · Output · Compounding, H7 rows rewritten, §2.7 Fitts's and Zeigarnik rows, D3 first screen, About as referral landing, no-cut flags on H4/A4, FM-7 trigger on H3/A4. A3's chapter heads synced to the new labels by the orchestrator (consistency edit, one word of copy: "Work starts moving"). Storyboard set to **1.0 — for founder review**. The percent is the founder's. |
