# Beeond — Project Context
*Auto-loaded by Claude Code on every session.*

> **Source of truth: [`HANDOFF-CLEAN-START/`](HANDOFF-CLEAN-START/)** — five files, read in order. Nothing in this repo overrides them. If something here contradicts them, they win and this file is wrong.

---

## What Beeond is

A done-for-you marketing and growth service: a swarm of AI agents executes at speed and scale, a client-facing transparency dashboard shows exactly what was done / at what volume / and why, and a human oversees the process for quality. Two founders: **Adam** (systems, agent swarms) and **Yarden Morgan** (marketing and growth; calibrates everything client-facing — "drafted by the swarm · calibrated by Yarden").

## Honest state — 2026-08-26

- **No revenue, no signed clients, zero customer interviews.** Two warm prospects still un-called.
- **No product.** No database (zero `.sql`, no `supabase/`), no auth, no API routes, no billing, no dashboard.
- **The marketing site is being rebuilt from scratch.** `apps/web` is an empty instrumented Next 16 shell. Every prior direction (v3–v7) is retired.
- `beeond.ai` unsecured. Trademark **MEDIUM risk, never cleared** — gates any public launch.

### Open — never state these as settled

**ICP** (two branches: B2B/SaaS/tech, or Hebrew-market lead-gen) · **offer and service catalog** · **pricing and tiers** · **language/geography scope** · **market sizing**.

The ICP blocks offer → pricing → positioning. It is resolved by interviewing the two warm prospects, not by more desk research.

### The rule that matters

Seven website directions were locked and superseded in 14 days; none reached a customer. (The handoff is careful here: v3–v6.2 were partly amendments to one evolving surface, so the precise count is looser than seven separate builds — the *tempo* is the undisputed part.) **No direction gets locked and shipped — merged, put in front of a customer, or treated as the plan of record — without a customer signal earned since the last one closed.** This does not restrict exploration, sketching, or cheap tests framed as tests.

### Evidence discipline

A claim ships only if **FOUNDER-decided**, **SOURCED** (URL + date + confidence), **MEASURED**, or **METHOD**. Every untested number was stripped from the handoff and replaced with the method for deriving it. Do not reintroduce estimates as facts.

---

## Current focus

- **Now:** plan → gather references → design → build a brand-new marketing website at the highest design, quality and conversion grade.
- **Then:** marketing — put Beeond's thinking in front of the market and read the reaction.
- **Then:** collect leads into an internal waitlist / book-a-call.
- **After (or in parallel, but second):** the product — agent system and the transparency dashboard, which is day-one offer scope and build target #1.
- **Blockers:** ICP undecided · trademark uncleared · `beeond.ai` unsecured.

---

## The Team

> **Superseded 2026-08-31.** This section described a 3-layer org: CEO, then eight C-suite and lead roles,
> then seventeen workers. Those layers no longer exist as agent roles. What replaced what is in
> [AGENTS.md §What replaced what](AGENTS.md); the old names all still resolve, as shims.

Every task starts at `orchestrator`. This project runs on **seven engines**, and domain expertise is a
**lens**, not an agent.

| Engine | Distinct because |
|--------|-----------------|
| **orchestrator** | Entry point — owns state and the human boundary |
| **framer** | Fuzzy → structure → options → decision |
| **sourcer** | Evidence and research; never asserts without it |
| **builder** | Artifact in isolation → structured return |
| **designer** | Perception loop: render → look → iterate |
| **reviewer** | Read-only review, out of band |
| **reviewer-readonly** | Review with no shell (used by the binding QA gate) |

All **26** retired names keep a shim file, so a document that says "spawn CPO" still resolves instead of
silently un-shadowing a drifted copy in `~/.claude/agents/`. A shim declares no tools and no model; it names
the engine and the lenses to load. Phase 9 removes them. Count them, do not trust this sentence:
`grep -l '^kind: shim' .claude/agents/*.md | wc -l`.

**The expertise is data now.** [.claude/lenses.yml](.claude/lenses.yml) holds how to *produce* work in a
domain — `business` `customer` `growth` `product` `engineering` `research` `design` `evidence`.
[.claude/review-lenses.yml](.claude/review-lenses.yml) holds how to *judge* it. Both are linted for content,
not just shape, by `.claude/hooks/schema-lint.js`. Prose rots; a linted data file cannot.

