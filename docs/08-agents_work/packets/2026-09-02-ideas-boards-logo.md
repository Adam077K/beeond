# Ideas — craft boards · negative set · logo set · 2026-09-02 · framer [design] · TEXT ONLY, PROVISIONAL

**What this is.** 33 images opened directly with the Read tool — never inferred from a filename or an index —
and mined for concrete ideas bound to the locked site structure. Nothing here is a decision, a render, or a
spec. Every voice string is PROVISIONAL and is not the deliverable; the storyboard owns the words.

**Slice:** `board-1-anthropic` … `board-12-mercury` (12) · `negative-1-landio` … `negative-4-hiview` (4) ·
`founder-brain/logo/` (17). **Ids are local to this packet** — a merge across framer packets should namespace
them.

**Bound by, not reopened:** `DESIGN-LANGUAGE.md` Layers 1–5 · the law (*the effect must be derived from the
subject, not applied to it*) · the storyboard's structure and text · the NEVER list · the engineering floor in
`WEBSITE-DESIGN-PROCESS.md` §8. Where an idea touches an invariant, the language-fit column says so rather
than quietly bending it.

**Lens exception, pasted as instructed:** `requires_claims: [user-language]` cannot be satisfied — ICP is OPEN
by founder decision, zero customer interviews, `USER-INSIGHTS.md` empty by design. Logged at
`WEBSITE-DESIGN-PROCESS.md` §10 line 194 and §9 row 6 line 188. Structural and visual work proceeds.

---

## 1. Idea table

