---
title: Beeond Website v7 — Design Spec (Direction E · The Blueprint)
phase: 2b — Design Spec
author: Design-Lead
status: DRAFT — feeds concept build + Gate-3
date: 2026-07-09
binds_to:
  - Gate-2 ruling (founder): Direction E · The Blueprint + 3 amendments
  - 01-BRIEF.md · 04-BRAND-CONSTRAINTS.md · research/03-rtl-hebrew.md
  - briefs/2026-07-08-v7-strategy.md (8-section arc + wizard)
approved_visual_bar: concepts/wow/e1.png · concepts/wow/e2.png
register_reference: 02-references/oriol · 02-references/speakeasy (FOUNDER-PICK)
gates_restated: LH ≥90/95/100/100 · LCP<900ms · CLS<0.01 · WCAG AA · axe 0 serious/critical · brand-lint clean · 7 tokens (+ justified net-new)
---

# Beeond v7 — The Blueprint · Design Spec v1

> **What this is.** The Gate-2 pick (Direction E · The Blueprint) turned into a precise, buildable specification. It codifies the visual language, the type test, the layout system, every section, the motion doctrine, the wizard, and the art program. It is the input to the concept build → design-critic loop; the *locked* version of this document is Gate-3.
>
> **The pick (binding).** The drafted-honeycomb world of `e1.png`/`e2.png`: fine construction lines, hex comb as structure, **ONE** honey-built glowing cell, vellum-cream ground, honey-as-light. Under the register of **Oriol × Speakeasy** (type-as-art editorial display, whitespace as luxury, tight accent discipline, cream↔dark rhythm, artifact mocks as imagery).
>
> **Founder amendments (binding, fold into everything below):**
> 1. **No engineering dimension numbers.** No `14,6` / `R05` / `30°` / `A` callouts anywhere. The mockups' drafting numbers are killed.
> 2. **Annotations reference Beeond's real jobs** instead — small drawn labels/leader-marks tied to the actual work (content engine, SEO, ads, AI-answer visibility, email, social, analytics…). Implemented as **real HTML/SVG text (HE/EN), never baked into raster.**
> 3. **Type / text-layout / style register = Oriol × Speakeasy.** Bold editorial display, whitespace as luxury, tight accent discipline, split/asymmetric headlines, cream↔dark rhythm, artifact mocks as imagery.

---

## 0. What we keep from the running build (don't reinvent)

The v6 code already ships the executable brand constitution — this spec **extends** it, it does not restart it. Reuse verbatim:

- **Tokens + Tailwind lockdown** — `globals.css` `@theme` deletes the default palette; only the 7 tokens compile. Keep.
- **Type plumbing** — Rubik variable, self-hosted, `unicode-range` HE/EN split, `Rubik Fallback` metric-matched to Arial (kills swap-CLS on the LCP H1). Keep; this spec only adds the **display** face on top.
- **Motion primitives** — `--ease-settle/swift/exit`, the 6-step duration ladder `--dur-1…6`, `[data-reveal]` scroll-reveal (hidden state only under `html.js`, JS-off = visible), `prefers-reduced-motion` rested-from-first-paint block. Keep.
- **Signature yellow underline** `.u-accent` (hand-tuned bar, not `text-decoration`, `box-decoration-break: clone`). Keep — it is already a fill-behind-ink accent, on-law.
- **CTA physics** `.cta` / `.cta-orb` (nested orb translate, RTL-mirrored vector), `.header-*` glass-pill-on-scroll + night mode, `.grain` fixed feTurbulence layer, i18n sibling-span toggle, `.hex-tile` clip-path comb, the swarm/chapters scrub machinery. Keep the machinery; **re-skin** appearance to the Blueprint language.
- **Components on disk** (`src/components/…`): `site-header`, `hive-mark`, `cta-button`, `eyebrow`, `locale-toggle`, `i18n`, `reveal-observer`, `hero/*`, `swarm/*`, `sections/*`, `channel-map/*`. This spec maps 1:1 onto these files (see §9).

**The reboot is a re-skin + one new device, not a new stack.** Everything below must compile against the existing token lockdown and pass `brand-lint`.

---

## 1. The visual system — the Blueprint language, codified

The Blueprint is a **drafting-table world**: warm vellum paper, fine construction linework laying out a honeycomb, and exactly one cell that has been *built* — filled with honey, glowing, casting light. The metaphor is the promise: *everyone else hands you a drawing; Beeond builds the cell.* The site's whole job is to make "drawn → built" legible.

### 1.1 Line system (the construction grid)

Three line weights, all rendered as SVG/CSS strokes (never raster), all derived from tokens:

| Role | Weight | Color | Usage |
|------|--------|-------|-------|
| **Construction hairline** | 0.5px @1x (1px physical hairline via `vector-effect: non-scaling-stroke`) | `vellum-line` (net-new, §9.2 — gold-tinted drafting ink, ~14% ink-on-cream) | The visible layout skeleton: the drafting grid, extension lines, the un-built comb outlines. Low presence — it *structures*, never shouts. |
| **Cell outline** | 1px | `hairline` `#E3DDD5` at full, or `vellum-line` on cream | The hex-comb cell borders (the "drawn" cells). Matches the existing `.hex-border` at reduced opacity. |
| **Leader line** | 0.75px, may include a 3px terminal dot | `muted` `#5C5751` | The **job-annotation** leaders (§1.4) — points from a drawn mark to a real HTML label. |

