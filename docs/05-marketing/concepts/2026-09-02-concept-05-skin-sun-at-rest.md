# Concept 05 — Skin, sun, the machine at rest · homepage spec · 2026-09-02 · framer [design] · PROVISIONAL

| | |
|---|---|
| **Status** | Not plan of record. Text only: nothing generated, rendered or built. The concept is decided in `2026-09-02-ranking-and-six-concepts.md` §3; this makes it concrete. Every number below is a design value, never a claim. |
| **Lead id** | C-10 (#12): closer than a headshot, skin intact, face off two edges |
| **Hero real thing** | A face cropped past its edges in direct low sun. One eye looking up, a cheek, hair, the edge of one warm collar (B-42), a corner of sky top-right. Freckles, pores, grain in camera (B-24). No retouching that removes skin. |
| **Ground** | True black `#000000`. The swarm present in the dark, at rest (X-23), never on the person. |
| **Forks resolved (ranking)** | F1 moot · F2 B · F3 A in its sharpest form · F5 A · F6 B · F7 A · F8 A · F9 A. OPEN: F4, F10–F13. |
| **Nearest kin** | C06 · L22 · C18 · board-11 · A21 as the warning |
| **Must not resemble** | negative-1 Landio: dark, fog, glow, centred stack. The difference is one number, the field's density, stated in §1.4 and measured. |
| **Lens exception** | Lenses may carry `requires_claims: [user-language]`; it cannot be satisfied: ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` is empty by design; the logged exception is `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds; nothing here is claimed as customer language. |

## 0. The concept in five lines

1. A person at a scale nobody dares: a face cropped past its edges, in real low sun, skin intact. C06's frame on the site's own person.
2. Nothing on the photograph. It dissolves into true black along the diagonal, and the machine lives in the black: one particle at rest, densest at the outer edges, emptied toward the type.
3. Words on black, never on the picture. The display serif large in warm off-white, the deck muted beneath, the accent small under it.
4. The machine is loud once, at H5, where the flower set-piece scrubs to total conversion. H1 and H7 share one dark world.
5. It does not exist without a real shoot. A generated face fails first at this scale (B-43).

## 1. Tokens and type scale

### 1.1 Tokens and the ground map

| Token | Light chapters | Dark chapters |
|---|---|---|
| ground | `#F0EDE6` warm bone | `#000000` true black |
| surface | `#FFFFFF` | `#0E0E0E` |
| ink | `#141614` | `#EFEDE7` |
| muted | `#5E625C` | `#8E938C` |
| rule (hairline) | `#DCD8CF` | `#242624` |
| accent, CTA only | `#1F4D3D` | `#57B295` |

Home: H1 black · H3–H6 bone · H7–H8 black · H9 bone · H10 bone, the meadow dissolving into it · footer bone. Three boundaries, each an S-01 interlock band (§1.3). Two accent fills: H1 in `#57B295`, H10 in `#1F4D3D`. Nav and H8 outlined, never filled.

### 1.2 Type scale

| Element | Face | Desktop px / leading | Mobile px / leading | Measure | Tracking | Case |
|---|---|---|---|---|---|---|
| Display headline (H1, H7, H10) | Instrument Serif regular, one italic word | 88 / 88 (6.1vw, clamp 64–112) | 52 / 54 | 20 characters a line, 8 columns | −0.01em | Sentence |
| Deck | Schibsted Grotesk 400 | 20 / 28 | 17 / 25 | 52ch | 0 | Sentence |
| Section headline (H3–H6, H9) | Instrument Serif regular, one italic word or none | 56 / 60 | 36 / 40 | 26ch | −0.005em | Sentence |
| Row and block head (H3 labels, H7 names, H9 questions, H8 line) | Instrument Serif regular | 32 / 36 | 24 / 28 | 30ch | 0 | Sentence |
| Eyebrow | IBM Plex Mono 400 | 12 / 16 | 11 / 16 | one line | +0.08em | UPPER |
| Body | Schibsted Grotesk 400 | 17 / 26 | 16 / 24 | 65ch | 0 | Sentence |
| Label / mono (rules, ordinals, rail, sign-off) | IBM Plex Mono 400 | 13 / 18 | 12 / 16 | 60ch | +0.02em | As written; ordinals `01` |
| Button | Schibsted Grotesk 500 | 15 / 15, 44 tall, 20 sides | same | one line | +0.01em | Sentence |
| Caption | IBM Plex Mono 400, muted | 12 / 16 | 11 / 16 | 48ch | +0.02em | Sentence |
| Running head | IBM Plex Mono 400, muted | 12 / 16 | 11 / 16 | one line | +0.08em | UPPER |

Instrument Serif has no bold. Emphasis is scale, tone (X-19, X-09) and one italic word on the phrase a stranger could argue with, never the noun (C-34). Where each falls is in §2. Headings balance; running text never exceeds its measure.

### 1.3 Radius, gutter, grid, pitch

**R = 12px**, one number: card radius, cell gutter, the gap between any two things that touch. Derived from the mark (X-33): its fillet is about one-eighth of a cell in `LOGO-final-black.png`; the column module at 1440 is 88px; 88 ÷ 8 = 11, set on the 4px rhythm as 12. The mark's cross gutter is about one-eleventh of a cell, 8px at the same module: that is the **pitch**, one number for the dot grid, the smallest dissolve tile and the particle lattice (X-35). Column gutter 2R = 24px. Twelve columns at 1280 and above (64px margins, 88px columns at 1440), six at tablet, four at 480 and below (20px margins, gutter R). Hairline rules at every column edge, full height, in the rule token, carrying nothing. The mark sits flat inside column 1 at 40px in nav and footer (X-43, X-38); below that its stripes smear.

**Dissolve.** Subtractive knockouts at the pitch (B-02): tiles of 1, 2, 3, 4 and 6 pitch units, clustered along the front, a band about 120px deep, tiles nearest the photograph carrying photograph (A-19), then a tail of single 8px units up to 120px further into the ground (A-16), never within 2R of a word. **Interlock bands** at the three ground boundaries: one row of 16px tiles, the boundary horizontal, the row's on/off pattern stepping bottom-left to top-right (the mark's staircase), so the diagonal is in the grain, not the line (S-01, C-13).

