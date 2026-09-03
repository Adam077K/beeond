# Concept 06 — One field, one day · homepage spec · 2026-09-02 · framer [design] · PROVISIONAL

| | |
|---|---|
| **Status** | Not plan of record. Text only; nothing generated, rendered or built. One of six concepts for the founder to strike through. |
| **Lead id** | L-03 (#8 in the ranking): the page closes where it opened, later. |
| **Hero real thing** | A real honeybee at rest on the back of a real hand, near the lens, at morning. |
| **Ground** | True black `#000000` at H1. |
| **Forks resolved** | F1 B (overlay, recorded as the ghost-twin method) · F2 A · F3 A (the face present but soft; the bee is the sharp thing) · F5 A · F6 B · F7 A, as night · F8 A · F9 A. OPEN: F4, F10–F13. |
| **Nearest kin** | B17 · C02 · B18 · L04 · L16 · A20 |
| **Must not resemble** | L21 (a glowing object between hands) · L25 (a mascot on sky) |
| **Lens exception** | Lenses may carry `requires_claims: [user-language]`; it cannot be satisfied — ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` is empty by design; the logged exception is `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds; nothing is claimed as customer language. |

Bound by `DESIGN-LANGUAGE.md` (locked), `SITE-STORYBOARD.md` §2.0–§2.1 (every site line below is quoted from it unchanged), `SITE-IDEA-BANK.md` and the ranking's Concept 6 block. Sizing numbers are design values, never claims.

## 0. The concept in five lines

1. Home is one place across one day, and a person is there at the start and the end.
2. The hero is a real bee at rest on a real hand at morning; the technological layer is the same bee drawn a second time in cream marks, one wing-length further along the flight line, wings open where the photographed wings are folded (C-03; B17's re-timed rotor, C02's third horse). Its job: it re-times the subject, now and next. On another photograph there is no bee to be next.
3. The set-piece is light itself crossing the same field at midday, in dots: radius tracks luminance by definition, so the arrival of light is the arrival of dots.
4. Night is the black chapter, the hero's particle at rest read as LOGO-03's starfield; dusk is the same field panned along the flight line, gold on blue, the hand gone.
5. The running head's local time is live, and here it means something.

**The day map:** H1 morning · H5 midday · H7 night · H10 dusk. Nothing on the hand or the person, ever.

## 1. Tokens and type scale

**Chapter tokens.** Dark chapters (H1, H7, H8): ground `#000000` · surface `#0E0E0E` · ink `#EFEDE7` · muted `#8E938C` · rule `#242624` · accent `#57B295`. Light chapters (H3–H6, H9, H10, footer): ground `#F0EDE6` · surface `#FFFFFF` · ink `#141614` · muted `#5E625C` · rule `#DCD8CF` · accent `#1F4D3D`. The accent fills exactly two buttons on Home, H1 in `#57B295` and H10 in `#1F4D3D`, never swapped. The twin's cream is the dark chapter's ink; the page has no other cream.

**Ground map, and the three cuts of the day.** H1 black → H3–H6 bone → H7–H8 black → H9 bone → H10 the dusk photograph over bone → footer bone. Three ground boundaries, each an interlocking band (S-01): a front one to three tiles deep at the 20 px pitch, rising bottom-left to top-right across the width by one band height, bone tiles punched into black and black into bone, no straight line anywhere. Read as the day: H1|H3 is morning giving way to full light; H6|H7 is nightfall; H8|H9 is the light coming back. H9|H10 is a photograph edge, handled by the mosaic dissolve, not a ground change.

**Type scale.** Reference viewport 1440 × 900; mobile 390.

| Element | Face | Desktop px / leading | Mobile px / leading | Measure | Tracking | Case |
|---|---|---|---|---|---|---|
| Display headline (H1, H7, H10) | Instrument Serif regular, one italic word | 112 / 0.95 | 52 / 1.0 | a headline half per corner, ≤ 12 words | −0.01em | sentence |
| Deck | Schibsted Grotesk 400 | 22 / 1.4 | 18 / 1.45 | ≤ 56ch | 0 | sentence |
| Section headline (H3–H6, H9) | Instrument Serif regular | 64 / 1.02 | 36 / 1.08 | ≤ 26ch, `text-wrap: balance` | −0.005em | sentence |
| Block title (H3), question (H9), the H8 line | Instrument Serif regular | 34 / 1.15 | 26 / 1.2 | ≤ 40ch | 0 | sentence |
| Eyebrow | IBM Plex Mono 400 | 12 / 1 | 11 / 1 | one line | 0.12em | upper |
| Body | Schibsted Grotesk 400 | 18 / 1.55 | 16 / 1.55 | 65ch | 0 | sentence |
| Label / mono (rules, phase labels, ordinals, trust and caption lines) | IBM Plex Mono 400 | 13 / 1.5 | 12 / 1.5 | ≤ 52ch | 0.02em | sentence; ordinals `01` |
| Button | Schibsted Grotesk 500 | 16 / 1 · height 56 filled, 48 outlined, 44 at H8 | 16 / 1 · 52 / 48 / 44 | one label | 0.01em | sentence |
| Caption | IBM Plex Mono 400 | 12 / 1.5 | 11 / 1.5 | ≤ 60ch | 0 | sentence |
| Italic line under a button | Instrument Serif italic | 20 / 1.3 | 18 / 1.3 | one line | 0 | sentence |
| Running head, with the live local time | IBM Plex Mono 400, tabular figures | 12 / 1 | 11 / 1 | one line, two ends | 0.08em | upper index · `HH:MM` |

Instrument Serif has no bold; scale and one italic word are the whole of display emphasis. The italic falls on the phrase that can be argued with, never the noun (C-34): H1 *whole* · H3 *every time* · H4 *finished* · H5 *at once* · H6 *actually* · H10 *look*. H7, H8 and H9 carry no italic; H7's emphasis is its empty row.

**Radius, gutter, grid.** One number: **20 px**, radius and gutter alike, on every cell at every size. Derived from the mark (X-33): read off `LOGO-final-black.png`, the chamfered cell's fillet is about one-fifth of its cell width, and one-fifth of a 91 px column is 18, rounded to the pitch. Not a spec-sheet figure; check at a full-width card and at the 40 px mark before locking. Desktop grid: 12 columns of 91 px, 20 px gutters, 64 px margins; mobile 4 columns, 20 px gutters, 20 px margins. Hairline rules (`#DCD8CF` / `#242624`) run full height at every third column boundary, five rules dividing the page into four bands; they carry nothing. The mark sits in one grid cell in nav and footer at 40 px, flat (X-43, X-38). Interlocking bands, mosaic tiles and the stripe cell share the 20 px pitch; glyph and dot fields sit on a 6 px cell.

## 2. The sections, in order

### Nav

**Text**
> Approach · About · Get your free footprint audit

**What he sees.** The mark, left, in ink on the chapter's ground. Two links. A hairline (X-05), then the outlined button in the chapter's accent, no fill. Beneath the nav a thinner line is the running head (B-19): section index `01 / 09 · HOME` at the left with the stripe cell filling one bar per section (X-15), the visitor-local time at the right. On screen one the clock is not here: it lives in the hero's rail, and on the first scroll event, when "(Scroll)" is spent (X-14), the time takes its place at the running head's right end. One clock, two positions, never both. No dropdown, no announcement bar, no second CTA.
**Layout.** 72 px high (56 mobile) plus a 32 px running head; persistent; two links and the button fit at every width, no hamburger.
**Type.** Links Schibsted 15 / 1; button row; running-head row.
**Colour.** Chapter tokens; the outlined button's border is `#57B295` on black and `#1F4D3D` on bone.
**Motion.** The outlined button fills on hover in 200 ms, empties in 150 ms. Reduced motion: instant.
**Feeling.** Clean. L04's quiet nav, without its underlined link.

### H1 · Hero — LOUD · morning

**Text**
> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

**What he sees.** *The real thing:* a macro photograph. A honeybee at rest on the back of a real hand held near the lens, the forearm entering from the lower-left of the photograph, the knuckles about three-fifths across and just below the frame's centre. Behind, a person soft and out of focus against pale morning sky, low angle, no horizon (A-02), one rust or ochre garment and nothing else warm but skin (B-42). Low morning sun from the right, so the bee casts its own short shadow on the skin (B-31 at macro scale). Grain captured in camera (B-24); the sky's deep side authored to the left, where the words will be (C-28). The hand is the un-effected anchor (C-14). *The technological layer and its job:* the same bee drawn a second time in small opaque cream marks, the mark's own stripe glyphs, no letters (B-15, L-17), occupancy-modulated on a 6 px cell (B-21, X-37), lifted one wing-length up and to the right along the flight line, wings open where the photographed wings are folded, dense at the thorax and dissolving to single marks at the wingtips in a long sparse tail (A-16). It sits on sky only; not one mark on the hand, the skin or the person. The job: it re-times the bee, now and next, the swarm as the next moment of a real thing. *Dial:* mid; the photograph untouched and dominant. *Time:* morning.
**Layout.** Single column, full-bleed ground. The photograph holds the upper-right two-thirds and runs off the top and right edges, untreated there. Toward the lower-left it disintegrates into black: subtractive square knockouts at the 20 px pitch (B-02), tiles carrying photograph nearest the photograph and black nearest the ground (A-19, C-20), clustered at the photograph's lower-left corner and thinning diagonally (X-06). The front crosses the forearm only at its shaded, out-of-focus underside near the bottom edge, so the arm reads as arriving out of the black rather than cut; wrist, hand and bee sit wholly inside the solid photograph. Words on black: "Your whole marketing footprint," top-left in three lines from column 1; "run for you." bottom-right, right-aligned to column 12, the bee on the diagonal between them so the eye passes through it mid-sentence. Under the second half: the deck, the filled button, the italic line. The rail bottom-left (L-24): local time · "(Scroll)", nothing between. Mobile: a second crop, portrait, hand and bee in the upper half, the twin above them, dissolving downward into black where the whole sentence, deck, button and line stack, the rail beneath.
**Type.** Display row, italic on *whole*; deck row; button row; italic-line row; running-head row for the rail.
**Colour.** Ground `#000000`; headline `#EFEDE7`; deck and rail `#8E938C`; the twin `#EFEDE7`, opaque, photograph at full strength through the gaps; button `#57B295` with the label in `#000000`. The photograph's colour is the only colour: morning blue, skin, the garment its one warm. The button's corner is black ground and its nearest photograph is sky, so nothing green sits near pine (C-33).
**Motion.** The twin's marks flicker in occupancy at a low rate, about six cell changes a second across the wing region, wingtips first, thorax steady; the offset never drifts. The clock ticks once a second. Nothing else moves: no parallax, no cursor response, no scroll response. The photograph is the LCP and loads first; the canvas starts after. Reduced motion: one still. **The single frame to print:** wings at full spread, wingtips at their sparsest, the frame the still and the poster both use.
**Feeling.** *Futuristic*, and "the human and the sky" taken literally. Nearest B17 (the re-timed rotor in additive glyphs), C02 (the third horse), L04 (the clock). Must not read as L21 or L25.

### H3 · How the work gets done — MEDIUM

**Text**
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

**What he sees.** No photograph; ground and type. Three blocks stepped diagonally, each with a raised mono ordinal `01` `02` `03` (L-14), no connectors (S-11 index only). *Time:* none; full day is the bone.
**Layout.** Eyebrow and headline in columns 1–7. Block one columns 1–5, block two columns 4–8, block three columns 7–11, each starting one row below the last. Mobile: stacked, ordinals kept, no step.
**Type.** Section headline, italic *every time*; block titles; body; the "What that means for you:" clause in the mono row, its sentence in body muted (X-09).
**Colour.** Light tokens; no accent.
**Motion.** Blocks arrive by opacity along the diagonal once, 200 ms each, 80 ms apart. Reduced motion: present.
**Feeling.** *Easy to understand.* L16's three numbered cells, without its cards.

### H4 · What "done" means — MEDIUM

**Text**
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

**What he sees.** One artefact card: white surface, hard rectangle at the 20 px radius, tilted 1.5°, soft shadow, no border. Inside, the struck line in the grotesk with a strike through it, and the same line drawn a second time, faint, in the hairline colour behind it (B-32), the hero's twin method at card scale. Blueprint rules (moment 6) run from the struck line past the card's edge to the ground, where the rule sits in mono with the "Caught:" note (C-17); labels in muted mono. The storyboard gives no rewritten line, so none is invented: the rewrite slot carries the stripe-cell hatch (C-35), the site's "not filled in yet", flagged here as a PROVISIONAL edit request. Caption beneath; the approach-page sentence as plain underlined text, never a button. *Time:* none.
**Layout.** Text columns 1–5; card columns 6–12, a half-gutter off the grid. Mobile: card full width below the text, tilt kept.
**Type.** Section headline, italic *finished*; deck; the struck line in body; rule and caught note in mono; caption row.
**Colour.** Light tokens; the card `#FFFFFF`; rules `#DCD8CF`; no accent.
**Motion.** The strike draws once on entry, left to right, 300 ms; the dimension line follows. Reduced motion: drawn. Frame to print: struck, rule visible.
**Feeling.** *Technology, clean.* B17 for the line drawn twice.

### H5 · The shape of it — MEDIUM · midday, the set-piece

**Text**
> **Eyebrow** — What happens
>
> **Headline** — It doesn't all switch on at once.
>
> **Foundation** — We learn how you sound, audit what you already have, and wire up the record-keeping. Quiet on the surface. Most of this phase is underneath it.
>
> **Output** — The first channels go live, the work starts moving, and the first month's record lands in front of you.
>
> **Compounding** — The footprint is fully on, and the work turns from starting things to making them better.

**What he sees.** *The real thing:* the hero's field at midday from a fixed low camera, a cloud's shadow leaving it, the light's edge travelling bottom-left to top-right along the flight line (A-28's direction, applied to light). *The layer and its job:* moment 2, square grid at one pitch, circular dots (F8 A), radius from luminance, colour sampled from the field, full bleed with the dots dissolving inward at the sides (F9 A). Foundation is the field in shade with almost no dots, the photograph reading through: "most of this phase is underneath it". Output is the edge crossing, dots appearing at its front. Compounding is full light, the values settling, the pitch holding. Radius tracks luminance by definition, so a clip whose subject is luminance arriving is the one subject where technique and subject are the same thing. The anchor: one dry stalk close to the lens at the lower-left, out of focus, never converted, the stalk H10 smears at dusk. *Dial:* scrubbed from near zero to total conversion. *Time:* midday.
**Layout.** Eyebrow and headline above the pin in columns 1–7. The canvas pins for 300 vh, full bleed; the three labels surface in columns 1–3 at scrub 0.05, 0.40 and 0.80 as plotted mono call-outs, and stay. ≤ 90 frames, ≤ 1.5 MB, lazy, below the fold, gated by `scrub-fps.mjs`. Mobile: the centre crop, ≤ 45 frames, labels stacked above.
**Type.** Section headline, italic *at once*; labels in the mono row; phase sentences in body.
**Colour.** Bone ground; the dots carry the field's gold and the sky's blue, the only colour in the middle of Home; no accent.
**Motion.** Scroll-scrubbed, deterministic, reversible; the site's one pinned element. Reduced motion: the Compounding poster, no canvas, no listener. **The single frame to print:** the Output frame, the light's edge at the frame's centre, dots dense above and right of it, bare shade below and left, "Output" pinned.
**Feeling.** *Technology.* C04 and B11 for the dot screen; B18 for the field's warmth.

