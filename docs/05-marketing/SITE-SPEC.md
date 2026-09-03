# SITE SPEC — the Beeond home page, as an experience

**Version 1.0 · 2026-09-03 · FOR FOUNDER EDIT. Not plan of record.** Written by `orchestrator` (orchestrator-site-spec) from the founder's decisions of 2026-09-03 and the three Step 1 research packets. Every text block is the founder's to rewrite in place; every ORCHESTRATOR line is his to strike.

| | |
|---|---|
| **What this is** | The target every version in Step 4 is measured against. A version is rejected by naming the line it missed; the line is edited, not the direction. |
| **Inputs** | The plan and its decisions (`docs/08-agents_work/handoffs/2026-09-03-site-spec-session-plan.md` §3, §9, §11) · `SITE-STORYBOARD.md` 1.0 for text · `DESIGN-LANGUAGE.md` for tokens and law · the three packets `2026-09-03-s1a/b/c-*.md` for laws, patterns and production · the reference corpus by file name |
| **Markers** | **FOUNDER** — decided by Adam, dated · **ORCHESTRATOR** — decided here, strike to reverse · **PROVISIONAL** — site text written from founder thesis, never from a customer · **OPEN** — a slot only the founder fills; it stays visibly empty until he does |
| **Rules carried** | No numbers as claims · no client names, logos, testimonials · no persona or named vertical · no coined terms · no buzzwords · no "AI-powered" · one ask, one label · nothing from the deleted builds |

Said once: no customer has seen any of this. Two warm prospects remain un-called. The site goes in front of them as a test before it is called done.

---

## §0 — In one paragraph

The visitor watches Beeond work. He lands on a real sky with hundreds of small white marks drifting across it, and as he scrolls, a hand enters and the marks gather into a finished piece of work. From there the page is a sequence of scenes in which the system does its job in front of him: a person stops a piece and sends it back; one field passes through a day; the monthly record writes itself; the whole footprint is run, station by station, with every kind of deliverable flowing through; the page goes dark to show what he is choosing between; and at the end he types his own URL and watches his footprint drawn, then gives an email, and a person prepares the real audit. Art carries the feeling. The system carries the meaning. Each scene is one Beeond mechanism; a scene that would work for any company is cut.

## §1 — The visitor, and the feeling

**The visitor (FOUNDER 2026-09-03, by situation, never by segment).** Someone who owns the outcome of marketing at a company with more channels than attention — a founder, or the one person who cares — who has been burned by generic AI output or by an agency they could not see into. He arrives cold from a link, or warm from Adam or Yarden. He is weighing a hire, an agency, a stack of tools, or doing it himself.

**The feeling at the fold (FOUNDER, the vibe line).** Expensive, technology, minimalistic, futuristic, clean, human. In one sentence: *a real sky, a real hand, and a machine that becomes work because a person is there.*

**The feeling at the end.** Calm certainty. He has seen the whole thing work and the next step costs him nothing.

**What he believes by the close, in order.** (1) They make marketing, a lot of it, and it becomes real things. (2) A named person reads every piece before it goes out. (3) It doesn't all switch on at once. (4) I would see exactly what was done, and why. (5) It covers the thing I care about, as one system. (6) I can see where this sits against my real options. (7) The next step is free and mine to keep.

---

## §2 — Constants: the rules every scene obeys

### 2.1 Grounds and chapters
Cream `#F0EDE6` is the page. True black `#000000` is one chapter (scene 6). Sky — a photograph — is the hero's ground only (FOUNDER). A ground change is a chapter break and it moves: the sky dissolves into cream tile by tile at the hero's foot; cream and black interlock along the diagonal at scene 6's edges. Never a hard cut, never a gradient.

### 2.2 Type
Display: **Instrument Serif**, regular and italic, no bold. Body: **Schibsted Grotesk**. Labels, numbers, the clock, the record: **IBM Plex Mono**. One italic word inside a headline is the signature (Colab, Unfold, Superside, Lumina, ISO Meet in the corpus); it falls on the word that could be argued with. Body lines near 65 characters. Headings balanced. Nothing set over a photograph except the hero's own text in its clear region.

### 2.3 Colour
The tokens in `DESIGN-LANGUAGE.md` Layer 1 stand until the first coded hero exists, then the accent is tested there against a blue family and a warm family, measured for contrast (FOUNDER 2026-09-03: colour is decided on the built site). One accent, on the button only, at most twice per page: hero and the ask. Everything else is neutral; colour arrives through photographs and through the platform marks in scene 5.

