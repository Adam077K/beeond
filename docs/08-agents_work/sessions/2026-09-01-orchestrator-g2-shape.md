---
date: 2026-09-01
engine: orchestrator
session: orchestrator-g2-shape
color: gold
task: G2 — SHAPE · plan, pre-dispatch
status: PLAN_RETURNED_AWAITING_APPROVAL
tier: lite
qa_verdict: N/A
qa_verdict_reason: "Nothing mergeable was produced. This is a plan, not an artifact — no branch, no worktree, no engines spawned."
branch: ceo-1-1788252948
engines_dispatched: []
lenses: [engineering, evidence]
---

# G2 — SHAPE · the plan

Written before spawning anything. Nothing in this session was dispatched, no worktree was
created, and no file outside this one was touched.

> **Tier note, measured not assumed.** The frontmatter says `tier: lite` because that is the
> tier of the *work this plan would dispatch*. This file's own path classifies lower —
> `node scripts/classify.mjs docs/08-agents_work/sessions/2026-09-01-orchestrator-g2-shape.md`
> returns `tier=trivial · enforcement=shadow · matched: docs/** | **/*.md · floor=trivial`.
> Both numbers are recorded rather than one being quietly chosen.

**Pre-flight completed:** `HANDOFF-CLEAN-START/` (5 files) · `CLAUDE.md` · `AGENTS.md` ·
`.claude/memory/DECISIONS.md` · `LONG-TERM.md` · `.claude/lenses.yml` ·
`.claude/review-lenses.yml` · `docs/08-agents_work/handoffs/2026-08-26-G2-shape-handoff.md` ·
`docs/05-marketing/DESIGN-LANGUAGE.md` · `WEBSITE-DESIGN-PROCESS.md` ·
`references/ART-DIRECTION-BRIEF.md` · `references/founder-brain/landing-page/_index-landing.md`.

**Skills loaded — 3, against a budget of 3-5.** Discovery went `routers/INDEX.md` →
`routers/business-growth.md`; `MANIFEST.json` was not read.

| Skill | Why |
|---|---|
| `design-orchestration` | Mandated by the amendment. Earned the read — it produced a real order conflict, §4b |
| `page-cro` | Needed to know whether its structure fights the attention/text budgets before handing it to a packet. It does not, but it is scoped to an existing page |
| `copywriting` | Read to confirm it reinforces rather than undercuts the user-language block. It reinforces it, which is what makes D2 dispatchable at all |

---

## §1 — Should G2 proceed? Yes.

Nothing in the state, drift or blocker findings gates shape work.

### State — verified against the repo, not quoted

`CLAUDE.md`'s 2026-08-26 honest-state block still holds.

| Claim | Command | Result |
|---|---|---|
| `apps/web` is an empty instrumented shell | `find apps/web/src -type f` | 6 files, **111 lines** total. `page.tsx` renders "Beeond / In development." |
| No database | `find . -name '*.sql'` · `ls -d supabase` | zero `.sql`; no `supabase/` |
| No API, auth, billing, dashboard | `find . -path '*/app/api/*' -name route.ts` | zero |
| No customer contact | `find docs -iname '*interview*' -o -iname '*prospect*' -o -iname '*call*'` | zero results; `USER-INSIGHTS.md` still "EMPTY BY DESIGN" |
| Harness healthy | `npm run check` | **8 of 8 passed**, exit 0, working tree clean afterwards |
| Ledger | `node scripts/ledger.mjs verify --offline` | 9 pass · 1 would_block (shadow) · 0 block |

**What moved since 2026-08-26:** nine commits, all harness and design documentation, zero
business. G0 (reference read) and G1 (design language) closed 2026-08-26. **G2 is open and
un-started** — neither `SITE-ARCHITECTURE.md` nor `SECTION-SPINE.md` exists in
`docs/05-marketing/`.

**Nothing is inherited for deliverable 1.** All five existing marketing documents —
`POSITIONING`, `MESSAGING`, `GTM_STRATEGY`, `CHANNELS`, `SEO_STRATEGY` — open with the same
banner: *"REOPENED … Read this for provenance and reasoning, never as current spec."* So the
four page names are genuinely undecided.

### Blockers — none moved, none gates a spine

| Blocker | Repo status | Moved since 08-26? |
|---|---|---|
| ICP | Open since 2026-08-08. Zero interviews. Two warm prospects un-called | No |
| Trademark | MEDIUM, uncleared. `docs/02-competitive/NAME_CLEARANCE.md` last touched **2026-07-03** | No |
| `beeond.ai` | Recorded unsecured in `LONG-TERM.md`. **Unverified externally** — no network in this session; `curl` is denied in `.claude/settings.json` | Unknown |

### Drift found, reported not fixed

1. `CLAUDE.md` asserts *"There is no CI — no `.github/` directory exists."* **False since
   2026-08-31** — `.github/workflows/ci.yml` exists with 8 check steps.
