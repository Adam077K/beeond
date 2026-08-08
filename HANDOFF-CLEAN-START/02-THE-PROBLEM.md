# 02 — The Problem

This file covers the problem Beeond claims to solve, what is actually evidenced versus asserted, and the single biggest open question: who the problem belongs to. ICP is genuinely undecided — not among three candidates, but between two live segment branches, plus a separate, still-open question about language and geography scope that sits on a different axis entirely (see §4). See `03-THE-MARKET.md` for market/competitive detail on each branch and `05-WHERE-WE-STAND.md` for where things stand today.

---

## 1. The problem statement

From `VISION.md`, "The Problem We Solve" (authored 2026-06-29, unchanged since):

> B2B and SaaS companies need to be visible everywhere — Google, AI answer engines, LinkedIn, content, ads, their own site — but the options are all bad. A traditional agency is slow, expensive, and siloed across vendors. Doing it in-house means hiring a whole team. Using AI tools yourself risks generic, off-brand output that makes the company look like everyone else. So most companies do a fraction of what they should, inconsistently, and lose ground to competitors who are simply more *findable*.
>
> **The cost of not solving it:** Invisible in the searches and AI answers where buyers now make decisions; pipeline left on the table; five-figure agency retainers for partial coverage, or a marketing hire that takes months to ramp.

**What in that statement is evidenced, and what is asserted:**

- "Using AI tools yourself risks generic, off-brand output" — this clause is backed by real data (§2 below). It is the one sentence in the whole passage with a citable source.
- Everything else — "the options are all bad," agencies are "slow, expensive, and siloed," in-house "means hiring a whole team," "most companies do a fraction of what they should," they "lose ground to competitors," buyers now decide via AI answers, retainers run "five-figure," a marketing hire takes "months to ramp" — is founder-asserted narrative. None of it is cited, measured, or interview-derived anywhere in the repo. It reads as plausible industry common-knowledge, not as researched fact. Treat it as the founder's working hypothesis about the problem shape, not as a proven claim.

This matters because the problem statement is currently doing double duty as both positioning copy and problem diagnosis. Only one clause of it has survived a fact-check.

---

## 2. The two genuinely solid data points

### (a) The generic-AI-content fear

Source: HubSpot, "State of Generative AI" report, cited in `.claude/memory/USER-INSIGHTS.md` (desk research log, 2026-07-08), report itself dated as updated 2026-02-04. Rated **HIGH confidence** in that log — it is the highest-rated data point in the entire research base.

The two figures: **53% of marketers struggle to make content stand out**, and **52% say AI has made content less effective overall.**

**What this does prove:** the fear of generic-sounding AI output is real and widespread among marketers, not a fear the founders invented to justify the positioning. It is a legitimate, currently-live anxiety in the target population of "people who make marketing content."

**What this does not prove:**
- That anyone will pay Beeond, specifically, to solve it.
- What price they'd pay, or what they'd expect delivered for it.
- That B2B/SaaS marketers specifically (as opposed to marketers generally, which is what the survey measures) feel this more or less acutely than any other segment.
- That "automation for volume + humans for taste" — Beeond's proposed answer — is the fix buyers actually want, versus e.g. better tools, better prompting, or giving up on AI content entirely.

It is real evidence of a real fear. It is not evidence of a business.

### (b) How unproven small teams earn buyer trust

Source: `docs/05-marketing/website-v7-design-kit/research/02-buyer-market.md`, §2 ("Evaluating a marketing vendor — trust vs. skepticism"). The specific claim — that agencies without a track record build trust via named founders, radical transparency about being small, and never faking scale or testimonials ("faking testimonials... backfires spectacularly") — is sourced to `dynamicagencyos.com` and `sevenfigureagency.com` (2026) and rated **LOW confidence** in that file itself (practitioner blogs, no underlying data). It sits, in the same section, alongside three separate MEDIUM-confidence, named-source stats that corroborate the general shape of the pattern independently: 82%/79% of B2B buyers trust peer testimonials over vendor claims, 54% say a lack of comprehensive company information makes them doubt a brand's credibility, and 52% check the "About" page first (all `corporatevisions.com` / Forbes Communications Council, 2026 / 2025-07-02). The file's own honest caveat applies here too: "this is inference, not verified against an actual buyer."

