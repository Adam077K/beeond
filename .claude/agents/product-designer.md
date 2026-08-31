---
name: product-designer
description: |
  Shim. This agent was collapsed into the `designer` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `product-designer` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: designer
lenses: [design]
retired: 2026-08-31
retires_at: phase-9
---

# product-designer — shim

Collapsed into **`designer`** on 2026-08-31. Named in `designer`'s description. First-paint screen build against a written design system.

**Why this file still exists.** A copy of `product-designer.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `product-designer` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `designer` instead**, with lenses `[design]` from [.claude/lenses.yml](../lenses.yml).
