# Art Direction Brief — G0 output

*Assembled 2026-08-26. Four agents looked at all 30 founder-curated references and merged each with the founder's own note.*

**Sources:**
- `FOUNDER-REFERENCE-NOTES.md` — the founder's verbatim notes, hash paths resolved
- `founder-brain/_brief-01-websites.md` · `_brief-02-branding.md` · `_brief-03-artistic-direction.md` · `_brief-04-dreamy-nature-grids.md` · `_brief-05-addendum.md`

This is **not a direction.** It is the evidence base G1 chooses a direction from.

---

## 1. The founder's thesis, verbatim

> "The artistic direction I want is grounded in real-world details: people, objects, places, landscapes, and color. These real and human visuals should be combined with an additional layer — either subtle or dramatic — of ASCII, pixels, typography, or other effects. The goal is to create a distinctive balance between **life and the real world** and **technology**."

Restated as a working instrument: **every image on the site carries two authored decisions — what is the real thing, and how hard is the tech layer pushed.** Subtle for a portrait, dramatic for a hero. One dial, applied consistently, is the visual system.

---

## 2. The law

> **The effect must be derived from the subject, not applied to it. If the same overlay could be dropped on any other photo unchanged, it is decoration.**

Tested against the founder's seven artistic-direction examples: six pass — the tech layer re-times the rotor, becomes a third animal, draws the bird's shadow structure, obeys the eyelids and iris fibres, samples the photo's real colours. One fails (`B05`, the halftone sky): an evenly-applied conversion with no relationship to its subject beyond tone, which is why it functions as background texture rather than a statement.

This is also the sharpest anti-slop test available — sharper than the negative set.

---

## 3. Mechanism — what a build agent implements

**Grid.** The pitch is constant; the per-cell value varies. Three interchangeable modulations — **radius** (dot size tracks luminance), **occupancy** (marked or empty, ground shows through), **weight along a character ramp** (`.` → `+` / `:` → `#` / `%`). One per surface. Never mix radius and ramp in the same field.

**Combination method.** Each frame commits to one:
- **Ghost twin** — redraw the subject in a second pose/rotation, lay it over the photo additively, offset and overlapping.
- **Silhouette clip** — confine the effect to the subject's outline; photo outside untouched.
- **Total conversion** — rebuild the whole surface as grid, keeping nothing photographic but sampled colour.
- **Anatomy-keyed disruption** (rarer) — concentrate at a focal point, propagate along the subject's own directions.

**Compositing.** Additive or subtractive, **never a blend mode**. No multiply, no overlay, no 30% opacity. Marks are opaque; the photo reads at full strength *through the gaps*. **The gaps are the mechanism, not transparency.**

**Edges.** Every field dissolves at its edge rather than stopping — density thins to isolated single marks at the extremities. The only permitted hard boundary is a deliberate silhouette clip, stepped to the grid, never a smooth vector curve.

**Contrast.** Sharp mark against a deliberately *imperfect* photograph — grain, bokeh, motion blur, blown flash, scan degradation. The opposition does as much work as the grid. A clean stock photo under a clean grid is the weakest image in the set.

**Anchor.** Keep one un-effected place per frame for the eye to land — a pure black pupil, an untouched background, half the surface left as straight photograph. Without it the treatment reads as a filter.

**Type.** Where type sits alongside the treatment it stays small, plain, unstyled, in negative space, and never crosses the subject. The extravagance is spent entirely in the image. *(Distinct from type used **as** the effect, where characters are marks and deliberately spell nothing.)*

---

## 4. Colour — two modes, do not conflate

The two agents that examined colour found opposite rules because they were looking at **different techniques**. Both are correct within their mode:

| | **Overlay mode** | **Conversion mode** |
|---|---|---|
| What the mark is | A glyph or dot laid **over** the photo | The mark **is** the pixel |
| Mark colour | **Monochrome** — one flat white, cream or black. Colour never enters the glyph. | **Sampled** from the pixel beneath — white in highlights, red through petal bodies, olive at leaves |
| Where colour lives | Showing through the **gaps** between marks | Inside the cell fill itself |
| Example | `B17`, `B20`, `C02` | `A12` (subject only), `B01-left` |

**In both modes:** preserve exactly one warm accent left deliberately untouched — an amber beak, a red blade band, a single red fence mark.

**Temperature, not just value, does the work.** Warm mark on cold photo, or white mark on saturated photo: cream glyphs on periwinkle snow, white on cobalt, white on crimson. Where the photo is too flat to carry it, push saturation and blacks *under* the mark field while leaving the area outside soft.

---

## 5. Layout & grid mechanics

- **Two grid species — pick one per section, never blend.** *Bento*: fixed 2-column, left cell spans both rows, right column splits into two unequal cells. *Masonry marquee*: constant row height, freely varying tile widths, row boundaries intentionally unaligned between rows. (Plus *single content column* with full-bleed backgrounds behind it.)
- **The gutter is the only separator.** No borders, no shadows anywhere in the reference set. Adding either breaks the read.
- **Radius and gutter come from one number.** Same corner radius on every cell regardless of size; gutter ≈ radius.
- **One job per cell.** Portrait, or statistic, or call to action. Where imagery and type share a cell, type anchors to a cell edge — never floated in the middle of the picture.
- **Colour arrives as a whole-cell fill** — never as an accent border, badge, or icon tint.
- **Cropping is a device.** Rows bleed past both frame edges; the cut edge signals continuation and scale. Tiles are cropped by the viewport, not resized to fit it.
- **Hairlines expose the column grid.** Faint full-height rules carrying no content are what make an empty hero read as *composed* rather than unfinished.
- **Sections change ground, not grid.** The background marks the chapter; the column structure continues through.
- **Logo walls overlay, they don't get their own band** — a scrim fades up over the imagery, logos optically size-matched rather than mechanically equal-width.

