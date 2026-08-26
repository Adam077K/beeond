# Contributing to GSA Startup Kit

> **⚠️ Not about Beeond.** This file documents the external agent **starter kit** this
> repo's `.claude/` system was adapted from — not Beeond the company. It is kept for
> provenance and for the kit machinery in `bin/` and `scripts/`. For what this project
> actually is, read [`HANDOFF-CLEAN-START/`](HANDOFF-CLEAN-START/) and [README.md](README.md).
> Flagged 2026-08-26 during the clean-start decontamination.


Thank you for contributing to the Green Startup Academy Startup Kit!

## How to Contribute

### Skills

- **Add a new skill:** Create a folder under `.claude/skills/[skill-name]/` with a `SKILL.md` file
- **Improve a skill:** Open a PR with your changes; follow the structure in `.claude/skills/`
- **Skill source:** Most skills come from [antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills). For upstream changes, contribute there; for GSA-specific skills, add them here

### Agents

- **Modify agents:** Edit files in `.claude/agents/` (e.g. `ceo.md`, `cto.md`)
- **Add an agent:** Add the agent file and update `AGENTS.md` with routing and slash commands

### Documentation

- **README:** Keep the root README GSA-focused; skills live in `.claude/skills/`
- **Hebrew docs:** `guides/GETTING_STARTED.md` — improve onboarding for כפר הירוק students
- **Quick reference:** Update `guides/QUICK_REFERENCE.md` when adding commands or agents

### Workflow Bundles

- **Workflow bundles:** Document in `guides/workflow-bundles.md`

## Pull Request Process

1. Fork the repository
2. Create a branch (`git checkout -b feature/my-change`)
3. Make your changes
4. Ensure existing behavior works (open in Claude Code / Antigravity)
5. Submit a Pull Request with a clear description

## Code of Conduct

Be respectful and supportive. This kit serves youth at Green Startup Academy (כפר הירוק).
