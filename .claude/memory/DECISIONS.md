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

## 2026-09-02 — SITE STORYBOARD 1.0: the site's ask, status, fold and record decided; text-first Phase 1 closed for founder review (FOUNDER-decided, five items; orchestrator-run rounds)

**Context:** After the one-run build was rejected the same morning, the founder opened a text-only thinking session: decide what the site says and what the visitor goes through before anything is designed. Pre-flight, R0 frame, an eleven-question grill, three parallel framers plus a sourcer (R1), a candidate map, a spine with full provisional text (R2, three passes), a journey walk per arrival state (R3), a review under `customer-value` + `risk`, and one consolidated v3. Mid-session the founder moved the loop to the end: *"go with your vision and the agents' thinking; I review the final outputs and edit the text."*
**Decisions (founder), in sequence, each taken with the orchestrator's recommendation in view:**
1. **The ask is a free footprint audit**, not a booked call — the four-part audit of `04-THE-PRODUCT.md` §7, founder-prepared, in kind, never in number. Override.
2. **Delivery is two-step**: submit URL + email → audit prepared and sent → invited to a call. Override.
3. **Nav CTA = the audit, one label site-wide; the waitlist is retired.** Accepted. Supersedes the "book a call · waitlist fallback" line of the 2026-08-26 lock — logged as deliberate.
4. **Honest status is implied only** — no sentence says "we're new" or "no clients"; the named founders, the absence of logos and the method shown in full carry it. Override; risk stated once in the storyboard.
5. **Fold = outcome first; the swarm and the human arrive at section two.** Override. Also accepted: the monthly record promised as a practice, never a product · founders named with roles, one verifiable fact each supplied by the founder before Phase 2 · pricing as one sentence of how, no figure · the language/market slot stays OPEN.
**Also founder-stated and recorded:** the vibe (expensive, technology, minimalistic, futuristic, clean, human; bee, flowers, ink, ASCII and dot layers, numbers as texture, human and sky) and the instruction to write the UX laws into the plan — both in the storyboard §0.8b / §0.9.
**Rationale:** founder calls, taken fast, on complete proposals. None reopens G0/G1; the design language is untouched.
**Reversibility:** reversible — one markdown document, tier lite, no code, nothing public. The storyboard is marked NOT A DESIGN and NOT PLAN OF RECORD; per `CLAUDE.md` no direction is locked without a customer signal, and none has been earned. Two warm prospects remain un-called.
**Owner:** founder, via `orchestrator` (orchestrator-site-thinking)
**Affects:** Phase 2 (`designer`, `framer` [design], `reviewer` craft/accessibility) — its single input is `docs/05-marketing/SITE-STORYBOARD.md` 1.0 and its prerequisites are in §4 · `builder` (form endpoint, confirmation copy carrying the turnaround expectation, the direct-booking destination) · the founder (credential facts before the first referral link; audit capacity before non-referral traffic; the monthly record in deliverable form before the first signed engagement).
**Review verdict, recorded honestly:** `customer-value` FAIL on two high findings (a missing simulated/provisional banner on the journey; the unwired booking bypass absent from the priority list), both closed on the file the same hour; `risk` PASS with three high modes carried as founder triggers. Single model family, not an independent panel. No binding QA gate was invoked: nothing merges to `main`.
**Detail:** `docs/05-marketing/SITE-STORYBOARD.md` (1.0) · `docs/08-agents_work/packets/2026-09-02-r1-*.md` (four) · `docs/08-agents_work/handoffs/2026-09-02-phase-2-visual-experience-handoff.md` (DRAFT until the percent) · session `docs/08-agents_work/sessions/2026-09-02-orchestrator-site-thinking.md`

## 2026-09-02 — ONE-RUN WEBSITE BUILD REJECTED; BACK TO PLANNING, FOUNDER WRITES THE VISION (FOUNDER-decided)

