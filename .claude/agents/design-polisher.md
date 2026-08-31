---
name: design-polisher
description: |
  Shim. This agent was collapsed into the `designer` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `design-polisher` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: designer
lenses: [design]
retired: 2026-08-31
retires_at: phase-9
---

# design-polisher — shim

Collapsed into **`designer`** on 2026-08-31. Named in `designer`'s description.

**On the loop.** `design-polisher` existed because `product-designer` built and something
else had to refine. `designer` is defined by the render → look → iterate loop, so the polish pass is a
further turn of the loop it already runs, not a second agent.

**Why this file still exists.** A copy of `design-polisher.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `design-polisher` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `designer` instead**, with lenses `[design]` from [.claude/lenses.yml](../lenses.yml).
