# The Process — How the Website Gets Designed

*This is the core of the kit: the plan for the planning. Three sessions, each with a hard hand-off contract, agent orchestration, evidence loops, and gates.*

---

## The shape: three sessions, not one

The founder's model — "the design + code is built by one Fable-5 session with all the skills, refs, flows, tests, and agents" — is **Session C** below. It only works if it's fed a locked spec. So we front-load two cheaper sessions that produce that spec.

```
  SESSION A — KIT              SESSION B — DESIGN PLANNING        SESSION C — BUILD
  (this session, done)         (thinking · research · concepts ·  (one Fable-5 session:
                                copy · architecture → LOCKED SPEC) design + code + art + tests)
        │                                │                                │
   references captured             message + concept +               shipped site on a branch,
   skills listed                   wireframe + copy deck             QA-gated, founder-merge
   constraints locked              locked & founder-approved         awaiting
        └──────────────┬──────────────┘                └──────────────┘
                  hand-off contract §HO-1              hand-off contract §HO-2
```

**Why three, not one:** ideation, copy, and architecture are *divergent* work that benefits from research, multiple probes, and a founder decision gate. The build is *convergent* execution that benefits from an uninterrupted long-context session. Mixing them wastes the build session re-litigating direction. Cheap thinking up front → one clean expensive build.

---

## SESSION A — KIT ✅ (this session)

**Owner:** CEO. **Output:** this `website-v7-design-kit/` folder.
Delivered: design brief, captured reference library, categorized skills manifest, locked brand constraints, copy strategy + seed copy, site architecture + onboarding flow, visual-generation pipeline + budget, this process doc. **Status: complete.**

---

## SESSION B — DESIGN PLANNING (the "thinking" session)

**Goal:** turn the kit into a **locked, founder-approved spec** the build session executes without second-guessing.
**Model:** Opus (synthesis/design-heavy). **Chair:** Design-Lead (under CPO), CEO-supervised.
**Skills to load first** (from `03-SKILLS-MANIFEST.md`): `design-orchestration`, `brainstorming` / `multi-agent-brainstorming`, `high-end-visual-design`, `marketing-psychology`, `copywriting` + `humanizer`, `page-cro`, `competitive-landscape`.

### Phase B1 — Absorb & research (parallel workers)
Spawn in parallel, each returns a ≤500-token brief:
- **researcher** ×2 — (a) 2–3 *premium RTL / Hebrew* site references to fill the one gap in our capture set; (b) AI-marketing-agency competitor messaging teardown (what everyone says → so we can *not* say it).
- **cco / customer-voice** — pull real language from the two warm customers if names exist; else flag persona assumptions. Updates `USER-INSIGHTS.md` (hard-gates the copy).
- **cmo** — positioning check against `POSITIONING.md`; owns final message hierarchy.

### Phase B2 — Concept probes (the signature-move decision)
- Run the OpenAI image pipeline (`07-VISUAL-GENERATION.md`) to produce **concept art for the 3 candidate directions** in `01-BRIEF.md §5` (Swarm / Comb-grid / Editorial-restraint) — 2–3 boards each, cream+dark+yellow, **Hebrew display type in the mock**. Budget-capped (see §07).
- **design-critic** + **multi-agent-brainstorming** score them against the brief's anti-generic bar.
- **GATE B-a — Founder picks the direction** (or a hybrid). This is the pivotal call; do not proceed without it.

### Phase B3 — Copy deck (Hebrew-first)
- **cmo** + `copywriting` + `humanizer` write the full copy deck HE-first, EN parity, per `05-COPY-STRATEGY.md`: hero claim, every section's message, the Footprint-Audit wizard microcopy, empty-states, error states, meta/OG, JSON-LD FAQ.
- **Less-is-more pass:** delete every sentence that could describe any agency.
- **GATE B-b — Founder approves the hero claim + section messages.**

### Phase B4 — Architecture & wireframe
- **design-lead** + **cpo** lock the section arc and the wizard flow (`06-SITE-ARCHITECTURE.md`), as a low-fi wireframe (Pencil/Figma or annotated spec) — RTL-primary. Maps every section to its message, its proof, its motion beat, and its art need.
- **GATE B-c — Founder approves the arc + wizard.**

### Hand-off contract §HO-1 (Kit → what Session B consumes)
Session B must start by reading, in one block: `01-BRIEF`, `04-BRAND-CONSTRAINTS`, `05-COPY-STRATEGY`, `06-SITE-ARCHITECTURE`, `02-references/README`, `03-SKILLS-MANIFEST`. It may not change locked (🔒) decisions without a founder ruling logged in `DECISIONS.md`.

