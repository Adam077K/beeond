# Concept 02 — Mostly empty · homepage spec · 2026-09-02 · framer [design] · PROVISIONAL

| | |
|---|---|
| **Status** | Not plan of record. Text only — nothing generated, rendered or built. Concept 2 of `2026-09-02-ranking-and-six-concepts.md` §3, made concrete for the founder to strike through. Sizing numbers are design values, not claims. |
| **Lead id** | **X-06** (#4): author the emptiness. |
| **Hero real thing** | One forearm and open hand entering from the bottom-left corner, cropped by two edges, fingers extended toward the upper right along the flight line, against sky. No face on screen one. |
| **Ground** | Warm bone `#F0EDE6`. One dark chapter on Home: H7–H8. |
| **Forks resolved** | F1 B (overlay, no bee) · F2 A (comma split crossing the gap) · F3 moot · F4 the gap, not the frame · F5 A · F6 B · F7 B (quantised light, C-29) · F8 B (the cross as the dot, L-18) · F9 B (inset field, X-22). OPEN: F10–F13, wordmark face, favicon. |
| **Nearest kin** | L12 · B09 · L09 · L13's closing hands · C18. |
| **Must not resemble** | L12 itself — not Refboard in bone: no logo wall, no second button, no prompt card, no stipple. |
| **Lens exception (pasted)** | Lenses may carry `requires_claims: [user-language]`; it cannot be satisfied — ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` is empty by design; the logged exception is `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds; nothing here is claimed as customer language. |

Every line of site text below is the storyboard's, verbatim. Nothing from the deleted 2026-09-02 build.

---

## 0. The concept in five lines

1. The space between the human and the machine is where the work is signed off; the first screen is mostly empty, and the emptiness is the argument.
2. One real hand enters a nearly empty bone frame from the bottom-left; the sky around it dissolves into bone within a hand-width, so the photograph is small.
3. Ink marks enter from the top-right along the flight line, densest at the edge, and stop one hand-width short of the fingertip. They never resolve into anything: the swarm has come as far as it comes without the person.
4. The headline's comma split crosses that gap on the counter-diagonal; the crossing is the authored thing.
5. The gesture repeats once: H7's empty fifth row is a gap where a row would be.

---

## 1. Tokens and type scale

**Ground map.** H1 bone · H3–H6 bone · **H7–H8 black** · H9 bone · H10 bone, the meadow over it · footer bone. The ground changes once, as an event. Both boundaries (H6→H7, H8→H9) interlock along the flight-line diagonal in a one-row-deep band of 20px tiles (S-01), the line rising 60px left to right; never a horizontal cut.

| Token | Light chapters | Dark chapter (H7–H8) |
|---|---|---|
| ground | `#F0EDE6` warm bone | `#000000` true black |
| surface | `#FFFFFF` (H4's card) | `#0E0E0E` (H7's outermost light tiles) |
| ink | `#141614` — type, marks, the flat mark | `#EFEDE7` |
| muted | `#5E625C` | `#8E938C` |
| rule | `#DCD8CF` | `#242624` |
| **accent** | `#1F4D3D` — H1 fill, H10 fill, nav outline on bone | `#57B295` — H8 outline, nav outline while over H7–H8 |

Two fills per page (H1, H10), two outlines (nav, H8), never swapped. All other colour is photographic: skin at H1, sky at H5, gold and blue at H10.

| Element | Face | Desktop px / leading | Mobile px / leading | Measure | Tracking | Case |
|---|---|---|---|---|---|---|
| Display headline (H1 · H7 · H10) | Instrument Serif regular, one italic word at most | 96 / 96 | 48 / 50 | ≤ 20 characters a line; the split's halves never share a line | −0.01em | sentence |
| Deck (H1 · H4 · H10) | Schibsted Grotesk 400 | 22 / 32 | 18 / 27 | ≤ 60ch | 0 | sentence |
| Section headline (H3–H6 · H9) | Instrument Serif regular | 56 / 60 | 34 / 38 | ≤ 28ch | −0.005em | sentence |
| Row or block head (H3 labels · H7 names · H8's line · H9 questions) | Instrument Serif regular | 32 / 36 | 24 / 28 | ≤ 40ch | 0 | sentence |
| Eyebrow | IBM Plex Mono 400 | 12 / 16 | 11 / 16 | one line; a second-script line reserved beneath, empty (S-19) | +0.12em | UPPER |
| Body | Schibsted Grotesk 400, italic where the storyboard italicises | 18 / 28 | 16 / 25 | 62–66ch | 0 | sentence |
| Label / mono (H4's rule · footer sign-off) | IBM Plex Mono 400 | 13 / 20 | 12 / 18 | ≤ 66ch | +0.02em | sentence |
| Button | Schibsted Grotesk 500 | 16 / 20 · filled 52px tall · outlined 44px | 15 / 20 · 48px tall | never wraps | 0 | sentence |
| Caption (H4) | IBM Plex Mono 400, muted | 12 / 18 | 12 / 18 | ≤ 66ch | +0.02em | sentence |
| Running head (index · local time) | IBM Plex Mono 400, tabular figures | 12 / 16 | 11 / 16 | one line, two ends | +0.08em | UPPER for `HOME` |
| Risk-reversal line (under H1's button) | Instrument Serif italic | 20 / 28 | 17 / 24 | one line | 0 | sentence |

No bold exists; scale and one italic do the shouting. **The italic per headline (C-34, the phrase that could be argued with, never the noun):** H1 *whole* · H3 *every* · H4 *produced* · H5 *once* · H6 *actually* · H7 none (the empty row is the emphasis) · H9 none · H10 *look*.

**One number: 20px** (14px under 768px) — radius, gutter, dissolve-tile pitch, boundary-band pitch. Derived from the mark (X-33): on `LOGO-final-black.png` read at 192px the corner fillet and the cross gap both measure about one-seventh of a quadrant cell; a 150px column cell at that ratio gives 20. The mark-field and set-piece pitch is half of it, 10px, so three mark appearances share one pitch (X-35). The bank's caveat stands: check the radius at both extremes before locking.

**Column grid.** 8 columns of 150px, 20px gutters, 50px margins at 1440 (columns start at x 50, 220, 390, 560, 730, 900, 1070, 1240). Mobile: 4 columns of 77px, 14px gutters, 20px margins at 390. Three full-height hairlines expose it — x 50, x 390 (the margin columns' edge, where H9's title parks) and x 1390; one at x 20 on mobile. They pass **behind** photographs and the H4 card (B-28), carry nothing, and never border a control.

---

## 2. The sections, in order

### Nav and running head

**Text**
> Approach · About
>
> Get your free footprint audit

**What he sees.** The flat mark (X-38) in one 40px grid cell at left (X-43); two links; a 24px vertical hairline (X-05); one outlined button. Beneath, the running head as one line with two ends (B-19): `01 / 09 · HOME` left, with nine 2×10px diagonal bars in the rule colour filling in ink one at a time as the index advances (X-15); the visitor's local time right, ticking, never a city. No layer, no dial.

**Layout.** Fixed: 56px nav, 28px running-head line, one hairline under both; inherits the chapter's tokens as the page passes beneath. Mobile: mark and button on line one, the two links beside the index on line two; nothing hidden, no hamburger.

**Type.** Links body 16 / 20 in ink; button row; running-head row.

**Colour.** Outline `#1F4D3D` on bone, `#57B295` over H7–H8. No fill.

**Motion.** The outline fills on hover, 200ms in, 150ms out (X-10). Reduced motion: identical.

**Feeling.** *Clean.* `C18-endex-homepage-hero-full-capture.png`: one outlined action, nothing else.

---

### H1 · Hero — LOUD

**Text**
> **Headline** — Your whole marketing footprint, run for you.
>
> **Deck** — Every channel handled, month after month — and you see exactly what was done.
>
> **CTA** — Get your free footprint audit
>
> **Under the button** — Free, and yours to keep either way.

**What he sees.** *The real thing:* one forearm and open hand, a real person's, against open late-afternoon sky with no horizon (A-02), low sun on the skin, grain in camera (B-24). It enters from the bottom-left corner, cropped by the left and bottom edges, fingers extended toward the upper right at 45°, the flight line. Only a halo of sky survives around the skin: within one hand-width — about 110px at 1440, the palm's width at render size — the sky dissolves into bone by subtractive knockouts at the 20px pitch, tiles of 20, 40 and 60px, those nearest the skin carrying sky and those nearest the ground carrying bone, clustered at the skin side and thinning to a sparse tail of single tiles (B-02, A-19, C-20, A-16). The photograph is small; almost the whole screen is bone — B09's three-quarters-empty frame. Skin is the only warm thing on the page (B-42). The hand is the un-effected anchor: no mark touches skin or its sky.

*The technological layer and its JOB:* ink marks on bone. One particle (X-37): a 45° dash taken from the mark's stripe cell, 6 × 1.5px at 1440, opaque ink, on a 10px pitch, no letters (B-15); density is the only variable. The field enters from the top-right corner along the flight line — occupancy near 55% within 150px of the corner, the wedge's half-width tapering from about 260px to 40px, density falling with the square of distance to isolated single marks past the frame's midpoint (X-06, A-16), the last mark **one hand-width short of the fingertip** (B-17). A fringe under 5% lines the top and right frame edges and dies within 120px; the left and bottom edges belong to the photograph and carry nothing. The mass never resolves into a shape (L-30's failure mode, taken as the decision). The density map is multiplied by an exclusion mask feathered 96px around every glyph, so the field bends around the type: emptied toward the type, literally. **The job:** the interval is measured from *this* hand. On another photograph there is no hand and no interval; the gap is the sign-off.

*The dial:* mid.

**Layout.** Single column over full-bleed bone, 100vh (minimum 720px), the fixed chrome over its top 84px. The comma split (F2 A) runs the counter-diagonal: **"Your whole marketing / footprint,"** on two lines from column 1, cap-height at y 148, baselines 216 and 312; **"run for you."** as a left-aligned block in columns 5–8 (x 730–1390), baseline y 592; the deck beneath on two lines (y 620–684); the accent-filled button y 716–768; the italic line at y 796. The fingertip sits near (500, 470), the last mark near (610, 400). The type's diagonal (top-left to bottom-right) and the hand-and-marks diagonal (bottom-left to top-right) cross at the frame's centre, and the centre holds nothing. `(Scroll)` alone at bottom centre, y 856 (S-18); no instrument rail in the corner, because the corner is the hand's. Hairlines at x 50 and x 390 pass behind the forearm. Mobile (390 × 844): the type stacks top-left in reading order — first half on three lines, second half, deck, full-width button, line — the hand enters bottom-left below y 560, the marks enter from the right edge at mid-height and end about 70px from the fingertip, `(Scroll)` at the foot; one screen.

**Type.** Display headline, *whole* italic; deck; button; risk-reversal line; the running head above. Nothing else on the screen.

**Colour.** Bone ground; ink for the split and the marks; muted for the deck; the fill `#1F4D3D` with a bone label — fill one of two. The photograph carries skin and sky, and the dissolve tiles carry sky into the bone.

**Motion.** The field breathes: each mark lives 1.6–4s, re-sampled by density at a low rate; the front — the last isolated mark — drifts along the flight line by at most ±12px and never closes the gap. The photograph is still and loads first as the largest contentful element; the canvas starts after it; no parallax, no cursor or scroll reaction. `(Scroll)` fades on the first scroll event and never returns (X-14). Hover swaps the button to the outlined treatment. Reduced motion: the field rendered once. **The single frame to print: the tail at its closest permitted approach — the last mark exactly one hand-width from the fingertip, the contact that never comes.**

**Feeling.** *Minimalistic*, then *human*. Nearest `B09-creation-of-adam-hands-blue-poster.jpg` (one gesture, most of the frame empty), `L12-refboard-stipple-hands-grey-orange.jpg` (composition only), `C18-endex-homepage-hero-full-capture.png` (quiet headline, emptied centre), `L09-axial-dotted-wings-offwhite-quiet.jpg` (fields from the edges thinning to nothing).

---

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

**What he sees.** No photograph, no layer, no dial. Three blocks stepping down and right, each under a raised mono ordinal `01` `02` `03` (L-14), no connectors; the layout says sequence.

**Layout.** Eyebrow and headline in columns 1–4; block one columns 1–4, block two 2–5, block three 3–6, each 96px below the last; about 100vh. Mobile: stagger removed, blocks flush left under their ordinals.

**Type.** Section headline, *every* italic; block heads in the row-head row; body, the *What that means for you:* line in the grotesk italic as set.

**Colour.** Bone; block head and the *What that means* line in ink, the description in muted, so the eye lands on the payoff (X-09). No accent.

**Motion.** Blocks arrive by opacity along the diagonal once on entry, 200ms each, 80ms apart. Reduced motion: present. Frame to print: all three present.

**Feeling.** *Clean.* Nearest `L20-speakeasy`'s stepped plates, as layout only.

---

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

**What he sees.** One artefact card: a hard white rectangle at the 20px radius, no shadow, no border, depth by overlap — half a gutter off the column-5 hairline, occluding it, rotated −1.5°. Inside: the struck line in the grotesk, struck; the same line drawn a second time faint behind the sentence after the arrow glyph (B-32); moment 6 as the layer — baseline and x-height rules under the struck line, one dimension line on the rewrite, in the rule colour, running past the text to the card's edge, labels in muted mono (C-17). The rule sits on the ground beneath the card in mono, the caption beneath that. Dial: light — a card device, not a photograph.

**Layout.** Text in columns 1–4; card in columns 5–8, 660 × 400px; the after-caption sentence back in the text column with "approach page" underlined — a sentence, never a button. About 90vh. Mobile: card full-width under the text, unrotated.

**Type.** Section headline, *produced* italic; deck; struck line body; rule and caption in the mono rows.

**Colour.** Bone, surface white, ink, muted labels. No accent.

**Motion.** The strike draws once on entry, 300ms, the ceiling. Reduced motion: drawn. Frame to print: the strike complete.

**Feeling.** *Technology.* Nearest `A05` and `C11`, moment 6's own sources.

---

### H5 · The shape of it — MEDIUM · the set-piece

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

**What he sees.** *The real thing:* a generated clip of open sky in which a cumulus forms, building from the lower-left toward the upper-right along the flight line, 4–6s, static camera, framed tight (Layer 4b). *The layer and its job:* moment 2 with the mark's cross as the dot (L-18): ink crosses on the 10px pitch, arm length tracking luminance above the sky's own value, so clear sky carries no cross and the cloud a full one; the photograph reads through at full strength between them — the only colour in the middle of Home. Overlay, not conversion. The dots appear where the cloud appears: the technique's subject is the work gathering. *The dial* scrubs with the scroll (A-09): almost no crosses at Foundation, the first mass gathering at Output, full cumulus at Compounding, where the values settle and the pitch holds. Anchor: a patch of clear sky at the field's lower-left, untouched (C-14). Honest, from the ranking: the weakest set-piece on the law of the six.

**Layout.** An inset field (X-22): columns 3–8, 1000 × 560px, pinned for 200vh of scroll, margin on four sides, dissolving inward into bone within 60px of its own bound — negative space, never a border. Labels as real DOM text in columns 1–2, surfacing at progress 0, 0.33 and 0.66. ≤ 72 frames, ≤ 1.5 MB, lazy, below the fold, cleared by `scrub-fps.mjs` at 4× throttle. Mobile: 350 × 350, fewer frames, labels beneath.

**Type.** Section headline, *once* italic; phase names in the row-head row; their lines body.

**Colour.** Bone; sky blue and cloud white through the gaps; ink crosses. No accent.

**Motion.** Scroll-scrubbed, deterministic, reversible; the site's only pinned element. Reduced motion: the Compounding poster frame, all three labels visible, no canvas. **Frame to print: progress 0.5 — the first mass gathering, half the field still clear sky.**

**Feeling.** *Futuristic.* Nearest `B05` (the founder's dot-cloud, made to earn its place by moving) and `LOGO-07-variant-halftone-dissolve.png` for the field's edge.

---

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

**What he sees.** Type and the exposed hairlines, nothing else. Four groups under raised mono ordinals `01`–`04` (A-22), each item on its own line; no bullets, ticks, icons or cards. No layer, no dial.

**Layout.** Eyebrow and headline in columns 1–4; the groups two columns each across 1–8; the closing line back in columns 1–4. About 70vh. Mobile: one column.

**Type.** Section headline, *actually* italic; group labels in ink, items in muted at one size (X-09); closing line body.

**Colour.** Bone, ink, muted. No accent.

**Motion.** None.

**Feeling.** *Clean.* Nearest `A16`'s four ruled columns.

---

### H7 · What you're choosing between — LOUD · black

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

**What he sees.** The one ground change on Home, entered through the interlocking band. Four ledger rows (X-16) and an **empty fifth row** (L-02): ruled above and below at the same hairline weight, the same 120px height, labelled with nothing — the gap where the Beeond row would be, H1's gesture again. *The layer and its job:* quantised light from the bottom-left corner (C-29) — hard square tiles at the 20px pitch, a core of at most twelve tiles in muted `#8E938C`, then rule `#242624`, then surface `#0E0E0E`, occupancy falling from 70% at the corner to isolated tiles by 40% of the width and 50% of the height, rising along the flight line into an empty centre and resolving into nothing 96px short of any glyph or hairline. No hue: there is no photograph. Its job is compositional, said plainly — the mosaic mask run in reverse, so light comes out of the ground by the physics photographs dissolve into it. *Dial:* none.

**Layout.** Headline top-left in columns 1–5; rows in columns 4–8 (x 560–1390) — name flush left, consequence as a 470px block flush right, one baseline, hairline beneath — five rows from y 300; the light occupies columns 1–3 below the headline and never reaches column 4. About 110vh. Mobile: name above consequence, the fifth row kept, the light smaller.

**Type.** Display headline, no italic; names in the row-head row; consequences body. The wordiest LOUD section on the site, and the ceiling.

**Colour.** Black; type `#EFEDE7`; hairlines `#242624`; the light in the three dark values. No accent.

**Motion.** None; the light is static. Reduced motion: identical. Frame to print: the static frame.

**Feeling.** *Expensive.* Nearest `C18-endex-homepage-hero-full-capture.png` (light from one corner, empty centre) and `L19` for the emptied row.

---

### H8 · The ask beat — QUIET · same black

**Text**
> **Line** — See where yours stands.
>
> **CTA** — Get your free footprint audit

**What he sees.** One line and the outlined button at the smallest size the target minimum allows (S-17): 44px tall, border and label `#57B295`, no fill. No layer, no dial.

**Layout.** Directly under the empty fifth row, left-aligned to column 4, line and button on one baseline; 30vh; then the interlocking band back to bone. Mobile: button under the line, full column width.

**Type.** The line in the row-head row; button row.

**Colour.** Black, `#EFEDE7`, the dark outline token — no fill, so the two fills stay H1 and H10.

**Motion.** Hover fills `#57B295` with a black label, 200ms in, 150ms out. Reduced motion: identical.

**Feeling.** *Clean.* Nearest the Speakeasy mid-page ask the bank cites for S-17.

---

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

**What he sees.** The page's prose home: the title parked in the left margin (L-13, S-08), five open ledger rows with raised mono ordinals `01`–`05` at their outer edge, hairline beneath each. No layer, no dial.

**Layout.** Title in columns 1–2, stacked "Before / you ask."; rows in columns 3–8, question above answer at 66ch; open, never accordions, nothing sticky. About 110vh. Mobile: title above the rows.

**Type.** Section headline, no italic; questions in the row-head row; answers body.

**Colour.** Bone, ink, muted ordinals. No accent.

**Motion.** None.

**Feeling.** *Human.* Nearest `L16`'s margin-parked headings.

---

### H10 · Close — LOUD

**Text**
> **Headline** — Start with a look at what you've got.
>
> **Deck** — It's free, and it's yours to keep whether we work together or not.
>
> **CTA** — Get your free footprint audit

**What he sees.** *The real thing:* a wildflower meadow in late light, gold heads against blue, panned bottom-left to top-right so the streaks lie on the flight line (A-28), stems sharp and heads smeared (B-36), heavy grain — moment 3, the photograph's own blur. *The layer:* nothing drawn; the sharp stems are the anchor. *Dial:* subtle. It runs off the bottom, left and right edges and dissolves into bone at its top along a diagonal front, so the meadow stands highest under the right margin and lowest under the words.

**Layout.** Words on bone above the picture, never on it: headline in columns 1–6, deck beneath, the accent-filled button left-aligned to column 1; the photograph from about 40vh down; 100vh in all. Mobile: portrait crop, words above.

**Type.** Display headline, *look* italic; deck; button.

**Colour.** Bone; ink; muted deck; the fill `#1F4D3D` with a bone label — fill two of two; the meadow carries the warm end of the palette.

**Motion.** None but the button's hover swap. Reduced motion: identical. A still.

**Feeling.** *Human.* Nearest `A20` and `B18`, moment 3's sources.

---

### Footer — QUIET

**Text**
> Approach · About · Get your free footprint audit
>
> drafted by the swarm · calibrated by Yarden
>
> `[OPEN — contact address]` · `[OPEN — wordmark face]` · `[OPEN — copyright line]` · `[OPEN — no privacy page exists]`

**What he sees.** The flat mark in one grid cell top-left; three groups, nothing loose: where to go (the audit page as a plain text link, never a button), who to reach (the address slot, the sign-off small in mono), the small print (wordmark, copyright, privacy slots). Every OPEN slot stays visibly empty, hatched with the stripe cell (C-35), never filled with a substitute.

**Layout.** Groups in columns 1–2, 3–5, 6–8; 40vh. Mobile: stacked.

**Type.** Links body; sign-off and small print in the mono row.

**Colour.** Bone, ink, muted. No accent, no ask of its own.

**Motion.** None.

**Feeling.** *Clean.* No waitlist, newsletter, logo strip, social band or awards row.

---

## 3. Render pack — the hero only

### 3.1 Reference images to condition on

Under `docs/05-marketing/references/founder-brain/`, in priority order:

1. `landing-page/L12-refboard-stipple-hands-grey-orange.jpg` — composition: hand entering, the gap.
2. `branding-feeling/B09-creation-of-adam-hands-blue-poster.jpg` — three-quarters empty, one gesture.
3. `branding-feeling/C06-closeup-eye-freckles-nature-brand.jpg` — light: low sun, real skin.
4. `landing-page/L09-axial-dotted-wings-offwhite-quiet.jpg` — marks from edges, thinning out.
5. `landing-page/L13-handhold-fullpage-cream-serif.jpg` — type feel: serif on cream.
6. `logo/LOGO-07-variant-halftone-dissolve.png` — the mark treatment: edges dissolving.

### 3.2 Prompt A — the full hero screen as a website mockup

> A 16:9 desktop website screenshot on a flat warm bone background, hex #F0EDE6, no texture. Thin top nav: a small black four-cell geometric mark at far left, the words "Approach  About" in Schibsted Grotesk, and at far right one outlined button "Get your free footprint audit" with deep pine #1F4D3D outline and text, no fill. Headline in Instrument Serif, near-black #141614, split in two: "Your whole marketing footprint," large, top-left, on two lines, the word "whole" italic; "run for you." large, lower-right. Under it, small grey #5E625C Schibsted Grotesk: "Every channel handled, month after month — and you see exactly what was done." Then one solid deep pine #1F4D3D button with bone text "Get your free footprint audit", then one small italic serif line "Free, and yours to keep either way." Bottom-left corner: a real photograph — one forearm and open hand, warm late-afternoon sunlight on skin, film grain, entering from the corner, cropped by the left and bottom edges, fingers reaching up and right; only a narrow halo of blue sky around the skin, breaking into small square tiles that vanish into the bone within a hand-width. Top-right corner: thousands of tiny opaque black 45° dashes, dense at the corner, thinning along the diagonal toward the fingertip, the last few isolated dashes stopping one hand-width short of it. The centre is empty bone. Bottom centre: tiny monospace "(Scroll)". Nothing else in the frame.

### 3.3 Prompt B — the photograph with its technological layer only

> A flat warm bone field, hex #F0EDE6, 16:9. Bottom-left corner: a real photograph of one forearm and open hand in late-afternoon low sun, warm skin, visible film grain, entering from the corner and cropped by the left and bottom edges, fingers extended toward the upper right at 45 degrees. Only a narrow halo of clear blue sky survives around the skin; a hand-width out it breaks into small square tiles of sky that thin and disappear into the bone. Top-right corner: a field of tiny opaque near-black 45-degree dashes, #141614, dense at the corner, thinning along the diagonal toward the fingertip, ending as a few isolated dashes one hand-width short of it. No text, no interface, no glow, no second hand; most of the frame is empty bone.

### 3.4 Negatives

text on the photograph · a second hand · a face · a robot or metallic hand · stipple or engraving texture · a logo wall or logo strip · a second button · a prompt card or chat box · a centred stack · an announcement pill · glass, frost or blurred cards · gradient mesh · glow, bloom, fog, haze, lens flare · particles floating with no direction · a bee, a mascot, an illustrated character · numbers, metrics, percentages, charts · a dashboard, screenshot or device · icons under the button · grain in the bone ground · a horizon or landscape · bold serif · Inter or Geist · orange, violet or any accent other than pine · a hard straight edge on the photograph · the dashes touching the skin.

### 3.5 Aspect and size

16:9, 2K (2560 × 1440). Mobile stays text: at 390 × 844 the type stacks top-left, the hand enters bottom-left below it, the marks enter from the right edge at mid-height, one screen.

### 3.6 Explain afterwards

The only thing that moves in this hero is the field of ink dashes at the top-right, which breathes by density and drifts a few pixels along the diagonal without ever closing the gap to the fingertip; the photograph, the type and the button are still. The still shows the field at its closest permitted approach — the last isolated dash exactly one hand-width from the fingertip, the contact that never comes.

---

## 4. Cost and the one risk

**Real shoot.** The hand against late sky: about an hour in the last light, one setup, both crops, grain in camera. The H10 meadow pan in the same place the same afternoon (L-03 as a shooting note), so the page opens and closes in one world. Real, because a generated hand fails at exactly the imperfection the compositing rule needs (B-43, B-24).

**Generated.** The H5 cloud clip, 4–6s, on the founder-decided method. No engine reaches Higgsfield; the parent session drives it (DECISIONS 2026-09-01).

**Built.** One mark renderer for the hero (one particle, occupancy, the type exclusion mask, the diagonal walk, C-13); the cross renderer for the set-piece frames; the mosaic-dissolve mask (H1's sky edge, H5's inward edge, H10's top edge, the two boundary bands) and the same mask reversed for H7's light; the blueprint overlay; the instrument layer (index, bars, local time, `(Scroll)`).

**PROVISIONAL edit request, restated and not applied.** H1's Phase-1 prose in the storyboard reads "a real person, warm, shot from low against open sky"; under this concept it would read "a real hand". The storyboard's text is kept verbatim above; the founder decides.

**RISK, stated once.** No face on screen one: About carries all of the site's humanity, and S1's fold shrinks from "a person present" to "a hand present" — the founder must want that trade before this concept is shot.

---

*Text only. Nothing generated, rendered or built. Every line above is PROVISIONAL and the founder's to strike. Two warm prospects remain un-called; nothing here is a customer signal.*