**What this does prove:** for a small, pre-track-record team, the closest thing to a validated trust-building lever is transparency about being small and new plus named, visible founders — not manufactured social proof. This is genuinely sourced (URL, date, and an explicit confidence rating are all present), which is why it was cut in error under the handoff's strip-unsourced-claims rule — the claim itself is sourced; it is simply rated LOW, not HIGH, by the file that sources it.

**What this does not prove:** that Beeond specifically, or the founder's 2026-08-08 transparency-led positioning statement ("the dashboard shows exactly what is being done, the volume, and the rationale"), will convert a buyer. No buyer has been asked.

---

## 3. The evidence base, stated plainly

Zero customer interviews have happened. This is stated by the research file itself: `USER-INSIGHTS.md` opens with "**Provenance: DESK RESEARCH ONLY.** No customer interviews have happened," and its closing source log repeats: "**Zero customer interviews.** No first-person verbatims. Validation of all three personas is the top open research task."

The two "warm prospects" referenced across nearly every foundation document (`FOUNDING_BRIEF.md` §5, §11; `USER-INSIGHTS.md` source log) were never called. This was flagged as an open item at founding (2026-06-29) and was **still open** as of `docs/04-features/OFFER_SPEC.md` §7, dependency 1 (line ~219): "Two warm prospects — exact scope of need. Without their actual marketing maturity, current channels, and pain points, we can't confirm which tier they'd pitch into... Action: founders capture this in the next discovery call." No discovery call is recorded anywhere in the repo after that. The board review of 2026-07-14 (`.claude/memory/DECISIONS.md`, entry "BOARD REVIEW: v7 Phase-3 build") flags the same gap again, six weeks later, as still unresolved and as a live risk: "two warm prospects un-called on a ~10–14-day competitor clock."

The three personas that shaped roughly six weeks of positioning, messaging, and copy work — "Maya" (B2B/SaaS founder-operator), "Daniel" (lean-marketing operator), "Yossi" (agency owner, white-label angle) — are desk-research synthesis. Every attribute attached to them (budget posture, churn triggers, expansion triggers, decision power) carries an explicit `[ASSUMPTION — desk research, no interviews, 2026-07-08]` tag in the source file. None of the three has a real name, a real conversation, or a real verbatim behind them. They do not appear in this handoff as people — they appear below only as the shape of the questions a real interview still needs to ask.

Net position: the company has run six weeks of strategy, brand, and design work grounded in one HIGH-confidence third-party statistic and zero direct customer contact. That is the honest starting point for the new project.

---

## 4. The two live segment branches — and a separate scope question

There are **two segment branches**, not three co-equal ICP candidates — the "three candidates" framing used in earlier drafts of this handoff was a category error, conflating a market-segment question with a language/geography question that belongs on a different axis entirely. This section covers the two branches, the imbalance between them, and then the separate scope question on its own.

### Branch A — B2B / SaaS / tech

What every foundation document says the ICP is. `FOUNDING_BRIEF.md` §3 decision 1: "Primary ICP: **B2B / SaaS / tech**." `VISION.md` mission statement: "We run a B2B/SaaS company's entire digital footprint." Reaffirmed at Gate 1 of the v7 process (`DECISIONS.md`, 2026-07-08).

**Case for:** Founder conviction, held consistently since the founding interview and never reversed. The competitive research identified this as genuine white space — no rival was found occupying "whole-footprint AI-swarm + bilingual HE+EN" for this segment (`DECISIONS.md`, 2026-06-29, "Wave 1 outcomes"). Higher potential ACV than Hebrew-market lead-gen work, and a segment that plausibly values the "whole footprint, one system" pitch more than a single-vertical local business would.

