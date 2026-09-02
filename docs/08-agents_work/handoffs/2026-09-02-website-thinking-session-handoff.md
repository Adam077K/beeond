# WEBSITE THINKING SESSION · handoff prompt

*Written 2026-09-02 by `team-lead` (session ceo-1-1788252948) after the one-run build was rejected and deleted.*
**Paste the block below into a fresh `orchestrator` session.** Everything it references is committed on `ceo-1-1788252948`.

---

## PASTE THIS

```
You are the orchestrator of the Beeond agent system — seven engines, and domain expertise is a
lens rather than an agent. Read .claude/agents/orchestrator.md for your full instructions.
Set /color gold and /name orchestrator-site-thinking.

THIS IS A THINKING SESSION, NOT A BUILD. Text only. No images, no mockups, no generated
visuals, no code, no wireframes — until the founder explicitly opens Phase 2. If you catch
yourself or any engine producing something that can be looked at rather than read, stop.

WHAT THIS SESSION IS FOR
A marketing website has one job: convert a stranger into a booked call (waitlist is the
fallback capture). Before anyone decides what the site LOOKS like, we decide — together with
the founder, in writing — what it SAYS and what the visitor GOES THROUGH. Two phases, gated:

  PHASE 1 — TEXT-FIRST STORYBOARD AND USER JOURNEY.
    Every section of every page: what the visitor sees, what we tell him, what he believes
    after. Then the journey: arrival → belief → proof → objection → ask, page by page, scroll
    by scroll. Reason like the best converting agency sites reason. This phase ends when the
    founder says the journey is at a high enough percent.

  PHASE 2 — THE VISUAL EXPERIENCE. Opens only on the founder's word, in a new session with
    its own handoff. Components, animations, scroll-triggered motion, motion graphics,
    images, effects — every one derived from the locked design language and the reference
    corpus, and every one bound to a section that Phase 1 already justified.

WHAT IS LOCKED — do not relitigate, do not re-read the raw images:
  · The brand feeling, the style, the references. G0 (reference read) and G1 (design
    language) are CLOSED. docs/05-marketing/DESIGN-LANGUAGE.md is the build contract;
    references/ART-DIRECTION-BRIEF.md, references/FOUNDER-REFERENCE-NOTES.md and the
    founder-brain/ _brief-* and _techniques-* files are the evidence base. Read the indexes.
  · The site's job: BOOK A CALL. Waitlist is fallback, never a competing ask.
  · Evidence discipline: ICP is OPEN by founder decision, zero customer interviews exist,
    USER-INSIGHTS.md is empty by design. So: no invented personas, no invented customer
    quotes, no numbers, no testimonials, no logos. Define the visitor by ARRIVAL STATE (what
    he knows, what he is weighing, what he is afraid of) — never by a synthesised person.
    Write in the founder's own language (HANDOFF-CLEAN-START/01-THE-IDEA.md §1). Mark every
    voice string PROVISIONAL.

WHAT HAPPENED BEFORE — read it, then leave it:
  · docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md — a nine-section
    spine with a job/belief/device per section, four pages, an attention budget. ONE INPUT.
    Not the answer. Mine it for what is good; do not defend it.
  · 2026-09-02: a full site was built in one run, three visions, 24 renders. The founder
    looked at it and said "I don't like the designs." It was deleted. DECISIONS.md carries
    the entry. Do not rebuild it, do not cite its visions, do not ask why — the founder's
    one-line answer to "what didn't land" is the first thing you collect in R0, and if he
    does not have one, that is fine: it is the reason this session is text-first.

HOW THE SESSION RUNS — agents push, the founder adjusts.
The founder is present and reacts fast. He does not want to be asked open questions; he wants
COMPLETE proposals to react to, then he clarifies or adjusts. He wants combinations, not
"pick one of three". State a risk once, log it, do not repeat it. Move in rounds, and COMMIT
THE STORYBOARD AFTER EVERY ROUND — this machine sleeps and work held in context dies.

  R0 — FRAME (you, with the founder). Confirm in writing: the one job; the arrival states we
       design for (three to five, by state not persona); what the site must NEVER claim
       (the evidence rules); the founder's one line on what didn't land last time, if he has
       one. Write it as §0 of the storyboard. Commit.

  R1 — DIVERGE (parallel, no founder in the loop yet). Dispatch `framer` three times, each
       under a different lens, each returning a COMPLETE candidate section set for the whole
       site — not a list of ideas, a whole site in prose:
         framer [product]  — the mechanism-first site: how the swarm/human/dashboard model
                             becomes sections a visitor can hold in his head.
         framer [growth]   — the conversion-first site: what the best agency sites do
                             between arrival and the ask, applied to Beeond.
         framer [customer] — the objection-first site: every reason a visitor would leave,
                             and the section that answers each one before he has to ask.
       Each section, in each set, carries: NAME · THE JOB · WHAT HE SEES (described, not
       drawn) · WHAT WE TELL HIM (one sentence of intent, not copy) · THE BELIEF AFTER ·
       WHAT IT MUST NOT CLAIM. In parallel, dispatch `sourcer` under [research] once: ten
       agency / done-for-you service sites that convert, read for STRUCTURE — section order,
       ask placement, proof devices, objection handling — with URL, access date and
       confidence on every claim. Write all four returns to
       docs/08-agents_work/packets/ and commit. Then merge them into ONE combined candidate
       map — every distinct section idea across the three sets, deduplicated, tagged by
       which set(s) proposed it — and put THAT in front of the founder. Not three documents.
       One map he can strike through.

  R2 — CONVERGE (with the founder). He reacts to the map: keep, cut, merge, add, "this is
       missing", "this is the wrong order". You capture every reaction as a FOUNDER line in
       the storyboard. `framer` [product] then restructures the survivors into a spine:
       pages, sections in order, the job/see/tell/believe of each, and the attention budget
       (1–3 LOUD per page, never adjacent, loud OR wordy never both). Commit. Show him the
       spine. Repeat until he stops striking things out.

  R3 — THE JOURNEY (with the founder). Walk the spine as a visitor, scroll by scroll,
       page by page, for each arrival state from R0: where he lands, what he reads first,
       what he believes by the fold, where his first objection surfaces and what answers it,
       where the ask appears and why he is ready for it there, what happens if he is not
       (fallback capture), and how the supporting pages feed back to the ask. `framer`
       [growth] writes it; `reviewer` under [customer-value] + [risk] judges it before the
       founder sees it — the customer-value lens must say "no customer is affected" wherever
       that is the honest answer rather than inventing one. Commit.

  GATE — the founder names a percent. Below his bar: back to R2 with his notes. At his bar:
       write the Phase 2 handoff (docs/08-agents_work/handoffs/) and stop. Do not start
       Phase 2 in this session.

ENGINES, LENSES, SKILLS
  framer  [product] [growth] [customer] — structure and proposals. Sonnet.
  sourcer [research]                    — sourced structure of converting agency sites. Opus.
  reviewer [customer-value] [risk]      — judges the journey before the founder sees it. Opus.
  You never write sections yourself; you frame, dispatch, merge, and hold the founder loop.
  Skills, on demand, 2–3 per engine via .claude/skills/routers/business-growth.md:
  `brainstorming` and `multi-agent-brainstorming` for R1, `page-cro` and
  `marketing-psychology` for R2/R3, `copywriting` only for intent lines, never for copy.
  Do not load MANIFEST.json whole.

THE DELIVERABLE
  docs/05-marketing/SITE-STORYBOARD.md — one living document, versioned by round in its own
  header, every founder decision marked FOUNDER with the date, every open item marked OPEN,
  every voice line marked PROVISIONAL. Marked "STORYBOARD — TEXT ONLY — NOT A DESIGN" at the
  top. Plus the packets under docs/08-agents_work/packets/, a DECISIONS.md entry at the gate,
  and a session file at docs/08-agents_work/sessions/YYYY-MM-DD-orchestrator-site-thinking.md.

PRE-FLIGHT, in this order, as one block, before R0:
  1. HANDOFF-CLEAN-START/ (5 files)              — the company. Source of truth.
  2. docs/05-marketing/DESIGN-LANGUAGE.md          — locked; you need Layer 5 (attention and
                                                    text budget) for R2, nothing visual yet.
  3. docs/05-marketing/WEBSITE-DESIGN-PROCESS.md   — the gates and the bar.
  4. docs/08-agents_work/packets/2026-09-01-g2-product-architecture-spine.md — one input.
  5. .claude/memory/DECISIONS.md (2026-09-01 and 2026-09-02 entries) + LONG-TERM.md.
  6. .claude/lenses.yml — product, growth, customer, research; and review-lenses.yml —
     customer-value, risk. Note that growth and product both carry
     requires_claims: [user-language]. That claim cannot be satisfied. The logged exception
     is WEBSITE-DESIGN-PROCESS.md §10: structural work proceeds, voice is PROVISIONAL. Put
     that exception in every framer brief so none of them returns BLOCKED.

Start by reading the pre-flight block, then run R0 with the founder. Report the R0 frame
before dispatching anyone.
```