### H6 · What's covered — QUIET

**Text**
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

**What he sees.** Type only: the title parked in the left margin in short stacked lines (L-13), four groups under the four exposed hairline bands, ordinals `01`–`04` at their heads (A-22), items one per line, no icons, no ticks, no cards. The closing line under, muted. *Time:* none.
**Layout.** Title columns 1–3; groups in the four bands across columns 4–12. Mobile: title above, groups two by two, then one column at the narrowest.
**Type.** Section headline, italic *actually*; group labels in body ink, items in body muted (X-09); closing line body muted.
**Colour.** Light tokens; no accent.
**Motion.** None.
**Feeling.** *Minimalistic.* L16's plain rows.

### H7 · What you're choosing between — LOUD · night

**Text**
> **Headline** — What you're choosing between.
>
> **An in-house hire** — You get the skills of the person you hired, and nothing ships until they start.
>
> **An agency retainer** — What you see is what they choose to show you, at whatever pace their team has room for.
>
> **A stack of tools** — You still have to run them, they still sound like themselves, and none of them joins your channels up.
>
> **Doing it yourself** — It gets done in the weeks you have time. Marketing doesn't work in the weeks you don't.

**What he sees.** The black chapter as night. Over true black, the hero's particle at rest (X-23): the same 6 px stripe glyph, static, one lit cell in about every 250, in the dark rule value `#242624`, felt rather than seen, LOGO-03's starfield read as the swarm asleep. Density is the one number, and it is measured, not felt. Four ruled rows and an empty fifth, ruled and unlabelled, at the position the Beeond row would occupy (L-02): the gap is the argument. *The layer's job:* the field is the swarm, and at night it rests. *Time:* night. The running head's clock is the visitor's, not the page's; the two need not agree.
**Layout.** Headline columns 1–8. Rows: the option's name right-aligned in columns 1–3 against the column-4 rule, the consequence flush left in columns 4–10, hairline under (shortlist 12, X-16); the fifth row the same height, empty. Mobile: name above consequence, hairlines kept, fifth row at half height.
**Type.** Display row, no italic; names in the block-title row; consequences in body.
**Colour.** Dark tokens; hairlines `#242624`; no photograph, no accent.
**Motion.** None; the field is static.
**Feeling.** *Expensive, minimalistic.* LOGO-03 for the ground; L21's black emptiness without its object.

