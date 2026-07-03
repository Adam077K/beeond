# Beeond — Brand Identity System & Landing Page Visual Design

> **Author:** Design-Lead (reports to CPO) · **Date:** 2026-06-29 · **Status:** v2 — design-critic revision pass applied (see [`DESIGN_CRITIQUE_wave2.md`](DESIGN_CRITIQUE_wave2.md); all P1 + P2 resolved).
>
> ⚠️ **DESIGN-ONLY — DO NOT LAUNCH PUBLICLY.** Per [`NAME_CLEARANCE.md`](../02-competitive/NAME_CLEARANCE.md) (MEDIUM collision risk), formal trademark clearance must complete before this brand goes live. We design freely now; we do not ship live.
>
> **Companion docs:** [`POSITIONING.md`](POSITIONING.md) (voice canon, 10-section copy) · [`OFFER_SPEC.md`](../04-features/OFFER_SPEC.md) (§3 service clusters) · [`FOUNDING_BRIEF.md`](../01-foundation/FOUNDING_BRIEF.md) §9 brand direction · [`NAME_CLEARANCE.md`](../02-competitive/NAME_CLEARANCE.md) (registrability) · [`DESIGN_CRITIQUE_wave2.md`](DESIGN_CRITIQUE_wave2.md) (independent review).
>
> **Artifacts (real, rendered mockups — v2; hero copy = founder-locked H1):**
> - Interactive HTML brand board + landing concept: [`brand-assets/beeond-brand-board.html`](brand-assets/beeond-brand-board.html) — open in a browser; loads live web fonts.
> - Desktop full render: [`brand-assets/concept-desktop-full.png`](brand-assets/concept-desktop-full.png)
> - Hero — EN (new headline): [`brand-assets/concept-hero-en.png`](brand-assets/concept-hero-en.png)
> - Mobile hero render (real hex hamburger): [`brand-assets/concept-mobile-hero.png`](brand-assets/concept-mobile-hero.png)
> - Mobile nav states (collapsed + open glass menu): [`brand-assets/concept-mobile-nav-states.png`](brand-assets/concept-mobile-nav-states.png)
> - RTL hero (logo non-mirrored, art column left): [`brand-assets/concept-rtl-hero.png`](brand-assets/concept-rtl-hero.png)
>
> **Locked since v2:** hero headline = "The AI era moves fast. Your presence needs to match." (founder pick) · NO coined brand term — all copy descriptive · domain = **beeond.ai** (per CEO/Research-Lead).

> **Critique-pass changelog (v0 → v2):** (1) locked **one friendly bee glyph** (striped top-down bee, no face) reused everywhere incl. the hero convergence cell — fixes the "frown"; (2) applied **wordmark is now a designed logotype** (the "o" is a honeycomb cell, "Bee⬡nd"), deployed in every header so applied brand never reads as stock Rubik — the hive+bee **device** is the primary registrable mark; (3) **mobile nav** collapsed-hamburger + open full-screen glass-menu states designed and rendered; (4) **contrast** fixed — microcopy/captions → Taupe `#6F665C` (5.3:1), small honey labels → new **Amber Text** `#7A4A05` (6.6:1); (5) **HE eyebrow** uses Rubik 500 (not Latin mono-caps); (6) **founder chips** given trust weight; (7) **RTL logo + Latin terms locked LTR** (never mirror).

---

## 0. Design thesis (the one-sentence direction)

**"Warm Hive Futurism"** — editorial warmth (honey, cream, espresso) fused with precise, future-facing structure (a hexagon/honeycomb system, mono labels, a converging-swarm motion motif). One accent: honey.

This thesis exists to **prove the core promise**: *AI that doesn't look generic.* If the brand itself looked like a default LLM SaaS template — Inter font, purple gradient, three equal cards — it would refute the pitch. So every choice here is deliberately anti-template: a warm palette (not cool SaaS blue/purple), a custom composite logo (not a stock-font wordmark), asymmetric layout (not centered-hero defaults), and a single owned motif (the hive). **Differentiation anchor:** screenshot it with the logo removed and you'd still recognize it by the honeycomb hex system + honey-on-espresso warmth + the swarm-converging-to-one-cell motion.

DFII (frontend-design): Impact 4 + Fit 5 + Feasibility 5 + Performance 4 − Consistency-risk 1 = **17 / capped at "Excellent — execute fully."**

