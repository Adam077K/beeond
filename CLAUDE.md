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

Seven website directions were locked and superseded in 14 days; none reached a customer. **No direction gets locked and shipped — merged, put in front of a customer, or treated as the plan of record — without a customer signal earned since the last one closed.** This does not restrict exploration, sketching, or cheap tests framed as tests.

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

Every task starts at the CEO.

```
Layer 1  CEO — orchestrates only, never implements

Layer 2  CTO · CPO · CMO · CBO · CCO · QA-Lead · Research-Lead
         Design-Lead reports under CPO.

Layer 3  Workers
         backend-engineer · frontend-engineer · database-engineer · ai-engineer
         devops-engineer  · data-engineer     · security-engineer · test-engineer
         code-reviewer    · researcher        · technical-writer
         product-designer · design-critic     · design-polisher
         qa-engineer      · adversary-engineer · supabase-cleaner
```

Canonical definitions live in [`.claude/agents/`](.claude/agents/). Routing table in [AGENTS.md](AGENTS.md).

`.claude/agents/war-room/` holds 25 additional agents. **The 17 cron/routine agents depend on Linear, Supabase `audit_log`, Mem0, Inngest and Telegram — none of which exist in this project**, so they will fail or hallucinate around the gap. The seven board personas (`persona-*`) and `synthesizer` work on files alone and are usable as-is; the protocol they run is documented in `.claude/skills/board-meeting-protocol/`.

**Slash commands:** `/build` `/fix` `/design` `/review` `/debug` `/daily` `/plan` `/ship` `/audit` `/research` `/board-meeting`
**Identity:** `/color [name]` · `/name [session-slug]` — set at the start of every session.

---

## Skills

**147 skills** at `.claude/skills/[skill-name]/SKILL.md`. This is the only location — the `.agent/` mirror was retired 2026-08-26.

**Discovery — read the manifest, never `ls | grep`:**

```
1. Read .claude/skills/MANIFEST.json — filter the `skills` array by `tags`
2. Load 3-5 SKILL.md files (CEO, C-suite, leads) · 2-3 (workers)
```

Skills load **on demand only** — never preload.

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
| `.claude/memory/DECISIONS.md` | Decisions affecting others. Append-only, 50-entry cap. | Any agent making such a decision |
| `.claude/memory/DECISIONS_ARCHIVE.md` | Pre-2026-08-08 decisions. **Historical only.** | Nobody — frozen |
| `.claude/memory/CODEBASE-MAP.md` | Key files, patterns, tech debt | code-reviewer |
| `.claude/memory/USER-INSIGHTS.md` | Customer language, pain phrases, JTBD | CMO + CPO only |
| `.claude/memory/LONG-TERM.md` | Cross-session facts. 100-line cap. | CEO after each session |
| `.claude/memory/AUDIT_LOG.md` | Deploys and irreversible actions | devops-engineer |

**Session files go in `docs/08-agents_work/sessions/`** — not under `.claude/memory/`.

**Caps:** DECISIONS.md ≤ 50 entries · LONG-TERM.md ≤ 100 lines · session summaries ≤ 10 lines.

---

## Models

| Tier | Model | Use for |
|------|-------|---------|
| Opus | `claude-opus-5` | CEO, research synthesis, design, heavy orchestration |
| Sonnet | `claude-sonnet-5` | **Default** — C-suite, leads, most workers |
| Haiku | `claude-haiku-4-5` | Lookup only — lint, log parsing, classification. Not judgment. |

The CEO names the model in every brief. Workers default to Sonnet.

---

## Risk-Tiered QA Gate

Every PR is risk-tiered. **No merge without QA-Lead PASS.** CEO and CTO cannot override.

| Tier | Trigger | Pipeline |
|------|---------|----------|
| **Trivial** | Typo, single line, comment-only | schema-lint hook (auto-pass) |
| **Lite** | Isolated feature, < 300 LOC, no API/DB/auth | code-reviewer + qa-engineer |
| **Full** | API/DB/auth/billing touched, ≥ 300 LOC | Lite + security-engineer + design/craft review |
| **Irreversible** | DB migration, agent definition, root config, billing | Full + multi-judge + founder sign-off |

