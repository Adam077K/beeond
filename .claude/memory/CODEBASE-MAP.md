# Codebase Map
*Key files, patterns, tech debt. Maintained by code-reviewer after each audit.*

*Last updated 2026-08-26 (clean-start context decontamination).*

## Shape

A near-empty product surface attached to a large agent system. Post-cleanup the repo
holds 762 markdown files against a placeholder Next app — the ratio is deliberate for
now: the agent system is the working tooling, the product has not been built.

| Path | What | State |
|---|---|---|
| `HANDOFF-CLEAN-START/` | Source of truth, 5 files | Current |
| `apps/web/` | Marketing site | **Empty instrumented shell** |
| `.claude/` | Agent system — 26 agents + 25 war-room, 154 skills, 13 commands, 7 hooks, 4 workflows | Working |
| `docs/` | Foundation, competitive, offer, marketing refs, history | Mixed (see below) |
| `war-room/`, `war-room-dashboard/` | Internal swarm visualiser, Vite/React | Scaffolded, not wired |
| `bin/`, `scripts/`, `guides/` | Upstream starter-kit machinery | Not about Beeond — banner-flagged |

## apps/web — entry points

- `src/app/layout.tsx` · `src/app/page.tsx` — placeholders. No design system, no brand tokens.
- `src/app/globals.css` — Tailwind 4 base only. The v3–v7 seven-token `@theme` palette was removed with the v6 site.
- `src/app/robots.ts`, `sitemap.ts`, `not-found.tsx` — real, minimal.
- `public/fonts/` — Rubik latin + hebrew woff2 still on disk. **Not a typeface decision** — the new direction is undecided.

**No** API routes, server actions, middleware, auth, or database. Zero `.sql` files and no `supabase/` directory anywhere in the repo or on any branch.

## The measurement harness — the valuable part of apps/web

`apps/web/scripts/` survived the strip because it is reusable on any design:

| Script | Does |
|---|---|
| `measure-scores.mjs` | Lighthouse runs, writes measured scores |
| `cdp-trace.mjs` | Real CDP trace — true LCP / CLS / INP under throttling |
| `axe-detail.mjs` | Accessibility detail via `@axe-core/playwright` |
| `shot.mjs` | Screenshot capture at set viewports |
| `scrub-fps.mjs` | Scroll-choreography frame timing |
| `brand-lint.mjs` | **DORMANT** — build-failing brand-drift gate. Its allowlist encodes the retired 7-token palette; repoint it at a new brand lock before use. |
| `generate-art.mjs` + 4 `.py` | Image generation and deterministic post-processing (paper normalize, despecular, flatten, spot extract) |

Tests: `tests/smoke.spec.ts` (placeholder). Playwright runs desktop 1440×900 + Pixel 7 against `pnpm start` on :3001.

## Patterns worth keeping

- **Evidence-mandatory builds.** Every merged landing version carried measured Lighthouse + real-trace LCP + e2e counts, never self-reported. This gate held on every merge and was never the reason nothing shipped.
- **Executable brand constitution.** Brand encoded as code (`brand.lock.ts`) with a build-failing linter, rather than as prose nobody re-reads. The file is gone with v6; **the pattern is worth rebuilding** for the new direction.

## Known tech debt

| Item | Why it matters |
|---|---|
| `brand-lint.mjs` allowlist is stale | Will flag the placeholder shell until repointed |
| 17 of 25 `war-room` agents reference Linear / Supabase `audit_log` / Mem0 / Inngest / Telegram | None of that infrastructure exists — they will fail or hallucinate. Kept by founder decision. |
| ~20 unfilled generic-SaaS template docs in `docs/` | Grep returns confident-looking scaffolding instead of nothing. Kept by founder decision. |
| No CI | No `.github/` directory. The QA gate is enforced by agents, not a workflow. |
| 11 skills document infrastructure that doesn't exist | `paddle-integration`, `supabase-rls-conventions`, `pgvector-rag-conventions`, `mem0-patterns`, `linear-mvp-recipe`, `anthropic-routines`, `war-room-orchestration`, `trust-spec-contracts`, `qa-gate-protocol`, `board-meeting-protocol`, `worktree-isolation-pattern` all name Beeond and assume Paddle/Supabase/Mem0/Linear are wired. None are. (An earlier audit claimed `grep -rli beeond .claude/skills` returned zero — it returns 12 including MANIFEST.json. Corrected 2026-08-26.) They are reference patterns, not instructions, so they were left in place. |
| `war-room/dashboard/` duplicates `war-room-dashboard/` | 6 files differ; each carries the same 6.8MB PNG |