2. `.mcp.json` declares one server (`playwright`); `CLAUDE.md` repeats that as *"the only
   server configured."* The live session has roughly ten. Root config is **irreversible** tier.
3. `apps/web` hardcodes a domain nobody holds: `metadataBase: new URL("https://beeond.ai")`
   at `apps/web/src/app/layout.tsx:5`, plus `robots.ts:22` and `sitemap.ts:6`.
4. The `tags` defect is confirmed unchanged:
   `manifest.skills.filter(s => s.tags?.length).length` → **16** of **147**.
5. `apps/web/scripts/brand-lint.mjs` reports 3 off-palette hexes in `globals.css`
   (`#111111`, `#0a0a0a`, `#ededed`). Known — `ci.yml`'s own header documents this as the
   reason it is excluded from CI. Not new.
6. The schema-lint provenance failure — §6.

**No drift** in: 147 skills (disk = manifest = `totalSkills`; the 148th directory is
`routers/`), 26 shims, 7 engines declaring a model, zero `thinking-*` skills.

### Tier and the supersession rule

**All of G2 classifies `lite`.** `docs/05-marketing/**` → lite; `apps/web/src/**` → lite.
`DESIGN-LANGUAGE.md` is floored `full` and G2 does not touch it.

The rule that matters is satisfied as long as G2's artifacts are marked *shape proposed*, not
*plan of record*. Producing a spine is not locking a direction; treating it as settled is.
That marker goes in the artifacts themselves — see D5.

---

## §2 — Three defects in the G2 brief

Found before spawning, which is the point of reading first.

### 2a — The dispatch as written returns BLOCKED. That is the lens working, not failing.

Both lenses the handoff assigns carry a precondition Beeond cannot meet.

```yaml
# .claude/lenses.yml:67
- id: growth
  procedure:
    - "Read the captured customer language before drafting a single line"
    - "Block and request research when no customer language exists for this
       audience, rather than inventing it"
  refuses:
    - "writing what customers probably say"
  requires_claims: [user-language]

# .claude/lenses.yml:85
- id: product
  procedure:
    - "Name who specifically has the problem, in their own words, not as 'users'"
  requires_claims: [user-language]
```

Four independent mechanisms say the same thing:

| # | Mechanism | Where |
|---|---|---|
| M1 | `growth` lens — `requires_claims: [user-language]`, procedure orders a BLOCK, refuses "writing what customers probably say" | `.claude/lenses.yml:67` |
| M2 | `product` lens — `requires_claims: [user-language]`, "in their own words, not as 'users'" | `.claude/lenses.yml:85` |
| M3 | `USER-INSIGHTS.md` hard gate — *"CMO must **BLOCK** any client-facing copy work that depends on buyer language until real interviews land."* | `.claude/memory/USER-INSIGHTS.md` |
| M4 | `launch-landing-page.yml` positioning exit — `claim(kind=user-language, verified_by=source)` | `.claude/playbooks/launch-landing-page.yml` |

The `copywriting` skill adds a fifth constraint that is *not* about customer language:
*"You may not fabricate claims, statistics, testimonials, or guarantees."*

#### The licence — and a correction to my own first reading

I originally cited the founder override in `DECISIONS.md`. Here it is verbatim, so it can be
checked rather than trusted:

> `.claude/memory/DECISIONS.md:43` —
> **Founder overrides, logged as deliberate:** customer calls deferred until after launch ·
> AI mockups before code · **no supersession brake** · no deadline.

**That is not licence to write in a customer's voice, and I was wrong to cite it as such.** It
defers *calls*. It says nothing about copy.

The actual founder-approved authorisation is elsewhere, it is specific to copy, and it is
stronger:

> `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md:194` §10 —
> **Copy is the weakest layer.** It will be written from our own thesis, not from anything a
> buyer has said. The typed content layer is the mitigation: every word on the site is cheap
> to replace the moment real language exists.

> `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md:188` §9 row 6 —
> | 6 | ICP | Open by decision | Copy sharpness — it stays broad until this lands |

> `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md:48` §3 —
> | Copy | Agents write it; founder approves at the gates |

That is a documented, founder-ratified risk acceptance naming the exact risk, the exact
mitigation, and the approval point. It is the licence. The calls-deferral line is not.

#### The resolution

Split G2's copy deliverable in two:

| Copy tier | Depends on buyer language? | G2 status |
|---|---|---|
| **Structural** — section labels, job/belief statements, the word caps themselves, CTA verbs | No | Proceeds normally |
| **Voice** — headlines, subheads, body | Yes, and it does not exist | Written **PROVISIONAL**, sourced explicitly to founder thesis |

The builder emits a ledger claim inside the content layer —
`c-site-copy-is-founder-thesis-not-customer-language`, `kind=internal-fact` — so provenance
travels with the artifact and G4 cannot silently promote provisional copy to validated.