---

## 6. What repeats across the founder's website picks

1. **The art is the layout.** Six of seven: one image system occupies a full-bleed band, type set over or under it. No decorative garnish beside copy.
2. **Colour is rationed against a near-monochrome ground.** Orange only on a CTA. Colour only inside cards. One accent gradient in a field of cream. One violet glow on black.
3. **Two hands reaching toward a point of contact** — three of seven, always as the human-meets-machine moment.
4. **One grotesk plus one other voice** — a script serif dropped mid-headline, a light serif against bold grotesk, a monospace subhead under a grotesk headline.
5. **Sky is the ground, not the subject** — six of eight branding files sit on sky or a flat sky-blue field.
6. **Every decorative panel holds a real product moment** — pastel tint plus actual UI, never stock art.

---

## 7. ⚠️ "ASCII" means four different things

The founder uses "ASCII" across four notes for four genuinely different techniques:

| Reference | What it actually is |
|---|---|
| `L10` Colab | **Glyph grid** — plus/cross marks, size and colour follow the image |
| `L21` qintara | **Circular dot-matrix** on a square grid |
| `L12` Refboard | **Irregular pointillist stipple** — engraving/hedcut, on no grid at all |
| `A01` i Finance | **Nothing of the kind** — frosted glassmorphism |

Read his "ASCII" as *an image rebuilt from a repeating small mark*. **The specific technique is a G1 decision and must be settled explicitly, not inherited from the word.**

---

## 8. ⚠️ Corrections to the founder's notes

Recorded so nothing propagates silently. In every case the founder's **instinct** survives; only the recollection is off.

| File | His note | What's actually there |
|---|---|---|
| `L21` qintara | "the flower could be replaced with a half-bee, half-robot character" | **No flower.** An isometric voxel star built from cube blocks, white-hot core, orange-red bloom. His swap still works — the centre *is* a swappable glowing object. |
| `A12` tulip | "a field of yellow flowers with blur and sharp camera movement" | Two **red-coral tulips** in soft focus. No motion streaking. The second half of his note — make the text the subject — is exactly what the image does. |
| `A01` i Finance | "ASCII elements" | **None.** Frosted glassmorphism — which is on the anti-slop tell list. He likes the split hero, the photographed person and the colour; **not** the glass. |
| `L12` Refboard | "white background… ASCII and pixel-inspired" | Light **warm grey**, and irregular stipple on no grid. Orange appears exactly twice on the page — that part is the real lesson. |
| `B19` sales-OS | "led by a human element" | The portrait is one of three equal cards; the headline leads. It is the only photograph, so it anchors the row. |
| `C04` dithered clouds | "overlay placed over **part** of an image" | Dither applied **uniformly** across the whole frame. No separate overlay layer, no ASCII. |
| `B15` handshake | "same visual category" | Shares the blue ground and coarse dot screen, but dots build the whole illustration rather than overlaying a photo — graphic and hard-edged, not dreamy. |

**Duplicates found** (same image, different files): `L21` = `L11` (pixel-identical) · `A01` = `L02` (byte-identical) · `B19` = `L14` (byte-identical) · `C13` = `C22`.

---

## 9. Showing a capability without a screenshot

Beeond has no product to photograph. Two references solve exactly this, and neither shows an app:

- **`A03` (Fable)** — a capability shown as a loose stack of overlapping **asset cards** at varied depth on a soft gradient ground: a logo mid-edit with selection handles, a type swatch, an image on a transparency checkerboard, a glass "New Asset" button under a cursor.
- **`C11` (Atlas)** — an identity shown as overlapping cards: type specimen, metrics diagram with hairline baseline rules, the mark on a flat colour tile, real nature photography.

**Rule: depth comes from overlap and soft shadow, not from glass.** Only one element across both files is actually frosted. And the artefact — a thing mid-edit, a specimen, a diagram — does the explaining that a dashboard screenshot would otherwise do.

*(This is the same device the landing-page teardown found in Ada, Agentwork, Speakeasy and Superside: show the work, not the tool.)*

---

## 10. Open

**Resolved 2026-08-26 by founder revision:** the `779f1ded` triple-citation (glass-components note reassigned to `A03`, verified `CONFIRMED`) and the `C18` double-citation (collage note reassigned to `C11`, verified `CONFIRMED`).

**Still open:**
1. **Which mark does Beeond use** — glyph grid, circular dot-matrix, or irregular stipple? See §7. **G1 decision, must be made explicitly.**
2. **`779f1ded` note-vs-image mismatch stands** — his note describes a white website with cards; the file is an OpenAI Codex key-art graphic. Now cited once and carrying no structural weight, so it is recorded rather than blocking.
3. **Font licensing** — free-only, or is there budget?
