# /plan — Sprint / Feature Planning

Plan a feature or sprint. `orchestrator` frames it; nothing is built.

## Usage
```
/plan [feature or sprint description]
```

## What This Does

### Step 1 — orchestrator intake
`orchestrator` reads LONG-TERM.md + DECISIONS.md, asks clarifying questions:
- What are we trying to accomplish?
- What's the deadline or priority?
- Are there existing specs or prior decisions to honor?
- What complexity level: Quick / Medium / Complex?

### Step 2 — framer (if the feature is vague)
If the request is an idea without a spec, `orchestrator` dispatches `framer` under the `product` lens to
write a PRD first:
- Problem validation
- RICE scoring
- PRD with acceptance criteria written to `.claude/memory/specs/[name].md`

### Step 3 — Technical breakdown
`framer` under the `engineering` lens explores the codebase and produces:
- Task list with an engine and lenses per task
- Wave ordering (parallel where possible, sequential where dependencies exist)
- Worktree names for each task
- Estimated complexity (S/M/L per task)

### Step 4 — Plan Output

```
## Plan: [Feature Name]

### Complexity: Medium

### Tasks
Wave 1 (parallel):
- `builder` (lens engineering): [task] → worktree: feat/[name]-api
- `builder` (lens engineering): [task] → worktree: feat/[name]-db

Wave 2 (after wave 1):
- `builder` (lens engineering): [task] → worktree: feat/[name]-ui

### QA: `reviewer` (lenses security, correctness) after wave 2
### Merge: Human confirmation required

### Estimated total: [S/M/L]
```

### Step 5 — Start?
`orchestrator` asks: "Ready to start? I'll kick off `/build [feature]` or you can review the plan first."

## Notes
- Plan is not automatically executed — user decides when to start
- `framer` does the codebase exploration, not `orchestrator`
- If PRD was written: it's saved to `.claude/memory/specs/` for reference