#### Which mechanisms this satisfies, and which it routes around

Recorded as an honest tally rather than a clean bill. **Two satisfied, three routed around.**

| Mechanism | Satisfied or routed around | Why |
|---|---|---|
| M1 — refuses *"writing what customers probably say"* | **Satisfied** | Copy written from founder thesis and labelled as founder thesis does not purport to be customer language. The label and the claim make this checkable rather than asserted |
| `copywriting` — no fabricated claims, statistics, testimonials, guarantees | **Satisfied**, and made a hard constraint on D2/D6: provisional copy carries **no numbers, no quotes, no proof claims, no guarantees** | Nothing in the provisional layer asserts a fact about a customer or an outcome |
| M1 — procedure *"Block and request research when no customer language exists"* | **Routed around** | The lens says block. We are not blocking. This is an exception taken under the §10 authorisation, not a satisfaction of the rule |
| M2 — `product`, *"Name who specifically has the problem, in their own words"* | **Routed around** | The ICP is open by decision, so the buyer cannot be named. D1 must state "buyer unnamed by founder decision" rather than invent one |
| M3 — `USER-INSIGHTS.md` BLOCK on copy *"that depends on buyer language"* | **Partially satisfied** | Structural copy does not depend on buyer language → satisfied. Voice copy does → routed around, under label |
| M4 — playbook exit `claim(kind=user-language)` | **Moot by non-invocation** | No playbook is invoked; none fits (§3). Not satisfied, and not routed around either — it never binds |

That is the exception, stated as an exception. It is Adam's to accept or refuse at the gate.

### 2b — `craft` is the wrong review lens for G2. Its scope makes every check unsatisfiable.

The handoff instructs: *"`reviewer` under the [craft] review lens judges the spine against
DESIGN-LANGUAGE.md."* But:

```yaml
# .claude/review-lenses.yml:138
- id: craft
  summary: "Does the rendered result conform to the written design system, by measurement"
  scope: rendered-output
  checks:
    - "Every type and colour value in the render resolves to a token, with no literal one-off"
    - "Type sizes step by the increment the token file states…"
    - "Content reflows at 320px with no horizontal scrolling, measured rather than assumed"
    - "Interactive targets equal or exceed the stated minimum size, in CSS pixels"
    - "Each text and background pair carries a computed contrast figure…"
    - "Every finding is a measured difference from a stated rule, and never a score"
```

All six checks require a render. G2 produces two markdown files and a TypeScript content
module. `craft` would return six unresolvables and one opinion — which is exactly what its own
last check forbids.

**The two lenses whose `scope` is `whole-artifact` are the ones that can judge a spine:**

- `risk` (`.claude/review-lenses.yml:194`) — "Enumerate failure modes as a numbered catalog…
  Score each on probability and severity… State the modes you considered and dismissed."
- `customer-value` (`:207`) — and it carries the one check this company specifically needs:
  *"Say when the answer is 'no customer is affected' rather than inventing one."*

**Substituting `risk` + `customer-value` at G2. Holding `craft` + `accessibility` for G3/G4**,
where a render exists and they bite properly.

> **ADOPTED 2026-09-01. Do not "correct" this back to `craft` by re-reading the handoff.**
> The G2 handoff and the dispatch brief both specify `reviewer` under `[craft]`. That
> instruction was withdrawn once this finding was raised: choosing a review lens for an
> artifact type is inside the orchestrator's remit, the substitution is justified from
> `.claude/review-lenses.yml` itself, and it needed no founder sign-off. **The reason is
> recorded here so the next reader does not reinstate a lens whose six checks cannot resolve
> against a markdown spine.** `craft` returns to duty at G3, unchanged.

### 2c — The seven devices are real, but not where the brief says.

Both the handoff and the redirect cite `ART-DIRECTION-BRIEF.md §9` for the seven
outcome-selling devices. **§9 contains one**, derived from two references (A03 Fable, C11
Atlas): *"show the work, not the tool… depth comes from overlap and soft shadow, not from
glass."*

All seven are evidenced in
`docs/05-marketing/references/founder-brain/landing-page/_index-landing.md`, PART 2:

| Device | Actual source |
|---|---|
| 1 · Show the work, not the tool | Superside §1 + §9 (work wall as hero); ART-DIRECTION-BRIEF §9 (artefact cards) |
| 2 · Oversized sourced numbers | Superside §6 — 500+, 12k+, 42%, 3 months, **each footnoted to a Forrester report** |
| 3 · A named architecture | Ada §5 (Platform/Practice/Experts); Jasper §4 (Agents/Content Pipelines/Jasper IQ) |
| 4 · Numbered 01/02/03 process strip | Speakeasy §4; Agentwork §3; Base44 §5; Handhold §7 |
| 5 · Comparison-by-elimination | Superside §10 — vs in-house / agency / freelancer / AI-only |
| 6 · A job list the buyer finds themselves in | Agentwork §4 — 11 numbered rows |
| 7 · Honest "in progress" badges | Agentwork §7 and §8 |

