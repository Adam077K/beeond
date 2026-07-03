# Beeond — Brand Identity System & Landing Page Visual Design

> **Author:** Design-Lead (reports to CPO) · **Date:** 2026-07-03 · **Status:** v3 — CEO brand-craft revision + layered landing direction locked (2026-07-03 grilling session + 39-agent exploration workflow; see `.claude/memory/DECISIONS.md` 2026-07-03 entry and `docs/05-marketing/HERO_CONCEPT_EXPLORATION.md`).
>
> ⚠️ **DESIGN-ONLY — DO NOT LAUNCH PUBLICLY.** Per [`NAME_CLEARANCE.md`](../02-competitive/NAME_CLEARANCE.md) (MEDIUM collision risk), formal trademark clearance must complete before this brand goes live. We design freely now; we do not ship live.
>
> **Companion docs:** [`POSITIONING.md`](POSITIONING.md) (voice canon — hero copy is founder-LOCKED, do not change) · [`OFFER_SPEC.md`](../04-features/OFFER_SPEC.md) (§3 service clusters — C7 channel-map visualizes these) · [`FOUNDING_BRIEF.md`](../01-foundation/FOUNDING_BRIEF.md) §9 brand direction · [`NAME_CLEARANCE.md`](../02-competitive/NAME_CLEARANCE.md) (registrability) · [`HERO_CONCEPT_EXPLORATION.md`](HERO_CONCEPT_EXPLORATION.md) (layered landing direction, anti-slop checklist, build notes — v3 mirrors its decisions) · [`DESIGN_CRITIQUE_wave2.md`](DESIGN_CRITIQUE_wave2.md) (v2 independent review).
>
> **v2 artifacts — SUPERSEDED (old honey/espresso palette, Geist Mono type — need re-rendering to v3 spec before any stakeholder presentation; do not delete, keep as historical reference):**
> - Interactive HTML brand board: [`brand-assets/beeond-brand-board.html`](brand-assets/beeond-brand-board.html) — v2-superseded.
> - Desktop full render: [`brand-assets/concept-desktop-full.png`](brand-assets/concept-desktop-full.png) — v2-superseded.
> - Hero EN: [`brand-assets/concept-hero-en.png`](brand-assets/concept-hero-en.png) — v2-superseded.
> - Mobile hero render: [`brand-assets/concept-mobile-hero.png`](brand-assets/concept-mobile-hero.png) — v2-superseded.
> - Mobile nav states: [`brand-assets/concept-mobile-nav-states.png`](brand-assets/concept-mobile-nav-states.png) — v2-superseded.
> - RTL hero: [`brand-assets/concept-rtl-hero.png`](brand-assets/concept-rtl-hero.png) — v2-superseded.
>
> **Locked since v2 (unchanged in v3):** hero headline = "The AI era moves fast. Your presence needs to match." (founder pick, 2026-06-30) · NO coined brand term — all copy descriptive · domain = **beeond.ai**.

---

## v2 → v3 Changelog (2026-07-03)

All changes are driven by the DECISIONS.md 2026-07-03 entry (founder grilling session + 39-agent exploration workflow). The hero copy, bilingual parity requirement, and overall "Warm Hive Futurism" direction are unchanged.

| Area | v2 | v3 |
|------|----|----|
| **Concept emphasis** | Bee glyph (striped top-down bee) reused everywhere including hero convergence cell | Hexagon/honeycomb is the owned system; literal bee **minimized** to favicon/avatar/loading scale as a small abstract device — no cartoon mascot applied broadly |
| **Logo — everyday** | `Bee⬡nd` wordmark (hex-"o") + hive+bee device in all headers | `Bee⬡nd` logotype only — single hex-"o"; device NOT in everyday headers |
| **Logo — filed/small device** | Hive + striped bee device | Honeycomb cell containing a **minimal abstract bee** (two-stroke / negative-space); favicon/avatar/loading scale only |
| **"ee"-cells ligature** | Kept as aspirational flagged enhancement | **Dropped entirely** |
| **Palette** | Cream Canvas `#FBF8F2` ground · Hive Honey `#F2A52C` accent · Espresso Ink `#1C1714` · multi-tier honey/amber tokens | Warm off-white **`#FAF9F5`** ground · near-black **`#141413`** ink · ONE warm yellow **`#FFDB5B`** (Bumble hue) fill/highlight accent · cream panels **`#F0EEE6`** · black-pill CTAs. All honey/espresso/amber tokens retired. |
| **Typography** | Rubik (HE+EN) + Geist Mono (EN eyebrows, captions, data labels, week ranges) | **Rubik only** — weights 300–800. Geist Mono and all monospace **dropped entirely.** |
| **Eyebrow/label style** | EN: Geist Mono 500, uppercase, 0.22em tracking | All eyebrows/labels both HE and EN: Rubik 500, ≤2% tracking, normal case — no uppercase, no monospace |
| **Hero H1 signature** | No yellow-underline on hero text | Line 2 key word carries **yellow underline/highlight** — static-first CSS, no JS, works at `prefers-reduced-motion` |
| **CTAs** | Honey-field pill (Honey bg, Espresso text) | **Black-pill** (Ink `#141413` fill, cream/white text) |
| **Motion** | Swarm: perpetual ~12s loop, dots pulse as they reach the cell | Swarm: **converges once, then rests**. Zero perpetual loops. `prefers-reduced-motion` → rested end-state from paint. |
| **Landing architecture** | Flat 10-section layout (bento services grid at Section 5) | **Layered combination**: C8 SSR editorial hero → C7 honeycomb channel-map (mid-page spine) → C6 answer-engine proof block → C5 build-time trust module. No bento-grid-of-services. |
| **Founders** | Section 8 only (late in page) | **Surfaced immediately** in/adjacent to hero (brief strip) + Section 8 (deep treatment) |
| **Registrability — figurative mark** | File hive + striped bee device | File the **abstract-bee-in-cell device** (two-stroke minimal) |
| **Part D — human steps** | Striped bee glyph vectoring + "ee"-cells option | Abstract-bee device vectoring (two-stroke minimal); manual craft-polish as explicit budget line; founder photography still launch-blocking |