Anti-slop dials (from `design-taste-frontend`): **DESIGN_VARIANCE 7** (confident asymmetry, still trustworthy for B2B buyers) · **MOTION_INTENSITY 6** (fluid, purposeful, never decorative spam) · **VISUAL_DENSITY 4** (airy/breathing — premium, not cockpit).

---

# PART A — BRAND IDENTITY SYSTEM

## A1. Logo — composite wordmark + hive device

The logo is a **composite mark**, not the bare word "Beeond" in a stock font. This is a deliberate registrability decision (see §A6) and a creative one. It has two coordinated parts plus a flagged enhancement.

### 1. The hive + bee device — PRIMARY DISTINCTIVE / REGISTRABLE MARK
A **honeycomb hexagon cell** containing **one locked, friendly bee**: a top-down bee with a striped rounded body, two light wings, and short antennae — **no face** (the v0 dot-and-curve glyph misread as a frown at the convergence cell; that is fixed). This single glyph is reused **identically at every size and in every context** — nav, headers, the hero swarm-convergence cell, favicon, social avatar, "swarm" loading state. **This device is the figurative mark to file** (see §A6) precisely because it is the most distinctive and consistent element. Two color variants only: standard (espresso bee in honey hex) for cream/dark backgrounds, and inverted (honey bee in espresso hex) for honey-field backgrounds — the *form* never changes.

### 2. The applied wordmark — a designed logotype (the "o" is a cell)
In all applied use the wordmark is **"Bee⬡nd"**, where the **"o" is rendered as a honeycomb cell** (outline hexagon in `currentColor`). This is legible, unmistakably reads "Beeond," is trivially consistent in CSS/SVG, and ensures the **applied brand never reads as stock Rubik bold** — the exact anti-generic/registrability weakness the design-critic flagged. The rest is Rubik 600, tracking `-0.03em`. The device + wordmark always lock up together in headers.

### 3. (Flagged enhancement) The "ee"-cells wordmark
The richer idea — the doubled **"ee"** resolving into two nested honeycomb cells ("the swarm forming from the name") — remains the **aspirational premium wordmark**, but is **kept out of applied use** until a type designer vectors it into a resolved, kerned ligature, because un-vectored it misreads as "Beoond" (P3.2). Deploy only after §D type-design step. The "o"-cell logotype is the production-ready interim.

### Lockups (all three rendered in the brand board, v2)
| Lockup | Use |
|--------|-----|
| **Primary** — device + "Bee⬡nd" wordmark on Cream | Default: site header, decks, email signature |
| **Reversed** — device + cream wordmark on Hive Dark | Dark sections, footers, social cards |
| **Honey field** — inverted device + espresso wordmark on Honey | Hero accents, stickers, merch, the "free audit" CTA surfaces |

**Construction:** the device sits to the left of the wordmark with clear space = one hex-cell width; optically centered on the hex's vertical midline. **The lockup is locked LTR and never mirrors in RTL** (it sits at the RTL start/right, but its internal order and the Latin wordmark do not flip).

## A2. Color palette

One accent (honey), a warm neutral system, two dark tones. No second brand color — discipline is what reads premium. **Never** the template's cool blue (`#3370FF`), never AI-purple, never pure black.

| Token | Hex | Role |
|-------|-----|------|
| **Hive Honey** | `#F2A52C` | Primary accent — large fills, CTAs (honey-field), the mark, motif dots |
| **Honey Glow** | `#FCC65A` | Lighter honey — glows, gradients, swarm flight-paths, hover |
| **Amber Deep** | `#B36A06` | Honey-toned **LARGE text/links on light** (≥18px/bold — AA large; e.g. the accent headlines "Your brand", "One coordinated swarm") |
| **Amber Text** | `#7A4A05` | Honey-toned **SMALL text on light** — eyebrows, mono labels, bento cluster tags. **6.6:1 on cream/comb-wash → AA.** (NEW in v2 — fixes the under-AA amber eyebrows.) |
| **Comb Wash** | `#FBEFD7` | Soft honey-wash section blocks, badges, tinted tiles |
| **Faint Tint** | `#FDF7EC` | Faintest honey background separation |
| **Cream Canvas** | `#FBF8F2` | Primary page background — warm off-white |
| **Surface** | `#FFFFFF` | Card / container fill |
| **Espresso Ink** | `#1C1714` | Primary text — warm near-black (brown undertone, **not** `#000000`, **not** cold slate) |
| **Hive Dark** | `#15110E` | Dark-section background — warm black (the "honeycomb at night") |
| **Hive Dark 2** | `#221A14` | Raised surface on dark |
| **Taupe Muted** | `#6F665C` | Secondary/body-supporting text — **5.3:1 on cream → AA.** All microcopy + captions live here now. |
| **Soft Caption** | `#9B9286` | **DECORATIVE ONLY (≈2.6:1 — fails AA).** Never use for load-bearing text. Reserved for non-essential ornament; default to Taupe Muted instead. |
| **Hairline** | `#ECE3D4` | 1px borders on light |
| **Hairline (dark)** | `rgba(252,198,90,0.16)` | 1px borders on dark |