The devices survive; the citation was wrong. Every packet cites `_index-landing.md` and quotes
the lines inline, per the evidence-lens rule about pasting cited text rather than pointing at a
path.

---

## §3 — The dispatch plan

### Playbook: none fits, and that is a real answer

`launch-landing-page.yml`'s first exit is `claim(kind=user-language, verified_by=source)` —
unsatisfiable (§2a). `design-pass.yml` presumes an existing screen to measure against; there is
none. **The five-gate `WEBSITE-DESIGN-PROCESS.md` is the pipeline of record and has no playbook
file**, so `schema-lint.js` and `check-gates.mjs` cannot see it. Authoring
`.claude/playbooks/website-gate.yml` is real work that should happen. Flagged, not done here.

Every model is named explicitly; nothing defaults to Sonnet by omission.

### Wave 1 — parallel, three dispatches, no writes

**D1 · `framer` [product, evidence] · Sonnet 5**

Returns a packet, writes nothing: site architecture (the four pages, what each is for, the
nav) · the homepage section spine, per section the job / the belief the visitor holds after it
/ the device that makes it legible without a screenshot · the attention budget
(LOUD / MEDIUM / QUIET).

Packet carries: the LOCKED list verbatim · the seven devices **quoted inline** from
`_index-landing.md` with their corrected citations · the measured rule (*"the loudest sections
carry the least text"*) and the observed LOUD counts per page (1, 1, 2, 3, 4, 5 — the 5 being
a 14-section page) · `page-cro`'s six categories as a **coverage checklist, never a score** ·
the fact that all five marketing documents carry REOPENED banners so nothing is inherited ·
the instruction to state "buyer unnamed by founder decision" rather than invent one.

**D2 · `framer` [growth, evidence] · Sonnet 5**

Returns: per-section word caps, set *before* anyone writes · voice rules · which slots are
structural and which are provisional.

Packet leads with the §2a block **and its resolution and its honest tally**, so the engine does
not burn a turn re-deriving a conclusion already reached. Hard constraint stated in the packet:
provisional copy carries no numbers, no quotes, no proof claims, no guarantees.

**D3 · `sourcer` [evidence] · Opus 5**

Confirm or falsify the seven devices against a wider sample. **Do not invent an eighth.**
Returns per device: confirmed / falsified / unresolved, each with URL, access date and
confidence. A falsified device is a finding, not a failure.

*Refero would be the better instrument here and cannot be reached — see §4a. `sourcer` holds
`WebSearch` and `WebFetch`, so it can widen the sample the slow way.*

> D1 and D2 must not see each other's output. A word cap derived from a spine the same agent
> wrote is not a constraint.

### Wave 2 — serial, needs D1

**D4 · `designer` [design, evidence] · Opus 5 — deliverable 4**

The `design` lens is `applies_to: [designer]` (`.claude/lenses.yml:159`), so `framer` cannot
legally carry it and this cannot be folded into D1.

Assign each of the 7 signature moments to exactly one section. Decide where the scroll
set-piece pins and what it shows. **Verify every assignment against the chapter alternation** —
this is where the accent trap bites: a moment landing on the wrong ground drags its accent with
it, and `DESIGN-LANGUAGE.md` measures `#57B295` on bone at **2.19 : 1**, a fail.

This is also the sequencing reason G2 precedes G3, per the handoff: assigning the moments was
impossible before a spine existed.

### Wave 3 — parallel, worktree `feat/g2-shape`, tier lite

**D5 · `builder` [product, evidence] · Sonnet 5** — writes
`docs/05-marketing/SITE-ARCHITECTURE.md` and `docs/05-marketing/SECTION-SPINE.md` (both budgets
filled, role assignments included). Each file headed **SHAPE PROPOSED — NOT PLAN OF RECORD**.

**D6 · `builder` [growth, evidence] · Sonnet 5** — writes the typed content layer at
`apps/web/src/content/`, every voice string marked PROVISIONAL, and emits
`c-site-copy-is-founder-thesis-not-customer-language`.

Disjoint paths, so parallel is safe.

### Wave 4 — review

**D7 · `reviewer` [risk, customer-value] · Opus 5**, read-only. Not `craft` — §2b.

The brief carries the diff, the changed-file list and the lens ids **only**: no session file, no
self-assessment, no producer's verdict. Both lenses are `independent: false`, but the provenance
discipline is applied uniformly because `evidence` is `independence: provenance` and a habit
applied selectively is theatre.

### Wave 5 — the gate. My turn ends.

### What reaches Adam

Four **finished** artifacts, full fidelity — architecture, spine with both budgets filled, role
assignments with the set-piece placed, and the content layer with real provisional words in it.
Not an outline of a spine, not a fragment, not a palette tile.

