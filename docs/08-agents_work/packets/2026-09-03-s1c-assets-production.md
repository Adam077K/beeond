# S1C — Assets and the production pipeline
*`sourcer`, lens [research] + [engineering]. Session orchestrator-site-spec, Step 1, packet C.*

**Status: PARTIAL.** Research complete on A–F. Three sub-questions unresolved (Midjourney docs
returned 403; Higgsfield publishes no per-model credit table on its own pages; no named examples of
pre-launch concept labelling were found). All access dates 2026-09-03.

**Provenance caveat, stated once.** Every URL below was fetched in-session. Extraction ran through a
summarising model, not a raw read, so a quote may differ from the page by whitespace or punctuation.
Before appending any claim in §G to the ledger, re-verify the quote against the live page. Expect
`RESOLVER_FAIL` otherwise.

**Lens exception carried:** `requires_claims: [user-language]` is unsatisfiable; ICP is OPEN by founder
decision; logged exception `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10.

---

## §0 — What already exists in the repo

`apps/web/scripts/` holds twelve scripts. Read, not run:

| Script | What it measures or does |
|---|---|
| `scrub-fps.mjs` | Frame-time capture for the pinned scrub at 4x CPU throttle, 1440x900. Scrolls the runway in 120 steps against a rAF probe. Reports `frames`, `avgMs`, `worstMs`, `over33` |
| `swarm-frames.mjs` | Screenshots a pinned scrub at named progress values. Default `0.12,0.3,0.45,0.58,0.75,0.95` on `[data-swarm-root]`. Honours `SHOT_LANG=he` for RTL |
| `measure-scores.mjs` | Turns a real Lighthouse JSON run into `public/scores.json`. Extracts performance, accessibility, LCP seconds, CLS. "the ONLY source the C5 trust tile may render from. No artifact → no tile" |
| `cdp-trace.mjs` | CDP trace capture |
| `axe-detail.mjs` | axe violation detail |
| `shot.mjs` | Screenshot capture |
| `brand-lint.mjs` | Brand rule lint |
| `generate-art.mjs` | Direct call to OpenAI `gpt-image-1` for the retired Field Journal pack. Resolves the key from env or `~/.beeond/openai.key`. Writes to gitignored `art-src/`. Carries a long `STYLE_LOCK` prompt constant |
| `despecular.py` `extract_spots.py` `flatten_paper.py` `normalize_paper.py` | Python post-processing of scanned or generated paper art |

Two facts follow. The scrub measurement harness the founder needs already exists and expects a
`[data-swarm-root]` element with a `data-p` progress attribute. And `generate-art.mjs` is a working
image-generation client, but it points at `gpt-image-1` and carries the retired Field Journal style,
so it is a pipeline to adapt, not to run.

---

## §A — Generation

### A.1 Higgsfield is a platform over many models, not one model

Its own homepage lists, verbatim: **Seedance 2.5** "The most advanced video model" · **Higgsfield
Genjutsu** "One upload in. Endless new visions out." · **Gemini Omni 1.1 Flash** "A new suite of
creative controls for video generation" · **Nano Banana Pro** · **Recraft V4 Styles** "Lock your style
once. Every image matches." · **Flux 3.0 Video Upscale** "Real detail, not stretched pixels. Up to 4K."
· **Cinema Studio 4.0** · **Supercomputer** · **MCP & CLI**.
`https://higgsfield.ai/` · 2026-09-03 · **high**

This matters for the 2026-09-01 decision "G3 produces mockups with Higgsfield and an image AI model".
Choosing Higgsfield is choosing a front end and a credit wallet, not a model. The underlying models are
Seedance, Gemini, Nano Banana, Flux and Recraft, most of which are also reachable directly.

### A.2 Soul, Higgsfield's own image model, and its one hard constraint

From the Higgsfield help centre:

> "When a reference image is attached in Soul, Soul 2.0, or Soul Cinema, the prompt field becomes unavailable."

`https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-soul-to-generate-images` ·
2026-09-03 · **high**

This is the single most consequential finding for founder decision §9 item 5, "real shoot as reference,
then generate to make sure it's 100% what we are looking for". On Soul, a reference image and a text
prompt are alternatives, not a combination. Reference-plus-direction requires either Soul ID, another
model on the platform, or a different vendor.

Also from that page: presets grouped as "General, TikTok Core, Instagram Aesthetics, Beauty, Mood,
Camera Photo, Graphic Art"; aspect ratios "9:16, 3:4, 2:3, 1:1, 4:3, 16:9, 3:2"; Soul 2.0 quality
"1.5k or 2k"; batch "Up to 4 per generation"; "Soul generations use credits at standard rates, with the
cost shown on the Generate button." · **high**

The preset taxonomy is social-media aesthetics. None of it is the documentary editorial register the
reference corpus asks for. Presets are a risk of pulling every render toward a look the founder has
already rejected.

Soul's marketing page describes it as a "hyper-realistic, fashion-grade AI photo model with 50+
aesthetic presets", emphasising skin texture, fabric grain and candid framing.
`https://higgsfield.ai/soul` · 2026-09-03 · **medium** (marketing copy, not a spec)

### A.3 Soul ID, the consistency mechanism

> reference images: "20+ recommended, up to 80 accepted", "960px or higher per photo for best quality"
> training time: "3 to 5 minutes"
> cost: "25 credits, which is ~$1.25"
> guidance: avoid "sunglasses, masks, and extreme expressions"; avoid "switching style presets too frequently"

The page notes pricing "reflects standard credit consumption as of June 2026".
`https://higgsfield.ai/blog/sould-id-best-character-consistency` · 2026-09-03 · **medium** (vendor blog)

Read against founder decision §9 item 5: a real shoot of one person, 20 to 80 frames at 960px or more,
is exactly the input Soul ID wants. That is the sourced route from "shoot as reference" to "generate
consistently". It costs about one dollar to train and produces a reusable identity.
### A.4 Credits

