---
name: cco
description: |
  Shim. This agent was collapsed into the `orchestrator` engine in the seven-engine swap. The file remains only to keep the name occupied, because a drifted copy of `cco` may also exist in ~/.claude/agents/ and deleting this one would silently hand the name to it.
kind: shim
engine: orchestrator
lenses: [customer, evidence]
retired: 2026-08-31
retires_at: phase-9
---

# cco — shim

Collapsed into **`orchestrator`** on 2026-08-31. Named in `orchestrator`'s description.

**On the ambiguity.** `cco` has a claim to two engines: it owned customer *voice*, which is research,
and it also owned the *decision* about what to do with that voice. `orchestrator` wins because
`orchestrator`'s `description:` names `cco` explicitly, and because `orchestrator` is the only authorised
writer of `.claude/memory/USER-INSIGHTS.md` — the file `cco` was required to update every session, and
`sourcer` cannot write it. For the research half, dispatch `sourcer` under `[customer, research]` and let the
orchestrator record what it returns.

**Why this file still exists.** A copy of `cco.md` may also live in `~/.claude/agents/`, and those copies
have drifted. Project agents shadow global ones, so deleting this file would not remove the name — it would
un-shadow the older definition, and `cco` would keep working while meaning something else. A failure that
keeps working is worse than one that stops.

Phase 9 reconciles the fleet and removes both.

**Use `orchestrator` instead**, with lenses `[customer, evidence]` from [.claude/lenses.yml](../lenses.yml).
