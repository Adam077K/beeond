# Beeond — Illustrated Asset Pipeline: Art-Direction Prompt Pack v2

**Date:** 2026-07-04 · **Owner:** CEO (art direction) + Founder (generation) · **Status:** v2 — deeper detail, hand-lettered annotations unlocked, creative direction elevated (founder: "more detail, text allowed, diverge if better, stay in the reference style")

## The concept — "The Founders' Field Journal"

Every visual is a page from the working notebook of the people who built the swarm: fine ink sketches, transparent honey watercolor, hand-lettered margin notes, measurement ticks, corrections, tape, coffee rings. Same medium as the founder's reference, plus a story: **a human hand at work** — which is the anti-generic promise, depicted. Annotations are short decorative notes (exact strings given per prompt — the model must spell them verbatim and add NO other words). Headlines/claims are never baked into images (SSR/GEO gate). Every annotated asset also gets a **clean no-annotation variant** for the Hebrew/RTL side (hand-lettered Hebrew is unreliable in image models — the clean variant mirrors safely).

**Workflow:** Founder generates (images + short videos) → CEO cuts video to frames, scroll-scrubs/load-plays, optimizes, integrates, re-runs gates. Generate 2 candidates per asset (A/B); we pick together; regenerate on ANY drift (cartoon faces, saturation, vector-flat look, gibberish letters).

---

## THE STYLE LOCK — paste at the START of every prompt, verbatim

> Hand-drawn scientific-sketchbook illustration in the style of a naturalist's field journal: fine scratchy ink fineliner linework in warm near-black (#141413) with wobbly, confident hand-drawn double-stroked edges and faint pencil construction lines still visible; loose transparent watercolor washes in warm honey amber, golden ochre and pale mustard, with occasional warm-grey wash accents; painted on warm cream cotton paper (#FAF9F5) with subtle paper tooth, faint tea-stain blooms, one or two tiny pigment splatters. Honeybees are small, naturalistic, sketched in the same ink: striped abdomens in ink and amber wash, translucent double-line wings, small dot heads with fine antennae — NO cartoon faces, NO eyes, NO smiles, NO mascot cuteness. Flight paths are thin dashed ink lines with playful loops. Any hand-lettering uses small, imperfect but legible warm-ink script, like quick margin notes. Generous breathing negative space of clean paper. No words other than those explicitly specified. No blue, no purple, no green, no pink, no pure white, no solid black background (unless the dark-paper variant is specified), no gradients, no 3D render, no photorealism, no flat vector look, no neon, no drop shadows.

---

## PRIORITY 1 — Hero: "The Master Plan page" (still, 16:10, ≥2560px wide)

> [STYLE LOCK] A wide page from the founders' field journal, composed like a working master plan. THE RIGHT 42% OF THE FRAME: a large hand-sketched honeycomb cluster of about thirteen hexagon cells in visibly different construction states, reading as a system being built — at the cluster's ragged outer edge, two or three cells exist only as faint pencil ghost lines; moving inward, cells gain confident double-stroked ink outlines; further in, three cells are washed in transparent warm-grey; five cells are filled with luminous transparent honey-amber watercolor at different fill levels, one of them only half-full with a fine straight ink meniscus line and a single wet drip of honey running just over its lower wall; and at the visual heart of the cluster, ONE slightly larger hexagon cell is flooded with solid warm near-black ink, containing a small minimal geometric bee icon drawn in thin golden-amber outline strokes — hexagonal wings, three-band abdomen, an abstract emblem, clearly a drawn symbol rather than a realistic insect. Along the comb's upper-right outer wall, a few tiny engineer's ruler tick-marks in fine ink. FIVE naturalistic honeybees: two flying in from the left along thin dashed looping flight paths, one banking in from the top, one caught in the moment of landing on a cell rim with wings as ghosted double-lines, one already at rest drinking at the honey meniscus. HAND-LETTERED ANNOTATIONS in small warm-ink script, exactly these and nothing else: "one swarm" written along the longest dashed flight path near the left; "every channel" beside the comb's upper edge with a small arrow pointing into the cluster; "GEO" beside the dark keystone cell with a short arrow to it, and beneath that word a single quick stroke of yellow watercolor like a hand-made underline. THE LEFT 55%: almost empty warm cream paper — one faint dashed path, one tiny distant bee, a pale coffee-cup ring stain in the lower-left third, a small strip of aged washi tape at the top-left edge as if the page were pinned into the journal — fading to completely clean paper at the far left so text can live there. Museum-specimen mood: warm, precise, alive, unmistakably drawn by a person.

**Also generate: the clean variant** — identical prompt with the three annotations, tape and coffee ring removed (for HE/RTL mirror).
**Integration:** left 55% = live H1/CTA zone; image replaces the code comb; `priority`, ≤220KB AVIF; RTL mirrors the clean variant.

## PRIORITY 2 — C7: "The comb assembles" (VIDEO → scroll-scrubbed frames)