> "Credits are deducted for all generations on web, MCP, CLI, Canvas, and Supercomputer: images, videos, re-rolls, and upscaling."
> "The credit cost is shown on the Generate button before you confirm."
> "No. Subscription credits expire at the end of each billing cycle."

`https://higgsfield.ai/creator-hub/help-center/credits/how-credits-work` · 2026-09-03 · **high**

Higgsfield publishes **no per-model credit table** on its own help pages. Cost is discoverable only in
the product, at the moment of generating. Its own comparison blog gives two data points for video:
Seedance 2.5 at 720p for 8 seconds is "52 credits" and about "$2.55"; at 480p for 8 seconds it is "24
credits"; the cheapest Higgsfield tier carrying Seedance 2.5 is "$49 for 1,000 credits"; and "Seedance
2.5 generates at 480p and 720p".
`https://higgsfield.ai/blog/seedance-2-5-pricing-2026` · 2026-09-03 · **medium** (vendor's own
competitive marketing; the Higgsfield figures are self-reported, the competitor figures are not
independently verified here)

**Implication for Layer 4b.** The scroll set-piece needs one 4 to 6 second clip. At 720p that is roughly
one Seedance generation at about $2.55, plus re-rolls. Re-rolls are charged. The budget risk is
iteration count, not unit price.

### A.5 The API

Base documentation at `https://docs.higgsfield.ai/`. The index covers quickstart, authentication, how
the API works, requests and lifecycle, polling, webhooks, file uploads, errors and retries, rate
limits, billing and retention, and Python and TypeScript SDKs. An OpenAPI spec sits at
`/docs/openapi.json`. The quickstart's only endpoint is
`https://api.higgsfield.ai/higgsfield-ai/soul/v2/standard`, called with a text prompt alone, no
reference or resolution parameters shown.
`https://docs.higgsfield.ai/docs/llms.txt` and `https://docs.higgsfield.ai/docs/quickstart` ·
2026-09-03 · **high**

**The model catalogue is not in the public docs index.** Parameters for reference conditioning,
resolution and duration are not documented at the index level. Anyone automating this must read
`openapi.json`. That is a real integration cost and it is not visible from the marketing site.

### A.6 The same jobs outside Higgsfield

**OpenAI GPT Image.** Models documented: `gpt-image-2` (latest), `gpt-image-1.5`, `gpt-image-1`,
`gpt-image-1-mini`.

> text rendering: "Although significantly improved, the model can still struggle with precise text placement and clarity."
> editing: "Modify existing images using a new prompt, either partially or entirely."
> masks: "The image to edit and mask must be of the same format and size (less than 50MB in size)."
> sizes: "Maximum edge length must be less than or equal to 3840px", "Both edges must be multiples of 16px"
> quality: "low, medium, high"

`https://developers.openai.com/api/docs/guides/image-generation` · 2026-09-03 · **high**

The edits endpoint accepts a prompt **and** reference images together. That is the capability Soul lacks.
`WEBSITE-DESIGN-PROCESS.md` §7 already names GPT Image 2 as "Strongest at legible text inside a
generated design", and the vendor's own caveat above qualifies that: improved, still imperfect.

**Google.** Veo 3.1 "is a model for generating video with native audio. It supports features like video
extension, frame-specific generation, and image-based direction through the `generateContent` API."
`https://ai.google.dev/gemini-api/docs/video` · 2026-09-03 · **high**

Published prices per second of video: Standard "0.40 (720p and 1080p)" and "0.60 (4k)"; Fast "0.10
(720p)", "$0.12 (1080p)", "0.30 (4k)"; Lite "0.05 (720p)" and "0.08 (1080p)". Images: Gemini 3.1 Flash
Image, also called Nano Banana 2, outputs at "$60.00 (images)" per million tokens, working out at about
"$0.045 per 0.5K image" through "$0.151 per 4K image". Gemini 2.5 Flash Image is "$0.039 per image",
batch "$0.0195 per image". Gemini 3.1 Flash Lite Image is "$30.00 (images)" per million tokens, about
"$0.0336 per 1K resolution image".
`https://ai.google.dev/gemini-api/docs/pricing` · 2026-09-03 · **high**

A 5 second Veo 3.1 Fast clip at 720p is therefore about $0.50 direct, against roughly $2.55 for a
Seedance clip through Higgsfield. Direct API access is materially cheaper per unit; Higgsfield sells
presets, motion controls and a UI.

**Runway.** Credits are "$0.01 per credit in the developer portal for an organization". Sampled
per-model costs: `gen4_image_turbo` "2 credits per image, any resolution"; `muse_image` "1 credit per
image, any resolution"; `wan3` "5 credits per second" at 480p and "20 credits per second" at 1080p;
`veo3.1 (audio)` "40 credits per second"; `seedance2 (4K)` "150 credits per second".
`https://docs.dev.runwayml.com/guides/pricing` · 2026-09-03 · **high**

Runway describes Seedance 2.5 as "Cinematic video up to 30 seconds with a large reference budget for
images, videos, and audio".
`https://docs.dev.runwayml.com/` · 2026-09-03 · **high**

That phrase, "a large reference budget for images, videos, and audio", is the direct answer to the
founder's reference-then-generate requirement for video, and it is available on Runway at $0.01 per
credit with published rates.

**Black Forest Labs FLUX.** FLUX 3 is "one model, one API": text-to-video "Generate motion from a
prompt, with synchronized audio included"; image-to-video "Animate a still or pin keyframes into a
clip"; audio "Multilingual speech, effects, and ambience rendered with the frames." "FLUX.2 remains
fully supported for production image generation and editing." "FLUX.2 [klein] and [dev] models" are
self-hostable via Hugging Face. No pricing on the docs index.
`https://docs.bfl.ai/` · 2026-09-03 · **high** for the quotes, and pricing is a gap

Self-hosting FLUX.2 is the only route on this list with no per-image cost and no vendor terms on
output. It carries infrastructure cost instead.

