---
name: data-engineer
description: |
  Shim. This agent was collapsed into the `builder` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `data-engineer` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: builder
lenses: [engineering, evidence]
retired: 2026-08-31
retires_at: phase-9
---

# data-engineer — shim

Collapsed into **`builder`** on 2026-08-31. Named in `builder`'s description. `evidence` because its discipline was returning verified numbers, never estimating them.

**Why this file still exists.** A copy of `data-engineer.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `data-engineer` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `builder` instead**, with lenses `[engineering, evidence]` from [.claude/lenses.yml](../lenses.yml).
