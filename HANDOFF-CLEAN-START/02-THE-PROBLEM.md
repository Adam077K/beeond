# 02 — The Problem

This file covers the problem Beeond claims to solve, what is actually evidenced versus asserted, and the single biggest open question: who the problem belongs to. ICP is genuinely undecided — see `03-THE-MARKET.md` for market/competitive detail on each candidate and `05-WHERE-WE-STAND.md` for where things stand today.

---

## 1. The problem statement

From `VISION.md`, "The Problem We Solve" (authored 2026-06-29, unchanged since):

> B2B and SaaS companies need to be visible everywhere — Google, AI answer engines, LinkedIn, content, ads, their own site — but the options are all bad. A traditional agency is slow, expensive, and siloed across vendors. Doing it in-house means hiring a whole team. Using AI tools yourself risks generic, off-brand output that makes the company look like everyone else. So most companies do a fraction of what they should, inconsistently, and lose ground to competitors who are simply more *findable*.
>
> **The cost of not solving it:** Invisible in the searches and AI answers where buyers now make decisions; pipeline left on the table; five-figure agency retainers for partial coverage, or a marketing hire that takes months to ramp.

**What in that statement is evidenced, and what is asserted:**

- "Using AI tools yourself risks generic, off-brand output" — this clause is backed by real data (§3 below). It is the one sentence in the whole passage with a citable source.
- Everything else — "the options are all bad," agencies are "slow, expensive, and siloed," in-house "means hiring a whole team," "most companies do a fraction of what they should," they "lose ground to competitors," buyers now decide via AI answers, retainers run "five-figure," a marketing hire takes "months to ramp" — is founder-asserted narrative. None of it is cited, measured, or interview-derived anywhere in the repo. It reads as plausible industry common-knowledge, not as researched fact. Treat it as the founder's working hypothesis about the problem shape, not as a proven claim.

This matters because the problem statement is currently doing double duty as both positioning copy and problem diagnosis. Only one clause of it has survived a fact-check.

---

## 2. The one genuinely solid data point

Source: HubSpot, "State of Generative AI" report, cited in `.claude/memory/USER-INSIGHTS.md` (desk research log, 2026-07-08), report itself dated as updated 2026-02-04. Rated **HIGH confidence** in that log — it is the only data point in the entire research base given that rating.

The two figures: **53% of marketers struggle to make content stand out**, and **52% say AI has made content less effective overall.**

**What this does prove:** the fear of generic-sounding AI output is real and widespread among marketers, not a fear the founders invented to justify the positioning. It is a legitimate, currently-live anxiety in the target population of "people who make marketing content."

**What this does not prove:**
- That anyone will pay Beeond, specifically, to solve it.
- What price they'd pay, or what they'd expect delivered for it.
- That B2B/SaaS marketers specifically (as opposed to marketers generally, which is what the survey measures) feel this more or less acutely than any other segment.
- That "automation for volume + humans for taste" — Beeond's proposed answer — is the fix buyers actually want, versus e.g. better tools, better prompting, or giving up on AI content entirely.

It is real evidence of a real fear. It is not evidence of a business.

---

## 3. The evidence base, stated plainly

Zero customer interviews have happened. Not one. This is stated by the research file itself: `USER-INSIGHTS.md` opens with "**Provenance: DESK RESEARCH ONLY.** No customer interviews have happened," and its closing source log repeats: "**Zero customer interviews.** No first-person verbatims. Validation of all three personas is the top open research task."

The two "warm prospects" referenced across nearly every foundation document (`FOUNDING_BRIEF.md` §5, §11; `USER-INSIGHTS.md` source log) were never called. This was flagged as an open item at founding (2026-06-29) and was **still open** as of `docs/04-features/OFFER_SPEC.md` §7, dependency 1 (line ~219): "Two warm prospects — exact scope of need. Without their actual marketing maturity, current channels, and pain points, we can't confirm which tier they'd pitch into... Action: founders capture this in the next discovery call." No discovery call is recorded anywhere in the repo after that. The board review of 2026-07-14 (`.claude/memory/DECISIONS.md`, entry "BOARD REVIEW: v7 Phase-3 build") flags the same gap again, six weeks later, as still unresolved and as a live risk: "two warm prospects un-called on a ~10–14-day competitor clock."

The three personas that shaped roughly six weeks of positioning, messaging, and copy work — "Maya" (B2B/SaaS founder-operator), "Daniel" (lean-marketing operator), "Yossi" (agency owner, white-label angle) — are desk-research synthesis. Every attribute attached to them (budget posture, churn triggers, expansion triggers, decision power) carries an explicit `[ASSUMPTION — desk research, no interviews, 2026-07-08]` tag in the source file. None of the three has a real name, a real conversation, or a real verbatim behind them. They do not appear in this handoff as people — they appear below only as the shape of the questions a real interview still needs to ask.

