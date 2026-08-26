# Beeond

> "We help businesses stand out in the AI era with a comprehensive system and service that ensure full transparency: the dashboard shows exactly what is being done, the volume, and the rationale, while a 'swarm' of intelligent agents works behind the scenes—like a single, coordinated agency—to execute tasks quickly and at scale. A human element oversees the entire process to guarantee quality, accuracy, and superior results, ensuring the client achieves maximum impact with minimal effort."
>
> — Founder positioning statement, 2026-08-08 (canonical)

Two founders, no employees: **Adam** (AI agents, swarms, systems) and **Yarden Morgan** (marketing and growth, and the calibration layer on everything client-facing).

---

## Read this first

**[`HANDOFF-CLEAN-START/`](HANDOFF-CLEAN-START/) is the single source of truth.** Five files, read in order:

1. `01-THE-IDEA.md` — what Beeond is, the name, founding decisions, the honest moat, the trademark blocker
2. `02-THE-PROBLEM.md` — the customer problem, the evidence base, the open ICP branches
3. `03-THE-MARKET.md` — competitive landscape and the missing market sizing
4. `04-THE-PRODUCT.md` — the offer, the transparency dashboard, delivery model
5. `05-WHERE-WE-STAND.md` — current state, what was tried, what's open, what happens next

Nothing outside those five files overrides them.

## Honest state (2026-08-26)

| | |
|---|---|
| Revenue | None. Zero signed clients. |
| Customer interviews | **Zero.** Two warm prospects still un-called. |
| Product | Does not exist — no database, no auth, no API, no billing, no dashboard. |
| Marketing site | Being rebuilt from scratch. `apps/web` is an empty instrumented Next 16 shell. |
| Domain | `beeond.ai` unsecured. `.com` held by an unrelated party. |
| Trademark | **MEDIUM collision risk, never cleared.** Gates any public launch. |

### Open decisions — do not treat these as settled

**ICP** (two branches: B2B/SaaS/tech, or Hebrew-market lead-gen) · **offer and service catalog** · **pricing and tiers** · **language/geography scope** · **market sizing** (never attempted).

The ICP blocks everything downstream and is resolved by interviewing the two warm prospects — not by more desk research.

### The rule that matters

Seven website directions were locked and superseded in 14 days; none reached a customer. (The handoff is careful here: v3–v6.2 were partly amendments to one evolving surface, so the precise count is looser than seven separate builds — the *tempo* is the undisputed part.) **No direction gets locked and shipped without a customer signal earned since the last one closed.** Exploration, sketching and cheap tests are not restricted; treating something as the plan of record is.

## Layout

| Path | What |
|---|---|
| `HANDOFF-CLEAN-START/` | Source of truth (5 files) |
| `apps/web/` | Marketing site — Next 16, React 19, Tailwind 4, Playwright. Currently a placeholder shell with the QA/measurement harness in `scripts/`. |
| `.claude/` | The agent system — agents, skills (154, MANIFEST-indexed), commands, hooks, workflows, memory. Single source; the old `.agent/` mirror was retired 2026-08-26. |
| `docs/` | Foundation, competitive research, offer spec, marketing, design references, history |
| `docs/05-marketing/references/` | External site captures + the anti-slop negative set, for the new design phase |
| `docs/07-history/pre-reset-archive/` | Pre-2026-08-08 record. Historical only — never current instruction. |
| `war-room/`, `war-room-dashboard/` | Internal agent-swarm visualiser. Not a product, not customer-facing. |

`CLAUDE.md` and `AGENTS.md` describe how the agent team is organised and routed.

## Working on the site

```bash
cd apps/web
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm lint
pnpm exec playwright test
```

Measurement harness in `apps/web/scripts/`: `measure-scores.mjs` (Lighthouse), `cdp-trace.mjs` (real LCP/CLS), `axe-detail.mjs` (a11y), `shot.mjs` (screenshots), `brand-lint.mjs` (dormant — needs repointing at a new brand lock once a direction is locked).

## Provenance

The agent system was adapted from an external startup kit. The kit's own distribution machinery (`bin/`, `scripts/`, `guides/`, `TEMPLATE-USAGE.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SKILLS_SOURCE.md`) is still present but describes that kit, not Beeond.