| id | idea (≤30 words) | source file(s) | section / touchpoint | kind | law | vibe | language fit | build | anti-slop tell | risk |
|---|---|---|---|---|---|---|---|---|---|---|
| X-01 | Hero as an asymmetric two-voice split: display block left at roughly three-fifths, deck in the second face right, top-aligned to the headline's last line. Never centred. | board-1-anthropic | H1 · A1 | layout | n-a | expensive · clean | Sits under §17.1's corner split as the fallback if the split reads gimmicky; uses no moment; displaces nothing | EASY | none — it is the inverse of the centred-hero tell | Two competing hero layouts reach the founder unless one is marked the fallback |
| X-02 | Emphasise a display line by underlining a two-word phrase rather than italicising one word, at a weight heavy enough to read as editorial rather than as a link. | board-1-anthropic | H1 or H7, once | type | n-a | expensive · human | **Conflicts** with §8's "one italic word per headline at most"; adopting it displaces italic emphasis for that headline | EASY | none | Two emphasis systems on one site reads as indecision; pick one and state it |
| X-03 | Antique natural-history specimens (moths, bees) arranged as an arc on a warm paper-textured plate, one serif line beneath — the audit cover and the confirmation email header. | board-1-anthropic | audit document · confirmation email | off-site | n-a | human · expensive | Extends §17.4's pressed-flower cover; the arc and the insect subject are new; nothing on-site changes | MEDIUM | none | Specimen plates are period imagery; too many and the brand reads antiquarian rather than futuristic |
| X-04 | The hero's sub-line is a ledger row: deck flush left, the instrument stamp (visitor-local time · "(Scroll)") flush right on the same baseline. | board-2-linear | H1 | layout | n-a | technological · minimal | Refines §10, which placed the stamp loosely "in the corner"; binds it to a baseline instead | EASY | none | A right-hand element at hero scale can read as a second call to action if it is ever a link |
| X-05 | A hairline divider in the nav between the two page links and the ask, so the button is visibly a different class of thing, not a third link. | board-2-linear · board-11-resend | nav | component | n-a | clean | Hairline used as decorative structure only, never on the control itself — inside the Layer 1 rule | EASY | none | None |
| X-06 | Author the emptiness: mark density is highest at the outer frame edges and thins toward the type, so the centre is emptied deliberately rather than left over. | board-3-family · board-9-igloo | H1 · H7 | motion | yes | futuristic · minimal | States the density gradient §17.3 implies; same renderer, no new asset | EASY | none | None |
| X-07 | Decide the swarm's alphabet: many characters (the ASCII register the founder names) or one repeated glyph varied only by scale and density. One glyph reads cleaner and colder. | board-3-family · board-10-lusion · LOGO-03 | H1 renderer | image | yes | futuristic · technological | Moment 1 is written as "characters that inherit colour", which presumes a set; a single-glyph field is a variant of it, not a new moment | MEDIUM | none | Unnamed, this gets decided by whoever writes the renderer rather than by the founder |
| X-08 | The Approach page separates its blocks with vertical space alone — no hairline rules — and indents the reading column from the left margin instead of centring it. | board-4-emilkowal | A1 · A3 | layout | n-a | minimal · human | **Displaces** hairline rows on Approach only; Home keeps them, so the two pages read as page and document | EASY | none | Space-only separation collapses on mobile unless the scale steps are large |
| X-09 | Label and line as a two-tone pair at one size: label in ink, its sentence in muted, no size change and no weight change. | board-4-emilkowal | H6 · D4 · A1 contents | type | n-a | clean · minimal | Uses the existing ink and muted tokens; both measure AA or better on both grounds | EASY | none | None |
| X-10 | Motion floor: 200ms ease-out standard, 300ms ceiling, opacity as the reduced-motion fallback, and the mosaic dissolve driven by an animated clip-path rather than per-tile opacity. | board-4-emilkowal · `emilkowal-animations` | global · D2 submit | motion | n-a | clean | Implements Layer 1's asymmetric easing and §7's five rules with real numbers; contradicts nothing | MEDIUM | none | Animating a large clip-path can cost more than it saves; measure before the form dissolve ships |
| X-11 | The form's two fields as underline-only inputs — no box, no fill — the rule thickening from muted to ink on focus. | board-5-godly | D2 | component | n-a | minimal · expensive | Honours "no borders"; **conflicts** with the Layer 1 rule that hairlines never sit on a control, so the underline must be muted or ink, never the rule token | EASY | none | An underline-only field is a known accessibility risk for field-boundary perception; needs a visible focus ring regardless |
| X-12 | Reject-if: a participation count sits under a capture form ("271 people subscribed yesterday"). | board-5-godly | D2 · footer | reject-if | n-a | — | The NEVER list bans numbers as claims; this is the exact shape it takes on a form | — | social-proof count | — |
| X-13 | Alternative to the knockout close: the wordmark rendered as a dot field on true black rather than cut out of a sky photograph — no wordmark face needed. | board-6-basement · LOGO-07 | B5 | image | partial | futuristic · technological | Would spend moment 2 twice unless it replaces moment 7; **the wordmark face is OPEN either way** (§8) | MEDIUM | none | Dots as the site's second and third appearance make dots the style rather than the moment |
| X-14 | The scroll cue is spent once: it fades on the first scroll event and never returns for the session. | board-6-basement | H1 | interaction | n-a | clean | Extends the Form & Found craft detail the language already keeps in reserve | EASY | none | None |
| X-15 | The mark's stripe cell becomes the scroll device: a short row of diagonal bars beside the running head, filling one at a time as the section index advances. | board-7-rauno · LOGO-final-black | running head, all pages | component | yes | technological · futuristic | Answers §2's open "the mark as scroll-progress device"; adds a graphic to §10's index rather than a new number | MEDIUM | none | A progress device that moves on scroll competes with rule 3, "one thing at a time"; it must be small enough to read as an instrument |
| X-16 | Ledger rows: the row's first term flush left, its counterpart flush right, one baseline, hairline beneath, nothing centred. | board-7-rauno · board-12-mercury | H7 · H9 · D4 | layout | n-a | clean · expensive | The four hairline rows at H7 and the five Q&A rows already exist; this fixes their internal alignment | EASY | none | None |
| X-17 | A card's onward route sits as a flat full-width strip at the card's foot, no button chrome, the whole strip the target. | board-7-rauno | H4 | component | n-a | clean | H4's route to Approach is currently an underlined sentence; this is the alternative, and only one may exist | EASY | none | A full-width strip inside a card can read as a button, which the in-body route rule forbids |
| X-18 | The instrument line sits directly above the H1, mono, muted, one line — the position Stripe gives a live metric, carrying time and index only, never a company figure. | board-8-stripe | H1 | type | n-a | technological · expensive | Refines §10's running head placement for the hero specifically; the "never a figure" clause is the NEVER list restated | EASY | none | One digit that could be read as a company number turns the whole device into a claim |
| X-19 | Tonal emphasis in one face: the headline's first clause in ink, the remainder in muted, no weight change and no second colour. | board-8-stripe · board-11-resend | H1 · H7 · H10 | type | n-a | expensive · minimal | The clean answer to Instrument Serif having no bold; uses only existing tokens | EASY | none | Muted measures AA, not AAA; a long muted clause at display scale needs a contrast check |
| X-20 | Corner-anchored mono caption blocks at the corners of a full-bleed image, carrying words only — never figures, never a leader line into the subject. | board-9-igloo | H1 · H10 | type | n-a | technological · expensive | Not one of the seven moments; a type behaviour, so it spends nothing | EASY | none | Four corners of text around one photograph is one step from an interface; two corners is the ceiling |
| X-21 | The survey overlay works at landscape scale, not only on a card — if it is adopted, H10's meadow is a second candidate site for it alongside H5. | board-9-igloo | H10 | image | yes | technological · human | §17.2 proposes the survey layer and says taking it costs the unspent double exposure; this only adds a placement option | MEDIUM | none | Two survey placements makes it a style rather than a moment |
| X-22 | The pinned set-piece as a framed inset field: margin on all four sides, the dot field dissolving inward before it reaches the edge, so the frame is negative space, never a border. | board-10-lusion | H5 | layout | yes | expensive · minimal | Alternative to §6's full-bleed canvas; the inward dissolve keeps the edge physics, so no invariant breaks | MEDIUM | none | An inset field reads as a card if the dissolve is too tight to the edge |
| X-23 | The dark chapters are never flat: a static, very low density particle field in surface value over true black, felt rather than seen — the same particle as the hero swarm, at rest. | board-11-resend · LOGO-03 | H1 · H7 · H8 | image | yes | futuristic · expensive | Cheaper alternative to §17.3's corner dot fields, and derived rather than compositional; keeps true black load-bearing because the particles sit above it, not in it | EASY | none | Below a certain density it is invisible and above it the black stops being black; one number decides both |
| X-24 | Confirmed pairing: display serif at large scale in warm off-white on true black with the grotesk deck in muted directly beneath, primary action low-contrast and small. | board-11-resend | H1 · H7 | type | n-a | expensive · minimal | Already the language's own pairing; this is evidence it holds at hero scale, not a new proposal | EASY | none | None |
| X-25 | Reject-if: an announcement or version pill sits above the headline, especially one with a gradient or iridescent border. | board-11-resend · negative-2-nexus | H1 | reject-if | n-a | — | The NEVER list bans "coming soon" and status statements; the pill is its visual form | — | glass / gradient pill | — |
| X-26 | A real footnote apparatus on Approach: superscript markers in the prose, notes set in mono at the foot of the page under a hairline. | board-12-mercury | A3 · A4 · A5 | type | n-a | human · expensive | Makes "a document one person sends another" structural rather than asserted; no image, so A5's no-rectangle rule holds | EASY | none | Footnotes invite claims; every note must be a qualification, never a statistic |
| X-27 | Reject-if: a capture control floats over a photograph, or any text sits on an image. | board-12-mercury | H1 · D2 | reject-if | n-a | — | Layer 1 already forbids text on photography; this names the specific composition that breaks it | — | frosted capsule over hero photo | — |
| X-28 | Reject-if: one centre axis carries a glowing app-icon tile, an uppercase eyebrow, the headline, the deck and the button, with an italic serif tail on a grotesk line. | negative-1-landio | H1 | reject-if | n-a | — | Beeond's italic is inside its own display face and carries meaning; the tell is italic serif bolted onto a grotesk as an AI signal | — | centred hero · logo glow | — |
| X-29 | Reject-if: the accent appears more than twice — a status pill, a coloured word inside the headline, the button and a control all in one hue. | negative-2-nexus | any | reject-if | n-a | — | Layer 1 allows the accent on the primary call to action only, at most twice per page | — | acid accent · glass nav pill · grid mesh | — |
| X-30 | Reject-if: a row of icon-and-text reassurance items under the buttons, or three pastel cards carrying large figures. | negative-3-omrix | D2 · H6 | reject-if | n-a | — | D2's trust line is one line of mono under the button; three iconed items is the drift to guard | — | three-equal-card bento · trust row · tilted dashboard | — |
| X-31 | Reject-if: humans arrive as an illustrated cast standing in a row, or the ground is a saturated brand colour with a line-art world drawn on it. | negative-4-hiview | any | reject-if | n-a | — | The most dangerous of the four for Beeond, whose whole claim is that a named person signs off | — | illustrated cast · glass nav bar · logo strip | — |
| X-32 | The bee the swarm resolves into is the mark's own silhouette read at photographic scale — small cell as head, two chamfered cells as wings, stripe cell as the striped abdomen. | LOGO-final-black · LOGO-09 · LOGO-14 | H1 | image | yes | futuristic · human | Answers the founder's half-bee character without drawing a character; **brushes "mark-as-real-object"**, which Layer 3 lists as not used — the defence is that the swarm resolves *into* the silhouette rather than the mark being placed in the world | MEDIUM | none | If it reads as the logo dropped into the photograph, the hero becomes an advertisement for the mark |
| X-33 | Derive the system radius and gutter from the mark: the filleted corner radius as a ratio of one cell width, the gutter from the mark's own cross-shaped negative space. | LOGO-final-black · `_index-logo` Part 2 · LOGO-14 | global tokens | layout | n-a | expensive · clean | Layer 1 requires one radius and one gutter but never says where the number comes from; this makes both trace to the locked asset | EASY | none | The mark's radius may be optically wrong for a 900px card; check at both extremes before locking |
| X-34 | Loading and route change: the mark assembles from scattered dots travelling along the flight-line diagonal, the stripe cell resolving last. Reduced motion shows the settled mark only. | LOGO-07 | loading · route transition | motion | yes | futuristic · technological | §11 already names the halftone construction as the loading device; the travel direction and the resolve order are new | MEDIUM | none | A loader the site does not need is a loader that only ever delays it |
| X-35 | One dot pitch site-wide: the set-piece, any dot field and the mark's own halftone share a single grid pitch, so three appearances read as one system. | LOGO-07 | global renderer | image | yes | technological · clean | Layer 4b already fixes pitch across frames; this extends the same constant across surfaces | EASY | none | A pitch that suits the mark at 40px will be far too coarse for a full-bleed canvas; it may have to be one ratio rather than one number |
| X-36 | The fine mesh as a ground material for a single section-transition band — neutral, no photograph beneath it, the grid as fabric rather than as an overlay. | LOGO-06 | section transition | image | n-a | expensive · minimal | Moment 5 is a photograph shot *through* a physical mesh; this is the mesh as a surface, which spends no moment | EASY | none | Nothing derives it from a subject, so it is decoration by the law's own test unless it stays a material |
| X-37 | The swarm's rendering rule, proven on the mark: one particle, and density is the only variable. Sparse is ground and sky, dense is subject, and nothing else changes. | LOGO-03 | H1 · H7 | image | yes | futuristic · minimal | Turns §2's sentence into a renderer constraint; satisfies the compositing rule that marks stay opaque and the ground reads through the gaps | MEDIUM | none | A single particle at one size can read as noise rather than as a swarm; scale may have to vary with density |
| X-38 | Ship the mark flat: ink on bone, warm off-white on black, no glow and no drop shadow, which means the supplied glow and shadow variants are not site assets. | LOGO-05 · LOGO-08 · LOGO-09 · LOGO-10 | global asset rule | component | n-a | clean · minimal | Layer 1 forbids drop shadows outright; three of the seventeen supplied files carry one | EASY | none | None |
| X-39 | The mark is the frame's un-effected anchor: wherever it sits over a treated image it stays flat and opaque, and it is the one place the eye lands. | LOGO-12 | any image carrying the mark | image | yes | expensive · clean | Satisfies the compositing rule "one un-effected anchor per frame" with an element the site already owns | EASY | none | If the mark is the anchor everywhere, it appears on more photographs than the restraint budget wants |
| X-40 | High-key threshold portraiture — a figure blown to near-white silhouette against grey, the mark the only black shape — for the social and email templates, never for the founders. | LOGO-12 | LinkedIn / OG template · confirmation email | off-site | partial | expensive · human | Draws on the reserve's "high-key threshold posterization"; **conflicts** with §12's rule that founder portraits keep skin, so it is barred from B1 and A4 | MEDIUM | none | Off-site imagery that looks nothing like the site is a second brand |
| X-41 | Footer sign-off: the mark at large scale as hairline outline only, ground on ground, an engraving rather than a logo. | LOGO-13 | footer | component | n-a | expensive · minimal | Hairline as decorative structure, not a control — inside the Layer 1 rule | EASY | none | Below a certain contrast it disappears entirely on a dimmed display, which is acceptable for a watermark and not for a logo |
| X-42 | Favicon, two options with the tension named: the chamfered cell alone, or the small heptagon alone. Both survive 16px; the full mark does not. | LOGO-final-black · `_index-logo` Part 2 · LOGO-11 | favicon | component | n-a | clean | §11 lists the favicon as OPEN and founder-owned; this narrows it to two candidates and nothing more | EASY | none | Reversible — a favicon costs minutes to change, so this is the cheapest open item on the list |
| X-43 | Register the mark to the column grid: it occupies exactly one grid cell in the nav and in the footer, and the exposed hairline rules run through its own gutter. | LOGO-15 | nav · footer · global | layout | n-a | clean · expensive | The founder's own applied mockup already shows the mark set inside visible thirds guides; the invariant grid does the rest | EASY | none | None |
| X-44 | The circled numeral and a corner spec block as the instrument device: section index, Approach chapter anchors, the audit's plate numbers. | LOGO-16 | running head · A1 · audit document | component | n-a | technological · expensive | Gives §10's bare numerals a form; the numerals are indices, not claims, so the NEVER list is untouched | EASY | none | A circled numeral beside a numeric index is one numeral too many; pick the ring or the slash form, not both |
| X-45 | Reject-if: the azure and navy palette from the palette board is treated as the site's colour. | LOGO-16 · LOGO-14 · LOGO-15 | any | reject-if | n-a | — | Layer 1 is neutral and photography owns colour; blue arrives as sky in a photograph, never as a fill | — | cool SaaS blue | — |
| X-46 | Reject-if: the engraved-glass card is reproduced on screen with blur and transparency. | LOGO-13 | any | reject-if | n-a | — | The reference is a real material photographed; the CSS imitation of it is the named tell | — | glassmorphism | — |
| X-47 | Reject-if: the mark is composited into a photograph as a physical object in the world. | LOGO-11 · LOGO-12 | any | reject-if | n-a | — | Layer 3 lists mark-as-real-object under "not used"; X-32 is the one permitted adjacency and it is a silhouette, not an object | — | none | — |

