# /color — Set Agent Session Color

Set the badge color of the current session in the Claude Code UI. Use this to visually distinguish parallel agents running simultaneously.

## Usage
```
/color [colorname]
```

## Color Palette

Seven engines, seven assignments. **Derive it rather than trusting this table** —
`grep -H '^color:' .claude/agents/*.md` reads what the engines actually declare, and a shim declares none.

| Engine | Color | When |
|--------|-------|------|
| `orchestrator` | `gold` | Primary / only orchestrator session |
| `orchestrator` #2 | `orange` | Second orchestrator, parallel worktree |
| `orchestrator` #3 | `teal` | Third orchestrator, parallel worktree |
| `orchestrator` #4 | `lime` | Fourth orchestrator, parallel worktree |
| `framer` | `green` | Framing, specs, decisions |
| `sourcer` | `purple` | Evidence and research |
| `builder` | `blue` | Any produced artifact |
| `designer` | `pink` | The perception loop |
| `reviewer` | `gray` | Judgement, out of band |
| `reviewer-readonly` | `gray` | The binding QA gate |

`reviewer` and `reviewer-readonly` share `gray` deliberately: they are one procedure and differ only in
whether a shell is present. If two of them run at once, distinguish them by `/name`, not by colour.

> **Superseded 2026-08-31.** This section listed colours for a 3-layer roster — a "Layer 1 — CEO" block and
> two tables covering `cto` `cpo` `cmo` `cbo` `cco` `qa-lead` `research-lead` `design-lead` and eleven
> workers. Those names are shims now, and **a shim declares no colour** because it never runs. The
> `design-lead`/`qa-lead`/`research-lead` rows were also duplicated verbatim in the old table, which is the
> ordinary fate of a hand-maintained roster list.

## Rules

1. **Every session must have a color.** Default is no color — always set it explicitly.
2. **Parallel orchestrators MUST use different colors.** This is how you tell them apart at a glance.
3. **Set color immediately** at the start of the identity_setup step, before any work.
4. **Color matches engine** — use the table above, don't invent new assignments.

## Example
```
/color gold       → orchestrator, primary instance
/color blue       → builder
/color gray       → reviewer or reviewer-readonly
```

## Combined with /name
Always set both color AND name together:
```
/color gold
/name orchestrator-auth-redesign
```
