---
date: 2026-08-26
role: ceo
session: ceo-1-1787747601
task: context-decontamination
tier: irreversible
qa_verdict: PASS
recovery_anchor: pre-clean-start-2026-08-26
---

# Clean-start context decontamination

**Why.** The founder killed every prior website ("we need to start over") and asked for a repo containing only correct, current context. The 2026-08-08 reset had been deliberately additive — "nothing deleted, no existing doc edited" — so the handoff was right and everything around it still told agents to do the dead work.

**Cut.** `.agent/` (695-file mirror) and `new agents-skills-workflows-system/` (700-file foreign kit, documented contamination source) — 1,395 files / 236,437 lines. `apps/web` stripped to an instrumented Next 16 shell (163 files). All Beeond design output in `docs/05-marketing` (~51MB); external site captures and the anti-slop negative set kept for the new reference phase.

**Fixed.** `docs/08-agents_work/INDEX.md` — the worst offender, still ordering "Website v7 Phase 3 — READY TO START" with a paste-ready CEO trigger. `package.json` / `README.md` / `CLAUDE.md` / `AGENTS.md` rewritten from GSA-Startup-Kit identity to Beeond; AGENTS.md had routed to 18 agents that don't exist. All four memory files corrected — DECISIONS split (24 entries archived), LONG-TERM's settled-ICP claim removed, USER-INSIGHTS' three invented personas stripped, CODEBASE-MAP populated.

**Kept by founder ruling.** `war-room/` + dashboards · the kit machinery (banner-flagged) · ~20 empty template docs · all 25 war-room agents (17 depend on infrastructure that doesn't exist) · the user-global `~/CLAUDE.md`.

**Verified.** md 2,076 → 762 · `docs/` 114MB → 63MB · build ✓ lint ✓ e2e 2/2 ✓ · 154/154 skill paths resolve · 51/51 agent references resolve · 35/35 cited paths exist · recovery drill from tag confirmed.

**Fully reversible** via `git checkout pre-clean-start-2026-08-26 -- <path>` (tag pushed to origin).
