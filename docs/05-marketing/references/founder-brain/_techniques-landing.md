# Additional techniques — landing-page, logo, craft boards

*Mined 2026-08-26. Every image in `founder-brain/landing-page/`, `founder-brain/logo/`, the root `board-*.png` set, and `site-captures/` (excl. `negative-*.png`) was read directly — not inferred from filenames. Techniques already catalogued (cross-stitch, ribbed glass, wire-mesh, riso misregistration, ASCII/glyph field, dot-matrix halftone, pixel-mosaic bands, text-as-shape, double-exposure, motion blur, photo-wall grid, inverted photography, blueprint overlay, liquid chrome, knockout logotype, mark-as-object, halftone illustration, stipple/hedcut, cut-out collage, pixelated light beam, circular crop, glassmorphism) are excluded below even where a close cousin appears.*

---

### Laser-etched glass / acrylic (colorless, ink-free engraving)
**Seen in:** `logo/LOGO-13-applied-engraved-glass-card.png`
**How it's made:** A transparent glass or acrylic card is laser-etched (debossed) with the mark — no ink, no color, no fill. The shape is visible only where the etched surface catches and scatters ambient light differently from the surrounding clear material, so it reads as a faint ghost-relief that shifts with viewing angle.
**What it does emotionally:** Precision and permanence — the brand feels manufactured into the object, not printed on it.
**Could it be built for the web?** `HARD` — the effect depends on real light refraction through etched glass; a CSS/SVG approximation (subtle inset shadow + noise) would read as a cheap imitation, not the real material behavior.

### Brushed-metal anisotropic grain
**Seen in:** `logo/LOGO-02-texture-brushed-metal.png`
**How it's made:** Fine, tightly-spaced horizontal micro-scratches run across a light-grey metal surface, all parallel to one axis. Because the scratches are directional, light catches them differently depending on the scratch orientation versus the light source, producing a soft banding sheen rather than a flat texture.
**What it does emotionally:** Cold, industrial, engineered precision.
**Could it be built for the web?** `EASY` — a repeating linear-gradient or SVG noise filter with directional blur reproduces this convincingly; no photography needed.

### Granular stone-fill mark on a dust/starfield ground
**Seen in:** `logo/LOGO-03-texture-noir-starfield-inverted.png`
**How it's made:** The mark's silhouette is filled with a porous, aggregate grain (like sanded stucco or terrazzo) instead of a flat color, sitting on a near-black ground scattered with fine light specks and faint nebula-like wisps. The grain reads as a material fill *inside the shape*, distinct from the background noise around it.
**What it does emotionally:** Geologic, ancient, mineral — the mark feels carved from stone rather than drawn.
**Could it be built for the web?** `MEDIUM` — needs a prepared grain texture (photographed sand/stucco or a generated Perlin/Worley noise map) clipped to the mark path; trivial once that asset exists.

### Analog static / noise grain
**Seen in:** `logo/LOGO-04-texture-static-noise-grey.png`
**How it's made:** Pure random per-pixel monochrome noise (no dot grid, no pattern) covers a mid-grey ground, like off-air TV static or extreme high-ISO film grain. It reads as signal degradation rather than a printed texture.
**What it does emotionally:** Analog, degraded, nostalgic — a broadcast artifact, not a design choice.
**Could it be built for the web?** `EASY` — a canvas/SVG `feTurbulence` noise filter animated at low opacity reproduces this natively and cheaply.

### Hexagonal scale / honeycomb mesh
**Seen in:** `logo/LOGO-06-texture-scale-mesh-grey.png`
**How it's made:** A tessellated hexagonal lattice (closer to snake-scale armor or a honeycomb weave than a square window screen) covers the surface, each cell subtly shaded to suggest overlapping physical scales.
**What it does emotionally:** Protective, organic-engineered — apt for a hive/swarm brand specifically because it's hexagonal, not square.
**Could it be built for the web?** `EASY` — a repeating SVG hex-tile pattern with a soft per-cell gradient.