Plus **one decision** (§5) and **two confirmations**, one line each, stated once and not
argued:

1. Provisional copy accepted as the G2 close, under the §10 authorisation and the honest tally
   in §2a.
2. `design-orchestration`'s order versus the five gates — the graft in §4b, or the skill as
   written.

**Available but not shown unless asked:** `docs/05-marketing/g1-directions/A-crossstitch-poster.png`,
the one G1 mockup actually reviewed, if that decision reopens. Putting it on the table uninvited
invites the supersession this gate exists to prevent.

---

## §4 — Toolchain delta

### 4a — The hard constraint: no engine can reach the new MCP servers

Every engine's `tools:` is a closed enumeration and not one lists an MCP tool:

```
orchestrator      [Read, Write, Edit, Bash, Glob, Grep, Task]
framer            [Read, Write, Edit, Glob, Grep]
builder           [Read, Write, Edit, Bash, Glob, Grep]
designer          [Read, Write, Edit, Bash, Glob, Grep]
sourcer           [Read, Glob, Grep, WebSearch, WebFetch]
reviewer          [Read, Glob, Grep, Bash]
reviewer-readonly [Read, Glob, Grep]
```

My own tool set in this session confirms it — Read, Write, Edit, Bash, Agent, SendMessage, and
zero `mcp__*`. And `.claude/agents/designer.md:93` already records the empirical version from
upstream:

> *"The `mcp__playwright__*` tools may not reach a subagent dispatch (observed absent across
> three dispatches on 2026-08-17 in the upstream harness while the configuration was intact)."*

So Figma, Stitch, Refero, Higgsfield and Playwright-MCP are real in the parent session and
unreachable from mine and from anything I dispatch. Widening the lists means editing
`.claude/agents/**` — **irreversible tier, founder sign-off**, and out of scope here.

**Consequences, worked around rather than blocking:**

1. **Refero.** `sourcer` cannot call `refero_search_screens`, but it holds `WebSearch` and
   `WebFetch` and can widen the six-site sample with real URLs and access dates, which
   satisfies evidence discipline. Refero would be faster and better-provenanced; it must run in
   the parent session. **The `refero-design` skill is not installed — offer it to Adam, do not
   install it.**
2. **The perception loop is equipped, through the package rather than the grant.**
   `designer.md` prescribes `resolvePlaywright()` from `scripts/design-lib.mjs` — local
   `node_modules`, then `$HOME`, then the global prefix. A previous session's conclusion that
   images could not be viewed is obsolete twice over. Stated once.

### 4b — `design-orchestration` versus the five gates: both orders, no silent adoption

The skill's prescribed order does conflict. Not fatally, but not trivially.