---

## 2. Per-image notes

### board-1-anthropic.png
**Frame.** Warm bone ground. Huge left-aligned grotesk headline with two words underlined; serif deck in a
narrow column at the right; below, a paper-textured card with butterfly plates.
**Craft detail.** Two voices in one hero — geometric sans headline, serif deck — set at different optical
sizes in an asymmetric two-column split, with an enormous quiet band above the headline. The underline is the
only emphasis in the display line and it is set heavy enough not to read as a hyperlink. The card's specimens
are arranged in an arc rather than a grid, on a real paper texture.
**Ideas.** X-01 · X-02 · X-03

### board-2-linear.png
**Frame.** True black. White grotesk headline upper left, small deck beneath, a right-aligned secondary item
on the deck's baseline, then a product interface below.
**Craft detail.** The sub-headline line is a ledger: deck left, counterweight right, one baseline, and the
counterweight is small enough never to compete. The nav sets a hairline before the account actions so the
links and the actions are visibly different classes.
**Ideas.** X-04 · X-05

### board-3-family.png
**Frame.** White ground, centred headline and dual button, dense illustrated clusters flanking left and right.
**Craft detail.** The clusters are one primitive vocabulary repeated at many scales and rotations, densest at
the outer edges and thinning inward, which is what empties the centre where the type sits. Two of Beeond's own
tells — centred hero, dual call to action — appear here in a board collected for a different borrow, which is
the reason the reference notes say borrow the one noted thing and never the layout.
**Ideas.** X-06 · X-07

