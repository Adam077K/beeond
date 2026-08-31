---
name: cpo
description: |
  Shim. This agent was collapsed into the `orchestrator` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `cpo` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: orchestrator
lenses: [product]
retired: 2026-08-31
retires_at: phase-9
---

# cpo — shim

Collapsed into **`orchestrator`** on 2026-08-31. Named in `orchestrator`'s description. Product chief was a domain, and a domain is a lens.

**Why this file still exists.** A copy of `cpo.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `cpo` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `orchestrator` instead**, with lenses `[product]` from [.claude/lenses.yml](../lenses.yml).