### High-key threshold posterization (2-tone bleach-out portrait)
**Seen in:** `logo/LOGO-12-applied-black-on-portrait-photo.png`
**How it's made:** A portrait photo is pushed to a hard binary threshold — no gradient, no dot screen — so skin and highlights blow out to pure white against a flat mid-grey ground. Fine edge detail (frizzy hair, thin glasses wireframe) survives as an organic, slightly fuzzy silhouette boundary rather than a clean vector cutout.
**What it does emotionally:** Stark, overexposed, almost spectral — the person becomes a presence more than a photograph.
**Could it be built for the web?** `MEDIUM` — a CSS/canvas threshold filter on a photo works, but needs a source photo with strong backlighting to get the fuzzy-edge quality right.

### Large-block mosaic dissolve at photo edges
**Seen in:** `landing-page/L18-jasper-fullpage-serif-warm-collage.png` (closing CTA photo)
**How it's made:** A photo is masked into randomly-sized rectangular tiles (like Tetris blocks, not thin bands or stripes); alternating tiles are cut away to reveal the white page behind, concentrated at the photo's edge so the image appears to be materializing/dematerializing tile-by-tile. The photo itself carries a subtle dot-screen texture throughout.
**What it does emotionally:** Digital, glitchy, "still rendering" — an image caught mid-load.
**Could it be built for the web?** `EASY` — a CSS clip-path or SVG mask built from randomized rectangles, no source-art prep required.

### Glowing voxel-block 3D construction
**Seen in:** `landing-page/L11-qintara-dotted-hands-black-purple.jpg`, `L21-qintara-hero-black-voxel-flower.jpg`
**How it's made:** A central object is built from a handful of small 3D cube/voxel blocks (not a smooth mesh) arranged radially, each block internally lit so the seams glow, with bloom haze around the whole cluster, floating in black space.
**What it does emotionally:** Crystalline, precise, alive — a machine-made gem rather than an organic form.
**Could it be built for the web?** `MEDIUM` — a Three.js/WebGL scene with instanced emissive cubes and bloom post-processing; the geometry itself is trivial, the lighting needs tuning.

### Self-assembling architecture with glowing seams
**Seen in:** `board-9-igloo.png`
**How it's made:** A photorealistic 3D structure (an igloo) is built from massive discrete blocks shown mid-assembly — some still floating apart — each block textured like real ice/stone and lit from within so the gaps between blocks glow softly. The whole object is composited onto a real photographic snow-mountain backdrop with blueprint-style dimension lines annotating specific blocks.
**What it does emotionally:** Under-construction, engineered-yet-magical — architecture caught in the act of becoming.
**Could it be built for the web?** `HARD` — needs real 3D modeling, PBR block textures, and careful compositing/lighting to sell the photoreal blend; this is the "award-site" budget tier.

### Stacked CRT-monitor wall showing degraded footage
**Seen in:** `board-6-basement.png`, `site-captures/basement/basement-desktop-hero.png`
**How it's made:** A physical pile of leaning vintage television sets, each displaying a different noisy black-and-white feed (rolling static, low-res scan lines, heavy grain), arranged like a video-art installation (Nam June Paik-style TV wall) inside an otherwise photoreal 3D room.
**What it does emotionally:** Analog surveillance, glitchy nostalgia, "something is being watched."
**Could it be built for the web?** `MEDIUM` — CSS scanline/noise overlays on a grid of `<video>` elements inside styled monitor bezels; no 3D engine required for a flat version.

### Fanned, scattered paper-scrap pile
**Seen in:** `board-7-rauno.png` ("Novelty" essay card)
**How it's made:** Several rectangular paper scraps (like sticky notes or flashcards), each printed with the same repeating word, are rotated at random angles and overlapped with soft drop shadows, mimicking a messy heap thrown down on a desk rather than a clean stack.
**What it does emotionally:** Playful, tactile, unpolished-on-purpose — a real desk, not a template.
**Could it be built for the web?** `EASY` — CSS transforms (random rotate + offset + box-shadow) on a handful of `<div>`s; no photography needed.