### 1.4 The field, as one number

One particle: a 2 × 2 CSS px square (4 × 4 device px at 2×), opaque, in ink `#EFEDE7`, on the 8px lattice. One size, no blur, no opacity below 1 (the compositing rule). X-23 says surface value; `#0E0E0E` on `#000000` measures about 1.1:1 and does not exist on a calibrated screen, so the particle takes ink and "felt rather than seen" comes from the number, not the value. Density is the only variable (X-37) and it is one number: **peak coverage 0.10% of pixel area in the outer band of the frame** (the outer 10% of width and height). That is one particle per 3,600 px², a 60 × 60 px cell on average, lattice occupancy 1.6%. It falls linearly with distance to zero at an exclusion boundary 2R outside every word block, every button, the photograph, its dissolve band and its tail (X-06). Whole-frame mean about 0.04%. Measured, not felt: count non-black pixels in the rendered still's outer band, divide by the band's area; accept 0.08–0.12%. Above 0.2% the black stops being black (X-23's own risk); below 0.05% it is invisible. The same number at H7 and H8. Landio's dust has sizes, glow and fog; this has one size, one value and a number.

## 2. The sections, in order

### Nav, persistent, inherits the chapter's tokens

**Text**
> Approach · About
>
> Get your free footprint audit

**What he sees.** Chrome: no real thing, no layer. The mark flat at 40px, two links, a hairline, one outlined button. Beneath, the running head: `01 / 09 · HOME` with nine 8px stripe cells (the mark's hatch, X-15) filling in ink as the index advances; visitor-local time at the right end from H3 onward. On H1 the clock lives in the rail, so one clock is on screen at a time.

**Layout.** 72px bar, fixed. Mark in column 1 (X-43); links ending at column 10; a 24px vertical hairline (X-05); the outlined button in columns 11–12. The running head is a 24px mono line under the bar's baseline, inside the fixed element, so nothing else is pinned (S-08's risk). Mobile at 480 and below: two rows, mark and full-label button on the first, the two links on the second. No hamburger, no drawer.

**Type.** Body at 15px for links; button row; running-head row.

**Colour.** Transparent over the chapter; tokens swap the instant a boundary passes the bar's foot. Over black: ink `#EFEDE7`, outline `#57B295`. Over bone: ink `#141614`, outline `#1F4D3D`. No fill.

**Motion.** Hover fills the outline, 200ms in, 150ms out (X-10). Nothing on scroll but the index. Reduced motion: hover is a state.

**Feeling.** Clean. Nearest: C18's bar minus its second button; board-11-resend's bar minus its menus.

### H1 · Hero, LOUD

**Text**
> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

**What he sees.** The real thing: a face closer than a headshot, cropped past its edges, one eye looking up and to the right toward a corner of open sky, a cheek, hair, the edge of one warm collar, the only warm thing in the frame (B-42). Direct low sun, freckles and pores, grain in camera, no retouching. The technological layer: nothing on the photograph. Its job is to be absent from the person. The photograph dissolves into true black and the swarm sits in that black at rest, densest at the outer edges, gone where the words are. Drop this treatment on another photograph and the black is empty; here it is the machine waiting. The dial: subtle, edge physics and ground only.

**Layout.** Single column over the twelve-column grid; frame 100vh, clamp 720–1000px. The photograph occupies the top-right and runs off the top and right edges, untreated there. Its front is a diagonal band whose macro-line runs from 42% across the top edge to 78% down the right edge, so the picture holds about 62% of the top edge and 78% of the right. The eye sits near 72% across and 28% down; the sky corner is the top-right 12% of the width. The band and tail are §1.3's. The front's macro-line runs top-left to bottom-right; its grain, the order tiles drop out and the staircase the clusters step along, runs bottom-left to top-right (C-13). Words bottom-left on black. X-01 applied: the display block eight columns wide from column 1; the deck in the second face beneath it, indented to column 3, 24px under the headline's last line. The deck cannot sit to the right because the right is the picture; the asymmetry is between the word column and the picture, and between the two voices' left edges. Button 32px under the deck at column 3, 44px tall; the risk line 12px under the button. The block's foot sits 96px above the frame's bottom; the rail 40px above the bottom at column 1: visitor-local time · "(Scroll)" (L-24, X-14). At 88px the first line ends near 58% across, where the band's lower edge sits near 28% down; the headline's top is near 39% down, so 100px of black separates them and the tail's exclusion holds the rest. Mobile: a second crop, not a scale (S-14). The eye and the sky corner in the top 45%, running off the top, left and right edges, dissolving downward; words beneath across four columns; the rail removed, the clock moved to the running head. Frame 100svh.

**Type.** Display headline, three lines: "Your whole marketing / footprint, / run for you." Italic on *whole*, the word a stranger tests first and the word H6 later earns; the noun untouched. Deck row, muted. Button row. Risk line in Instrument Serif italic 18 / 24, muted (the quiet punchline, brainstorm §17.1). Rail in the running-head row.

**Colour.** Ground `#000000`. Headline ink `#EFEDE7`; deck, rail and risk line muted `#8E938C`; particle in ink. Button `#57B295` filled, label `#000000`: the first of two fills, on black, where it was measured. The photograph's colour, warm skin, the collar, one corner of blue, is all the colour on the screen, and it stops at the front. No green in the shot (C-33).

**Motion.** Nothing. The field is static (X-23): a rest that breathes is not rest. Photograph, words and the final dissolve mask are present at first paint; nothing is revealed. Two changes only: the clock's minute digit, and "(Scroll)" fading on the first scroll event, never to return. Reduced motion is identical. **The frame to print:** there is one. The still is the page at any second after load.

**Feeling.** Expensive, then human. "Skin in real sun at a scale nobody dares, with the machine kept in the dark around it." Nearest: C06 (the frame), board-11-resend (serif on black), C18 (the empty centre), LOGO-03 (the particle at rest).

### H3 · How the work gets done, MEDIUM

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

**What he sees.** Bone, no image. Three blocks read as a sequence because each starts one column further right, the mark's staircase as layout. Raised mono ordinals `01 02 03` at each head (L-14), no connectors (S-11 index only). Dial: none.

**Layout.** Eyebrow and headline in columns 1–7. Block one columns 1–5, two 2–6, three 3–7, 96px apart. Each: label, one line of what it is, then the pair with the label in ink and its line in muted at one size (X-09). Mobile: one column, 16px indent per step.

**Type.** Section headline, italic *every*. Row head for labels; body for lines; mono for ordinals.

**Colour.** Bone, ink, muted, rule. No accent.

**Motion.** Blocks arrive by opacity along the diagonal, once, 200ms each, 80ms apart. Still: all three present.

**Feeling.** Clean, minimal. Nearest: L22's process strip for the plainness, minus its cards.

### H4 · What "done" means, MEDIUM

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

**What he sees.** One white artefact card at R, off-grid by half a column and rotated 1.5°, depth from overlap only: it crosses column 6's hairline, and there is no shadow. On it, the struck line in the grotesk, its ghost twin drawn faint in the rule token behind the rewrite (B-32); blueprint lines in the rule token running past the struck line to the card's edge, labelled cap-height, x-height and baseline in muted mono (C-17, A-05). The written rule sits on the bone under the card's bottom-left in mono, not inside it. Dial: moment 6, subtle.

**Layout.** Text columns 1–5; card columns 6–11; rule, caption and the one underlined sentence under the card at column 6. Mobile: text, then the card full width, upright.

**Type.** Section headline, italic *finished*. Deck. Struck line in body with a line-through in ink. Rule in mono, ink. Caption row. The after-caption line in body with an underline as its whole affordance, never a button.

**Colour.** Bone, surface `#FFFFFF`, ink, muted, rule. No accent.

**Motion.** The strike draws left to right once on entry, 300ms. Still and frame to print: struck, ghost visible.

**Feeling.** Technology, clean. Nearest: C11's cap-height and baseline guides.

### H5 · The shape of it, MEDIUM

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

**What he sees.** The set-piece, moment 2. One bud against sky, shot wide open so the blur is the anchor (B-40); a generated clip split to at most 90 frames, each through the dot renderer at the 8px pitch, circular dots (F8 A), radius from luminance, colour sampled from the flower, the only colour in the middle of Home. The dial scrubs with the frames (A-09): at Foundation, patches of dots on the closed bud, the rest photograph; at Output, petals parting, dots spreading with them; at Compounding, the head at total conversion, the pitch holding, the values settling. The one loud machine moment on Home. The stem at the frame's foot stays photograph at every scrub point: the un-effected anchor. Full bleed with inward dissolve at the sides (F9 A). The three labels are real DOM text in the left column, surfacing at their scrub points.

**Layout.** Pinned canvas, 100vh; labels columns 1–3; the flower in columns 5–11, running off the bottom. Mobile: tighter crop, fewer frames, labels above the canvas.

**Type.** Section headline, italic *all*. Phase labels in row head; phase lines in body, muted.

**Colour.** Bone; the flower's own gold and white. No accent.

**Motion.** Scroll-scrubbed, pinned, deterministic, reversible; at most 1.5 MB; lazy; below the fold; gated by `scrub-fps.mjs` at 4× throttle. Reduced motion: the Compounding poster frame, no canvas, no listener. **Frame to print:** the Output frame near 45% progress, petals parting, dots over the petals, the base still photograph.

**Feeling.** Futuristic, technology. Nearest: B18 for the bud's blur and gold on blue; C12 for the dot's scale against a page (the dots, not the office).

### H6 · What's covered, QUIET

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

**What he sees.** Bone, no image, no layer. Four columns of type under ordinals `01`–`04` (A-22), hairlines doing the dividing, the headline parked in the far-left margin (L-13).

**Layout.** Headline columns 1–3, stacked in short lines; groups in columns 4–12, two columns each; the closing line under them at column 4. Mobile: headline above, groups two by two.

**Type.** Section headline, italic *actually*. Group labels in row head at 24px; items in body; ordinals mono.

**Colour.** Bone, ink, muted, rule. No accent.

**Motion.** None.

**Feeling.** Minimal. Nearest: C18's lower list for the plainness.

### H7 · What you're choosing between, LOUD

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

**What he sees.** The ground flips to black across an interlock band, and the resting field returns at the hero's number (X-23, the site's one style). Four ledger rows and an empty fifth (L-02): ruled above and below at the same hairline weight, the same 96px height, name slot and consequence slot both empty, labelled with nothing, at the position a Beeond row would occupy. The rows sit in the emptied centre; the field is at the frame's edges (X-06). Dial: ground only.