Canonical definitions live in [`.claude/agents/`](.claude/agents/). Routing table in [AGENTS.md](AGENTS.md).

`.claude/agents/war-room/` holds 25 additional agents on a **different schema** — routines, not engines — and
`schema-lint.js` does not walk that directory, so the swap did not touch them. **The 17 cron/routine agents
depend on Linear, Supabase `audit_log`, Mem0, Inngest and Telegram — none of which exist in this project**,
so they will fail or hallucinate around the gap. The seven board personas (`persona-*`) and `synthesizer`
work on files alone and are usable as-is; the protocol they run is documented in
`.claude/skills/board-meeting-protocol/`.

**Slash commands:** `/build` `/fix` `/design` `/review` `/debug` `/daily` `/plan` `/ship` `/audit` `/research` `/board-meeting`
**Identity:** `/color [name]` · `/name [session-slug]` — set at the start of every session.

---

## Skills

**147 skills** at `.claude/skills/[skill-name]/SKILL.md`. This is the only location — the `.agent/`
mirror was retired 2026-08-26.

**Discovery is two-tier — start at the routers, not the manifest:**

```
1. Read .claude/skills/routers/INDEX.md — six namespaces, one line each (~370 tokens)
2. Read the ONE namespace that matches (~1,190 tokens)
3. Load 3-5 SKILL.md files (`orchestrator`) · 2-3 (every other engine)
```

Reading `MANIFEST.json` whole costs **~14,850 tokens across 147 entries** and grows with every skill added,
so a good new skill makes every unrelated task more expensive. A typical lookup is now **~1,560 tokens**. The
manifest remains the exhaustive index and is what `check:skills-manifest` verifies — it is not where a lookup
starts. Never `ls | grep`.

Skills load **on demand only** — never preload.

**Six namespaces is the real number, not a rounding of seven.** `engineering` · `frontend-design` ·
`quality-security` · `ai-agents` · `ops-delivery` · `business-growth`, and their counts sum to 147. The
upstream harness has a seventh, `thinking-*`; beeond has **zero** of those skills
(`ls -d .claude/skills/thinking-*` → no matches), so the namespace is absent rather than declared empty.

**Do not re-derive the token figures from this paragraph — ask the generator.** They come from
`scripts/build-skill-routers.mjs`, which estimates at bytes ÷ 3.6 and writes the same numbers into
`routers/INDEX.md`; quoting them at a different divisor is how this file and that one start disagreeing.
`npm run check:skill-routers` re-checks the whole thing against `CURATION.yml` and is a step of
`npm run check`.

> **Superseded 2026-08-31.** This block said **"154 skills"** (there are 147 — on disk, in
> `manifest.skills`, and in `totalSkills`), pointed every agent at `MANIFEST.json` so the routers reached
> nobody, and told you to *"filter the `skills` array by `tags`"* — a step that is **inexecutable for 131
> of 147 entries**: `manifest.skills.filter(s => s.tags?.length).length` → **16**. 89% carry `tags: []`.
> The routers do not depend on that field, which is why the instruction above does not mention it. **The
> `tags` defect itself is untouched and still open** — it predates the seven-engine swap and is tracked
> separately; what changed here is only that the documentation stopped depending on it.

---

## Stack

**Nothing below the frontend is wired.** These are intentions, not facts on the ground — do not write code that assumes any of them exists without checking first.

```
BUILT
  Frontend:  Next.js 16 (App Router), React 19, TypeScript strict, Tailwind 4
  Testing:   Playwright · Lighthouse + CDP trace + axe harness in apps/web/scripts/
  Hosting:   Vercel (preview only — no production domain wired)
  MCP:       Playwright (see .mcp.json — the only server configured)

INTENDED, DOES NOT EXIST YET
  Database / auth:  Supabase        Payments: Stripe
  Email:            Resend          Jobs:     Inngest
  AI:               OpenAI / Claude / Gemini direct API
```

---

## Memory