**Midjourney.** `https://docs.midjourney.com/hc/en-us/articles/32202399015821-Style-Reference` returned
HTTP 403. Style Reference, Character Reference and Omni Reference are **unverified** in this session.
Gap G3.

### A.7 What could not be sourced about model quality

No primary, current source was found for how any 2026 model handles **faces, hands, photoreal grain or
legible text in image** as measured capabilities. Vendor marketing asserts realism; that is not
evidence. The only sourced limitation statement of this kind in the whole session is OpenAI's own text
caveat in A.6. Everything else is **UNKNOWN**. Gap G1.

`SITE-SPEC` §4B in the session plan already records the internal observation that "the one generated
face in the set (B21) is the one the agents flagged". That is a founder-side observation, not an
external source, and it should stay labelled that way.
---

## §B — Free and owned sources

### B.1 The licences, verbatim

**Unsplash, free tier.** The licence grants an "irrevocable, nonexclusive, worldwide copyright license
to download, copy, modify, distribute, perform, and use images from Unsplash for free, including for
commercial purposes, without permission from or attributing the photographer or Unsplash." Not
permitted: "Images cannot be sold without significant modification." and "Compiling images from
Unsplash to replicate a similar or competing service."
`https://unsplash.com/license` · 2026-09-03 · **high**

**Unsplash+.** "$12/month" regular, "$4/month" promotional; "$48/year" promotional, "$144/year"
regular. "All visuals are model and property released. Can be used in any commercial project and are
backed by Unsplash+ Protection."
`https://unsplash.com/plus` · 2026-09-03 · **high** for the quote

**Inference, marked as inference.** Unsplash advertises model and property release as a paid-tier
feature. The free licence page makes no release warranty. The reasonable reading is that free Unsplash
images carry **no guarantee of a model release**. This is an inference from the absence of a warranty,
not a quoted statement. **medium**

**Pexels.**
> "All photos and videos on Pexels are free to use."
> "Attribution is not required."
> "You can modify the photos and videos from Pexels."
> "Identifiable people may not appear in a bad light or in a way that is offensive."
> "Don't sell unaltered copies of a photo or video, e.g. as a poster, print or on a physical product without modifying it first."
> "Don't imply endorsement of your product by people or brands on the imagery."
> "Don't redistribute or sell the photos and videos on other stock photo or wallpaper platforms."
> "Don't use the photos or videos as part of your trade-mark, design-mark, trade-name, business name or service mark."

`https://www.pexels.com/license/` · 2026-09-03 · **high**

**Pixabay.** Free use, no attribution required. Prohibited: you cannot "sell or distribute Content
(either in digital or physical form) on a Standalone basis" substantially unchanged; "If Content
contains any recognisable trademarks, logos or brands, you cannot use that Content for commercial
purposes in relation to goods and services"; you cannot "use Content in any immoral or illegal way,
especially Content which features recognisable people"; and no use "as part of a trade-mark,
design-mark, trade-name, business name or service mark". The summary warns that "certain Content may be
subject to additional intellectual property rights".
`https://pixabay.com/service/license-summary/` · 2026-09-03 · **high**

**Wikimedia Commons.** Commons accepts only files "not subject to copyright restrictions which would
prevent them being used *by anyone, anytime, for any purpose*". Mandatory: "Republication and
distribution *must* be allowed." "Publication of derivative work *must* be allowed." "Commercial use of
the work *must* be allowed." Attribution "may be required" and same-licence republication "may be
required", per file. Non-commercial and no-derivatives licences are forbidden on Commons.
`https://commons.wikimedia.org/wiki/Commons:Licensing` · 2026-09-03 · **high**

Commons is per-file, not per-site. Using it means reading each file's licence. A CC BY-SA file used as
a site background can propagate share-alike obligations onto derivative work.

**NASA.** "NASA content – images, audio, video, and media files used in the rendition of 3-dimensional
models... generally are not subject to copyright in the United States." "If the NASA material is to be
used for commercial purposes, including advertisements, it must not explicitly or implicitly convey
NASA's endorsement of commercial goods or services." "The NASA Insignia, Logotype, identifiers, and
imagery are not in the public domain." "If a NASA image, audio, video or media includes an identifiable
person, using the media for commercial purposes may infringe that person's right of privacy or
publicity, and permission should be obtained from the person." Third-party material NASA uses under
permission conveys no rights to others.
`https://www.nasa.gov/nasa-brand-center/images-and-media/` · 2026-09-03 · **high**

A marketing site is a commercial use. NASA imagery is usable on it, but the endorsement line means it
cannot sit adjacent to a claim in a way that implies NASA backs Beeond.

**Public-domain classical painting.** The underlying painting is out of copyright by age. Whether a
**photograph of** a two-dimensional public-domain painting attracts a new copyright varies by
jurisdiction and was **not verified in this session**. Gap G4.

### B.2 Which of the site's subjects the licences actually constrain

The binding constraint is not availability, it is **identifiable people**. Every free library above
restricts or disclaims commercial use of recognisable persons, and none of them warrants a model
release on the free tier.

That lands directly on readback statement §3 item 2: "People are shot from below, in sun, one warm
garment, looking up or away." A stock photograph of an identifiable person, used on a commercial
marketing site next to a service claim, is the highest-risk asset class on this site under every
licence read above. Subjects with **no identifiable person** are not constrained this way: sky,
flowers, textures, aerial, macro botanical, hands where no face is present.

**Not verified:** how well each library actually covers sky, flowers, hands, textures, aerial and macro
skin by volume and quality. I did not search the libraries themselves. Gap G5.

---

## §C — The treatment layer must be code

### C.1 The one distinction that decides the architecture

**Ordered dithering is parallel; error diffusion is sequential.** From the Efecto build write-up:

> "Dithering runs on the CPU. Error diffusion is inherently sequential since each pixel depends on previously processed pixels."

`https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/`
· 2026-09-03 · **high**

