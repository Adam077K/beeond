# 04 — The Product

> Everything in this file is **re-opened** by founder decision (2026-08-08 clean-start reset; not to be confused with the 2026-08-06 brand reset, which was a separate, visual-only call) — **with one exception: the transparency dashboard (§2) is confirmed day-one offer scope, per a separate founder decision the same day.** Tiers, pricing, the service catalog, and the build sequence are shapes to be re-derived, not settled facts — treat every number and every unconfirmed catalog line below as a hypothesis, not a spec.
> **What survives from the germ is narrower than earlier drafts of this file claimed.** Per file 01, the germ is the Beeond name, the bee/swarm concept, the two-founder team, and the 2026-08-08 positioning statement — which does keep "comprehensive system and service," i.e. whole-footprint. It does **not** include the tiered-retainer structure or the phased-onboarding shape; those are hypotheses in this file, not inherited decisions. The specific dollars, hour budgets, and unverified confirmations do not survive either.
> **ICP is genuinely open — two segment branches, not three candidates:** B2B/SaaS/tech, or Hebrew-market lead-gen. Language and geography scope (HE+EN vs English-only) is a *separate* open question on a different axis, not a third ICP option — see file 02 §4. The offer below assumes a B2B/SaaS segment because that is what the source documents were built against. If the branch changes, most of §4–§7 needs re-deriving, not just re-pricing.

---

## 1. The product is a service with a product surface — and none of it exists yet

Beeond sells a **service with a product surface**, not a pure agency and not a software product in the SaaS sense. The founder's positioning statement (2026-08-08) settles this:

> "...a comprehensive system and service that ensure full transparency: the dashboard shows exactly what is being done, the volume, and the rationale, while a 'swarm' of intelligent agents works behind the scenes—like a single, coordinated agency—to execute tasks quickly and at scale. A human element oversees the entire process to guarantee quality, accuracy, and superior results, ensuring the client achieves maximum impact with minimal effort."

That resolves the agency-vs-product question this file would otherwise leave open as **hybrid**: the dashboard is a client-facing product surface, **core to the offer, not a reporting add-on**. A client signing next month gets it. See §2 for what that means concretely and what is still undecided about it.

**None of it is built today.** There is no repo `.sql`, no migration, no `supabase/` directory, no database of any kind, no auth, no API routes, no client portal. The only shipped artifact in this codebase is a marketing landing page on a Vercel preview (`beeond-preview.vercel.app`) — itself mid-rebuild and paused by board decision (see file 05). That makes the dashboard **build target #1**: the one piece of the offer the founder has now named as day-one scope, with zero lines of code against it.

The "human element" the positioning statement requires already has a name and a working pattern, not just a promise: every dark-chapters work-artifact on the current live landing page carries the attribution line **"drafted by the swarm · calibrated by Yarden"** (`apps/web/src/components/sections/dark-chapters.tsx`) — swarm output, human calibration, before anything reaches a client. That is the shape the dashboard's human-oversight layer should carry forward, not a new invention (see also §6).

The one real deliverable produced for an actual (unsigned, warm) client is an **email-marketing strategy brief** for בונים עתיד / Bonim Atid RE, an Israeli real-estate company: platform recommendation (MailerLite → ActiveCampaign → Resend/SES as the business matures), Israeli anti-spam and privacy-law compliance notes, and a phased build-vs-buy recommendation. It was research and a recommendation, not delivered execution — no campaign has shipped, no list has been built, no contract signed.

No CRM, no automation pipeline, no billing system, and no scan/audit tooling exist as working infrastructure. Everything else the source documents describe as "the product" — tiers, channel catalog, phased onboarding — is a **delivery scope**: what two founders, using the dashboard as their operating record and a swarm of AI agents as their execution layer, commit to doing for a paying client, month by month. The swarm itself is a bet, not a proven capability: **it runs Beeond's own planning and documentation today; zero delivery flows have ever been codified against a paying client.** That distinction matters most in §8, where the Definition-of-Done method assumes a swarm that is already delivering. That is what the rest of this file documents.