### board-4-emilkowal.png
**Frame.** Near-white page, a narrow column indented from the left edge: name and role, then labelled groups
of short label-and-description pairs.
**Craft detail.** No rules, no cards, no dividers of any kind. Rhythm comes entirely from vertical space, and
the gaps between groups are far larger than a normal section pad. Labels are ink, descriptions are mid-grey at
the same size.
**Ideas.** X-08 · X-09 · X-10

### board-5-godly.png
**Frame.** A dimmed gallery grid behind a white modal card holding the mark, two short paragraphs, a
single-line email field, and a small grey line beneath.
**Craft detail.** The capture is one line: a hairline-underlined input with the action word set as plain text
at the right end of the same rule. No box, no filled button. Underneath, a subscriber count doing the work a
line of copy should do.
**Ideas.** X-11 · X-12

### board-6-basement.png
**Frame.** A dark rendered interior — stairs, a figure, a dog, an arcade cabinet, a neon wordmark, monitors —
with the nav as plain type on top and a scroll cue at the bottom.
**Craft detail.** Several objects in the scene are rendered as dithered checkerboard cutouts rather than solid
fills, so the wordmark on the wall is a dot field on black. Numbered list items sit inside the world as
signage rather than as interface.
**Ideas.** X-13 · X-14

### board-7-rauno.png
**Frame.** Off-white ground, a masonry grid of white cards, each with a title left and a date right, a demo
in the middle, and a flat action strip at the foot.
**Craft detail.** A row of small rectangles across the very top, one filled yellow — a discrete, segmented
progress indicator rather than a continuous bar. Inside the cards, every header is a two-term ledger row. One
card holds sixteen line diagrams at a single stroke weight and a single accent.
**Ideas.** X-15 · X-16 · X-17