---

## 0. Design thesis (the one-sentence direction)

**"Warm Hive Futurism"** — editorial warmth (warm off-white, near-black ink, cream) fused with precise, future-facing structure (a hexagon/honeycomb system as the owned visual and information architecture, a once-converging swarm motion motif). One accent: warm yellow. The hexagon is the atomic unit. The bee exists only as a small abstract device at favicon/avatar scale — the brand is hex-forward, not bee-character-forward.

This thesis exists to **prove the core promise**: *AI that doesn't look generic.* If the brand itself looked like a default LLM SaaS template — cool-blue palette, purple gradient, three equal cards — it would refute the pitch. Every choice is deliberately anti-template: a warm near-black/off-white palette (not cool SaaS blue/purple), a custom composite logotype (not stock-font Rubik), asymmetric editorial layout (not centered-hero defaults), an owned hexagonal information system (the C7 channel-map), and single-accent discipline (~90/10 ratio of ink-and-ground to yellow — yellow points, never floods). **Differentiation anchor:** screenshot it with the logo removed and you'd still recognize it by the honeycomb hex system + warm off-white/ink palette + the single converging-swarm motion moment.

Anti-slop dials (from `design-taste-frontend`): **DESIGN_VARIANCE 7** (confident asymmetry, still trustworthy for B2B buyers) · **MOTION_INTENSITY 5** (one hand-tuned convergence moment, then rest) · **VISUAL_DENSITY 4** (airy/breathing — premium, not cockpit).

---

# PART A — BRAND IDENTITY SYSTEM

## A1. Logo — logotype + abstract-device system

Two coordinated parts serving different scale contexts.

### 1. The everyday lockup — `Bee⬡nd` logotype

In all site headers, decks, email signatures, OG images, and navigation, the wordmark is **`Bee⬡nd`** — "Be" and "nd" in Rubik 700, tracking `-0.03em`, with the **"o" rendered as a honeycomb hexagon cell** (outline hex in `currentColor`, or filled in Warm Yellow `#FFDB5B` for accent treatments). No separate bee device appears in this context. The hex-"o" is the everyday distinctive element.

**The "ee"-cells ligature is retired.** It risks misreading as "Beoond," requires type-design vectoring, and is no longer aspirational or flagged. The single hex-"o" logotype is the production-grade everyday mark.

### 2. The filed/small device — abstract bee in a honeycomb cell

For favicon, social avatars, loading spinners, and any context at or below ~32px where the logotype cannot resolve, the device is: a **honeycomb hexagon cell containing a minimal abstract bee** — two-stroke or negative-space treatment, no face, no cartoon character. Wing geometry + body implied by the cell. This device is the **figurative mark to file** (see §A6). It appears only at small device scale; it is not in site headers or hero sections.

The v2 "striped top-down friendly bee" glyph is retired from applied use. The abstract-bee-in-cell is its minimal geometric successor.

### Lockups

| Lockup | Use |
|--------|-----|
| **Primary** — `Bee⬡nd` logotype on Off-White Ground | Default: site header, decks, email signature, OG cards |
| **Reversed** — `Bee⬡nd` logotype in Off-White on Ink or True Black | Dark sections, footers, social cards |
| **Accent** — `Bee⬡nd` logotype with Yellow hex-"o" fill | Hero accents, campaign headers, high-contrast moments |
| **Device** — Abstract-bee-in-cell hex | Favicon, social avatar, loading state, app icon — small scale only |

**Construction:** clear space = 1 hex-cell width on all sides. Min everyday-wordmark display width = 96px. **The lockup is locked LTR and never mirrors in RTL** — it sits at the RTL layout start (right side in RTL) but its internal order and Latin letterforms do not flip.

---

## A2. Color palette

One accent (warm yellow), a warm neutral system, near-black ink, and optional true-black for deep-moment sections. No second brand color. The ratio is **~90/10 ink-and-ground to yellow** — yellow points, never floods. Never cool SaaS blue, never AI-purple, never the v2 honey-orange (`#F2A52C`).