**Case against:** Six weeks of work aimed at this branch produced zero pipeline — no signed client, no paid pilot, no interview. It is entirely desk-researched: the personas built for it (Maya, Daniel) are assumption-tagged synthesis, not real conversations. The two warm prospects that were supposed to validate it were never called.

### Branch B — Hebrew-market lead-gen

The branch itself is broader than any single client: Hebrew-language, Israel-based lead generation for consumer/investor-facing businesses, as distinct from B2B/SaaS. The only concrete evidence for it anywhere in the repo is one client engagement, folded in here as evidence *under* this branch rather than as a branch of its own.

**Evidence — the Bonim Atid signal.** The only real, delivered, non-template client work in the entire repo is `docs/clients/bonim-atid/email-strategy.html`, a Hebrew-language strategy document dated 2026-07-03, prepared for **בונים עתיד (Bonim Atid)** — an Israeli real-estate business running **קבוצות רכישה** (property group-purchases) for investors and residential buyers, currently generating leads through webinars and one-on-one consultation calls. The companion session record (`docs/08-agents_work/sessions/2026-07-03-ceo-email-marketing-research.md`) calls it "client #1" and frames the work explicitly as "designed to become a repeatable Beeond service."

The document itself proposes three tiers of email/lead-gen build-out: (1) email marketing to the existing list — low cost, immediate value; (2) active lead generation via paid ads, partnerships, and outreach, feeding an organized email/WhatsApp nurture sequence — medium cost; (3) a custom research panel that personalizes first outreach per lead, for high-value targets like developers and investors — highest cost and effort. The recommendation was to start at (1) and layer up. The session record's "Next" step was to confirm the client's business type and existing list before any build, and to log a `DECISIONS.md` entry — neither is recorded as having happened. There is no evidence in the repo that Bonim Atid signed, paid, or that any of the three options was actually built.

This is not B2B/SaaS by any reading. It is Israeli real-estate lead generation, Hebrew-language, consumer/investor-facing — one data point evidencing branch B, not a full market read of it.

**Case for:** It is the only thing that has actually happened — a real prospect, a real (if unconfirmed) relationship, a real deliverable sent. Bilingual HE+EN delivery is real white space the competitive research identified — but it is one of **four** claimed differentiators (`docs/02-competitive/COMPETITIVE_LANDSCAPE.md`, "White-space synthesis": whole-footprint-under-one-swarm, bilingual HE+EN, GEO folded into a managed footprint, and automation-does-volume/humans-do-taste), not the only white space, and it is not specific to Hebrew lead-gen as a vertical — it would apply equally to a bilingual version of branch A. Relationships already exist here in a way they don't for branch A.

**Case against:** Real-estate group-purchase lead-gen may not generalize into a repeatable agency motion — it is a narrow vertical with its own regulatory and sales-cycle quirks (the strategy doc itself flags Israeli anti-spam law, consent requirements, and WhatsApp-first buyer behavior as load-bearing constraints). It may simply be a one-off that happened because of an existing personal or professional connection, not a signal of a repeatable market. Nothing confirms the engagement is even live.

### The imbalance between the branches

The two branches are not evenly evidenced, and the imbalance should be named rather than left implicit. Branch A has primacy by default: it is what every foundation document states as the ICP, it is what files 03 and 04 of this handoff are both scoped to, and it is what six weeks of positioning, messaging, and design work were built against. None of that is evidence that branch A is the *right* answer — it is evidence that branch A is the *incumbent*, by sunk work and founder conviction rather than by any market test. Branch B, by contrast, has a single vivid, real narrative (Bonim Atid) and no market analysis behind it at all — no competitive landscape was ever researched for Hebrew-market lead-gen specifically, and no addressable-population count exists for it. Choosing branch B over branch A would require doing that market analysis from scratch; choosing branch A by default means never having to. File 03's bottom-up market-sizing method (§"A concrete bottom-up method to close the gap") is written to be run once per branch — it has so far been run for neither, but branch A has had every other kind of work done for it that branch B has not.