**Layout.** Headline columns 1–5. Rows columns 3–11: name flush left in columns 3–5, consequence in columns 6–11 with its first line on the name's baseline (X-16), hairline beneath. Mobile: name over consequence, one column.

**Type.** Display headline, italic *choosing*. Names in row head, ink; consequences in body, muted (X-09).

**Colour.** Black; ink and muted; particle in ink. No accent; the button is H8's.

**Motion.** None; the field is static here too.

**Feeling.** Expensive, minimal. Nearest: board-11-resend for type on black; C18 for the emptied centre; LOGO-03 for the ground.

### H8 · The ask beat, QUIET

**Text**
> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**What he sees.** One line and the outlined button on H7's black, 96px under the empty row: the quietest ask on the site (S-17).

**Layout.** At column 3, on the rows' name axis; the button 16px under the line, 44px tall, the minimum target. Mobile: same.

**Type.** Row head for the line, ink; button row, label in accent.

**Colour.** Border and label `#57B295`, no fill: the nav's own treatment.

**Motion.** Hover fill, asymmetric.

**Feeling.** Quiet. Nearest: board-11-resend's secondary action, made a button and made smaller.

### H9 · Before you ask, QUIET

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

**What he sees.** Bone returns across an interlock band. The page's one prose home: title parked in the left margin (S-08), five open rows on the right with raised mono ordinals `01`–`05`, no accordions, nothing visual.