**Contrast / accessibility rules (carry into the WCAG gate) — v2, all small-text tiers now pass AA:**
- Body & UI text = **Espresso Ink on Cream** (≈ 13:1, AAA) or **Cream on Hive Dark** (AAA).
- **Honey is a fill/large-display color, never a body-text color.** Honey *text* on light: **Amber Deep** `#B36A06` for large (≥18px), **Amber Text** `#7A4A05` for small (eyebrows/labels — 6.6:1).
- **Microcopy + captions** (e.g. CTA reassurance "No agency pitch…", bento descriptions) = **Taupe Muted** `#6F665C` (5.3:1), reduced letterspacing. **Soft Caption gray is banned for any meaningful text** (the v0 ~2.6:1 failure).
- Honey CTA = Espresso Ink text on Hive Honey (large, bold — passes AA).
- Focus rings: 2px Amber Deep with 2px offset; never honey-glow-only (must be visible on both cream and white).
- **These are concept-level contrast targets; the binding check is the QA-Lead WCAG audit on the coded page (§D).**

## A3. Typography — bilingual HE + EN at parity

The hard constraint is **Hebrew + English at parity**. The cleanest way to guarantee parity is a **single superfamily that natively contains both scripts** — so headlines, body, and weights match across languages without a "translated-looking" second font.

**Primary face — `Rubik` (variable, weights 300–800).**
- True bilingual: ships a complete **Hebrew** glyph set and a **Latin** set from one design.
- **Rounded geometric** terminals = warm + friendly (the bee/honey side) while staying geometric and modern (the tech side). It is the single typeface that hits all three brief adjectives at once.
- Hierarchy comes from **weight + size + color**, never from a second display font — this preserves HE/EN parity and avoids RTL font-swap complexity.
- Not on the banned list (anti-slop bans Inter/Roboto; Rubik is distinct from both).

**Mono accent — `Geist Mono`** (fallback `JetBrains Mono`).
- Latin only. Used **sparingly** for eyebrows, section numbers, data, the `// ONE.SWARM / ONE.GOAL` style labels — the "tech texture."
- **Hebrew has no monospace/uppercase tradition:** in HE, eyebrow labels render in **Rubik 500 at small size with minimal (≤2%) letterspacing** — *not* Geist Mono, *not* aggressive tracking. (Hebrew must never be ALL-CAPS — there is no case — and should not be heavily letterspaced.)

**Type scale (fluid, `clamp()`):**
| Role | Spec |
|------|------|
| Display H1 | Rubik 700, `clamp(40px, 5vw, 68px)`, tracking `-0.035em`, line-height 1.0 |
| H2 | Rubik 700, `clamp(28px, 3.4vw, 46px)`, tracking `-0.03em` |
| H3 / tile title | Rubik 600, 19–22px, tracking `-0.01em` |
| Body | Rubik 400, 17–19px, line-height 1.55, **max 48–65ch** |
| Eyebrow (EN) | Geist Mono 500, 11px, `letter-spacing 0.22em`, uppercase |
| Eyebrow (HE) | Rubik 500, 12px, `letter-spacing ≤0.02em`, normal case |
| Caption / data | Geist Mono 400, 11–13px, Soft Caption color |

**Hebrew-specific typographic rules:**
- Hebrew has a larger visual weight / x-height feel — set HE body **~1px larger** than EN at the same role for optical parity.
- Curly quotes differ: HE uses gershayim/geresh conventions; in EN use real curly `'` `"` `—` (no straight quotes, no `--`).
- Numerals stay LTR inside RTL text (already handled by `dir`); the logo and Latin brand name **never mirror**.