**Video, 6s, 24fps, 16:9, ≥1920w. CAMERA ABSOLUTELY LOCKED — no zoom, no pan, no drift; paper texture pinned and constant; neutral even light; no flicker.**

> [STYLE LOCK] A fixed overhead-front view of one warm cream journal page while a honeycomb draws itself into existence, exactly in this order and timing: (0.0–0.5s) the page is empty except for faint pencil ghost-lines suggesting where the comb will stand; (0.5–2.2s) thin scratchy ink outlines draw themselves cell by cell from the OUTER ring inward — about ten hexagons, each outline appearing as a moving pen line with slight wobble, pencil ghosts disappearing as ink replaces them; (2.2–3.8s) transparent honey-amber watercolor blooms into five of the cells one after another, pigment spreading wet from the center of each cell outward to its walls, while four small naturalistic honeybees fly in from the frame edges along thin dashed paths, each arriving precisely as a cell completes and settling on its rim, wings folding; (3.8–5.0s) the LAST remaining empty cell at the center floods with warm near-black ink, and inside it a minimal golden-amber geometric bee icon draws itself stroke by stroke — hexagonal wings, three-band abdomen — while beside the dark cell the word "GEO" hand-writes itself in small warm-ink script with a short arrow; (5.0–5.4s) a single fine ink circle ripples once outward around the dark keystone cell and fades; (5.4–6.0s) ABSOLUTE stillness — the finished comb, four resting bees, nothing moves. Throughout: the same four bees only (none appear or disappear except as described), cells never change shape or position once drawn, no camera motion, no lighting change, no morphing, no extra words beyond "GEO".

**Also:** export the FINAL FRAME as a still (mobile masthead + reduced-motion poster) — or I'll extract it.
**Integration:** ~90 frames → 64 kept → WebP sequence scrubbed on the existing `data-p` ScrollTrigger; HTML proof tiles remain live text above; the ink ripple at 5.0s replaces our code pulse — same keystone grammar, now hand-drawn.

## PRIORITY 3 — Hero: "The swarm comes home" (VIDEO → load-played once)

**Video, 4s, 24fps, 4:5 portrait, ≥1600w. CAMERA LOCKED; ends at rest.**

> [STYLE LOCK] A fixed view of the finished master-plan honeycomb from the hero page (same cluster: pencil ghosts at the edge, inked outlines, grey and honey-amber washed cells, the half-full cell with its meniscus and drip, the near-black keystone cell with the golden bee icon) standing perfectly still on warm cream paper. (0.0–0.3s) stillness; (0.3–2.8s) SIX small naturalistic honeybees enter from the frame edges — two from the left, two from the top, one from the lower-left, one from the upper-right — each preceded by its thin dashed flight path drawing itself with a playful loop, the dashes fading gently a moment after the bee passes; (2.8–3.5s) the bees settle one by one: three on cell rims, one on the dark keystone cell's edge, two at the honey meniscus of the half-full cell — and as those two land, the honey level rises very slightly with a soft wet shimmer; each landing has a tiny settle, like a breath; (3.5–4.0s) ABSOLUTE stillness — the swarm at rest, page complete. Same six bees throughout, no appearing/disappearing, comb never changes, no camera motion, no words.

**Integration:** plays once on load over the Priority-1 still (converge-once-then-rest honored); reduced-motion/JS-off/mobile = the still.

---

## SECOND WAVE (after 1–3 land; full prompts — generate in this order)

**4 · Anti-generic: "Not this — this" (still, 3:2).** The killer spot for the manifesto section:
> [STYLE LOCK] A journal page comparing two small honeycomb studies side by side. LEFT STUDY: five identical hexagon cells stamped in flat lifeless warm-grey, mechanically perfect, evenly spaced like a rubber stamp repeated, no bees, no honey, a thin ink X struck once through the whole group with a single decisive stroke, and beneath it the hand-lettered word "generic" in small warm-ink script with one strike-through line across the word itself. RIGHT STUDY: a small living comb of five cells drawn with wobbly confident ink lines, two cells glowing with honey-amber wash, one wet drip, one naturalistic honeybee landing on a rim, a short dashed path; beneath it the hand-lettered word "calibrated" with a single quick stroke of yellow watercolor underlining it. A small hand-drawn ink arrow curves from the crossed-out left study to the right one. Generous clean paper around both. No other words.

