---
name: design-lead
description: |
  Shim. This agent was collapsed into the `orchestrator` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `design-lead` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: orchestrator
lenses: [design]
retired: 2026-08-31
retires_at: phase-9
---

# design-lead — shim

Collapsed into **`orchestrator`** on 2026-08-31. Design orchestration is orchestration; the design knowledge is a lens.

**Why this file still exists.** A copy of `design-lead.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `design-lead` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `orchestrator` instead**, with lenses `[design]` from [.claude/lenses.yml](../lenses.yml).
