# Concept 01 — The hand and the swarm · homepage spec · 2026-09-02 · framer [design] · PROVISIONAL

| | |
|---|---|
| **Status** | Not plan of record. Text only. Nothing generated, rendered or built. The founder strikes through. |
| **Lead id** | **A-30** — the swarm obeys the hand (ranking #5), with C-08 · C-04 · C-09 · L-17 · L-30 · X-37 as one system |
| **Hero real thing** | One person, low against open late-afternoon sky, entering from the right, one open hand raised on the flight-line diagonal |
| **Ground** | True black first screen; Home alternates black → bone → black → bone → meadow-over-bone → bone |
| **Forks resolved** (from the ranking, not reopened) | F1 B · F2 A · F3 A real shoot · F4 A · F5 A · F6 B · F7 A · F8 A-then-test · F9 A. OPEN: F10–F13, the wordmark face, the favicon |
| **Nearest kin** | L21 · C05 · C02 · B17 · L20 |
| **Must not resemble** | L25 — the moment the bee reads as a drawn creature this becomes the mascot on sky. negative-1 Landio — dark, fog, glow, centred stack |
| **Lens exception (pasted)** | Lenses may carry `requires_claims: [user-language]`; it cannot be satisfied — ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` is empty by design; the logged exception is `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds; nothing here is claimed as customer language. |

Every voice line below is the storyboard's, PROVISIONAL, quoted verbatim. `[Square brackets]` are OPEN slots and stay empty.

---

## 0. The concept in five lines

1. Many small things, coordinated into one, beside a person who stays a person.
2. Cream directional marks scattered across real sky thicken along a raised forearm and resolve, one hand-width past the fingertips, into a single bee — dense at the head, still assembling at the bottom, legible for one moment, never a drawn character.
3. The layer *is* the swarm; it becomes one thing because a human is there. On another photograph there is no hand for the density to obey.
4. Words on black, never across the picture; the headline split at its own comma; the rail bottom-left, the accent button bottom-right.
5. Feeling: *futuristic* — "a swarm gathered into one thing beside a raised hand, and the person is the one doing the looking."

---

## 1. Tokens and type scale

**Chapter tokens, by ground.** Home's ground map: **H1 black · H3–H6 bone · H7–H8 black · H9 bone · H10 bone (the meadow photograph over it) · footer bone.** Every boundary interlocks in a one-row band of 16 px tiles along the diagonal (S-01), never a straight cut.

| Token | Bone chapters | Black chapters |
|---|---|---|
| ground | `#F0EDE6` | `#000000` |
| surface | `#FFFFFF` | `#0E0E0E` |
| ink | `#141614` | `#EFEDE7` |
| muted | `#5E625C` | `#8E938C` |
| rule | `#DCD8CF` | `#242624` |
| accent (CTA fill only, twice per page: H1, H10) | `#1F4D3D` | `#57B295` |

**Type scale.** Instrument Serif regular and italic only; emphasis is size and one italic word, never weight.

| Element | Face | Desktop px / leading | Mobile px / leading | Measure | Tracking | Case |
|---|---|---|---|---|---|---|
| Display headline (H1, H7, H10) | Instrument Serif | 80 / 1.0 | 44 / 1.05 | ≤ 3 lines, balanced | −0.01em | sentence |
| Section headline (H3–H6, H9) | Instrument Serif | 56 / 1.05 | 34 / 1.1 | ≤ 24ch | −0.005em | sentence |
| Question (H9 rows) | Instrument Serif | 32 / 1.15 | 24 / 1.2 | ≤ 40ch | 0 | sentence |
| Deck | Schibsted Grotesk 400 | 22 / 1.4 | 18 / 1.45 | ≤ 44ch | 0 | sentence |
| Body (blocks, answers, lists) | Schibsted Grotesk 400 | 18 / 1.5 | 16 / 1.5 | 65ch (`max-width: 40em`) | 0 | sentence |
| Eyebrow | IBM Plex Mono 400 | 12 / 1 | 11 / 1 | one line | +0.12em | UPPER |
| Label / mono (rules, rail, ordinals, sign-off) | IBM Plex Mono 400 | 13 / 1.4; ordinals 11, raised | 12 / 1.4 | one line | 0 | as written; ordinals `01` |
| Running head | IBM Plex Mono 400 | 12 / 1 | 11 / 1 | one line | +0.08em | UPPER |
| Button | Schibsted Grotesk 500 | 15 / 1 · 52 px tall · 14 × 24 padding | 14 / 1 · 48 px tall | one line | +0.01em | sentence |
| Risk line (H1, under the button) | Instrument Serif italic | 20 / 1.3 | 17 / 1.3 | one line | 0 | sentence |
| Caption | Schibsted Grotesk 400 | 14 / 1.4 | 13 / 1.4 | ≤ 60ch | 0 | sentence |

**The italic word, per headline (C-34 — the arguable phrase, never the noun).** H1 *whole* · H3 *order* · H4 *produced* · H5 *all* · H6 *actually* · H7 none · H9 none · H10 *look*.

**Radius, gutter, grid — one number: 16 px.** The mark's cross-shaped gutter measures about a tenth of one quadrant cell (`_index-logo` Part 2, 8–10%); the site's column is built to the same ratio: at 1440 wide, 8 columns of 160 px with 16 px gutters and 24 px outer margins, so column : gutter = 10 : 1 as cell : gutter is in the mark (X-33). Radius = gutter = 16 px on every cell — buttons, the H4 card, mosaic tiles (16 / 32 / 48 / 64) — at every width. Below 768: 4 columns, 16 px gutter, 20 px margins. Hairline full-height rules in the chapter's rule token at the two margins and after columns 2, 4 and 6 — five rules, quartering the page; they carry nothing. The mark registers to column 1: 28 px tall in the nav, the full 160 px cell in the footer, flat, no shadow (X-43, X-38).

**Instrument layer.** One clock on the page. The running head is a 24 px mono line fixed beneath the nav: `01 / 09 · HOME` with nine stripe-cell bars beside it, filling one per item (X-15); its right end carries the visitor-local time from H3 onward. In the hero the same clock sits in the rail bottom-left with `(Scroll)`, which fades on the first scroll event and does not return (X-14). No city, no coordinates, no other number.

**Exclusion rule, stated once.** No tile, mark or dot may land within 32 px of any text box. Words sit on ground; the photograph and the field thin to nothing before they reach them.

---

## 2. The sections, in order

### Nav — persistent, inherits the chapter

> Approach · About
>
> Get your free footprint audit

**What he sees.** 72 px band on the chapter's ground (64 on mobile). Mark far left, the two links right of centre, a hairline divider (X-05), the outlined button far right — 1 px accent border, accent label, no fill.
**Layout.** Mark in column 1; links end at the column-6 rule; button right-aligned to the margin. Mobile: one line, mark 24 px, links 14 px, button 13 px with 12 px padding — measured before build.
**Type.** Body row for links; button row.
**Colour.** On black: ink `#EFEDE7`, outline `#57B295`. On bone: `#141614`, `#1F4D3D`. Never swapped.
**Motion.** None on scroll. Hover fills the outline with the accent, label to ground, 200 ms in, 150 ms out. Reduced motion: opacity only.
**Feeling.** *Clean.* L20's nav.

### H1 · Hero — LOUD · moment 1 as overlay (ghost-twin method, F1 B)

> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

**What he sees — the real thing.** One photograph, real, shot from low against open late-afternoon sky with no horizon (A-02). A person enters from the right edge and is cropped by it — body, not margin (C-06); their torso runs off the right and bottom-right in shadow (C-28). Head at about 68% across, 42% down, face turned up and to the right. One open hand raised at head height, the forearm on the 45° flight-line diagonal, shoulder at 76% / 60%, fingertips at 86% / 43% (A-30). Gaze on a point one hand-width past the fingertips (L-07). One mustard knit sleeve is the only warm thing in frame (B-42); no green anywhere (C-33). A low wall or ladder just out of frame is the ordinary reason to be up against sky (C-32). Sun low from the right, polarised, so the sky is darkest at the upper left where it meets the ground. Grain captured in camera (B-24); freckles, pores, a real squint. The raised hand is the frame's one un-effected anchor (C-14).

**The technological layer and its job.** One particle: a short opaque dash in `#EFEDE7`, 8 × 2 px, angled 45° along the flight line — the mark's stripe, no letters, no dots (L-17, B-15, X-37). Rendered on a 12 px grid by occupancy only (B-21). Density is lowest at the dissolve front and in open sky (occupancy ≈ 0.03), rises along a ridge parallel to the forearm, and at 91% / 35% — one hand-width past the fingertips (B-17) — reaches a peak that reads as a bee: body axis on the forearm's line, wing spread on the finger spread (C-08), ≈ 110 px long and 150 px across; thorax at 0.85, wing roots 0.4, wingtips and abdomen thinning to single marks so it is still assembling out of the air (C-09). No eyes, no legs, no outline: a density peak, legible for one moment (L-30). Not one mark touches skin or sleeve — silhouette mask stepped to the grid with a one-cell margin. Density is highest toward the right frame edge and empties toward the type (X-06). **The job:** it is the swarm, and it becomes one thing because a human is there.

**The dial.** Dramatic, inside the sky only. Zero on the person.

**Layout.** Single column over full-bleed grounds. The photograph runs off the top (under the opaque nav) and right edges; it disintegrates into black along a 45° front whose centreline runs from 40% across at the nav's foot to the bottom edge at 97% — a band six tiles deep, image-carrying tiles on the upper-right side, ground tiles on the lower-left, single 16 px tiles trailing up to 160 px beyond (B-02, A-19, A-16). Words on black, never across the picture (A-07). **First half** `Your whole / marketing / footprint,` top-left, columns 1–3, from 14% down. **Second half** `run for you.` on black right of centre, left edge at column 4, from 68% down, the deck beneath it at 480 px measure, the filled button beneath that, the risk line beneath the button (L-09). **Rail** bottom-left: `16:42 · (Scroll)` (L-24). Mobile 390 × 844: portrait second crop, shot for; first half on black above the photograph, the photograph running off left and right and dissolving downward, second half · deck · button · risk line · rail on black below (S-14).

**Type.** Display (first half three lines, second half one); deck; button; risk line italic; rail mono. Italic word: *whole*.

**Colour.** Sky blue, skin, mustard — all of it inside the upper-right. Marks `#EFEDE7`. Headline `#EFEDE7`, deck `#8E938C`. Button fill `#57B295`, label `#000000` — the only colour on the ground, once.

**Motion.** Canvas at 12 fps after the photograph has painted. Per-cell occupancy re-samples slowly against a noise field; density waves travel bottom-left to top-right at 40 px/s; cells above 0.8 never re-sample, so the thorax holds while the wingtips and abdomen flicker. No cursor, no parallax, no scroll response. **The frame to print — the resolve frame:** a wave crest passing the thorax, wings at their fullest occupancy, abdomen still open. Reduced motion: that frame, rendered once.

**Feeling.** *Futuristic*, with *human* the constant. Stands nearest L21 (black, a hand, one thing), B17 (marks on grainy sky, the sentence around the picture), C05 and C02 (a creature drawn from marks over a real photograph), L20 (the split headline).

### H3 · How the work gets done — MEDIUM

> **Eyebrow** — How it works
>
> **Headline** — What happens, in order, every time.
>
> **Block one — The work gets done.**
> A swarm of agents runs the output: content, pages, posts, technical fixes, campaigns, across every channel at once, coordinated as one thing rather than a pile of tools.
> *What that means for you:* the work happens without you managing it.
>
> **Block two — A person signs off on it.**
> Yarden reads every piece against a written standard before it reaches you or your audience. Not a spot check — a standard, written down, that a piece has to clear before it counts as finished.
> *What that means for you:* nothing goes out that doesn't sound like you.
>
> **Block three — You see all of it.**
> Every month you see exactly what was done, how much of it, and why — with the name of the person who signed it off.
> *What that means for you:* you never have to ask what you're paying for.

**What he sees.** Bone. No image. Three blocks stepping diagonally down and right, each with a raised mono ordinal `01` `02` `03`, no connectors (L-14, S-11 index only). The layout says sequence.
**Layout.** Eyebrow and headline columns 1–4. Block one columns 1–3, block two 3–5, block three 5–7, each 96 px lower than the last. Mobile: one column, ordinals kept.
**Type.** Eyebrow; section headline; body, label in ink and its line in muted at one size (X-09). Italic: *order*.
**Colour.** Bone tokens only.
**Motion.** Blocks arrive by opacity in order along the diagonal, 200 ms each, 80 ms apart, once. Still: all present.
**Feeling.** *Clean.* L20's numbered plates.

### H4 · What "done" means — MEDIUM · moment 6, blueprint

> **Eyebrow** — The standard
>
> **Headline** — A piece of work isn't finished because it got produced.
>
> **Deck** — It's finished when it clears a written rule. Here's one of them, and what it caught:
>
> **The rule** — A post can't open on a buzzword.
> *Caught:* "In today's rapidly evolving landscape, unlocking growth means…" → sent back, rewritten to open on the thing that actually happened.
>
> **Caption** — Illustrative. Made to show the rule, not taken from a client's work.
>
> **After the caption** — Every service line has rules like this one, written down. You can read more of them on the approach page.

**What he sees.** One white artefact card, radius 16, tilted −1.5°, 24 px off-grid, soft shadow only. Inside: the struck line in grotesk, the rule beside it in mono, the rewrite beneath. The technological layer is the card's own working: baseline and x-height hairlines running past the struck line to the card's edge, labelled `baseline` `x-height` in 10 px mono (C-17), and the struck line drawn a second time, faint, in the rule token behind the rewrite (B-32). Dial: light.
**Layout.** Text columns 1–3; card columns 4–7. Caption under the card; the approach line a plain underlined sentence under the text, never a button. Mobile: text, then card full-width.
**Type.** Eyebrow; section headline; deck; body struck; label mono; caption. Italic: *produced*.
**Colour.** Bone; card `#FFFFFF`; hairlines `#DCD8CF`.
**Motion.** The strike draws left to right once on entry, 300 ms. Still: struck.
**Feeling.** *Technology.* C11's baseline-and-x-height plate.

### H5 · The shape of it — MEDIUM · moment 2, the set-piece

> **Eyebrow** — What happens
>
> **Headline** — It doesn't all switch on at once.
>
> **Foundation** — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it.
>
> **Output** — The first channels go live, the work starts moving, and the first month's record lands in front of you.
>
> **Compounding** — The footprint is fully on, and the work turns from starting things to making them better.

**What he sees.** One bud against sky opening, generated, ≤ 90 frames, each run through the dot renderer: square grid, 8 px pitch, dot radius from luminance, colour sampled from the flower — the only colour in the middle of Home. The dial is scrubbed, not only the frames (A-09): patches of dots on the closed bud, total conversion only when fully open. Circles first; the mark's cross tested on the first frames (F8). The three phase labels are plotted call-outs: a hairline ink line from each label to a real feature — sepal edge, first parted petal, open centre — passing behind one petal (B-28, B-20). Shot wide open so the blur is the anchor (B-40).
**Layout.** Pinned full-bleed canvas over 300vh, dots dissolving inward within 160 px of each side edge (F9 A). Labels stacked in columns 1–2, real DOM text, surfacing at scrub 0.05 / 0.40 / 0.75. Below the fold, never the LCP. Mobile: tighter crop, fewer frames, labels above.
**Type.** Eyebrow; section headline; label in ink, line in muted. Italic: *all*.
**Colour.** Bone; the flower's coral and gold through the dots; nothing else.
**Motion.** Scroll-scrubbed, deterministic, reversible; the site's one pinned element. **The frame to print — the Output frame:** petals parting, half the bud in dots, `Output` pinned. Reduced motion: that frame as a poster, all three labels shown.
**Feeling.** *Futuristic.* C04 (dots on sky), B20 (marks on a real blurred flower), A12 (colour taken from the petal beneath).

### H6 · What's covered — QUIET

> **Eyebrow** — Coverage
>
> **Headline** — What "whole footprint" actually covers.
>
> **Getting found** — SEO content · Technical SEO and schema · Visibility in AI answers · Rank tracking
>
> **Being worth reading** — LinkedIn and social · Founder-led content · Email lifecycle and deliverability
>
> **Getting a reply** — Paid ads · Landing pages and CRO · Website build
>
> **Knowing what happened** — Reporting · Brand monitoring
>
> **Closing line** — Not all of it, for everyone. It starts narrow and widens, scoped to what your footprint actually needs.

**What he sees.** Four columns of type on bone, ordinals `01`–`04` at each head (A-22), the quartering hairlines doing the dividing. No icons, cards or ticks.
**Layout.** Headline columns 1–4; groups in columns 1–2 / 3–4 / 5–6 / 7–8, items stacked; closing line columns 1–4 beneath. Mobile: one column, four groups.
**Type.** Eyebrow; section headline; body, label ink, items muted. Italic: *actually*.
**Colour.** Bone tokens.
**Motion.** None.
**Feeling.** *Minimalistic.* A16's four numbered columns.

### H7 · What you're choosing between — LOUD

> **Headline** — What you're choosing between.
>
> **An in-house hire** — You get the skills of the person you hired, and nothing ships until they start.
>
> **An agency retainer** — What you see is what they choose to show you, at whatever pace their team has room for.
>
> **A stack of tools** — You still have to run them, they still sound like themselves, and none of them joins your channels up.
>
> **Doing it yourself** — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't.

**What he sees.** The ground flips to true black across an interlocking tile band. Four ruled rows and an **empty fifth**, ruled and unlabelled, at the position the Beeond row would occupy (L-02). Over the black, the hero's particle at rest (X-23): static, occupancy 0.02 on the 12 px grid, in the surface token `#0E0E0E`, lifted to the rule token `#242624` if the first render is invisible — one number decides both. Loud by subtraction.
**Layout.** Headline columns 1–5. Ledger rows (X-16): name flush left in columns 1–2, consequence in columns 4–8, one baseline, hairline beneath spanning 1–8; the fifth row the same height, name slot empty. Mobile: name above consequence, hairline under each, fifth row kept.
**Type.** Display headline; question row for names; deck row for consequences. Italic: none.
**Colour.** `#000000` ground, `#EFEDE7` ink, `#242624` rules. No accent.
**Motion.** None.
**Feeling.** *Expensive.* C18 (no centrepiece), LOGO-03 (the mark in a starfield).

### H8 · The ask beat — QUIET

> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**What he sees.** Same black chapter, 96 px under the fifth row: one line and the outlined button at 48 px, the smallest the target minimum allows (S-17).
**Layout.** Columns 1–3, left-aligned. Mobile: same.
**Type.** Body for the line; button.
**Colour.** Outline and label `#57B295`, no fill.
**Motion.** Hover fill as the nav's.
**Feeling.** *Minimalistic.* L20's quiet mid-page ask.

### H9 · Before you ask — QUIET

> **Headline** — Before you ask.
>
> **Q. Is this just AI tools with a markup?**
> A. The agents do the volume — that part is a machine and we're not going to pretend otherwise. What makes it worth paying for is the standard the work gets held to, and the person who holds it there. Without that check it would read like everything else produced this way, which is the thing we built this to avoid.
>
> **Q. I already have an agency. What's different?**
> A. Mostly, what you can see. Every month you get the record of what was done, how much of it, and why, with a name attached to the sign-off. That's the part we'd want to see if we were the ones paying.
>
> **Q. How soon does anything actually happen?**
> A. Foundation comes first and it's quiet — the audit, your voice, the plumbing — and you'll see comparatively little while it runs. Output starts in the phase after it. We won't put a date on that here, because at this point we'd be inventing one.
>
> **Q. Why isn't there a price on this site?**
> A. Because it depends on how much footprint there is to run, and we haven't seen yours. We look at your site first — that's what the audit is — and the number comes on the call after it.
>
> **Q. Is this right for a company like mine?**
> A. It fits if you have more channels than attention, and nobody whose whole job is holding them together. It fits badly if what you want is one channel run deeply by a specialist in it — that's a different purchase, and there are people who do it well.

**What he sees.** Bone returns. The page's one prose home: title parked in the left margin, five open hairline rows beside it, ordinals `01`–`05` raised beside each question (L-13, S-08). Nothing visual.
**Layout.** Title columns 1–2, not sticky. Rows columns 3–8; answers at 40em. Mobile: title above, one column.
**Type.** Section headline; question; body. Italic: none.
**Colour.** Bone tokens.
**Motion.** None; rows are open, not accordions.
**Feeling.** *Clean.* L13's cream document.

### H10 · Close — LOUD · moment 3, motion blur

> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**What he sees.** The hero's own place, later in the same afternoon, the person gone (L-03): a wildflower meadow panned bottom-left to top-right so the streaks lie on the flight line (A-28), stems sharp and heads smeared (B-36), gold and coral on blue, heavy grain. Dial: subtle — the blur is the photograph's own; no marks.
**Layout.** The photograph runs off the left, right and bottom edges and dissolves upward into bone along a diagonal front; words on bone above it, never on it. Headline columns 1–6, deck beneath at 44ch, the filled button beneath that. Mobile: words, then the photograph running off three edges below.
**Type.** Display; deck; button. Italic: *look*.
**Colour.** Warm end of the palette inside the photograph; button `#1F4D3D` filled, label `#F0EDE6` — the second and last accent fill.
**Motion.** Grain re-seeds at 4 fps at very low amplitude. **The frame to print:** the still itself. Reduced motion: the still.
**Feeling.** *Human.* B18, A20.

### Footer — QUIET

> drafted by the swarm · calibrated by Yarden

**What he sees.** Bone. The mark filling column 1 at 160 px, flat ink. Three groups: where to go (Approach · About · `[OPEN — audit page link label; slug OPEN]`, plain text links); who to reach (`[OPEN — contact address]`, the sign-off line in mono); the small print (`[OPEN — wordmark face]`, copyright, `[OPEN — no privacy page exists]`). No ask, no waitlist, no logo strip.
**Layout.** Mark column 1; groups columns 3–4 / 5–6 / 7–8. Mobile: mark, then groups stacked.
**Type.** Body for links; label mono for the sign-off and small print.
**Colour.** Bone tokens.
**Motion.** None.
**Feeling.** *Clean.* LOGO-final-black.

---

## 3. Render pack — the hero only

### 3.1 Reference images to condition on (priority order, under `docs/05-marketing/references/founder-brain/`)

1. `landing-page/L21-qintara-hero-black-voxel-flower.jpg` — black, hands, one thing, feeling.
2. `branding-feeling/B17-ascii-wind-turbine-editorial-climate-ai.jpg` — additive marks on grainy sky.
3. `branding-feeling/C05-ascii-butterfly-over-forest-photo.jpg` — creature assembled from marks.
4. `landing-page/L20-speakeasy-fullpage-ascii-serif-mono.png` — split headline around the art.
5. `branding-feeling/B21-low-angle-photo-woman-yellow-sweater-phone.jpg` — low angle, one warm garment. Composition only: its skin is poreless and it is the warning.
6. `branding-feeling/C06-closeup-eye-freckles-nature-brand.jpg` — real skin, real sun, grain.

### 3.2 Prompt A — the full hero screen as a website mockup

16:9 desktop website screenshot on true black #000000. Nav, 72 px: small flat off-white bee mark far left; links "Approach · About" in Schibsted Grotesk #EFEDE7; far right one outlined button "Get your free footprint audit", 1 px #57B295 border, #57B295 label, no fill. Upper-right: a real photograph running off the top and right edges — a person shot from below against clean deep late-afternoon sky, no horizon, entering from the right, head at 68% across and 42% down, face turned up-right, freckles, film grain, one mustard knit sleeve the only warm thing, one open hand raised at head height reaching up-right at 45°. Across the sky, small opaque cream #EFEDE7 dashes angled 45°: sparse at left, thickening along the forearm's line, gathering one hand-width past the fingertips into the silhouette of a single bee, dense at the head, dissolving at wingtips and abdomen, never touching the person. The photograph breaks into black along a 45° diagonal from 40% across the top toward the bottom-right in opaque square tiles of varied size, single tiles trailing off. On black, top-left, Instrument Serif regular #EFEDE7, three lines: "Your whole / marketing / footprint," with "whole" italic. Right of centre near the bottom: "run for you." same face; beneath, Schibsted Grotesk #8E938C: "Every channel handled, month after month — and you see exactly what was done."; beneath, a filled #57B295 button, black label "Get your free footprint audit"; beneath, small Instrument Serif italic "Free, and yours to keep either way." Bottom-left, IBM Plex Mono #8E938C: "16:42 · (Scroll)". Nothing else on screen.

### 3.3 Prompt B — the photograph with its technological layer only

Editorial photograph, 16:9, no text, no interface. A real person shot from a low angle against clean deep late-afternoon sky, no horizon, entering from the right edge and cropped by it, torso falling into shadow at the bottom-right. Face turned up and to the right, freckles, a squint, film grain, one mustard knit sleeve the only warm colour. One open hand raised at head height, forearm at 45° pointing up-right. Scattered across the sky, small opaque cream dashes all angled 45°, sparse in open sky, thickening along the line of the forearm and gathering one hand-width past the fingertips into the silhouette of a single bee — dense at the head, breaking into isolated marks at the wingtips and abdomen. No mark touches the person. The sky darkens toward the upper left and dissolves into true black along a diagonal of square tiles.

### 3.4 Negatives

text on the photograph · glass · frosted pill · gradient mesh · glow · fog · haze · bokeh orbs · lens flare · robot · mascot · cartoon bee · drawn bee · insect illustration · logos · logo strip · numbers · dashboard · screenshot · laptop · phone · second button · centred stack · eyebrow badge · announcement bar · stock smile · poreless skin · retouched skin · studio light · horizon · clouds · green · rounded pill button · icon in the button · arrow · drop shadow · border · particles floating randomly · letters or digits as marks · dots as marks · marks on skin · the bee outlined or with eyes

### 3.5 Aspect and size

16:9, 2560 × 1440. Mobile stays text: portrait second crop, first half above the photograph, the rest on black below.

### 3.6 Explain afterwards

The only thing that moves is the field of dashes: it breathes at a low frame rate and its density waves run bottom-left to top-right along the forearm, so the wingtips flicker while the bee's thorax holds. This still is the resolve frame — a wave crest passing the thorax, wings at their fullest, abdomen still assembling — which is also what a reduced-motion visitor sees.

---

## 4. Cost and the one risk

**Real shoot, one afternoon, one location.** The hero person, hand and sky in two crops, and the meadow for H10 later the same day (L-03) — two setups; the founder's F4 second setup can share it. Freckled skin and in-camera grain cannot be generated without contradicting the thesis (B-24, B-43).
**Generated.** One bud-opening clip for H5, ≤ 90 frames, ≤ 1.5 MB, cleared by `scrub-fps.mjs` at 4× throttle.
**Built.** The glyph renderer (occupancy, mask, density map), the dot renderer (radius, colour sampling), the mosaic dissolve clip-path, the blueprint SVG, the instrument layer, the resting field.

**RISK, once.** The bee tips into mascot if its density peak is too legible, and one renderer number decides it: thorax occupancy is capped at 0.85 with no interior detail, and the first render is judged against L25 before anything else is built. Everything above is founder thesis; two warm prospects remain un-called.