| Token | Hex | Role |
|-------|-----|------|
| **Off-White Ground** | `#FAF9F5` | Primary page background — warm white, not cool, not pure |
| **Surface** | `#FFFFFF` | Card / container fill on top of the ground |
| **Ink** | `#141413` | Primary text — near-black, warm undertone. Never `#000000`. |
| **Warm Yellow** | `#FFDB5B` | **Single accent** — Bumble hue. Fill/highlight/underline ONLY. Never a body-text color. Never a CTA background. Usage: hero H1 yellow underline/highlight on one key word, hex-"o" accent fill, the swarm convergence point, one distinguished C7 tile, single accent dot per section. |
| **Cream Panel** | `#F0EEE6` | Moment-section panel backgrounds, alternate section beats, badge fills |
| **True Black** | `#0A0A0A` | Optional deep-moment sections — used sparingly (1–2 max per page, same scarcity rule as v2 dark sections) |
| **Hairline** | `#E3DDD5` | 1px borders on light backgrounds |
| **Muted Ink** | `#5C5751` | Secondary/supporting text — warm medium gray. Subheads, captions, microcopy, attribution. Must pass AA (≥4.5:1) on Off-White Ground; verify at WCAG gate. |

**Contrast / accessibility rules (carry into the WCAG gate):**
- Body and UI text: **Ink `#141413` on Off-White Ground `#FAF9F5`** (~19:1 — AAA); **Off-White on Ink/True Black** (~19:1 — AAA).
- **Warm Yellow is a fill/highlight accent, never a text color.** Black text on Yellow fill: Ink `#141413` on `#FFDB5B` (~15:1 — AAA for fill uses).
- **Black-pill CTAs:** Ink `#141413` fill, Surface `#FFFFFF` or Off-White `#FAF9F5` text (~19:1 — AAA).
- Muted Ink `#5C5751` on Off-White Ground: target ≥4.5:1 (AA) — verify at WCAG gate; default to Ink for any text where Muted Ink fails.
- Focus rings: 2px Ink with 2px offset on light backgrounds; 2px Off-White with 2px offset on dark sections.
- **These are concept-level targets. The binding check is the QA-Lead WCAG audit on the coded page (§D).**

---

## A3. Typography — bilingual HE + EN at parity, all-sans Rubik

The hard constraint is **Hebrew + English at parity**. A single superfamily that natively contains both scripts is the cleanest solution. In v3, that means **Rubik only** — no monospace, no secondary display face.

**Primary and only face — `Rubik` (variable, weights 300–800, Latin + Hebrew).**
- True bilingual: complete Hebrew glyph set + Latin set in one design.
- Rounded geometric terminals = warm + friendly while staying modern.
- Hierarchy via **weight + size + color**, never a second face or mono accent.
- **Self-host with `unicode-range` subsets** (Latin + Hebrew separately) and `size-adjust` fallback metrics. No Google Fonts CDN — font-swap CLS on the hero H1 is an automatic Lighthouse failure.
- **Geist Mono is fully retired.** No exceptions. Every element previously set in Geist Mono (eyebrows, section numbers, data labels, week ranges, captions, language toggle, founder role lines, attribution) is now **Rubik 500, 11–12px, normal case, ≤2% tracking**.

**Type scale (fluid, `clamp()`):**

| Role | Spec |
|------|------|
| Display H1 | Rubik 700, `clamp(40px, 5vw, 68px)`, tracking `-0.035em`, line-height 1.0. Hero line 2 key word carries **Warm Yellow `#FFDB5B` underline or highlight — static-first CSS, no JS, present at `prefers-reduced-motion`.** |
| H2 | Rubik 700, `clamp(28px, 3.4vw, 46px)`, tracking `-0.03em` |
| H3 / tile title | Rubik 600, 19–22px, tracking `-0.01em` |
| Body | Rubik 400, 17–19px, line-height 1.55, max 48–65ch |
| Eyebrow / label (EN and HE) | Rubik 500, 11–12px, `letter-spacing ≤0.02em`, normal case — no uppercase, no monospace |
| Secondary text / caption | Rubik 400, 12–13px, Muted Ink `#5C5751` |
| Navigation / UI | Rubik 500, 14–15px, tracking 0 |

**Hebrew-specific rules (unchanged):**
- Set HE body **~1px larger** than EN at the same role for optical parity (larger visual x-height).
- HE uses gershayim/geresh conventions; EN uses real curly `'` `"` `—` (no straight quotes, no `--`).
- Numerals stay LTR inside RTL text. The logo and Latin brand name **never mirror**.
- **Never all-caps or `letter-spacing > 0.02em` in Hebrew.** No case distinction exists; aggressive tracking reads as broken. This rule now applies uniformly to EN eyebrows too — both are normal-case Rubik.

**Premium upgrade path (optional, paid — §D):** swap Rubik for a proprietary HE+EN superfamily (Ploni / Simpler by Fontef) if budget allows. Rubik is the parity-safe default for launch.

---

## A4. The hive motif (the owned visual system)

The hexagon is the **atomic unit** — logo, layout, illustration, and information architecture all share one geometric language:
- **Hexagon cell** → logo hex-"o", small abstract-bee device at app scale, bullet markers, icon frames, image masks, C7 channel-map tiles.
- **Honeycomb pattern** → faint 1px Hairline `#E3DDD5` honeycomb behind hero art and on deep-moment sections (texture, never loud).
- **The swarm** → Warm Yellow `#FFDB5B` dots tracing curved flight-paths that **converge once onto a single hexagon cell, then rest permanently.** This is the literal visualization of "one swarm, one goal." It is the hero's animated centerpiece — runs once on load, then holds the rested converged state. Zero loops.