**Rules.** Construction lines are **gold-tinted ink, not `yellow`** — this is the critical discipline that keeps `#FFDB5B` scarce (see §1.3 + the conflict note in §10). Lines animate only by *drawing on* (`stroke-dashoffset`, reuse `.flight-path`), never by looping. At `prefers-reduced-motion`, all lines render fully drawn from first paint.

### 1.2 Hex-comb geometry as layout scaffold

The honeycomb is the **grid**, not decoration (Direction B's structural idea, executed inside E's drafting aesthetic):

- **Comb axis.** Pointy-top hexes (matches the on-disk `clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)`), on a 30°/60° isometric drafting axis — the E1 geometry.
- **Layout coupling.** Section content aligns to the comb: an asymmetric split hero (text column ↔ comb column), capability cards that *are* hex cells (reuse `.hex-tile`), the channel map as a comb constellation. The comb's implied baseline grid drives vertical rhythm (§3.3).
- **RTL.** The comb is mirrored with the layout — the *built* cell and the text column swap sides HE↔EN (see §3.1). The hex geometry itself is direction-neutral, so mirroring is a layout-side flip, not a glyph flip.

### 1.3 The ONE honey-built cell rule (the scarcity engine)

**Exactly one built, glowing honey cell per section maximum.** It is the visual embodiment of the 90/10 rest-to-accent law — a hard cap that *guarantees* yellow stays rare and loud.

- **Where it goes:** the built cell always marks the section's single most important thing — the primary CTA in the hero, the "active" job in the capability grid, the payoff cell in the footprint map, the convergence point in the swarm showpiece, the final CTA. If a section has no single hero-object, it gets **zero** built cells (drawn comb only). Never two.
- **What it means:** "this is the one Beeond built." The narrative device (§5) is the *transition* of a drawn cell into a built cell.
- **Anatomy** (reuse & extend `.hex-tile-anchor`):
  - Face: honey **fill** — the existing single-hue gradient `linear-gradient(180deg, yellow 52%, mix(yellow 84%, ink))`. This is a *fill behind ink*, on-law.
  - Rim: a 1px inner-wall ring (existing `.hex-face inset: 2px`) so it reads as a machined cell, not a sticker.
  - **Glow/bloom:** a separate decorative radial layer (§1.3.1) — the "honey-as-light."
- **Label on the built cell:** if it carries text (e.g. a job name, "audit"), text is **`ink` on the yellow fill** → AA+ (contrast law satisfied). Never `muted`/`ground` text on the fill.

#### 1.3.1 Honey-as-light (glow/bloom) — reconciled with the yellow-fill-only law

The founder responded to the *molten glowing cell casting light* in the mockups. We deliver it as **decorative light, structurally separated from any text-bearing surface** — this is how it coexists with the contrast law ("yellow is decorative/structural, never load-bearing text"):

- **Implementation:** CSS/SVG only — a tight `radial-gradient` halo (reuse the on-disk `.hex-tile-anchor .hex-face::after` pattern), optionally an SVG `feGaussianBlur`+`feFlood` bloom for the hero/showpiece macro cell. `pointer-events: none`, `aria-hidden`, carries **no text**.
- **Containment (anti-wash):** the bloom is a *tight, low-spread* halo confined to the cell's immediate surround (≤ ~1.3× cell radius), never a page-wide yellow field. Brand-constraints ban "yellow as a wash"; the one-cell rule + tight radius enforce that.
- **The law, precisely:** *fill* = allowed (behind ink). *Light/glow* = allowed (decorative, no text, not a contrast source). **Forbidden:** any `ground`/`muted`/`panel` text placed *on* the glow expecting the glow to make it legible. Text near the built cell always sits on cream (or on `deep` in dark sections) and gets its contrast from the ground, not the honey. `brand-lint` already flags yellow used as a text utility; add a lint note that glow layers must be `aria-hidden` + text-free (§9.2).
- **Dark sections:** on `deep`, honey-as-light is at its most dramatic (the E2 dark band, the W2 flavor) — gold linework reversed on near-black, the one built cell blooming like a small sun. Cream/`ground` body text on `deep` is AA+ and independent of the glow.

### 1.4 Job-annotation system (replaces the killed dimension numbers)

The single most important amendment. Where the mockups drew `14,6` / `R05`, we draw a **leader line to a real Beeond job label.**

