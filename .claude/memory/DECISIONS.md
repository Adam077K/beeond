# Architecture & Strategy Decisions
*Append-only. 50-entry cap — archive to `DECISIONS_ARCHIVE.md` when full.*

> Empty template. Every C-suite agent appends one entry per significant decision
> using the format below. Workers do not write here.

---

## Format

```markdown
## YYYY-MM-DD — [Decision title]

**Context:** Why this came up.
**Options considered:** A / B / C with one-line trade-offs.
**Decision:** What we chose.
**Rationale:** Why this option won.
**Reversibility:** reversible | hard-to-reverse | irreversible
**Owner:** [agent name]
**Affects:** [list of agents / domains downstream]
```

---

<!-- Entries below this line, most-recent first. -->

## 2026-06-30 — Hero copy locked: descriptive (no coined term) + speed/AI-era headline

**Context:** Founder wanted "one word combining everything we do" + a hero that signals "we move fast in the new AI world." CMO coined candidates (Hiveprint, Quorum). Founder reviewed and reversed — genuinely prefers descriptive language over a coined term.
**Decision:** NO coined umbrella term — use plain descriptors ("your whole digital presence / entire digital footprint"). Hero headline LOCKED = **"The AI era moves fast. Your presence needs to match."** (CMO H1). CTA stays "Get a free footprint audit." Speed + AI-native is the lead emotional beat.
**Rationale:** Founder's call after side-by-side review; descriptive = zero learning curve, fits how the market talks. Speed/AI-era framing carries the differentiation instead of a coined word.
**Reversibility:** reversible (pre-launch); can A/B-test runner-up (H3 "built for the AI era") later.
**Owner:** ceo (founder decision)
**Affects:** CMO (update POSITIONING.md hero + drop coined-term workstream), Design-Lead (hero copy → H1 in re-render), CTO (Wave 3 build copy).

## 2026-06-29 — Brand gate released + name-clearance verdict + catalog lock

**Context:** Name-clearance screen returned; CPO offer spec returned; founder decided the Design-Lead gate.
**Name verdict (Research-Lead):** MEDIUM risk — "Beeond" is USABLE (no exact-spelling marketing-agency mark found in IL/US) but NOT formally cleared (USPTO/EUIPO/Israel ILPO registries were bot-walled — Israel, our primary market, is an unverified gap). Phonetically crowded field (BeondX, Beeyond Media, Beeond Publicidade, Beeond Inc).
**Decision (founder):** (1) **Release Design-Lead now** to build a DISTINCTIVE composite wordmark + bee/hive device (more registrable than the bare word); **formal trademark clearance (attorney, Class 35+42, US+IL) runs in parallel and MUST complete before any PUBLIC launch.** Design file is reversible; public launch is the irreversible moment. (2) **Service catalog LOCKED** as CPO specced (GBP/NAP/SMS → add-ons; newsletter/CRM/attribution → Scale). (3) On-ramp (CBO Rev 2) accepted as working model: Free Footprint Audit → Paid Pilot Sprint ($1.5–2.5k) → Growth retainer.
**Reversibility:** design reversible; PUBLIC LAUNCH gated on formal TM clearance (hard-to-reverse).
**Owner:** ceo
**Affects:** Design-Lead (released, launch-hold), CTO (Wave 3 landing build), CMO (copy ↔ design), founders (engage TM attorney before launch; buy beeond.ai; supply customer/bio/money inputs).
**Detail:** docs/02-competitive/NAME_CLEARANCE.md, docs/04-features/OFFER_SPEC.md

## 2026-06-29 — Wave 1 outcomes: domain, white space, naming-risk gate

**Context:** CEO synthesized Wave 1 (Research-Lead + CMO + CBO), founder reacted.
**Findings:** White space CONFIRMED — no rival occupies whole-footprint AI-swarm + bilingual HE+EN (closest GrowthSpree $3k/mo, US-only); GEO commoditizing (validates not making it the wedge). Domain beeond.ai/.io available; .com taken ($3,795). ⚠️ Existing "Beeond Inc" (US IIoT) + "Beeond Publicidade" (Brazilian ADVERTISING agency) → collision risk; @beeond handles contested.
**Decision (founder):** Register **beeond.ai only** for now (defer .io/.com). **Preliminary trademark/collision screen REQUIRED before Design-Lead builds brand** — Design-Lead is GATED on clearance. Pricing structure APPROVED (3 tiers, Growth anchor) but **numbers to be adjusted** (founder steer pending → CBO re-task). Positioning v0 + tagline "One swarm. Every channel. Your brand." accepted as working direction.
**Reversibility:** reversible now; naming becomes hard-to-reverse once brand built — hence the pre-build screen.
**Owner:** ceo
**Affects:** Design-Lead (GATED on name clearance), CPO (offer/tier scope — proceeding now), CBO (pricing number adjustment), founders (domain purchase, TM, pricing inputs, customer names, bios).
**Detail:** docs/02-competitive/, docs/05-marketing/POSITIONING.md