### A separate, still-open question: language and geography scope

This is not a third segment candidate — it is a different axis from "who is the customer," and answering it does not resolve §4 above.

Adam's decision, made 2026-08-06 during a total brand reset: "**Market:** international startups, English only. Hebrew / RTL deferred to a later wave; Hebrew is not in scope for **this build**." It is logged on the unmerged branch `ceo-1-1786028037`, not on `main`, which is why it is absent from the decision log on this branch (verified via `git show ceo-1-1786028037:docs/08-agents_work/sessions/2026-08-07-ceo-brand-reset.md`). In that source, it appears as one bullet inside a flat list of visual-reskin decisions — palette, type, texture, layout-inheritance — made in a session about re-skinning a cloned Framer template (`agentlab.framer.ai`). No options were considered and no rationale was recorded alongside it.

That same source's own carried-forward section leaves the broader question open rather than deciding it: "Hebrew scope unresolved — website is English-only; whether that extends to email/social/campaigns was deliberately deferred, and cmo.md now says 'ask, don't assume'" (`docs/design-brain/README.md`, verified via `git show ceo-1-1786028037:docs/design-brain/README.md`). So the source itself treats company-wide language/geography scope as genuinely open — neither a decided market nor a rejected one.

What's actually settled and what isn't: the 2026-08-06 call was scoped to the *site* — English-first site copy — not to the company or its customer base. Treating "English-only" as a company-wide decision, rather than a site-copy decision, would discard one of the competitive research's four identified differentiators (bilingual HE+EN delivery, see branch B above) without that trade ever having been deliberately made.

### A third open question, also not a segment: white-label / reseller offer shape

`USER-INSIGHTS.md`'s desk-research persona work also carried an untested agency-owner / white-label reseller hypothesis: an agency principal who resells Beeond's delivery under their own brand rather than buying it as an end client. This is a different *offer shape* — who Beeond delivers through, not who the end customer is — and it cuts across both branches above rather than being a third branch. It is absent from the rest of this handoff, has never been tested against a real prospect, and carries the same `[ASSUMPTION — desk research, no interviews, 2026-07-08]` tag as the rest of that file's persona work. Worth flagging: the swarm has never run a codified delivery flow against a paying client at all (see file 05) — so a reseller hypothesis for something not yet proven to work for a direct client is untested at two levels, not one.

### This is decision #1

Every downstream decision — offer shape, service catalog, pricing, positioning, who gets interviewed next — depends on which branch is real, or whether both can be served at once without diluting focus, plus separately on the language/geography scope question above. The new project should not proceed past initial scoping without resolving these, and resolving them requires the interviews in §6, not more desk research.

---

## 5. The anti-generic thesis

The one customer insight the founder has held without wavering since the founding interview: buyers are afraid AI-generated marketing will look generic, off-brand, and indistinguishable from every other AI-assisted competitor. Beeond's answer is that automation should do the volume — the scale, the repetition, the channel coverage — while humans do the taste: the brand-specific judgment about what's actually worth saying and how. `VISION.md` states it as a core value: "Automate the volume, never the taste... We refuse to ship generic output." `FOUNDING_BRIEF.md` §5 states it as "the core customer insight to honor."

This thesis is FOUNDER-held, and nothing in the record shows it being reconsidered or reversed at any point across the company's history. It is also, importantly, a **positioning bet** rather than a validated one. The HubSpot data (§2) confirms the fear it responds to is real and widespread among marketers generally. Nothing in the repo confirms that a specific buyer, when asked, would choose Beeond over an alternative because of this promise, or that "humans doing the taste" is legible or credible to a buyer sight-unseen. It is the strongest, most consistently-held idea in the company's short history — and it still needs a real conversation to test it.

---

## 6. The interview guide