**Motion behavior (`transform`/`opacity` only — no layout-triggering properties):**
- Hero swarm: dots animate along paths on initial page load (spring physics, `stiffness 100 / damping 20`, total duration ≤ 2s), converge to the central cell, then **rest.** `prefers-reduced-motion` → rested end-state from initial paint (zero animation).
- Section entries: gentle fade-up (`translate-y-16 → 0`, opacity, ~700ms, cubic-bezier `0.16,1,0.3,1`). Never `linear`/`ease-in-out`.
- CTA: nested "button-in-button" — arrow (`→` EN, `←` HE) in its own circular wrapper; hover: inner circle translates diagonally; `active:scale-[0.98]` tactile press.
- C7 channel tiles: staggered fade-up on scroll; on click/expand, tile reveals proof via `<details>`/`aria-expanded` — never `display:none`.

---

## A5. Usage rules

**Do**
- Off-White Ground `#FAF9F5` is the default canvas. Reserve Cream Panel `#F0EEE6` for 1–3 section-beat moments per page. Reserve True Black for the deepest 1–2 moment sections.
- One yellow accent per viewport focus — let it point to the single most important word or element.
- Generous whitespace: section padding `py-24`+ on desktop, `clamp` scaling on mobile.
- Hexagon as the only decorative primitive — no unrelated shapes, no stock illustration.
- Yellow underline/highlight on the hero H1 key word: static CSS, works at `prefers-reduced-motion`, works JS-off.

**Don't**
- No `#000000` (only `#0A0A0A` for True Black sections). No cool grays. No blue/purple. No gradient text on large headers.
- No emojis anywhere (matches `POSITIONING.md` §8 + anti-slop policy).
- Never letterspace or all-caps Hebrew. Never mirror the logo or Latin wordmark in RTL.
- No yellow as body text, ever. No yellow as a CTA background. CTAs are black-pill (Ink fill, light text).
- No 3-equal-card feature rows. No bento-grid-of-services as the primary layout.
- No perpetual motion loops. One convergence, then rest.
- Don't overuse dark or cream sections — their power is scarcity (~90% of the page is Off-White + Ink).

**Clear space & min size:** clear space = 1 hex-cell width on all sides. Min everyday-wordmark width 96px.

---

## A6. Registrability rationale (ties to NAME_CLEARANCE.md)

`NAME_CLEARANCE.md` flagged a crowded, phonetically-confusable Class-35 field and recommended a distinctive composite mark. This system answers that:

- **File the abstract-bee-in-cell device as the figurative mark** (Class 35 + 42, IL + US). This is the minimal geometric mark — a two-stroke or negative-space bee inside a honeycomb hexagon cell — used at favicon/avatar/loading scale. It is the single most distinctive and defensible element: a pure geometric abstraction, not a generic icon.
- The v2 striped bee device is retired; the abstract-bee-in-cell is its minimal, more-registrable successor.
- The `Bee⬡nd` hex-"o" logotype and the warm off-white/ink/yellow trade-dress reinforce the total brand package.
- **The "ee"-cells ligature is retired and is NOT part of any filing.**
- **Action:** the abstract-bee-in-cell mark must be vectored by a designer before filing (see §D). Do not invest in production printing until TM clearance (per the launch hold).

---

## A7. Voice → visual mapping (ties to POSITIONING §8)

| Voice canon trait | Visual expression |
|---|---|
| **Direct** | Tight tracking, high-contrast Ink on Off-White, no decorative noise, one CTA per focus |
| **Confident** | Asymmetric layouts (variance 7), large Rubik 700 display, left-aligned hero, owns the full left column |
| **Warm** | Off-white + ink + warm yellow, rounded-geometric Rubik, the converging swarm — never cold SaaS blue |
| **Anti-generic** | Custom hex-"o" mark, owned hexagon information system, no Inter/monospace/purple/centered-hero |
| **Honest about the machine** | C7 channel-map makes the AI system legible; C5 trust module shows the quality signals the product sells |

---

# PART B — LANDING PAGE VISUAL DESIGN — LAYERED COMBINATION

Bilingual one-pager; both languages at parity. The v3 landing is the layered combination locked in the 2026-07-03 decision: **C8 restrained SSR editorial hero → C7 code-driven honeycomb channel-map (mid-page spine) → C6 answer-engine proof block → C5 build-time trust module** — not a flat 10-section list with a bento services grid.

**Non-negotiable engineering rules (the site must prove the visibility it sells):**
- **LCP = the H1 text in SSR HTML** — verified in real field data, not just local dev. No text "typed in" from an empty node.
- **All motion is progressive enhancement** — every load-bearing element is visible without JS and at `prefers-reduced-motion`.
- **95+ PageSpeed Insights mobile, sub-1.2s LCP, zero CLS** — live demonstration of the product.
- **Self-host Rubik** with `unicode-range` subsets (Latin + Hebrew) and `size-adjust` fallback. No Google Fonts CDN.
- **Full RTL via logical CSS properties** — `padding-inline-*`, `margin-inline-*`, `inset-inline-*`. Physical `left`/`right`/`ml`/`mr` banned with a lint rule.
- **No bento-grid-of-services as the primary layout** — C7 hexagonal channel-map is the services representation.