**Premium upgrade path (optional, paid — see §D):** swap Rubik for a proprietary Hebrew+Latin superfamily such as **Ploni / Simpler (Fontef)** if budget allows a more owned feel. Rubik is the bootstrapped, parity-safe default and is fully sufficient for launch.

## A4. The hive motif (the owned visual system)

The hexagon is the **atomic unit** of the entire system — it ties logo, layout, and illustration into one language:
- **Hexagon cell** → logo device, avatar masks, bullet markers, icon frames, image masks, section dividers.
- **Honeycomb pattern** → faint 1px hairline pattern behind hero art and dark sections (texture, never loud).
- **The swarm** → honey-colored **dots tracing curved flight-paths that converge on a single hexagon cell.** This is the literal visualization of the positioning line *"one swarm, one goal."* It is the hero's animated centerpiece and the recurring transition between sections.

**Motion behavior (MOTION_INTENSITY 6, `transform`/`opacity` only):**
- Hero swarm: dots drift along their paths and *pulse* as they reach the central cell — a perpetual, slow, ~12s loop (spring physics, `stiffness 100 / damping 20`). Isolated client component; respects `prefers-reduced-motion` (falls back to a static converged state).
- Section entries: gentle fade-up (`translate-y-16 → 0`, opacity, ~700ms, custom cubic-bezier `0.16,1,0.3,1`) — never `linear`/`ease-in-out`.
- CTA: nested "button-in-button" arrow (`→` in EN, `←` in HE) in its own circular wrapper; on hover the inner circle translates diagonally; `active:scale-[0.98]` tactile press.

## A5. Usage rules (light)

**Do**
- Cream is the default canvas; reserve Hive Dark for 1–2 "moment" sections (the swarm reveal, final CTA / footer).
- One honey accent per viewport focus — let it point to the single most important action.
- Generous whitespace: section padding `py-24`+ on desktop, scaling down with `clamp` on mobile.
- Hexagon as the only decorative primitive — no unrelated shapes, no stock illustration.

**Don't**
- No `#000000`, no cool grays, no blue/purple. No gradient *text* on big headers.
- No emojis anywhere (matches `POSITIONING.md` §8 + anti-slop policy).
- Never letterspace or all-caps Hebrew. Never mirror the logo or Latin wordmark in RTL.
- No honey as small body-text color (use Amber Deep). No 3-equal-card feature rows (use the asymmetric bento).
- Don't overuse the dark sections — their power is scarcity.

**Clear space & min size:** clear space = 1 hex-cell width on all sides of the lockup. Min wordmark width 96px; below that, use the hive mark alone.

## A6. Registrability rationale (ties to NAME_CLEARANCE.md)

`NAME_CLEARANCE.md` flagged a crowded, phonetically-confusable Class-35 field (BeondX, Beeyond Media, Beeond Publicidade) and explicitly recommended *"a distinctive house style + wordmark (logo, color, the bee/hive device) to carve distinctiveness… A distinctive composite mark is more registrable than the bare word 'Beeond.'"*

This system answers that directly:
- **File the hive + bee device as the figurative mark** (Class 35 + 42). It is one locked, consistent glyph (v2) — the single most distinctive and defensible element, stronger than a standard-character word mark in a crowded namespace. The "Bee⬡nd" cell-logotype + honey trade-dress reinforce it; the "ee"-cells ligature can be added to the filing once vectored.
- **Owned color + motif** (honey + honeycomb-swarm) builds the *trade-dress* distinctiveness that separates Beeond from plainer "Bee/Beyond/Beond" competitors in the marketplace, reducing real-world confusion.
- **Action:** the final logo files should be prepared so a trademark attorney can file the **figurative mark in Class 35 (and 42)**. Do not invest in production/printing of final assets until clearance returns (per the launch hold).

## A7. Voice → visual mapping (ties to POSITIONING §8)

| Voice canon trait | Visual expression |
|---|---|
| **Direct** | Tight tracking, high contrast ink-on-cream, no decorative noise, one CTA per focus |
| **Confident** | Asymmetric layouts (variance 7), large Rubik 700 display, owns the whole left column |
| **Warm** | Honey + cream + espresso, rounded-geometric Rubik, the bee — never cold SaaS blue |
| **Anti-generic** | The entire non-template system *is* the proof — custom mark, owned motif, no Inter/purple/centered-hero |
| **Honest about the machine** | Mono labels + the swarm diagram make the AI system legible, not hidden |

---