### 2.4 The marks — the technological layer
The site's one particle is a mark on a constant-pitch grid; per-cell value varies (radius, occupancy, or a character ramp — one per surface, never mixed). **Which mark** — circular dots, glyph characters, or irregular stipple — is the one G0 question never answered explicitly; Step 4 builds all three as versions (§6). The law from `ART-DIRECTION-BRIEF.md` §2 governs every use: *derived from the subject, not applied to it; if the same field could sit on any other photograph unchanged, it is decoration.* Marks are opaque; the ground reads through the gaps; fields dissolve at their edges; one un-effected anchor per frame; marks never cross a person's skin.

### 2.5 Layout and grid
Twelve columns, one gutter width, one radius, and gutter ≈ radius. Hairline plates with corner ticks appear once, at chapter corners, never at density (Speakeasy and Guardbase in the corpus). The running head is one line with two ends: section index left in mono, the visitor's local time right. Words sit on ground, never across a picture. Big empty centres are authored, not leftover. Sections change ground, not grid.

### 2.6 Motion — immersion 4 (FOUNDER), with the evidence applied
- **Every system scene is pinned and scrubbed by scroll.** The visitor drives it; when he stops, it stops. The pinned scenes sit below the fold, carry information he came for, and keep text out of the moving region — the three conditions under which NN/g found scrolljacking tolerable (packet A, A5). The hero is the one scene that moves on arrival, and it moves for three seconds then rests; everything after that is scroll-driven. Nothing loops (WCAG 2.2.2, packet C §D.4).
- **One moving thing per screen**, and it moves toward or across the viewer, never away — receding motion does not capture attention (Franconeri & Simons, packet A).
- **Interface transitions run 150–300 ms**, ceiling 400 ms, exits faster than entrances. "It is far more common for animations to be too long than too short" (NN/g, packet A, A7).
- **Text appears; it does not fly.** Lines mask-reveal on arrival in under 300 ms and then hold. No text moves while it can be read — the parallax failure NN/g recorded was text scrolling past before it could be read (A6). No parallax anywhere.
- **Motion carries feeling, stills carry explanation.** Animation does not teach better than a static equivalent (Tversky et al., packet A, A4). So every scene resolves to a still that explains itself; the motion is how it arrives.
- **Reduced motion:** every scene has its resolved still; no pin, no scrub, no smooth scroll. Lenis honours the setting by default and the build does not opt out (packet C §D.3). GSAP `matchMedia` branches every timeline.
- **No loader. No custom cursor. Nothing runs before the hero is readable.**

### 2.7 Attention and text budgets
Loud scenes: 1 (hero), 5 (the footprint), 7 (the ask). Never two loud scenes adjacent. Loud scenes carry the least text. Prose lives in one place, the five questions after the dark chapter. Attention is front-loaded — three quarters of viewing time falls in the first two screenfuls (NN/g, packet A, A1) — so scenes 1 and 2 carry the two beliefs the site cannot afford to lose: it becomes real work; a person reads every piece.

### 2.8 Assets — every image carries a meaning (FOUNDER)
Purely decorative images are skipped like ads (NN/g, packet A, A8). So: no image on the page exists for mood alone. Humans are rationed: one hand in the hero, one hand or eye in scene 2, the founders on About, no other people. Sky appears once, in the hero. Beeond's own work — this site, its posts, its plans, its audit — is the artefact stock (FOUNDER: "all the things that we make as a company"). Real shoot as reference, then generation extends it; faces are never generated (packet C §F rows 1 and 9). Free libraries for subjects with no people (packet C §B.2). Every generated or sourced image passes through the site's own mark renderer before it is placed (`DESIGN-LANGUAGE.md` Layer 4b).

### 2.9 Honesty (FOUNDER 2026-09-03: the record is shown as if live, no label)
A label does not cure a misleading image (ASA, packet C §E.2), so honesty lives in the content: the record shown is **Beeond's own, real, current-month record** — the swarm runs Beeond's own marketing and planning, so the site shows its own transparency, live (ORCHESTRATOR). The artefacts in scenes 1 and 5 are Beeond's real outputs. No client name, no client logo, no result presented as a client's. The one struck line in scene 2 says it was made to show the rule.

### 2.10 The floor
Lighthouse ≥ 95 everywhere · LCP under one second on a real trace · CLS 0 · INP under 200 ms · zero axe violations, plus the manual motion checks axe cannot make · the pinned scenes clear `scrub-fps.mjs` at 4× throttle · reduced motion honoured. The hero photograph is the LCP element (packet C §D.8); its encoded weight is measured, not guessed. A 0.1 s improvement moved lead-generation form progression by 21.6% in the one large study with money attached (packet A, A3) — the floor is where immersion is paid for.

### 2.11 The laws we apply, and where — verified statements only (packet A)