## 2026-06-29 — On-ramp: Paid Pilot Sprint added to funnel (PROPOSED)

**Context:** Founder approved 3-tier retainer structure but flagged Starter ($2–3.5K/mo) too high as a "first yes" for price-sensitive B2B service businesses and agencies.
**Options considered:** (A) Permanent lite tier at ~$1K/mo, 4–6 hrs/mo — rejected: requires 12 clients to match 2 Growth clients' MRR, with 12× the relationship overhead and high churn exposure; creates a permanent low-value segment. (B) **Paid Pilot Sprint ($1,500–$2,500 one-time, ~12 hrs, 30 days)** — chosen: low commitment, profitable on its own, creates a natural conversion moment to Growth retainer, net-negative effective CAC.
**Decision:** Funnel = Free Footprint Audit (lead magnet, CMO CTA, 1–2 hrs) → Paid Pilot Sprint ($1,500–$2,500 one-time) → Growth Retainer ($4,500–$7,000/mo). Starter tier retained as fallback for post-pilot clients not ready for Growth. Capacity rule: max 2 active pilots simultaneously (~24 hrs reserved). Pilot fee waived if prospect signs 6-month Growth retainer within 14 days.
**Reversibility:** easy — not yet communicated to any prospect.
**Owner:** cbo
**Affects:** CMO (free audit CTA confirmed as lead-in to pilot; must not blur lines between free audit scope and paid pilot scope), CPO (validate pilot deliverable scope), CTO (no billing/payment work until pricing locked by founders).
**Detail:** docs/01-foundation/BUSINESS_MODEL.md (Rev 2)

## 2026-06-29 — Wave 1 pricing model: tiered monthly retainer (PROPOSED)

**Context:** Founding brief left pricing unresolved. CBO tasked with proposing a concrete model for founders to react to before first client conversations.
**Options considered:** Hourly rate (rejected — commoditizes expertise, creates hour-reduction pressure); project-based (rejected — unpredictable MRR, misaligned incentives); revenue-share (rejected — too early, no attribution data); **flat monthly retainer by tier** (chosen — predictable MRR, capacity-aligned, easy for clients to budget).
**Decision:** Three-tier monthly retainer: **Starter $2,000–$3,500/mo (₪7,300–₪12,800); Growth $4,500–$7,000/mo (₪16,400–₪25,600); Scale $9,000–$15,000/mo (₪32,900–₪54,800).** Midpoints: $2,750 / $5,750 / $12,000. Annual commitment = 15% discount. First 2 clients: 20–25% intro discount for months 1–3 in exchange for case-study rights. Ramen target: 2 Growth clients ($11,500 MRR) by Q3 2026.
**Rationale:** Pricing anchored above cost of one in-house B2B marketer (Israel: ₪15K–₪25K salary alone vs. Beeond's Growth mid ₪21K for the whole footprint). Manual delivery ceiling pre-automation: ~$480K–$630K ARR; automation breaks the ceiling upward. Reversibility is easy — no client is signed yet.
**Confidence:** MEDIUM — CAC and churn numbers are assumed (no live data). Validate with first 2 clients.
**Reversibility:** easy — prices not yet communicated externally; adjust freely until first invoice.
**Owner:** cbo
**Affects:** CMO (pricing copy), CPO (tier scope validation), CTO (any payment/billing setup).
**Detail:** docs/01-foundation/BUSINESS_MODEL.md

## 2026-06-29 — Beeond founding direction (from founder discovery interview)

**Context:** First session for a brand-new company. No brand/site/offer/pricing existed — only the idea, the name, two founders, and a couple of warm unsigned customers. CEO ran a structured 20-question founder interview to lock direction.
**Options considered:** ICP (local SMB / e-com / **B2B-SaaS** / agnostic) · model (managed platform / **DFY agency** / SaaS) · wedge (GEO / speed-to-lead / **whole footprint, no wedge**) · market (US / IL / **both**).
**Decision:** Bilingual (HE+EN) **done-for-you marketing/growth agency for B2B/SaaS/tech**, selling the **whole digital footprint** (no single wedge) via **tiered retainer + phased onboarding**. Delivered by the **two founders, mostly manual now → automate via AI swarms over time**. Moat = **swarm tech + founder expertise + speed/price**. Brand from zero, vibe **warm/natural × futuristic × friendly**. First execution = **branding + landing page**; bootstrapped & lean; sprint this week.
**Rationale:** Founder conviction on whole-footprint + B2B; made deliverable via packaging/sequencing. Honest automation path (codify flows first). Local services (GBP/reviews/NAP/speed-to-lead) demoted to optional add-ons.
**Reversibility:** hard-to-reverse (brand/positioning); pricing still open.
**Owner:** ceo
**Affects:** CMO (positioning/copy), CBO (pricing/tiers), CPO (offer/personas), Design-Lead (brand), Research-Lead (domain/competitive), CTO (landing page + flow automation).
**Detail:** docs/01-foundation/FOUNDING_BRIEF.md