Ordered (Bayer) dithering, by contrast, runs as a fullscreen post-processing pass: pixelate the frame,
compute luminance per pixel, compare against a 4x4 Bayer threshold matrix, with "adjustable dithering
grid resolution and pixelation strength".
`https://github.com/niccolofanton/dithering-shader` · 2026-09-03 · **high**

For a site with an LCP floor under one second, a per-frame CPU pass over pixel data is the wrong shape.
The dot-matrix halftone of `DESIGN-LANGUAGE.md` Layer 3 moment 2 is a threshold-per-cell operation,
which is the parallel kind.
### C.2 ASCII and glyph fields, two implementations with opposite costs

**three.js `AsciiEffect` writes to the DOM.** It draws the WebGL render to a canvas, reads pixels,
computes brightness, maps to a character ramp, and writes HTML into a table:

> `oAscii.innerHTML = `<tr><td style="display:block;width:${width}px;height:${height}px;overflow:hidden">${strChars}</td></tr>`;`

with the default ramp `' .,:;i1tfLCG08@'` and index `Math.round( ( 1 - fBrightness ) * maxIdx )`.
`https://github.com/mrdoob/three.js/blob/dev/examples/jsm/effects/AsciiEffect.js` · 2026-09-03 · **high**

**Implication, flagged as inference, not source.** Rewriting `innerHTML` every animation frame forces
parse and layout on the main thread each frame. That is the opposite of what an INP under 200ms and a
CLS of 0 want. `AsciiEffect` is a demo technique, not a production one for this floor. **medium**

**Efecto draws glyphs procedurally in the shader**, with no font atlas:

> "The challenge: shaders don't have fonts. You can't just call `drawText()`. Everything has to be math."

Characters are drawn on a 5x7 grid by mathematical functions returning filled or empty per position;
the shader divides the screen into cells, samples colour at each cell centre, computes brightness and
selects a character. Its stack is three.js plus `postprocessing` plus React Three Fiber, on WebGPU with
a Canvas 2D fallback. Its own performance note: "Complex shaders with lots of post-processing can drop
frame rates significantly, especially on older hardware."
Same URL · 2026-09-03 · **high**

**WebGPU is not safe to depend on.** MDN: "Limited availability. This feature is not Baseline because
it does not work in some of the most widely-used browsers."
`https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API` · 2026-09-03 · **high**

So the Efecto stack's fast path is the path many visitors would not get. Its Canvas 2D fallback is what
would actually run for them.

Also available, not fetched in depth: `glsl-halftone` (glslify), a halftone effect in GLSL published as
an npm package and adapted from Stefan Gustavson's work. `https://github.com/glslify/glsl-halftone` ·
2026-09-03 · **low** (identified through search results, not read)

### C.3 If it is Canvas 2D, MDN's own optimisation rules bite directly

> "If you find yourself repeating some of the same drawing operations on each animation frame, consider offloading them to an offscreen canvas."
> "make sure to round all co-ordinates used in calls to `drawImage()` using `Math.floor()`"
> "CSS transforms are faster since they use the GPU. The best case is to not scale the canvas, or have a smaller canvas and scale up rather than a bigger canvas and scale down."
> "Batch canvas calls together"
> "Avoid text rendering whenever possible"

`https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas` · 2026-09-03 · **high**

Two of these are decisive here. "Avoid text rendering whenever possible" is a direct warning against a
`fillText`-per-cell ASCII field. And "have a smaller canvas and scale up" is exactly what
`DESIGN-LANGUAGE.md` Layer 4b already specifies for the frame sequence: "modest pixel dimensions scaled
up by canvas". The design language and MDN agree.

### C.4 Getting the work off the main thread

`OffscreenCanvas` is "Baseline Widely available", "available across browsers since March 2023", and
"Rendering operations can also be run inside a worker context, allowing you to run some tasks in a
separate thread and avoid heavy work on the main thread." It is a transferable object.
`https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas` · 2026-09-03 · **high**

This is the sourced route to keeping a per-cell renderer from competing with scroll handling.

### C.5 Vector motion, as an alternative to a raster field

**Lottie.** Renderers are svg, canvas and html, selected by a `renderer` parameter. Guidance:
"gzipping the animation jsons and the player have a huge reduction on the filesize"; "This is real time
rendering. Although it is pretty optimized, it always helps if you keep your AE project to what is
necessary"; "try not to use huge shapes in AE only to mask a small part of it. Too many nodes will also
affect performance"; a quality setting accepts "'high','medium','low', or a number > 1 to improve
player performance".
`https://github.com/airbnb/lottie-web` · 2026-09-03 · **high**

**Rive.** The recommended `@rive-app/webgl2` package "draws with the Rive Renderer, the same renderer as
the Rive Editor, so it supports everything you can author in Rive." Canvas2D packages are also
published. **No runtime size figure is published on that page.**
`https://rive.app/docs/runtimes/web/web-js` · 2026-09-03 · **high** for the quote, size is Gap G6

Neither is a fit for the founder's stated mechanism. Both animate authored vector art. The design
language's law is that "The effect must be derived from the subject, not applied to it", which means
the marks must be computed from a photograph's pixels. That is a raster operation.

### C.6 If WebGL is used, the library choice is a payload decision

OGL states its own minzipped sizes: core "8kb", math "6kb", extras "15kb", total "29kb", with
tree-shaking able to reduce further. Licence is the Unlicense, public domain. It is "a Minimal WebGL
library" for developers wanting low abstraction and custom shaders, with an API similar to three.js.
The README makes **no** three.js size comparison, so none is asserted here.
`https://github.com/oframe/ogl` · 2026-09-03 · **high**

A single fullscreen fragment shader over one texture, which is all a dot, halftone or glyph conversion
needs, does not require a 3D scene graph. OGL at 29kb is a sourced floor for the WebGL route.

