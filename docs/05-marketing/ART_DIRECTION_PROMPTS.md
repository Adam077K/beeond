# Beeond — Illustrated Asset Pipeline: Art-Direction Prompt Pack

**Date:** 2026-07-04 · **Owner:** CEO (art direction) + Founder (generation) · **Status:** v1 — founder-approved direction (reference: ink+watercolor honeycomb, `ChatGPT Image Jul 4 2026 09_55_29 PM.png`)

**Workflow:** Founder generates from these prompts (images; short videos for motion) → CEO cuts videos to frames (`ffmpeg`), builds scroll-scrub/load-play components, optimizes (WebP/AVIF, LQIP), integrates. Brand-lock A1 amended by founder decision 2026-07-04: illustrated bees allowed at hero scale. AI-generated illustration approved with founder-in-the-loop; the anti-slop defense is the consistent hand-drawn style system below, not the code-only rule.

---

## THE STYLE LOCK — paste this at the START of every prompt, verbatim

> Hand-drawn scientific-sketchbook illustration: fine scratchy ink fineliner linework (warm near-black #141413, wobbly hand-drawn double-stroked edges, visible construction lines) with loose transparent watercolor washes in warm honey amber, golden ochre and pale mustard, plus a few warm-grey wash accents. Painted on warm cream cotton paper (#FAF9F5), subtle paper grain, faint tea-stain blooms and tiny pigment splatters. Naturalistic small honeybees drawn in the same ink style — striped abdomens in ink and amber, translucent sketched wings, small dot heads, NO cartoon faces, NO eyes, NO smiles. Dashed ink flight-path lines with loops. Lots of breathing negative space of clean paper. Absolutely no text, no letters, no logos except where specified. No blue, no purple, no green, no pure white, no pure black backgrounds, no gradients, no 3D render, no photorealism, no digital vector look, no neon.

**Consistency rules for the founder:** generate all assets in one model/session where possible; if a result drifts (too saturated, too digital, cartoon faces), regenerate — never accept drift; keep the paper tone identical across assets; always request the stated aspect ratio; upscale to ≥2048px on the long edge.

---

## PRIORITY 1 — Hero masthead still (replaces the code comb)

**Aspect 16:10 (or 3:2), ≥2560px wide.**

> [STYLE LOCK] Composition: a large hand-sketched honeycomb cluster occupying the RIGHT 45% of the frame, drawn as if under construction — some hexagon cells only ink outlines, some filled with transparent honey-amber watercolor at different fill levels, one or two cells with wet dripping honey and a fine ink meniscus line, two cells shaded in warm grey wash. At the visual center of the comb, ONE hexagon cell is filled solid warm near-black ink, containing a small minimal geometric bee ICON drawn as thin golden-amber outline strokes (hexagonal wings, three-band abdomen — an abstract mark, not a realistic bee). Five small naturalistic honeybees fly toward the comb from the left and top along thin dashed looping flight paths; one bee has just landed on a cell rim. The LEFT 55% of the frame is almost empty warm cream paper with only one faint dashed flight path and two tiny distant bees, fading to completely clean paper at the far left edge. Soft warm watercolor stains bleed slightly beyond the comb's edges. Museum-specimen sketchbook mood, warm, precise but alive.

**Integration:** left 55% stays clean → the H1/CTA column sits on real paper; art replaces `SwarmRested` as a positioned `next/image` (priority, ≤200KB AVIF). RTL: mirrored generation OR CSS `scaleX(-1)` (no text in image → safe).

## PRIORITY 2 — C7 keystone assembly (VIDEO → scroll-scrubbed frames)

**Video, 5–6s, 24fps, LOCKED-OFF static camera (critical — zero camera movement, zero zoom, zero pan), aspect 16:9, plain warm cream paper background throughout.**

> [STYLE LOCK] A stop-frame style animation on a fixed sheet of warm cream paper: an empty page where a honeycomb ASSEMBLES itself cell by cell — first, thin scratchy ink hexagon outlines draw themselves on from the outer ring inward (about ten cells), then transparent honey-amber watercolor washes bloom into several cells one after another, wet pigment spreading naturally. Small naturalistic honeybees fly in from the edges along dashed paths, each one arriving just as a cell completes, then settling on cell rims. In the FINAL second: the last remaining empty cell at the center fills with solid warm near-black ink, and a minimal golden-amber geometric bee icon draws itself inside it stroke by stroke — the keystone completing the comb. Everything then rests completely still for the final half-second. The paper, lighting and camera never move. No text.

**Integration:** I cut to ~90 frames → dedupe to ~64 → WebP sequence, canvas-scrubbed on the existing ScrollTrigger progress (`data-p`), replacing/backing the C7 stage art. HTML proof tiles stay SSR on top (text is never baked into the image). Reduced-motion/JS-off/mobile = final frame as a still. Also export me the final frame as a standalone image — it becomes the mobile C7 masthead and the final-frame poster.

## PRIORITY 3 — Hero convergence (VIDEO → load-played one-shot)

**Video, 3–4s, 24fps, locked-off static camera, aspect 4:5 (portrait-ish, matches the hero art column), plain warm cream paper.**

> [STYLE LOCK] On a fixed sheet of warm cream paper, the finished sketched honeycomb from the right side of the hero (same comb: ink outlines, honey-washed cells, the one near-black keystone cell with the golden bee icon) stands still. Six small naturalistic honeybees enter from the frame edges along thin dashed looping flight paths, spiral once, and settle one by one onto cell rims and onto the honey surface of the fullest cell; the honey level in one half-filled cell rises slightly as they arrive. In the final second everything is perfectly still — the swarm at rest. Camera, paper and comb never move. No text.

**Integration:** plays ONCE on load over the hero still (frames on canvas, honoring converge-once-then-rest; reduced-motion → still). The current dot-swarm retires.

---

## SECOND WAVE (generate after 1–3 land)

**4 · Final CTA — the lit cell (still, 16:10, dark variant):**
> [STYLE LOCK — replace the paper direction with:] Painted on deep warm charcoal-black paper (#0A0A0A with warm undertone). Ink lines become pale warm cream; watercolor becomes luminous honey-amber that appears to glow. Composition: a sketched honeycomb cluster on the right, cells outlined in fine pale-cream scratchy ink, most faces left dark, two faces washed in faint warm grey — and ONE central cell filled with luminous honey-amber watercolor that bleeds a soft warm glow halo onto the dark paper around it. Three honeybees rest on cell rims near the glowing cell, drawn in pale cream ink with amber accents. One thin dashed pale flight path loops in from the left across mostly empty dark paper. Quiet, nocturnal, warm. No text.

**5 · Founder portrait vessels (2 stills, 1:1, one prompt run twice for a matched pair):**
> [STYLE LOCK] A single large hand-sketched hexagon cell centered on warm cream paper, drawn with confident double-stroked ink walls and a visible inner wall line, the cell interior left as clean empty paper (it will hold a photograph later), a small pool of honey-amber watercolor settled at the cell's inner floor with one fine meniscus line and one tiny bubble, one small naturalistic honeybee perched on the upper-left cell rim and a second bee approaching on a short dashed path from the right, three faint partial neighbor cells in pale grey wash behind. Generous clean paper margin all around. No text, no face, no person.

**6 · Section spots (stills, 4:3, small — one prompt each):**
- Problem: > [STYLE LOCK] Three separate lone hexagon cells scattered far apart on mostly empty warm cream paper, each sketched in ink with a different unfinished state — one only outlines, one half-washed in pale grey, one with a small dried-up honey stain — disconnected, with three short dashed flight paths that fail to meet, one confused bee hovering between them. Mood: scattered, uncoordinated. No text.
- How-it-works: > [STYLE LOCK] Three hexagon cells in a loose horizontal row on warm cream paper connected by ONE continuous dashed ink flight path with playful loops between them; the first cell bare outlines, the second half-washed with honey-amber, the third fully honey-filled with a bee landing on its rim; a tiny yellow watercolor dot where the path ends. No text.
- C6/GEO: > [STYLE LOCK] One hexagon cell drawn as an open specimen frame on warm cream paper with a honeybee standing on its lower rim peering inside; inside the cell, instead of honey, a neat stack of three thin sketched paper sheets with faint ruled ink lines (no letters); a dashed path arrives from the left. Mood: the answer lives in the cell. Strictly no letters or words.

**7 · OG backdrop (16:8.4, extra-wide):** the Priority-1 composition mirrored (comb LEFT 40%, clean paper right) on the DARK charcoal paper variant, extra margin, no text — I overlay the live wordmark/eyebrow in code.
**8 · 404 spot (1:1):** > [STYLE LOCK] One empty hexagon cell, ink outlines only, on clean warm cream paper, with a single honeybee hovering above it looking down, a dashed flight path ending in a small question-less loop above the cell (no question mark, no text), one faint honey stain beside it.

---

## Technical delivery spec (founder → CEO)

| Asset | Type | Aspect | Min size | Notes |
|---|---|---|---|---|
| 1 Hero still | PNG/JPG | 16:10 | 2560w | left 55% clean paper |
| 2 Keystone assembly | MP4/MOV | 16:9 | 1920w | 5–6s, 24fps, static camera, ends at rest ≥0.5s |
| 3 Hero convergence | MP4/MOV | 4:5 | 1600w | 3–4s, ends at rest |
| 4 Dark lit cell | PNG/JPG | 16:10 | 2560w | dark-paper variant |
| 5 Founder vessels ×2 | PNG | 1:1 | 1600w | matched pair |
| 6 Spots ×3 | PNG | 4:3 | 1200w | |
| 7 OG backdrop | PNG | 1200×630 exact ok | — | dark variant |
| 8 404 spot | PNG | 1:1 | 1200w | |

**My pipeline on receipt:** ffmpeg → frame extraction → dedupe/downselect → AVIF/WebP encode (hero ≤200KB, sequences ≤35KB/frame, 828w mobile variants) → LQIP → canvas frame-scrub component on the existing ScrollTrigger `data-p` → reduced-motion/JS-off = final-frame stills → RTL via mirrored generation or CSS flip (no text in any asset makes this safe) → brand-lint palette audit on sampled pixels → evidence loop rounds in BUILD_LOG → QA gate → merge.

**Perf guardrails preserved:** H1 stays the LCP (hero image `priority` but visually secondary to text zone), Lighthouse ≥90 mobile re-verified after integration, frame sequences lazy-load below the fold, mobile gets stills not sequences.
