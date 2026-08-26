---
role: qa-lead
date: 2026-07-05
branch: feat/landing-v6
tier: full
qa_verdict: PASS
findings_p0_p1: []
findings_p2_p3: 2
---

# QA-Lead — feat/landing-v6

## Scope
12 commits · 66 files · 13,201 insertions · 1,051 deletions · apps/web only.
No API, DB, auth, billing, migrations, agent definitions, or workflow files.

## Tier
Full — no critical-path files, but >300 LOC auto-upgrades from Lite floor.

## Mechanical gates re-run

| Gate | Result |
|------|--------|
| pnpm exec tsc --noEmit | PASS (zero output) |
| pnpm lint (ESLint) | PASS (zero output) |
| node scripts/brand-lint.mjs | PASS — 34 files clean, 12 audited allowances |
| pnpm build | PASS — all routes static, no compilation warnings |
| pnpm test:e2e | PASS — 23 passed / 5 skipped / 0 failed |

## Claims verified

| Claim | Actual | Match |
|-------|--------|-------|
| LH mobile perf 96 | 96 (lighthouse-mobile-v6.json) | ✓ |
| LH a11y 100 | 100 | ✓ |
| LH bp 100 | 100 | ✓ |
| LH seo 100 | 100 | ✓ |
| CLS 0 | 0 | ✓ |
| LH LCP 2.7s (lantern) | 2692.8ms | ✓ |
| scores.json timestamp ↔ LH artifact | 2026-07-05T01:25:56.098Z both | ✓ |
| e2e 23 passed | 23 | ✓ |
| brand-lint 34 clean | 34 | ✓ |

## Findings

### P3-1 — Dead code: journal-comb.tsx not deleted
`apps/web/src/components/hero/journal-comb.tsx` is no longer imported after v6 wave 1
retired the art column (hero.tsx now imports HeroGesture). The file remains on disk
and is scanned by brand-lint (it carries one justified physical-direction allowance).
No functional impact; follow-up cleanup task.

### P3-2 — Test timing: waitForTimeout(350) in swarm scrub tests
Two swarm e2e tests use `page.waitForTimeout(350)` after scrolling before reading
the computed transform. GSAP scrub is deterministic on scroll position (no async
work), so a forced layout check (`page.evaluate(() => void document.body.offsetHeight)`)
would be more reliable. Pre-existing pattern from C7 tests; tests pass.

## Correctness review summary

- GSAP lifecycle (swarm/scrub.tsx): `cancelled` flag, `cleanup?.()` on unmount — correct.
- Hydration safety: `overDark` state initializes `false` (SSR-safe); client IO applies class on mount — no hydration mismatch.
- CSS scroll-driven parallax: `@supports (animation-timeline: view())` + `prefers-reduced-motion` guard inside — correctly gated.
- SSR/JS-off parity: swarm rested state (agents up) tested; JS-off H1 + 11 proofs tested.
- Reduced-motion: GSAP import skipped, runway auto-collapses, e2e-verified with browser `reducedMotion: reduce`.
- RTL: all new sections bilingual via `<I18n>`; physical-direction usages carry brand-lint allowances.
- Security: no dangerouslySetInnerHTML beyond pre-existing static JSON-LD, no external fetches, no secrets, no new process.env reads.
- Honesty: sample data inside SAMPLE-stamped pages; no invented statistics outside sample context; attribution chips verbatim.

## Verdict: PASS