**Global layout:** `max-w-[1180px]` centered, 28px gutters. Floating header (glass pill on scroll). Language toggle `EN / עב` in the nav — **Rubik 500, small, normal case** (not Geist Mono).

**RTL global rules:** `dir="rtl"` on the HE document → full layout mirrors. The **logo, Latin words, and numerals do not mirror.** All spacing via logical properties so the mirror is automatic.

---

### B0. Page architecture overview

Full page flow (EN and HE at parity):

1. **Hero** (C8 editorial shell) + founders-as-proof strip immediately below
2. **The Problem** (editorial zig-zag)
3. **The Swarm + C7 Honeycomb Channel-Map** (mid-page spine)
4. **Phased Onboarding** (how it works in layers)
5. **C6 Answer-Engine Proof Block** (near conversion)
6. **C5 Build-Time Trust Module**
7. **Social Proof**
8. **Founders** (deep editorial treatment)
9. **FAQ** (objection handling)
10. **Final CTA + Footer** (closing moment)

---

### B1. Hero (C8 — Restrained SSR Editorial Shell)

**Primary CTA: "Get a free footprint audit" / "קבלו אבחון נוכחות חינם"**

**Locked headline (founder pick — do not alter):**
> EN: **"The AI era moves fast."** / **"Your presence needs to match."**
> HE: **"עידן ה-AI זז מהר."** / **"הנוכחות שלכם צריכה לעמוד בקצב."**

**Locked subhead:**
> EN: "Beeond runs your whole digital presence — every channel your buyers use to find and evaluate vendors — as one coordinated swarm that adapts as fast as the market moves."
> HE: "Beeond מנהלת את כל הנוכחות הדיגיטלית שלכם — כל ערוץ שבו הלקוחות מחפשים ובוחנים ספקים — כנחיל אחד מתואם שמסתגל מהר כמו השוק."

**Layout:** Editorial Split — asymmetric 1.15fr / 0.85fr. Copy left, swarm-convergence art right. Not centered (banned at variance >4). The C8 shell is the SSR foundation: every word of the headline is real DOM text (never SVG-only or canvas-only).

**Type:**
- H1 Rubik 700 `clamp(40–68px)`. Line 1 in Ink `#141413`.
- Line 2 ("Your presence needs to match." / "הנוכחות שלכם צריכה לעמוד בקצב.") in Ink, with **one key word carrying a Warm Yellow `#FFDB5B` underline or inline highlight** — implemented as static CSS `text-decoration` or a CSS `background-image` gradient-bar. Present from paint-zero, no JavaScript required, works at `prefers-reduced-motion`.
- Subhead: Rubik 400, Muted Ink `#5C5751`, max 48ch.

**Eyebrow badge:** "AI-native · founder-led" pill (HE: "AI-native · מבוסס מייסדים") — Rubik 500, 11px, normal case, Cream Panel `#F0EEE6` background, Ink text, small Yellow hex-cell bullet.

**CTA:** Black-pill (Ink `#141413` fill, Off-White `#FAF9F5` text, Rubik 600), nested-arrow (`→` EN / `←` HE) in a small circular wrapper inside the pill. Secondary text-link "See how the swarm works". Micro-reassurance below ("No agency pitch. No deck.") — Rubik 400, Muted Ink.

**Motif/motion:** Converging-swarm SVG (Warm Yellow dots on faint Hairline honeycomb field) runs **once** on load — dots converge onto the central hex cell, then rest permanently. `prefers-reduced-motion` → rested state from initial paint (zero animation). Isolated client component.

**Founders-as-proof strip (immediately below or adjacent — NON-NEGOTIABLE at this price point):** A brief two-founder editorial row directly below the CTA area — hex-masked portrait placeholders (commission photography before launch; see §D) + compact FIG-labels: name (Rubik 700, 15px), role + credential (Rubik 500, 12px, Muted Ink). Cold buyers at the $4.5–15k/mo price point must see who they are hiring before any scroll. This is not the deep treatment (that is §B8) — it is the trust-seeding signal.

**RTL:** columns swap (art left, copy right), text right-aligned, CTA arrow `←`, swarm glow flips side. Language toggle: Rubik 500, small, normal case.

**Responsive:** single column < 768px — H1 → swarm art → CTA → founder strip stacked. Nav collapses to hex hamburger → full-screen glass menu (backdrop-blur, staggered Rubik link reveal, language toggle, CTA pinned to bottom). In RTL the hamburger sits on the left and menu mirrors. `min-h-[100dvh]`, never `h-screen`.

---

### B2. The Problem

Editorial, generous whitespace on Off-White Ground. Three bad options (traditional agency / in-house / DIY AI tools) as a 2-col asymmetric zig-zag — not three equal cards.

**Treatment:** small Hairline hex-cell bullet per option; the cost-of-inaction pull-quote ("Every week your competitors appear in AI answers and you don't…") set larger, Ink, as a pull-quote with space above/below (no quote marks). One Cream Panel `#F0EEE6` block holds the loss-aversion pull-quote.

**Type:** section eyebrow Rubik 500 small, normal case, Ink. Options in Rubik 600. Pull-quote Rubik 700 at larger clamp size, Ink. Body Rubik 400, Muted Ink.

**RTL:** zig-zag mirrors; pull-quote right-aligned.