Auto-classification: [`.claude/qa-tier-floor.yml`](.claude/qa-tier-floor.yml). **There is no CI** — no `.github/` directory exists; the gate is enforced by agents, not by a workflow.

---

## Layer Contract

### CEO
| DO | DO NOT |
|----|--------|
| Plan, ask, delegate, synthesize | Write source code |
| Structured briefs with all required fields | Vague "build the thing" |
| Validate returns (workers_spawned, qa_verdict, session_file) | Accept returns missing required fields |

### C-suite + Leads
| DO | DO NOT |
|----|--------|
| Explore, plan, brief workers | Edit `.ts` / `.tsx` / `.sql` directly |
| Verify branches via `git branch --list` | Trust worker summaries blindly |
| Spawn QA-Lead before merge | Merge without QA-Lead PASS |
| Write a session file at task close | Close a task with no session file |

### Workers
| DO | DO NOT |
|----|--------|
| One focused task per worktree | Touch files outside scope |
| Return structured JSON (branch, worktree, files_changed) | Return a vague "done" |
| Auto-fix type errors and missing imports | Make architectural calls — return BLOCKED instead |
| Atomic commits per logical change | Commit to `main` or a lead's branch |

---

## Rules

1. **Read before acting.** Glob/Grep before creating; check memory before deciding.
2. **Own your domain.** Don't do another agent's job.
3. **Source claims.** No agent invents data. See Evidence discipline above.
4. **Leave breadcrumbs.** Append to DECISIONS.md when a choice affects others.
5. **Iterate, don't overwrite.** Understand existing code before replacing it.
6. **No placeholder UI.** Zero tolerance for stubs or TODOs in deliverables.
7. **Worktrees for code.** Every code worker creates one.
8. **QA gate is sacred.** No merge without QA-Lead PASS + founder confirmation.
9. **Don't resurrect dead direction.** v3–v7 sites, the Blueprint spec, the Footprint-Audit wizard and every prior brand system are retired. They survive only under `docs/07-history/pre-reset-archive/`, which is never current instruction.

---

## Git Worktree Protocol

```bash
git worktree list
MAIN_REPO=$(git worktree list | head -1 | awk '{print $1}')
git -C "$MAIN_REPO" worktree add "$MAIN_REPO/.worktrees/[slug]" -b feat/[slug]
cd "$MAIN_REPO/.worktrees/[slug]"
git commit -m "feat(scope): description"
```

**Never** run `git worktree add` from inside a worktree without `-C $MAIN_REPO`. `.worktrees/` is gitignored.

---

## Identity — Colors & Session Naming

| Role | Color |
|------|-------|
| CEO | `gold` (parallel: `orange` / `teal` / `lime`) |
| CTO `blue` · CPO `green` · CMO `yellow` · CBO `emerald` · CCO `cyan` | QA-Lead `red` · Research-Lead `purple` · Design-Lead `pink` |
| backend `blue` · frontend `pink` · database `teal` · ai `purple` · security `red` · test `yellow` · code-reviewer `gray` · researcher `purple` · writer `gray` |

```
CEO:     /name ceo-[task-slug]
C-suite: /name [role]-[task-slug]
Workers: /name [role]-[task-slug]
```

### Documentation Gate

No task is COMPLETE without a session file at:

```
docs/08-agents_work/sessions/YYYY-MM-DD-[role]-[task-slug].md
```

with frontmatter including `qa_verdict: PASS` and, when applicable, `tier: full|irreversible`.

---

## Context Budget

- Skills per task: **3-5** for CEO/C-suite/leads · **2-3** for workers. Never preload.
- Agent handoffs ≤ 500 tokens — summarize, never forward raw conversation.
- Pre-flight reads: cache as one block; mid-session re-reads break prompt caching.
- `/clear` between unrelated tasks. Sonnet is the default; escalate deliberately.