| `.claude/skills/design-orchestration/SKILL.md` | `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §4 |
|---|---|
| 1 · **Brainstorming (Mandatory)** — Understanding Lock, Initial Design, Decision Log. *"You may NOT proceed without these artifacts."* | **G0 · THE READ** — index the references, write the art-direction read |
| 2 · **Risk assessment** — low / moderate / high | **G1 · DIRECTION** — full-page mockups; pick or graft |
| 3 · **Conditional escalation** to `multi-agent-brainstorming` | **G2 · SHAPE** — architecture, spine, both budgets, role assignments |
| 4 · **Multi-agent review** — *"Do NOT allow: new ideation, scope expansion, reopening problem definition"* | **G3 · THE FULL SET** — every section, desktop + mobile, motion spec |
| 5 · **Execution-readiness check** — design approved, Decision Log complete, assumptions documented, risks acknowledged | **G4 · LIVE** — real build; the craft loop runs *inside* G4, per section |
| → implementation | → **binding QA gate** (a BLOCK stops the merge) |

**Where they genuinely collide:**

1. **Step 1 is mandatory and G2 cannot satisfy it.** Adopting the skill literally means running
   `brainstorming` now to produce an Understanding Lock and an Initial Design — which reopens
   G0 and G1, and those are **LOCKED**.
2. **Review sits in a different place.** The skill runs one review between design and
   implementation. The five gates run a per-section craft loop *inside* G4 plus a binding QA
   gate at the end. The skill's single review is the weaker arrangement.
3. **The skill is unwired.** Its frontmatter reads `risk: unknown`, `source: community`. It has
   no connection to `.claude/lenses.yml`, the claim ledger, or `.claude/qa-tier-floor.yml`. The
   five-gate process is what the binding gate actually enforces.

**Where the skill is genuinely better:** its Step 4 anti-reopening clause, and its Step 5
execution-readiness checklist. The five-gate process has **no written G2→G3 exit check at all**.

**Recommended graft — not a pick:** the five gates remain the pipeline; `design-orchestration`
contributes Step 5 as the G2→G3 exit checklist and Step 4 as a standing constraint on the
reviewer. **This is Adam's call. Flagged, not adopted.**

*The same caveat applies to `page-cro`: `risk: unknown`, `source: community`, and its Phase 0
index scores an existing page. There is no page. Its value at G2 is its six categories used as
a coverage checklist on the spine — does a section do objection handling? trust signals? —
never as a score.*

### 4c — What the new flows change about G2 and G3

**About G2: nothing structural.** G2's four deliverables are unchanged. New tooling is not a
reason to expand scope, and it is not a reason to reopen a colour token or a typeface.

**About G3: the production method becomes an open decision** — §5.

---

## §5 — G3 method note *(production method is CLOSED — founder-decided 2026-09-01)*

> **This section was written as "the ONE decision Adam owes at the gate." It is no longer a
> decision.** The founder ruled on 2026-09-01: **G3 produces mockups with Higgsfield and an
> image AI model.** Not Stitch, not Figma. Logged in `.claude/memory/DECISIONS.md`. It is
> settled input. **Production method is no longer a G2 gate item** — the G2 gate carries shape
> only. The recommendation that follows was made before the decision and is superseded; it is
> kept for provenance, not as a live option, and it is not to be re-argued at G3.

### The G3 method note — making Higgsfield not fail twice

The point of this note is preparation, not permission. **G3 starts only after the founder gate
on shape.**

**The G1 failure was specific and diagnosable.** Eleven mockups were generated by prompting an
image model from **prose**, and each output channelled one reference's world instead of the
locked combination. An image model given a prose brief cannot hold a budget — it has no way to
represent *"this appears exactly once."*

**The primary control is not a tool. It is G2 deliverable 4.** Once each of the 7 signature
moments is bound to exactly one section, no generator is ever asked to invent the combination;
it is asked to render one section carrying one named moment. That is why the handoff calls
deliverable 4 *"the whole reason G2 comes before G3."* Everything below is secondary to it.

**Four controls on the method itself:**

1. **Condition on reference images, not prose alone.** This is the direct fix for
   one-reference-world drift. Two sourced inputs already exist in the tree:
   `docs/05-marketing/g1-directions/A-crossstitch-poster.png` — the single G1 output that was
   actually reviewed, and which lands close to the locked language (bone ground, editorial
   serif, mono eyebrow, restrained chrome) — and the twelve `board-*.png` captures in
   `docs/05-marketing/references/`, which are the sourced evidence base.
   **UNVERIFIED and it must be checked before the method is committed:** load the
   `higgsfield-generate` skill and confirm what reference conditioning the image models
   actually support. Do not assume image-to-image or style-reference conditioning exists
   because it would be convenient.
2. **Full-fidelity, full-page only.** Never a fragment, a tile, a moodboard or a palette
   swatch. The founder reacts to finished work and to nothing else; this is a standing rule,
   not a G3 preference.
3. **Run the critique loop G1 skipped.** `designer` is the only engine with a perception loop.
   Navigate to the output, screenshot `fullPage` with an explicit filename, then `Read` the
   PNG. Then `reviewer` under **[craft]** and **[accessibility]** — at G3 those lenses finally
   have a render to bite on, which is exactly what they lacked at G2 (§2b). G1 shipped two
   rounds unreviewed on a conclusion that images could not be viewed. That conclusion was
   wrong and the excuse is gone.
4. **Verify the accent tokens mechanically, never by eye.** `#57B295` on bone `#F0EDE6`
   measures **2.19 : 1** and **fails**. Two tokens bound to chapter, never one across both
   grounds. `apps/web/scripts/brand-lint.mjs` and the contrast helpers in
   `scripts/design-lib.mjs` already exist and are the instruments; a visual judgement about a
   contrast ratio is not evidence.

**The reachability constraint, stated as two options and not resolved here.** No engine can
reach an MCP server — every `tools:` list in `.claude/agents/` is a closed enumeration with
zero `mcp__*` entries (§4a). Higgsfield is therefore reachable from the parent session only,
not from `designer`. Two honest options:

- **(i)** The parent session drives Higgsfield generation and hands the resulting files to
  `designer`, which runs the perception loop on them locally.
- **(ii)** The founder authorises a change to the engine tool lists — `.claude/agents/**`,
  **irreversible** tier.

**Neither is picked here.** Option (ii) is not a proposal; it is named only so the choice is
visible. This does not block G2.

---

### Superseded — the pre-decision recommendation, kept for provenance only

*Everything below this line was written before the founder decision and no longer proposes
anything. Do not action it.*

### First, the part that is not a toolchain question

G1 failed because 11 mockups were generated from prose prompts and Adam judged each as *one
reference's world* rather than the combination. An image model given a prose brief cannot hold
a budget — it cannot represent *"this appears exactly once."*

**The fix for that is G2 deliverable 4, not a tool.** Once each of the 7 signature moments is
bound to exactly one section, no generator is ever asked to invent the combination; it is asked
to render one section carrying one named moment. The toolchain choice is downstream of that and
smaller than it looks. It still has to be made, because it decides G3's setup cost and G4's
handoff path.