---

### B3. The Swarm + C7 Honeycomb Channel-Map (Mid-Page Spine)

This section is the v3 replacement for the v2 Section 5 bento-services grid and the v2 Section 3 "Meet Your Swarm" combined. It is the centrepiece of the page — the owned information architecture — and the visual proof that "one coordinated swarm, whole footprint" is a real system, not a slogan. **No bento-grid-of-services.**

**Narrative intro:** Rubik 700 H2 + one short Rubik 400 lead paragraph. ("Not a vendor for every channel. One coordinated system, seeing the whole footprint.") Then the channel-map fills the section.

**C7 Honeycomb Channel-Map:**
- A **code-driven hex-grid** showing **8–12 service channels** from `OFFER_SPEC.md` §3 clusters. Approximate tiles: GEO/AI-search visibility · SEO content · LinkedIn organic · Paid (Google + LinkedIn) · Email lifecycle · Landing pages/CRO · Digital PR + backlinks · Founder-led content · Trust (G2/PR/case studies) · Rank tracking/reporting · Brand monitoring. (~10–11 tiles depending on layout.)
- Each hex tile = **channel name (Rubik 600) + one-line proof statement (Rubik 400) rendered as real SSR DOM text** — visible to JS-off crawls and AI crawlers. Use `<details>`/`aria-expanded` for expand interactions, never `display:none` on load-bearing content.
- On hover/click: tile expands to reveal proof detail. Touch targets ≥ 44px.
- **One tile** (GEO/AI-search or another anchor channel) is visually distinguished with a Warm Yellow `#FFDB5B` fill — the single yellow-accent hex in the grid. All other tiles are Ink outline on Off-White.
- The hexagonal grid geometry IS the brand in visual form — ownable, on-thesis, not a trend.
- Responsive: hex-grid reflows to 2-column then 1-column on mobile; tiles remain tap-friendly.

**RTL:** grid tiles and text mirror; anchor-yellow tile position adjusts for RTL visual balance.

---

### B4. Phased Onboarding (How It Works)

Same 3-step structure, updated palette and type.

**Layout:** horizontal 3-step path (Foundation → Content Engine → Amplification) connected by a Warm Yellow `#FFDB5B` flight-path line with outline hex nodes at each step. The path draws itself on scroll (SVG `stroke-dashoffset`, transform-safe).

**Treatment:** each step = hex node (Ink outline; Yellow fill for active/hovered) + Rubik 600 title + one-line body + week range in **Rubik 500 small, normal case** (e.g. "Weeks 1–4" — not Geist Mono, not all-caps). Subtext: "We don't light up 20 channels in week one." — Rubik 400, Muted Ink.

**RTL:** path runs right-to-left; node order and draw direction reverse. Week range numerals stay LTR.

**Responsive:** path rotates to vertical on mobile; nodes stack with the line running top-down.

---

### B5. C6 — Answer-Engine Proof Block (Near Conversion)

Positioned after the channel-map and phased onboarding, after trust is established — this defuses the verification trap that would sink C6 as a hero.

**What this is NOT:**
- Not a literal screenshot of ChatGPT, Perplexity, or Gemini UI. No platform branding, no implied-endorsement risk.
- Not a live claim about Beeond's own AI-search ranking (pre-launch, a buyer testing this query would find nothing — instantly catastrophic).

**What this IS:**
- An **editorial reinterpretation** of what a cited AI answer looks like for a Beeond client — custom-designed in the brand system, explicitly illustrative, framed as a demonstration of method.
- H2 Rubik 700: "Be the answer when your buyer asks an AI."
- Two or three editorial panels showing the sequence: the AI question → the cited passage → the structural enablers (Schema, llms.txt, authority signals). Each panel is typeset in brand type and color, not a product screenshot.
- Framing copy: "This is what we build toward — not a screenshot, a methodology." (final copy from CMO.)
- One Cream Panel `#F0EEE6` background to separate this section visually.

**RTL:** panels mirror; Arabic numeral step labels stay LTR.

---

### B6. C5 — Build-Time Trust Module

A compact trust module showing that Beeond ships on its own site the exact deliverables it sells. Positioned immediately before or after Social Proof.

**What it shows (build-time / static — NEVER per-visitor live):**
1. **JSON-LD present** — `Organization` + `Service` + `FAQPage` structured data, verified at build time.
2. **AI crawlers allowed** — GPTBot, ClaudeBot, PerplexityBot all in the `robots.txt` allowlist.
3. **Build-time Lighthouse** — mobile PageSpeed ≥ 95, LCP ≤ 1.2s, shown as a static build output value.

**Why build-time only:** a per-visitor live Lighthouse badge fails on Safari and mid-range Android at the worst possible moment, showing a red score to a prospect on a slow connection who is evaluating whether to hire Beeond. Build-time scores are honest and stable.

**Layout:** three compact signal tiles in a horizontal row (stacked on mobile). Each tile: small hex-outline icon, signal label (Rubik 600), one-line description (Rubik 400, Muted Ink). Cream Panel or Ink-on-Off-White treatment. Static HTML only.

**Framing copy:** "We grade ourselves. These are the signals we build into every client's site — live on ours." — Rubik 400, Muted Ink.

---

### B7. Social Proof