**Context:** After a `/grill-me` session the founder asked for a single Fable 5.1 run to build the whole marketing site. `builder` (fable-website-build) delivered it on `feat/website-fable`: 13 commits, four pages, the two renderers, a typed content layer, and 24 full-page renders under three photographic visions (Open Field · Night Studio · Overcast Coast). The 24 photographs were generated from the parent session via Higgsfield `soul_2` (3 credits) after the OpenAI key returned `429 insufficient_quota`. Every check the builder ran was green; QA verdict was PENDING, nothing reached `main`.
**Decision (founder), by eye, on the live site and the renders:** **"I don't like the designs."** The build is deleted — branch, generated photographs, web assets, renders, session file — and the process returns to planning. **The founder writes the site's main things himself first**; the team then develops from that, adds sections, and plans the site from there.
**What is KEPT, by explicit instruction:** the whole G0/G1 design brain — `DESIGN-LANGUAGE.md`, `WEBSITE-DESIGN-PROCESS.md`, `ART-DIRECTION-BRIEF.md`, `FOUNDER-REFERENCE-NOTES.md`, the indexed reference corpus under `references/` (152 images on disk), the 2026-08-26 session record, `LONG-TERM.md`, and every earlier DECISIONS entry — plus the G2 spine packet (`docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md`) and the G2 plan file, which are planning, not design output.
**What is GONE:** `feat/website-fable` (was `4d3ff5b`; recoverable from reflog for a while, then not) · `apps/web/art-src/`, `apps/web/public/images/`, `apps/web/build-evidence/` (moved to the session scratchpad, not the repo) · `VISIONS.md` · `ROLE-ASSIGNMENTS.md` · `g4-visions/`. `apps/web` is the 111-line shell again.
**Rationale:** Founder judges by eye and reacts only to finished work; this was finished work and it did not land. No argument was made against the call.
**Reversibility:** the deletion is irreversible once the reflog expires; the decision to return to planning is reversible at any time.
**Owner:** founder, via `team-lead`
**Affects:** G2/G3/G4 — all reopened. The 2026-09-01 "G3 = Higgsfield" entry is not revoked, but nothing currently depends on it. The next input is the founder's own written vision, not an agent brief.
**Recorded once, not to be repeated:** this is the eighth website direction built and set aside since June (v3–v7, G1's eleven mockups, and now this). The rule that matters in `CLAUDE.md` — no direction locked without a customer signal — was not violated, because nothing was locked; but the tempo is the same. Two warm prospects remain un-called.
**Detail:** the session transcript; no session file survives for the build itself.

## 2026-09-01 — G3 PRODUCTION METHOD: Higgsfield + an image AI model (FOUNDER-decided)

**Context:** G2 (SHAPE) planning surfaced the production method for G3 (the full mockup set) as an open question. `orchestrator` had recommended a different combination — a machine-enforced design system generated from `DESIGN-LANGUAGE.md`, with Higgsfield demoted to photography and set-piece video only — on the reasoning that G1's failure was a prose-prompted image model collapsing to one reference's world rather than the locked combination.
**Options considered:** Stitch carrying the design system from `DESIGN-LANGUAGE.md` (recommended by `orchestrator`) / a Figma library built from the same file, highest fidelity and highest setup cost / **Higgsfield with an image AI model** (chosen).
**Decision (founder):** **G3 produces mockups with Higgsfield and an image AI model.** Not Stitch, not Figma. This is settled input, not a recommendation awaiting evaluation.
**Rationale:** Founder call. The `orchestrator` recommendation and the G1 precedent were both stated before the decision was taken; the founder decided with them in view.
**Reversibility:** reversible — no code, no tokens, no design artefact is affected. It selects the tool G3 renders with.
**Owner:** founder, via `team-lead`, relayed to `orchestrator` (orchestrator-g2-shape)
**Affects:** G3 (`designer` produces the full mockup set on this method) · `orchestrator` (production method is no longer a G2 gate item; the G2 gate carries shape only).
**The risk this carries, stated once and logged — not to be repeated at every gate:** Higgsfield is the method that produced G1's eleven mockups, each of which the founder judged as *one reference's world* rather than the locked combination. The mitigation is not a different tool; it is that **G2's role assignments bind each of the 7 signature moments to exactly one section**, so no generator is ever asked to invent the combination — it is asked to render one section carrying one named moment. The G3 method note in the session file records the four controls: condition on reference images rather than prose alone; full-fidelity full-page only; run the critique loop G1 skipped; verify accent tokens mechanically, never by eye (`#57B295` on bone `#F0EDE6` is 2.19 : 1 and fails).
**Known constraint, not a reopening:** no engine can reach an MCP server — every `tools:` list in `.claude/agents/` is a closed enumeration with zero `mcp__*` entries. Higgsfield is therefore reachable from the parent session only, not from `designer`. Two honest options exist and neither is chosen here: the parent session drives generation and hands files to `designer` for the perception loop, or the founder authorises a tools-list change (`.claude/agents/**`, irreversible tier). Does not block G2.
**Detail:** `docs/08-agents_work/sessions/2026-09-01-orchestrator-g2-shape.md` §5


## 2026-09-01 — RUN G2 (SHAPE) NOW, over the orchestrator's own ranking (FOUNDER-decided)

**Context:** `orchestrator` opened the session with a state briefing and ranked the highest-leverage next moves. It placed G2 **fourth**, behind calling the two warm prospects, repairing the harness gate, and commissioning the trademark search — on the reasoning that everything downstream of the ICP is still unvalidated after seven superseded directions and zero customer interviews.
**Options considered:** call the two warm prospects first (ranked #1 by `orchestrator`) / repair the harness gate first (#2) / **run G2 SHAPE now** (#3 by `orchestrator`, chosen by the founder) / commission the trademark search (#4).
**Decision (founder):** **Run G2 SHAPE now.** The ranking was seen, including the explicit statement that G2 was the fourth-best use of the session, and G2 was chosen anyway.
**Rationale:** Founder call, taken with the recommendation in view. This is the knowing sequencing override the handoff predicts and the project's own history documents; it is logged here as deliberate rather than as an oversight, per `HANDOFF-CLEAN-START/05-WHERE-WE-STAND.md` §8 item 5 and the 2026-08-26 entry's "Founder overrides, logged as deliberate" line.
**Reversibility:** reversible — G2 produces two markdown documents and a typed content layer, all tier `lite`. Every artifact is marked **SHAPE PROPOSED — NOT PLAN OF RECORD**, so nothing is locked and nothing is shipped to a customer.
**The rule it does NOT violate, and why that is not a technicality:** *"No direction gets locked and shipped without a customer signal earned since the last one closed."* Producing a spine is exploration; treating it as the plan of record is the locking. The SHAPE PROPOSED markers are the mechanism keeping those apart, and they are the reason this is authorised rather than a repeat of the documented failure.
**Not authorised in the same session, stated so the scope is unambiguous:** the harness gate repair · the trademark search · any edit to `.claude/settings.json`, `.mcp.json`, `CLAUDE.md`, `.github/workflows/ci.yml`, `.claude/lenses.yml`, `scripts/run-checks.mjs` or `.claude/agents/**`. Reported on, not touched.
**Owner:** founder, via `team-lead`, relayed to `orchestrator` (orchestrator-g2-shape)
**Affects:** `framer` `designer` `builder` `reviewer` (all dispatched under G2) · the decision queue in `HANDOFF-CLEAN-START/05-WHERE-WE-STAND.md` §7, whose items 1-5 remain open and unaddressed by this work.
**Still open and untouched by this decision:** ICP · offer and service catalog · pricing · trademark · market sizing · the two un-called warm prospects.
**Detail:** `docs/08-agents_work/sessions/2026-09-01-orchestrator-g2-shape.md`

## 2026-08-26 — WEBSITE DESIGN PROCESS + DESIGN LANGUAGE locked

**Context:** Founder opened the marketing-site work: plan → references → design → build, at the highest craft grade. Session was scoped to the *process*, then grew to cover G0 (the reference read) and the design language itself.
**Options considered:** three-directions-pick-one (rejected mid-session by the founder — produces a site that looks like one reference) / **a design language assembled from parts, with a usage budget per element** (chosen) / defer everything to a build session (rejected — the documented failure mode).
**Decision:**
1. **Five gates** — G0 read · G1 direction · G2 shape · G3 full set · G4 live — plus a binding QA gate the CEO cannot override.
2. **Consistency by budget:** once = a moment, twice = a style, everywhere = the through-line. This is what lets a dozen reference worlds coexist without reading as a scrapbook.
3. **Through-line:** real documentary photography with the technological layer dialled subtle-to-dramatic. Humanity constant, tech variable.
4. **Invariants:** alternating bone/black grounds · photography owns colour · one accent, CTA only, **two tokens bound to chapter** · Instrument Serif / Schibsted Grotesk / IBM Plex Mono · gutter-only separation · no borders, no shadows, no glass.
5. **Seven signature moments**, each used exactly once; nine catalogued alternatives explicitly not used.
6. **Photography invariants** — shape bound to the photograph's *job*; edge is mosaic dissolve, so photographs obey the same physics as marks.
7. **Scroll set-piece** — Higgsfield video → frames → treated through the site's own mark renderer → GSAP scrub. ≤90 frames, ≤1.5MB, below the fold, must clear `scrub-fps.mjs` at 4× throttle.
**Rationale:** the founder's correction is the load-bearing one — a monolithic style pick produces a derivative site; a budgeted system produces a combination. Every invariant is backed by measurement (WCAG computed, attention rhythm counted across six real sites) rather than assertion.
**Reversibility:** reversible — docs only, no code touched.
**Owner:** ceo (ceo-website-design-process)
**Affects:** Design-Lead + product-designer (build against `DESIGN-LANGUAGE.md`, not against references directly) · CMO (copy lives in a typed content layer, never inline) · CTO (GSAP + frame-sequence payload is a binding perf risk) · QA-Lead (engineering floor unchanged: LH ≥95, LCP <1s, CLS 0, zero axe).
**Founder overrides, logged as deliberate:** customer calls deferred until after launch · AI mockups before code · **no supersession brake** · no deadline.
**Detail:** `docs/05-marketing/DESIGN-LANGUAGE.md` · `WEBSITE-DESIGN-PROCESS.md` · `references/ART-DIRECTION-BRIEF.md` · session `docs/08-agents_work/sessions/2026-08-26-ceo-website-design-process.md`


## 2026-08-26 — CONTEXT DECONTAMINATION: dead-direction context cut from the repo

**Context:** Founder killed every prior website — *"All previous websites… we cannot use them any more — we need to start over."* The forward plan is: plan → references → design → build a new marketing site at top design/conversion grade → marketing → leads to a waitlist/book-a-call → product after. The 2026-08-08 reset had been deliberately **additive** ("nothing deleted, no existing doc edited"), so the handoff was correct while everything around it still instructed agents to do the dead work. Direct audit found: `docs/08-agents_work/INDEX.md` still listing "Website v7 Phase 3 — READY TO START" as task #1 with a paste-ready CEO trigger; ~2,000 of 2,076 markdown files sitting in three near-duplicate agent trees; `package.json` still the GSA-Vibe-Startup-Kit manifest; `AGENTS.md` routing to 18 agents that do not exist; `LONG-TERM.md` asserting a settled ICP; `USER-INSIGHTS.md` still holding the three personas the reset stripped.
**Options considered:** leave it additive and rely on agents reading the handoff first (rejected — six weeks of evidence says they read what is nearest) / archive everything in-tree (rejected for the duplicate trees: files agents can still Grep are files agents still read) / **delete the dead, archive the historical, rewrite the wrong** (chosen) / total clean-slate rebuild of the repo (rejected — throws away a working agent system and real research).
**Decision (founder, via structured yes/no on each bundle):**
1. **Deleted** `.agent/` (695 files, a byte-identical mirror) and `new agents-skills-workflows-system/` (700 files, another company's kit — handoff 05 §6 names it the traced source of a phantom brand system in five design agents). −1,395 files, −236,437 lines.
2. **Stripped** `apps/web` to an instrumented Next 16 shell: v6 content, components, art, `brand.lock.ts` and 126 build-evidence screenshots removed; Next/Tailwind/Playwright config and the `scripts/` measurement harness kept. −163 files.
3. **Cut** all Beeond design output in `docs/05-marketing` (v7 Blueprint kit, brand-assets, 5 design/brand docs, ~51MB); **kept** the external site captures and the anti-slop negative set for the new reference phase; **relocated** the 3 desk-research files to `docs/02-competitive/`.
4. **Rewrote** `package.json`, `README.md`, `CLAUDE.md`, `AGENTS.md` to describe Beeond rather than the upstream agent kit.
5. **Rewrote** `docs/08-agents_work/INDEX.md`; **archived** 28 pre-reset session/brief/board files to `docs/07-history/pre-reset-archive/`.
6. **Fixed** all four memory files (this entry's own log included).
**Explicitly KEPT by founder ruling:** `war-room/` + `war-room-dashboard/`; the kit machinery (`bin/`, `scripts/`, `guides/`, `TEMPLATE-USAGE`, `CONTRIBUTING`, `CHANGELOG`, `SKILLS_SOURCE`) — now banner-flagged as not-about-Beeond; ~20 unfilled generic-SaaS template docs; all 25 `war-room` agent definitions (17 of which depend on Linear/Supabase/Mem0/Inngest/Telegram that do not exist); the user-global `~/CLAUDE.md`.
**Rationale:** the documented failure mode is a decision loop that kept building on unvalidated direction. Context that instructs an agent to resume a dead direction is the mechanical version of that failure. Deleting rather than archiving the duplicate trees matters because Grep-reachable is agent-reachable.
**Reversibility:** fully reversible — git tag **`pre-clean-start-2026-08-26`** (pushed to origin) restores any deleted path via `git checkout pre-clean-start-2026-08-26 -- <path>`.
**Owner:** ceo (ceo-1-1787747601)
**Affects:** every agent — `CLAUDE.md`, `AGENTS.md` and the memory files are the session-load context · Design-Lead/CMO (the new site starts from `docs/05-marketing/references/`, no inherited direction) · CTO (`apps/web` is a bare shell; `brand-lint.mjs` is dormant until a new brand lock exists).
**LATE FINDING — the largest single item, missed on the first pass.** A parallel audit found a **second, complete and different company identity** hardcoded in the live `.claude/agents/` files — 105 hits across 27 files (23 of which needed edits), invisible to a grep for the v3–v7 palette because it is a different palette: accent `#3370FF`, Inter/InterDisplay/Fraunces/Geist Mono, pricing "Discover $79 / Build $189 / Scale $499" sourced to a "Paddle pricing config", ICP "SMB owner, 10-50 employees, $1-10M ARR", and a product that is a "GEO platform for AI search visibility" with `/start-scan` and scan scores. Enforced by checklists ("Primary accent is #3370FF (not orange, not navy, not cyan)") and hard rules ("DO NOT reference Stripe. Beeond uses Paddle exclusively."). The three documents the agents are told to read for it — `docs/BRAND_GUIDELINES.md`, `docs/PRODUCT_DESIGN_SYSTEM.md`, `PROJECT.md` — **do not exist**, so the inline values were the only source of truth an agent would find. This is the "phantom third brand system" that handoff 05 §6 believed had been killed on the sibling branch; it had not — it was live in every design, product, pricing, marketing, customer and research agent. All 105 assertions replaced with explicit OPEN statements. **Lesson for future audits: grep for the shape (hex codes, `$` figures, "locked", ICP nouns), not for the specific values you already know about.**

**Verified:** `pnpm build` ✓ · `pnpm lint` ✓ · playwright 2/2 ✓ · all 154 skill-manifest paths resolve · all 51 agent references in AGENTS.md resolve · md files 2,076 → 762 · `docs/` 114MB → 63MB.
**Detail:** `docs/08-agents_work/sessions/2026-08-26-ceo-context-decontamination.md`


## 2026-08-08 — CLEAN-START RESET: execution decisions re-opened; 5-file handoff written

**Context:** Founder: "I don't like the way that we are continuing in this project." Three parallel scout agents measured the state of the repo before any decision was taken. Findings: 2,070 markdown files; ~120,000 lines of agent framework + docs against ~6,766 lines of product code (18:1); **no database of any kind** (zero `.sql`, zero migrations, zero `supabase/` — Supabase exists only inside agent instruction files); product surface is one landing page on a Vercel *preview*, no auth/API/app; 7 locked website directions in 14 days (v3→v7), ~2-day average lifespan, **0/7 → revenue**; zero customer interviews and both warm prospects still un-called; `main` frozen at the 2026-07-14 PAUSE commit; root `package.json` still named `gsa-startup-kit`; `CLAUDE.md` Project State still the day-one placeholder across all 64 commits.
**Options considered:** Process reset only (same strategy, cleaner execution) / re-open the execution decisions / near-total clean slate / reset the business shape (agency vs product).
**Decision (founder):** **Re-open the execution decisions.** Seven sub-decisions, taken via structured grilling:
1. Keep the germ — Beeond, the swarm thesis, the HE+EN B2B footprint agency shape. Re-open offer, tiers, pricing, service catalog, build sequence. The business *shape* (done-for-you agency) is NOT re-opened.
2. **ICP is genuinely open** — three live candidates carried forward with the evidence for each: B2B/SaaS (all foundation docs), Hebrew-market lead-gen (Bonim Atid — the only real delivered work), international-startups-English-only (2026-08-06).
3. The new project **keeps** the agent + skill system. No tooling post-mortem in the handoff; the documented failure is a decision-loop failure, not a tooling failure.
4. The 2026-08-06 "international startups, English only" call was **site-scope, not company-scope.** The company remains **HE+EN bilingual**; the site goes English-first. Confirmed by that entry's own wording — "Hebrew is not in scope for *this build*."
5. Five topic-split files, each standalone.
6. **Strip all guesses.** A claim ships only if FOUNDER-decided, SOURCED (URL + date + confidence), MEASURED, or METHOD. Every untested number was cut and replaced with the method for deriving it.
7. Output at `HANDOFF-CLEAN-START/` in the repo root.
**Rationale:** Six weeks produced 2,070 docs, seven website directions, and zero revenue — the decisions were never the bottleneck, so preserving them buys nothing. The strip rule targets the specific observed mechanism by which the project stalled: agent estimate → repeated across docs → treated as fact → locked → superseded. Cut numbers include tier prices, gross margin, LTV, churn, capacity model, and all three synthesized personas.
**Reversibility:** reversible — nothing deleted, no existing doc edited. The prior corpus stays intact on this branch; the handoff is additive.
**Owner:** ceo (ceo-clean-start-handoff)
**Affects:** the new project (these 5 files are its entire inherited context) · any future CPO/CBO work (pricing and catalog must be re-derived, not looked up) · Research-Lead (market sizing has never been attempted — method supplied, number owed).
**Open blockers recorded in the handoff:** ICP undecided (blocks offer → pricing → positioning) · trademark clearance never completed (MEDIUM risk: exact-spelling Brazilian advertising agency in Class 35, plus two phonetic twins; six registries never queried) · `beeond.ai` unsecured · no TAM/SAM/SOM ever attempted.
**Detail:** `HANDOFF-CLEAN-START/` (01-THE-IDEA, 02-THE-PROBLEM, 03-THE-MARKET, 04-THE-PRODUCT, 05-WHERE-WE-STAND); session `docs/08-agents_work/sessions/2026-08-08-ceo-clean-start-handoff.md`
