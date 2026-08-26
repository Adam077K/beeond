# The Beeond Design Language

*Started 2026-08-26. The vocabulary the site is built from — what we use, where, how often, and why.*
*This is not a direction. It is the system a direction gets assembled out of.*

---

## The principle

**Consistency does not come from using one reference. It comes from a budget on how often each thing may appear.**

> **Once** = a moment. **Twice** = a style. **Everywhere** = the through-line.

That rule is what lets a dozen different reference worlds sit on one site without reading as a scrapbook. Each arrives once, in a section that earns it, on top of invariants that never move.

---

## Layer 1 — Invariants

Never change. Any section, any page. This is what makes it feel like one site even when the imagery changes completely.

| Token | Value | Status |
|---|---|---|
| Ground palette | **Alternating, chapter by chapter** — the background marks the chapter; the column grid continues through it unchanged | **LOCKED** |
| Light ground | — | open |
| Dark ground | — | open |
| Accent | — | open (palette board evidence: `#2A99F4`, but palette is not decided) |
| Display type | — | open |
| Body type | — | open |
| Utility / mono type | — | open |
| Radius + gutter | one number, gutter ≈ radius, same on every cell regardless of size | **LOCKED (rule)** |
| Column grid | hairline full-height rules expose it; they carry no content | **LOCKED (rule)** |
| Easing | asymmetric — exits faster than entrances, ~150-200ms | **LOCKED (rule)** |
| Separator | the gutter only. **No borders. No drop shadows.** Depth comes from overlap and soft shadow, never from glass | **LOCKED** |

---

## Layer 2 — The through-line

**Real photography, with a light technological layer.**
*Founder decision, 2026-08-26.*

Humanity is the constant; technology is what gets dialled. Warm documentary photography — people, sky, flowers, hands — appears in every section. The tech layer is applied lightly, and only sometimes.

This is the founder's own statement turned into a rule:

> "Real and human visuals combined with an additional layer — either subtle or dramatic — of ASCII, pixels, typography, or other effects. A distinctive balance between **life and the real world** and **technology**."

**The dial is the instrument.** Every image carries two authored decisions: *what is the real thing*, and *how hard is the tech layer pushed*. Subtle for a founder portrait. Dramatic for a hero.

### The law that governs every application

> **The effect must be derived from the subject, not applied to it. If the same overlay could be dropped on any other photo unchanged, it is decoration.**

---

## Layer 3 — Signature moments

Each appears **exactly once** on the entire site.

| Moment | Technique | Source |
|---|---|---|
| 1 | **ASCII / glyph field** — subject redrawn in characters that inherit colour from the pixel beneath; masked to the subject, background left clean photograph | A12, C05, C07, C08, B17 |
| 2 | **Dot-matrix halftone** — square grid, dot radius tracks brightness, thinning to nothing at the edges | B05, B11, C04, qintara |
| 3 | **Motion blur / long exposure** — foliage and flowers smeared by a panning camera, heavy grain, warm gold against blue | A20, B18, Ada |
| 4 | **Double-exposure blend** — two or three real things fused into one translucent image | C19, A21 |
| 5 | **Wire-mesh screen** — canopy and sky shot through a fine window screen; the grid is a real object, not drawn | B14 |
| 6 | **Blueprint / construction overlay** — dimension lines, baseline and x-height rules, layout guides left visible. The page shows its own working | A05, C11 |
| 7 | **Knockout logotype in a photo** — oversized letterforms cut out of a photograph, cropped hard by both edges | A17 |

**Not used:** cross-stitch · ribbed glass · riso misregistration · pixel-mosaic destruction · text-as-shape · liquid chrome · photo-wall grid · inverted photography · mark-as-real-object. *(Available if a section later earns one — but adding one means removing one.)*

### Compositing rules — apply to every moment