**Third-party, low confidence, recorded because it is the only figure found for the alternative:** one
2026 industry blog claims "A site with a single Spline scene in the hero loads 800kB to 2MB of
JavaScript runtime before the user sees anything. Lighthouse scores collapse."
`https://www.hontran.dev/blog/best-award-winning-websites-2026` and
`https://digitalstrategyforce.com/journal/why-are-immersive-experiences-dominating-the-2026-awwwards/`
· 2026-09-03 · **low** (unverified blog claim, no methodology). Overlaps packet S1B.
### C.7 How "a swarm of dots assembles into an artefact" gets built

Three routes exist. Only the third is measurable by the harness already in this repo.

1. **Per-cell fragment shader over a texture.** One fullscreen pass; each cell samples the source image,
   computes brightness, and modulates radius, occupancy or ramp weight. Matches
   `ART-DIRECTION-BRIEF.md` §3's three modulations exactly. Assembly is animated by interpolating cell
   positions or by animating a mask over the field. Cost is one draw call. Confidence in the mechanism
   is **high**; no benchmark for this specific case was found.
2. **GPU particle system with morph targets.** Points positioned from a scattered start state and
   interpolated toward positions sampled from the target artefact. `THREE.Points` with a
   `BufferGeometry` position attribute is the standard pattern; the three.js docs page did not return
   the verbatim class description in this session, so this is **medium** confidence and rests on the
   common pattern rather than a quote. Cost scales with particle count.
3. **Pre-rendered frame sequence scrubbed on canvas.** Already specified in `DESIGN-LANGUAGE.md` Layer
   4b: generate, extract with ffmpeg, treat each frame through the site's mark renderer at build time,
   encode to AVIF or WebP, drive with GSAP ScrollTrigger `pin` and `scrub: true`, `drawImage` to canvas.
   Budget: 90 frames maximum, 1.5MB total, below the fold, static poster under reduced motion, must
   clear `scrub-fps.mjs` at 4x throttle. Zero per-frame shader cost at runtime. **This is the only one
   of the three that `scrub-fps.mjs` and `swarm-frames.mjs` already measure.**

### C.8 What "a mid-range phone" means, measurably

No independent mid-range-phone benchmark for these techniques was found. What is sourced is the proxy
the repo already uses. Lighthouse "uses a constant 4x CPU multiplier", which "moves a typical run in the
high-end desktop bracket somewhere into the mid-tier mobile bracket", with network "Latency: 150ms" and
"Throughput: 1.6Mbps down / 750 Kbps up".
`https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md` · 2026-09-03 · **high**

`scrub-fps.mjs` sets exactly this rate, `Emulation.setCPUThrottlingRate` at 4. The existing gate is
already calibrated to the mid-tier mobile bracket. Gap G7 remains: real-device numbers.

---

## §D — The motion stack

### D.1 GSAP is free, including commercially

> "GSAP is now 100% free for all users, thanks to Webflow's support."

`https://gsap.com/pricing/` · 2026-09-03 · **high**

The standard licence permits "implementation and/or use of GSAP Products on any website, web
application, or digital interface by any person or entity". Restrictions cover "Prohibited Uses",
described as visual animation builders competing with Webflow, plus reverse engineering for competing
products and removing proprietary notices. "Commercial usage is covered under the standard license",
including formerly paid plugins such as SplitText and MorphSVG.
`https://gsap.com/community/standard-license/` · 2026-09-03 · **high**

ScrollTrigger and ScrollSmoother are both in the free set. The 2024 Webflow change is confirmed as
still in force on the vendor's own pages today. Beeond is not building an animation builder, so no
prohibited use applies.

### D.2 GSAP in Next.js 16 and React 19

> "useGSAP() is a drop-in replacement for useEffect() or useLayoutEffect() that automatically handles cleanup"
> "If you're using the app router / react server components, you need to drop a 'use client' at the top of your file for useGSAP() to work"
> "React 18 runs in strict mode locally by default which causes your Effects to get called TWICE"

It implements `useIsomorphicLayoutEffect`, preferring `useLayoutEffect` and falling back to
`useEffect` when `window` is undefined, and is "safe to use in Next or other server-side rendering
environments, provided it is used in client-side components".
`https://gsap.com/resources/React` · 2026-09-03 · **high**

The page addresses React 18 strict mode. **React 19 specifically is not named**, so the React 19 fit is
an extrapolation, marked **medium**. Every animated section becomes a client component, which is a
bundle-shape consequence for an App Router site.

### D.3 Reduced motion, sourced patterns

`prefers-reduced-motion` "is used to detect if a user has enabled a setting on their device to minimize
the amount of non-essential motion", with values `no-preference` and `reduce`. Baseline widely
available, "available across browsers since January 2020".
`https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion` · 2026-09-03 · **high**

GSAP's own mechanism is `gsap.matchMedia()` with a condition object including
`reduceMotion: "(prefers-reduced-motion: reduce)"`. The handler destructures `context.conditions` and
branches, for example `duration: reduceMotion ? 0 : 2`. "It will revert and run the handler function
again if/when **any** of the conditions toggle." `gsap.matchMediaRefresh()` reverts and reruns matching
objects immediately.
`https://gsap.com/docs/v3/GSAP/gsap.matchMedia()` · 2026-09-03 · **high**

Lenis is MIT licensed, "a lightweight, robust, and performant smooth scroll library", "a few KB with
zero runtime dependencies". Critically: "By default, Lenis honors the user's `prefers-reduced-motion`
setting: when it is set to `reduce`, smoothing is disabled" and "programmatic scrolls jump instantly to
their target." A `lenis.prefersReducedMotion` property is exposed, and the default can be opted out of.
`https://github.com/darkroomengineering/lenis` · 2026-09-03 · **high**

That default is a genuine reason to prefer Lenis over a hand-rolled smooth scroll. It is also
opt-out-able, which is a review item, not a given.
### D.4 What the accessibility standard actually requires

