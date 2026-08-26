# Beeond Logo Set — Index

Catalogue only. Nothing here proposes a new mark or a new palette — it records what exists in this folder as of the files present on disk (17 PNGs, `.DS_Store` ignored).

`LOGO-final-black.png` is the FINAL, LOCKED mark. Its shape is decided. Everything else is an exploration, texture test, or applied mockup around that same shape.

---

## PART 1 — File index

| file | what it shows | context | notes |
|---|---|---|---|
| `LOGO-final-black.png` | The mark: black, flat-fill, on transparent/white, no effects. 189×190px. | mark alone (FINAL) | The locked reference. All other files derive from this shape. |
| `LOGO-01-texture-concrete-grey.png` | Mark in black over a rough grey stone/concrete photo texture, small scale, on a card-like rectangle. | texture test | Mark unchanged from final. |
| `LOGO-02-texture-brushed-metal.png` | Mark in black over a light grey brushed-metal / linear-grain texture. | texture test | Mark unchanged. |
| `LOGO-03-texture-noir-starfield-inverted.png` | Mark in pale grey/white over a near-black speckled "starfield" noise texture — the only texture test with inverted (light-on-dark) value. | texture test | Mark unchanged; only file in the texture-test set that inverts light/dark. |
| `LOGO-04-texture-static-noise-grey.png` | Mark in black over a coarse grey static/noise texture. | texture test | Mark unchanged. |
| `LOGO-05-texture-paper-linen-soft.png` | Mark in dark grey/black over a soft, low-contrast off-white paper/linen texture. | texture test | Softest contrast of the texture set. |
| `LOGO-06-texture-scale-mesh-grey.png` | Mark in black over a grey textured pattern resembling fish-scale/basket-weave mesh. | texture test | Mark unchanged. |
| `LOGO-07-variant-halftone-dissolve.png` | The mark reconstructed entirely from a dot-matrix/halftone pattern on cream background — dot size varies, and the shapes visibly dissolve into scattered dots at their edges (most noticeably the bottom-right stripe cell). | variant (construction) | Materially different from the final mark: this is not a flat-fill silhouette, it's a halftone/dot rendering of the same silhouette. |
| `LOGO-08-white-glow-transparent.png` | White-fill version of the mark with a soft outer glow, on a transparent background (reads as blank on a white canvas — only visible once composited on a dark background). Portrait canvas, 261×519px. | variant (color mode) | Confirmed via pixel inspection: fill RGB is pure white (255,255,255) with a graduated alpha channel producing the glow. For dark-background use. |
| `LOGO-09-black-shadow-transparent-a.png` | Black-fill version of the mark with a soft drop-shadow/glow, on a transparent background. Portrait canvas, same dimensions as 08. | variant (color mode) | Confirmed via pixel inspection: fill RGB is pure black (0,0,0) with a graduated alpha channel. For light-background use. |
| `LOGO-10-black-shadow-transparent-b.png` | Same as LOGO-09 — black mark with soft shadow on transparent, portrait canvas. | variant (color mode) | Pixel-level near-duplicate of LOGO-09 (mean alpha-channel difference ≈4/255, i.e. visually identical). Likely two export passes of the same treatment. Not deleted per instructions, but flagged as redundant. |
| `LOGO-11-applied-black-cap-mockup.png` | Product mockup: black baseball cap with the mark printed/embroidered in white on the front panel. | applied mockup | Mark unchanged; white-on-black colorway. |
| `LOGO-12-applied-black-on-portrait-photo.png` | High-contrast black-and-white photo of a person's head/shoulders in profile (afro, glasses), with the black mark placed over the jaw/neck area. | applied mockup | Mark unchanged; pure black-and-white treatment, no color. |
| `LOGO-13-applied-engraved-glass-card.png` | Photo mockup: a clear glass/acrylic card held between two fingers, with the mark laser-engraved/etched (debossed, same-material, visible only via light refraction) into the glass. Greyscale scene. | applied mockup | Mark unchanged; monochrome-safe / material-etch test, no ink color at all. |
| `LOGO-14-applied-white-on-blue-business-card.png` | Photo mockup: a blue business card with the mark in white, sitting in a carved niche in a grey concrete/stone surface. | applied mockup | White-on-blue colorway. See Part 3 for sampled blue value. |
| `LOGO-15-applied-white-on-blue-gradient.png` | The mark in white, small and centered, over a full-bleed blue gradient background (darker saturated blue at top fading to pale sky blue at bottom), with faint thirds-grid guide lines overlaid. | applied mockup | White-on-blue-gradient colorway. See Part 3 for sampled gradient stops. |
| `LOGO-16-palette-board-blue-navy-grey-white.png` | A palette reference board: a blue swatch (mark shown in white on top of it) labeled "PRIMARY" with explicit HEX/RGB/CMYK values printed on it, plus three further labeled swatches ("LIGHT", "DARK", "DEEP") each with printed HEX/RGB/CMYK values. | palette board | Only file with explicit, printed color values. See Part 3 — the labels do not match the swatch colors in an intuitive way (see caveat below). |

