# G2 — SHAPE · handoff prompt

*Written 2026-08-26 by `ceo-website-design-process` at the close of G0/G1.*
**Paste the block below into a fresh CEO session.** Everything it references is committed on `main`.

---

## PASTE THIS

```
You are the CEO of the Beeond C-suite agent system. Read .claude/agents/ceo.md for
your full instructions. Set /color gold and /name ceo-g2-shape.

We are at GATE 2 (SHAPE) of a five-gate process for the Beeond marketing website.
G0 (reference read) and the design language are COMPLETE and LOCKED. Do not reopen
them. Do not re-read the raw reference images — read the indexes.

PRE-FLIGHT, in this order, as one block:
  1. HANDOFF-CLEAN-START/ (5 files)      — the company. Source of truth.
  2. docs/05-marketing/DESIGN-LANGUAGE.md — THE BUILD CONTRACT. Every visual
                                            decision descends from this file.
  3. docs/05-marketing/WEBSITE-DESIGN-PROCESS.md — the gates and the bar.
  4. docs/05-marketing/references/ART-DIRECTION-BRIEF.md — the evidence base.
  5. .claude/memory/DECISIONS.md (2026-08-26 entry) + LONG-TERM.md.

WHAT IS ALREADY LOCKED — do not relitigate:
  · Site's job: BOOK A CALL. Waitlist is the fallback capture.
  · Scope: one landing page + 3 supporting pages.
  · Through-line: real documentary photography, tech layer dialled subtle→dramatic.
  · Grounds: warm bone #F0EDE6 ↔ true black #000000, ALTERNATING chapter by chapter.
  · Colour: photography owns colour. ONE accent, primary CTA only, max twice/page.
    Deep pine #1F4D3D on light, #57B295 on dark. TWO TOKENS BOUND TO CHAPTER —
    #57B295 on bone is 2.19:1 and FAILS. Never one accent token across both.
  · Type: Instrument Serif (display, no bold) · Schibsted Grotesk · IBM Plex Mono.
  · 7 signature moments, EACH USED EXACTLY ONCE.
  · Photo shape bound to job; photo edge = mosaic dissolve.
  · Motion: GSAP + ScrollTrigger. One pinned scroll-scrubbed set-piece,
    ≤90 frames, ≤1.5MB, below the fold, never the LCP element.
  · Copy lives in a TYPED CONTENT LAYER, never inline in JSX. Non-negotiable —
    customer interviews happen AFTER launch, so every word must be cheap to replace.

YOUR DELIVERABLES FOR G2 — four artifacts, then a founder gate:

  1. SITE ARCHITECTURE — the 4 pages, what each is for, and the nav.

  2. HOMEPAGE SECTION SPINE — per section:
       · the job it does
       · the belief the visitor holds after it
       · THE DEVICE that makes it legible WITHOUT a product screenshot
         (Beeond sells an outcome, not software. There is nothing to screenshot.
          Devices measured from 6 real outcome-selling sites, in ART-DIRECTION-BRIEF §9:
          show the work not the tool · oversized sourced numbers · a named
          architecture · numbered 01/02/03 process strip · comparison-by-elimination
          · a job list the buyer finds themselves in · honest "in progress" badges.)

  3. THE TWO BUDGETS, filled in per section:
       · ATTENTION — LOUD / MEDIUM / QUIET. 1–3 LOUD per page, never two adjacent.
         MEASURED RULE: the loudest sections carry the LEAST text. A section may be
         loud OR wordy, never both.
       · TEXT — a word cap per section, set BEFORE anyone writes.

  4. ROLE ASSIGNMENTS — the one thing G0/G1 deliberately left open. Assign each of
     the 7 signature moments to exactly one section, and decide where the scroll
     set-piece pins and what it shows. Assigning these was impossible before the
     spine existed; it is the whole reason G2 comes before G3.

  Then: copy drafted into the typed content layer. Agents draft, founder approves.

ORCHESTRATION: T2 dispatch-packet. Spawn CPO (architecture + spine) and CMO (copy)
as chiefs returning paste-ready packets; you spawn the workers. Design-Lead reviews
the spine against DESIGN-LANGUAGE.md before it reaches the founder. Opus for
direction and critique, Sonnet for structure and copy. Never Haiku for judgment.

THE GATE: the founder approves shape and words. Then G3 (full mockup set), G4
(live build), then the binding QA gate.

HOW THE FOUNDER WORKS — this matters more than any instruction above:
  · He judges by eye, fast, and only reacts to FINISHED work. Full fidelity or
    nothing. Never show him a moodboard, a fragment or a palette tile.
  · He wants COMBINATIONS, not picks. If you find yourself writing "choose one of
    three", you have the wrong shape — build a system with a usage budget instead.
  · Send agents to look at images; do not load them into your own context. Have
    them rename files descriptively so the filename carries the meaning.
  · He overrides sequencing recommendations knowingly. State a risk ONCE, log it,
    then stop repeating it.

STILL OPEN, and none of it blocks G2:
  ICP (open by decision — keep copy broad) · lead-capture plumbing (booking and
  waitlist have no backend; deferred) · beeond.ai unsecured · trademark uncleared.
  Fonts resolved: free-only.

Start by reading the pre-flight block, then report your plan for G2 before spawning
anyone.
```

---

## Context the next CEO should know but that does not belong in the prompt

- **G1 produced 11 full-page mockups** (GPT Image 2, 77 credits, in the founder's Higgsfield feed, 2026-08-26). They are *not* the direction — the founder judged them as one reference's world each rather than the combination, which is what produced the design language. Treat them as discarded exploration, not as candidates.
- **Viewing generated images DOES work — use Playwright.** `curl`, `file:` URLs and a local http server are all blocked, but this works and is the method for G3:
  1. `mcp__playwright__browser_navigate` to the raw image URL
  2. `mcp__playwright__browser_take_screenshot` with `fullPage: true` and an explicit `filename`
  3. The PNG lands in the **worktree root** — then `Read` it normally
  The CEO in this session wrongly concluded it was blocked (a bad `find` invocation) and shipped two rounds of mockups unreviewed. **The design-critic and anti-slop loops CAN run at G3.** Move the file out of the repo root afterwards; `.playwright-mcp/` is now gitignored.
- **One G1 mockup is kept** at `docs/05-marketing/g1-directions/A-crossstitch-poster.png` — the cross-stitch poster. It is the only one that was actually reviewed, and it lands close to the locked language (bone ground, editorial serif, mono eyebrow, restrained chrome) despite cross-stitch sitting on the "not used" list. Worth putting in front of the founder if that decision is revisited.
- **Seven of the founder's own reference notes disagreed with their images.** In every case his instinct was right and his recollection drifted. When he describes a reference, verify against the file before acting.
- **The `_brief-0*.md` and `_techniques-*.md` files under `references/founder-brain/` are the useful layer.** Read those, not the 105 images.
- **`apps/web` is a bare instrumented Next 16 shell.** The measurement harness in `apps/web/scripts/` survived and includes `scrub-fps.mjs` and `swarm-frames.mjs`, which are purpose-built for verifying the scroll set-piece.
