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

## 2026-07-05 — v6.1 founder directives: motion doctrine amended (TWO scroll sections) + funded hero art

**Context:** Founder reviewed the QA-PASSed v6 branch and directed four upgrades before merge: generated hero art via his OpenAI key, dark chapters as a one-at-a-time scroll crossfade, swarm stage full-screen with narrator captions, small ink spot drawings in quieter sections.
**Decision:** (1) Motion doctrine AMENDED by the founder: the page carries TWO scroll-choreographed sections — the dark-chapters crossfade (depth) and the swarm showpiece (the story). Converge-once/zero-loops unchanged. (2) Hero art is a GENERATED drawing again ("hero-signal": five channel pictograms braid into one built cell — zero bees, zero lettering); pipeline gained two deterministic stages: `flatten_paper.py` (near-paper → exact ground; kills seams without masks) and `extract_spots.py` (alpha-keys spots when the model ignores transparent backgrounds).
**Reversibility:** reversible — all pre-directive states in git history; prompts committed, art regenerable.
**Owner:** designer-v6 session (founder directives verbatim)
**Affects:** QA-Lead (fresh delta gate required — v6 PASS covers only through `bf14b1c`), design-critic (delta review), CMO (four new caption strings, POSITIONING-traced, HE authored).

## 2026-07-05 — Landing v6 built: content-first arc, QA-Lead PASS, awaiting founder merge word