This replaces the cut personas. Fifteen questions, organized by what each cluster resolves. Use with the two warm prospects and with Bonim Atid — the Bonim-Atid-specific item is marked. These are derived from the JTBD frames that were assumed (not verified) in `USER-INSIGHTS.md`; each question turns an assumption into something a real answer can confirm or kill. Each cluster below also states the prior assumption it is testing and what answer would falsify it — derived from the same assumption-tagged claims (budget posture, decision power, churn trigger, expansion trigger) in `USER-INSIGHTS.md`, without reinstating the cut personas as characters.

**Gap: "warm" is undefined.** Nothing in the corpus establishes who the two warm prospects actually are or what made them "warm" — they are referenced across `FOUNDING_BRIEF.md` §5/§11, `OFFER_SPEC.md` §7, and the 2026-07-14 board review, but always anonymised: no name, company, industry, or context is recoverable from any document. "Call the two warm prospects" is therefore not yet an executable instruction — the founder needs to supply who they are and what made them warm before this guide can actually be used on them.

**A — Which ICP is actually real (fit and urgency)**
*Assumption tested: whoever is reached either owns the marketing budget outright or is a recommender selling it up to one boss above them. Falsified by: marketing decisions turn out to be diffuse (a committee, no clear owner) or nobody with the pain described has any budget influence at all.*
1. What does your company do, who do you sell to, and what stage/size are you at right now?
2. Walk me through how you actually find new customers or leads today — every channel, in order of how much it actually produces.
3. Whose job is marketing right now inside your company — is there a person, is it split across people, or is nobody really owning it?

**B — What they currently pay, and to whom**
*Assumption tested: the buyer is cost-conscious and balks at a five-figure/month retainer, but will pay for demonstrated outcomes and founder access. Falsified by: current spend already sits near or above that band with no complaint, or price sensitivity holds regardless of outcome framing.*
4. What are you currently spending money on for marketing or growth — tools, freelancers, an agency, ads? Roughly how much, per month?
5. Have you ever hired an agency or freelancer for this kind of work? What happened — why did it end, or why hasn't it started yet?
6. Based on everything you've just described, would something in the [$X–$Y]/month range be in the ballpark of what you'd expect to pay for it — too high, too low, or about right?

**Note on question 6:** pick the $X–$Y figure *before* the call, derived from file 03's substitute-cost method (`03-THE-MARKET.md`, "Substitute-cost anchoring: the method, not the numbers"), bounded by the sourced Band 1 (~$10K–$20K+/mo) and Band 3 ($29–$499/mo) figures rather than invented fresh. Asking "what would you pay" cold gets nothing usable — people cannot answer it. Anchoring to a specific number and reading their reaction does. This is a probe for reaction, not a quote or an offer — do not let it read as a price being proposed.

**C — Where the pain actually bites**
*Assumption tested: the acute pain is under-coverage of channels (not enough being done), not the quality of what's already being done. Falsified by: they report doing plenty across channels already, and the real gap is something else entirely (conversion, product, sales follow-up).*
7. What's the one channel or task you most wish someone else would just take off your plate?
8. What's actually stopping you from doing more of that right now — time, money, skill, something else?
9. If nothing about your marketing changes in the next six months, what happens to your growth number?

**D — What "generic" means to them, in their own words**
*Assumption tested (HIGH-confidence, HubSpot-grounded — see §2(a)): they've tried AI tools themselves and found the output generic or off-brand. Falsified by: they haven't tried AI tools at all, or tried them and found the output fine.*
10. Have you tried using AI tools yourself for marketing content? What happened when you did — walk me through a specific example?
11. Describe, in your own words, what it looks like when content "sounds generic" or "doesn't sound like us." Give me a real example if you have one.

