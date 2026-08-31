# AGENTS.md — Routing Table

*Seven engines. Domain expertise is a lens, not an agent. Verified against `.claude/agents/` on 2026-08-31 — every name listed here resolves to a file.*

> Project context and the layer contract live in [CLAUDE.md](CLAUDE.md). Source of truth for the business is [`HANDOFF-CLEAN-START/`](HANDOFF-CLEAN-START/).

---

## How to route

**Start at `orchestrator`.** It reads memory, asks questions, picks the playbook, and dispatches.

| Request | Start here |
|---|---|
| Anything | `orchestrator` |
| Slash commands | `/build` `/fix` `/design` `/review` `/debug` `/daily` `/plan` `/ship` `/audit` `/research` `/board-meeting` |

You do not usually name an engine. You name the work; the playbook names the engines and the lenses.

---

## The seven engines

| Engine | Distinct because | Tools | Model |
|---|---|---|---|
| **orchestrator** | Owns state and the human boundary — the only engine that ends a turn on approval | `+ Task` | `claude-opus-5` |
| **framer** | Fuzzy → structure → options → decision. Produces the thinking artifact, not the thing | write, no `Bash` | `claude-sonnet-5` |
| **sourcer** | "Never assert without evidence" is a discipline, not a skill | web, **no repo write** | `claude-opus-5` |
| **builder** | Artifact in isolation → structured return | write + `Bash`, worktree | `claude-opus-5` |
| **designer** | The only producing engine with a perception loop: render → look → iterate | write + `Bash`, worktree | `claude-opus-5` |
| **reviewer** | Read-only and out-of-band. **No `Write`, no `Edit`** | **read-only** | `claude-opus-5` |
| **reviewer-readonly** | `reviewer` with no shell. The binding QA gate cannot be overridden, and a shell that could run edits would defeat that | **read-only, no `Bash`** | `claude-opus-5` |

Derive this table rather than trusting it: `grep -H '^model:\|^tools:' .claude/agents/{orchestrator,framer,sourcer,builder,designer,reviewer,reviewer-readonly}.md`.

`reviewer` and `reviewer-readonly` have no write tools at all. *An agent that can edit what it reviews will review what it can edit* — and that is structural here, not a rule anyone has to remember.

---

## What replaced what

| Was | Now | Why they were never separate |
|---|---|---|
| ceo · cto · cpo · cmo · cbo · cco · qa-lead · research-lead · design-lead | **orchestrator** (+ lens) | Nine copies of one orchestration procedure, one per domain |
| backend · frontend · database · ai · devops · data · test engineers · technical-writer · supabase-cleaner | **builder** (+ lens) | One procedure; what differed was which lens verified the result |
| code-reviewer · security-engineer · adversary-engineer · design-critic · qa-engineer | **reviewer** (+ review lens) | Five agents differing only in which lens they carried |
| researcher · research-lead | **sourcer** | The same discipline at two scopes |
| product-designer · design-polisher | **designer** | Build and polish are one perception loop |

Two names sit in the orchestrator row and also have a narrower reading, so they are stated once here rather than argued twice:

- **`qa-lead` → `reviewer`**, not `orchestrator`. It issued the verdict; issuing a verdict is the reviewer engine loading the lenses a playbook stage names.
- **`research-lead` → `sourcer`**, not `orchestrator`. Research-Lead and `researcher` were one discipline at two scopes.

Both follow the upstream harness, which had already decided them.

---

## Shims — all 26 old names keep a file

Every retired name still resolves. That is deliberate and it is what makes the swap survivable: copies of these names also exist in `~/.claude/agents/`, and **project agents shadow global ones**, so deleting a repo file does not remove the name — it hands the name to an older, drifted definition. `ceo` would keep working and quietly mean something else. A failure that keeps working is worse than one that stops.

So all 26 keep a shim:

| → `orchestrator` | → `builder` | → `reviewer` | → `sourcer` | → `designer` |
|---|---|---|---|---|
| `ceo` `cto` `cpo` `cmo` `cbo` `cco` `design-lead` | `backend-engineer` `frontend-engineer` `database-engineer` `ai-engineer` `devops-engineer` `data-engineer` `test-engineer` `technical-writer` `supabase-cleaner` | `qa-lead` `code-reviewer` `security-engineer` `adversary-engineer` `design-critic` `qa-engineer` | `research-lead` `researcher` | `product-designer` `design-polisher` |

A shim declares **no tools and no model** — it routes, it does not run, and `schema-lint.js` fails one that declares either. Each names the lenses to load and the phase that removes it: **Phase 9**, when the fleet is reconciled and both copies go.

Read a shim before dispatching one. `cco`, `supabase-cleaner` and `design-polisher` carry a paragraph explaining what was genuinely at stake in their mapping; the other 23 are one line.

`.claude/agents/_seeds/` holds nine paste-ready session seeds. They carry no frontmatter, so they are not agents and nothing dispatches them — a human pastes them.

---

## war-room agents — read the caveat

`.claude/agents/war-room/` holds 25 more agents plus an `INDEX.md`. **`schema-lint.js` does not walk that directory** — it reads `.claude/agents/*.md` non-recursively, so those files are on their own schema and are neither validated nor affected by the seven-engine swap. Measured, not assumed: `grep -n 'readdirSync(AGENTS_DIR)' .claude/hooks/schema-lint.js`.

**Usable now (8)** — work on files alone:
`persona-visionary` · `persona-strategist` · `persona-architect` · `persona-risk-modeler` · `persona-customer-voice` · `persona-broad-adversary` · `persona-aria` · `synthesizer`