### H8 · The ask beat — QUIET · the same night

**Text**
> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**What he sees.** One line and the outlined button at the smallest size the target minimum allows (S-17), under the empty fifth row, on the same black over the same resting field. No fill: the second of the two unfilled asks.
**Layout.** Columns 4–10, line and button on one baseline where width allows. Mobile: stacked.
**Type.** The line in the block-title row; button row at 44 px.
**Colour.** Dark tokens; border and label `#57B295`, no fill.
**Motion.** Hover fill, 200 ms in, 150 ms out.
**Feeling.** *Clean.* L04's unforced ask, as a button.

### H9 · Before you ask — QUIET · the light returning

**Text**
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

**What he sees.** The page's one prose home. Title parked in the left margin (S-08), five open hairline rows, a raised mono ordinal at each, questions in the serif, answers in running text at 65ch. Nothing visual. *Time:* none; the bone is the late light after the black.
**Layout.** Title columns 1–3; rows columns 4–11. Mobile: title above, rows full width.
**Type.** Section headline, no italic; questions in the block-title row; answers in body.
**Colour.** Light tokens; no accent.
**Motion.** None; rows are open, never accordions.
**Feeling.** *Human.* L16's FAQ, opened.

### H10 · Close — LOUD · dusk

**Text**
> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**What he sees.** *The real thing:* the hero's field at dusk, no hand, no person, panned bottom-left to top-right so the blur streaks lie along the flight line (A-28), heavy grain, the dry stems sharp and the heads smeared (B-36), the low sun gilding the grass heads against a deepening blue: gold on blue, moment 3. Shadows now fall the other way from the morning's; that reversal is the whole day, read in one glance. *The layer:* none. An untreated frame needs no spared detail (B-14); the blur is the camera's. *Dial:* zero. *Time:* dusk.
**Layout.** Words on bone in columns 1–7 at the top: headline, deck, the filled button. The photograph runs off the left, right and bottom edges and dissolves upward into bone, tiles densest at the lower-right and thinning toward the words (X-06); no word on the photograph. Mobile: the words, then the photograph running off the bottom and sides.
**Type.** Display row, italic *look*; deck; button row.
**Colour.** Bone ground; button `#1F4D3D` with the label in `#F0EDE6`; the frame carries gold and blue and no green, a late-summer dry field, so nothing green sits near pine (C-33).
**Motion.** Grain drifts at very low amplitude; still under reduced motion.
**Feeling.** *Human, expensive.* B18 and A20 for the pan; L16 for closing on the sky it opened on.