**E — What would make them buy, or make them churn**
*Assumption tested: churn is triggered by no visible pipeline movement within 60–90 days or by output they can't confidently put their name on; expansion is triggered by one proven channel win prompting a request for the next layer. Falsified by: their actual stated triggers are unrelated to speed-to-result or output ownership — e.g., driven purely by price, by a single bad interaction, or by nothing they can articulate.*
12. If we built [the specific thing relevant to this prospect — e.g., for Bonim Atid, the Option-1 email sequence] and it worked, what would "worked" look like to you? What number would you actually be watching?
13. What would make you say no to working with us, even if the price were right?
14. What would make you walk away three months into working together?

**F — Bonim Atid specific**
*Assumption tested: the relationship is dormant rather than actively declined. Falsified by: they confirm they went with a competitor, or decided against email/lead-gen work of this kind entirely.*
15. On the three-option email strategy we sent you (2026-07-03) — which option, if any, did you choose, and what's stopped it from starting? This single question resolves whether the Bonim Atid relationship is live or dormant.

**Interview discipline:** capture verbatims — write down what they actually say, not your paraphrase of it. Do not pitch Beeond during the interview. Do not lead the witness by describing the anti-generic thesis or the whole-footprint pitch before they've described their problem in their own words. The goal of these fifteen questions is to find out whether the personas were right, not to confirm that they were.

---

## Discrepancies found while writing

- The founder's 2026-08-06 English-only decision does not appear in `.claude/memory/DECISIONS.md` **on this branch** — the most recent entry here is 2026-07-14 (the v7 Phase-3 board PAUSE). It exists on the unmerged sibling branch `ceo-1-1786028037` (verified via `git show ceo-1-1786028037:.claude/memory/DECISIONS.md`). The general pattern is worth carrying into the new project: the most recent strategic decisions were never merged to the main line, so anyone reading `main` sees a decision log that stops three weeks short of reality.
- `USER-INSIGHTS.md` self-identifies its zero-interview status twice (header and source log) — both are quoted directly above rather than paraphrased, since the self-flagging is itself part of the evidence.
- The Bonim Atid session record (`2026-07-03-ceo-email-marketing-research.md`) instructs a next step — "Confirm client business type + existing list before any build" and "log a DECISIONS entry" — that has no visible follow-through anywhere else in the repo. This is noted in §4, branch B, as the basis for treating the engagement's live/dormant status as unconfirmed, and is now question 15 in the interview guide.
- **Restructured §4 per founder decision (2026-08-08).** An earlier draft of this file framed ICP as three co-equal candidates (B2B/SaaS, Hebrew-market lead-gen, international-English-only). That was a category error: the third item was a language/geography scope call made inside a visual-reskin session, not a segment decision with options considered. §4 now presents two segment branches (with Bonim Atid as evidence under branch B, not its own branch) plus two separate, explicitly-labeled open questions — language/geography scope and white-label/reseller offer shape — that sit on different axes and should not be read as further ICP candidates. Two of the load-bearing quotes for this restructure (`docs/design-brain/README.md` and `docs/08-agents_work/sessions/2026-08-07-ceo-brand-reset.md`) live only on the unmerged sibling branch `ceo-1-1786028037`. **Both have since been verified directly against that branch** via `git show ceo-1-1786028037:<path>`: the "Hebrew scope unresolved — website is English-only; whether that extends to email/social/campaigns was deliberately deferred" line is confirmed verbatim, and the "international startups, English only" market line is confirmed to sit as one row in a flat five-row table of visual decisions (palette, type, texture, layout-inheritance) with no options-considered and no rationale recorded.
- **Confidence-rating correction on the buyer-trust finding (§2(b)).** The new-agency-trust-building claim is sourced with a URL and date, which is why it belongs in the file at all, but its own source file (`02-buyer-market.md`) rates it LOW confidence (practitioner blogs, no data), not HIGH. It is included as a second genuinely-sourced data point alongside the HubSpot stat, not as a second HIGH-confidence one — flagging this explicitly rather than silently upgrading the rating.
- Two internal cross-references in §1 and §5 pointed to "§3" for the HubSpot data, which actually lives in §2; both are corrected in this revision.
