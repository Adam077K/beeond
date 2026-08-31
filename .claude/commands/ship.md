# /ship — Pre-Deploy Pipeline

Full quality gate + deploy pipeline for production. Requires a PASS verdict before any deploy.

## Usage
```
/ship [feature-name or "all"]
```

## Pipeline Steps

### Step 1 — reviewer, scope + correctness lenses
`reviewer` audits recently changed files:
- Code quality + severity ratings (🔴 BLOCK / 🟡 WARN / 🔵 NOTE)
- Stub detection: any `TODO`, `return null`, empty handlers, placeholder text?
- Wiring check: APIs connected? State rendered? Forms submitting?
- API documentation current?

If 🔴 BLOCK found → **STOP**, route to `builder` for fixes. `reviewer` cannot fix what it finds.

### Step 2 — the binding gate
`reviewer-readonly` runs it — no shell, so the thing being gated cannot reach the gate:
- `npm audit --audit-level=high`
- OWASP checklist for changed routes
- 3-level verification: exists → substantive → wired
- Auth tests on new endpoints
- LLM eval if AI features changed

Verdict: **PASS** or **BLOCK**

If BLOCK → **STOP**, route to `builder` for security fixes. No session overrides a BLOCK; only the founder
may file a logged, finding-by-finding false-positive appeal.

### Step 3 — deploy
If PASS, `builder` under the `engineering` lens — **irreversible tier, founder sign-off required**:
- Deploy to staging
- Smoke test: auth + payment + core feature
- Deploy to production
- Health check + error rate baseline
- **Verify deploy succeeded** (don't just kick it off — confirm it's live and healthy)

### Step 4 — Confirm
- Verify: `curl -s -o /dev/null -w "%{http_code}" https://[app-url]/api/health`
- Notify: "[feature] deployed to production"
- Log to `.claude/memory/DECISIONS.md` if architecture changed

## Abort Conditions

- Stubs found → fix required before continuing
- 🔴 BLOCK from `reviewer` → `builder` fixes first
- BLOCK from the binding gate → security fix required
- Build failure → `builder` fixes
- Health check fails after deploy → Auto-rollback via `vercel rollback`
