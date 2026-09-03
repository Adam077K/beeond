# Concept 03 — Flowers, held · homepage spec · 2026-09-02 · framer [design] · PROVISIONAL

| | |
|---|---|
| **Status** | Not plan of record. Text only: nothing generated, rendered or built. One of six concepts; the founder strikes through. |
| **Lead id** | C-23 (#13 in the ranking): hands holding something real |
| **Hero, the real thing** | One person, low against late sky, off-centre and cropped by the right edge, holding a loose handful of dry late-summer wildflowers up into the light; face turned to them; one warm garment; stems below the crop |
| **Ground** | Bone at the hero. Home: bone · bone · black (H7–H8) · bone · the meadow over bone · bone |
| **Forks resolved (from the ranking)** | F1 closed without an edit: moment 1 spent at H1 as conversion, as defined; the bee is not delivered at the hero · F2 B · F3 A · F5 A · F6 B · F7 A · F8 A · F9 A. OPEN: F4, F10–F13 |
| **Nearest kin** | A12 · C08 · B20 · B21 · C13 |
| **Must not resemble** | L10: a whole flower converted on black, the headline run across it, no human in the frame |
| **Lens exception (pasted)** | Lenses may carry `requires_claims: [user-language]`; it cannot be satisfied — ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` is empty by design; the logged exception is `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds; nothing is claimed as customer language. |

Bound by `DESIGN-LANGUAGE.md`, `SITE-STORYBOARD.md` §2.0–§2.1 (site text quoted verbatim, never rewritten), `SITE-IDEA-BANK.md` and the ranking's shared base. Every number below is a design value, never a claim.

---

## 0. The concept in five lines

1. The machine drew the work; the hand that holds it up is real.
2. One person against late sky holds dry gold, coral and white wildflowers up into the light. The flowers alone are redrawn as characters that take their colour from the petals beneath (A12's method, moment 1 exactly as `DESIGN-LANGUAGE.md` defines it). Sky, skin and hand stay photograph.
3. Dial dramatic inside the bouquet's silhouette, zero outside. Ground bone. Words on bone at the left, an asymmetric two-voice split (X-01), not the comma split.
4. Flowers are the through-subject: a bud from the same flowers opens in dots at H5; H10 is the field they came from, the person gone.
5. Moment 1 is spent at the hero with no amendment to a locked file. The bee is not at the hero, said plainly.

---

## 1. Tokens and type scale

**Tokens.** Light chapters: ground `#F0EDE6` · surface `#FFFFFF` · ink `#141614` · muted `#5E625C` · rule `#DCD8CF` · accent `#1F4D3D`. Dark chapters: ground `#000000` · surface `#0E0E0E` · ink `#EFEDE7` · muted `#8E938C` · rule `#242624` · accent `#57B295`. The accent fills exactly two things on Home, H1's button and H10's button, both in the light token. Nav and H8 are outlined in the chapter's own accent, no fill. The tokens are never swapped across grounds.

**Ground map, Home.** H1 bone → H3 H4 H5 H6 bone → **H7 H8 black** → H9 bone → H10 the meadow photograph over bone → footer bone. One dark chapter. Every boundary interlocks along the flight-line diagonal in a one-row band of tiles at the grid pitch (S-01), never a straight cut.

**Radius, gutter, pitch: one number, 12 px.** The mark's fillet is about one-eighth of its cell (X-33); the site's cell is the column, 101 px at 1440, and one-eighth of it rounds to 12. Radius on every rectangle, gutter, glyph cell and dissolve tile: 12. Grid: 12 columns, 48 px margins at 1440, hairline rules in the `rule` token full height at every column boundary, exposed, carrying nothing. Mobile at 390: 4 columns, 20 px margins. Section spacing 160 px desktop, 96 mobile.

**Type scale.** Instrument Serif has no bold; emphasis is size and one italic phrase, which falls on the phrase that could be argued with, never the noun (C-34). Named per headline in §2.

| Element | Face | Desktop px / leading | Mobile px / leading | Measure | Tracking | Case |
|---|---|---|---|---|---|---|
| Display headline (H1 · H7 · H10) | Instrument Serif regular | 72 / 76 | 44 / 48 | ≤ 6 columns | −0.01em | sentence |
| Section headline (H3–H6 · H9) | Instrument Serif regular | 48 / 52 | 32 / 36 | ≤ 7 columns | −0.005em | sentence |
| Sub-head (H3 block label · H7 row name · H9 question) | Instrument Serif regular | 28 / 32 | 24 / 28 | ≤ 5 columns | 0 | sentence |
| Deck | Schibsted Grotesk 400 | 20 / 30 | 17 / 26 | ≤ 48ch | 0 | sentence · muted |
| Body | Schibsted Grotesk 400 | 18 / 28 | 16 / 25 | ≤ 65ch | 0 | sentence · ink |
| Eyebrow | IBM Plex Mono 500 | 11 / 16 | 11 / 16 | one line | +0.12em | UPPERCASE |
| Label / mono (rules · ordinals · blueprint labels · sign-off) | IBM Plex Mono 400 | 12 / 18 · ordinals 11, raised | 12 / 18 | one line | +0.02em | as written |
| Button | Schibsted Grotesk 500 | 15 / 20 · height 48 filled, 40 outlined · padding 0 20 | same | one line | 0 | sentence |
| Caption | Schibsted Grotesk 400 | 14 / 20 | 14 / 20 | ≤ 60ch | 0 | sentence · muted |
| Under-button line (H1) | Instrument Serif italic | 15 / 20 | 15 / 20 | one line | 0 | sentence · muted |
| Running head | IBM Plex Mono 400 | 11 / 16 | 11 / 16 | one line | +0.08em | UPPERCASE |

Headings `text-wrap: balance`; uppercase only in mono; focus ring 2 px in ink, never a hairline. **The running head** is one fixed mono line at the bottom-left of every viewport, always on ground: section index (`01 / 09 · HOME`), the stripe cell as a short row of diagonal bars filling as the index advances (X-15), the visitor's local time at its right end (B-19). On H1 only, `(Scroll)` is appended once and fades on the first scroll (X-14).

---

## 2. The sections, in order

### Nav

**Text**
> Approach · About
>
> Get your free footprint audit

**What he sees.** No photograph. The mark flat, ink on bone (X-38), 36 px, straddling the hairline between columns 1 and 2 so the rule runs through the mark's own cross gutter (X-43). Two links. A hairline (X-05), then the outlined button: accent border and label, no fill. Dial zero.
**Layout.** One row, 72 px, persistent; logo left, links right of centre, button far right; inherits the chapter's tokens beneath it. Mobile: mark, two links and the full button label fit at 390; no hamburger.
**Type.** Links body 15; button row.
**Colour.** Ink on bone; the outline `#1F4D3D` on bone, `#57B295` over the black chapter.
**Motion.** The outline fills on hover, 200 ms ease-out, exits 150 ms. Reduced motion: still.
**Feeling.** Clean. Jakob's law; no reference needed.

### H1 · Hero — LOUD

**Text**
> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

**What he sees.**
- *The real thing.* Camera below chest height, sky the whole ground, no horizon (A-02). The person enters from the right and is cropped by it (C-06), face three-quarters, turned up to the flowers, legible (F3 A). One warm garment, ochre, nothing else warm (B-42). Grain in camera, highlights allowed to blow (C-05). The fist grips just under the heads; the stems are below the crop, so no green sits near the pine button (C-33). The heads: dry gold, coral and white late-summer wildflowers, lit from behind and above so one bouquet carries lit and shadowed petals at once.
- *The technological layer.* Conversion, moment 1 as defined. A square grid at 12 px pitch; inside the bouquet's silhouette every cell is one IBM Plex Mono character at 11 px. Its colour is the mean of the pixels beneath, lifted in value so it separates from its own pixel: white in the lit petals, coral through the bodies, gold at the centres, deep coral in the shadowed bases. Its coverage follows the cell's luminance on an eight-step ramp, space `.` `:` `/` `+` `=` `*` `#`, no letters, no digits, nothing to read or count. Marks opaque, no blend mode; the photograph reads through the gaps, softened by one cell inside the silhouette only, so the character is the only sharp edge in the bouquet. Against sky the clip is hard and stepped to the grid, permitted because the sky carries no detail (B-39). Where petals meet fingers the mask follows the fingers and the last two rows above the knuckles thin to isolated characters: no mark touches skin. **Its job:** what is in the hand is made of marks and the hand is not. On another photograph nothing is being held.
- *The dial.* Dramatic inside the silhouette, zero outside. The hand is the one un-effected anchor (C-14). No bee.

**Layout.** Single column over a full-bleed ground. The photograph runs off the top and right edges and dissolves leftward into bone: subtractive knockouts at the grid pitch, tiles carrying photograph nearest the photograph and bone nearest the bone (B-02, A-19), the front on the flight line from column 7 at the foot to column 9 at the top, ending in a long sparse tail of single tiles (A-16), none within 24 px of a glyph. The bouquet in the upper right quarter, columns 9–12, cropped a little by the top edge; the hand beneath it; the face at the right edge. Words top-left on bone (X-01): headline in columns 1–6 as three lines, *Your whole / marketing footprint, / run for you.*; the deck in the second face beside the short last line, columns 4–6, top-aligned to it; the filled button under the deck at column 4; the italic line 12 px under the button; the bottom-left empty except the running head. Mobile: a portrait crop shot for it, bouquet and hand in the upper half off the top and right edges, then on bone headline, deck, button, italic line; pitch 10 px.
**Type.** Display headline, italic on *run for you*; deck; button; the under-button line in italic serif (the one quiet punchline); running head.
**Colour.** Ink and muted on bone. Every drop of colour is the photograph's: cobalt sky, ochre garment, gold, coral and white heads. The accent once, `#1F4D3D` with a bone label, on bone, never on the picture.
**Motion.** The photograph loads first, untreated, as the largest contentful element. Then the conversion arrives across the bouquet along the flight line, thumb side to top-right heads, in 900 ms, cells switching from pixel to character as the front passes: marks appear by density, nothing slides. Then rest: about one cell in thirty re-samples each second to a neighbouring ramp step, a breath, like air through dry flowers. No cursor reaction, no parallax, no scroll coupling. Reduced motion: the resting still. **The single frame to print: the resting frame, conversion complete, the hand untouched.**
**Feeling.** *Human.* "The machine drew the flowers, and the hand holding them up is real." Nearest `A12-tulip-photo-ascii-symbol-overlay.jpg` (the method), `C08-ascii-letter-bird-silhouette-water.jpg` (a hard clip, the water untouched), `B21-low-angle-photo-woman-yellow-sweater-phone.jpg` (angle and garment only; its skin is the generated warning, B-43), `B20-ascii-pixel-overlay-blurred-flower.jpg` (the stepped grid edge, without its glow).

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

**What he sees.** No photograph. Three blocks stepped diagonally, each one column further right than the last, raised mono ordinals `01` `02` `03` at their heads, no connectors (L-14). The layer's job is the staircase: sequence, not peers. Dial zero.
**Layout.** Eyebrow and headline columns 1–7; blocks in columns 1–5, 2–6, 3–7; the right five columns empty. Mobile: one stack, ordinals kept, step removed.
**Type.** Section headline, italic on *every time*; block labels in sub-head; body; the *What that means for you:* label in ink and its line in muted at one size (X-09).
**Colour.** Ink, muted, rule on bone. No accent.
**Motion.** Blocks arrive by opacity, in order, 200 ms each, once on entry. Reduced motion: present.
**Feeling.** Minimalistic, easy to learn. Nearest `C13-superside-three-value-cards-serif.png` for the serif label with one italic phrase, and nothing else from it.

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

**What he sees.** The real thing is a card: white surface, radius 12, holding the struck line, the rewrite beneath it. The layer is moment 6, blueprint: baseline and x-height rules in the rule token running past the struck line to the card's edge with tiny mono labels (C-17), and the struck line drawn a second time, faint, behind the rewrite (B-32). The written rule sits in mono on the bone beneath the card, not inside it. Job: a page showing its own working. Dial light.
**Layout.** Text columns 1–5; the card columns 6–11, tilted −1°, off-grid by half a gutter; the rules pass behind it, and that overlap is the whole depth: no shadow, no border. Mobile: text, then the card full width, rules clipped by the viewport.
**Type.** Section headline, italic on *because it got produced*; body for the struck and rewritten lines; mono for the rule and labels; caption; the closing sentence in body with an underline as its only affordance, never a button.
**Colour.** Ink on bone; surface white; rule token for every line. No accent.
**Motion.** The strike draws once on entry, 300 ms. Reduced motion: drawn. Frame to print: after the strike, the ghost visible.
**Feeling.** Technology, clean. The language's own A05 and C11 sources; nothing opened here is closer.

### H5 · The shape of it — MEDIUM (the set-piece)

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

**What he sees.** The real thing: one bud from the hero's flowers, opening, a generated clip of 4–6 s split to at most 90 frames, shot wide open so the blur behind it is the anchor (B-40). The layer is moment 2: every frame through the dot renderer, square grid at 12 px pitch, circular dots (F8 A), radius from luminance, colour sampled from the flower. The dial is scrubbed, not only the frames (A-09): dots in patches over the closed bud at Foundation, spreading with the petals at Output, total conversion only when fully open at Compounding. Job: the section's sentence, seen.
**Layout.** Full-bleed canvas (F9 A), dots dissolving inward at the sides; pinned, scrubbed by scroll, below the fold, at most 1.5 MB, lazy. The three labels surface one at a time in columns 1–3 at the scrub points: ordinal, name, line. Mobile: tighter crop, fewer frames, labels under the canvas.
**Type.** Section headline, italic on *at once*; phase names in sub-head; body.
**Colour.** The only colour in the middle of Home comes from this flower, in dots on bone. No accent.
**Motion.** Deterministic, reversible scrub; gated by `scrub-fps.mjs` at 4× throttle. Reduced motion: one poster frame of the open flower, no canvas, no listener. **Frame to print: the Output frame, petals just parted, dots across the parted face, the base still photograph, the blur behind untouched.**
**Feeling.** Futuristic. Nearest `B20-ascii-pixel-overlay-blurred-flower.jpg` (a flower in a stepped field over blur) and `B18-blurred-motion-flowers-grain-warm-blue.jpg` (the palette).

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

**What he sees.** No photograph, no icons, no cards, no ticks. The title parked in the margin (L-13); four lists headed by raised mono ordinals `01`–`04` (A-22), the exposed hairlines doing the dividing. Dial zero.
**Layout.** Title columns 1–2; groups in columns 3–4, 5–6, 7–8, 9–10; columns 11–12 empty; the closing line under, columns 3–8. Mobile: title above, four groups in one column.
**Type.** Section headline, italic on *actually*; group labels in body ink, items in body muted (X-09).
**Colour.** Ink, muted, rule. No accent.
**Motion.** None.
**Feeling.** Minimalistic, clean. A reference, not an argument.

### H7 · What you're choosing between — LOUD

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

**What he sees.** The ground turns black across the diagonal band. No photograph; the loudness is the ground flip and the display serif at scale. Four ledger rows (X-16): name flush left in the sub-head serif, its line flush right in the grotesk, one baseline, hairline under. Beneath them an **empty fifth row**, ruled, labelled nothing, where the Beeond row would sit (L-02). Across the black, the hero's character at rest (X-23): the same 12 px grid, characters in surface `#0E0E0E`, one cell in sixteen filled, densest at the outer frame edges and emptied toward the rows (X-06), felt rather than seen. Job: the gap is the argument. Dial: the floor.
**Layout.** Headline columns 1–6; rows columns 1–11; the fifth row the same width. Mobile: name over line, stacked; the fifth row kept.
**Type.** Display headline, no italic: the rows carry it. Names in sub-head; lines in body, muted.
**Colour.** Dark set: `#EFEDE7` and `#8E938C` on `#000000`, rules `#242624`. No accent in the section.
**Motion.** None; the field is static.
**Feeling.** Expensive: loud by subtraction, an emptied centre.

### H8 · The ask beat — QUIET

**Text**
> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**What he sees.** Same black. One line and the outlined button, accent border and label, no fill, 40 px, the smallest the target minimum allows (S-17). The quietest ask on the site. Dial: the resting field continues.
**Layout.** Under the fifth row, columns 1–4, left. Mobile: same.
**Type.** Line in body 20, muted; button.
**Colour.** Outline `#57B295` on black. No fill.
**Motion.** Hover fill 200 ms. Reduced motion: none.
**Feeling.** Quiet. An affordance, not an argument.

### H9 · Before you ask — QUIET

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

**What he sees.** Bone returns across the diagonal band. The page's one prose home: the title parked in the margin (S-08), five open rows with raised mono ordinals `01`–`05`, hairlines between, no accordions. Nothing visual. Dial zero.
**Layout.** Title columns 1–3; rows columns 4–10, answers at most 65 characters a line. Mobile: title above the rows.
**Type.** Section headline, no italic; questions in sub-head; answers in body.
**Colour.** Ink, muted, rule. No accent.
**Motion.** None.
**Feeling.** Human. Plain answers, one of them "we'd be making that up."

### H10 · Close — LOUD

**Text**
> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**What he sees.** The real thing: the field the hero's flowers came from, the person gone, later light (L-03). The layer is moment 3, the photograph's own: a panning long exposure bottom-left to top-right so the streaks lie on the flight line (A-28), stems sharp and heads smeared (B-36), heavy grain, gold and coral on blue. No mark touches it (B-14). Job: the page closes where it opened, later. Dial subtle.
**Layout.** Words on bone above the picture; the photograph runs off the left, right and bottom edges and dissolves upward into bone along the diagonal where the words sit, from about the section's midpoint. Headline columns 1–6, deck columns 1–4, the filled button at column 1. Mobile: same order, tighter crop.
**Type.** Display headline, italic on *what you've got*; deck; button.
**Colour.** The warm end of the palette. The second accent fill, `#1F4D3D` with a bone label, on bone, never on the photograph.
**Motion.** None; the blur is the photograph's. Reduced motion: identical.
**Feeling.** Human, expensive. Nearest `B18-blurred-motion-flowers-grain-warm-blue.jpg`.

### Footer

**Text**
> Approach · About
>
> drafted by the swarm · calibrated by Yarden

**What he sees.** Hairline above; three groups: where to go (the two links and the ask page as a plain text link, slug OPEN), who to reach (one address and the sign-off line in mono), the small print (mark in one grid cell, X-43; wordmark OPEN; copyright; privacy `[OPEN — no privacy page exists]`). No ask, no button, no newsletter, no logo strip. Dial zero.
**Layout.** Groups in columns 1–3, 5–7, 9–11. Mobile: stacked.
**Type.** Links body 15; sign-off mono 12.
**Colour.** Ink and muted on bone. No accent.
**Motion.** None.
**Feeling.** Quiet, low.

---

## 3. Render pack — the hero only

### 3.1 Reference images to condition on (priority order)

| # | File under `docs/05-marketing/references/founder-brain/` | Role |
|---|---|---|
| 1 | `branding-feeling/A12-tulip-photo-ascii-symbol-overlay.jpg` | The mark treatment: sampled-colour conversion |
| 2 | `branding-feeling/B21-low-angle-photo-woman-yellow-sweater-phone.jpg` | Composition: low angle, one warm garment (not its phone, not its skin) |
| 3 | `branding-feeling/B18-blurred-motion-flowers-grain-warm-blue.jpg` | Light: gold, coral, grain on blue |
| 4 | `branding-feeling/C08-ascii-letter-bird-silhouette-water.jpg` | Hard silhouette clip, ground untouched |
| 5 | `branding-feeling/B20-ascii-pixel-overlay-blurred-flower.jpg` | Stepped grid edge (without its glow) |
| 6 | `logo/LOGO-final-black.png` | The nav mark, flat |

### 3.2 Prompt A — the full hero screen as a website mockup

> 16:9 desktop website screenshot on warm bone #F0EDE6. Top bar: small black four-cell mark left; "Approach · About" in Schibsted Grotesk; far right one outlined button in deep pine #1F4D3D reading "Get your free footprint audit". Upper left: a headline in Instrument Serif, ink #141614, "Your whole / marketing footprint, / run for you.", last line italic; beside it a deck in Schibsted Grotesk #5E625C: "Every channel handled, month after month — and you see exactly what was done."; under it a filled button #1F4D3D, bone label "Get your free footprint audit"; then an italic serif line "Free, and yours to keep either way." Right: a real photograph running off the top and right edges, dissolving leftward into bone as small square fragments. A person, low angle, late sky, one ochre garment, film grain, face turned up to a loose handful of dry gold, coral and white wildflowers held up to the light. Only the bouquet is redrawn as tiny monospace characters coloured by the petal beneath, white in lit petals, coral through the bodies, gold at the centres, clipped to its silhouette with a stepped edge. Sky, skin and hand stay photograph. No stems, second button, logos or numbers.

### 3.3 Prompt B — the photograph with its technological layer only

> A real photograph, low angle, late afternoon sky filling the frame, film grain. A person off-centre right, cropped by the right edge, one ochre garment, face turned up to a loose handful of dry gold, coral and white wildflowers held up to the light; the fist grips just under the heads, stems out of frame. The bouquet alone is rebuilt from small monospace characters on a strict square grid, each character coloured by the petal beneath it: white where petals are lit, coral through the bodies, gold at the centres, sparse and dark in shadow. Clipped hard to the bouquet's silhouette with a stepped edge. Sky, skin and hand are untouched, sharp photograph. No text, interface, glow or black.

### 3.4 Negatives

text or a button on the photograph · a whole-frame conversion · characters on skin, hand, garment or sky · black ground · centred stack · second button · announcement bar or pill · logo strip or logos · numbers, metrics, badges · dashboard, screen, phone, laptop · glass, blur panels, gradient mesh, glow, neon, lens flare · drop shadow, border, card frame · mascot, robot, bee character, illustrated people · green foliage or stems near the button · poreless retouched skin, plastic hair, extra fingers · Inter, Helvetica, bold serif · fog, particles with no subject · bokeh hearts, stock smile at camera · horizon line, buildings · watermark

### 3.5 Aspect and size

16:9 at 2560 × 1440 for the desktop still. Mobile stays text: a second portrait crop, bouquet and hand in the upper half off the top and right edges, words below on bone, is shot for, not rendered.

### 3.6 Explain afterwards

In this hero only the flowers move: the characters arrive across the bouquet along the diagonal in under a second and then breathe, a few cells a second re-sampling their colour from the petals, while the sky, the skin and the hand never change. The still is the resting frame, conversion complete, the hand untouched.

---

## 4. Cost and the one risk

- **Real shoot:** the hero (person, bouquet, sky) and H10's field, same location later that afternoon, each in two crops. It is the setup concept 1 needs, so it is the second setup on that afternoon (F4 asked for one).
- **Generated:** the H5 clip, on the founder-decided method; the parent session drives it, no engine reaches it.
- **Built:** the glyph renderer in conversion mode with a silhouette mask and finger-edge thinning, unmasked and static again for H7; the dot renderer; the mosaic-dissolve mask; the blueprint overlay; the running head with its stripe cells.
- **Risk, said once.** Flowers appear on Home three times, hero, set-piece and close, one botanical too many for some visitors; and conversion needs tonal range at a 12 px pitch or the petals go flat, so the bouquet must carry lit and shadowed petals in one frame and the pitch is tested on the first frame before anything else is built.

```claims
claims:
  - id: c-concept-03-moment-1-as-conversion
    assert: "Concept 03 spends Layer 3 moment 1 at H1 in conversion mode as DESIGN-LANGUAGE.md defines it, so fork F1 closes with no edit to a locked file"
    kind: internal-fact
    scope: project
    verified_by: command
    evidence: {cmd: "grep -q 'inherit colour from the pixel beneath' docs/05-marketing/DESIGN-LANGUAGE.md && grep -q 'Conversion, moment 1 as defined' docs/05-marketing/concepts/2026-09-02-concept-03-flowers-held.md", expect_exit: 0}
    valid_until: 2026-12-31
    confidence: 0.95
```

*Text only. Nothing generated, rendered or built. Every line above is PROVISIONAL and the founder's to strike. Two warm prospects remain un-called; nothing here is a customer signal.*
