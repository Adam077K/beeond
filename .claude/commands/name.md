# /name — Set Agent Session Name

Name or rename the current session. Use this to identify agents, distinguish parallel instances, and make session history readable.

## Usage
```
/name [session-name]
```

## Naming Convention

### Pattern
```
[engine]-[task-slug]
```

Where `task-slug` is a short kebab-case description of the current task.

### Examples by engine

```
/name orchestrator-auth-redesign
/name orchestrator-pricing-analysis

/name framer-scan-feature-spec
/name framer-pricing-model

/name sourcer-competitor-deep-dive

/name builder-auth-api
/name builder-dashboard-nav
/name builder-schema-migration

/name designer-dashboard-overview

/name reviewer-auth-audit
/name reviewer-readonly-merge-gate
```

The slug says what the task is, not which domain it belongs to — domain is a lens the engine loads, and it
does not appear in the name.

> **Superseded 2026-08-31.** These examples were grouped "CEO / Team Leads / Workers" and used prefixes
> like `build-`, `qa-`, `devops-`, `product-`, `growth-`, `business-` — nine of which named a role rather
> than an agent that existed even then. The prefix is the engine now, and there are seven of them.

## Rules

1. **Name every session.** Unnamed sessions are unidentifiable in history and parallel views.
2. **Name at the start** of identity_setup, right after /color.
3. **Keep names short** — under 40 characters. Task slug should be 2-4 words max.
4. **Rename mid-task if scope changes** — `/name` can be called at any time.
5. **Parallel orchestrators** must have names that reflect their distinct tasks, not just instance numbers.

## Parallel orchestrator example
```
Worktree 1: /color gold  → /name orchestrator-feature-auth
Worktree 2: /color orange → /name orchestrator-fix-scan-engine
Worktree 3: /color teal  → /name orchestrator-research-competitors
```

## Combined with /color
Always set both together at session start:
```
/color purple
/name research-competitor-deep-dive
```

## Session file naming
The session name should match the session file you write at task end:
```
/name build-auth-redesign
→ writes: docs/08-agents_work/sessions/2026-04-06-build-auth-redesign.md
```