# PART B — LANDING PAGE VISUAL DESIGN

Bilingual one-pager. Maps 1:1 to the 10 sections in [`POSITIONING.md`](POSITIONING.md) §5. **Both languages launch at parity** (CMO recommendation). Below: layout archetype, type/color/motif treatment, motion, and the **RTL adaptation** for each. The hero (EN + HE) and Sections 3 & 5 are rendered in the mockup artifacts.

**Global layout:** `max-w-[1180px]` centered, 28px gutters. Floating header (becomes a glass pill on scroll). Language toggle `EN / עב` in the nav, Geist-Mono styled.

**RTL global rules:** set `dir="rtl"` on the HE document → the *entire layout mirrors* (nav, columns, alignment, CTA arrow flips `→`/`←`). The **logo, Latin words, and numerals do not mirror.** Padding/margin must use logical properties (`padding-inline-*`) so the mirror is automatic.

---

### Section 1 — HERO
**Primary CTA: "Get a free footprint audit" / "קבלו אבחון נוכחות חינם"** (CTA unchanged)

**Locked headline (founder pick — replaces v0 "footprint/swarm" headline; NO coined term, fully descriptive):**
> EN: **"The AI era moves fast."** / **"Your presence needs to match."** (2nd line accented)
> HE: **"עידן ה-AI זז מהר."** / **"הנוכחות שלכם צריכה לעמוד בקצב."** (2nd line accented)

**Subhead:**
> EN: "Beeond runs your whole digital presence — every channel your buyers use to find and evaluate vendors — as one coordinated swarm that adapts as fast as the market moves."
> HE: "Beeond מנהלת את כל הנוכחות הדיגיטלית שלכם — כל ערוץ שבו הלקוחות מחפשים ובוחנים ספקים — כנחיל אחד מתואם שמסתגל מהר כמו השוק."

- **Archetype:** Editorial Split (asymmetric 1.15fr / 0.85fr). Copy left, **swarm art** right. *Not* a centered hero (banned at variance >4).
- **Type:** H1 Rubik 700 `clamp(40–68px)`; line 1 "The AI era moves fast." / "עידן ה-AI זז מהר." in Espresso, the **second line** ("Your presence needs to match." / "הנוכחות שלכם צריכה לעמוד בקצב.") in **Amber Deep**. Subhead Taupe Muted, max 48ch. (Inline Latin "AI"/"Beeond" stay LTR within the HE flow.)
- **Eyebrow badge:** "AI-native · founder-led" pill with a pulsing honey status dot (HE: "AI-native · מבוסס מייסדים", Rubik 500).
- **CTA:** honey-field pill, Espresso text, nested-arrow. Secondary text-link "See how the swarm works". Micro-reassurance below ("No agency pitch. No deck.") — Geist Mono.
- **Motif/motion:** the converging-swarm SVG on a faint honeycomb field with a soft Honey-Glow radial. Perpetual slow loop; reduced-motion → static.
- **RTL:** columns swap (art moves to the left), text right-aligned, CTA arrow becomes `←`, swarm glow flips side. Rendered in the "Hebrew (RTL mirror)" frame of the mockup.
- **Responsive:** single column < 768px — H1 → art → CTA stacked (see mobile render). Nav collapses to a **hex hamburger → full-screen honey-tinted glass menu** with staggered link reveal, language toggle, and the CTA pinned to the bottom. **Both the closed and open states are now designed and rendered** ([`concept-mobile-nav-states.png`](brand-assets/concept-mobile-nav-states.png)) — not deferred. In RTL the hamburger sits on the left and the menu mirrors.

### Section 2 — THE PROBLEM
- **Archetype:** Left-aligned editorial, generous whitespace on Cream. Three "bad options" (traditional agency / in-house / DIY AI tools) as a **2-col asymmetric zig-zag**, not three equal cards.
- **Treatment:** small hex bullet per option; the cost-of-inaction line ("Every week your competitors appear in AI answers and you don't…") set larger, Espresso, as a pull-quote with space above/below (no quote marks).
- **Color:** Cream; one Comb-Wash block to hold the loss-aversion pull-quote.
- **RTL:** zig-zag mirrors; pull-quote right-aligned.