---

## 2. The transparency dashboard

**What it must show**, per the founder's positioning statement quoted in §1: exactly what is being done, the volume of it, and the rationale behind it. Three concrete asks, not one vague "reporting" concept:

- **What was done** — a client-legible log of actions taken (content published, campaigns launched, audits run), not raw agent-internal event data.
- **The volume** — a quantified view (how many pieces this month, how many channels active, how much was actually run) that substantiates the "swarm works behind the scenes" claim rather than asserting it.
- **The rationale** — for each item, why it was done and which client goal or brief it maps to, not just that it happened.

Plus the human-oversight layer the same statement requires: a visible record of what a human checked or calibrated before it reached the client — the operating pattern already coded into the live landing page as "drafted by the swarm · calibrated by Yarden" (§1).

**Why it matters strategically.** Two independent reasons this is not a nice-to-have:

1. **No competitor in `docs/02-competitive/COMPETITIVE_LANDSCAPE.md` was assessed on transparency.** The agencies and tools surveyed there are differentiated on whole-footprint coverage, GEO focus, bilingual delivery, and price — not one is described as competing on showing its work in this way. If the dashboard ships as specified, it lands on ground this file's own competitive source never found anyone else standing on.
2. **It is a mechanism the buyer-trust research says a no-track-record agency actually needs.** `docs/05-marketing/website-v7-design-kit/research/02-buyer-market.md` §2 (sourced to practitioner blogs, flagged LOW confidence — the only sourced material on this specific question) finds that new agencies without a track record build trust via named founders, founder-led content, and "radical transparency about being new/small," and that faking scale "backfires spectacularly." A dashboard that shows exactly what a swarm-plus-two-founders operation is doing, and at what volume, fits that mechanism structurally — it is a candidate substitute for the case studies Beeond does not yet have.

**What is undecided (open derivations, not settled):**