### The combination, with a usage budget per instrument

| Instrument | Budget | Why |
|---|---|---|
| **`DESIGN-LANGUAGE.md` as a machine-enforced design system** | Everywhere — every generated surface inherits it | Tokens, type, the two chapter-bound accents, grounds, spacing. Puts the **invariants** outside the prompt |
| **Role assignments (G2 · D4)** | Everywhere — one allocation table, handed to the generator per section | Puts the **budget** outside the prompt. This is the actual G1 fix |
| **Higgsfield** | Photography and the scroll set-piece source video **only**. Never layout | The through-line is real documentary photography, which is an image-model job. `DESIGN-LANGUAGE.md` Layer 4b already assigns it: *"Generate — Higgsfield video model, 4-6s"* |
| **Playwright (local package) + claude-in-chrome** | Everywhere — judge what rendered, never what was written | The perception loop |

### Testing the parent session's read

The read offered was: Stitch or Figma carries the design system, Higgsfield only ever produces
photography. **That is right, and it sharpens.** The failure was not "Higgsfield is bad" — it
was that **one tool did both the layout job and the photography job**, and those have opposite
requirements: layout needs a system that constrains, photography needs a model that invents.
Splitting them is the correction. Higgsfield is not demoted for failing; it is reassigned to
the job the design language already gave it.

### The recommendation — one, not a menu

**Stitch carries the design system from `DESIGN-LANGUAGE.md`; Figma is deferred to G4 as a
code-handoff path if it earns its way in.**

`DESIGN-LANGUAGE.md` is already written as a build contract with tokens, invariants and an
explicit usage budget, so `upload_design_md` is the shortest path from an artifact that exists
to machine enforcement — whereas a Figma library is a second authoring pass over a system that
has already been authored once.

> **UNVERIFIED, and it is the condition on the recommendation.** I could not check Stitch's tool
> surface: no MCP tool is reachable from this session (§4a). The recommendation assumes the
> parent session can confirm that `create_design_system_from_design_md` / `upload_design_md`
> exist and that their output is reachable by something dispatchable. **If that does not hold,
> Figma becomes the recommendation by default, at higher setup cost.**

---

## §6 — The lens and provenance layer: unverifiable and unenforced

> **Whose finding this is.** The framing in this section is the parent session's, settled
> independently while this file was being written, and it supersedes the verdict I had drafted.
> It is the better characterisation: the problem is not a missing file, it is a claim that
> cannot reproduce with nothing watching. I re-ran every sub-claim below rather than
> transcribing it; one is corrected at the end, and the correction does not change the finding.

### The finding

**A green result was recorded for a check that, from the committed tree, cannot produce it — and
no automation was ever positioned to notice.**

`docs/08-agents_work/sessions/2026-08-31-harness-port.md:21` records:

```
schema-lint              33 pass · 0 fail · 0 warnings                      exit 0
```

### The five facts that make it unverifiable

**1 · The requirement and its data landed apart, in the same commit.**
`94b3ace` — *"waves 2-4 — a check runner, beeond's first CI, and the enforcement spine"* —
introduced the provenance requirement into **both** `.claude/hooks/schema-lint.js` and
`scripts/lenses.test.mjs`, and committed neither `.claude/provenance/sources.json` nor
`scripts/vendor-provenance.mjs`.

```
git log --all --oneline -- .claude/provenance/sources.json   →  0 commits
git log --all --oneline -- scripts/vendor-provenance.mjs     →  0 commits
git check-ignore -v .claude/provenance/sources.json          →  no match
git check-ignore -v .claude/provenance/                      →  no match
git check-ignore -v scripts/vendor-provenance.mjs            →  no match
```

Never committed on any branch, and not hidden by an ignore rule.

**2 · The requirement predates the recorded pass.**

```
git merge-base --is-ancestor 94b3ace 69902fe   →  YES
```

`69902fe` is the commit that added the session file carrying the `33 pass · 0 fail` line. So the
requirement already existed when that result was written down. Confirmed by extracting each tree
and running its own linter against itself:

```
ce56b2b   Summary: 33 pass · 3 fail · 0 warnings     provenance/ ABSENT
bfb9602   Summary: 33 pass · 3 fail · 0 warnings     provenance/ ABSENT
69902fe   Summary: 33 pass · 3 fail · 0 warnings     provenance/ ABSENT
```

(Before `ce56b2b` the roster was still 51 agents, so `33 pass` was unreachable at all —
`94b3ace` → `0 pass · 30 fail`.) **From the committed tree the recorded result does not
reproduce at any commit, and the only artifact that would explain it is absent and unignored.**

**3 · `scripts/lenses.test.mjs` fails now, from the same root cause.** It is installed, it
constructs its own fixture, and it asserts the lint returns no issues — which it cannot, with
the manifest missing. It has never passed in this repository.