### Section 3 — SOLUTION: MEET YOUR SWARM
- **Archetype:** **Hive Dark moment section** (warm black) — the first dark reveal, high contrast for emphasis. Rendered in the mockup.
- **Treatment:** Honey-Glow eyebrow "One swarm · one goal", H2 in Cream (max 18ch), lede in warm gray. The two founders (Adam, Yarden Morgan) as **hex-avatar chips** on Hive Dark 2 surfaces — sells the people.
- **Motif:** the swarm diagram can re-appear faintly behind the headline (honeycomb hairline).
- **RTL:** mirrors cleanly; founder chips right-aligned. Founder names stay LTR.

### Section 4 — HOW IT WORKS (PHASED ONBOARDING)
- **Archetype:** horizontal **3-step path** (Foundation → Content Engine → Amplification) connected by a honey **flight-path line** with hex nodes at each step (reuses the swarm motif as a timeline).
- **Treatment:** each step = hex node + Rubik 600 title + one-line body + week range in Geist Mono ("WEEKS 1–4"). Subtext line: "We don't light up 20 channels in week one."
- **Motion:** the connecting path **draws itself** on scroll (SVG stroke-dashoffset, transform-safe).
- **RTL:** the path runs **right-to-left**; node order and the draw-direction reverse. Week ranges stay LTR numerals.
- **Responsive:** path rotates to vertical on mobile (nodes stack, line runs top-down).

### Section 5 — SERVICES (THE FULL FOOTPRINT)
- **Archetype:** **Asymmetric bento grid** (rendered in mockup) — clusters from `OFFER_SPEC.md` §3: Visibility (SEO+GEO+Schema) as the tall Hive-Dark feature tile; Content engine wide; Paid / Email small; Trust / Reporting mid (one Comb-Wash). Explicitly **not** a 3-equal-card row.
- **Treatment:** each tile = Geist-Mono cluster eyebrow + Rubik 600 title + one-line desc. Add-ons ("For businesses with a local presence…") set apart in a thin footnote strip below the grid.
- **Motion:** tiles fade-up staggered on scroll; feature tile has a subtle perpetual honey shimmer.
- **RTL:** grid mirrors (feature tile to the right); tile text right-aligned.
- **Responsive:** collapses to 2-up then 1-up; all span-overrides reset.

