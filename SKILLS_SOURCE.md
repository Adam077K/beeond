# Skills Library Source

## Source

- **Upstream:** [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills)
- **Location:** `.claude/skills/` — 147 curated skills, indexed by `.claude/skills/MANIFEST.json`

## Discovery

Agents find skills by reading `MANIFEST.json` and filtering the `skills` array by `tags`.
Never `ls | grep` the directory. Load 3-5 SKILL.md files for CEO/C-suite/leads, 2-3 for workers,
and only on demand — never preload.

## Update Skills

To pull the latest skills from upstream:

```bash
npx antigravity-awesome-skills --path .claude/skills
```

Re-generate `MANIFEST.json` after any add/remove so discovery stays accurate.

## Compatibility

This project targets **Claude Code**. The skills format is also readable by Cursor,
Antigravity IDE, Gemini CLI, and Codex CLI, but no mirrored copy is maintained here —
`.claude/skills/` is the single location.
