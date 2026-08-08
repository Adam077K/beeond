# 04 — The Product

> Everything in this file is **re-opened** by founder decision (2026-08-08 clean-start reset; not to be confused with the 2026-08-06 brand reset, which was a separate, visual-only call). Tiers, pricing, the service catalog, and the build sequence are shapes to be re-derived, not settled facts — treat every number and every unconfirmed catalog line below as a hypothesis, not a spec.
> The founding germ (whole-footprint, tiered-retainer, phased-onboarding) survives the reset. The specific dollars, hour budgets, and unverified confirmations do not.
> ICP is genuinely open (B2B/SaaS vs. Hebrew-market lead-gen vs. international-English-only) — the offer below assumes a B2B/SaaS ICP because that is what the source documents were built against. If the ICP changes, most of §3–§6 needs re-deriving, not just re-pricing.

---

## 1. There is no software

Beeond sells a **service**, not a product in the software sense. There is no repo `.sql`, no migration, no `supabase/` directory, no database of any kind. The only shipped artifact in this codebase is a marketing landing page on a Vercel preview (`beeond-preview.vercel.app`) — itself mid-rebuild and paused by board decision (see file 05).

The one real deliverable produced for an actual (unsigned, warm) client is an **email-marketing strategy brief** for בונים עתיד / Bonim Atid RE, an Israeli real-estate company: platform recommendation (MailerLite → ActiveCampaign → Resend/SES as the business matures), Israeli anti-spam and privacy-law compliance notes, and a phased build-vs-buy recommendation. It was research and a recommendation, not delivered execution — no campaign has shipped, no list has been built, no contract signed.

No CRM, no client portal, no automation pipeline, no billing system, and no scan/audit tooling exist as working infrastructure. Everything the source documents describe as "the product" is a **delivery scope** — a description of what two founders (plus AI-agent assistance) commit to doing for a paying client, month by month. That is what this file documents.

---

## 2. The funnel shape

Three-step land-and-expand, methodology preserved, numbers stripped:

```
Free Footprint Audit  →  Paid Pilot Sprint  →  Growth Retainer
                                                  ↕
                                          (Starter = fallback tier)
                                          (Scale = upsell tier)
```

**Step 1 — Free Footprint Audit.** A surface-level scan surfacing a handful of gaps (SEO, GEO, content, LinkedIn) at no cost to the prospect. Reasoning: it is a lead-qualification and trust-building step, not a sales pitch — it diagnoses ("here's what's wrong") without prescribing or implementing. Founder time cost is deliberately kept low because volume is bounded by sales capacity, not by client demand.

**Step 2 — Paid Pilot Sprint.** A fixed-fee, time-boxed (30-day) engagement: a deeper audit, one channel's quick-win actually implemented, and a 90-day roadmap for what a retainer would execute. Reasoning for why a pilot exists at all: a monthly retainer was judged **too high a first ask** for price-sensitive prospects — a permanent low-price retainer tier was considered and rejected (it would require far more client relationships for the same revenue as fewer higher-tier clients, with worse churn exposure). The pilot solves the "first yes" problem instead: it is a self-contained, profitable-on-its-own engagement that also functions as an audition — a natural, low-friction moment to make the retainer pitch once trust and a track record exist. This is a **founder decision**, not an untested guess (see DECISIONS.md, 2026-06-29, "On-ramp: Paid Pilot Sprint added to funnel").

**Step 3 — Growth Retainer (the anchor).** The core, ongoing monthly footprint. This is the tier the funnel is built to sell into — the primary profit tier and the one most B2B/SaaS clients should land on. Starter exists as a **fallback**, not a separate on-ramp: for prospects who are sold on the pilot but genuinely cannot commit to Growth spend, with an explicit expectation to upgrade within a few months. Scale exists as an **upsell**, reached once a Growth client is growing and needs the full footprint.

All dollar figures for the pilot and every retainer tier have been cut from this document. They were founder-facing estimates never tested against a real buyer. What survives is the shape of the funnel and the reasoning for each step — see §9 for how to re-derive the numbers responsibly.

---

## 3. The tier structure as a shape

The three tiers (Starter / Growth / Scale) are **not different services** — they are a depth ladder over the same underlying footprint. What increases moving up the ladder:

| Dimension | Increases from Starter → Growth → Scale |
|---|---|
| **Channel count** | Starter covers a foundational few (GEO maintenance, SEO content, LinkedIn organic, reporting, brand monitoring). Growth adds paid ads, email lifecycle, landing pages/CRO, digital PR, founder-led content, case studies. Scale adds YouTube, short-form video, newsletter, webinars, lead magnets, CRM/marketing automation, attribution/pipeline analytics, review-site presence. |
| **Cadence / depth per channel** | Content volume, posting frequency, and reporting depth all step up at each tier (e.g. content pieces per month, LinkedIn posts per month, report length and multi-channel coverage). |
| **Strategic access** | Starter is async/light-touch. Growth adds a recurring call cadence. Scale adds a weekly strategy call with a dedicated account lead. |

The top tier (Scale) was explicitly designed to be **capacity-gated** — the source documents cap how many Scale clients can run concurrently before founder-automation reduces per-client hours, but the specific ceiling number is a stripped estimate and not restated here. The principle survives: Scale is deliberately not sold without limit.

**All hour budgets and prices per tier have been removed.** The tier *names*, the *depth-ladder shape*, and the *channel groupings* are the reusable asset; the specific hours-per-line and dollar figures were manually estimated once and never validated against a delivered engagement.

---

## 4. The channel catalog

The full list of services considered for the Beeond footprint, with its classification. This classification came from the founding brief's review of a broader generic marketing-agency service list, filtered for a B2B/SaaS audience.

### CORE (the default footprint)

GEO / AI-search visibility · SEO content engine · Schema automation · Rank tracking · Website build · Landing pages / CRO · Paid ads management · Social media (LinkedIn-led) · Reddit & blogs · YouTube · Short-form video · Email lifecycle · Email deliverability · Reporting & dashboards · Session / funnel insight · Brand monitoring

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

## 5. Phased onboarding

The principle, not the calendar: **do not light up 20 channels in week one.** Every tier follows the same three-phase shape; only depth varies.

| Phase | What happens |
|---|---|
| **Phase 1 — Foundation** | Brand/voice intake, technical + GEO audit, schema and AI-crawler setup, tracking and reporting dashboards wired, monitoring alerts configured, content voice calibrated and signed off, kickoff call. Front-loaded, one-time work — the client sees comparatively little output in this phase. |
| **Phase 2 — Content Engine** | Output starts moving: content cadence goes live, first channels turn on (LinkedIn, then paid/email/landing-page work for higher tiers), first report ships. |
| **Phase 3 — Amplification** | The footprint is fully active; optimization begins — PR/backlink placements land, paid ads optimize against real conversion data, case-study interviews begin, higher tiers add attribution and multi-channel reporting. |

The *duration* originally proposed for this phasing (a specific weeks-1-4 / weeks-4-8 / weeks-8-12 structure spanning roughly a quarter) is an **open derivation** — plausible as a starting hypothesis, never tested against a real onboarding. Keep the three-phase principle; do not treat the timeline as fixed.

---

## 6. What GEO and the audit/scan concretely mean

**GEO = Generative Engine Optimization.** The practice of getting a client's brand cited by AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Overviews — when a target buyer asks a relevant question. Concretely: structured schema markup, an `llms.txt` file, entity presence and consistency across Wikipedia / Crunchbase / LinkedIn Company / G2, and ongoing AI-citation tracking against a defined set of target queries to see whether the brand is actually getting mentioned.

Cross-reference file 03 (the market file): GEO is **table-stakes, not a wedge** — the competitive landscape found 9–12 agencies already ranking for "best GEO agency 2026," plus multiple low-cost point tools in the same space. Beeond's argument for GEO is that it should be *folded into* a managed full footprint rather than sold as a standalone service; GEO alone does not differentiate.

**The audit/scan** (the mechanism behind the free Footprint Audit and the deeper paid-pilot audit) means: a technical SEO scan, a GEO-readiness check, a LinkedIn/content gap analysis, and a competitor snapshot. As implemented in the current site prototype, this was **only ever templated or heuristic** — there is no code path that performs a live fetch and analysis of a prospect's actual website. A board review (2026-07-13, v7 Phase-3 build review) explicitly flagged this as a **conversion weakness**: the one interactive proof-of-taste on the site risks reading as a generic quiz at exactly the moment it needs to demonstrate real capability, which cuts against the company's own "human taste, not generic AI output" positioning. The board's recommended fix — upgrading the wizard from pure-templated output to templated-plus-one-real-live-signal — was not built before the board paused the build (see file 05).

