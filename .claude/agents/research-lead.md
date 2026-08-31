---
name: research-lead
description: |
  Shim. This agent was collapsed into the `sourcer` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `research-lead` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: sourcer
lenses: [research, evidence]
retired: 2026-08-31
retires_at: phase-9
---

# research-lead — shim

Collapsed into **`sourcer`** on 2026-08-31. Research-Lead and researcher were the same discipline at two scopes.

**Why this file still exists.** A copy of `research-lead.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `research-lead` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `sourcer` instead**, with lenses `[research, evidence]` from [.claude/lenses.yml](../lenses.yml).