- **Content (the real jobs):** `Content engine · SEO · AI-answer visibility (GEO) · Paid ads · Email · Social · Analytics · Reviews/reputation · Landing/CRO · PR/mentions · Automation`. Draw from `channel-map/channels.ts` — one source of truth, bilingual.
- **Form:** a 0.75px `muted` leader line (§1.1) from a point on the drawn comb to a small label set in **Rubik, `caption` size, `muted`**, often with a hairline underline. Think architect's callout, but the callout names a *job*, not a dimension. An eyebrow-style micro-tag (`eyebrow.tsx`, `text-[10px] uppercase tracking-[0.18em]`) is the default label chrome; Hebrew drops the tracking (RTL rule, §2.4).
- **Real text, never raster (amendment 2 + gate):** every annotation is HTML/SVG `<text>`/`<span>` inside the `i18n` sibling-span system — SSR'd HE+EN, `unicode-range`-split, screen-readable, translation-native. The raster art (§7) carries **zero lettering**.
- **RTL:** leader lines originate from the *in(reading-)side* and point outward; the label sits on the reading side of its anchor. Leaders mirror with layout; the small terminal dot does not need mirroring (direction-neutral). Numerals inside any label stay LTR per the Unicode bidi algorithm — but note there are now **no numerals in annotations** (amendment 1), which sidesteps the mixed-numeral RTL gotcha entirely. A clean win.
- **Density discipline:** 2–4 annotations per annotated section, never a cluttered blueprint. Whitespace-as-luxury (Oriol) beats a busy drawing.

### 1.5 Texture & ground

- **Ground:** `#FAF9F5` cream = vellum. Keep the on-disk `.grain` layer (fixed feTurbulence, `opacity: 0.032`, `mix-blend-mode: multiply`) — it *is* the drafting-paper tooth. Consider a second, even fainter "drafting grid" fixed layer (SVG lines at `vellum-line`, ~4% opacity) as an optional page-wide skeleton — behind content, `pointer-events: none`, off on reduced-data. Decide in concept build.
- **Panel:** `#F0EEE6` for inset cards / the wizard sheet (a lighter drafting sheet laid on the table).
- **Deep:** `#0A0A0A` for the 1–2 dark showpiece bands (blueprint reversed to gold-on-black).

---

## 2. Type system — the two-candidate display test

The founder responded to the **serif warmth** in the mockups (`e1`/`e2` use a light editorial serif). Research 03 warns premium *Hebrew* editorial currently reads through **weight/scale on a sans**, not serif — and there is no true Hebrew serif that pairs cleanly with a Latin serif. So the concept build runs a **two-candidate display test**; the founder + design-critic pick at the build review. **Rubik stays body/UI in both.**

### 2.1 The test (build both; ship one)

Implement display type as a single swappable token `--font-display` so the whole site flips between candidates by one variable — no per-heading rework.