**WCAG 2.2.2 Pause, Stop, Hide, Level A.** For moving, blinking or scrolling information that starts
automatically, lasts more than five seconds and is presented in parallel with other content, there must
be a mechanism to pause, stop or hide it. "five seconds was chosen because it is long enough to get a
user's attention, but not so long that a user cannot wait out the distraction if necessary to use the
page."
`https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html` · 2026-09-03 · **high**

**WCAG 2.3.3 Animation from Interactions, Level AAA.** "Motion animation triggered by interaction can be
disabled, unless the animation is essential to the functionality or the information being conveyed."
Scrolling new content into view is essential and allowed; decorative elements moving at different rates
should be preventable.
`https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html` · 2026-09-03 · **high**

Two consequences for `DESIGN-LANGUAGE.md` Layer 3 moment 3 and the readback's "particle swirl at the top
and the close". A looping ambient animation longer than five seconds at Level A needs a control. The
design language already says "nothing loops", which keeps it clear. Scroll-scrubbed motion is
user-driven and stops when the user stops, which is a different case from autoplay.

**Not verified:** which of these the repo's axe run actually flags. axe automates a subset; 2.3.3 at
Level AAA is largely a manual check. "Zero axe violations" is therefore necessary and not sufficient for
the motion rules above. Gap G8.

### D.5 CSS scroll-driven animation cannot carry this yet

MDN on `animation-timeline`: "Limited availability. This feature is not Baseline because it does not
work in some of the most widely-used browsers."
`https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline` · 2026-09-03 · **high**

The native `scroll()` and `view()` timelines would be the cheapest possible scroll-linked motion, with
no JavaScript. They are not portable in 2026. GSAP ScrollTrigger stays the mechanism, with CSS
scroll-timeline usable only as a progressive enhancement.

### D.6 View Transitions is now newly Baseline

`Document.startViewTransition()`: "Baseline 2025 - Newly available", "Since October 2025, this feature
works across the latest devices and browser versions. This feature might not work in older devices or
browsers." It starts a same-document, document-scoped transition. The documented pattern is a support
check with a plain fallback, `if (!document.startViewTransition) { ... }`.
`https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition` · 2026-09-03 · **high**

**Cross-document view transitions**, needed for page-to-page motion across the four planned pages, were
**not separately verified**. Gap G9.

### D.7 Motion for React

Motion, formerly Framer Motion, exposes "a `motion` component for every HTML and SVG element". It
animates outside React's render cycle and targets transform and opacity on the compositor thread. **No
bundle size figure appears on the documentation page fetched.**
`https://motion.dev/docs/react-motion-component` · 2026-09-03 · **medium** for the mechanism, size
unpublished on that page

### D.8 What each stack costs against the floor

The floor from `WEBSITE-DESIGN-PROCESS.md` §8 is stricter than the web standard, and both numbers matter:

| Metric | Web standard | Beeond floor |
|---|---|---|
| LCP | "Good LCP values are 2.5 seconds or less, poor values are greater than 4.0 seconds" (`https://web.dev/articles/lcp`, 2026-09-03, high) | under 1 s, real CDP trace |
| INP | "An INP below or at 200 milliseconds means a page has good responsiveness" (`https://web.dev/articles/inp`, 2026-09-03, high) | not separately specified |
| CLS | not quoted here | 0 |
| Lighthouse | not applicable | ≥95 across the board |

**One sourced trap.** LCP candidate elements include "`<video>` elements" measured by poster image or
first frame, and "An element with a background image loaded using the `url()` function", as well as
block-level elements containing text.
`https://web.dev/articles/lcp` · 2026-09-03 · **high**

So a full-bleed hero photograph, a hero background image, or a hero video poster **is** the LCP element.
The under-one-second floor is a constraint on the hero asset's encoded weight above everything else.
`DESIGN-LANGUAGE.md` Layer 4b's rule that the set-piece must sit below the fold and "must never be the
LCP element" is the correct control, and it is already written.

---

## §E — Showing a system that does not exist yet, honestly

### E.1 The United States position

An ad is deceptive if it "contains a statement - or omits information - that is likely to mislead
consumers acting reasonably under the circumstances; and is 'material.'" An ad or practice is unfair if
it "causes or is likely to cause substantial consumer injury which a consumer could not reasonably
avoid; and it is not outweighed by the benefit to consumers."

On disclosures: "When the disclosure of qualifying information is necessary to prevent an ad from being
deceptive, the information should be presented clearly and conspicuously so that consumers can actually
notice and understand it." The guidance warns against fine print, buried disclaimers and easily-missed
website disclaimers.

On evidence: "Before a company runs an ad, it has to have a 'reasonable basis' for the claims. A
'reasonable basis' means objective evidence that supports the claim."
`https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business` · 2026-09-03 ·
**high**

The underlying framework is the 1983 FTC Policy Statement on Deception, whose three elements are a
representation, omission or practice likely to mislead; assessed from the perspective of a consumer
acting reasonably; and material.
`https://www.ftc.gov/system/files/documents/public_statements/410531/831014deceptionstmt.pdf` ·
2026-09-03 · **medium** (identified via search result summary; the PDF itself was not fetched in full)
### E.2 The United Kingdom position, which is sharper on imagery

CAP Code, non-broadcast, section 3:

> 3.1 "Marketing communications must not materially mislead or be likely to do so."
> 3.2 "Obvious exaggerations ('puffery') and claims that the average consumer who sees the marketing communication is unlikely to take literally are allowed provided they do not materially mislead."
> 3.3 "Marketing communications must not omit material information or information required to be included by law. This includes providing such information in a way that is unclear or untimely..."
> 3.7 "Before distributing or submitting a marketing communication for publication, marketers must hold documentary evidence to prove claims that consumers are likely to regard as objective and that are capable of objective substantiation."
> 3.11 "Marketing communications must not mislead consumers by exaggerating the capability or performance of a product."

`https://www.asa.org.uk/type/non_broadcast/code_section/03.html` · 2026-09-03 · **high**