**Layout.** Title columns 1–3; rows columns 4–11, question then answer at 65ch, hairline beneath. Nothing sticky. Mobile: title above, rows one column.

**Type.** Section headline, no italic: nothing in "Before you ask." can be argued with. Questions in row head; answers in body, ink, because this is running text at length.

**Colour.** Bone, ink, muted, rule. No accent.

**Motion.** None.

**Feeling.** Human, plain. Nearest: L22's questions, open instead of folded.

### H10 · Close, LOUD

**Text**
> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**What he sees.** The meadow, moment 3: flowers and sky, warm gold on blue, panned bottom-left to top-right along the flight line (A-28), stems sharp and heads smeared (B-36), heavy grain. It runs off the bottom, left and right edges and dissolves upward into bone where the words sit. Dial: mid, in the camera.

**Layout.** Words on bone in columns 1–7 at the top: headline, deck, the second filled button. The photograph rises from the bottom; its front's macro-line runs from 55% down the left edge to 35% down the right, this one lying along the flight line, band and tail as §1.3, never within 2R of a word. Section 100vh. Mobile: words, then the photograph off three edges beneath.

**Type.** Display headline, italic *look*: the audit is a look, not a commitment. Deck, muted. Button row.

**Colour.** Bone; the meadow's gold and blue. Button `#1F4D3D` filled, label `#F0EDE6`: the second and last fill, on bone, where it was measured. Never `#57B295` here.