### Footer — QUIET · after dusk

**Text**
> Approach · About · the audit page (a plain text link)
>
> one contact address `[OPEN]` · **drafted by the swarm · calibrated by Yarden**
>
> wordmark · copyright · privacy `[OPEN — no privacy page exists]`

**What he sees.** Three groups, nothing loose; the mark in one grid cell at the left; the sign-off in mono. The last line repeats the running head's form (B-03): `09 / 09 · HOME` at the left, the live local time at the right, the page's last live number and the day's end. No ask, no waitlist, no logo strip. The wordmark slot shows the mark alone until its face is decided `[OPEN — wordmark face]`.
**Layout.** Groups in columns 1–4, 5–8, 9–12; small print on the last row. Mobile: stacked.
**Type.** Links in body; sign-off, small print and the last line in the mono rows.
**Colour.** Light tokens; the mark in `#141614`; no accent.
**Motion.** The clock ticks.
**Feeling.** Quiet. L04's corner stamp.

## 3. Render pack — the hero only

### 3.1 Reference images to condition on

Under `docs/05-marketing/references/founder-brain/`, in priority order:

1. `branding-feeling/B17-ascii-wind-turbine-editorial-climate-ai.jpg` — the twin treatment, grain, additive cream.
2. `branding-feeling/C02-ascii-dot-horse-overlay-photo.jpg` — offset twin, attitude the photograph lacks.
3. `branding-feeling/B18-blurred-motion-flowers-grain-warm-blue.jpg` — light: warm on blue, grain.
4. `landing-page/L04-form-found-cream-iridescent-band.jpg` — composition: quiet type, corner clock.
5. `branding-feeling/A20-unfold-academy-wordmark-motion-blur-foliage.jpg` — the type feel, one italic.
6. `logo/LOGO-final-black.png` — the mark, flat, nav scale.