- **Candidate A — Frank Ruhl Libre (display).** Serif, low-contrast, variable 300–900, genuine Hebrew + Latin glyphs, OFL/self-hostable. **The warmth the founder responded to**, and — unlike a Latin-only serif — it carries the Hebrew display natively, so HE and EN share one serif voice (no clash, sidesteps research 03's mixed-serif gotcha). Risk: at very large sizes Hebrew Frank Ruhl can read *literary/traditional* rather than *futuristic-tech*; test it big before trusting it.
- **Candidate B — Rubik Bold/Black (display).** The RTL-evidence play (research 03 §1: alefalefalef / D+A / Bezalel all lean confident bold **sans** at scale). Zero new font bytes (Rubik already loaded), best perf, unimpeachable Hebrew. Risk: less "gravitas/editorial-serif" than the mockups implied — mitigate with size, weight (800–900), and tight tracking.

**Decision inputs at build review:** (1) Hebrew display specimen at hero size, both candidates, native-speaker gut check; (2) LCP/perf delta (B is ~free; A adds one variable woff2 subset — prove the budget); (3) does A still read *warm-tech* not *literary* in Hebrew; (4) the Oriol×Speakeasy register — Speakeasy's gravitas is serif, Oriol's is heavy grotesk, so *both candidates have a reference blessing*. **Design-Lead lean:** A for EN gravitas, but B wins if the Hebrew serif reads dated at display size or the perf budget is tight. Do not pre-lock.

### 2.2 Responsive type scale (one named scale, both candidates)

Fixes v6's ad-hoc per-heading `clamp()`. Sizes are **`--font-display`** except body/caption which are **Rubik**. Values tuned Hebrew-first, then verified LTR.

| Token | Face | Mobile (≤640) | Desktop (≥1024) | Weight | Tracking (EN) | Line-height |
|-------|------|---------------|-----------------|--------|---------------|-------------|
| `display` (hero H1) | display | `clamp(2.75rem, 11vw, 3.5rem)` | `clamp(4.5rem, 7vw, 6.5rem)` | A:500 / B:800 | A:-0.01em / B:-0.02em | 0.98 |
| `h1` (section lead) | display | 2.25rem | `clamp(3rem, 4.5vw, 4rem)` | A:500 / B:800 | -0.01em | 1.02 |
| `h2` | display | 1.75rem | `clamp(2.25rem, 3vw, 2.75rem)` | A:600 / B:700 | -0.005em | 1.06 |
| `h3` | display or Rubik | 1.375rem | 1.625rem | 600 | 0 | 1.15 |
| `body-lg` (hero sub, standfirst) | Rubik | 1.125rem | 1.25rem | 400 | 0 | 1.5 |
| `body` | Rubik | 1rem | 1.0625rem | 400 | 0 | 1.6 |
| `caption` (annotations, meta) | Rubik | 0.8125rem | 0.8125rem | 500 | 0.02em (EN) | 1.4 |
| `eyebrow` (micro-tag) | Rubik | 0.625rem | 0.6875rem | 600 | 0.18em (EN) | 1 |

Define once as CSS custom properties + Tailwind `@theme` text tokens (`--text-display`, etc.), consumed by class, never re-`clamp`'d inline. `text-wrap: balance` on headings, `pretty` on body (already in `globals.css`).

### 2.3 Hebrew-heavier rendering tuning (research 03 §3)

- Hebrew reads visually **heavier/taller** at the same px — the shared scale looks bolder in HE. Tune **down** in HE: for Candidate B, drop hero weight 800→700 and keep the existing `html[lang="he"] .hero-h1 { letter-spacing: -0.015em }`; for Candidate A, the serif's HE cut is already lighter, hold size. Never add positive tracking to Hebrew (Rubik HE glyphs collide — existing rule in `globals.css`).
- **Each language gets its own break points** (research 03 §5: Hebrew is terser; a split headline sized for EN word-count won't reflow the same). The `i18n` sibling-span system already SSR's both — author HE and EN line-breaks independently in the component, not with a shared `<br>` rule.

### 2.4 Mixed HE/EN (brand name, "Beeond", GEO)

Keep inline Latin fragments in the **same family as the surrounding run** (research 03 §3) — do not force a serif match across scripts. In an HE serif (Candidate A) headline, an inline "Beeond"/"GEO" sets in the same Frank Ruhl Latin cut; in Candidate B everything is Rubik anyway. Prefer stacking HE/EN onto separate lines over a single mixed run for display sizes.

---

## 3. Layout system — Oriol × Speakeasy, RTL-first

### 3.1 The split/asymmetric hero (the core composition)

Both references lead with **a claim broken across the canvas**, not a centered tagline (Speakeasy: "Craft exceptional" top-left / "API experiences" mid-right; Oriol: massive left-weighted grotesk). Beeond's hero, RTL-native:

- **Two columns, asymmetric.** Text column (~55%) holds the split display headline + `body-lg` sub + primary CTA. Comb column (~45%) holds the drafting comb with the **one built cell** + 2–3 job annotations.
- **RTL is the primary canvas.** In HE (default): text column **right**, comb column **left**, headline flows R→L, the built cell sits lower-left (mirrors E1's lower-right cell). In EN: mirror — text left, comb right (exactly the E1 composition). One CSS-logical layout (`inline-start`/`inline-end`, `margin-inline`), no `left/right` literals — the existing codebase already uses logical props and RTL hover mirrors.
- **Headline break:** authored per language (§2.3). EN example composition: "Blueprint / for growth." (2 lines, left-set). HE gets its own 1–2 line break — copy from CMO, not this spec.

### 3.2 Reading-width & whitespace (luxury)

- Prose caps at **~62ch** (`body`) / **~52ch** for `body-lg` standfirsts — Oriol/Speakeasy breathe.
- **Macro-whitespace:** section padding `py-24` mobile → `py-32/40` desktop (high-end skill §4C; existing sections already run generous). Whitespace *is* the luxury signal — resist filling the comb.
- Display headlines may bleed toward the margins (Oriol's near-edge type) but never clip; test both dirs at 4 breakpoints (gate).

### 3.3 Section rhythm — cream ↔ panel ↔ deep

The Speakeasy rhythm, mapped to tokens (matches the on-disk arc):

```
Hero        ground (cream)     ← built cell debut
Problem     ground             ← quiet, type-led
Swarm       DEEP (dark)        ← showpiece #1, gold-on-black blueprint
Won't-be-generic  panel        ← inset "split" board
Footprint   ground             ← comb constellation, annotations dense here
How-it-works ground/panel      ← phased, 3 drawn→built cells
Founders    ground             ← human, warm, faces
Final CTA   DEEP (dark)        ← showpiece #2, built cell resolves
```

At most **2 `deep` bands** (constraint: 1–2 dark sections). The construction grid threads *through* the cream→deep transitions (a continuous gold line crossing the section break — the E2 "continuous fine gold drafting lines threading the two").

### 3.4 The construction grid as visible skeleton

Unlike a hidden 12-col grid, the drafting grid is **faintly visible** (§1.5) — the layout skeleton is part of the aesthetic. Content snaps to it; the comb outlines extend past content edges as construction lines do on a real drawing. Keep it faint (≤14% `vellum-line`) so it reads as *craft*, not *busy*.

---

## 4. Section-by-section spec (8 sections + header/footer/FAQ)

Mapped 1:1 to the strategy arc (briefs/2026-07-08-v7-strategy §4) and the on-disk components. Each: **layout intent · blueprint device · annotation hooks · motion beat · art needs.** Message = M1–M6.

### §0 · Header (`site-header.tsx`, `hive-mark.tsx`, `locale-toggle.tsx`)
- **Layout:** transparent over hero → glass pill on scroll (keep `.header-shell/.header-glass`), night-mode invert over `deep` (keep `.header-dark`). Logo = the hex `hive-mark` drawn as a *single built cell* (tiny). 3–4 nav links + always-on yellow CTA pill + HE/EN toggle.
- **Blueprint device:** the logo mark is the smallest instance of the one-cell rule.
- **Annotation:** none (chrome).
- **Motion:** existing header transitions; no new device.
- **Art:** none (SVG mark).

### §1 · Hero — **M1** (`hero/hero.tsx`, `hero/hero-art.tsx`)
- **Layout:** the split/asymmetric composition (§3.1). Claim with tension (whole-footprint lead, CMO copy), `body-lg` sub, one primary CTA ("Get your free Footprint Audit"), one honest "two founders, launching 2026" micro-line folded in (no stat strip — strategy cut it).
- **Blueprint device:** drafting comb with **the** built cell = the CTA anchor (the built cell literally *is* the audit — "here's the one we built for you"). This is the debut of the signature transition (§5).
- **Annotation hooks:** 2–3 job leaders on the drawn comb — e.g. `SEO`, `AI-answer visibility`, `Content engine` — naming what the swarm runs. Real HTML text.
- **Motion:** signature device **debut** — construction lines draw on, one cell fills with honey + blooms (once, `--dur-6` 1600ms, on load; reduced-motion = already built). This is the LCP screen — the built cell must not cause CLS (reserve its box; `Rubik Fallback` covers the H1).
- **Art:** the macro honey-cell + bloom **may** be the one generated raster still (§7), OR pure SVG+CSS glow. Prefer SVG if it holds the founder's "molten glow" bar; raster only if not. LCP<900ms governs.

### §2 · The problem, sharp — **M2** (`sections/` new or reuse `dark-chapters` skin)
- **Layout:** type-led, quiet, cream. Loss-aversion beat in `h1`/`body-lg`, reader's-situation framing. Minimal comb — mostly *drawn, unbuilt* cells (the gaps).
- **Blueprint device:** **zero built cells** — an empty drafting of comb outlines = "your footprint, mostly un-built." The absence of honey is the point.
- **Annotation hooks:** faint job leaders pointing at *empty* cells (SEO — empty; Social — empty) = "present on almost none coherently."
- **Motion:** gentle reveal (`[data-reveal]`); no showpiece.
- **Art:** none — pure SVG comb + type.

### §3 · Meet the swarm — **M3, the differentiator** (`swarm/section.tsx`, `swarm/scrub.tsx`) — **DEEP**
- **Layout:** the dark full-bleed showpiece #1 (Speakeasy's dark drama). "Automation does the volume. Humans do the taste." Gold-on-black blueprint.
- **Blueprint device:** the scroll-choreographed convergence — drawn agent-cells across the comb resolve/flip into **one** built honey cell at the center (the whole-footprint goal). Reuse the on-disk swarm scrub + card-flip machinery, re-skinned: back face = drawn agent cell, front face = built honey cell.
- **Annotation hooks:** the two founders named at the convergence point; job labels orbit the drawn cells (Content, Ads, Email, Social, Analytics) converging inward.
- **Motion:** **showpiece #1** — the pinned scrub (existing `[data-swarm-root] height:260vh`, sticky). Deterministic + reversible, one runway, zero loops. Reduced-motion/JS-off/mobile = one viewport, rested built hive.
- **Art:** the **dark backdrop** may be the second generated raster (subtle gold-particle-on-black texture, §7). **W2 (`concepts/wow/w2.png`) is the approved FLAVOR CANDIDATE for this backdrop only** — the constellation/neural-swarm on near-black. Foreground comb + cell + labels stay SVG/HTML over it.

### §4 · Won't make you generic — **M4** (`sections/honesty.tsx` or new) — **panel**
- **Layout:** the concrete split, *shown not asserted* — an inset `panel` board split two ways: "Automation (volume)" ↔ "Humans (taste)". The only data-backed message; still show, don't stat-wall.
- **Blueprint device:** two comb clusters — the automation side = many drawn cells filling fast; the human side = **the one built cell**, hand-finished (taste = the built one). One built cell total (human side).
- **Annotation hooks:** "brand voice", "creative judgment", "calibrated before it ships" as job-leaders on the human cell.
- **Motion:** reveal + a single honey-fill on the human cell as it enters view.
- **Art:** none — SVG + type; optionally one small artifact mock (a calibrated content sample) as `panel` inset.

### §5 · The whole footprint — **M3 scope proof** (`sections/channels.tsx`, `channel-map/channels.ts`)
- **Layout:** every channel as one coordinated comb constellation — the annotation system's showcase. Cream.
- **Blueprint device:** the full comb, each cell = a channel/job, most **drawn**, the payoff cell **built** (or the comb fills cell-by-cell on scroll — see §5 motion). GEO/AI-search is a first-class cell (the modern edge), never the headline.
- **Annotation hooks:** **densest annotation section** — the full job set from `channels.ts`, leader-lined and labeled (HE/EN). This is where "whole footprint, one map" is literally drawn. Cap at legible density (§1.4).
- **Motion:** cells draw-on then one builds; optional scroll-linked "fill in cell by cell" (budget: this or the swarm scrub, not both scrubbed heavily — 1–2 showpieces max).
- **Art:** none — SVG comb + HTML labels. The crispest, lightest, most a11y-friendly section (SVG > raster rule).

### §6 · How it works — **M3/M6 de-risk** (`sections/how-it-works.tsx`)
- **Layout:** phased, not chaos — Foundation → Content engine → Amplification (~12-wk arc). Three-beat horizontal (mobile: stacked), cream/panel.
- **Blueprint device:** three cells in a row, drawn→built **left-to-right in EN / right-to-left in HE** — phase 1 built, 2 building, 3 drawn (the plan completing over time). *Directional* — must mirror in RTL (the one place sequence has a reading direction).
- **Annotation hooks:** each phase's jobs as leaders (Foundation: SEO, analytics setup; Content: content engine, email; Amplification: ads, social, PR).
- **Motion:** reveal per phase; the drawn→built handoff between phases echoes the signature device (small, not a scrub showpiece).
- **Art:** none; optional artifact mock per phase (audit doc, content calendar, dashboard) as `panel` insets — Speakeasy's "mocks as imagery" (§7 mock program).

### §7 · The founders / fit — **M5** (`sections/` new; reuse `honesty` patterns)
- **Layout:** the human warmth beat — real names, faces, credentials (Yarden Morgan, Adam), "selective, ask us anything", who it's for / honestly not for. HE+EN native = living proof. Cream.
- **Blueprint device:** minimal — the founders framed as *the two who build the cells*. Maybe one built cell = "the account they run is yours." Warmth over drafting here (premium bones, warm skin).
- **Annotation hooks:** light — credential leaders, not job leaders (this section is people, not process).
- **Motion:** quiet reveal; no showpiece. Real photography is the only place raster *people* appear (brand-processed to warm/cream; not stock).
- **Art:** founder photos (real, warm-graded). Not generated. Not in the ~2-3 raster budget (those are art assets, these are photos).

### §8 · Final CTA — **M6** (`sections/final-cta.tsx`) — **DEEP**
- **Layout:** dark full-bleed close. "Your buyers are looking. Let's make sure they find you." → opens the wizard. Big display, one CTA.
- **Blueprint device:** the signature device **resolves** — the drawn comb of the whole site completes into one final built, blooming cell = the audit. Bookends the hero debut.
- **Annotation hooks:** none or one ("your footprint" on the built cell) — resolution should be clean, not busy.
- **Motion:** **showpiece resolve** (not a heavy scrub — a reveal-triggered build). Signature device's third and final appearance (hero → swarm → here).
- **Art:** the dark backdrop can reuse §3's generated raster (same asset, don't re-spend). Foreground cell SVG.

### §— · Footer + lean FAQ (`sections/faq.tsx`, `sections/faq-data.ts`)
- **Layout:** meta + honesty ("Launching 2026") + the **6-Q FAQ** mirrored in `FAQPage` JSON-LD (the GEO asset — the AIs read it; Beeond *sells* that, so the site practices it). Footer on `deep` with a giant drafting watermark (Speakeasy's footer watermark → a faint comb/"Beeond" construction-line watermark, `vellum-line`).
- **Blueprint device:** FAQ markers are the existing hex `.faq-plus` that rotates 45° on open — a drawn cell "opening." Keep.
- **Annotation:** none.
- **Motion:** existing `.faq-item` `::details-content` height animation. Keep.
- **Art:** none.

---

## 5. Motion doctrine applied — the drawn-to-built cell

**The signature device = a drawn cell resolving into a built (honey-filled, glowing) cell.** One motif, everywhere, meaning something (a plan becoming reality / the swarm converging on one goal). It satisfies the constraint of *one* device carried through, Speakeasy-style.

- **Three appearances only** (debut → showpiece → resolve):
  1. **Hero debut** — construction lines draw on, one cell fills + blooms once on load (`--dur-6` 1600ms).
  2. **§3 Swarm showpiece** — the pinned scroll-scrub: many drawn agent-cells converge and flip into one built cell (the primary scrubbed moment; existing machinery).
  3. **§8 Final CTA resolve** — reveal-triggered final build; bookends the hero.
- **Echoes (small, not showpieces):** §4 human-cell fill, §5 cell-by-cell fill, §6 phase drawn→built, §0 FAQ marker. All reveal-triggered, none looping.
- **Budget (constraint):** **at most 1–2 scroll-scrubbed showpieces** — §3 is the primary scrub; §5's cell-by-cell is the optional second (choose one to scrub heavily; the other becomes a simple reveal). Everything else is `[data-reveal]` fire-once.
- **Physics:** existing `--ease-settle` for builds (honey settling), `--ease-swift` for hovers, the 6-step ladder by travel distance. Springs `{110,18}` where the swarm code already uses them.
- **Reduced-motion / JS-off:** **every** built cell renders **already built** from first paint (rested end-state); construction lines render fully drawn; scrubs collapse to one rested viewport. SSR text never moves. This is already the codebase's discipline — extend it to the new device.
- **Zero loops.** No perpetual honey shimmer, no floating particles that never rest. The bloom is static once built. (`--animate-*: initial` already deletes Tailwind loops.)

---

## 6. Wizard UX spec — the audit as a drawing being completed

The locked CTA destination (strategy §5, architecture). Blueprint-styled: **the footprint audit is literally a comb being drawn and built for the prospect's brand.** RTL-native, `panel` sheet on the vellum table. Full-tier QA surface (form + data capture).

- **Frame:** a modal/route "drafting sheet" (`panel #F0EEE6`) laid on the cream table, drafting border, the prospect's brand at the title-block. Progresses **R→L in HE** (mirror the progress indicator + "next" vector — reuse the RTL CTA-orb mirror pattern).
- **Step 1 — The ask (1 field):** "Where does your brand live online?" → URL/brand. Yellow CTA "Show me my footprint". The sheet shows an **empty drawn comb** (all cells unbuilt) = "here's the grid we'll fill for you." Lowest friction, single field.
- **Step 2 — Quick context (2–3 optional-feeling):** industry · rough size · primary goal. Progress = cells starting to draw on. Skippable where honest.
- **Step 3 — The reveal (the wow, honest):** the prospect's comb **builds** — channels scored, gaps = drawn/unbuilt cells, strengths = built honey cells, "here's what it'd take to close them." **Honesty rule (strategy):** real & specific (computed from inputs + observable signals), never a faked live-agent dashboard. The drawn→built device *is* the reveal. Specificity > fake precision = the anti-generic promise enacted.
- **Step 4 — Capture (the exchange):** "Want the full audit + a 30-min plan with Yarden & Adam?" → name · work email → real lead capture (live destination, no dead `mailto:`). Confirmation state = the sheet "signed off."
- **Escape hatch:** "just talk to the founders / skip to booking" at any step (buys-people-not-process path).
- **All states (required, design each):** empty · in-progress (per step) · loading-reveal (the comb drawing/building — honest "computing", not fake live agents) · success · error (bad URL / network) · reduced-scope booking path. Reduced-motion: the reveal renders built instantly (no scrub); keyboard-complete full path (gate).
- **A11y:** full keyboard path, focus-visible on the drafting sheet, labels real HTML, `aria-live` on the reveal, RTL-correct tab order.

---

## 7. Art program — SVG/code first, raster ≤ 3 finals

Per the pipeline doc: **beg the model for composition, enforce brand with code**; and **never ship raster where SVG/CSS/canvas is crisper/lighter.** The Blueprint is overwhelmingly line + type → mostly SVG.

### 7.1 SVG / code (the default — free, sharp, animatable, a11y)
- The entire comb lattice + construction grid (§1.1–1.2).
- **All job annotations** (leader lines + labels) — HTML/SVG text, bilingual, **never raster** (amendment 2 + a11y + i18n gate).
- Every built-cell honey **fill** (existing `.hex-tile-anchor` gradient) and most glows (CSS `radial-gradient` / SVG `feGaussianBlur`).
- The footprint constellation (§5), FAQ markers, header mark, wizard comb.

### 7.2 Generated raster (`gpt-image-1` → deterministic brand post-process → webp) — **~2–3 finals MAX**
Only where SVG can't hold the founder's "molten glowing cell casting light" bar:

1. **The macro honey-cell showpiece** (hero and/or reused at final CTA) — one large molten-honey cell with real caustic light/bloom, if SVG glow proves insufficient at hero scale. If SVG holds it, **generate zero.**
2. **The dark-section backdrop** (§3 swarm; reusable at §8) — subtle gold-particle/constellation texture on `deep`. **W2 is the approved flavor candidate for this one asset.**
3. *(reserve)* one texture/backdrop if a third proves needed — justify in the session file.

**Prompt discipline (locked, from pipeline doc):** no lettering baked in; opaque background for large pieces; palette cream/ink/honey only (post-process forces exact hex — don't trust the model's color); no stock realism / no AI-slop tells; scale called out explicitly. Reuse `generate-art.mjs` + `normalize_paper.py` + `flatten_paper.py` + `despecular.py`; add a **yellow-clamp** so honey lands exactly on `#FFDB5B` (pipeline doc already flags this). Log every batch (count + purpose) in the session file (spend gate).

**Draft prompts (concept build stages these; do not spend at spec time):**
- *Macro honey cell (hero) —* "Extreme-macro single hexagonal cell filled with luminous molten honey, glossy caustic light refraction, tight warm bloom halo, embossed cell wall, warm cream #FAF9F5 vellum ground with faint drafting tooth, cinematic raking light, opaque, no text, no numbers, palette cream + warm near-black ink + honey-gold only, no blue/purple/green/pink/cold-gray, no cartoon bee, no stock people."
- *Dark backdrop (§3, W2 flavor) —* "Warm near-black #0A0A0A field, dozens of small glowing golden hexagonal nodes linked by delicate luminous honey filaments converging toward one brighter cell, particle bokeh, volumetric warm light, opaque, no text, no numbers, honey-gold on black only, no blue/purple/green/pink, no stock imagery."

### 7.3 Artifact mocks (Speakeasy's "mocks as imagery")
The Footprint-Audit doc, a content calendar, a channel dashboard, an AI-answer citation — as **`panel` insets** in §4/§6. Built as **HTML/CSS mock components** (crisp, themeable, RTL-native, a11y), **not** raster screenshots. They double as the sales asset (v6 intuition).

---

## 8. Component inventory + net-new tokens + gate checklist

### 8.1 Component inventory (maps to `src/components/`)
| Component | File | Blueprint change |
|-----------|------|------------------|
| Site header | `site-header.tsx` | re-skin mark as built cell; keep glass/night machinery |
| Hive mark | `hive-mark.tsx` | the single-built-cell logo |
| CTA button | `cta-button.tsx` | keep physics; CTA pill = yellow fill + ink text |
| Eyebrow / micro-tag | `eyebrow.tsx` | becomes the annotation-label chrome |
| Locale toggle | `locale-toggle.tsx` | keep |
| i18n spans | `i18n.tsx` | carries all annotation HE/EN text |
| Reveal observer | `reveal-observer.tsx` | drives drawn→built reveals |
| Hero | `hero/hero.tsx` + `hero-art.tsx` | split composition + built-cell debut |
| Swarm showpiece | `swarm/section.tsx` + `scrub.tsx` | re-skin flip faces drawn↔built |
| Channels/footprint | `channels.tsx` + `channel-map/channels.ts` | comb constellation + annotation source of truth |
| Sections | `outcomes` `honesty` `how-it-works` `dark-chapters` `chapters-scrub` `artifact-strip` `final-cta` `trust-c5` | re-skin to Blueprint; map to §2/§4/§6/§8 |
| FAQ | `faq.tsx` + `faq-data.ts` | keep marker morph; JSON-LD mirror |
| **New:** Comb lattice | `components/blueprint/lattice.tsx` (new) | reusable SVG construction comb |
| **New:** Job annotation | `components/blueprint/annotation.tsx` (new) | leader line + i18n label |
| **New:** Built cell | `components/blueprint/built-cell.tsx` (new) | fill + glow + reduced-motion rested |
| **New:** Wizard | `components/wizard/*` (new) | 4-step drafting-sheet flow + states |

### 8.2 Net-new tokens (justify or don't add)
- **`vellum-line` — ADD.** A gold-tinted drafting-ink line color for construction lines/leaders, distinct from `hairline #E3DDD5` (warm-gray structural dividers). **Justification:** the Blueprint's construction lines must read as *gold drafting ink on vellum* (the E1/E2 look) — using `yellow #FFDB5B` for them would violate the 90/10 scarcity law (lines are everywhere; the loud yellow must stay rare), and `hairline` gray reads as generic borders, not drafting ink. Proposed value: a low-chroma gold, e.g. `#C9B38A` (or a token-derived `color-mix(in oklab, yellow 30%, muted)`) at line-level opacity — **must pass `brand-lint`**: prove it's decorative/structural only (never text), AA-irrelevant (not a text color), and derivable from existing tokens if the linter requires. If `brand-lint` rejects a new hex, implement as a `color-mix` of existing tokens instead of an 8th literal. **Decide at concept build; this is the only proposed net-new token.**
- **Display face token `--font-display`** — not a color token; a font var for the §2 test. Add to `@theme`. If Candidate B (Rubik) wins, it aliases `--font-sans` (zero new bytes).
- **Text scale tokens** `--text-display/h1/h2/h3/body-lg/body/caption/eyebrow` — ADD (fixes v6 ad-hoc clamps, §2.2). Not palette; no brand-lint conflict.
- Everything else stays on the **7 locked tokens**. No other additions.

### 8.3 Gate checklist (restated — Gate-3 will verify)
- [ ] Lighthouse mobile **Perf ≥90 · A11y ≥95 · Best-practices 100 · SEO 100** (`scripts/measure-scores.mjs`; trust tile self-drops if unmet).
- [ ] Real-device **LCP < 900ms · CLS < 0.01** (hero built-cell must not shift; `Rubik Fallback` covers H1; display face perf-budgeted in §2 test).
- [ ] **axe 0 serious/critical**; full keyboard path through the wizard; focus-visible; reduced-motion honored (all cells rested from first paint).
- [ ] **WCAG AA:** ink-on-cream, cream/panel-on-deep AA+; **yellow fill-behind-ink only**, never text on cream; **glow layers `aria-hidden` + text-free** (§1.3.1).
- [ ] **`brand-lint` clean** — 7 tokens (+ `vellum-line` justified & passed, or `color-mix` fallback); no yellow text utility; glow/fill separation enforced.
- [ ] **Full RTL+LTR parity** — both SSR'd, CSS-toggled; no horizontal scroll, no clipped display type, correct mirroring (leaders, phase sequence, wizard progress) at 4 breakpoints; annotations real HTML text both languages.
- [ ] **Signature device singular** — drawn→built cell only; ≤ 2 scrubbed showpieces; zero loops; one built cell per section max.
- [ ] **No raster with lettering**; ≤ 3 generated finals; every annotation is HTML/SVG text; spend logged.
- [ ] Anti-generic self-audit: *would a $19 template make this exact choice?* — no default card grid, no stock imagery, specific CTA (the Footprint Audit), yellow scarce.

---

## 9. Open decisions this spec hands to the concept build (Gate-3 will lock)

1. **Display face** — Frank Ruhl Libre (A) vs Rubik Bold/Black (B), decided on Hebrew specimen + perf + warm-tech read (§2.1).
2. **`vellum-line` token** — new literal vs `color-mix` fallback, per `brand-lint` (§8.2).
3. **Hero macro cell** — SVG glow vs one generated raster (whichever holds the "molten" bar at LCP budget) (§4 §1/§7).
4. **Which scrub is the primary showpiece** — §3 swarm (default) vs §5 cell-by-cell (§5 must not both be heavily scrubbed; 1–2 budget).
5. **W2 flavor** — accept as the §3 dark backdrop or go pure SVG (§7.2).
6. **Page-wide faint drafting-grid layer** — on (extra craft) vs off (perf/quiet) (§1.5).

---

*End of Design Spec v1 — DRAFT. Feeds the concept build (candidate faces, staged prompts, drawn→built device) and the design-critic loop. The locked version is Gate-3.*