**Motion.** None; the blur is in the photograph. Still: the same.

**Feeling.** Human, the warm end. Nearest: B18 (the picture), L22's poppies close (the position).

### Footer, QUIET, no ask of its own

**Text**
> Approach · About · `[OPEN — the ask page's link text; slug OPEN]`
>
> `[OPEN — contact address]`
>
> drafted by the swarm · calibrated by Yarden
>
> `[OPEN — no privacy page exists]`

**What he sees.** Three groups, nothing loose. The mark flat in column 1 at 40px (X-43, X-38). The wordmark's face is OPEN (brainstorm §8), so the mark stands in until it lands. No waitlist, no newsletter, no logo strip.

**Layout.** Mark column 1; Where to go columns 4–6; Who to reach 7–9 with the sign-off beneath in mono; The small print 10–12. Mobile: stacked.

**Type.** Body for links; mono for sign-off and small print.

**Colour.** Bone, ink, muted. No accent.

**Motion.** None.

**Feeling.** Quiet. Nearest: L22's foot.

## 3. Render pack, the hero only

### 3.1 Reference images to condition on, in priority order

Paths under `docs/05-marketing/references/`.

1. `founder-brain/branding-feeling/C06-closeup-eye-freckles-nature-brand.jpg`: composition, light, skin, the frame.
2. `founder-brain/logo/LOGO-03-texture-noir-starfield-inverted.png`: the particle's character, far too dense.
3. `board-11-resend.png`: display serif, off-white on black.
4. `founder-brain/branding-feeling/C18-endex-homepage-hero-full-capture.png`: emptied centre, quiet top bar.
5. `founder-brain/branding-feeling/C12-dark-green-dot-cross-serif-hero.png`: the dissolve's stepped tiles only.
6. `founder-brain/branding-feeling/B12-low-angle-photo-friends-phones-sky.jpg`: in-camera grain, real sky.

### 3.2 Prompt A, the full hero screen as a website mockup