### board-8-stripe.png
**Frame.** White ground with a multicoloured ribbon sweeping in from the top right; a small metric line above
the headline; headline in two tones; two buttons; a logo row beneath.
**Craft detail.** The metric line sits directly above the headline in small type and is given at absurd
precision, which is what makes it read as an instrument rather than as a boast. The headline separates promise
from elaboration by tone alone, not by weight. The ribbon and the logo row are both on the reject list.
**Ideas.** X-18 · X-19

### board-9-igloo.png
**Frame.** A desaturated snow landscape; a glowing igloo mid-assembly; thin dimension lines with tiny labels
drawn flat across it; small caption blocks pinned in the corners.
**Craft detail.** The annotation ignores the scene's perspective entirely, which is exactly what makes it read
as measurement laid over a photograph rather than as an effect inside it. Captions live in the frame's
corners, never near the subject. The only colour is a glow.
**Ideas.** X-20 · X-21

### board-10-lusion.png
**Frame.** Pale ground, wordmark upper left, a custom menu glyph upper right, and one large dark rounded tile
inset with wide margins holding a pile of glossy cross-shaped objects.
**Craft detail.** The artwork is framed by the page rather than bleeding off it, and the margin is wide enough
that the ground reads as deliberate. The pile is a single primitive in three colourways at many rotations.
**Ideas.** X-22