### Section 6 — THE ANTI-GENERIC PROMISE
- **Archetype:** centered-narrow editorial **statement** (the one place a near-centered, quiet treatment is right — it's a manifesto). Comb-Wash background to set it apart.
- **Treatment:** H2 "AI that doesn't make you sound like everyone else." Body in two tight paragraphs. A **before/after** comparison block (generic AI output vs. Beeond-calibrated) — two panels, the "generic" one deliberately flat/gray, the "Beeond" one warm with the hex accent. *(Content is a founder-supplied proof asset — placeholder frame designed, real content pending; see §C.)*
- **RTL:** before/after panels mirror order.

### Section 7 — SOCIAL PROOF
- **Archetype:** logo strip + 1–2 testimonial cards. Until real proof exists, design a **"we're selective" framing** card rather than fake logos.
- **Treatment:** testimonial in Rubik 400 with a hex-avatar; attribution in Geist Mono. Logo row monochrome (Espresso) for cohesion. "We'll earn our reviews — ask us for references." as honest filler-free copy.
- **Note:** real logos/testimonials are **founder-supplied, launch-blocking** per `POSITIONING.md` §6. Design accommodates 0, 1, or N proofs gracefully (empty-state = the selective-framing card).
- **RTL:** mirrors; testimonial text right-aligned.

### Section 8 — ABOUT THE FOUNDERS
- **Archetype:** **2-col editorial split**, larger hex-portrait masks for Adam + Yarden. The people *are* the proof at this stage.
- **Treatment:** name Rubik 600, role Geist Mono, bio Rubik 400. Pull-quote per founder. Honey accent on the "Together" closing line.
- **RTL:** portrait/column order mirrors; Latin names unmirrored.

### Section 9 — FAQ (OBJECTION HANDLING)
- **Archetype:** single-column accordion, **hex `+` marker** that rotates to `×` on open (fluid morph, not instant). Max-65ch answers.
- **Treatment:** Hairline dividers (no boxes — VISUAL_DENSITY 4, anti-card). Question Rubik 500, answer Taupe Muted.
- **RTL:** accordion mirrors; the `+`/`×` marker sits on the right; chevron logic flips.

### Section 10 — FINAL CTA + FOOTER
**Secondary CTA: "Book a footprint call" / "קביעת שיחה עם המייסדים"**
- **Archetype:** **Hive Dark closing moment** — full-width, the swarm fully converged on the single cell (payoff of the motif introduced in the hero).
- **Treatment:** H2 Cream "Your buyers are looking. Let's make sure they find you.", honey-field CTA pill, sub-copy "We talk to every potential client personally." Footer: reversed logo lockup, language toggle, minimal nav, the TM-clearance hold note (internal builds only).
- **RTL:** mirrors; CTA arrow `←`.

---

## B-extra. Responsive intent (all sections)
- Breakpoints `sm/md/lg/xl`; mobile-first. Every multi-column layout → single column < 768px, `w-full px-4`. No horizontal scroll (critical-fail if present).
- Full-height sections use `min-h-[100dvh]`, never `h-screen` (iOS Safari).
- Type scales via `clamp()`; body never below 16px; touch targets ≥ 44px.
- Honeycomb background patterns are `pointer-events-none` fixed/contained — never on scrolling containers (GPU).
- All motion `transform`/`opacity` only; `prefers-reduced-motion` honored (swarm → static converged state).

---

# PART C — Content / proof dependencies (design is ready, content is not)

These are designed as frames; real content is **founder-supplied** (per `POSITIONING.md` §6 / §7). Not design blockers, but launch-blockers:
1. Founder bios + real credentials (Section 8). Founder last names.
2. ≥1 named client logo + permission (Section 7).
3. ≥1 testimonial (Section 7).
4. Before/after generic-vs-Beeond content example (Section 6).
5. A GEO/AI-search proof screenshot (Section 3/6).
6. Tier names + summaries if a pricing/tier block is added (CBO/CPO).
7. Problem-section statistic (Section 2 placeholder).
8. Contract/pause terms for FAQ (Section 9, CBO).

---

# PART D — What needs a human or paid step (flagged, not faked)

| Item | Why it can't be auto-generated here | Recommended step |
|------|-------------------------------------|------------------|
| **Production-grade logo vectoring** — refine the locked bee device + "Bee⬡nd" cell-logotype; optionally develop the premium "ee"-cells ligature | The v2 SVGs are production-*direction*; a designer should redraw on a proper grid, build the full lockup/clear-space artboard set, and export SVG/PNG/favicon | Type/brand designer in Figma or Illustrator; ~$300–1.5k bootstrapped, or a careful in-house Figma pass. (Bee glyph form is now LOCKED, so this is refinement, not redesign.) |
| **Trademark clearance & figurative-mark filing** (Class 35 + 42, IL + US) | Legal opinion required; registries weren't queryable in `NAME_CLEARANCE.md`. **File the hive+bee device** as the figurative mark | Trademark attorney (low-four-figures USD) **before** any public launch — hard gate |
| **Optional: custom swarm illustration / motion polish** | The converging→converged swarm arc (hero diverging vs Section-10 fully converged) deserves an illustrator/motion pass for warmth | Illustrator or senior designer; or refine the existing SVG + Framer Motion in-house |
| **Premium type license (optional)** | Ploni/Simpler (Fontef) for a more owned Hebrew+Latin feel | Paid font license — *optional*; Rubik is free and parity-safe for launch |
| **Photography of the two founders** (Section 8) | Real founder photos build the "people are the proof" trust | Photo shoot or high-quality existing headshots, masked to hex |
| **WCAG accessibility audit on the built page** | Must verify the real, coded page (contrast, focus, keyboard, ARIA, RTL screen-reader) | Spawn **QA-Lead (accessibility mode)** in Wave 3 once CTO has a build — non-negotiable gate |

---

## Hand-off to Wave 3 (CTO) — build notes
- Stack per `CLAUDE.md`: Next.js 16 App Router, React 19, TS strict, Tailwind, Shadcn/UI (customized — never default state).
- Fonts via `next/font`: Rubik (HE+EN subsets) + Geist Mono. Implement i18n with full RTL via `dir` + logical CSS properties.
- Tokens in §A2 → Tailwind theme config (CSS variables). The HTML brand board is a **visual reference, not production code** — do not lift it directly; rebuild to the stack with the four states (loading/empty/error/success) per anti-slop Rule 5.
- Honor the design-critic + QA-Lead WCAG gate before any merge; brand stays internal until TM clearance.

_Last updated: 2026-06-29 | Author: Design-Lead | Status: v0 design direction — design-only, launch held pending trademark clearance._