### 3.2 Prompt A — the full hero screen as a website mockup

> Desktop website screenshot, 16:9, true black #000000 ground. Top: small flat four-cell logo mark left; Schibsted Grotesk links "Approach  About"; outlined #57B295 button "Get your free footprint audit" right, unfilled. Upper right: a macro photograph off the top and right edges, disintegrating toward the lower left into scattered square tiles over black: a real honeybee at rest on the back of a real hand entering from the lower left, low angle, no horizon, a person out of focus behind, pale morning sky, one rust garment, film grain. Over sky only: the same bee drawn again in opaque cream #EFEDE7 monospace slash marks, offset one wing-length up and right, wings open where the real wings are folded, dense at the body, sparse at the wingtips, none on skin. Instrument Serif on black: "Your whole marketing footprint," top left, three lines; "run for you." bottom right. Beneath, Schibsted Grotesk #8E938C: "Every channel handled, month after month — and you see exactly what was done." A filled #57B295 button "Get your free footprint audit", black label, then italic "Free, and yours to keep either way." Bottom left, IBM Plex Mono: a 24-hour morning time, "(Scroll)". Not in frame: second button, glow, logos, dashboard, text on the photograph.

### 3.3 Prompt B — the photograph with its technological layer only

> Macro photograph, 16:9, film grain. A real honeybee at rest on the back of a real human hand near the lens, the forearm entering from the lower left, low morning sun from the right, the bee's short shadow on the skin. Behind, out of focus, a person against pale morning sky, low angle, no horizon, one rust garment, nothing else warm. Over the sky only, the same bee drawn again in small opaque cream monospace slash marks, one wing-length up and right, wings open where the real wings are folded, dense at the thorax, dissolving to single marks at the wingtips. Real bee untouched; no marks on hand or person. Darker sky at the left. No interface, no text, no button.