### Hand-off contract §HO-2 (Session B → Session C) — the LOCKED SPEC
Session B is **not done** until it produces `website-v7-design-kit/SPEC.md` containing:
1. **Chosen visual direction** (1 of 3, or the hybrid) with the concept boards attached and the signature motion device named.
2. **Final copy deck** — HE + EN, every string, founder-approved.
3. **Section-by-section spec** — order, message, proof, layout intent, motion beat, art asset list (with generation prompts staged for the pipeline).
4. **Footprint-Audit wizard spec** — every screen, field, validation, success/lead-capture behavior, empty/error states.
5. **Component inventory** — what's net-new vs. reusable; any net-new brand token justified.
6. **The gate checklist** (§ below) restated as the build's definition-of-done.
7. **Founder sign-offs** on GATE B-a/b/c recorded.

---

## SESSION C — BUILD (the single Fable-5 session)

**Goal:** ship the site, on a branch, meeting every gate, awaiting only QA-Lead PASS + founder merge word.
**Model:** **Fable 5** (long-context, uninterrupted build). **Runs in an isolated git worktree.**
**Skills to load** (per `03-SKILLS-MANIFEST.md`, build set): `frontend-dev-guidelines`, `nextjs-app-router-patterns`, `tailwind-design-system`, `radix-ui-design-system`, `emilkowal-animations`, `vercel-react-view-transitions`, `web-design-guidelines`, `wcag-audit-patterns`, `screenshots`, `full-output-enforcement`.

### The build loop (per the founder's "with the help of agents" model)
```
  BUILD (Fable-5, the session itself writes the code)
    → generate final art via the OpenAI pipeline (§07), brand-post-process, integrate
    → design-critic  (screenshots via Playwright; judges vs. the chosen boards + brief bar)
    → design-polisher (adds craft density: depth, micro-interactions, motion choreography, spacing/type)
    → loop until the craft bar is met
    → test-engineer   (e2e: locked H1, JS-off, RTL toggle, no-h-scroll ×4 breakpoints, reduced-motion, axe)
    → measure: real Lighthouse + CDP LCP → scores.json
```
These helper agents are spawned **by the build session as it needs them** (design-critic and design-polisher are the evidence loop; test-engineer proves the gates). They advise/verify — the Fable-5 session owns the code.

### GATE C — QA-Lead (independent, sacred)
When the build self-reports done, an **independent QA-Lead** risk-tiers the diff (this is **Full tier** — new site, forms/lead-capture, motion) and spawns `code-reviewer` + `qa-engineer` + `security-engineer` + `craft-reviewer` in parallel. **PASS or BLOCK.** CEO and CTO cannot override a BLOCK.

### GATE D — Founder merge word
Even on QA PASS, merge to `main` + deploy waits on the **founder's explicit word** (standing launch-hold). Deploy: staging (`beeond-preview.vercel.app`) first, production on confirmation.

---

## The gate checklist (Session C definition-of-done)

- [ ] Lighthouse mobile: Perf ≥90 · A11y ≥95 · BP 100 · SEO 100
- [ ] Real LCP < 900ms · CLS < 0.01
- [ ] axe: 0 serious/critical · yellow only as fill-behind-dark-text
- [ ] RTL + LTR parity, 4 breakpoints, no horizontal scroll
- [ ] `prefers-reduced-motion` rested state · JS-off readable
- [ ] Footprint-Audit wizard: all states (empty/loading/error/success), real lead capture
- [ ] `brand-lint` clean · e2e green
- [ ] One signature motion device (not scattered) · matches approved boards
- [ ] Copy matches the approved deck verbatim (HE + EN)
- [ ] QA-Lead PASS filed · session file written · `DECISIONS.md` updated

---

## Agent orchestration map (who does what, when)

| Session | Lead | Workers (parallel) | Validators (out-of-band) |
|---------|------|--------------------|--------------------------|
| A — Kit | CEO | Explore ×2, general-purpose (capture) | — |
| B — Planning | Design-Lead / CPO | researcher ×2, cco, cmo, product-designer (concept art) | design-critic, multi-agent-brainstorming |
| C — Build | Fable-5 (self) | design-critic, design-polisher, test-engineer | QA-Lead → code-reviewer + qa-engineer + security-engineer + craft-reviewer |

**Founder decision gates:** B-a (visual direction) · B-b (hero claim + messages) · B-c (arc + wizard) · D (merge). Four touch-points, each a clear yes/no — not a running commentary.

---

## Cost & spend discipline

- Sessions A & B are cheap (Opus thinking + a bounded image budget). Session C is the one big spend (Fable-5 long build).
- **Image budget:** hard-capped per `07-VISUAL-GENERATION.md`. Concept probes (B2) are low-res/few; final assets (C) are generated once, curated, cached, and regenerated only for *composition*, never for brand color (that's fixed deterministically in post).
- `/clear` between sessions. Each session loads the kit as one cached block; no mid-session re-reads.