| File | Purpose | Updated by |
|------|---------|-----------|
| `.claude/memory/DECISIONS.md` | Decisions affecting others. Append-only, 50-entry cap. | Any engine making such a decision |
| `.claude/memory/DECISIONS_ARCHIVE.md` | Pre-2026-08-08 decisions. **Historical only.** | Nobody — frozen |
| `.claude/memory/CODEBASE-MAP.md` | Key files, patterns, tech debt | `builder`, applying `reviewer` findings — `reviewer` has no write tools |
| `.claude/memory/USER-INSIGHTS.md` | Customer language, pain phrases, JTBD | `orchestrator` (only authorized writer) |
| `.claude/memory/LONG-TERM.md` | Cross-session facts. 100-line cap. | `orchestrator` after each session |
| `.claude/memory/AUDIT_LOG.md` | Deploys and irreversible actions | `builder` |

**Session files go in `docs/08-agents_work/sessions/`** — `YYYY-MM-DD-[engine]-[task-slug].md`, not under `.claude/memory/`.

**Caps:** DECISIONS.md ≤ 50 entries · LONG-TERM.md ≤ 100 lines · session summaries ≤ 10 lines.

---

## Models

| Tier | Model | Engines that declare it |
|------|-------|-------------------------|
| Opus 5 | `claude-opus-5` | `orchestrator` `sourcer` `builder` `designer` `reviewer` `reviewer-readonly` |
| Sonnet 5 | `claude-sonnet-5` | `framer` |
| Haiku 4.5 | `claude-haiku-4-5` | Lookup only — lint, log parsing, classification. Not judgment, and no engine declares it. |

Derive it, do not quote this table: `grep -H '^model:' .claude/agents/*.md`. Shims declare no model at all —
that is enforced, not a convention.

`orchestrator` names the model in every brief. An engine with no model named in the brief defaults to Sonnet.

> **Bumped 2026-08-26 (founder-approved).** Every agent definition moved from
> `claude-sonnet-4-6` / `claude-opus-4-7` to the current Sonnet 5 / Opus 5 families.
> `.claude/hooks/schema-lint.js` validates `model:` against this exact set — change both
> together or every agent file fails the lint.
>
> **Superseded 2026-08-31.** The per-tier file counts here read "19 files / 30 files / 2 files" against a
> 51-agent roster. There are seven engines now and the rest declare no model, so those counts describe a
> roster that no longer exists. The `grep` above is kept instead of a corrected count, which would rot the
> same way.

---

## Risk-Tiered QA Gate

Every PR is risk-tiered. **No merge without a PASS verdict.** No session can override it — the verdict is
issued by `reviewer-readonly`, which has no shell, precisely so that the thing being gated cannot reach the
gate.

| Tier | Trigger | Pipeline |
|------|---------|----------|
| **Trivial** | Typo, single line, comment-only | schema-lint hook (auto-pass) |
| **Lite** | Isolated feature, < 300 LOC, no API/DB/auth | `reviewer` (lenses `correctness`, `scope`) |
| **Full** | API/DB/auth/billing touched, ≥ 300 LOC | Lite + `reviewer` (lenses `security`, `adversarial`, `craft`) |
| **Irreversible** | DB migration, agent definition, root config, billing | Full + multi-judge + founder sign-off |

A tier names **lenses**, not agents. That is the whole of what changed: the five reviewers that used to
appear in this table differed only in which lens they carried, and a lens is data a linter can check.

Auto-classification: [`.claude/qa-tier-floor.yml`](.claude/qa-tier-floor.yml). **There is no CI** — no `.github/` directory exists; the gate is enforced by agents, not by a workflow.

---

## Engine Contract

> **Superseded 2026-08-31.** This was a 3-layer contract — CEO, C-suite + Leads, Workers. Those layers
> collapsed into seven engines. The contracts below say the same things to the engines that inherited them.

### orchestrator
| DO | DO NOT |
|----|--------|
| Plan, ask, delegate, synthesize | Write source code |
| Structured briefs with all required fields | Vague "build the thing" |
| Validate returns (branch, worktree, files_changed, qa_verdict, session_file) | Accept returns missing required fields |
| Set `/color` + `/name` at session start | Run unnamed or uncolored |