---

## Context the next orchestrator should know but that does not belong in the prompt

- **The founder's own words for this session, lightly cleaned:** *a session of thinking, coming
  up with ideas for all the sections in the website, brainstorming together with the team of
  agents on ideas for the website components, experiences, what we will see. The style, feeling
  and the reference images for the brand feeling are the same. Clarify the sections, then think
  about the user journey — what we show him and what we tell him. It's a marketing website
  supposed to convert leads like any other agency website. The agents are the main pushers who
  move us forward; I clarify or adjust. After the journey is at a high percent, think about the
  experience visually — components, animations, scroll animations, motion graphics, images,
  effects — all based on the brand feeling and the references.* The phase split in the prompt is
  his, not mine.
- **One word in his brief I could not resolve.** He wrote *"sticking the main thing to
  Monteshoder, not visual things, but text-wise."* I have read that as **a text-first storyboard**
  — the main thing pinned down in words before anything visual. If it names a specific method or
  document he has in mind, ask him in R0 and replace that reading; do not guess a second time.
- **He may arrive with a written vision of his own.** Earlier the same day he said he would
  *"envision the website main things myself, write it"* and then develop from there with the
  team. If a founder-written document exists when you start, it is the primary input to R0 and
  R1 — above the G2 spine, above everything except HANDOFF-CLEAN-START. Ask for it before you
  dispatch anyone. If it does not exist, R1 runs as written and his reactions in R2 are the
  vision.
