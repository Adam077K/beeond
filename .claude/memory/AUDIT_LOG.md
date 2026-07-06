# QA Audit Log

| Date | Branch | Tier | Verdict | Reviewers | Notes |
|------|--------|------|---------|-----------|-------|
| 2026-07-05 | feat/journal-hero | Full | PASS | code-reviewer, security-engineer, adversary-mode | P3 only: build-evidence PNG bloat, sizes hint unvalidated, generate-art.mjs error-body echo (dev script). tsc+eslint+brand-lint clean. |

## 2026-07-05 — feat/landing-v6 — QA-Lead PASS

| Field | Value |
|-------|-------|
| Branch | feat/landing-v6 |
| Tier | Full |
| Verdict | PASS |
| P0/P1 | 0 |
| P2/P3 | 2 (P3 only — dead code + test timing) |
| Gates | tsc PASS · lint PASS · brand-lint PASS · build PASS · e2e 23/0 |
| LH scores verified | 96/100/100/100 · CLS 0 · timestamps co-incident |
| Session file | docs/08-agents_work/sessions/2026-07-05-qa-lead-landing-v6.md |

---
date: 2026-07-05
qa-lead: PASS
tier: full
branch: ceo-2-1783169439 (landing-v61 delta from bf14b1c)
gates: tsc PASS · lint PASS · brand-lint PASS · build PASS · e2e 23/28 PASS
findings: P2×1 (dead CSS rule globals.css:442) · P3×2 (eager hero on mobile; spot-vessel 81KB)
session: docs/08-agents_work/sessions/2026-07-05-qa-lead-landing-v61.md

## 2026-07-06 — DEPLOY: beeond-preview.vercel.app (staging share, founder-directed)

| Field | Value |
|-------|-------|
| What | feat/landing-v6 @ 1d787c3 (v6.2, both QA gates PASS) deployed from the worktree via Vercel CLI |
| Where | NEW scratch project `beeond-preview` on the founder's personal Vercel account — NOT beeond.ai |
| URL | https://beeond-preview.vercel.app (public production alias; previews are auth-walled, hence prod alias) |
| Why | Founder: shareable link to show people. Launch-hold on the real domain UNCHANGED (TM clearance etc.) |
| Rollback | delete the Vercel project or `vercel rollback`; repo untouched |