On imagery specifically:

> "Images which give an inaccurate impression about the product consumers will receive, for example, by featuring the wrong product, including extras, or by exaggerating the quality or size of the product, are likely to mislead."
> "Marketers should ensure that any images used do not have the effect of exaggerating the capability or performance of a product."
> "A qualification or small print such as 'Not representative of actual gameplay' is generally unlikely to prevent an ad from misleading consumers."

`https://www.asa.org.uk/news/a-picture-says-a-thousand-words-avoiding-misleading-imagery-in-ads.html` ·
2026-09-03 · **high**

And on AI-generated imagery:

> "disclosure alone is very unlikely to mitigate the harm caused by a fundamentally misleading message"
> "There is no blanket legal requirement in the UK to disclose the use of AI in ads."

with the nuance that "making clear that deepfake content featuring in an ad is only being used for
comedic effect or that an influencer is AI-generated, could well help to negate an otherwise misleading
impression". The recommended test is two questions: would the audience be misled without disclosure, and
does the disclosure clarify or contradict the message.
`https://www.asa.org.uk/news/disclosure-of-ai-in-advertising-striking-the-balance-between-creativity-and-responsibility.html`
· 2026-09-03 · **high**

### E.3 What this means for the dashboard scene, stated as findings only

Founder decision §9 item 3 permits "designed illustrations of the mechanism", never "a fake product
screenshot carrying fake client data". Read against the sources above, three things are established and
one is not.

**Established.** A label does not cure a misleading image; the ASA says so directly about exactly this
kind of qualification. Materiality is the test, not the presence of a caption. Evidence must exist
before the claim is published, not after. And a disclosure that contradicts the main message fails,
while one that clarifies an otherwise-honest message can help.

**Not established.** Whether "the ledger writes itself line by line as you scroll" reads to a visitor as
a capability claim or as an illustration. That is an audience question, and no research substitutes for
putting it in front of the two warm prospects.

### E.4 The examples I could not find

Three searches with different framings returned no named examples of pre-launch companies labelling
concept visuals, and no published design-community norm on the practice. Stock-illustration
marketplaces dominate every result. The nearest verified convention is consumer electronics'
"Screen images simulated" superscript, and even that is sourced only from third-party reporting, not
from a primary vendor page.
`https://www.mouseprint.org/2018/05/28/samsung-compares-apple-and-oranges/` · 2026-09-03 · **low**

The brief asked for four to six examples. I have zero at usable confidence. Gap G2, and it is the
largest hole in this packet.
---

## §F — The decision table

**These are routes with their costs and risks, not recommendations.** Where evidence forecloses a route,
that is marked. Every asset kind is from the session plan §10.

| # | Asset | Routes available | What the evidence says | Risk | Pipeline, brief to page |
|---|---|---|---|---|---|
| 1 | **Hero photograph** | shoot · generate · free | Free libraries do not warrant a model release (§B.1); Soul disables the prompt when a reference is attached (§A.2); Soul ID accepts 20 to 80 shot frames and trains in 3 to 5 min for about $1.25 (§A.3) | This is the LCP element (§D.8). Identifiable-person licensing is the highest legal risk on the site. Generated faces are the founder's own stated failure point | Shoot 20 to 80 frames at 960px+ → train Soul ID → generate against the spec's 0s/3s/10s description → treat through the mark renderer at the dial the spec names → encode → ship as a static image, never as video |
| 2 | **Swarm particle field** | code only | Three build routes in §C.7. Only the pre-rendered scrub is measurable by `scrub-fps.mjs` today. `AsciiEffect`'s per-frame `innerHTML` is the wrong shape for this floor (§C.2) | Live shader is the highest-fidelity and least-measured route. WebGPU is not Baseline (§C.2) | Route 3, already specified: Higgsfield or Veo clip → ffmpeg extract → treat frames at build time → AVIF or WebP, ≤90 frames, ≤1.5MB → ScrollTrigger `pin` + `scrub` → `drawImage` → `scrub-fps.mjs` at 4x + `swarm-frames.mjs` evidence |
| 3 | **Finished-piece artefacts: a post, a page, an email** | **owned** · generate | These are Beeond's own output. §9 item 5 names "all the things that we make as a company" | If generated, they are fake work samples, which is the ASA's "inaccurate impression about the product consumers will receive" (§E.2) | Screenshot or export the real artefact → crop to the artefact-card shape (`DESIGN-LANGUAGE.md` Layer 1, hard rectangle at system radius) → overlapping cards at varied depth, the `A03`/`C11` device already in `ART-DIRECTION-BRIEF.md` §9 |
| 4 | **Struck-through line card** | code · owned | Pure typography plus a rule. No asset needed | Fabricating the struck line invents a client artefact | Real or clearly-hypothetical text in the spec → set in Instrument Serif + IBM Plex Mono → the strike animated as a draw, reduced-motion substitute is the strike already drawn |
| 5 | **Ledger / record illustration** | code · **honesty-gated** | §E.2 in full. A caption does not cure a misleading depiction | Highest honesty risk on the site. Real data does not exist | Design the record as it will work → no client names, no fabricated volumes → the label must clarify, not contradict → put it in front of the two warm prospects before it is called done |
| 6 | **Footprint node map** | code | Geometry from the mark. No photographic source | Low. Becomes a "flowchart" tell if overused, against §9 item 3's "leave space for the art" | SVG or canvas node field → GSAP timeline lights nodes on scroll → reduced-motion shows the assembled map |
| 7 | **The field at three times of day** | generate · free · shoot | No identifiable person, so free libraries are usable (§B.2). Three consistent renders of one place is a set-consistency job; Recraft V4 Styles is marketed as "Lock your style once. Every image matches." (§A.1) | Three free photographs of three different fields will not read as one place | One source photograph → three treatments, or one generation set with a locked style → same crop, same grid pitch → static images |
| 8 | **Audit document** | code · owned | The audit is founder-prepared per DECISIONS 2026-09-02. A real one can exist before launch | Showing an audit that has never been produced is the same risk as row 5 | Produce one real audit → typeset it → the drawn-for-your-URL motion is code over that real layout |
| 9 | **Founder portraits** | **shoot only** | §B.2: every free licence restricts commercial use of recognisable people, and generated faces are the founder's own flagged failure | None if shot. Generating a founder's face is a misrepresentation of a named person | Photograph Adam and Yarden → organic cell-derived blob clip per Layer 1 → subtle dial setting |
| 10 | **Textures and backgrounds** | free · generate · code | Best-covered case: no people, no trademarks, so Unsplash, Pexels, Pixabay and Commons all clear (§B.1). Commons needs per-file licence reading | Low. Watch Pixabay's recognisable-trademark clause and Commons share-alike | Source or generate → treat → tile or full-bleed → static |
| 11 | **Company's own work samples** | **owned only** | §9 item 5 is explicit. Also the strongest answer to §9 item 7, that the concepts had "no connection to the company" | Inventory risk: what exists has not been listed. That is Q11a of Step 2 | Inventory what exists → select → screenshot or export → artefact cards |