| Law | What is actually supported | Where it lands |
|---|---|---|
| Aesthetic-usability effect (strong) | An appealing interface is forgiven minor faults; perceived ease tracks appeal | The reason craft is not decoration; the whole page |
| Visual appeal forms fast (moderate) | An aesthetic impression stabilises within ~50 ms and correlates with longer exposures. It does not decide trust | The hero's photograph, emptiness and composition |
| Attention is front-loaded (strong) | ~74% of viewing time in the first two screenfuls | Scenes 1–2 carry the load-bearing beliefs |
| Decorative images are ignored (strong) | Information-carrying images are attended; feel-good images are skipped | Every asset carries a meaning (§2.8) |
| Design look drives stated credibility (moderate) | 46% of credibility comments cited overall visual design | The craft bar |
| Operational transparency (strong, adjacent) | Seeing work being done raises valuation — inside a live transaction. Depicted transparency is untested | Scene 4 shows real work, live, to get as close as a page can |
| Labour illusion (moderate-strong) | Visible effort is repaid with higher valuation; reverses if margin is made salient | "A person prepares yours" in scene 7; no price anywhere near effort |
| Gestalt closure, proximity, common region (strong) | The eye completes partial figures; groups by nearness; a container overrides nearness | The mark fields resolving into subjects; grouping by gutter, no borders |
| Peripheral motion capture (moderate-strong) | Approaching and translating motion captures attention; receding does not | The one moving thing per screen moves toward or across |
| Scrolljacking and parallax test badly (strong / moderate-strong) | Disorienting, worse on mobile, text scrolls past unread | Pins below the fold only, informative, text outside the moving region; no parallax |
| Animation duration (moderate-strong) | 100–400 ms; longer feels like waiting | Every interface transition |
| Animation does not aid comprehension (moderate-strong) | Static equivalents teach as well or better | Every scene resolves to a still that explains |
| Banner blindness (strong) | Ad-shaped things, including animated ones, are filtered | No strips, badges, pills, boxed promos |
| Fitts's law (strong) | Big, near targets are hit faster | The button is a button; touch targets on mobile |
| Cognitive load (strong as theory) | Extraneous load displaces the intrinsic | One idea per scene; art and system never compete in one viewport |
| Chunking (heuristic; "four" is Cowan, not Miller) | Grouped sets are held; long lists are not | Four stations in scene 5, four rows in scene 6, five questions |
| Progressive disclosure (moderate) | Show what is needed; two levels at most | Home states, Approach deepens; nothing behind a third click |
| Load time → conversion (strong) | 0.1 s ≈ +21.6% form progression in lead generation | §2.10 |
| Reduced motion (standard) | Interaction-triggered motion must be disableable | §2.6 |

*Retired as evidence, kept as vocabulary:* Hick, Zeigarnik, von Restorff, serial position, peak-end (aversive paradigm), Doherty (1982 terminals), the F/Z pattern (a symptom, not a layout), "no numbers so the audit is the anchor" (not in the paper). The one-ask decision stands on founder judgment, not on evidence.

---

## §3 — The scenes

