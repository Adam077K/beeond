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
**LATE FINDING — the largest single item, missed on the first pass.** A parallel audit found a **second, complete and different company identity** hardcoded in the live `.claude/agents/` files — 105 hits across 29 files, invisible to a grep for the v3–v7 palette because it is a different palette: accent `#3370FF`, Inter/InterDisplay/Fraunces/Geist Mono, pricing "Discover $79 / Build $189 / Scale $499" sourced to a "Paddle pricing config", ICP "SMB owner, 10-50 employees, $1-10M ARR", and a product that is a "GEO platform for AI search visibility" with `/start-scan` and scan scores. Enforced by checklists ("Primary accent is #3370FF (not orange, not navy, not cyan)") and hard rules ("DO NOT reference Stripe. Beeond uses Paddle exclusively."). The three documents the agents are told to read for it — `docs/BRAND_GUIDELINES.md`, `docs/PRODUCT_DESIGN_SYSTEM.md`, `PROJECT.md` — **do not exist**, so the inline values were the only source of truth an agent would find. This is the "phantom third brand system" that handoff 05 §6 believed had been killed on the sibling branch; it had not — it was live in every design, product, pricing, marketing, customer and research agent. All 105 assertions replaced with explicit OPEN statements. **Lesson for future audits: grep for the shape (hex codes, `$` figures, "locked", ICP nouns), not for the specific values you already know about.**

**Verified:** `pnpm build` ✓ · `pnpm lint` ✓ · playwright 2/2 ✓ · all 154 skill-manifest paths resolve · all 51 agent references in AGENTS.md resolve · md files 2,076 → 778 · `docs/` 114MB → 63MB.
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