Logo strip + 1–2 testimonial cards. Until real proof exists, a "we're selective" framing card.

**Treatment:** testimonial in Rubik 400 with hex-avatar placeholder; attribution in **Rubik 500 small, normal case** (not Geist Mono). Logo strip: Ink on Off-White for cohesion. "We'll earn our reviews — ask us for references." as honest, filler-free copy.

Real logos/testimonials are **founder-supplied, launch-blocking** per `POSITIONING.md` §6. Design accommodates 0, 1, or N proofs gracefully.

**RTL:** mirrors; testimonial text right-aligned.

---

### B8. Founders (Deep Editorial Treatment)

2-col editorial split. Larger hex-portrait masks for Adam + Yarden (placeholder frames until photography is commissioned — see §D).

**Treatment:** name in Rubik 700, role and credential in **Rubik 500 small, normal case** (not Geist Mono). Bio Rubik 400. Pull-quote per founder. "Together" closing line: one phrase carries Warm Yellow `#FFDB5B` accent underline.

**RTL:** portrait/column order mirrors; Latin names unmirrored.

---

### B9. FAQ (Objection Handling)

Single-column accordion, **hex `+` marker** that rotates to `×` on open (fluid morph, cubic-bezier `0.16,1,0.3,1`). Max-65ch answers.

**Treatment:** Hairline `#E3DDD5` dividers (no boxes — VISUAL_DENSITY 4, anti-card). Question Rubik 500, answer Rubik 400, Muted Ink.

**RTL:** accordion mirrors; `+`/`×` marker sits on the right; logic flips.

---

### B10. Final CTA + Footer

**Secondary CTA: "Book a footprint call" / "קביעת שיחה עם המייסדים"**

**Layout:** True-Black `#0A0A0A` closing moment (or high-contrast Ink-on-Off-White with generous whitespace). The swarm shown in its **fully rested/converged state** — payoff of the one motion moment introduced in the hero.

**Treatment:** H2 Rubik 700 in Off-White "Your buyers are looking. Let's make sure they find you." Black-pill CTA (Off-White or Surface fill, Ink text, inverted for the dark section context). Sub-copy "We talk to every potential client personally." Footer: reversed `Bee⬡nd` logotype (Off-White letterforms, Yellow hex-"o" fill), language toggle **Rubik 500 small, normal case**, minimal nav, the TM-clearance hold note (internal builds only).

**RTL:** mirrors; CTA arrow `←`.

---

### B-extra. Responsive intent (all sections)

- Breakpoints `sm/md/lg/xl`; mobile-first. Every multi-column layout → single column < 768px, `w-full px-4`. No horizontal scroll (critical-fail).
- `min-h-[100dvh]` for full-height sections, never `h-screen` (iOS Safari jump).
- Type scales via `clamp()`; body never below 16px; touch targets ≥ 44px.
- Honeycomb background patterns: `pointer-events-none` fixed/contained — never on scrolling containers (GPU repaints).
- All motion: `transform`/`opacity` only. `prefers-reduced-motion` honored everywhere. Yellow underline is static CSS from paint-zero — no change needed at reduced-motion.

---

# PART C — Content / proof dependencies

These are designed as frames; real content is **founder-supplied** (per `POSITIONING.md` §6 / §7). Not design blockers but launch-blockers:

1. Founder bios + real credentials (§B1 brief strip + §B8 deep section). Founder last names.
2. **Founder editorial photography** (§B1 + §B8 — launch-blocking; see §D).
3. ≥1 named client logo + permission (§B7).
4. ≥1 testimonial (§B7).
5. C6 proof content: editorial panel sequence showing "become the cited answer" — designer-authored, founder-approved (§B5).
6. A GEO/AI-search proof signal (citation screenshot, ranking data, or similar) for C6 framing.
7. C7 channel-map one-line proof statements — one per tile (8–12 tiles), CMO-drafted + founder-approved.
8. Before/after example for the problem section (if used — optional).
9. Tier names + summaries if a pricing block is added (CBO/CPO).
10. Contract/pause terms for FAQ (§B9, CBO).

---

# PART D — What needs a human or paid step

