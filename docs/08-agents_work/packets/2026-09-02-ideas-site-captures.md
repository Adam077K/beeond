# Ideas — site captures · 2026-09-02 · framer [design] · TEXT ONLY, PROVISIONAL

> **Nothing here is a decision.** Every voice string is PROVISIONAL and is not the deliverable. Nothing is
> generated or rendered. Slice: all 30 images under `docs/05-marketing/references/site-captures/`, each
> opened directly with `Read`, none inferred from a filename.
>
> **Lens exception, logged.** The `design` lens carries `requires_claims: [user-language]`, which cannot be
> satisfied — ICP is OPEN by founder decision, zero customer interviews, `USER-INSIGHTS.md` empty by design.
> Exception recorded at `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188.
> Structural and visual work proceeds; no idea below asserts anything about who the visitor is.
>
> **One folder in this slice is retired Beeond direction.** `_moodboard/` holds captures of the v7 concepts
> D1 · D2 · D3, retired by founder decision and surviving only as history. Nothing from them is revived
> below. They are read for one structural lesson and one negative example, both named in §2.

---

## 1. Idea table

| id | idea (≤30 words) | source file(s) | section / touchpoint | kind | law | vibe | language fit | build | anti-slop tell | risk |
|---|---|---|---|---|---|---|---|---|---|---|
| S-01 | Ground changes stop being straight cuts: bone and black interlock in a one-row-deep band of mosaic tiles along the flight-line diagonal. | `speakeasy-FOUNDER-PICK-fullpage.png` · `speakeasy-desktop-full.png` | every chapter boundary (ground map §1.5) | layout | yes | expensive · technological | No conflict — the invariant already says *every photo edge is a mosaic dissolve*; this extends the same physics to the ground boundary, so it is through-line, not a moment. Spends no moment. Displaces nothing. | MEDIUM | none | a dissolve band at every boundary could read as a repeating decorative frieze if the tile scale is not tied to the radius token |
| S-02 | H7's four rows carry an ink hierarchy: one option at full ink, the other three at muted, each with a small mono superscript index. | `rzlt-desktop-full.png` · `oriol-desktop-full.png` | HOME H7 What you're choosing between | type | n-a | minimal · expensive | No conflict. Loud by subtraction, which is what H7 already is. Spends no moment and no accent. Displaces the flat four-row treatment in brainstorm §4. | EASY | none | ink-value hierarchy is an argument made by weight, so a founder who wants all four options read as equals will lose that reading |
| S-03 | H7 row anatomy: the option's name right-aligned at the row's top, its one consequence line left, hairline under, mono tag at the row's foot. | `basement-desktop-full.png` | HOME H7 | layout | n-a | technological · clean | No conflict — hairline rows are already the section's form. Works with S-02. Displaces nothing; refines the row's interior. | EASY | none | a right-aligned name over a left-aligned line needs a wide viewport, so the two collapse into one stack early on mobile |
| S-04 | A4: Yarden's blob crop set inline, at x-height, *inside* the sentence that says a person signs off — not beside it in the margin. | `oriol-desktop-hero.png` | APPROACH A4 A person signs off on it | image · type | yes | human · expensive | No conflict — the shape is still the mark's heptagon-derived blob and the dial is still edge-physics only. Spends no moment. Displaces the margin figure in brainstorm §4. | MEDIUM | none | an inline figure inherits line-height, so a portrait small enough to sit in text may be too small to read as a person |
| S-05 | Footer: the wordmark at display scale, cropped by both frame edges, in the hairline value, with the year alongside in mono. | `basement-desktop-full.png` · `speakeasy-FOUNDER-PICK-fullpage.png` · `speakeasy-desktop-full.png` · `jasper-desktop-full.png` | footer (every page) | type · component | partial | expensive · minimal | Needs the wordmark face, which is **OPEN** (brainstorm §8). Not moment 7 — that is a knockout *in a photograph* at B5; this is type on ground. The year is a number as texture, not a claim. | EASY | none | a giant wordmark on every page is a second cropped-letterform event, so B5's knockout has to stay clearly louder or the moment budget is quietly broken |
| S-06 | Home's footer returns to the hero's black instead of bone, so the page opens and closes on one ground. | `mailchimp-desktop-full.png` · `speakeasy-FOUNDER-PICK-fullpage.png` · `basement-desktop-full.png` | HOME footer · ground map | layout | n-a | expensive · clean | No invariant conflict — ground alternates by chapter and this makes the footer its own chapter. **Displaces** the bone footer in brainstorm §1.5. | EASY | none | the meadow at H10 dissolves *into bone*, so a black footer directly beneath it puts a hard cut where the page's warmest moment ends |
| S-07 | H6 becomes a hairline-ruled table of cells, one covered item per cell, so coverage reads as an index rather than four paragraphs. | `basement-desktop-full.png` · `alefalefalef-desktop-full.png` | HOME H6 What's covered | layout | n-a | technological · clean | Sits on the "hairlines expose the column grid, carry no content" invariant. **Partial risk of conflict** with *no borders*: the rules must read as grid exposure, never as a boundary around a control. Displaces the four-column list. | EASY | none | a full grid of hairlines is one step from a bordered table, which the invariant forbids, so the read has to be checked at every breakpoint |
| S-08 | H9 and D4 pin the section title in the left column while the five Q&A rows run down the right. | `speakeasy-desktop-full.png` · `jasper-desktop-full.png` | HOME H9 · ASK D4 | layout | n-a | clean · minimal | No conflict. Rows stay open, not accordions — both references use accordions and Beeond does not. Displaces the stacked title-above-rows arrangement. | EASY | none | a pinned title beside rows invites `position: sticky`, which would add a second pinned element and break the one-set-piece rule |
| S-09 | Each Q&A row carries a mono circled index at the outer edge, so five rows read as a numbered set. | `alefalefalef-desktop-full.png` | HOME H9 · ASK D4 | type | n-a | technological · futuristic | Numbers as instrument texture, which brainstorm §10 permits by name; no figure could be mistaken for a claim. Displaces nothing. | EASY | none | circled numerals are a font-dependent glyph, so drawing them as text risks a fallback that ships a rectangle |
| S-10 | The running head becomes a persistent outer-margin rail of mono chapter labels rather than a fixed bar across the top. | `alefalefalef-desktop-full.png` · `da-magazine-desktop-full.png` | every page, instrument layer | component | n-a | technological · futuristic | **Already proposed** (brainstorm §10, as a running head). New: it is a *rail in the outer margin*, evidenced twice, and it is the element that mirrors most cleanly. | MEDIUM | none | a margin rail needs a margin, so at narrow widths it has to become the top-bar version and the two states must agree |
| S-11 | H3's three stepped blocks each carry a mono index; hairline elbow links run between them, on the 45° diagonal only. | `speakeasy-FOUNDER-PICK-fullpage.png` · `rzlt-desktop-hero.png` | HOME H3 How the work gets done | layout · type | partial | technological · clean | The diagonal is the mark's own flight line, so the connector is derived from the mark rather than drawn. Spends no moment. Adds to the stepped layout in brainstorm §4. | EASY | none | connector lines between blocks read as a flow diagram, which is the nearest thing on this site to a product illustration |
| S-12 | 404: the swarm scattered across the field and never resolving into the bee — the one page where the marks stay marks. | `speakeasy-desktop-hero.png` | 404 touchpoint | image · motion | yes | futuristic · technological | Uses the hero's glyph renderer with no mask, so no new asset and no new moment. **Displaces** brainstorm §11's bare 404 (bone, one serif line, outlined button). | MEDIUM | none | a 404 that is more interesting than a section is a page you want people to find, which is the wrong incentive |
| S-13 | The glyph subject can be drawn on bare ground with no photograph beneath it, cropped hard by two frame edges. | `speakeasy-desktop-hero.png` | HOME H1 hero, as an alternate | image | partial | futuristic · minimal | **Related to already-proposed** §17.1. Honest note: with no photograph there is no subject to derive from, so this is the weakest of the set on the law and is offered as an alternate, not a replacement for the hero. | MEDIUM | none | removing the photograph removes the human, and the through-line's constant is the human, not the marks |
| S-14 | Mobile is art-directed by removal, not reflow: fewer cells, and a page shorter than desktop rather than twice its length. | `basement-mobile-full.png` · `basement-desktop-full.png` · `jasper-mobile-full.png` · `speakeasy-mobile-full.png` | every page, mobile | layout | n-a | expensive · clean | No conflict, and it is the same discipline as the second hero crop in brainstorm §5. Displaces nothing; it is a rule for how every section shortens. | MEDIUM | none | removing cells on mobile means two content sets to keep in agreement, and they drift |
| S-15 | D2 alternate: the whole ask on one row — two fields and the accent submit in a single band, so the form is one line. | `alefalefalef-desktop-hero.png` | ASK D2 the form | component | n-a | minimal · clean | **Displaces** the two tall stacked fields in brainstorm §11. Offered with the reason it may lose: tall full-width targets are the Fitts's-law answer on mobile, and this is the page that must not fail there. | EASY | none | a one-row form has nowhere to put a per-field error message without shifting layout, and CLS must be zero |
| S-16 | B1: shoot both portraits at identical distance, lens and light, so the pair reads as one specimen sheet rather than two photographs. | `da-magazine-desktop-full.png` | ABOUT B1 Adam and Yarden | image | n-a | human · expensive | No conflict — a constraint on the only assets no engine can produce (brainstorm §12). Displaces nothing; it is a line for the photography brief. | EASY | none | matching two portraits taken on different days is a real production constraint, and About cannot ship without them |
| S-17 | H8 is the site's quietest ask: one line and the outlined button at the smallest size the target minimum allows. | `basement-desktop-full.png` · `speakeasy-FOUNDER-PICK-fullpage.png` · `jasper-desktop-full.png` · `mailchimp-desktop-full.png` | HOME H8 the ask beat | layout | n-a | expensive · minimal | No conflict — H8 stays a section and stays a button, so nothing is cut. Weight, not distance, ranks it under H10 and D2. Sharpens brainstorm §4. | EASY | none | an ask deliberately made quiet may simply be missed, and it is the only ask between the hero and the close |
| S-18 | Hero scroll cue: one small mono line at the bottom centre of the black ground, the only mark in that region. | `basement-desktop-hero.png` | HOME H1 hero | type | n-a | technological · clean | **Already proposed** (brainstorm §10, "(Scroll)" plus local time in the corner). New: the evidenced placement is bottom *centre* and alone, not cornered with the timestamp. | EASY | none | a centred cue under an asymmetric hero is the one centred element on the page, so it either reads as deliberate or as a default |
| S-19 | The mono section eyebrow is the one slot a second script could later occupy, stacked beneath the first, with nothing else changing. | `bezalel-desktop-hero.png` · `bezalel-desktop-full.png` | every section eyebrow | type | n-a | human · technological | Language and market scope are **OPEN** and this asserts nothing about them. It reserves an affordance so a later scope decision does not force a redesign. Displaces nothing. | EASY | none | reserving space for a decision nobody has made can freeze a layout around a scope that never arrives |
| S-20 | If the site ever mirrors, the mark's 45° flight lines mirror with it — otherwise every reveal and dissolve front reads as retreating. | `bezalel-desktop-hero.png` · `alefalefalef-desktop-hero.png` · `da-magazine-desktop-hero.png` | motion system (brainstorm §7 rule 1) | motion | yes | technological · futuristic | The diagonal is the locked mark's own geometry, so mirroring it is a **founder decision about the mark**, not a Phase 2 call. Escalate rather than assume. Displaces nothing today. | MEDIUM | none | the direction is baked into every reveal, so discovering this after build means touching every animated element |
| S-21 | Nav: a mono dot-leader separates the two links from the ask, instead of a gap. | `basement-desktop-hero.png` | nav (every page) | type · interaction | n-a | technological · clean | Two links and one button at every width is unchanged (brainstorm §11); this is the separator only, and dots are already the site's vocabulary. Displaces the plain gap. | EASY | none | a dotted leader beside the primary ask is one more mark next to the one thing that must stay obvious |
| S-22 | Social template: black ground, one element cropped by two edges, a mono caption block at the foot. A specimen panel, never a quote card. | `alefalefalef-desktop-hero.png` · `basement-desktop-full.png` | LinkedIn / social templates — **off-site** | off-site | partial | expensive · futuristic | Off-site, marked. Carries no testimonial, no number, no logo, no product word. Reuses S-05's cropped-letterform logic rather than adding a device. Displaces nothing on the site. | EASY | none | off-site templates are used by whoever posts, so a template that needs judgement to fill will be filled badly |

---

## 2. Per-image notes

### `_moodboard/D1-desktop.png`
**Frame.** Retired Beeond v7 concept D1: bone ground, huge Hebrew serif headline right-aligned, yellow highlight block behind the last phrase, one filled ask.
**Technique.** Right-to-left editorial display at maximum scale, one flat accent used as a highlighter behind type. Craft detail: a nav chip pair names the concept and its face — *Frank Ruhl Libre* — so the board argues its own typeface.
**Ideas.** None revived. Read for §3 (mirroring) only.

### `_moodboard/D1-mobile.png`
**Frame.** Same concept, mobile: the bone hero ends, a black chapter opens with a yellow-highlighted line, then a card labelled `channel-dashboard` with four percentage bars.
**Technique.** Dashboard mock as proof. Craft detail: the four bars are numbers presented as measurements of Beeond's own performance, on a company with no clients.
**Ideas.** None. This card is the concrete thing the NEVER list protects against — numbers as claims plus a dashboard mock, in one component. Named once, not revived.

### `_moodboard/D2-desktop.png`
**Frame.** Same layout and same copy as D1; face is *Heebo*, the accent is a brush-swash underline, the ground carries a faint warm wash and a sparkle cluster.
**Technique.** Concept variation by typeface and accent shape. Craft detail: the swash is drawn with a real brush taper, which is the most crafted mark in the folder.
**Ideas.** None revived.

### `_moodboard/D2-mobile.png`
**Frame.** The same hero stacked, headline, deck, one wide filled ask, risk line, three mono facts in a row.
**Technique.** Straight reflow. Craft detail: the ask goes full width on mobile and stays the only accent.
**Ideas.** Supports S-14 by contrast — this is reflow, not art direction.

### `_moodboard/D3-desktop.png`
**Frame.** Same layout and copy again; face is *Rubik 900*, the accent is two offset yellow blocks knocking out two words at display scale.
**Technique.** Highlight as a solid block behind letterforms. Craft detail: the blocks are offset from each other so the two words step down and right.
**Ideas.** None revived. **The structural lesson, and the only thing this folder earns:** three boards presented as three directions differ solely in typeface and the shape of one yellow accent — identical grid, identical copy, identical section order. A concept set that varies only those is not offering a choice. Phase 2 should not present its options that way, which is why the table above varies *structure*, not skins.

### `oriol/oriol-desktop-hero.png`
**Frame.** White ground, three lines of enormous black grotesk at different indents, a tiny circular portrait sitting inline in the sentence above, two pill buttons, cropped logo row.
**Technique.** Typographic staircase — each headline line starts at a different x, so the block steps right then back left. Craft detail: the portrait is *inside* the running line "Oriol is [face] Design Leader", set at cap height, so the person is a word in their own sentence.
**Ideas.** → **S-04**. Also the staircase corroborates the stepped-diagonal layout already proposed for H3. Refused: the floating glass icon pill at the top centre, a named anti-slop tell, present here in exactly the form the list describes.

### `oriol/oriol-desktop-full.png`
**Frame.** Long light page. **Section order:** hero → prose block with a margin label rail → two role cards compared → four work case rows → six principle cards → about prose → one large portrait with badge stickers → certifications grid → speaking and writing cards → testimonials.
**Technique.** Prose carrying its own navigation as inline coloured links. Craft detail: the two role cards set the same list twice, one card filled in colour and one left white, so asymmetric weight tells you which one is the answer.
**Ideas.** → **S-02** (weight, not colour, states the hierarchy). Refused: the badge stickers over the portrait, which are numbers as claims.

### `oriol/oriol-mobile-full.png`
**Frame.** The desktop page reflowed to one column, every section preserved, roughly the same order.
**Technique.** Reflow. Craft detail: the two compared role cards stack and the comparison stops being a comparison.
**Ideas.** Supports **S-14**: a side-by-side argument does not survive stacking, so H7's rows have to be readable in one column by construction.

### `speakeasy/speakeasy-desktop-hero.png`
**Frame.** Near-white ground, serif display headline in two lines at the left, an enormous hand drawn entirely in typewriter characters at the right, cropped by the right and bottom edges.
**Technique.** Glyph field masked to a subject, with no photograph beneath. Craft detail: the character density thins to isolated marks along the hand's upper-left contour, so the drawing dissolves rather than ending — the same edge rule Beeond has already made an invariant, in production on a real site.
**Ideas.** → **S-12**, **S-13**. Refused: the thin rainbow gradient rule under the second headline line.

### `speakeasy/speakeasy-FOUNDER-PICK-fullpage.png`
**Frame.** Cream page, 13704px tall. **Section order:** split hero with a particle swirl between its two halves → logo wall → centred statement → three numbered cards holding small mocks → dark showpiece framed by mirrored linework → feature with a code mock and one quote → dark product-depth band → two-column docs split → centred pull quote inside a drawn oval → dark social-proof band → final ask with the swirl returning → dark footer under a giant three-word watermark.
**Technique.** One signature graphic placed twice — hero and final ask — so the page bookends itself. Craft detail: the dark chapters announce themselves with symmetric ornamental linework at the band's top edge, so the ground change arrives as an event rather than a colour swap.
**Ideas.** → **S-01** (Beeond's version of that announcement is its own edge physics, not an ornament), **S-05**, **S-06**, **S-11**, **S-17**. The split headline around the artwork is **already proposed** at brainstorm §17.1 and is not restated.

### `speakeasy/speakeasy-desktop-full.png`
**Frame.** The current, more corporate Speakeasy. **Section order:** glyph-hand hero → logo wall → three-card statement → feature with a gold object → dark results band with figures → two light capability bands of small feature cells → dark rollout band → adoption grid → agent logo grid → security band → two customer bands → testimonial row → FAQ → footer under a giant watermark.
**Technique.** Light and dark bands alternating at a steady rhythm, roughly every second section. Craft detail: the FAQ sets its title alone in the left column while every question row runs down the right, so the heading never competes with the list.
**Ideas.** → **S-08**, **S-05**, **S-01**.

### `speakeasy/speakeasy-mobile-full.png`
**Frame.** 18411px tall — the desktop page reflowed, every band preserved, nothing removed.
**Technique.** Reflow at scale. Craft detail: the dark and light band rhythm survives the stack and is the only thing that still tells you where you are.
**Ideas.** Supports **S-14** (the cost of pure reflow) and **S-06** (ground is the wayfinding of last resort).

### `jasper/jasper-desktop-hero.png`
**Frame.** Light grey ground, centred navy serif headline, centred deck, two adjacent asks, an announcement bar, a cookie sheet, a chat widget, and a collaged photograph below.
**Technique.** Centred hero with dual call to action. Craft detail: the collage lays a drawn yellow grid, a pink percentage tile and floating claim cards over a portrait — an overlay that could be dropped on any other photograph unchanged.
**Ideas.** None taken. This single frame carries four named anti-slop tells — centred hero as default, dual "Get A Demo" ask, floating cards, three-equal-card logic — and is the clearest law failure in the slice.

### `jasper/jasper-desktop-full.png`
**Frame.** **Section order:** hero → logo strip → centred statement → three pastel cards → reasons block with a product mock → masonry proof wall of tinted tiles → role diagram on a green grid → security band → resources grid → closing ask with photograph → FAQ → footer under a giant wordmark.
**Technique.** Proof by density — faces, figures, quotes and logos mixed in one masonry wall. Craft detail: the FAQ again pins its title left with the rows right, the second independent instance in this slice.
**Ideas.** → **S-08**, **S-05**, **S-17**. The masonry proof wall is refused entirely: its three ingredients are each on the NEVER list.

### `jasper/jasper-mobile-full.png`
**Frame.** 19426px tall, nearly double the desktop page; every section reflowed to one column and nothing dropped.
**Technique.** Reflow. Craft detail: the masonry wall becomes a vertical queue of eleven tiles, and the density that was the argument becomes a length.
**Ideas.** → **S-14**, sourced here as the negative case.

### `mailchimp/mailchimp-desktop-hero.png`
**Frame.** The site is covered by a personalisation modal: industry dropdown, eight goal checkboxes, a circular portrait, two buttons. The page behind is barely visible.
**Technique.** Qualification interstitial before content. Craft detail: a hand-drawn yellow marker underline sits under the last three words of the modal's own headline — the same accent-as-highlighter device the retired v7 boards used.
**Ideas.** None taken. Named as the anti-pattern for the ask: Beeond's ask is one form at the end of one page, never a gate in front of the site, and never a question about who the visitor is.

### `mailchimp/mailchimp-desktop-full.png`
**Frame.** **Section order:** modal over hero → dark six-card recommendation grid → logo strip on white → dark band → light case-study band with two asks → pricing panel → dark closing statement with one ask → legal footnote block → yellow footer.
**Technique.** One accent repeated as a wayfinding chip — a small yellow circle-arrow on every card link. Craft detail: the page ends on a full-bleed flat accent footer, so the last thing on screen is the brand colour rather than content.
**Ideas.** → **S-06** (the pattern of ending on a deliberate final ground, taken without the colour, since photography owns colour here and the accent is CTA-only). Refused: the repeated accent chip, and the numbered legal footnotes under performance claims.

### `mailchimp/mailchimp-mobile-full.png`
**Frame.** Headline with one word struck through, star rating and review count, then the same card grid, pricing, dark closing band, yellow footer.
**Technique.** Strike-through as a headline device. Craft detail: the struck word is the concession and the line after it is the promise, so the strike does the argument's work in one glyph.
**Ideas.** No new row. It corroborates H4's struck-buzzword device, and it is the reason the strike must be spent **once**: a strike in a headline *and* a strike on the artefact card would make striking a style rather than a moment, which the budget rule forbids by name.

### `basement/basement-desktop-hero.png`
**Frame.** Full-bleed dark rendered room — shelving, a stair, an arcade cabinet, a seated person, a dog, a basketball hoop, monitors. Plain nav across the top.
**Technique.** Real-time 3D scene as the hero. **This needs WebGL and a heavy payload, and is therefore out** — it cannot meet LCP under one second or Lighthouse at 95. Craft detail: content items live inside the scene as tiny numbered captions, and the only chrome is a small dark "Scroll to Explore" cue at the bottom centre.
**Ideas.** → **S-18**, **S-21**. The scene itself is rejected on the engineering floor, stated here rather than in the table.

### `basement/basement-desktop-full.png`
**Frame.** **Section order:** 3D hero → studio statement in large grotesk on black → logo wall in a hairline table → four featured-project rows → capabilities statement → four capability columns with tag chips → contact block inside a hairline rectangle → giant cropped wordmark with the year → footer nav and newsletter field.
**Technique.** Hairlines doing all the structural work on a black page — no borders on controls, no shadows, no fills. Craft detail: each project row puts the client name right-aligned at the row's top, the description in a narrow column, and the service tags at the column's foot, so one row carries three registers without a card.
**Ideas.** → **S-03**, **S-05**, **S-07**, **S-17**, **S-22**. Refused: the nav's superscript item counts, which are numbers about the company.

### `basement/basement-mobile-full.png`
**Frame.** 5050px tall — **shorter than the 6316px desktop page.** Same order, with the logo table cut from roughly thirty marks to twelve and the project rows simplified.
**Technique.** Art direction by removal. Craft detail: the giant footer wordmark drops its year on mobile, so the cropped letterforms still run edge to edge instead of shrinking.
**Ideas.** → **S-14**, the positive case and the only one in the slice.

### `rzlt/rzlt-desktop-hero.png`
**Frame.** Dark ground, an event photograph dimmed behind enormous white grotesk running off the right edge, circular tool-logo chips connected by rounded elbow paths, a mono year range beside the headline.
**Technique.** Photograph as an underlay behind type. Craft detail: the elbow connectors turn only at right angles, so a scatter of chips reads as one routed system.
**Ideas.** → **S-11** (the connector logic, redrawn on the mark's diagonal rather than at right angles). Refused: type over a photograph, which Beeond forbids so that no text contrast ever depends on an image.

### `rzlt/rzlt-desktop-full.png`
**Frame.** **Section order:** hero → positioning paragraph → four-figure stat strip → logo wall → dark capability list → news cards → centred statement with a year → case tiles alternating side → dark culture band with figures → testimonial cards → resources grid → closing form → footer with a giant mark and an email address at display size.
**Technique.** The recessed list — five capability words at display scale stacked vertically, only the top one at full ink and the rest at the muted value, each with a small superscript index. Craft detail: no image, no colour and no motion in that section, and it is the strongest thing on the page.
**Ideas.** → **S-02**, which is this device pointed at H7. Refused: both figure strips.

### `rzlt/rzlt-mobile-full.png`
**Frame.** 10921px, effectively the same height as desktop; every section reflowed to one column in the same order.
**Technique.** Reflow. Craft detail: the recessed capability list survives the stack unchanged, because its hierarchy is ink value rather than position.
**Ideas.** Strengthens **S-02** — an argument made in ink weight is the only one in this slice that costs nothing to make responsive.

### `rtl/alefalefalef-desktop-hero.png`
**Frame.** Hebrew type foundry, right to left. Logo far right, nav reading rightward, utilities far left. A login row, two promo tiles, and a black specimen panel with one glowing numeral and full character sets.
**Technique.** Mirrored document with mixed-direction runs. Craft detail: the login row leads with its label at the right and lands its submit at the far **left**, so the form's end — and the one accent on it — changes corner under mirroring.
**Ideas.** → **S-15**, **S-22**, and §3 below.

### `rtl/alefalefalef-desktop-full.png`
**Frame.** **Section order:** login row and promo tiles → four-column type index → three catalogue banners → most-read article list → a pull quote → an inspiration band.
**Technique.** A persistent label rail in the outer right margin, one short mono label per section, content to its left. Craft detail: the article list numbers each row with a circled numeral at the outer edge and separates rows with hairlines only.
**Ideas.** → **S-07**, **S-09**, **S-10**.

### `rtl/bezalel-desktop-hero.png`
**Frame.** Institutional. Trilingual lockup at the top right, hamburger and a green pill ask at the far left, a full-bleed photograph carousel, a cookie sheet covering the lower half.
**Technique.** Mirrored navigation with a trilingual wordmark. Craft detail: the carousel's chevrons are reversed — the left arrow advances — so every directional glyph on the page has had its meaning flipped.
**Ideas.** → **S-19**, **S-20**. Refused: the pill-shaped ask.

### `rtl/bezalel-desktop-full.png`
**Frame.** A broken capture, 16277px wide, with the page squeezed into a narrow left column. **Section order, as far as it reads:** hero carousel → news card grid → trilingual "Events & Exhibitions" section head and grid → trilingual "Honours & Accolades" head and grid → a dark memorial band → a figure strip → an academics index of hairline-ruled programme links → newsletter band → footer.
**Technique.** Section heads stacked in three scripts — Hebrew, then Arabic, then English — right-aligned on one anchor, with no language toggle involved. Craft detail: the English line is set smallest and last, so the stack reads as one heading rather than three translations.
**Ideas.** → **S-19**. The capture width itself is a defect worth re-shooting before anyone measures anything from this file.

### `rtl/da-magazine-desktop-hero.png`
**Frame.** Dark full-bleed photograph of a stone building mid-crossfade, white Hebrew type over it, two captions ghosting through each other, a push-notification prompt, an accessibility widget.
**Technique.** Type over a photographic carousel with no scrim. Craft detail: during the crossfade both captions are legible at once and neither is readable, which is the failure mode Beeond's "text never sits on a photograph" rule exists to prevent.
**Ideas.** None taken; recorded as the evidence for that rule.

### `rtl/da-magazine-desktop-full.png`
**Frame.** **Section order:** hero carousel → illustrated promo band → three-tile top-stories row → seven department blocks, each one lead story plus a stack of headline-only links → video row → an instagram mosaic with a text list → a contributor portrait grid → a small-print guest-writers block → dark footer with a newsletter form and a site index.
**Technique.** A department marker repeating in the outer margin down the whole page — a small cross plus the department's name — so the page never needs a heading band. Craft detail: the contributor grid sets fourteen black-and-white headshots at one identical distance and crop, and the uniformity is what makes fourteen faces read as one masthead.
**Ideas.** → **S-10**, **S-16**.

---

## 3. What mirroring (`rtl`) changes — five lines

1. **The nav inverts whole:** wordmark to the right, the two links reading rightward, and the ask landing at the far left — so the outlined button's corner, and with it the page's first accent, moves (all three RTL captures).
2. **The form's end moves too:** labels lead at the right and the submit lands bottom-left, so D2's one accent-filled control changes corner and the composition cannot be assumed symmetric (`alefalefalef-desktop-hero.png`).
3. **Latin and figures stay left-to-right inside a mirrored line,** so the wordmark, the year and every mono index break a display headline's right edge — the instrument layer needs a bidirectional rule, not a mirror.
4. **Every directional glyph flips meaning,** chevrons first (`bezalel-desktop-hero.png`) and the mark's 45° flight lines above all: keep the diagonal and each reveal reads as retreating; mirror it and the locked mark and the motion system disagree. **Founder decision, escalated as S-20.**
5. **The label rail simply swaps side** and is the cheapest element to mirror; the expensive one is the display face — Instrument Serif appears to carry no Hebrew, which would reopen a Layer 1 type invariant. **Unverified here — hand to `sourcer` before anyone plans on it.**

---

## 4. Three strongest, and why

**S-01 — the ground boundary dissolves.** Beeond's chapters already alternate and its photographs already dissolve at every edge. Applying the same physics where bone meets black makes the site's rhythm carry its signature at zero moment cost, and it answers the thing Speakeasy solves with ornament without borrowing the ornament.

**S-02 — H7's ink hierarchy.** A section with no image, no colour and no motion, made loud by ink value and a mono index alone. RZLT proves it holds at every width because its hierarchy is weight rather than position. It is the cheapest premium section available and it survives mobile untouched.

**S-04 — Yarden inside the sentence.** Oriol sets a person into their own running line. On A4 the sentence is *a person signs off on it*, so putting the face in the sentence makes the claim and its evidence one object. Derived, not applied.