**Cross-cutting pipeline, every asset.** Brief from `SITE-SPEC.md` → source or generate → treat through
the site's own mark renderer, never as a raw generated asset (`DESIGN-LANGUAGE.md` Layer 4b's rule) →
encode → place with an explicit LCP decision → verify with `measure-scores.mjs`, `axe-detail.mjs`,
`scrub-fps.mjs` and `swarm-frames.mjs` → binding QA gate.
---

## §G — GAPS

1. **G1. Model quality on faces, hands, photoreal grain and legible text.** Sought current primary
   capability statements or benchmarks for 2026 models. Found only OpenAI's own text caveat. Vendor
   marketing asserts realism without evidence. Everything else is UNKNOWN.
2. **G2. Named examples of pre-launch concept labelling.** Sought four to six. Three differently-framed
   searches returned stock-illustration marketplaces. No published design-community norm found. The
   regulatory position in §E is solid; the practice examples the brief asked for are absent.
3. **G3. Midjourney Style Reference, Character Reference and Omni Reference.** `docs.midjourney.com`
   returned HTTP 403. Not verified.
4. **G4. Photographs of public-domain paintings.** Whether a faithful reproduction of a 2D
   public-domain artwork attracts fresh copyright, and in which jurisdictions. Not verified. Relevant
   because the corpus uses classical paintings.
5. **G5. Free-library coverage by subject.** Whether sky, flowers, hands, textures, aerial and macro
   skin are well covered by volume and quality on each library. I read the licences, not the catalogues.
6. **G6. Rive web runtime size.** Not published on the runtime documentation page fetched.
7. **G7. Real mid-range-phone frame times** for per-cell shader, particle and scrub renderers. No
   independent benchmark found. The 4x Lighthouse proxy is sourced; real-device numbers are not.
8. **G8. What axe actually flags** among WCAG 2.2.2 and 2.3.3. "Zero axe violations" is necessary and
   probably not sufficient for the motion rules. Verifiable locally with `axe-detail.mjs`.
9. **G9. Cross-document View Transitions support.** Same-document `startViewTransition` is Baseline 2025.
   The cross-document form, needed for page-to-page motion, was not separately verified.

Also recorded, not a research gap: **Higgsfield publishes no per-model credit table** on any page it
owns. Cost is visible only on the Generate button in-product. Any budget for G3 has to be measured by
generating, not by reading.

---

## §H — claims_emitted

`.mcp.json` holds only `playwright`. The `claim-append` server is **absent**, so these are for
`orchestrator` to append, and `index_rebuilt` will be false until someone with a shell rebuilds
`.claude/ledger/index.json`. **Re-verify each quote against the live page before appending** (see the
provenance caveat in the status header).

| id | quote | source | valid_until |
|---|---|---|---|
| `c-gsap-free-all-users` | "GSAP is now 100% free for all users, thanks to Webflow's support." | https://gsap.com/pricing/ | 2027-09-03 |
| `c-higgsfield-soul-reference-disables-prompt` | "When a reference image is attached in Soul, Soul 2.0, or Soul Cinema, the prompt field becomes unavailable." | https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-soul-to-generate-images | 2026-12-03 |
| `c-css-scroll-timeline-not-baseline` | "This feature is not Baseline because it does not work in some of the most widely-used browsers." | https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline | 2027-03-03 |
| `c-asa-small-print-does-not-cure` | "A qualification or small print such as 'Not representative of actual gameplay' is generally unlikely to prevent an ad from misleading consumers." | https://www.asa.org.uk/news/a-picture-says-a-thousand-words-avoiding-misleading-imagery-in-ads.html | 2028-09-03 |
| `c-unsplash-no-sale-without-modification` | "Images cannot be sold without significant modification." | https://unsplash.com/license | 2027-09-03 |
| `c-lighthouse-4x-is-mid-tier-mobile` | "moves a typical run in the high-end desktop bracket somewhere into the mid-tier mobile bracket" | https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md | 2027-09-03 |
| `c-runway-credit-one-cent` | "Credits can be purchased for $0.01 per credit in the developer portal for an organization." | https://docs.dev.runwayml.com/guides/pricing | 2027-03-03 |
| `c-view-transitions-baseline-oct-2025` | "Since October 2025, this feature works across the latest devices and browser versions." | https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition | 2027-09-03 |
| `c-cap-3-11-no-exaggerated-performance` | "Marketing communications must not mislead consumers by exaggerating the capability or performance of a product." | https://www.asa.org.uk/type/non_broadcast/code_section/03.html | 2028-09-03 |
| `c-lenis-honors-reduced-motion` | "By default, Lenis honors the user's `prefers-reduced-motion` setting: when it is set to `reduce`, smoothing is disabled" | https://github.com/darkroomengineering/lenis | 2027-03-03 |
