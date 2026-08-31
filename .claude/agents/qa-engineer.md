---
name: qa-engineer
description: |
  Shim. This agent was collapsed into the `reviewer` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `qa-engineer` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: reviewer
lenses: [engineering, evidence]
retired: 2026-08-31
retires_at: phase-9
---

# qa-engineer — shim

Collapsed into **`reviewer`** on 2026-08-31. Named in `reviewer`'s description.

**Why this file still exists.** A copy of `qa-engineer.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `qa-engineer` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `reviewer` instead**, with lenses `[engineering, evidence]` from [.claude/lenses.yml](../lenses.yml).