These run the board-meeting protocol (`/board-meeting`, documented in `.claude/skills/board-meeting-protocol/`). The handoff credits that protocol with catching a bad sequencing bet before any code was written. Two of them are cited as lens provenance in `.claude/review-lenses.yml` (`risk`, `customer-value`), so they are load-bearing beyond the protocol.

**Not usable (17)** — cron/routine and parallel-execution agents that read **Linear, Supabase `audit_log` and `claude_progress`, Mem0, Inngest, and Telegram. None of that infrastructure exists in this project** (zero `.sql`, no `supabase/`, no `.env`; `.mcp.json` configures only Playwright):
`advisor-daily-thinking` · `auto-unblock` · `competitor-pulse` · `content-idea-generator` · `cto-daily-plan` · `eod-sync` · `friday-retro` · `geo-algorithm-signal` · `monday-standup` · `morning-digest` · `security-watcher` · `parallel-builder` · `parallel-critic` · `parallel-deployer` · `parallel-researcher` · `parallel-tester` · `parallel-watcher`

Kept by founder decision. Don't spawn them expecting them to work. Note that six of the `parallel-*` files **are** the engines written a second time — `parallel-builder`≈`builder`, `parallel-critic`≈`reviewer`, `parallel-researcher`≈`sourcer`. That duplication is now visible; resolving it is Phase 9's, not this swap's.

---

## Where the knowledge lives

| Surface | File | Checked by |
|---|---|---|
| How to **produce** work in a domain | [.claude/lenses.yml](.claude/lenses.yml) | `schema-lint.js` — content, not just shape |
| How to **judge** it | [.claude/review-lenses.yml](.claude/review-lenses.yml) | `schema-lint.js` + the independence rule |
| The **stages** a category of work passes | [.claude/playbooks/](.claude/playbooks/) | `schema-lint.js` — and a stage may not declare method |
| Which **gates** exist and what runs them | [.claude/gates.yml](.claude/gates.yml) | `scripts/check-gates.mjs` · `scripts/gates.test.mjs` |
| What **risk** a path carries | [.claude/qa-tier-floor.yml](.claude/qa-tier-floor.yml) | `scripts/lib/classifier.js` — one implementation |
| What each lens was **mined from** | [.claude/provenance/sources.json](.claude/provenance/sources.json) | `schema-lint.js` |

Lens provenance is recorded as `git:<path>@<rev>` because the source files were the C-suite agents, and those are shims now. The vendored manifest is what makes that citation checkable after the file is gone **and** after transplant: this project holds none of the upstream harness's git objects, so every one of those revisions resolves to nothing here. `schema-lint` therefore checks the vendored record — full commit, sha256, size, headings — and consults `git cat-file` only where the object is actually reachable. It reports which mode it used, and here it reports **`0 byte-verified · 15 shape-only`**. That is the honest reading, not a failure.

**Domain lenses:** `business` `customer` `growth` `product` `engineering` `research` `design` `evidence`.
**Review lenses:** `correctness` `security` `adversarial` `craft` `evidence` `voice` `accessibility` `risk` `customer-value` `scope`.

---

## Routing examples

| What you need | Route |
|---|---|
| Build a feature | `orchestrator` → `builder` ×N (lens `engineering`) → `reviewer` (lens `correctness`) |
| Design a screen | `orchestrator` → `framer` (lens `design`) → `designer` → `reviewer` (lens `craft`) |
| Marketing-site work | `orchestrator` → `framer` (lenses `design`, `growth`) → `designer` |
| Research competitors | `orchestrator` → `sourcer` ×2-3 (lens `research`) |
| Landing-page copy | `orchestrator` → `framer` (lens `growth`) → `builder` (lenses `growth`, `evidence`) |
| Pricing decision | `orchestrator` → `framer` (lens `business`) — playbook `price-a-product` |
| Write a PRD | `orchestrator` → `framer` (lens `product`) |
| Deploy | `orchestrator` → `builder` (lens `engineering`) — needs a PASS verdict; irreversible tier |
| Metrics / SQL | `orchestrator` → `builder` (lenses `engineering`, `evidence`) |
| Fix a bug | `orchestrator` → `builder` (lens `engineering`) — playbook `ship-feature` |
| Security audit | `orchestrator` → `reviewer` (lenses `security`, `adversarial`) |
| Write tests | `orchestrator` → `builder` (lenses `engineering`, `evidence`) |
| Review a diff | `orchestrator` → `reviewer` (lenses `correctness`, `scope`) |
| The binding QA gate | `reviewer-readonly` — no shell, and its verdict is not overridable in session |
| Stress-test a plan | `orchestrator` → `/board-meeting` → the 7 personas → `synthesizer` |

---

## Memory files

| File | Written by | Read by |
|---|---|---|
| `.claude/memory/DECISIONS.md` | Any engine making a decision that affects others | `orchestrator`, every engine at pre-flight |
| `.claude/memory/DECISIONS_ARCHIVE.md` | Frozen — nobody | Historical reference only |
| `.claude/memory/CODEBASE-MAP.md` | `reviewer` findings, applied by `builder` — `reviewer` cannot write | `orchestrator`, `builder` |
| `.claude/memory/USER-INSIGHTS.md` | `orchestrator` only | every engine |
| `.claude/memory/LONG-TERM.md` | `orchestrator` after each session | `orchestrator`, every session |
| `.claude/memory/AUDIT_LOG.md` | `builder` on any deploy or irreversible action | `orchestrator` |

**Session files:** `docs/08-agents_work/sessions/YYYY-MM-DD-[engine]-[task-slug].md`. Not under `.claude/memory/`.

---

*Updated 2026-08-31 · supersedes the 3-layer CEO → C-suite → worker topology. Historical records under `docs/07-history/` and `.claude/memory/DECISIONS_ARCHIVE.md` still describe that topology, deliberately — a record of what was decided cannot drift.*
