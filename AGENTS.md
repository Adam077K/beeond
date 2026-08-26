# AGENTS.md — Routing Table
*3 layers: CEO → C-suite/Leads → Workers. Verified against `.claude/agents/` on 2026-08-26 — every agent listed here exists.*

> Project context and the layer contract live in [CLAUDE.md](CLAUDE.md). Source of truth for the business is [`HANDOFF-CLEAN-START/`](HANDOFF-CLEAN-START/).

---

## How to route

**Always start with the CEO.** The CEO reads memory, asks questions, and assembles the right team.

| Request | Start here |
|---|---|
| Anything | CEO |
| Slash commands | `/build` `/fix` `/design` `/review` `/debug` `/daily` `/plan` `/ship` `/audit` `/research` `/board-meeting` |

---

## Layer 1 — CEO

| Agent | File | Job |
|---|---|---|
| **CEO** | `ceo.md` | Entry point for all tasks. Questions → team assembly → delegate → synthesize. Never implements. |

---

## Layer 2 — C-suite and Leads

| Agent | File | Domain |
|---|---|---|
| **CTO** | `cto.md` | All engineering: code, infra, architecture. Spawns engineering workers. |
| **CPO** | `cpo.md` | Product: PRDs, roadmap, RICE, acceptance criteria, spec compliance. |
| **CMO** | `cmo.md` | Growth: copy, SEO/GEO, email, GTM, CRO. Reads USER-INSIGHTS.md as a hard gate. |
| **CBO** | `cbo.md` | Business: pricing, financials, OKRs, unit economics, legal/compliance. |
| **CCO** | `cco.md` | Customer: support, onboarding, retention, churn, customer voice. |
| **QA-Lead** | `qa-lead.md` | Independent quality gate. Risk-tiers the diff, issues PASS/BLOCK. Cannot be overridden. |
| **Research-Lead** | `research-lead.md` | Competitive, market sizing, tech eval, user research. Reports to CEO. |
| **Design-Lead** | `design-lead.md` | Screens, components, design systems, design audits. Reports under CPO. |

---

## Layer 3 — Workers

Workers take a structured brief, create a worktree for code, execute atomically, and return structured JSON.

| Agent | File | Job |
|---|---|---|
| **backend-engineer** | `backend-engineer.md` | API routes, server logic. TypeScript strict, Zod on all inputs. |
| **frontend-engineer** | `frontend-engineer.md` | React components, Tailwind, Shadcn/UI. All 4 states, no placeholder UI. |
| **database-engineer** | `database-engineer.md` | Migrations, RLS, indexes, schema. Never drops a column without double confirmation. |
| **ai-engineer** | `ai-engineer.md` | LLM integration, prompts, evals, RAG. Every feature ships with eval + cost logging. |
| **devops-engineer** | `devops-engineer.md` | Deploys, CI/CD, infra. Staging first; rollback plan before every forward migration. |
| **data-engineer** | `data-engineer.md` | SQL, metric definitions, event tracking. Verified numbers, never estimates. |
| **security-engineer** | `security-engineer.md` | OWASP audit, dependency scan, auth review, RLS check. |
| **test-engineer** | `test-engineer.md` | Unit, integration, E2E. TDD-red from a spec; coverage-green from code. |
| **qa-engineer** | `qa-engineer.md` | Authors tests for the diff under review. Distinct from QA-Lead, which issues verdicts. |
| **adversary-engineer** | `adversary-engineer.md` | Adversarial security review on Full/Irreversible tiers. Reads only, never writes. |
| **code-reviewer** | `code-reviewer.md` | P1/P2/P3 findings on changed files only. Maintains CODEBASE-MAP.md. |
| **researcher** | `researcher.md` | One bounded question. Sources every claim with URL + date + confidence. |
| **technical-writer** | `technical-writer.md` | Docs, READMEs, PR descriptions, changelogs. Reads the code, not the brief. |
| **product-designer** | `product-designer.md` | Builds a screen to spec with pixel fidelity. First paint. |
| **design-critic** | `design-critic.md` | Judges an implemented design. Never edits. |
| **design-polisher** | `design-polisher.md` | Adds craft density to a working build. Runs in the build→critic→polish loop. |
| **supabase-cleaner** | `supabase-cleaner.md` | Audits the Supabase schema. Emits reviewed SQL for a human to apply — never runs destructive SQL. |

`.claude/agents/_seeds/` holds shorter seed variants of the C-suite definitions.

---

## war-room agents — read the caveat

`.claude/agents/war-room/` holds 25 more agents. They split cleanly:

**Usable now (8)** — work on files alone:
`persona-visionary` · `persona-strategist` · `persona-architect` · `persona-risk-modeler` · `persona-customer-voice` · `persona-broad-adversary` · `persona-aria` · `synthesizer`

These run the board-meeting protocol (`/board-meeting`, documented in `.claude/skills/board-meeting-protocol/`). The handoff credits that protocol with catching a bad sequencing bet before any code was written.

**Not usable (17)** — cron/routine and parallel-execution agents that read **Linear, Supabase `audit_log` and `claude_progress`, Mem0, Inngest, and Telegram. None of that infrastructure exists in this project** (zero `.sql`, no `supabase/`, no `.env`; `.mcp.json` configures only Playwright):
`advisor-daily-thinking` · `auto-unblock` · `competitor-pulse` · `content-idea-generator` · `cto-daily-plan` · `eod-sync` · `friday-retro` · `geo-algorithm-signal` · `monday-standup` · `morning-digest` · `security-watcher` · `parallel-builder` · `parallel-critic` · `parallel-deployer` · `parallel-researcher` · `parallel-tester` · `parallel-watcher`

Kept by founder decision. Don't spawn them expecting them to work.

---

## Routing examples

| What you need | Route |
|---|---|
| Build a feature | CEO → CTO → backend-engineer + frontend-engineer |
| Design a screen | CEO → CPO → Design-Lead → product-designer → design-critic → design-polisher |
| Marketing-site work | CEO → CPO → Design-Lead (+ CMO for copy) |
| Research competitors | CEO → Research-Lead → researcher ×2-3 |
| Landing-page copy | CEO → CMO |
| Pricing decision | CEO → CBO |
| Write a PRD | CEO → CPO |
| Deploy | CEO → CTO → devops-engineer (needs QA-Lead PASS) |
| Metrics / SQL | CEO → CBO → data-engineer |
| Fix a bug | CEO → CTO → the relevant engineer |
| Security audit | CEO → QA-Lead → security-engineer (+ adversary-engineer on Full/Irreversible) |
| Write tests | CEO → CTO → test-engineer |
| Review a diff | CEO → QA-Lead → code-reviewer + qa-engineer |
| Stress-test a plan | CEO → `/board-meeting` → the 7 personas → synthesizer |

---

## Memory files

| File | Written by | Read by |
|---|---|---|
| `.claude/memory/DECISIONS.md` | Any agent making a decision that affects others | CEO, all leads |
| `.claude/memory/DECISIONS_ARCHIVE.md` | Frozen — nobody | Historical reference only |
| `.claude/memory/CODEBASE-MAP.md` | code-reviewer | CTO, CEO |
| `.claude/memory/USER-INSIGHTS.md` | CMO + CPO only | CMO, CPO, CEO |
| `.claude/memory/LONG-TERM.md` | CEO | CEO, every session |
| `.claude/memory/AUDIT_LOG.md` | devops-engineer | CTO, CEO |

**Session files:** `docs/08-agents_work/sessions/YYYY-MM-DD-[role]-[task-slug].md`. Not under `.claude/memory/`.
