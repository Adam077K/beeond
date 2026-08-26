# Additional techniques — branding-feeling

All 68 images read directly (not filenames). Techniques already catalogued (cross-stitch/embroidery, ribbed/fluted glass, wire-mesh/window-screen, riso misregistration, ASCII/glyph field over photo, dot-matrix halftone, pixel-mosaic destruction in ragged bands, text-as-shape, double-exposure blend, motion blur/long exposure, photo-wall grid, inverted photography, blueprint overlay, liquid chrome/iridescent ripple, knockout logotype, brand mark as photographed object, halftone illustration on flat colour, pointillist stipple/hedcut, cut-out collage on flat grid, pixelated light beam, circular photo crop as mark, glassmorphism) are excluded below even where they recur.

---

### Cyanotype / antique-process botanical prints
**Seen in:** A18-faded-botanical-photo-grid-riso.jpg
**How it's made:** A grid of flower photographs rendered as flat duotone prints — a true cyanotype blue-on-cream lily (Prussian-blue exposure, cream/white where light was blocked), a sun-bleached orange monochrome, a muted olive-green frame — printed with soft, blown-out edges onto visibly toothy paper. This isn't a digital "duotone filter" look; each panel mimics a distinct 19th-century photographic reproduction process (cyanotype, sun-print/anthotype, faded silver-gelatin), not a uniform brand filter.
**What it does emotionally:** quiet, archival, pressed-flower nostalgia.
**Could it be built for the web?** MEDIUM — a cyanotype curve is just a 2-color gradient map applied to a grayscale photo plus a paper-grain texture; the hard part is sourcing/shooting botanical photography with the right soft, faded exposure per panel rather than one repeatable filter.

### Scientific/survey annotation overlay
**Seen in:** A15-russian-zine-cloud-field-spread.jpg, B10-unfold-academy-brand-moodboard-grid.jpg, B16-aerial-photo-children-shadows-circle-overlay.jpg
**How it's made:** Thin white line-art — an isotherm/contour line with temperature call-outs (+19°C, +21°C…) traced over a grass-and-cloud photo (A15), a plotted-dot circle diagram over a blurred flower field (B10), a scale-bar circle labelled "10² meters" over an aerial playground shot (B16) — is drawn flat on top of ordinary photography, as if the photo had been surveyed or run through mapping/weather software. The line work ignores photographic perspective and reads as measurement data, not decoration.
**What it does emotionally:** turns a candid photo into evidence — precise, observational, a little clinical.
**Could it be built for the web?** EASY — SVG/canvas line paths and text labels positioned over any photo; no special source art needed, fully art-directable per breakpoint.

### Cipher-patch specimen tags over painting
**Seen in:** A07-peach-painting-dither-cipher-overlay.jpg
**How it's made:** Circular white patches — styled like sewn patches, blister-pack seals, or lab specimen labels — sit on top of a classical peach still-life, each filled with monospaced pseudo-ciphertext (random letter blocks) plus scattered green math glyphs (π, √, =, +). This is a second, independent mark system layered on the same base image as the already-catalogued pixel-mosaic corruption in the corners — the circular label device is distinct from that.
**What it does emotionally:** uncanny, encrypted — an old artwork mid-decode by a machine.
**Could it be built for the web?** MEDIUM — the label shapes and monospace type are trivial CSS; making the "ciphertext" content and placement over the painting's forms read as intentional (not random noise) takes manual art direction.

### Scrambled/garbled letter-substitution copy
**Seen in:** B02-social-app-ui-mockup-grid-gibberish-text.jpg
**How it's made:** Real UI headlines and body copy ("We Help Social-Media Automation," "Let's automate sosty tiped made simple") have interior letters transposed while word length and outer letters stay roughly intact — the "yuor brian can sitll raed this" trick — applied wholesale across a full grid of app-marketing cards, so every card looks like real, finished copy at a glance and only resolves into nonsense on a close read.
**What it does emotionally:** uncanny-valley familiarity — legible-but-wrong, like overhearing a language you almost speak.
**Could it be built for the web?** EASY — a small JS function shuffling interior characters per word; usable live as a glitch micro-interaction or baked into static mock copy.

### Painted/marbled texture as UI backdrop
**Seen in:** B23-watercolor-gradient-ui-notification-card.jpg
**How it's made:** A soft-focus, hand-painted gouache/watercolor field — visible directional brush-drag streaks, pigment bleeding at the edges, no hard gradient stops — fills the entire background behind a flat, clean UI notification card, standing in for the usual digital gradient-mesh or photographic background.
**What it does emotionally:** warm, organic, hand-crafted counterweight to a sterile UI card.
**Could it be built for the web?** MEDIUM — needs a painted texture asset prepared once (a real gouache scan, or a paint-simulation shader); a flat CSS gradient reads as noticeably fake next to the UI's crispness.

### Concentric contour-line engraving fill *(mechanism unclear)*
**Seen in:** C10-colorful-bento-grid-stat-cards.png
**How it's made:** Mechanism unclear. A rounded-square icon is filled with dense, unevenly-spaced black concentric line contours — like a fingerprint, wood-grain, or engraved printing plate — rather than a flat fill or dot halftone. Could be a marching-squares style contour trace of a grayscale/gradient source, or hand-drawn; can't tell which from the image alone.
**What it does emotionally:** tactile, printed, like an engraved seal or plate.
**Could it be built for the web?** MEDIUM — contour-line generation from a source shape is a known SVG algorithm, but tuning line spacing/waviness to look intentional (not like a generic filter) takes iteration.

### Directional pixel-drag/sort glitch with chromatic sparkle *(mechanism unclear, borderline)*
**Seen in:** A21-eye-closeup-pixel-glitch-iridescent.jpg
**How it's made:** Mechanism unclear, and possibly a close cousin of the already-catalogued ragged-band pixel-mosaic — but where that technique reads as broken rectangular chunks, this reads as vertically elongated pixel blocks dragged/streaked upward off the eyebrow and lashes (closer to a datamosh or column pixel-sort), combined with fine grain and an iridescent chromatic-aberration sparkle along the lower lid. Flagging separately rather than folding into the excluded entry since the streak direction and added sparkle layer look like a different pass.
**What it does emotionally:** unstable, bio-digital, dissolving into data.
**Could it be built for the web?** EASY-MEDIUM — column pixel-sort (sort pixels by brightness threshold within vertical bands) is a documented canvas/WebGL technique; the chromatic sparkle is a cheap shader overlay on top.