### board-11-resend.png
**Frame.** True black. Display serif headline in warm off-white, grotesk deck in grey beneath, a low-contrast
filled button with a bare text action beside it, and a matte black cube at the right.
**Craft detail.** The cube is black on black — its form is legible only through surface texture and a single
raking light, and its faces are alternately smooth, finely perforated and linearly hatched. The primary button
is barely lighter than the ground. An iridescent-bordered announcement pill sits above the headline and is the
one tell on the board.
**Ideas.** X-23 · X-24 · X-25

### board-12-mercury.png
**Frame.** A full-bleed misty valley at dawn with a desk, chair and laptop standing in the meadow; centred
headline and deck over the photograph; a frosted capsule holding an email field and a button; a dark legal bar
at the foot.
**Craft detail.** A superscript marker in the deck ties to the disclaimer bar — a genuine footnote apparatus
doing legal work quietly. Almost everything else is a Beeond reject: centred hero, text on photography, a
glass control over an image, and a desk in a meadow, which is the object-in-landscape composite the language
already rates off-register.
**Ideas.** X-26 · X-27

### negative-1-landio.png
**Frame.** Near-black hero, everything stacked on one centre axis: a glowing rounded logo tile, a dotted
uppercase eyebrow, a giant silver-gradient headline ending in an italic serif flourish, one deck line, one
dark pill, three social icons, a scroll chevron.
**Tell.** The centre axis carries every element in sequence, and the italic serif is bolted onto a grotesk
purely to signal the category.
**Reject-if.** X-28

### negative-2-nexus.png
**Frame.** Black ground with a faint square grid, a floating glass nav pill, an acid-lime version pill, a
giant centred sans headline with one lime word, a lime pill button, and a tilted product interface with fake
collaborator cursors.
**Tell.** The accent appears four times in one screen, and a status pill announces a version above the
headline.
**Reject-if.** X-29

### negative-3-omrix.png
**Frame.** Near-white with a faint grid wash and pastel gradient bleeding up from the bottom; an outlined beta
pill with a member count; a centred two-sentence headline; two adjacent buttons; three iconed reassurance
items; a tilted dashboard holding three pastel figure cards.
**Tell.** Three iconed reassurance items in a row, and three pastel cards whose entire content is large
numbers.
**Reject-if.** X-30

### negative-4-hiview.png
**Frame.** Saturated blue ground with a white isometric warehouse world drawn over it; a white floating nav
bar; a pale award pill; centred white headline and three-line deck; dual buttons; five cartoon people standing
in a row on a glass band; a logo strip beneath.
**Tell.** Humans arrive as an illustrated, interchangeable cast, and the ground is a brand colour with a
line-art world drawn on top of it.
**Reject-if.** X-31