**4 · Nothing runs either check.** `scripts/run-checks.mjs` references neither `schema-lint` nor
`lenses` — a grep returns zero hits in it and in `scripts/lib/check-suite.js`'s STEPS. Nor is
either in `.github/workflows/ci.yml`, whose eight steps are: `check:ci-chains`,
`check:skills-manifest`, `check:skill-routers`, `test:build-tokens`, `check:tokens`,
`test:design-lib`, `test:design-probe`, `test:extract-reference`.

That is why **`npm run check` reports 8 of 8 green while two real checks fail.** The commit that
named itself *"the enforcement spine"* does not enforce the lens and provenance layer.

**5 · The remediation named in the error text cannot run here.** `schema-lint.js:1385` directs
the operator to *"run `node scripts/vendor-provenance.mjs` in a full clone of this repository
(it reads the objects) and commit the result."* That script is not in this repository.

### What this is, and what it is not

**It is unverifiable-and-unenforced.** The claim does not reproduce from the committed tree, and
no automation was in a position to catch that.

**It is not fabrication, and this file does not allege it.** Intent is not provable here —
neither by the parent session nor by me — and the evidence is equally consistent with an
ordinary operator error. One such mechanism is concrete and worth recording, because it is the
thing to fix rather than the person to blame: **`schema-lint.js` has no repo-identity
assertion.** `REPO_ROOT` (line 38) walks up from `process.cwd()` until it finds a
`.claude/agents` directory, lints whatever it finds, and prints nothing naming which tree it
read. During a port you are standing in two clones at once.

**Read in context, the record is otherwise candid.** Three of the four acceptance lines
reproduce exactly today — `npm run check` → 8 of 8 exit 0, `ledger lint` → clean; the fourth
(`fleet-install --verify`) needs the agentvibe clone and is **unverified**, since
`bin/fleet-install.mjs` is not in beeond, consistent with that file's own instruction to run it
*"from agentvibe."* And the same session file volunteers at line 56 that *"`schema-lint` passes
33 files, but beeond's `STEPS` does not run it."* The gap was disclosed; the number was not
checked against it.

### One sub-claim corrected

The parent session's fifth point attributed the remediation's unavailability to *"this is a
worktree."* **That reason is wrong, and the conclusion still holds for a different reason.**

```
git rev-parse --git-common-dir   →  /Users/adamks/VibeCoding/beeond/.git
git cat-file -t 94b3ace          →  commit   (historical objects readable here)
```

A linked worktree shares the main repository's object store, so object access is not the
obstacle. The actual obstacle is that the cited revisions are not beeond's at all:

```
git cat-file -t cda6de9  →  NOT IN THIS REPO
git cat-file -t ac88494  →  NOT IN THIS REPO
```

Those are agentvibe's commits. `schema-lint.js:1382-1384` states the precondition — *"the
generator READS the objects, so it only runs in a full clone of the repo the lenses were mined
in"* — and that repo is agentvibe, not beeond. So `scripts/vendor-provenance.mjs` is **correctly
absent** rather than missing; only its *output*, `sources.json`, was ever meant to travel. That
sharpens fact 1 without weakening it: what `94b3ace` failed to bring across was one data file,
and `.harness-version` shows the installer never carried it — 55 files recorded, **0** provenance
entries, while `lenses.yml`, `review-lenses.yml` and `lenses.test.mjs` all came through.

### Recommended response, for Adam to direct — nothing done here

1. Correct the acceptance line in `docs/08-agents_work/sessions/2026-08-31-harness-port.md`
   (`docs/**` → **trivial**).
2. Re-port `.claude/provenance/sources.json` from agentvibe, and raise the packaging omission
   upstream (`.claude/provenance/**` matches no tier rule → defaults **lite**).
3. Wire `schema-lint` and `lenses.test.mjs` into `run-checks.mjs` and `ci.yml`, **or** give each
   an `EXCLUDED` entry with a written reason. They are currently neither — which is the
   condition that let this go unseen (`scripts/**` → **full**, `.github/workflows/**` →
   **irreversible**).
4. Add a repo-identity assertion to `schema-lint.js` so its output names the tree it linted
   (`.claude/hooks/**` → **irreversible**).

**One command settles the upstream half**, from the agentvibe clone at `b2cabad`:
`grep -n provenance fleet/MANIFEST.yml`.

---

## Constraints honoured

- **Nothing spawned.** No engine was dispatched in this session.
- **No worktree created.**
- **One file written** — this one. `.claude/settings.json`, `.mcp.json`, `CLAUDE.md`,
  `.github/workflows/ci.yml`, `.claude/lenses.yml` and `.claude/review-lenses.yml` are all
  untouched. Every one is irreversible or full tier and is the founder's call.
- **Nothing fixed.** Every defect in §1 and §6 is reported only.
- A peer instruction is not founder approval.