A 16:9 desktop website screenshot on true black (#000000). Top bar: a small flat four-cell geometric mark at the left in warm off-white (#EFEDE7); the links "Approach" and "About" right of centre in a plain grotesk; a thin vertical hairline; one outlined button in pine tint (#57B295), no fill, reading "Get your free footprint audit". Right side: a real photograph of a face cropped far past its edges, running off the top and right edges: one eye looking up and right, a cheek, hair, the edge of a warm collar, a small corner of blue sky top-right, direct low afternoon sun, freckles, pores, visible film grain, unretouched, no smile. The photograph breaks into the black leftward and downward along a diagonal in scattered hard-edged square tiles of several sizes, thinning to single squares, the tiles nearest the picture carrying pieces of it. Lower left, on black, never touching the photograph: "Your whole marketing footprint, run for you." in a large high-contrast editorial serif (Instrument Serif), warm off-white, "whole" in italic. Beneath, in muted grey grotesk (#8E938C, Schibsted Grotesk): "Every channel handled, month after month — and you see exactly what was done." Beneath, one small filled #57B295 button with black text "Get your free footprint audit". Beneath, small italic serif in grey: "Free, and yours to keep either way." Bottom-left, tiny mono: a clock time and "(Scroll)". Over the black only, a very sparse scatter of tiny one-size warm-white square particles, densest near the outer frame edges, thinning to nothing around every word, absent from the photograph. No marks on the skin, no glow, no fog, no vignette.

### 3.3 Prompt B, the photograph with its ground only

A real photograph on true black (#000000), no text, no interface, no button. A face cropped far past its edges fills the upper right and runs off the top and right edges: one eye looking up, a cheek, hair, the edge of a warm collar, a corner of blue sky top-right, direct low sun, freckles and pores, film grain, unretouched, no smile. The photograph breaks apart into the black toward the lower left along a diagonal in hard-edged square tiles of several sizes, scattered, thinning to single squares, the tiles nearest the picture carrying fragments of it. Over the black only, a very sparse field of tiny one-size warm-white square particles, densest at the outer edges, empty in the lower left. No glow, no fog, no vignette, nothing on the skin.

### 3.4 Negatives

Text on the photograph · glass · frosted pill · gradient mesh · glow · fog · vignette · bokeh orbs · lens flare · light rays · marks, glyphs or dots on the skin · glitch · pixel sort · iridescence · poreless or retouched skin · a smile · a full head visible · a studio backdrop · mascot · robot · logos or a logo strip · numbers or metrics · dashboard or screenshot · a second button · a centred stack · an eyebrow above the headline · an announcement bar · icons under the button · italic serif bolted onto a grotesk headline · Inter or Geist · particles of varying size · soft or blurred particles · particles on the person · a near-black or navy ground instead of #000000 · gradient anywhere · drop shadow · border · people at laptops.

### 3.5 Aspect and size

16:9 at 2560 × 1440. Mobile is not rendered: the mobile crop is the eye and the sky corner in the top 45%, dissolving downward, words beneath.

### 3.6 Explain afterwards

Nothing in this hero moves: the field is at rest by definition, the photograph and the words are present at first paint, and the only two changes are the clock's minutes and the scroll cue fading once. The still is the page at any second after load, so it is the frame; the time on it is a placeholder for the visitor's own.

## 4. Cost and the one risk

**Real shoot, mandatory.** The hero face in two crops, and the founders' portraits for About, one afternoon, one light. A generated face fails first at this scale: poreless skin, no grain (B-43), and a company whose thesis is that a human calibrates everything cannot open on a synthetic one. The meadow is real if the same day allows and otherwise generated with the pan authored (brainstorm §12 permits either). **Generated:** the flower clip only, on the decided method, at most 90 frames. **Built:** the mosaic-dissolve mask, the particle field (the glyph renderer with no mask at rest occupancy), the dot renderer, the blueprint overlay, the instrument layer, the interlock band. Nothing else costs.

**RISK, once.** The founder asked for ASCII, dots and the bee, and this first screen shows none of them. The futuristic is carried by the black, the number and H5, and he may miss it. If he does, the concept fails on his own word list, not on a jury's.

---

*Text only. Nothing generated, rendered or built. Every line above is PROVISIONAL and the founder's to strike. Two warm prospects remain un-called; nothing here is a customer signal.*