| Item | Why it can't be auto-generated here | Recommended step |
|------|-------------------------------------|------------------|
| **Abstract-bee-in-cell device vectoring** — the two-stroke minimal abstract bee inside the honeycomb cell, clean at 16×16px (favicon) and 32×32px (avatar/loading) | A two-stroke geometric mark that reads correctly at favicon scale is a precise craft problem; AI-generated or rough SVG degrades the "minimal" claim into "smudged" | Type/brand designer in Figma or Illustrator; ~$200–600 bootstrapped. Smaller scope than v2 bee-glyph: two strokes + one hex outline, not a full bee illustration. |
| **`Bee⬡nd` logotype refinement** — hex-"o" on proper grid, full lockup/clear-space artboard set, SVG/PNG/favicon export | Proper metric refinement and export at all sizes | Same designer pass as the abstract-bee device; lightweight once direction is locked. |
| **Trademark clearance & abstract-bee-in-cell filing** (Class 35 + 42, IL + US) | Legal opinion required. File the abstract-bee-in-cell device as the figurative mark. | Trademark attorney (low-four-figures USD) **before** any public launch — hard gate. |
| **Editorial founder photography** (Adam + Yarden) | Launch-blocking. Mediocre or absent founder photos collapse the restraint thesis; the C8 shell has nowhere to hide weak visual proof. Commission first. | Professional editorial shoot or high-quality existing headshots, hex-masked in brand art. |
| **Manual craft-polish cycles** | AI codegen produces structurally correct but rhythmically template layouts. The C7 hex-grid, the single swarm convergence, and the C8 typographic rhythm all require explicit hand-tuned iteration. | Budget these as a **separate explicit line item** — not part of code scaffolding. If underfunded, ship a simpler architecture cleanly rather than ship this combination half-baked. |
| **C7 channel-map prototype** | The hex-grid expand-interaction must be prototyped in isolation before full build to verify mobile behavior | Phase 0 gate: build the expand-interaction prototype; test on mid-range Android (Moto G / Galaxy A). |
| **C6 editorial proof panel design** | The answer-engine editorial panels must be designed as brand assets — not pulled from product screenshots | Design-Lead passes creative direction; frontend implements as static branded HTML. |
| **WCAG accessibility audit on the built page** | Must verify the real coded page (contrast, focus, keyboard, ARIA, RTL screen-reader) | Spawn **QA-Lead (accessibility mode)** in Wave 3 once CTO has a build — non-negotiable gate. |
| **Premium type license (optional)** | Ploni/Simpler (Fontef) for a more owned HE+EN superfamily | Paid font license — optional; Rubik is free and parity-safe for launch. |

---

# Anti-slop checklist (from HERO_CONCEPT_EXPLORATION.md — design-build gate)

Verified by Design-Lead and CTO before any stakeholder demo or staging build. Every item is a hard gate.

- [ ] **LCP is the H1 in SSR HTML** — verified in real field data, not just local dev. No text "typed in" from an empty DOM node.
- [ ] **Every word of the pitch is real DOM text** — nothing load-bearing baked into canvas, SVG-only, video, or image. JS-off crawl shows the full offer.
- [ ] **Rubik self-hosted, subsetted, `size-adjust`'d** — no Google Fonts CDN; no font-swap CLS on the hero headline. Latin + Hebrew subsets, both preloaded.
- [ ] **One motion moment, and it rests** — "converges once, then rests" honored. Zero perpetual loops. Hand-tuned, not a particle library default.
- [ ] **Yellow only as fill/highlight, never body text; one accent per screen.** Warm Yellow `#FFDB5B` is fill/underline only; no readable text set in yellow.
- [ ] **Founders + one hard proof signal adjacent to or inside the fold** — cold buyer does not scroll to learn who they are hiring.
- [ ] **RTL reviewed by a native Hebrew reader on a real device** — not assumed from a `dir` flip. C7 hex-map and asymmetric grids are where it breaks.
- [ ] **`prefers-reduced-motion` → rested end-state from initial paint.** Yellow underline exists in static CSS and is visible without any animation.
- [ ] **INP tested on a mid-range Android** (Moto G / Galaxy A) — swarm convergence and C7 hex-expand interactions must not spike past 200ms INP.
- [ ] **JSON-LD mirrors on-page copy verbatim** — a build-time check keeps structured data in sync with copy changes.
- [ ] **No literal screenshots of ChatGPT/Perplexity/Gemini UI** — C6 panels are editorial-designed brand assets.
- [ ] **No bento-grid-of-services as primary layout** — C7 channel-map is the services architecture; bento is the pattern-matched "agency template" tell of 2024–2026.
- [ ] **All motion uses only `transform` and `opacity`** — no `width`, `height`, `top`, `left` animations.
- [ ] **C7 channel tiles expose SSR DOM text** — `<details>`/`aria-expanded`, never `display:none` on load-bearing proof text.

---

## Hand-off to Wave 3 (CTO) — build notes

- Stack per `CLAUDE.md`: Next.js 16 App Router, React 19, TS strict, Tailwind, Shadcn/UI (customized — never default state).
- **Phase 0 gates (before any full build):** self-host + subset Rubik HE+EN with `size-adjust` fallback; build C7 hex-expand prototype; commission founder photography; lock copy with CMO; write JSON-LD + `llms.txt` + robots allowlist.
- Font loading: Next.js font loader or manual `@font-face` with `unicode-range`. Rubik Latin + Hebrew subsets. No Geist Mono.
- Full RTL via `dir` + logical CSS properties. Lint rule banning physical `left`/`right`/`ml`/`mr`.
- Tailwind theme tokens from §A2: `--color-ground: #FAF9F5`, `--color-ink: #141413`, `--color-yellow: #FFDB5B`, `--color-panel: #F0EEE6`, `--color-surface: #FFFFFF`, `--color-muted: #5C5751`, `--color-hairline: #E3DDD5`.
- The v2 HTML brand board is **v2-superseded** — do not lift its code; rebuild to the v3 token stack. All interactive components require the four states: loading / empty / error / success.
- Target: **95+ PageSpeed Insights mobile, sub-1.2s LCP, zero CLS** — verified with the real build on real field data, not just local dev.
- Honor the Design-Lead + QA-Lead WCAG gate before any merge. Brand stays internal until TM clearance.

_Last updated: 2026-07-03 | Author: Design-Lead | Status: v3 — CEO brand-craft revision + layered landing direction locked; design-only, launch held pending trademark clearance._