**Context:** The v6 designer handoff (2026-07-05 brief) executed in one Fable-5 session (designer-v6-content-first, branch `feat/landing-v6`, 13 commits).
**Decision:** The page is now the 10-block content-first arc — hero (v4 type + one ink gesture), SAMPLE Footprint Audit artifact strip (doubles as sales asset; scorecard dimensions + "11 channels · 1 swarm · weeks, not months" founder-locked), ONE dark chapters block with attributed work artifacts, outcomes, the org-chart→agents showpiece (the page's only scroll choreography), static channel hive around the mark, honesty block. RETIRED with founder confirmation: C7 pinned scrub, standalone Founders/Problem/Anti-generic/Proof-C6/Social-proof sections, v4 journal hero art + all unused art assets (git history keeps everything).
**Gates:** design-critic NEEDS_WORK → 7/7 findings remediated; QA-Lead independent **PASS (full tier, 0×P1/P2)** with all mechanical gates re-run; LH 96/100/100/100 · real CDP LCP 800ms · e2e 23/0 · brand-lint clean. Merge still awaits the founder's word; launch-hold gates unchanged.
**Reversibility:** reversible — branch only until founder word; every retired system in git history.
**Owner:** designer-v6 session (CEO-chaired)
**Affects:** QA-Lead (verdict filed: sessions/2026-07-05-qa-lead-landing-v6.md), CMO (new section copy is POSITIONING-traced; HE authored — needs the native-HE read), CTO (deploy after merge), founder (merge word + standing launch gates).

## 2026-07-05 — v6 vision pivot: "bees become agents" + full-page storytelling rethink (founder)

**Context:** Founder judged the v5 labeled-honeycomb hero "too bee — not the advanced agency we're trying to show"; v5 typography/layout reverted same-day (`e5d83a6`), gold token rolled back. Direction reset: minimal meaningful ink drawings (Anthropic register), bees transforming into named/roled agents ("robotic view"), one immersive scroll showpiece mid-page, Diamo as structural reference.
**Decision:** Vision + handoff encoded in `docs/08-agents_work/briefs/2026-07-05-v6-vision-brief.md` — the next single-designer session executes it (mandatory skills reads, evidence loops, all gates, QA-Lead + founder merge word). Two concept probes generated (metamorphosis / specimen schematic) awaiting founder pick.
**Reversibility:** reversible — v4 live on branch, v5 in history, art regenerable.
**Owner:** ceo (this session) → next designer session
**Affects:** design-lead/next designer (execute §4 arc), QA-Lead (fresh gate for v6), CMO (stat-strip wording, POSITIONING traceability), founder (4 open decisions in brief §8).


## 2026-07-05 — Constitution amendment: gold display token + hero-as-artwork (founder mock)

**Context:** Founder rejected the v4 contained-illustration hero ("this was more like my vision — the main hero statement") and supplied a full mock: full-bleed comb bleeding off three edges, channel icons+labels inside the cells, two-tone gold headline, prominent bees, always-on header CTA.
**Options considered:** (a) mock's literal gold #CDA555 — rejected, 2.19:1 fails WCAG even for display text; (b) keep yellow-underline H1 — rejected, founder's mock is explicit; (c) **same hue deepened to pass**: gold #B28834 (3.08:1 display) + ink-mix for small caps (4.56:1) — chosen.
**Decision:** 8th brand token `gold` (display accent only: H1 sentence 2, eyebrow, logo tagline — never body text, never a surface). Hero rebuilt as full-viewport artwork with the comb as the literal channel map: hand-inked icon sheet + real bilingual text labels pinned to CV-measured empty-cell centroids; window-clip architecture hides the model's stubborn left-zone bees; RTL via one mirror + chip counter-flip.
**Rationale:** The founder owns the constitution; a11y-100 is a hard gate the mock's literal color would break — hue preserved, lightness earned the pass. All gates re-proven: e2e 18/18, LH 93/100/96/100, real CDP LCP 632ms, CLS 0.
**Reversibility:** reversible (token removal is one commit; v4 hero lives in git history).
**Owner:** ceo (founder-mandated single designer-engineer session)
**Affects:** design-lead (gold usage rules in future sections), QA-Lead (v5 delta needs a fresh gate before merge), CMO (nav copy: What we do / Results / About us).


## 2026-07-05 — v4 hero shipped: generated Field Journal art, deterministic brand pipeline

**Context:** Founder funded direct gpt-image-1 access ("send the messages and get the images directly to you"). First v4 asset (hero) generated, art-directed and integrated in one session on `feat/journal-hero`.
**Options considered:** (a) trust prompts for brand color — rejected, model drifts sepia/gloss; (b) transparent-background art — rejected for large pieces (sticker-halo + etching drift), kept for small sprites; (c) **opaque art + deterministic post-processing** — chosen.
**Decision:** Brand fidelity is enforced by code after generation, not begged from the model: `normalize_paper.py` white-balances the art's paper to ground `#FAF9F5` exactly (seamless on-page), `despecular.py` (hue-aware) mattes the honey. Bees are separate transparent sprites composited in `journal-comb.tsx` at true scale — the model consistently ignores bee-scale/no-eyes instructions at hero sizes. EN ships the annotated variant; HE ships the clean variant mirrored by one CSS transform. Old canvas swarm deleted (zero hero JS).
**Rationale:** Every failure mode we hit (sepia paper, candy gloss, giant storybook bees, clipped lettering) was fixed deterministically or by decomposition — regeneration lotteries were spent only on composition. Real CDP trace: LCP 732ms / CLS 0.003; LH 95/100/96/100; e2e 18/18.
**Reversibility:** reversible — swarm components live in git history; art regenerable from committed prompts.
**Owner:** ceo (acting designer-engineer, founder-mandated single session)
**Affects:** design-lead (remaining v4 assets: anti-generic, night-page, C7), QA-Lead (gate pending), CMO (OG image swap later).

## 2026-07-04 — Visual direction v4: illustrated ink+watercolor system (founder decision)

**Context:** Founder reviewed the shipped code-driven visuals against a hand-drawn ink+watercolor honeycomb reference and chose to REPLACE the visual layer with AI-generated illustration in that style, founder-generated from CEO-authored prompts; motion delivered as short videos cut to frames (load-play for hero, scroll-scrub for C7).
**Decision:** (1) Brand-lock A1 AMENDED — illustrated naturalistic bees allowed at hero scale (no cartoon faces; the abstract device stays the filed mark). (2) AI image/video generation APPROVED for brand art with founder-in-the-loop; the anti-slop defense moves from "code-only assets" to the locked style system + founder curation. (3) Code-driven layer retained for UI chrome, logotype, yellow underline, and SSR text — illustrations never carry load-bearing copy.
**Reversibility:** reversible (assets swappable; code visuals remain in git history).
**Owner:** founder (adam) · CEO executes
**Affects:** Design-Lead (style lock = docs/05-marketing/ART_DIRECTION_PROMPTS.md), CTO (frame-scrub pipeline, perf gates re-verified on integration), QA-Lead (palette audit on raster assets at next gate).
**Detail:** docs/05-marketing/ART_DIRECTION_PROMPTS.md

## 2026-07-04 — Landing MERGED to main: QA-Lead PASS (independent, full tier)

**Context:** Founder directed "do it all" + a quality bar raise against reference sites (Diamo/Anthropic/Ramp/paper-cut). Three quality waves ran: composition/editorial grammar, independent design-critic remediation (verdict NEEDS_WORK → all P1/P2 resolved), and a material visual-craft pass (comb with wall thickness + honey pools, stacked-paper C7 tiles, glowing keystone room).
**Gate:** QA-Lead retry (first spawn died on account limit) returned **PASS — 0×P1, 0×P2, 2×P3** (both fixed). Founder confirmation standing. Merged `3eba843` (111 files), pushed to origin.
**Measured at merge:** LH mobile 97 perf / 100 a11y · real-trace LCP 0.67s · CLS 0 · INP 40ms · e2e 18/18 · brand-lint 0.
**Reversibility:** revert-able merge commit; site remains LAUNCH-HELD (TM clearance + founder gates: photography, credential microlines, booking link/hello@ mailbox, native-HE review).
**Owner:** ceo
**Affects:** CTO (deploy to staging when ready — apps/web, `pnpm build`); CMO (HE adaptations D4 + C7 proof-line wording review); founders (launch gates above); Design-Lead (bee-visibility beyond dots requires amending brand-lock A1 — open founder proposal).
**Detail:** apps/web/BUILD_LOG.md · docs/08-agents_work/sessions/2026-07-04-ceo-landing-fable5.md

## 2026-07-04 — Landing build SHIPPED on feat/landing-fable5 (staging; QA + founder gate open)

**Context:** The single Fable-5 designer session ran per the 2026-07-03 brief v2 (founder chose "build in this session"; effort max). Full page built at `apps/web`, all §7 hard gates measured green.
**Decision (implementation-level, D1–D8 detailed in `apps/web/BUILD_LOG.md`):** app lives at `apps/web` (repo root is the agent-kit package); 7-token allowlist resolved = ground/ink/yellow/panel/deep/hairline/**muted** with pure white dropped; Tailwind default palette/shadows/animations deleted at `@theme` (Constitution is compile-time); C7 proof lines render statically (no `<details>` expand) so JS-off/AI crawlers see all 11; C7 mobile = hive ledger, no pin (floor protection); fonts via `@fontsource-variable/rubik` copied to `public/fonts`; C5 badge renders only from measured `public/scores.json` (LH 13.4: perf 97 / a11y 100). Flourish shipped: "the hive tightens" at keystone lock.
**Measured:** real-trace LCP 668ms / CLS 0.0026 (slow-4G + 4× CPU, 390px) · INP worst 40ms · C7 scrub 60fps at 4× CPU · e2e 18/18 · brand-lint 0/33 files.
**Reversibility:** fully — branch only, NO merge (QA-Lead PASS + founder confirmation required; risk tier full).
**Owner:** ceo (Fable-5 build session)
**Affects:** QA-Lead (review next: branch feat/landing-fable5, evidence in BUILD_LOG + build-evidence/); CMO (HE adaptations D4 + C7 proof-line wording review); founders (launch gates: credential microlines, photography, booking link/hello@ mailbox, TM clearance, native-HE device review); CTO (deploy only after gates).
**Detail:** apps/web/BUILD_LOG.md · docs/08-agents_work/sessions/2026-07-04-ceo-landing-fable5.md

## 2026-07-03 — Design Excellence Board: build-enablement playbook + motion posture refined + brief v2

**Context:** 16-agent board meeting (7 designer/enablement personas → cross-critique → synthesis → reference capture) on how to make the site award-grade + selling + on-brand + non-slop, and how to set up the autonomous Fable-5 build for max quality. Playbook: `docs/05-marketing/DESIGN_EXCELLENCE_PLAYBOOK.md`.
**Key decisions (refine the prior "have-both" motion entry):**
- **Motion tech narrowed:** Canvas-2D + GSAP/ScrollTrigger is the **required default**; **Three.js/R3F BANNED** unless prototype-proven ≥90 mobile Lighthouse first (OGL ~9kb the only gated WebGL ceiling; Lenis gated on INP). Hard hero JS <15kb. Supersedes the brief's "GSAP and/or Three.js welcome."
- **Signature idea:** ONE motif, THREE chapters (hero scatter→converge→rest · C7 release→build scroll-scrubbed · dark rested hive), continuity via **parametric identity** not shared state. **The KEYSTONE** = single yellow GEO anchor cell locks LAST; ~40% of polish budget.
- **Autonomy setup (founder's ask):** brand encoded as **executable code** (`brand.lock.ts` + `brand-lint` build-failing gate); a labeled **NEGATIVE reference set** (strongest anti-slop move); **Charter of Autonomy** (invent one flourish, log deviations, stop-and-propose on invariants); **evidence-mandatory** build→screenshot→score→fix loop; grant Playwright+Refero+WebFetch, exclude generative-UI/raster-gen MCPs; Fable 5 max thinking, 1M ctx, no /compact.
- **Resolved calls:** build C7 standalone first; photography = LAUNCH gate not build gate; C5 badge = real measured artifact or dropped; mandatory brand-voiced category eyebrow above the locked H1.
- **Reference pack captured** → `docs/05-marketing/references/` (12 PNGs + REFERENCES.md). **Brief rewritten to v2** with all 21 edits: `docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md`.
**Reversibility:** reversible (internal staging build; launch-held; no merge without QA-Lead PASS).
**Owner:** ceo (design-excellence board synthesis)
**Affects:** the Fable-5 build session (brief v2 governs); founders (8 pre-session to-provides in playbook §6 — esp. reference annotations + negative set, logotype SVG, Rubik HE subset, category eyebrow, credential microlines); Design-Lead (playbook supersedes v3 doc's motion notes); QA-Lead (rubric §7/§8 = the merge bar).
**Detail:** docs/05-marketing/DESIGN_EXCELLENCE_PLAYBOOK.md

## 2026-07-03 — Build path: single Fable-5 designer session + motion posture revised to "have-both"

**Context:** Founder moved from planning to building the landing page; wants awwwards-grade craft, chose to run it as ONE Claude Code designer session on the **Fable 5** model (`claude-fable-5`) using a paste-ready brief (not the CTO worker swarm).
**Decision:** (1) **Motion posture revised** from the v3 "no GSAP/Three.js in v1, minimal-motion" note → **"have-both, disciplined":** GSAP and/or Three.js are allowed for the C7 channel-map + transitions, BUT **LCP = hero H1 in SSR text, heavy libs dynamically imported + lazy below the fold, prefers-reduced-motion rested fallback, and mobile Lighthouse perf ≥ 90 / a11y ≥ 95 / LCP < 2.5s / CLS < 0.02 as hard acceptance gates.** (2) Build via a single Fable-5 session; brief at `docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md`. (3) Founder photography deferred — build uses hex-cell avatar placeholders, no photo dependency. (4) Scope EN-first, RTL/i18n-ready (logical CSS), HE content a fast-follow.
**Rationale:** Founder wants award-winning wow; the discipline gates keep the site from refuting the visibility Beeond sells. Single-session Fable-5 build is a founder-directed execution path.
**Reversibility:** reversible (internal staging build; still launch-held on TM clearance; no merge to main without QA-Lead PASS).
**Owner:** ceo (founder decision)
**Affects:** the Fable-5 designer session (brief); CTO/QA-Lead (QA-Lead PASS required before any merge — build lands on a feat branch only); Design-Lead (v3 doc's "no heavy libs in v1" note is superseded by this posture).
**Detail:** docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md

## 2026-07-03 — Brand-craft revision (v3 direction) + layered hero direction locked

**Context:** Founder grilling session on design/brand craft ("show professional"), then a 39-agent think-only exploration workflow on hero/landing concept directions (report: `docs/05-marketing/HERO_CONCEPT_EXPLORATION.md`). Founder supplied live references (Anthropic=closest, Bumble=colors, Ramp, Diamo) and three hero seed visions.
**Decision — brand craft (revises BRAND_AND_LANDING_DESIGN.md v2 → needs v3):**
- **Concept:** stay "Warm Hive Futurism" but **hex-forward** — hexagon/honeycomb is the owned system; the literal bee is **minimized to a small abstract device** (favicon/avatar scale), **no cartoon mascot**. Cartoon bee retired.
- **Logo:** split — everyday = clean **`Bee⬡nd`** logotype (single hex-"o"); filed/small device = honeycomb cell with a minimal abstract bee. Drop the "ee"-cells ligature.
- **Palette (CHANGED from cream/honey/espresso):** warm off-white **#FAF9F5** ground · near-black **#141413** ink · ONE warm-yellow accent **#FFDB5B** (Bumble hue; fill/highlight only, never body text) · cream **#F0EEE6** moment panels · optional true-black moment sections · black-pill CTAs. Espresso-forward ~90/10 ratio.
- **Type (CHANGED):** **Rubik only** (HE+EN parity), all-sans, **monospace/Geist Mono DROPPED entirely**. Hero H1 = Rubik 700 bold+tight, left-aligned, one key word yellow-underlined (static-first CSS).
- **Motion:** swarm converges **once, then rests** (no perpetual loop). Layout: asymmetric left-aligned editorial, confident-restrained (~variance 6), validated by refs.
**Decision — hero/landing direction (founder chose "the combination"):** ship a LAYERED site, not one concept: **C8 restrained fast SSR hero + founders as proof up top → C7 code-driven honeycomb channel-map as mid-page scroll spine (= the relocated "bees building the hive" storyline) → C6 answer-engine proof block near conversion → C5 build-time "we grade ourselves" trust badge.** Engineering rule: **LCP = the H1 SSR text; all motion is progressive enhancement; 95+ PageSpeed target** (the site must prove the visibility Beeond sells). Seed verdicts: robotic-bees Blender scroll = **MODIFY** (keep storyline, swap Blender-video → code-driven procedural hex-build, relocate off LCP hero, revisit cinematic as award-grade v2); bee-character narrator = **DROP**; conventional hero = its LCP=H1 rule survives as the foundation.
**Rationale:** Weighting customer-trust + visibility highest (this is a launch-held B2B site whose pitch IS visibility); a spectacle hero that tanks CWV/SEO refutes the product. References pulled warm→crisp (white/yellow/black) while keeping Anthropic's warmth via off-white not pure white.
**Reversibility:** reversible (pre-launch; design-only, still launch-held on TM clearance).
**Owner:** ceo (founder decisions)
**Affects:** Design-Lead (revise BRAND_AND_LANDING_DESIGN.md to v3: palette, type, hex-forward logo, motion); CMO (hero copy already locked — unaffected; anti-slop copy is now load-bearing); CTO Phase-0 gates before any build (self-host+subset Rubik HE+EN, C7 map prototype, LCP=H1, JSON-LD/llms.txt, budget manual craft-polish cycles); founders (commission editorial founder photography — launch-blocking; approve Playwright MCP via `/mcp`).
**Detail:** docs/05-marketing/HERO_CONCEPT_EXPLORATION.md

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