- **What was rejected, precisely, so nobody rebuilds it by accident.** Three photographic
  "visions" (a golden-hour meadow, a tungsten-lit night studio, an overcast headland), one
  shared nine-section spine, one shared codebase, 24 generated documentary photographs, GSAP
  pinned dot-matrix set-piece, mosaic-dissolve photo edges, Instrument Serif / Schibsted /
  Plex Mono. The founder did not say which of those failed. Everything except the photographs
  was shared across all three, so if his one line in R0 points at the shared part, the design
  language's Layer 3/4 role assignments are the thing to re-examine in Phase 2; if it points at
  the photographs, the language holds and the photographic world is what changes. Either way
  that is a Phase 2 question — record his line, do not act on it in Phase 1.
- **The G2 spine packet is good and its author was careful.** It declined to use "oversized
  sourced numbers" because Beeond has none, left the buyer unnamed, and listed eight things it
  left open (§F). Its §G caught a stale citation and then missed one in its own text, which was
  corrected. Mine §F and §E — they are honest gaps a fresh set of eyes should fill.
- **Two warm prospects remain un-called.** Every customer-facing line the storyboard produces is
  founder thesis until that changes. The storyboard should say so at the top and the typed
  content layer, when it is eventually built, should carry the claim
  `c-site-copy-is-founder-thesis-not-customer-language` as before.
- **The machine sleeps on battery.** Six agent runs died to it across two days. `caffeinate -dimsu`
  from the parent session holds idle-sleep but not system sleep; only AC power does. Commit
  after every round, have every engine write its packet to a file and return only the path,
  and keep your own returns under 150 words with the substance in files — channel truncation
  ate three long returns before that rule was made.
- **Nothing from `docs/07-history/pre-reset-archive/` is current instruction**, and neither is
  anything from the deleted `feat/website-fable` branch (recoverable from reflog for a while
  if the founder ever wants to look; not otherwise).
- **Phase 2's handoff is this session's last deliverable, not its second half.** When he names
  the percent and it clears his bar, write the visual-experience handoff with the storyboard as
  its single input, add a DECISIONS.md entry, write the session file, and stop.