**5 · Final CTA: "The night page" (still, 16:10, dark-paper variant).**
> [STYLE LOCK — with this paper change: painted on deep warm charcoal paper (#0A0A0A with a warm undertone), ink lines in pale warm cream, watercolor glowing.] A quiet nocturnal journal page. On the right half, the same thirteen-cell honeycomb cluster from the master plan, now at rest at night: cell outlines in fine pale-cream scratchy ink, most cell faces left dark, two washed in faint warm grey — and the central keystone cell filled with luminous honey-amber watercolor that bleeds a soft warm halo of glow onto the dark paper around it, the golden bee icon inside it barely darker than the glow. Five honeybees asleep on cell rims, drawn in pale cream ink with faint amber. One thin dashed pale flight path enters from the left across mostly empty dark paper and ends at the comb — the last bee already home. No words. Warm, safe, and still.

**6 · Founder portrait vessels (2 stills, 1:1, matched pair — run twice).**
> [STYLE LOCK] One large hand-sketched hexagon cell centered on warm cream paper, drawn with confident double-stroked ink walls and a visible inner wall line giving real comb thickness, two small strips of aged washi tape across its top corners as if a photograph will be pinned inside, the interior left as completely clean empty paper, a small pool of honey-amber watercolor settled at the inner floor with a fine meniscus line and one tiny bubble, one naturalistic honeybee perched on the upper-left rim and a second approaching on a short dashed looping path from the right, three faint partial neighbor cells in pale grey wash behind, one tiny ink ruler-tick detail on the right wall. Generous clean margin. No words, no face, no person.

**7 · How-it-works: "The build line" (still, 5:2 wide).**
> [STYLE LOCK] Three hexagon cells in a loose, deliberately uneven horizontal row on warm cream paper, connected by ONE continuous thin dashed ink flight path that dips and loops between them and ends in a small solid yellow watercolor dot just past the third cell. First cell: bare confident ink outlines with pencil ghosts. Second cell: half-washed in honey-amber, wet edge visible. Third cell: fully honey-filled with meniscus, a naturalistic honeybee just landing on its rim. Hand-lettered beneath each cell in small warm-ink script, exactly: "wk 1–4" · "wk 4–8" · "wk 8–12". No other words.

**8 · Problem: "Nothing connects" (still, 4:3).**
> [STYLE LOCK] Three lone hexagon cells scattered far apart on a mostly empty warm cream page, deliberately disconnected: one only pencil ghost-lines, one outlined in ink but empty, one with a small dried matte honey stain and a hairline crack in its wall. Three short dashed flight paths that start toward each other but stop dead without meeting. One confused honeybee hovering in the empty middle, its own path a tangled little loop. Hand-lettered once in small warm-ink script near the bottom: "nothing connects". No other words.

**9 · C6/GEO: "The cited answer" (still, 4:3).**
> [STYLE LOCK] A specimen study of a single open hexagon cell on warm cream paper, drawn large like a display case: inside the cell, instead of honey, a neat small stack of three thin hand-sketched paper sheets with faint ruled ink lines (no letters on them), the top sheet slightly lifted at a corner. A naturalistic honeybee stands on the cell's lower rim, antennae bent toward the sheets, as if reading. A dashed flight path arrives from the left with one loop. Hand-lettered beside the cell with a small arrow, exactly: "the answer" — and a single quick yellow watercolor stroke under those words. No other words.

**10 · OG backdrop (still, exactly 1200×630, dark-paper variant):** the night-page comb placed on the LEFT 40%, the right 60% clean dark paper (live wordmark/category set in code on top). No words.
**11 · 404 spot (still, 1:1):** > [STYLE LOCK] One empty hexagon cell in bare ink outlines on clean warm cream paper, a single honeybee hovering directly above it looking down, its dashed flight path ending in a small drawn loop above the cell, one faint honey stain beside the cell as if something was here once. No words.

---

## Delivery + pipeline (v2 targets)

| # | Asset | Type | Aspect | Min | Variants |
|---|---|---|---|---|---|
| 1 | Hero master plan | still | 16:10 | 2560w | annotated + clean |
| 2 | Comb assembles | video | 16:9 | 1920w | 6s locked-cam |
| 3 | Swarm comes home | video | 4:5 | 1600w | 4s locked-cam |
| 4 | Not this—this | still | 3:2 | 1600w | annotated + clean |
| 5 | Night page | still | 16:10 | 2560w | no-word |
| 6 | Portrait vessels | still ×2 | 1:1 | 1600w | matched pair |
| 7 | Build line | still | 5:2 | 2000w | annotated + clean |
| 8 | Nothing connects | still | 4:3 | 1600w | annotated + clean |
| 9 | Cited answer | still | 4:3 | 1600w | annotated + clean |
| 10 | OG backdrop | still | 1200×630 | — | no-word |
| 11 | 404 spot | still | 1:1 | 1200w | no-word |

CEO pipeline on receipt: ffmpeg → frames → dedupe/downselect → AVIF/WebP (hero ≤220KB; ≤35KB/frame; 828w mobile stills) → LQIP → canvas scrub on `data-p` / load-play one-shot → reduced-motion & JS-off = final-frame stills → RTL = clean variants mirrored → sampled-pixel palette audit vs the 7 tokens → evidence rounds in BUILD_LOG → QA gate → merge. H1 remains the LCP; Lighthouse ≥90 mobile re-verified.

**Annotation language note:** hand-lettered annotations are EN-only (image models break Hebrew glyphs); the HE/RTL locale ships the clean variants. If we later want Hebrew annotations, we letter them as SVG overlays in code — real text, our fonts, zero risk.