### Multi-material 3D swatch object
**Seen in:** `board-11-resend.png`
**How it's made:** A single 3D object (a Rubik's-cube-like grid) has each cell rendered with a *different* tactile material finish — glossy black, matte, perforated speaker-grille mesh, sand/noise grain — all held to one dark monochrome palette and dramatically rim-lit, like a physical material-sample board turned into one floating hero object.
**What it does emotionally:** Engineered, tactile, "quality you can feel" — without showing an actual product.
**Could it be built for the web?** `MEDIUM` — a Three.js scene with a different PBR material per face/cell; the modeling is simple, the material authoring takes iteration.

### Impossible object-in-landscape surreal composite
**Seen in:** `board-12-mercury.png`
**How it's made:** An ordinary office desk, chair, and laptop are placed directly on a grassy hilltop overlooking a misty forested valley, photorealistically scale- and light-matched so the furniture looks like it genuinely belongs there — a single seamless scene, not a collage.
**What it does emotionally:** Aspirational, "work from anywhere," quietly surreal without being silly.
**Could it be built for the web?** `HARD` — needs either real on-location photography with props or careful AI-generated/compositing work matched for scale, light direction, and atmospheric perspective.

### Organic amoeba-blob photo crop / card shape
**Seen in:** `site-captures/rzlt/rzlt-desktop-hero.png`, `rzlt-desktop-full.png` (repeats 3×)
**How it's made:** Photos and UI containers are masked into a soft, irregular free-form rounded polygon — not a circle, not a rounded rectangle — closer to an ink-blot or amoeba silhouette. It recurs across the hero photo, a partner-icon frame, and a code-snippet card, always with the same soft-cornered irregular outline.
**What it does emotionally:** Organic, fluid, alive — a deliberate brand signature shape rather than a generic container.
**Could it be built for the web?** `EASY` — a single custom SVG clip-path (or a small library of 3-4 blob variants) applied via CSS `clip-path`; trivial once the path is drawn.

---

## Motion & interaction

*Static captures limit what can be confirmed, but several sites carry explicit motion cues or states that only make sense as animation:*

- **Scroll-driven 3D camera navigation** — `basement.studio` (board-6, site-captures/basement/): the hero is a fully rendered 3D interior (arcade cabinet, CRT wall, a person and a dog) with an explicit "Scroll to Explore ↓" prompt, implying the camera moves through the 3D scene as the user scrolls, rather than a page of flat sections.
- **Scroll-scrubbed exploded/assembly build** — `board-9-igloo.png`, `board-10-lusion.png`: both show 3D objects caught mid-assembly (blocks still floating apart, joints not yet seated). Static evidence only, but the mid-build state strongly implies a scrub-tied build/converge sequence (consistent with `REFERENCES.md`'s existing note on these two as "C7/C9 assembling geometry").
- **Live functional data as a scroll nudge** — `landing-page/L04-form-found-cream-iridescent-band.jpg`: a real-time local clock ("New York 2:49 AM") sits in one corner of a full-bleed image band with the literal word "(Scroll)" in the opposite corner — a live, ticking data point used as a subtle interaction affordance rather than a decorative animation.

---

## Summary (ranked by distinctiveness / usability)

If fewer than three matter, these are the ones worth building first: **(1) laser-etched glass**, **(2) organic amoeba-blob crop** (RZLT — cheapest, most reusable, genuinely on-brand for a hive/swarm mark), **(3) large-block mosaic photo dissolve**, **(4) glowing voxel construction**, **(5) fanned paper-scrap pile**. The rest are real but more production-heavy (3D/photoreal compositing) or more marginal (grain/noise textures, which are easy but low-differentiation).