---

## PART 2 — Written spec of the final mark (`LOGO-final-black.png`)

**Source file:** 189×190px PNG, flat black fill, transparent/white background, no gradients, no strokes, no effects.

### Geometric construction

The mark is four shapes arranged in a 2×2 grid, separated by a uniform cross/plus-shaped gap (gutter), giving the whole composition roughly square, centered proportions. Reading the quadrants as top-left (TL), top-right (TR), bottom-left (BL), bottom-right (BR):

- **TL — small rounded heptagon.** A compact, roughly-circular polygon of about 7 sides with softly rounded (filleted) corners — visually closer to a rounded gem/pebble than a strict hexagon. It is noticeably smaller than the other three quadrant shapes and does not fill its grid cell; it sits toward the inner (bottom-right) corner of its cell, leaving open space above and to its left.
- **TR — large chamfered rounded rectangle.** A near-square shape with rounded corners, except the top-left corner, which is cut by a long 45° diagonal chamfer running from partway down the left edge to partway along the top edge. This chamfer is what gives it a pointed/shield-like silhouette. In the exported file, its top-right corner touches/is cropped by the canvas edge.
- **BL — the same chamfered rounded rectangle as TR, rotated 180°** (point-reflected through the composition's center). Its chamfer cuts the bottom-right corner instead of the top-left. TR and BL are the only pair with true rotational (point) symmetry to each other. In the exported file its bottom-left corner touches/is cropped by the canvas edge.
- **BR — a set of parallel diagonal stripes (hatching).** Three (possibly a partial fourth, clipped by the canvas edge) equal-width diagonal bars running bottom-left-to-top-right at roughly 45°, each with rounded ends, separated by equal-width white gaps, ascending in a staircase within a cell the same size as TR/BL. This is the only one of the four quadrant shapes that is a pattern rather than a single solid silhouette.

To rebuild in SVG: lay out a 2×2 grid of equal cells with a shared gutter (roughly 8–10% of one cell's width) forming a plus-shape of negative space at the center; place a small rounded 7-gon in TL undersized relative to its cell; place a rounded square with one 45°-chamfered corner in TR; rotate that same path 180° about the grid's center for BL; and in BR, clip 3–4 parallel diagonal parallelogram bars (rounded caps, equal stroke width and equal gap) to the cell bounds.

### What it reads as

What I actually see: an abstract cluster of four "cells" around a hidden cross — closer to a honeycomb/hive-cell grouping (small cell + two solid matched cells + one cell rendered as motion/energy lines) than to any letterform. It does not read as a "B" or as a literal grid/compass to me. The diagonal stripes in BR are the most distinctive/memorable element — they could be read as flight lines, motion, or a "buzzing"/energy cell in contrast to the three solid cells. This is genuinely ambiguous — a viewer unprimed by the "Beeond" name could plausibly read it as a pinwheel, a broken/glitched app icon, or an abstract quadrant logo with no bee/hive association at all.

### Scaling behavior

- **At ~400px:** Reads cleanly. All four quadrant shapes, the chamfer cuts, the rounded-heptagon's irregular outline, and the individual diagonal stripes with their gaps are all legible.
- **At 24px:** High risk of breakdown in two places: (1) the small TL heptagon's 7-sided outline will likely alias into an indistinct rounded blob, no longer readably different from a hexagon or circle; (2) the BR stripe gaps are already narrow relative to the mark's overall size at the source resolution (189px) — at 24px these gaps are sub-pixel and will very likely merge into a single grey/black smear, destroying the hatching effect and possibly reading as a solid dark triangle instead. The central cross-shaped gutter separating all four quadrants may also compress to near-invisible, risking the four shapes visually fusing into one blob.
- Recommend testing a simplified/solid alternate lockup (e.g., BR stripes replaced with a solid chamfered shape) for favicon/app-icon scale, though that is a decision for later — not proposed here.

### Monochrome-safe

Yes. The mark is a single flat fill with no gradient or color-dependent contrast within itself — every element is distinguished purely by shape and positive/negative space. This is empirically confirmed across the applied mockups in this folder: it works identically in solid black (`LOGO-final-black.png`), solid white (`LOGO-14`, `LOGO-15`, `LOGO-11`), and as a colorless material etch with no ink at all (`LOGO-13`, engraved glass).

### Clear space / minimum size (instinct, not measured from a spec sheet — none exists in this folder)

Given how much of the mark's identity lives in fine internal detail (the stripe gaps and the small heptagon), a generous clear space — roughly one grid-cell width on all sides — is a reasonable instinct to protect the four-quadrant read from crowding. For minimum size, treat anything under ~32–40px as compromised for the stripe detail; below that, expect the BR quadrant to lose its hatching and the mark to read as three solid blobs plus one smear.

---

## PART 3 — Palette evidence (OBSERVED only — no palette is decided)

Every color below is either sampled directly from mockup pixels or read directly off the printed labels in the palette board. Nothing is invented.

### From `LOGO-16-palette-board-blue-navy-grey-white.png` (printed values, OBSERVED — text on the board itself)

| board label | printed HEX | printed RGB | printed CMYK | swatch appearance |
|---|---|---|---|---|
| "PRIMARY" (①) | `#2A99F4` | 42, 153, 244 | 83, 37, 0, 4 | Medium saturated blue — the swatch the mark (in white) sits on. |
| "LIGHT" (②) | `#1A1A2E` | 26, 26, 46 | 43, 43, 0, 82 | Dark navy/near-black — **note:** this swatch is visually darker than every other swatch on the board despite the "LIGHT" label. |
| "DARK" (③) | `#EAEFEE` | 234, 239, 238 | 2, 0, 0, 6 | Pale off-white/grey — **note:** this swatch is visually lighter than "PRIMARY" despite the "DARK" label. |
| "DEEP" (④) | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | Pure white. |

Caveat, stated plainly because it's what's actually on the board: the labels "LIGHT" and "DARK" appear swapped relative to their swatch values (the "LIGHT"-labeled swatch is the darkest color on the board; the "DARK"-labeled swatch is nearly white). This is recorded as observed, not corrected — do not assume which label is the error without checking the source file this board was exported from.

### From `LOGO-14-applied-white-on-blue-business-card.png` (pixel-sampled, OBSERVED)

- Card background blue, sampled at three points: `#1E6DAF`, `#1F6FB1`, `#1F72B5` (RGB ≈ 30–31, 109–114, 175–181) — a consistent mid-tone azure blue, close to but not identical to the palette board's "PRIMARY" `#2A99F4` (this card's blue is a shade darker/more saturated).
- Mark rendered in solid white on top.

### From `LOGO-15-applied-white-on-blue-gradient.png` (pixel-sampled, OBSERVED)

Vertical gradient, sampled top to bottom:
- Top: `#1A6098` (RGB 26, 96, 152) — darkest, most saturated stop.
- Upper-mid: `#2483D1` (RGB 36, 131, 209) — close to the business-card blue and to the palette board's "PRIMARY."
- Mid: `#54ADF6` (RGB 84, 173, 246) — noticeably lighter/brighter, close to but softer than "PRIMARY."
- Lower-mid: `#BFE0FB` (RGB 191, 224, 251) — pale sky blue.
- Mark rendered in solid white on top, positioned at roughly the upper-mid/mid band of the gradient.

### Summary of blues actually observed across mockups

Three related but distinct blues appear across the applied files: the business card's `~#1E6DAF`, the palette board's printed `#2A99F4` "PRIMARY," and the gradient's range from `#1A6098` (dark) to `#BFE0FB` (pale). They cluster in the same azure/dodger-blue family but are not pixel-identical to each other — consistent with these being separate exploratory renders rather than one locked value. Alongside blue, the only other non-black/white/grey colors observed anywhere in the set are the "LIGHT" navy `#1A1A2E` and "DARK" pale-grey `#EAEFEE` swatches on the palette board — no other hues (no green, red, yellow, etc.) appear anywhere in this folder.