- **Scope** — does the dashboard cover only what Beeond ships to the client (content, campaigns, reports) or also raw swarm telemetry (agent-level activity)? The positioning statement implies the former; nothing rules out the latter.
- **Depth** — per-deliverable rationale (heavy) vs. a monthly rollup with rationale surfaced only on request (light)? Unresolved.
- **Build vs. buy** — no source evaluates whether this is a custom build or a client-facing layer on an existing reporting tool (e.g., Looker Studio, already a line item in `BUSINESS_MODEL.md`'s cost structure) versus bespoke software.
- **Per-channel vs. aggregate** — whether a client sees one unified feed or a channel-by-channel breakdown (GEO, SEO, LinkedIn, etc., each with its own volume/rationale) is not specified anywhere in the source documents.

None of these four are founder-decided; they are the first open questions on build target #1. (See also the "Reporting & dashboards" catalog line in §5, which is a related but distinct, tier-scoped deliverable — not the same build.)

---

## 3. The funnel shape

Three-step land-and-expand, methodology preserved, numbers stripped:

```
Free Footprint Audit  →  Paid Pilot Sprint  →  Growth Retainer
                                                  ↕
                                          (Starter = fallback tier)
                                          (Scale = upsell tier)
```

**Step 1 — Free Footprint Audit.** A surface-level scan surfacing a handful of gaps (SEO, GEO, content, LinkedIn) at no cost to the prospect. Reasoning: it is a lead-qualification and trust-building step, not a sales pitch — it diagnoses ("here's what's wrong") without prescribing or implementing. Founder time cost is deliberately kept low because volume is bounded by sales capacity, not by client demand.

**Step 2 — Paid Pilot Sprint.** A fixed-fee, time-boxed (30-day) engagement: a deeper audit, one channel's quick-win actually implemented, and a 90-day roadmap for what a retainer would execute. Reasoning for why a pilot exists at all: a monthly retainer was judged **too high a first ask** for price-sensitive prospects — a permanent low-price retainer tier was considered and rejected (it would require far more client relationships for the same revenue as fewer higher-tier clients, with worse churn exposure). The pilot solves the "first yes" problem instead: it is a self-contained, profitable-on-its-own engagement that also functions as an audition — a natural, low-friction moment to make the retainer pitch once trust and a track record exist.

**This reasoning is a CBO proposal, not a founder ratification.** `.claude/memory/DECISIONS.md`'s entry dated 2026-06-29 is titled "On-ramp: Paid Pilot Sprint added to funnel **(PROPOSED)**" and lists **Owner: cbo** — unlike other entries in the same log explicitly tagged "Decision (founder):" (e.g., the 2026-06-29 "Beeond founding direction" and "Brand gate released" entries). The logic against a permanent lite tier is sound on its own terms (roughly 12 client relationships and comparable delivery hours for the MRR of 2 Growth clients, with worse churn exposure), but it has not been through the same founder sign-off as the ICP-reopening call or the catalog lock elsewhere in this log. Treat the pilot-as-on-ramp shape as the best-reasoned proposal on file, not as settled.

**Step 3 — Growth Retainer (the anchor).** The core, ongoing monthly footprint. This is the tier the funnel is built to sell into — the primary profit tier and the one most B2B/SaaS clients should land on. Starter exists as a **fallback**, not a separate on-ramp: for prospects who are sold on the pilot but genuinely cannot commit to Growth spend, with an explicit expectation to upgrade within a few months. Scale exists as an **upsell**, reached once a Growth client is growing and needs the full footprint.

All dollar figures for the pilot and every retainer tier have been cut from this document. They were founder-facing estimates never tested against a real buyer. What survives is the shape of the funnel and the reasoning for each step — see §10 for how to re-derive the numbers responsibly.

**This whole funnel is one unweighted hypothesis.** §§3–5 (this funnel, the tier ladder in §4, and the channel catalog in §5) carry a REOPENED label, but they are also the only fully fleshed-out option in this file — and inertia carries an unweighted shape forward regardless of the label. At least four other shapes were never modelled to any depth: a single-channel wedge (sell GEO or SEO alone, expand later), usage-based pricing (charge per deliverable/action), per-channel pricing (à la carte channels instead of depth tiers), and flat pricing (one price, no tiers). None of these alternatives has been sketched to a comparable level of detail — the shape below survives because it is the only one written down, not because it won a comparison.

---

## 4. The tier structure as a shape

The three tiers (Starter / Growth / Scale) are **not different services** — they are a depth ladder over the same underlying footprint. What increases moving up the ladder:

| Dimension | Increases from Starter → Growth → Scale |
|---|---|
| **Channel count** | Starter covers a foundational few (GEO maintenance, SEO content, LinkedIn organic, reporting, brand monitoring). Growth adds paid ads, email lifecycle, landing pages/CRO, digital PR, founder-led content, case studies. Scale adds YouTube, short-form video, newsletter, webinars, lead magnets, CRM/marketing automation, attribution/pipeline analytics, review-site presence. |
| **Cadence / depth per channel** | Content volume, posting frequency, and reporting depth all step up at each tier (e.g. content pieces per month, LinkedIn posts per month, report length and multi-channel coverage). |
| **Strategic access** | Starter is async/light-touch. Growth adds a recurring call cadence. Scale adds a weekly strategy call with a dedicated account lead. |

The top tier (Scale) was explicitly designed to be **capacity-gated** — the source documents cap how many Scale clients can run concurrently before founder-automation reduces per-client hours, but the specific ceiling number is a stripped estimate and not restated here. The principle survives: Scale is deliberately not sold without limit.

**All hour budgets and prices per tier have been removed.** The tier *names*, the *depth-ladder shape*, and the *channel groupings* are the reusable asset; the specific hours-per-line and dollar figures were manually estimated once and never validated against a delivered engagement.

---

## 5. The channel catalog

The full list of services considered for the Beeond footprint, with its classification. This classification came from the founding brief's review of a broader generic marketing-agency service list, filtered for a B2B/SaaS audience.

### CORE (the default footprint)

GEO / AI-search visibility · SEO content engine · Schema automation · Rank tracking · Website build · Landing pages / CRO · Paid ads management · Social media (LinkedIn-led) · Reddit & blogs · YouTube · Short-form video · Email lifecycle · Email deliverability · Reporting & dashboards · Session / funnel insight · Brand monitoring

> **Flag — GEO leads this list because that's the order inherited from the founding brief's catalog, not because it's the wedge.** GEO is table-stakes, not a differentiator: 9–12 competing agencies already rank for "best GEO agency 2026" (see §7 for the full mechanics and the competitive read). The argument is that GEO gets folded into the whole footprint, not that it leads the pitch — its position at the top of this list should not be read as priority.

(Note: "Reporting & dashboards" here is the per-client, tier-scoped monthly report described in `OFFER_SPEC.md` §3 — related to, but not the same build as, the company-wide transparency dashboard in §2. The two may end up sharing infrastructure once dashboard scope is decided, but that has not been decided.)

### OPTIONAL ADD-ONS (mostly local-flavoured — quote only when relevant)

| Add-on | Note |
|---|---|
| Google Business Profile + local SEO | Only relevant for B2B clients where a physical office/showroom matters. Pure local B2C is not Beeond's ICP. |
| Reviews & reputation (Google-style) | Distinct from G2/Capterra — for B2B with consumer-style reviews (e.g. legal/professional services). |
| Citations / NAP | Local-SEO adjunct to GBP. |
| Speed-to-lead & reminders | Reframed for B2B as demo-request → instant SDR-style response, not a consumer appointment reminder. |
| SMS lifecycle | B2B rarely needs it; email-first by default, pitched only when a client already has an SMS list. |

### RECOMMENDED CUTS / RE-FRAMES for B2B

- **GBP / Citations / NAP** → pure local SEO; demoted to add-on only, not part of the core B2B story.
- **"Reviews & reputation"** → re-scoped for B2B to mean **G2 / Capterra / Trustpilot + LinkedIn reputation**, not Google reviews.
- **SMS** → trimmed out of the default email/SMS pairing; B2B lifecycle marketing is treated as email-led.

### MISSING — high-value additions the founding brief recommended adding

LinkedIn organic + thought leadership (flagged as the #1 B2B channel — "social media" as a generic line item undersold it) · Founder-led / personal-branding content · Digital PR + backlink/authority building (drives both SEO rankings and GEO citability) · Review-site presence (G2 / Capterra / Trustpilot) · Case studies & social-proof assets · Lead magnets / gated content / whitepapers · Webinars / virtual events · Marketing automation + CRM integration & lead nurture · Attribution / pipeline analytics (tie marketing activity to revenue, not just funnel metrics) · Newsletter as an owned media asset · *(lower priority: ABM for high-ACV targets, podcast/audio, community building)*

### Confirmation status

The founding brief (§11) listed "final service catalog — accept the recommended cuts/adds?" as an **open founder question**. Checking `.claude/memory/DECISIONS.md`: it was subsequently closed. The entry dated 2026-06-29 ("Brand gate released + name-clearance verdict + catalog lock") records: *"Service catalog LOCKED as CPO specced (GBP/NAP/SMS → add-ons; newsletter/CRM/attribution → Scale)."* So the classification above **was** founder-confirmed at the time — it is not an unresolved gap in the source material. It is re-opened now only because this clean-start explicitly re-opens the whole offer, not because it was ever left hanging.

---

## 6. Phased onboarding

The principle, not the calendar: **do not light up 20 channels in week one.** Every tier follows the same three-phase shape; only depth varies.

| Phase | What happens |
|---|---|
| **Phase 1 — Foundation** | Brand/voice intake, technical + GEO audit, schema and AI-crawler setup, tracking and reporting dashboards wired, monitoring alerts configured, content voice calibrated and signed off, kickoff call. Front-loaded, one-time work — the client sees comparatively little output in this phase. |
| **Phase 2 — Content Engine** | Output starts moving: content cadence goes live, first channels turn on (LinkedIn, then paid/email/landing-page work for higher tiers), first report ships. |
| **Phase 3 — Amplification** | The footprint is fully active; optimization begins — PR/backlink placements land, paid ads optimize against real conversion data, case-study interviews begin, higher tiers add attribution and multi-channel reporting. |

**Phase 1's "tracking and reporting dashboards wired" line is §2's dashboard, not a lightweight add-on.** This phasing table pre-dates the founder's dashboard decision, but it already named the right piece of work; that line now carries the weight of a core, day-one deliverable rather than a monitoring convenience — the open scope/depth questions in §2 apply to it directly.

Every deliverable that ships from Phase 2 onward is meant to follow the operating pattern already coded into the live landing page: **"drafted by the swarm · calibrated by Yarden"** (§1) — the swarm produces, a human signs off, before a client sees anything. That is the human-oversight layer the founder's positioning statement requires; the phasing above assumes it at every step even though the source documents never named it explicitly.

The *duration* originally proposed for this phasing (a specific weeks-1-4 / weeks-4-8 / weeks-8-12 structure spanning roughly a quarter) is an **open derivation** — plausible as a starting hypothesis, never tested against a real onboarding. Keep the three-phase principle; do not treat the timeline as fixed.

---

## 7. What GEO and the audit/scan concretely mean

**GEO = Generative Engine Optimization.** The practice of getting a client's brand cited by AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Overviews — when a target buyer asks a relevant question. Concretely: structured schema markup, an `llms.txt` file, entity presence and consistency across Wikipedia / Crunchbase / LinkedIn Company / G2, and ongoing AI-citation tracking against a defined set of target queries to see whether the brand is actually getting mentioned.

Cross-reference file 03 (the market file): GEO is **table-stakes, not a wedge** — the competitive landscape found 9–12 agencies already ranking for "best GEO agency 2026," plus multiple low-cost point tools in the same space. Beeond's argument for GEO is that it should be *folded into* a managed full footprint rather than sold as a standalone service; GEO alone does not differentiate.

**The audit/scan** (the mechanism behind the free Footprint Audit and the deeper paid-pilot audit) means: a technical SEO scan, a GEO-readiness check, a LinkedIn/content gap analysis, and a competitor snapshot. As implemented in the current site prototype, this was **only ever templated or heuristic** — there is no code path that performs a live fetch and analysis of a prospect's actual website. A board review (2026-07-13, v7 Phase-3 build review) explicitly flagged this as a **conversion weakness**: the one interactive proof-of-taste on the site risks reading as a generic quiz at exactly the moment it needs to demonstrate real capability, which cuts against the company's own "human taste, not generic AI output" positioning. The board's recommended fix — upgrading the wizard from pure-templated output to templated-plus-one-real-live-signal — was not built before the board paused the build (see file 05).

---

## 8. The Definition-of-Done method

`OFFER_SPEC.md` defines 20 numbered Definition-of-Done (DoD) criteria, one per core service line. The value here is the **method**, not the specific 20 — every service the swarm is meant to deliver carries a written, checkable standard for "delivered, not generic" that a piece of work must pass before it counts as done. That "meant to" is deliberate: the swarm today runs Beeond's own planning and documentation; zero delivery flows have ever been codified against a paying client (§1). The method is designed to stop AI-assisted delivery from collapsing into interchangeable, low-effort output once real delivery exists, and it is worth carrying forward into any re-derived offer regardless of what the tiers or pricing end up being.

Two illustrations of how sharp these standards get:

- **LinkedIn organic:** each post needs "a hook line that doesn't begin with a buzzword," a real CTA or end-question (not a bare "thoughts?"), and — critically — **company-page and founder-voice posts must be written differently, never duplicated** with a name swap.
- **Founder-led personal-brand content:** must be written FROM the founder (interview → draft → founder edit), not written BY the agency and passed off as the founder's voice; never reused company-page content with names swapped in.

The pattern across all 20: a deliverable is only "done" if it is verifiably real (a tracked URL, a documented hypothesis, a named customer), not merely produced. This checkable-standard method is the reusable asset, independent of whichever service catalog survives the re-derivation.

**Several DoD lines cite a voice canon by pointer rather than restating it — that canon exists and is not carried forward here.** DoD-2 requires each content piece to pass "brand-voice check (`POSITIONING.md` §8 voice canon — direct, anti-generic, no buzzword list)"; DoD-11 requires "voice audit by Yarden before publish." That standard is real and substantive: `docs/05-marketing/POSITIONING.md` §8 ("Brand Voice Canon") and `docs/05-marketing/MESSAGING.md` are filled-in documents — not to be confused with the confirmed-empty `docs/02-competitive/POSITIONING.md` template file 03 flags. Carrying the DoD method forward without re-deriving or explicitly carrying forward that canon leaves DoD-2 and DoD-11 partly unenforceable; the standard exists, it just needs to be re-derived or carried forward alongside the method, not assumed.

---

## 9. Discrepancies found while writing

- **`ROADMAP.md` and `USER_STORIES.md` are confirmed unfilled generic SaaS templates.** Both files contain only bracketed placeholder content (`_[e.g., ...]_`) referencing Stripe checkout, signup/login flows, onboarding wizards, and trial-to-paid conversion — none of it specific to Beeond, and none of it applicable to a services agency with no software product. They contain zero real Beeond content and should not be treated as a source of truth for anything.
- **The service-catalog "open question" in `FOUNDING_BRIEF.md` §11 was actually closed.** The brief itself (dated 2026-06-29, same day) frames catalog sign-off as pending founder confirmation. But `.claude/memory/DECISIONS.md`, also dated 2026-06-29 and chronologically later in the log, records the catalog as locked by the founder. Readers should trust the DECISIONS.md entry over the brief's open-question framing — this file follows that.
- **This file previously opened with "There is no software."** That framing was an accurate description of what exists in the repo, but it wasn't reconciled with the founder's positioning statement establishing the transparency dashboard as day-one, product-surface scope. The "nothing is built" fact is unchanged and still true; what changed is that "the product" is no longer purely delivery-scope language — see §1 and §2.
- **Two files in this corpus share the name `POSITIONING.md`.** `docs/02-competitive/POSITIONING.md` is a confirmed-empty generic template (flagged by file 03); `docs/05-marketing/POSITIONING.md` is a real, filled-in document (positioning statement, value props, messaging pillars, landing-page copy direction, and the voice canon `OFFER_SPEC.md`'s DoD criteria cite in §8). Any reference to "POSITIONING.md" without a full path is ambiguous in this corpus; this file now always gives the full path when citing it.
- **The pilot-as-on-ramp reasoning in §3 was previously cited with founder-level weight; it does not carry that.** `.claude/memory/DECISIONS.md`'s 2026-06-29 entry is titled "...(PROPOSED)" with Owner: cbo, unlike sibling entries in the same log explicitly tagged "Decision (founder):". Corrected in §3.

---

## 10. The pricing method — most numbers removed, structural ones restored

What follows is mostly how to *derive* a price when the time comes — the reasoning, not a number. Two exceptions are restored below because they are structural or methodological rather than untested market guesses; both are clearly labelled prior estimates with their source.

**1. Anchor against real substitutes.** A buyer evaluating Beeond compares it against four alternative ways to solve the same problem: hiring an in-house marketing generalist, a traditional agency retainer, a stack of point tools (SEO + social + ads platforms bought separately), or doing it themselves. File 03 (the market file) is where real, sourced figures for these four categories belong — none are asserted here because none in the source documents were sourced from anything beyond estimate.

**2. Constrain by founder delivery hours.** Two people delivering manually — without a productized platform — puts a hard ceiling on how many clients can be served concurrently at any given depth of service. This constraint is real and structural, independent of what number ultimately gets attached to it; it is the reason a tier ladder exists at all instead of one flat price.

**The prior estimate** (`docs/01-foundation/BUSINESS_MODEL.md` §Capacity Model, CBO, 2026-06-29): 2 founders × ~160 hrs/month gross = 320 hrs; minus ~100 hrs/month overhead (sales, automation-build, admin, free audits) = **~220 deliverable hours/month**. Both the 160-hrs and the ~100-hrs-overhead figures are unvalidated estimates — but this is, by a wide margin, the single cheapest number in this entire file to re-verify: it does not need a buyer interview or a competitor scan, only asking the two founders how many hours a month they will actually commit. The overhead split (100 of 320 hours, ~31%) is the load-bearing assumption inside that estimate — if real overhead runs higher (which the six-week history in file 05 suggests, given how much of it went to planning and design cycles rather than delivery or sales), deliverable hours drop below 220 and every downstream tier-capacity number in `OFFER_SPEC.md` shrinks with it.

**3. Price scarce founder time, not a race to the bottom.** Given the capacity ceiling in point 2, the founding brief's explicit instruction is that pricing should reflect the scarcity of two founders' expert hours, not compete down toward commodity-tool pricing. A low price does not buy more capacity; it just burns the same scarce hours for less.

**4. Margin is effectively tool-cost-only, pre-automation.** With no payroll and manual delivery, the direct cost of serving a client is dominated by SaaS tool subscriptions, not labor cost in the traditional sense — because labor is unpaid founder time, not a line-item expense. This changes materially once (if) automation reduces founder-hours-per-client; until then, treat margin economics as structurally different from a typical staffed agency.

**5. Compute lifetime value as a method, not a number.** `BUSINESS_MODEL.md`'s Unit Economics section used the formula `LTV = ARPU × Gross Margin % ÷ Monthly Churn Rate`. The formula is reusable; none of its three inputs survive this reset as numbers. ARPU and gross margin depend on pricing this section has already ruled out from being asserted here. **Churn is the input most in need of a real source**: the prior model's 4% monthly churn was explicitly labelled "agency benchmark" with the caveat "no cohort data" (`BUSINESS_MODEL.md` §Pricing Proposal Context, Key Uncertainty #3) — it was never sourced to a named benchmark study, just asserted. Before LTV is recomputed for any tier, churn needs an actual source (a cited benchmark study, or — once clients exist — real cohort data), not a repeat of the unsourced 4% figure.

**6. The path to profitability is a milestone shape, gated by client count — not a calendar date.** `BUSINESS_MODEL.md`'s Path to Profitability table used five stages, each defined by an engagement mix rather than a date: **ramen-profitable** (a handful of Growth-tier clients covering tools + founder living costs) → **comfortably ramen** (one more client, buffer above minimum burn) → **break-even** (founders drawing a wage) → **default-alive** (revenue growth outpacing burn, no fundraise needed) → **profitable-growth** (a healthy net margin, capacity ceiling approaching). The specific client counts, MRR targets, and calendar quarters attached to each stage in the source were founder-facing estimates and are not restated here; the shape — progress measured in signed clients, not weeks elapsed — is the reusable part, and it directly counters this project's own documented pattern (file 05: "locked" decisions get revisited on a calendar clock, not a validated-signal clock).

**7. Operating constraints that shape delivery, not price** (prior estimates, `OFFER_SPEC.md` §8 — qualitative rules, not dollar figures, but violating them silently costs real rework):

| Flag | Constraint |
|---|---|
| F1 — Growth's buffer is thin | Growth tier lands at 27.5 of a 28-hr budget — 0.5 hr buffer. Any reactive month tips it over; track actuals from day 1, renegotiate scope after 2 consecutive months over 30 hrs. |
| F2 — Scale has zero buffer | Scale lands at exactly 50.0 of 50 hrs. Sell no more than 2 Scale clients concurrently until automation cuts hrs/line by ≥10% on the top-3 services. |
| F3 — Scale's 3rd concurrent client is automation-gated | 4 Scale clients (200 hrs) exceeds the ~220-hr deliverable budget once combined with any other tier mix — automation is the lever that opens a 3rd+ concurrent Scale client. |
| **F4 — bilingual delivery adds ~40–50% to content hours** | HE+EN parity content (SEO, LinkedIn, email, founder posts) adds roughly 40–50% to content-line hours. **HE+EN clients should be Growth-tier or above; Starter is monolingual-only at full capacity.** This is a direct, structural cost of the company-level HE+EN bilingual commitment (file 01, §4) and appeared nowhere else in this handoff before now. |
| F5 — stagger top-tier onboardings | Scale's Phase-1 onboarding alone is ~36 one-time hours; two Scale clients onboarding the same month is 72 hours on top of ongoing delivery. Stagger Scale onboardings ≥4 weeks apart. |
| F6 — email lifecycle assumes an existing list | Email lifecycle at Growth/Scale assumes the client already has a list to send to. A client with under 500 contacts needs an explicit "list-building first" motion set in Phase 1 — separate work, not covered by the standard monthly cadence. |
| F7 — ad spend above a threshold triggers a re-quote | Hours assume under $10K/mo of ad spend under management. Spend crossing $10K and $25K/mo triggers a scope re-quote (the "extra paid-ad creative pack" add-on at minimum). |

**Bottom line — revised.** Tier *prices*, margins, LTV dollar outputs, MRR targets, and churn remain removed — none of those numbers should be quoted to a prospect before the ICP is chosen and real substitute-cost and willingness-to-pay data exist. What this section restores are the numbers that are **structural or operational rather than market guesses**: the ~220-hr/month founder-capacity ceiling (point 2), the LTV *formula* and the flag on churn's unsourced provenance (point 5), the milestone *shape* (point 6), and the seven operating flags in point 7 (bilingual load, stagger rules, list-size and ad-spend thresholds). These survive because they either come from arithmetic anyone can re-run by asking the founders their hours, or from qualitative delivery constraints that cost real rework if ignored — not from an untested market assumption. The reasoning is reusable; the *market-facing* numbers (what a client pays, what churn will actually be, what MRR to expect) are not, and still require the ICP and the prospect interviews this file has flagged throughout.

---

## 11. Open scope-governance questions

Cut from earlier drafts of this file entirely. These are cheap, concrete, and founder-answerable — distinct from the ICP question, and none of them requires a customer call to resolve:

- **Stretch/contraction policy** (`OFFER_SPEC.md` §7, Q7): when a client's needs swell mid-month (an extra webinar, a surprise CRO push), does Beeond bill the overrun, absorb it into next month, or hard-cap and defer? The prior spec assumed hard-cap-with-deferral but flagged it as the founders' call, not a settled one.
- **Pause / cancellation policy** (`OFFER_SPEC.md` §7, Q8): the prior spec was silent on this entirely. It blocks writing an honest FAQ section on any future site.
- **Client-direct vs. Beeond-fronted ad spend** (`BUSINESS_MODEL.md`, Open Questions for Founders #6): does the client pay ad platforms directly, or does Beeond advance and get reimbursed? The prior recommendation (client-direct, to avoid cash-flow timing risk) was never confirmed.
- **ILS vs. USD invoicing** (`BUSINESS_MODEL.md`, Open Questions for Founders #4): affects payment tooling and currency risk for Israeli clients.
- **Pilot-fee waiver policy** (`BUSINESS_MODEL.md`, Open Questions for Founders #5): whether signing a Growth retainer within 14 days of pilot delivery waives the pilot fee — recommended in the prior model, never confirmed.
- **Founder living-cost floor** (`BUSINESS_MODEL.md`, Open Questions for Founders #2, and Path to Profitability): the $5,000/month-per-founder figure that gated every milestone in §10 point 6 was explicitly "awaiting founder confirmation" and never received it.
- **Cash runway** (`BUSINESS_MODEL.md`, Open Questions for Founders #3): how many months both founders can run on savings before needing MRR — sets the actual urgency behind every milestone in §10.

---

_This file describes a service delivery scope, and one build target (the transparency dashboard, §2), re-opened by founder decision. Nothing in it should be read as current pricing, current scope, or a commitment to any specific client._