### framer · sourcer · builder · designer
| DO | DO NOT |
|----|--------|
| Explore, plan, brief or produce within scope | Edit files outside the stated scope |
| Use the right engine for each task | Do another engine's job to "save turns" |
| Verify branches via `git branch --list` | Trust a summary blindly |
| Return structured JSON per the engine's own `return_contract` | Return a vague "done" |
| Auto-fix type errors and missing imports | Make architectural calls — return BLOCKED instead |
| Atomic commits per logical change | Commit to `main` or another engine's branch |
| Write a session file at task close | Close a task with no session file |

### reviewer · reviewer-readonly
| DO | DO NOT |
|----|--------|
| One focused review per session | Write or edit the code under review — they hold no `Write` or `Edit` |
| Return a structured verdict (PASS/FAIL + evidence per lens) | Return a vague "looks good" |
| Escalate when a finding is outside the diff and severe | Auto-approve; the gate blocks |

---

## Rules

1. **Read before acting.** Glob/Grep before creating; check memory before deciding.
2. **Own your engine.** Don't do another engine's job to save a turn. Domain is a lens you load, not a job you take.
3. **Source claims.** No agent invents data. See Evidence discipline above.
4. **Leave breadcrumbs.** Append to DECISIONS.md when a choice affects others.
5. **Iterate, don't overwrite.** Understand existing code before replacing it.
6. **No placeholder UI.** Zero tolerance for stubs or TODOs in deliverables.
7. **Worktrees for code.** Every code worker creates one.
8. **QA gate is sacred.** No merge without a PASS verdict + founder confirmation. `reviewer-readonly` issues it and no session overrides it.
9. **Don't resurrect dead direction.** v3–v7 sites, the Blueprint spec, the Footprint-Audit wizard and every prior brand system are retired. They survive only under `docs/07-history/pre-reset-archive/`, which is never current instruction.

---

## Git Worktree Protocol

```bash
# Anchor at YOUR OWN toplevel, never at the main repo. Run from a cwd INSIDE the session project root.
PROJECT_ROOT=$(git rev-parse --show-toplevel)
git worktree add "$PROJECT_ROOT/.worktrees/[slug]" -b feat/[slug]
cd "$PROJECT_ROOT/.worktrees/[slug]"
git commit -m "feat(scope): description"
```

**Anchor at `$PROJECT_ROOT`, not at the main repo.** An engine's `Write`/`Edit` is scoped to its session
project root, and the main repository is *above* that root — so a child worktree placed there is one the
creating engine cannot edit. What makes the command safe is the absolute path, not a `-C` flag.
`.worktrees/` is gitignored.

> **Superseded 2026-08-31.** This block read `MAIN_REPO=$(git worktree list | head -1 | awk '{print $1}')`,
> then `git -C "$MAIN_REPO" worktree add "$MAIN_REPO/.worktrees/[slug]"`, and closed with *"Never run
> `git worktree add` from inside a worktree without `-C $MAIN_REPO`."* It contradicted
> `.claude/agents/builder.md` and `designer.md`, which both anchor at `$PROJECT_ROOT`. Two instructions for
> one command disagree silently, so the one the engines actually execute is the one kept.

---

## Identity — Colors & Session Naming

| Engine | Color |
|--------|-------|
| `orchestrator` (primary) | `gold` — parallel #2/#3/#4: `orange` / `teal` / `lime` |
| `framer` | `green` |
| `sourcer` | `purple` |
| `builder` | `blue` |
| `designer` | `pink` |
| `reviewer` · `reviewer-readonly` | `gray` |

Derive it: `grep -H '^color:' .claude/agents/*.md`. The full assignment table is in
[.claude/commands/color.md](.claude/commands/color.md).

```
/name [engine]-[task-slug]     e.g. orchestrator-g2-shape · builder-rate-limit · reviewer-auth-audit
```

### Documentation Gate

No task is COMPLETE without a session file at:

```
docs/08-agents_work/sessions/YYYY-MM-DD-[engine]-[task-slug].md
```

with frontmatter including `qa_verdict: PASS` and, when applicable, `tier: full|irreversible`.

---

## Context Budget

- Skills per task: **3-5** for `orchestrator` · **2-3** for every other engine. Never preload.
- Engine handoffs ≤ 500 tokens — summarize, never forward raw conversation.
- Pre-flight reads: cache as one block; mid-session re-reads break prompt caching.
- `/clear` between unrelated tasks. Sonnet is the default; escalate deliberately.