### LOGO-final-black.png
**Frame.** Four black shapes in a two-by-two grid around a cross-shaped gap: a small rounded heptagon, two
chamfered rounded squares in point symmetry, and three diagonal bars.
**Craft detail.** At this size the four cells read as a bee from above — small cell as head, the two chamfered
cells as wings, the barred cell as a striped abdomen. The written spec calls the reading genuinely ambiguous,
and both readings are available; the diagonal bars are the memorable element either way. The corner fillet is
one consistent radius across three of the four cells.
**Ideas.** X-32 · X-33 · X-42

### LOGO-01-texture-concrete-grey.png
**Frame.** The mark in flat black over a fine-grained grey concrete texture on a card-shaped field.
**Craft detail.** The mark is untouched and the texture is entirely in the ground — the two never mix, which
is the same separation the site's law asks for between mark and photograph.
**Ideas.** none — it corroborates X-39 rather than adding to it.

### LOGO-02-texture-brushed-metal.png
**Frame.** The mark in near-black with a faint soft shadow over a horizontally grained brushed-metal field.
**Craft detail.** The horizontal grain is the only thing carrying the "expensive" register, and it does it
without a single gradient stop — direction and grain rather than hue. The soft shadow under the mark is the
one thing the site cannot take.
**Ideas.** X-38

### LOGO-03-texture-noir-starfield-inverted.png
**Frame.** Near-black ground scattered with fine white speckles; the mark rendered as a denser field of the
same speckles rather than as a solid white fill.
**Craft detail.** The strongest file in the set. One particle vocabulary, two densities: sparse is the ground,
dense is the subject. The mark is not drawn on the sky, it is condensed out of it — which is the hero's whole
argument, already proven on the brand's own asset, on true black.
**Ideas.** X-37 · X-23

### LOGO-04-texture-static-noise-grey.png
**Frame.** Coarse grey analog static filling the field, mark in solid black on top.
**Craft detail.** The grain is heavy enough to read as film rather than as a texture overlay, which is the
reserve's "analog static grain" seen at working strength. A clean mark over an imperfect ground, which is the
compositing rule stated in reverse.
**Ideas.** none new — it supports X-23's density question with a visible upper bound.

### LOGO-05-texture-paper-linen-soft.png
**Frame.** Warm off-white woven linen field, the mark in dark grey rather than true black, very low contrast.
**Craft detail.** The closest file in the set to the site's actual light chapter. Dropping the mark from black
to a dark ink on a warm ground removes all harshness and costs nothing in legibility — evidence for using the
ink token rather than pure black on bone.
**Ideas.** X-38

### LOGO-06-texture-scale-mesh-grey.png
**Frame.** The mark in black over a fine repeating grey scale or basket-weave pattern.
**Craft detail.** The pattern is fine, regular and material rather than drawn, and it functions as a surface,
not as an overlay. Worth flagging for whoever sources the physical mesh: **the weave in this file is a
scale/basket pattern, not a hexagonal honeycomb**, although the language cites it as a source for the
honeycomb moment.
**Ideas.** X-36

### LOGO-07-variant-halftone-dissolve.png
**Frame.** The mark rebuilt entirely from black dots on a cream ground; dots break up and scatter at the
edges, most visibly around the barred cell.
**Craft detail.** The cream ground is effectively the site's bone. The dots sit on a square grid at one pitch,
uniform in the dense body, thinning to isolated dots outside the silhouette — the mosaic dissolve and the dot
halftone, already applied to the mark. Note that the dot version is *less* legible at small sizes than the
solid, so it is a loading and construction device, not a favicon answer.
**Ideas.** X-34 · X-35

### LOGO-08-white-glow-transparent.png
**Frame.** Reads as blank on a white canvas — a white fill with a graduated alpha glow on transparency.
**Craft detail.** Confirms the white mark needs a dark ground to exist at all, and that the supplied asset
carries a glow the design language forbids.
**Ideas.** X-38

### LOGO-09-black-shadow-transparent-a.png
**Frame.** Black mark on transparency, portrait canvas, placed above centre with generous space below.
**Craft detail.** At this scale the bee reading is clear and the clear space is roughly one cell on every
side, which matches the index's instinct. Carries a soft shadow.
**Ideas.** X-32 · X-38

### LOGO-10-black-shadow-transparent-b.png
**Frame.** Visually identical to the previous file, with a slightly heavier shadow.
**Craft detail.** A duplicate export. Its only value is confirming that the shadow was a deliberate pass and
not an accident, which makes dropping it a decision rather than a correction.
**Ideas.** X-38