Net position: the company has run six weeks of strategy, brand, and design work grounded in one HIGH-confidence third-party statistic and zero direct customer contact. That is the honest starting point for the new project.

---

## 4. The three live ICP candidates

No candidate has won. Each has a real case for it and a real case against it, and the evidence that would settle each is specific and gettable. This is the core open decision the new project inherits.

### (a) B2B / SaaS / tech

What every foundation document says the ICP is. `FOUNDING_BRIEF.md` §3 decision 1: "Primary ICP: **B2B / SaaS / tech**." `VISION.md` mission statement: "We run a B2B/SaaS company's entire digital footprint." Reaffirmed at Gate 1 of the v7 process (`DECISIONS.md`, 2026-07-08).

**Case for:** Founder conviction, held consistently since the founding interview and never reversed. The competitive research identified this as genuine white space — no rival was found occupying "whole-footprint AI-swarm + bilingual HE+EN" for this segment (`DECISIONS.md`, 2026-06-29, "Wave 1 outcomes"). Higher potential ACV than local lead-gen work, and a segment that plausibly values the "whole footprint, one system" pitch more than a single-location local business would.

**Case against:** Six weeks of work aimed at this ICP produced zero pipeline — no signed client, no paid pilot, no interview. It is entirely desk-researched: the personas built for it (Maya, Daniel) are assumption-tagged synthesis, not real conversations. The two warm prospects that were supposed to validate it were never called.

### (b) Hebrew-market lead-gen — the Bonim Atid signal

The only real, delivered, non-template client work in the entire repo is `docs/clients/bonim-atid/email-strategy.html`, a Hebrew-language strategy document dated 2026-07-03, prepared for **בונים עתיד (Bonim Atid)** — an Israeli real-estate business running **קבוצות רכישה** (property group-purchases) for investors and residential buyers, currently generating leads through webinars and one-on-one consultation calls. The companion session record (`docs/08-agents_work/sessions/2026-07-03-ceo-email-marketing-research.md`) calls it "client #1" and frames the work explicitly as "designed to become a repeatable Beeond service."

The document itself proposes three tiers of email/lead-gen build-out: (1) email marketing to the existing list — low cost, immediate value; (2) active lead generation via paid ads, partnerships, and outreach, feeding an organized email/WhatsApp nurture sequence — medium cost; (3) a custom research panel that personalizes first outreach per lead, for high-value targets like developers and investors — highest cost and effort. The recommendation was to start at (1) and layer up. The session record's "Next" step was to confirm the client's business type and existing list before any build, and to log a `DECISIONS.md` entry — neither is recorded as having happened. There is no evidence in the repo that Bonim Atid signed, paid, or that any of the three options was actually built.

This is not B2B/SaaS by any reading. It is Israeli real-estate lead generation, Hebrew-language, consumer/investor-facing.

**Case for:** It is the only thing that has actually happened — a real prospect, a real (if unconfirmed) relationship, a real deliverable sent. Hebrew is the one piece of white space the competitive research actually identified (no rival was found combining GEO/AI-swarm delivery with genuine HE+EN bilingual capability). Relationships already exist here in a way they don't for the B2B/SaaS candidate.

**Case against:** Real-estate group-purchase lead-gen may not generalize into a repeatable agency motion — it is a narrow vertical with its own regulatory and sales-cycle quirks (the strategy doc itself flags Israeli anti-spam law, consent requirements, and WhatsApp-first buyer behavior as load-bearing constraints). It may simply be a one-off that happened because of an existing personal or professional connection, not a signal of a repeatable market. Nothing confirms the engagement is even live.

### (c) International startups, English-only

Adam's founder decision, made 2026-08-06 during a total brand reset. It is logged — but on the unmerged branch `ceo-1-1786028037`, not on `main`, which is why it is absent from the decision log on this branch. Its exact wording: "**Market:** international startups, English only. Hebrew / RTL deferred to a later wave; Hebrew is not in scope for **this build**."

**Case for:** USD pricing against a larger addressable market than Israel alone; avoids the smaller, harder-to-reach Hebrew-speaking market.

**Case against:** Per this session's framing, the 2026-08-06 call was scoped to the *site* (English-first site copy), not to the company or its customer base — the company itself remains bilingual HE+EN. Treating it as a company-wide ICP decision would discard the one differentiator the competitive research actually found: nobody else combines this kind of delivery with genuine bilingual HE+EN capability. Dropping Hebrew as a market, rather than just as a site language, gives that white space away for free.

