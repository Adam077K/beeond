---
playbook: ship-feature
enter_at: frame
---

# /build — ship a feature

Runs the **`ship-feature`** playbook: [.claude/playbooks/ship-feature.yml](../playbooks/ship-feature.yml).

## Usage

```
/build [what you want built]
```

## Where the pipeline lives

**Here, and nowhere else:** the stages, their exit criteria, the risk tiering and the dispatch are all in
the playbook. This file used to restate all of it in fifty lines of prose naming CEO, Product Lead, Build
Lead, QA Lead and five workers — two descriptions of one pipeline, and two descriptions of one thing
disagree silently, in the direction nobody is looking.

Read the playbook to know what happens. Read [.claude/lenses.yml](../lenses.yml) to know the standard each
stage is held to, and [.claude/review-lenses.yml](../review-lenses.yml) for how it is judged.

## What this command adds

Nothing. It is an invocation. If you find yourself editing this file to change how a build works, the
change belongs in the playbook.

## Two things the old prose said that are still true

- **Worktrees, always.** `builder` and `designer` declare `isolation: worktree` and never touch `main`.
- **No silent merges.** The merge table goes in front of the founder before anything merges, and a PASS
  verdict is required first.