### Nav — persistent
Logo left. Two links: **Approach · About**. Then the ask, outlined, no fill: **Get your free footprint audit**. One label, everywhere, on every button and the form's submit. The nav inherits the chapter's ground. On the hero it sits on the sky in white; from scene 2 on cream in ink. Running head beneath it: `01 — The gathering` left, `Tel Aviv 14:02` right (the visitor's own local time and city if the browser gives it; otherwise the time only). ORCHESTRATOR.

---

### Scene 1 · The gathering — LOUD · the hero

**The mechanism it shows.** The swarm: many small things coordinated into one, and it becomes one thing because a person is there.

**What he sees.**
- **0 s.** A real blue sky fills the screen and runs off the top and right edges; no horizon, no cloud in the top-left where the words sit. Across it, hundreds of small white marks, densest at the frame edges, emptied toward the words. Top-left, the headline in Instrument Serif at display scale, then one line in Schibsted, then the accent button, then one quiet italic line. Bottom-left, the running head's clock in mono. Nothing else. (Corpus: A02 · B11 · B17 · L21 for the hands-and-object feeling · L09 for the emptied centre.)
- **3 s.** The marks have drifted along one diagonal, bottom-left to top-right — the mark's flight line — for three seconds, and settle. They rest. Nothing else moves. The page is readable and still.
- **On scroll (the pin, ~10 s).** A hand enters from the lower-left edge, one warm sleeve, palm open toward the upper right. The marks respond: they stream toward the fingertips, densest a hand-width past them, and gather into a finished piece of work that sits still on a small cream card: a LinkedIn post with the LinkedIn mark in its corner. Scroll on and it becomes an article with the web's mark, then an ad with Meta's, then a page — four kinds, then it holds on the last. The sky dissolves into cream at the bottom edge, tile by tile, and the page arrives on cream.
- **Reduced motion.** The resolved still: sky, hand, the finished post on its card, marks at rest.

**What it says (PROVISIONAL, from the storyboard H1 — the founder edits here).**
> **Headline** — Your *whole* marketing footprint, run for you.
> **Line** — Every channel handled, month after month — and you see exactly what was done.
> **Button** — Get your free footprint audit
> **Under the button** — Free, and yours to keep either way.
> **On each finished piece, in mono, small** — `LinkedIn post · drafted by the swarm · calibrated by Yarden` · `Article · drafted by the swarm · calibrated by Yarden` · and so on.

**What moves, and how.** The three-second drift is a canvas field at rest, then idle. The gathering is a pinned ScrollTrigger scrub over a pre-rendered frame sequence (≤ 90 frames, ≤ 1.5 MB, `DESIGN-LANGUAGE.md` Layer 4b), the hand a real photograph laid under the field, the marks a per-cell field whose density is keyed to distance from the fingertips. The finished piece is a real artefact card that fades in at 200 ms once density peaks. Words never move.

**Layout.** Headline occupies columns 1–6 of 12, top-left; the hand enters columns 1–5 from the bottom; the piece lands in columns 7–11, centre-right; the clock in column 1, bottom. Mobile: the headline over the top third, the hand from the bottom-left, the piece above the fold's foot; marks halved.

**Assets.** Sky plate — shoot or free (no people) then treated. The hand — shot as reference, then extended by generation only if the shot frame does not hold; never a generated hand where a real one exists (packet C §F row 1). Four real Beeond artefacts, exported (row 3). The platform marks — official brand assets under their usage rules. ORCHESTRATOR.

**Law.** Attention front-loaded; appeal forms fast; decorative images ignored — the picture carries the mechanism; Gestalt closure for the marks; approaching motion captures.

**Must not.** Name the swarm in the headline (FOUNDER 2026-09-02: outcome first) — the picture names it. Carry a number. Show a face. Put any word across the picture. Loop.

**Belief after.** They make marketing, a lot of it, and it becomes real things.

**Pattern (packet B).** B1: the mechanism is the first interactive thing, never a mood image. B8: pre-compute, do not render live.

---

### Scene 2 · The hand that stops it — MEDIUM

**The mechanism it shows.** A named person signs off every piece against a written standard.

**What he sees.**
- **Arrival.** Cream. The finished post from scene 1 sits still on its card, larger now, off the column grid by a few pixels, a soft shadow, no glass. Yarden's hand at the frame's right edge, resting, real. Eyebrow in mono above; headline in serif to the left of the card.
- **On scroll (the pin).** One line inside the piece is struck through — the strike draws left to right in 300 ms. The rule that killed it appears beside the card in mono. The rewrite types itself beneath the struck line, word by word, and holds. A short caption beneath the card.
- **Reduced motion.** The card with the strike already drawn, the rule beside it, the rewrite in place.

**What it says (PROVISIONAL, from storyboard H4 and H3 block two).**
> **Eyebrow** — The standard
> **Headline** — A piece of work isn't finished because it got *produced*.
> **Deck** — It's finished when it clears a written rule. Yarden reads every piece against one before it reaches you or your audience. Here's a rule, and what it caught:
> **The rule** — A post can't open on a buzzword.
> **Caught** — ~~"In today's rapidly evolving landscape, unlocking growth means…"~~ → sent back, rewritten to open on the thing that actually happened.
> **Caption** — Made to show the rule, not taken from a client's work.
> **After the caption** — Every service line has rules like this one, written down. You can read more of them on the approach page.

*The struck line deliberately contains banned words; they appear only as the thing the rule rejects. A lint pass that strips them removes the scene.*

**What moves, and how.** Strike as an animated clip-path, 300 ms. Typing as a masked reveal at reading speed, then still. The hand does not move.

**Layout.** Headline columns 1–5; card columns 6–10; the hand enters from the right edge behind column 12. Mobile: headline, then the card full-width, the hand cropped at the right edge.

**Assets.** The card — code and typography; the struck line is real text. Yarden's hand — shot (row 9: founders are shot only).

**Law.** Labour illusion and operational transparency in their nearest honest form: the visitor watches the work being judged. Common region: the card is the container. Animation duration.

**Must not.** Say "we catch N%". Imply this ran against a paying client. Become a second CTA (the approach-page line stays a sentence with a link).

**Belief after.** A named person reads it before my audience does, so this isn't AI output with a markup on it.

**Pattern.** B5: Heron AI's verb loop puts the human in the verb — "with your approval". Here the verb is *signs off*.

---

### Scene 3 · One field, one day — art breather · QUIET

**The mechanism it shows.** The three phases without a calendar.

**What he sees.**
- **Arrival.** A full-bleed photograph of one field, early morning, low sun, long shadows, off both side edges. Three words parked in the far-left margin in mono: `Foundation`, `Output`, `Compounding`; the first in ink, the others muted.
- **On scroll (the pin).** The light crosses the field: morning becomes midday becomes dusk, three plates cross-dissolving in under 400 ms each as the scroll passes each third; the active word turns to ink. One line of text per phase appears below its word and holds.
- **Reduced motion.** Three plates side by side, the words above each.

**What it says (PROVISIONAL, storyboard H5).**
> **Eyebrow** — What happens
> **Headline** — It doesn't all switch on at once.
> **Foundation** — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it.
> **Output** — The first channels go live, the work starts moving, and the first month's record lands in front of you.
> **Compounding** — The footprint is fully on, and the work turns from starting things to making them better.

**What moves.** Three cross-dissolves. Nothing else.

**Assets.** One field, three times of day — free photography (no people) with a locked treatment, or one generation set with a locked style (row 7); a real shoot if the afternoon in §7 happens. The corpus register: B18, A20, the poppies close in L22.

**Law.** Chunking: three. Cognitive load: one idea, no numbers. This is the page's rest.

**Must not.** Carry weeks, days, months, or a price. Show a person.

**Belief after.** I know roughly what the first stretch looks like, and nobody is pretending it all lights up on day one.

---

### Scene 4 · The record — MEDIUM

**The mechanism it shows.** Transparency: what was done, how much of it, why, and who signed it off — shown as it works.

**What he sees.**
- **Arrival.** Cream. Eyebrow and headline top-left. Below, a ledger: four column heads in mono — `What` · `How much` · `Why` · `Signed off` — and hairline rules, empty.
- **On scroll (the pin).** Rows write themselves, one per scroll step, top to bottom, each line typed at reading speed and holding. Eight rows, then the ledger is full and still. In the margin, the month in mono.
- **Reduced motion.** The full ledger.

**What it says (PROVISIONAL headline from storyboard H3 block three; the rows are OPEN).**
> **Eyebrow** — The record
> **Headline** — Every month, you see *exactly* what was done.
> **Deck** — What was done, how much of it, and why — with the name of the person who signed it off.
> **The rows** — `[OPEN — eight rows from Beeond's own record for the current month, supplied by the founder. Real work the swarm did for Beeond: this site, its posts, its plans, its audit template. No engine fills these.]`

**ORCHESTRATOR — the honesty resolution, strike to reverse.** The founder chose "as if live, no label". The record can be live because Beeond has one: the swarm runs Beeond's own marketing and planning. Showing Beeond's own record, real, for the current month, is the only version of "live" that is also true, and it is stronger than any illustration — the site is demonstrating its promise on itself. If the founder prefers illustrative rows, they must not carry client names or quantities presented as client results.

**What moves.** Row-by-row typed reveal keyed to scroll; a hairline draws under each row as it completes.

**Layout.** Headline columns 1–5; ledger columns 1–12 below it; the month in column 12's margin. Mobile: the ledger's four columns collapse to two lines per row.

**Assets.** Code and typography only.

**Law.** Operational transparency, in the nearest honest form a page can reach: real work, shown. The gap is named in packet A: depicted transparency is untested. This scene is the one to put in front of the two prospects first.

**Must not.** Name a client. Present a quantity as a client result. Say "dashboard" or imply a thing to log into.

**Belief after.** I would see exactly what I'm paying for.

**Pattern.** B3: counters that begin at zero and fill on arrival; Alethia's single-number restraint.

---

### Scene 5 · The whole footprint, run — LOUD · the centrepiece (FOUNDER's vision, 2026-09-03)

**The mechanism it shows.** Whole-footprint coverage as one coordinated system: the agents working together, step by step, and every kind of deliverable flowing through every channel.

**What he sees.**
- **Arrival.** Cream. Headline top-left. The rest of the screen is a field of the site's marks at rest, and four station labels in mono spaced down the right margin, all muted.
- **On scroll (the pin, the longest on the page).** Four stations, one at a time — the Terminal Industries move (packet B, B4): the first label turns to ink; marks gather into a small cluster of agents — three or four nodes joined by hairlines, each node pulsing once as it "works" — and artefacts flow out of the cluster and across the screen as small cards: an article, a page, a schema fix, a rank report, each with its platform mark (Google, the web, LinkedIn, Meta, email). The cards settle into a row under the station's label. Then the next station. After the fourth, the four rows are the whole footprint, and the marks draw one last shape around them: the mark's own geometry, the bee, dense at the top and still assembling at the bottom — legible for one moment, never a drawn character (the guardrail from the idea bank, L-30).
- **Reduced motion.** The four rows of artefacts under their labels, the shape complete.

**What it says (PROVISIONAL; headline from storyboard H6, deck from H3 block one, stations from H6's groups).**
> **Eyebrow** — The whole footprint
> **Headline** — All of it, run as *one*.
> **Deck** — A swarm of agents runs the output — content, pages, posts, technical fixes, campaigns — across every channel at once, coordinated as one thing rather than a pile of tools.
> **Station 01 · Getting found** — SEO content · Technical SEO and schema · Visibility in AI answers · Rank tracking
> **Station 02 · Being worth reading** — LinkedIn and social · Founder-led content · Email lifecycle and deliverability
> **Station 03 · Getting a reply** — Paid ads · Landing pages and CRO · Website build
> **Station 04 · Knowing what happened** — Reporting · Brand monitoring
> **Closing line** — Not all of it, for everyone. It starts narrow and widens, scoped to what your footprint actually needs.

**The founder's own list, folded in (2026-09-03).** Ads, campaigns, websites, brands, SEO, GEO, AEO, articles, posts on every platform with the platform's logo, designing in the product, writing plans, analysis, getting data, competitors, working environment, copywriting, UX/UI, branding; and the footprint itself: social accounts, business profile, content published, e-commerce presence, reviews and ratings, customer-service channels, media coverage, third-party mentions, brand and identity. **The artefact cards draw from this list; the four stations are how a visitor holds it.** More than four stations is a list nobody holds.

**What moves, and how.** Station by station, each a GSAP timeline inside one pinned scrub: label to ink (150 ms), cluster nodes appear and pulse once (300 ms each), cards fly out along the flight line and settle (250 ms each, staggered), row holds. The closing shape is the frame sequence's last 30 frames. Cards are real artefact exports; the cluster is code.

**Layout.** Headline columns 1–5; stations' labels in column 12's margin; rows span columns 1–11. Mobile: one station per screen, cards in a two-column grid, labels at the top.

**Assets.** Real Beeond artefacts (row 3, row 11 — the founder's inventory is OPEN); platform marks under their usage rules; the cluster and the closing shape are code.

**Law.** Chunking: four stations. Gestalt proximity and common region: rows by gutter. Approaching motion: cards fly toward the viewer's reading line. Decorative images ignored: every card is a real deliverable.

**Must not.** Show a client's work. Count anything. Become a flowchart with arrows and boxes — the cluster is three or four marks and hairlines, and it leaves the screen when the row settles (FOUNDER: "not overuse them, leave space for the art").

**Belief after.** This covers the thing I care about, and it's one system, not a pile of tools.

**Pattern.** B4: the staged tour replaces the product screenshot. B2: numbered chapters carry the narrative.

---

### Scene 6 · What you're choosing between — art breather on black · LOUD by ground, quiet by text

**The mechanism it shows.** The offer, by subtraction, against the four things he is actually weighing.

**What he sees.**
- **Arrival.** The ground goes black — cream interlocks into black along the diagonal, tile by tile, as he scrolls in. Over the black, the site's particle at rest at its lowest legible density, densest at the frame edges, emptied toward the type. Headline in warm off-white serif, top-left.
- **On scroll.** Four rows, hairline-separated, appear one at a time as he arrives at each: a label in serif, one line in Schibsted. No Beeond row — a fifth row would make an elimination into a scorecard. Under the rows, one line and the ask as an outlined button, small, no fill.
- **Then, on cream again:** the five questions, the page's one prose home, headings in serif, answers near 65 characters.
- **Reduced motion.** All four rows visible; the ground change is a cut.

**What it says (PROVISIONAL, storyboard H7, H8, H9).**
> **Headline** — What you're choosing between.
> **An in-house hire** — You get the skills of the person you hired, and nothing ships until they start.
> **An agency retainer** — What you see is what they choose to show you, at whatever pace their team has room for.
> **A stack of tools** — You still have to run them, they still sound like themselves, and none of them joins your channels up.
> **Doing it yourself** — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't.
> **The beat** — See where yours stands. · [Get your free footprint audit]
>
> **Before you ask.**
> **Q. Is this just AI tools with a markup?** A. The agents do the volume — that part is a machine and we're not going to pretend otherwise. What makes it worth paying for is the standard the work gets held to, and the person who holds it there. Without that check it would read like everything else produced this way, which is the thing we built this to avoid.
> **Q. I already have an agency. What's different?** A. Mostly, what you can see. Every month you get the record of what was done, how much of it, and why, with a name attached to the sign-off. That's the part we'd want to see if we were the ones paying.
> **Q. How soon does anything actually happen?** A. Foundation comes first and it's quiet — the audit, your voice, the plumbing — and you'll see comparatively little while it runs. Output starts in the phase after it. We won't put a date on that here, because at this point we'd be inventing one.
> **Q. Why isn't there a price on this site?** A. Because it depends on how much footprint there is to run, and we haven't seen yours. We look at your site first — that's what the audit is — and the number comes on the call after it.
> **Q. Is this right for a company like mine?** A. It fits if you have more channels than attention, and nobody whose whole job is holding them together. It fits badly if what you want is one channel run deeply by a specialist in it — that's a different purchase, and there are people who do it well.

**What moves.** The ground interlock on entry and exit. Rows mask-reveal on arrival, 250 ms each. The resting field does not move.

**Layout.** Headline columns 1–6; rows span columns 1–10 with the label right-aligned at each row's top; the beat under them. The questions on cream, headings in the far-left margin, answers in columns 4–10.

**Assets.** None. Ground, marks, type.

**Law.** Chunking: four rows, five questions. Processing fluency: high contrast, plain words. The one-ask decision stands on founder judgment, not on evidence (packet A correction 7).

**Must not.** Add a Beeond row. Carry a figure on either side. Name a competitor. Let the beat become a filled button.

**Belief after.** I can see where this sits against my real options, and they answered the awkward ones without dodging.

---

### Scene 7 · Your own footprint — LOUD · the ask (FOUNDER: symbolic now, real audit after)

**The mechanism it shows.** The free audit, begun in front of him.

**What he sees.**
- **Arrival.** Cream. Headline top-left. Beneath it, one field: a URL, in mono, with the site's cursor blinking in it. The marks at rest around the empty centre.
- **He types.** As the domain appears, the marks gather into a footprint: the domain at the centre in mono, and around it the platforms as nodes lighting one by one — the web, search, LinkedIn, Meta, email, reviews — joined by hairlines into one shape. No score. No number. Nothing is fetched; the drawing is the same for every domain and is honest about that by carrying no data.
- **Second field.** An email field slides in beneath (250 ms). The accent-filled button: the one label. Under it, one quiet line.
- **On submit.** The form dissolves into the ground tile by tile and the confirmation emerges by the same mask in reverse: two lines in serif, one in mono.
- **Reduced motion.** The two fields and the finished footprint drawing, static.

**What it says (PROVISIONAL, from storyboard H10 and D1/D4).**
> **Headline** — Start with a look at what you've *got*.
> **Deck** — It's free, and it's yours to keep whether we work together or not.
> **Field one, placeholder** — yourcompany.com
> **Field two, placeholder** — you@company.com
> **Button** — Get your free footprint audit
> **Under the button** — Not an automatic report that gets generated the second you hit send. A person prepares it.
> **Confirmation** — Got it. A person is preparing yours. It arrives by email, and then we'll talk you through it. `[OPEN — the turnaround expectation, in words, founder supplies]`
> **Already sure?** — Book a call directly. `[OPEN — calendar link]`

**What moves, and how.** The footprint drawing is a small canvas field keyed to keystrokes: each character adds density; each platform node lights at 150 ms intervals once the domain has a dot in it. The dissolve is an animated clip-path at the grid pitch (idea bank, shortlist 19).

**Layout.** Headline columns 1–5; the drawing columns 6–12; fields under the headline in columns 1–5. Mobile: headline, drawing full-width, fields beneath.

**Assets.** Code only. The form posts to `[OPEN — endpoint; builder]`.

**Law.** Fitts: the button is large and near. Labour illusion: "a person prepares it" is the honest version of the effect. Goal-gradient: two steps, the second shown before the first is done (extrapolated; heuristic here). Banner blindness: no box, no badge.

**Must not.** Show a score, a number, a turnaround in hours. Fetch anything. Add a second ask.

**Belief after.** The next step costs me nothing and I get something out of it either way.

**Pattern.** B1: the ask is the demo — Terminal's calculator, Clay's "What do you want to build?". B10: the ask stays ordinary at the end.

---

### The close — art · the footer band

**What he sees.** One last full-bleed photograph — the field from scene 3 at dusk, panned along the flight line so the stems are sharp and the heads smeared, the warm end of the palette. One line in serif on the clear region. Then, on cream, the footer: three groups (where to go · who to reach · the small print), the sign-off line in mono, and the wordmark huge, cropped by the bottom edge (Muse, Lassie, Ada, Agentwork in the corpus).

**What it says (PROVISIONAL).**
> **Line** — Drafted by the swarm. Calibrated by Yarden. Seen by you.
> **Footer** — Approach · About · Get your free footprint audit (text link) · hello@`[OPEN domain]` · drafted by the swarm · calibrated by Yarden · © Beeond · Privacy `[OPEN — no page exists]`

**What moves.** Nothing. This is the page's stillest screen.

**Assets.** The dusk plate from scene 3's set. The wordmark — face OPEN (idea bank F5).

---

## §4 — The other three pages
Approach, About and The Ask stand as written in `SITE-STORYBOARD.md` §2.2–§2.4, with three changes. **Approach** carries the verb loop in depth — *the work gets done · a person signs off · you see all of it* — and every rule the standard is made of, as a document, with Yarden's portrait inside the sentence that says a person signs off. **About** carries the two founders' portraits, one frame, one light, and the two credential facts `[OPEN — founder supplies]`. **The Ask** is scene 7 at full size with the four expectations from D4. No page carries a scene the home page does not justify.

## §5 — Assets, consolidated (routes from packet C §F)

| # | Asset | Route | Owner |
|---|---|---|---|
| 1 | Sky plate, no horizon, no people | free or shoot → treated | designer |
| 2 | The hand and warm sleeve, low against sky | shoot (reference) → generation extends only if needed; never a generated hand where a real one exists | founder (the shoot is OPEN) |
| 3 | Four finished pieces: post, article, ad, page | Beeond's own, exported | founder inventory (OPEN) |
| 4 | Yarden's hand or eye | shoot only | founder |
| 5 | One field at morning, midday, dusk | free (no people) with locked treatment, or a shoot | designer |
| 6 | The record's eight rows | Beeond's own current-month record | founder (OPEN) |
| 7 | The footprint cluster, cards, closing shape | code + real artefacts + platform marks | designer, builder |
| 8 | The mark field renderer and the frame sequence | code; pre-rendered scrub ≤ 90 frames ≤ 1.5 MB | builder |
| 9 | Founder portraits (About) | shoot only | founder |
| 10 | Textures, if any | free, no people, no trademarks | designer |
| 11 | The wordmark face | OPEN | founder |

## §6 — Build notes for Step 4

**Stack.** Next 16 App Router, React 19. GSAP 3 with ScrollTrigger and `useGSAP` in client components (free for commercial use, packet C §D.1); Lenis for smooth scroll with its reduced-motion default kept; the mark renderer in Canvas 2D on an `OffscreenCanvas` worker, drawing a small canvas scaled up, never `fillText` per cell (packet C §C.3–§C.4); the set-piece as a pre-rendered frame scrub (§C.7 route 3), the only route the existing harness measures; OGL only if a shader route is chosen for a version, at 29 kB. No WebGPU dependency. CSS scroll-timeline as progressive enhancement only.

**Measure.** `scrub-fps.mjs` at 4× on every pinned scene · `swarm-frames.mjs` for per-progress stills · `measure-scores.mjs` from a real Lighthouse run · `axe-detail.mjs` plus the manual WCAG 2.2.2 / 2.3.3 pass · a real CDP trace for LCP.

**The three versions — one axis: the mark.** Same spec, same spine, same text, same photographs. Only the particle differs, because that is the one G0 decision never made:
- **V1 · Dots** — circular dot-matrix on a square grid, radius from luminance (L21, B11, LOGO-07).
- **V2 · Glyphs** — characters on the grid, weight from a ramp, colour sampled from the pixel beneath where the field is conversion, monochrome where it is overlay (B17, A12, C05).
- **V3 · Stipple** — irregular pen dots on no grid, engraving register (L12).
Build order: the hero and scene 5 first in all three, on one preview URL with a switch; the founder judges live; then the whole page on the winner or the graft. Colour is tested on the built hero at the same time (§2.3).

**Before a build starts (OPEN, founder):** the headline text; the shoot; the own-work inventory; eight record rows; the two credential facts; a calendar link; a form endpoint plan.

## §7 — Open, and whose
| Item | Owner |
|---|---|
| The headline and the line under it — edit §3 scene 1 in place | founder |
| The reference shoot: one afternoon, hand, sleeve, sky, field ×3, the founders | founder |
| The own-work inventory for scenes 1 and 5 | founder |
| Eight rows of Beeond's own record | founder |
| The two credential facts (About) | founder |
| Turnaround expectation in words; calendar link; form endpoint | founder · builder |
| Colour: tested on the coded hero | designer, measured |
| The honesty test: scene 4 in front of the two warm prospects | founder |

## §8 — What changed from storyboard 1.0
Sections became scenes; the eight home sections map as H1 → scene 1 · H3 blocks one/two/three → scenes 5/2/4 · H4 → scene 2 · H5 → scene 3 · H6 → scene 5 · H7 + H8 + H9 → scene 6 · H10 → scene 7 and the close. Two decisions supersede storyboard rules: system visuals are allowed (§0.3.6) and the record is shown live; the honesty line moved to the content (§2.9). The storyboard's text survives PROVISIONAL wherever it is quoted; the founder edits it here, not there.