### 3.4 Negatives

text on the photograph · glass · frosted panel · gradient mesh · glow · bloom · fog · haze · particles with no subject · a glowing object · two hands reaching · robot hand · robot · cartoon bee · rendered bee · 3D bee · mascot · character · logos · logo strip · numbers · statistics · dashboard · screenshot · phone · laptop · second button · centred stack · eyebrow pill · badge · marks on the skin · the real bee converted to marks · dots on the person · lens flare · bokeh orbs · stock smile · retouched or poreless skin · extra fingers · neon · purple · blue-purple gradient · drop shadow · border · card · horizon line · green foliage near the button · italic serif bolted onto a grotesk headline

### 3.5 Aspect and size

16:9 at 2K (2560 × 1440). Mobile stays text: a portrait crop with the hand and bee in the upper half and every word on black beneath, not rendered here.

### 3.6 Explain afterwards

*What moves in this hero: the cream twin's wing marks flicker in and out at the wingtips while its body holds, and the time at bottom-left ticks; the photograph, the hand and the words never move. This still is the frame with the twin's wings fully open and its wingtips at their sparsest, which is also the frame the site shows when motion is switched off.*

## 4. Cost and the one risk

**Shoot.** A specialist macro shoot: a bee-handler or beekeeper, a macro lens, one calm morning, one field, one person in one warm garment. Three setups on the same day: H1 at morning (macro, low, sky); a midday fixed-camera plate of the field for the clip to be conditioned on; H10 at dusk (the pan, inside B-31's window of about forty minutes). One location and one day is what the concept is; a second day is a second field.
**Generated.** One clip, 4–6 s, the light crossing the field, generated on the decided method from the midday plate, split to ≤ 90 frames, run through the dot renderer, encoded ≤ 1.5 MB. A real fixed-camera timelapse from the shoot day would answer continuity more cheaply; recorded as an alternative for the founder, not decided here.
**Built.** The glyph renderer in occupancy mode with a twin mask and offset; the dot renderer; the subtractive mosaic mask; the interlocking ground band; the blueprint SVG; the stripe-cell texture; the instrument component with the rail-to-running-head clock handoff.
**RISK, once.** Continuity — one location, one day, two stills and one clip that must agree in light — and a real bee on a hand is a specialist macro shoot, where a generated insect is where generation fails hardest; the twin reads as a registration error if the offset is timid (C-03).

```claims
claims:
  - id: c-concept-06-copy-is-storyboard-verbatim
    assert: "Every site line in concept 06 is quoted from SITE-STORYBOARD.md §2.0–§2.1 unchanged; the concept rewrites no copy and invents no rewritten line for H4"
    kind: internal-fact
    scope: project
    verified_by: command
    evidence: {cmd: "grep -qF 'Your whole marketing footprint, run for you.' docs/05-marketing/SITE-STORYBOARD.md && grep -qF 'Your whole marketing footprint, run for you.' docs/05-marketing/concepts/2026-09-02-concept-06-one-field-one-day.md && grep -qF 'Start with a look at what you' docs/05-marketing/concepts/2026-09-02-concept-06-one-field-one-day.md", expect_exit: 0}
    valid_until: 2026-12-31
    confidence: 0.95
  - id: c-concept-06-is-text-only
    assert: "Concept 06 is a text spec and render pack; nothing was generated, rendered or built for it, and it is not plan of record"
    kind: internal-fact
    scope: project
    verified_by: command
    evidence: {cmd: "grep -qF 'PROVISIONAL' docs/05-marketing/concepts/2026-09-02-concept-06-one-field-one-day.md && ! ls docs/05-marketing/concepts/*concept-06*.png docs/05-marketing/concepts/*concept-06*.jpg 2>/dev/null | grep -q .", expect_exit: 0}
    valid_until: 2026-10-31
    confidence: 0.99
```

*Text only. Nothing generated, rendered or built. Every line above is PROVISIONAL and the founder's to strike. Two warm prospects remain un-called; nothing here is a customer signal.*