---

## 7. The Definition-of-Done method

`OFFER_SPEC.md` defines 20 numbered Definition-of-Done (DoD) criteria, one per core service line. The value here is the **method**, not the specific 20 — every service the swarm delivers carries a written, checkable standard for "delivered, not generic" that a piece of work must pass before it counts as done. This is what stops AI-assisted delivery from collapsing into interchangeable, low-effort output, and it is worth carrying forward into any re-derived offer regardless of what the tiers or pricing end up being.

Two illustrations of how sharp these standards get:

- **LinkedIn organic:** each post needs "a hook line that doesn't begin with a buzzword," a real CTA or end-question (not a bare "thoughts?"), and — critically — **company-page and founder-voice posts must be written differently, never duplicated** with a name swap.
- **Founder-led personal-brand content:** must be written FROM the founder (interview → draft → founder edit), not written BY the agency and passed off as the founder's voice; never reused company-page content with names swapped in.

The pattern across all 20: a deliverable is only "done" if it is verifiably real (a tracked URL, a documented hypothesis, a named customer), not merely produced. This checkable-standard method is the reusable asset, independent of whichever service catalog survives the re-derivation.

---

## 8. Discrepancies found while writing

- **`ROADMAP.md` and `USER_STORIES.md` are confirmed unfilled generic SaaS templates.** Both files contain only bracketed placeholder content (`_[e.g., ...]_`) referencing Stripe checkout, signup/login flows, onboarding wizards, and trial-to-paid conversion — none of it specific to Beeond, and none of it applicable to a services agency with no software product. They contain zero real Beeond content and should not be treated as a source of truth for anything.
- **The service-catalog "open question" in `FOUNDING_BRIEF.md` §11 was actually closed.** The brief itself (dated 2026-06-29, same day) frames catalog sign-off as pending founder confirmation. But `.claude/memory/DECISIONS.md`, also dated 2026-06-29 and chronologically later in the log, records the catalog as locked by the founder. Readers should trust the DECISIONS.md entry over the brief's open-question framing — this file follows that.

---

## 9. The pricing method, numbers removed

No price appears anywhere in this file. What follows is how to *derive* one when the time comes — the reasoning, not a number.

**1. Anchor against real substitutes.** A buyer evaluating Beeond compares it against four alternative ways to solve the same problem: hiring an in-house marketing generalist, a traditional agency retainer, a stack of point tools (SEO + social + ads platforms bought separately), or doing it themselves. File 03 (the market file) is where real, sourced figures for these four categories belong — none are asserted here because none in the source documents were sourced from anything beyond estimate.

**2. Constrain by founder delivery hours.** Two people delivering manually — without a productized platform — puts a hard ceiling on how many clients can be served concurrently at any given depth of service. This constraint is real and structural, independent of what number ultimately gets attached to it; it is the reason a tier ladder exists at all instead of one flat price.

**3. Price scarce founder time, not a race to the bottom.** Given the capacity ceiling in point 2, the founding brief's explicit instruction is that pricing should reflect the scarcity of two founders' expert hours, not compete down toward commodity-tool pricing. A low price does not buy more capacity; it just burns the same scarce hours for less.

**4. Margin is effectively tool-cost-only, pre-automation.** With no payroll and manual delivery, the direct cost of serving a client is dominated by SaaS tool subscriptions, not labor cost in the traditional sense — because labor is unpaid founder time, not a line-item expense. This changes materially once (if) automation reduces founder-hours-per-client; until then, treat margin economics as structurally different from a typical staffed agency.

**Bottom line: every number that used to live in this section — tier prices, margins, LTV, churn, capacity ceilings, MRR targets — has been removed. Pricing cannot be responsibly set before the ICP is chosen and the two warm prospects (plus any others) are actually interviewed for their budget, current spend, and willingness to pay.** The reasoning above is reusable; the old numbers are not.

---

_This file describes a service delivery scope re-opened in full by founder decision. Nothing in it should be read as current pricing, current scope, or a commitment to any specific client._