### This is decision #1

Every downstream decision — offer shape, service catalog, pricing, positioning, who gets interviewed next — depends on which of these three is real, or whether more than one can be served at once without diluting focus. The new project should not proceed past initial scoping without resolving this, and resolving it requires the interviews in §6, not more desk research.

---

## 5. The anti-generic thesis

The one customer insight the founder has held without wavering since the founding interview: buyers are afraid AI-generated marketing will look generic, off-brand, and indistinguishable from every other AI-assisted competitor. Beeond's answer is that automation should do the volume — the scale, the repetition, the channel coverage — while humans do the taste: the brand-specific judgment about what's actually worth saying and how. `VISION.md` states it as a core value: "Automate the volume, never the taste... We refuse to ship generic output." `FOUNDING_BRIEF.md` §5 states it as "the core customer insight to honor."

This thesis is FOUNDER-held and survives this handoff intact. It is also, importantly, a **positioning bet** rather than a validated one. The HubSpot data (§3) confirms the fear it responds to is real and widespread among marketers generally. Nothing in the repo confirms that a specific buyer, when asked, would choose Beeond over an alternative because of this promise, or that "humans doing the taste" is legible or credible to a buyer sight-unseen. It is the strongest, most consistently-held idea in the company's short history — and it still needs a real conversation to test it.

---

## 6. The interview guide

This replaces the cut personas. Fourteen questions, organized by what each cluster resolves. Use with the two warm prospects and with Bonim Atid — the Bonim-Atid-specific item is marked. These are derived from the JTBD frames that were assumed (not verified) in `USER-INSIGHTS.md`; each question turns an assumption into something a real answer can confirm or kill.

**A — Which ICP is actually real (fit and urgency)**
1. What does your company do, who do you sell to, and what stage/size are you at right now?
2. Walk me through how you actually find new customers or leads today — every channel, in order of how much it actually produces.
3. Whose job is marketing right now inside your company — is there a person, is it split across people, or is nobody really owning it?

**B — What they currently pay, and to whom**
4. What are you currently spending money on for marketing or growth — tools, freelancers, an agency, ads? Roughly how much, per month?
5. Have you ever hired an agency or freelancer for this kind of work? What happened — why did it end, or why hasn't it started yet?

**C — Where the pain actually bites**
6. What's the one channel or task you most wish someone else would just take off your plate?
7. What's actually stopping you from doing more of that right now — time, money, skill, something else?
8. If nothing about your marketing changes in the next six months, what happens to your growth number?

**D — What "generic" means to them, in their own words**
9. Have you tried using AI tools yourself for marketing content? What happened when you did — walk me through a specific example?
10. Describe, in your own words, what it looks like when content "sounds generic" or "doesn't sound like us." Give me a real example if you have one.

**E — What would make them buy, or make them churn**
11. If we built [the specific thing relevant to this prospect — e.g., for Bonim Atid, the Option-1 email sequence] and it worked, what would "worked" look like to you? What number would you actually be watching?
12. What would make you say no to working with us, even if the price were right?
13. What would make you walk away three months into working together?

**F — Bonim Atid specific**
14. On the three-option email strategy we sent you (2026-07-03) — which option, if any, did you choose, and what's stopped it from starting? This single question resolves whether the Bonim Atid relationship is live or dormant.

**Interview discipline:** capture verbatims — write down what they actually say, not your paraphrase of it. Do not pitch Beeond during the interview. Do not lead the witness by describing the anti-generic thesis or the whole-footprint pitch before they've described their problem in their own words. The goal of these fourteen questions is to find out whether the personas were right, not to confirm that they were.

---

## Discrepancies found while writing

- The founder's 2026-08-06 English-only decision does not appear in `.claude/memory/DECISIONS.md` **on this branch** — the most recent entry here is 2026-07-14 (the v7 Phase-3 board PAUSE). It exists on the unmerged sibling branch `ceo-1-1786028037` (verified via `git show ceo-1-1786028037:.claude/memory/DECISIONS.md`). The general pattern is worth carrying into the new project: the most recent strategic decisions were never merged to the main line, so anyone reading `main` sees a decision log that stops three weeks short of reality.
- `USER-INSIGHTS.md` self-identifies its zero-interview status twice (header and source log) — both are quoted directly above rather than paraphrased, since the self-flagging is itself part of the evidence.
- The Bonim Atid session record (`2026-07-03-ceo-email-marketing-research.md`) instructs a next step — "Confirm client business type + existing list before any build" and "log a DECISIONS entry" — that has no visible follow-through anywhere else in the repo. This is noted in §4(b) as the basis for treating the engagement's live/dormant status as unconfirmed, and is now question 14 in the interview guide.