- **Additive or subtractive, never a blend mode.** No multiply, no overlay, no 30% opacity. Marks are opaque; the photo reads at full strength *through the gaps*. The gaps are the mechanism.
- **Every field dissolves at its edge** rather than stopping. Density thins to isolated single marks. The only permitted hard boundary is a silhouette clip, stepped to the grid.
- **One un-effected anchor per frame** — a place for the eye to land. Without it the treatment reads as a filter.
- **Sharp mark against imperfect photograph.** Grain, bokeh, blur, blown highlights. A clean photo under a clean grid is the weakest possible result.
- **Colour, two modes, never conflated:** *overlay* (monochrome mark, colour through the gaps) vs *conversion* (the mark IS the pixel, samples colour). Preserve one warm accent untouched in both.
- **Type stays quiet while the image is loud.** Small, plain, in negative space, never crossing the subject.

---

## Layer 4 — Role assignments

*Open — assigned at G2 once the section spine exists.*

| Role | Assigned to |
|---|---|
| Hero image | — |
| Section transitions | — |
| Proof / capability display | overlapping artefact cards at varied depth (Fable / Atlas method) — no dashboard screenshot |
| Human & founder presence | — |
| Closing moment | — |

---

## Layer 4b — The scroll set-piece (founder, 2026-08-26)

**One pinned, scroll-scrubbed frame sequence.** Source video generated in Higgsfield, split to frames, scrubbed against scroll progress. This is the site's signature motion moment.

### The rule that keeps it inside the system

**Do not ship it as "a video section."** Run every extracted frame through the same treatment as the rest of the site — the glyph or dot renderer, at the dial setting that section calls for — so the scrub is *the visual system in motion*, not a foreign element dropped into it. A raw generated video would be the one place the journey jumps, which is exactly what this language exists to prevent.

### Pipeline

1. **Generate** — Higgsfield video model, 4-6s, framed for the crop we actually need (tight on the moving subject, not full-bleed).
2. **Extract** — ffmpeg, N frames at even intervals.
3. **Treat** — run each frame through the site's mark renderer. Frame-to-frame the grid pitch stays constant; only per-cell values change, so the sequence reads as one continuous field rather than a flicker.
4. **Encode** — AVIF or WebP, tightly cropped, modest pixel dimensions scaled up by canvas.
5. **Drive** — GSAP ScrollTrigger, `pin` + `scrub: true` (deterministic and reversible), `drawImage` to canvas.
6. **Verify** — `scrub-fps.mjs` at 4x CPU throttle, `swarm-frames.mjs` for per-progress visual evidence. **Both already exist in `apps/web/scripts/`.**

### Budget — this is the heaviest thing that can go on the site

| Constraint | Limit |
|---|---|
| Frame count | **≤ 90.** Beyond that is diminishing return for real payload |
| Total sequence weight | **≤ 1.5 MB** after encoding |
| Position | **Below the fold.** It must never be the LCP element |
| Loading | Lazy; preload a first batch, stream the rest |
| `prefers-reduced-motion` | Static poster frame, no canvas, no listener |
| Gate | Must clear `scrub-fps.mjs` under 4x throttle before it merges |

The reference notes are explicit that this technique is where craft turns into an anti-pattern: take the choreography, reject the payload. The binding perf floor does not move for it.

---

## Layer 5 — Attention & text budget

Measured from six real outcome-selling sites (Ada, Agentwork, Base44, Jasper, Superside, Speakeasy):

> **The loudest sections carry the least text.** Prose clusters in the quiet sections; loud sections are made of image, scale and number.

- **1–3 LOUD sections per page.** Never two adjacent. The hero is one; the close is usually another.
- **A section may be loud OR wordy, never both.**

---

## Open

1. Palette — light ground, dark ground, accent
2. Type — display, body, mono
3. Role assignments (Layer 4) — needs the section spine, so G2
4. Additional material/surface techniques — reference mining in progress
5. Scroll set-piece — *what* it shows (subject and narrative) and which section it pins to; the pipeline and budget above are settled, the content is not

---

*Evidence: `references/ART-DIRECTION-BRIEF.md` · `references/FOUNDER-REFERENCE-NOTES.md` · `references/founder-brain/_brief-0*.md`*