### LOGO-11-applied-black-cap-mockup.png
**Frame.** A black cap on white, the mark small and white on the front panel, enormous surrounding margin.
**Craft detail.** The stripe cell still reads at this size, which is the practical floor for the full mark.
The mockup's own composition — one small white mark, black object, vast empty white — is the proportion a
social or link-preview template wants.
**Ideas.** X-42 · X-47

### LOGO-12-applied-black-on-portrait-photo.png
**Frame.** A profile portrait, head tipped back and looking up, blown to a pure white silhouette with only
glasses, jaw and lips retained as thin lines; the black mark sits over the neck.
**Craft detail.** Two things at once. The treatment is high-key threshold posterization, which the language
holds in reserve, and it is applied to precisely the gesture the hero calls for. And the mark is the single
opaque black object in an almost entirely white frame — the un-effected anchor the compositing rules demand,
supplied by the brand rather than found in the photograph.
**Ideas.** X-39 · X-40

### LOGO-13-applied-engraved-glass-card.png
**Frame.** A clear card held between two fingertips, the mark debossed into the material, visible only through
refraction; the hand is blown to white; the whole scene is greyscale.
**Craft detail.** The mark rendered with no ink at all — form by light alone. It is also the single most
dangerous file in the folder, because the on-screen imitation of it is glassmorphism.
**Ideas.** X-41 · X-46

### LOGO-14-applied-white-on-blue-business-card.png
**Frame.** A blue card set into a carved niche in grey concrete, the mark large and white, slightly left of
the card's centre.
**Craft detail.** The card's corner radius and the mark's corner fillet are visibly the same family, which is
where a single site radius can be derived from rather than chosen. At this scale the bee reading is
unmistakable.
**Ideas.** X-33 · X-45

### LOGO-15-applied-white-on-blue-gradient.png
**Frame.** A vertical blue gradient from deep azure to pale sky, thin white thirds guides left visible, the
small white mark set exactly inside the central grid cell.
**Craft detail.** The construction is left on the artwork — guides visible, mark registered to a cell and
sized to fill it. The founder's own asset already exposes its grid, which is the same argument the invariant
hairline column rules make.
**Ideas.** X-43 · X-45

### LOGO-16-palette-board-blue-navy-grey-white.png
**Frame.** Four labelled colour fields — an azure carrying the white mark, a dark navy, a pale grey, a white —
each with a small arrowed label, a circled numeral and printed hex, RGB and CMYK values.
**Craft detail.** The plate layout is the borrow: a full field of one value, a circled index numeral at the top
right, a tiny specification block at the lower left, nothing else. The labels "LIGHT" and "DARK" contradict
their own swatches, recorded as observed in the index and not corrected here.
**Ideas.** X-44 · X-45

---

## 3. The reject-if rules from the negative set

1. **`negative-1-landio`** — One centre axis carrying glowing logo tile, eyebrow, headline, deck and button;
   italic serif bolted onto a grotesk line.
2. **`negative-2-nexus`** — Accent used more than twice: status pill, coloured headline word, button, control.
   Glass nav pill over a grid mesh.
3. **`negative-3-omrix`** — Iconed reassurance items in a row beneath the buttons; three pastel cards whose
   content is figures; tilted dashboard.
4. **`negative-4-hiview`** — Humans as an interchangeable illustrated cast; a saturated brand-colour ground
   with a line-art world drawn on it.

Six more, because the trap is not confined to the negative folder. From the positive boards: a participation
count under a capture form (`board-5-godly`, X-12), an announcement or version pill above the headline
(`board-11-resend`, X-25), and a capture control floating on a photograph (`board-12-mercury`, X-27). From the
logo folder: the azure palette treated as the site's colour (X-45), the engraved-glass card reproduced with
CSS blur (X-46), and the mark composited into a photograph as a physical object (X-47).

**Ten reject-if rules in total** — four from the negative set, six from material collected as positive.

---

## 4. Three strongest, and why

**X-37 — one particle, density is the only variable.** `LOGO-03` proves the hero's entire thesis on the
brand's own asset: the mark is not drawn on the night field, it is condensed out of it. It converts the
brainstorm's sentence about the swarm into a rule a renderer can be held to, and it passes the law by
construction.

**X-15 — the stripe cell as the scroll device.** The open question of how the mark behaves on the site gets an
answer that is functional rather than decorative, derived from the one element the written spec calls the most
memorable, and it costs a component rather than a moment.

**X-33 — the radius and gutter derived from the mark.** The language demands one number and never says where
it comes from. Taking it from the locked asset makes every card, field and blob crop on the site trace back to
the only thing already decided.
