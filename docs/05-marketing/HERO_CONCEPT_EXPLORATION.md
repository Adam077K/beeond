# Beeond — Hero Concept Exploration & Synthesis

**Date:** 2026-07-03
**Author:** CEO exploration workflow
**Status:** exploration — for founder decision

---

## 0. How to read this

Eight hero concepts (C1–C8) were each stress-tested through four lenses: **craft**
(Awwwards-juror eye), **customer** (a $4.5–15k/mo B2B/SaaS buyer), **feasibility**
(a 2-founder AI-assisted build), and **visibility** (Core Web Vitals / SEO / GEO /
WCAG — the metric Beeond *sells*).

Because this is a **launch-held B2B agency site whose entire pitch is visibility**,
the blend below weights **Customer-Trust (30%)** and **Visibility (30%)** highest,
then **Craft (20%)** and **Feasibility (20%)**. A beautiful hero that a buyer
doesn't trust — or that tanks its own Lighthouse score — actively refutes the
product. That asymmetry drives everything here.

`Blended = 0.30·Customer + 0.30·Visibility + 0.20·Craft + 0.20·Feasibility`

---

## 1. Ranked scorecard

| Rank | Concept | Craft | Customer | Feasibility | Visibility | **Blended** |
|------|---------|:-----:|:--------:|:-----------:|:----------:|:-----------:|
| **1** | **C7 — Footprint Constellation** (honeycomb-as-channel-map) | 8 | 7 | 8 | 8 | **7.70** |
| **2** | **C6 — Cited** (answer-engine hero) | 8 | 7 | 8 | 8 | **7.70** |
| **3** | **C8 — Hive Ledger** (editorial restraint) | 8 | 6 | 8 | 8 | **7.40** |
| 4 | C3 — Iridescent Hex (safe baseline) | 6 | 7 | 8 | 7 | 7.00 |
| 5 | C5 — Site That Grades Itself | 7 | 6 | 7 | 7 | 6.70 |
| 6 | C2 — Minimal Courier (bee) | 6.5 | 5 | 7 | 7 | 6.30 |
| 6 | C4 — One Swarm (motion spine) | 8 | 5 | 7 | 6 | 6.30 |
| 8 | C1 — Hive Genesis (Blender scroll) | 7 | 5 | 7 | 6 | 6.10 |

**C7 and C6 tie at 7.70.** Tiebreak goes to **C7** for two reasons: (a) C6 carries a
*verification trap* — it names a client as the cited AI answer, and any buyer will
type that query into ChatGPT within 60 seconds; pre-launch, with zero citation
footprint, that test fails and converts the cleverest element into a live
credibility liability. (b) C6 rides a trend ("AI answer card as hero") whose
originality window is closing in 2026. C7's honeycomb-map is ownable IP, not a
trend, and doesn't make a live-testable claim it can't yet back.

**Bottom of the table is unambiguous.** C1 (Blender) and C4 (5× motion spine) are
craft-forward but customer-weak and visibility-risky — exactly the wrong trade for
this brand. C1's Blender pipeline is also mislabeled "L effort" when it is really
XL for two non-Blender founders.

---

## 2. Recommendation: don't ship one concept — ship the *combination*

No single concept is the answer. The top three are **complementary layers**, and
almost every lens verdict independently arrived at "combine." The winning site is:

> **A restrained, fast, fully-crawlable editorial hero (C8) that introduces the
> storyline in server-rendered text, with the ambitious channel-map scroll (C7) as
> the mid-page spine, an answer-engine proof block (C6) near conversion, and a
> build-time "we grade ourselves" trust module (C5, de-risked) as hardware — all
> lazy-loaded below the LCP.**

Why this specific stack:

- **C8 as the shell** wins the two lenses that matter most on a visibility-selling
  site: it is the *only* concept that can genuinely serve as proof of its own
  product (95+ PageSpeed by construction, SSR text = maximal GEO citability). Its
  weakness — "restraint reads as emptiness to a cold buyer with no logos" — is
  fixed by pulling proof up (see below), not by abandoning it.
- **C7 as the mid-page spine** solves C8's biggest gap: it makes the abstract pitch
  ("whole footprint, one swarm") *literally legible in five seconds* using the
  owned hexagon system as information architecture. It is ownable, on-thesis, and
  near-zero-weight.
- **C6 as a proof section** (not the hero) keeps the strongest on-thesis moment —
  "become the cited answer" — while defusing the verification trap by placing it
  after trust is established and framing it as a *demonstration of method*, not a
  live claim about Beeond's own ranking today.
- **C5's badge cluster** (JSON-LD present / GPTBot+ClaudeBot allowed / build-time
  Lighthouse scores) ships the deliverables Beeond sells, on Beeond's own site —
  but **build-time / field data, never per-visitor live web-vitals** (that gamble
  fails on Safari and slow mobile and shows a red badge at the worst moment).

**The two founders (Adam + Yarden) are the proof** and every customer-lens verdict
flagged their absence. Surface them early — editorial portraits + credential
FIG-labels — inside or immediately below the hero. This is non-negotiable at this
price point.

---

## 3. Founder seeds — honest verdict

| Seed | Verdict | Single strongest why-not |
|------|---------|--------------------------|
| **C1 — Hive Genesis (Blender cinematic scroll)** | **MODIFY** (keep the architecture, kill the pipeline) | The Blender render is 100% load-bearing and unguaranteed: two non-Blender founders producing 48 cinematically-consistent frames in a strict 2-color palette is an XL/outsource task mislabeled "L" — and a competent-but-generic render drops the whole concept to a 4. Keep the *technical scaffold* (static WebP LCP + canvas ImageBitmap + scrub + preload-before-arm) but replace the 3D render with a **code-driven 2D procedural hex-build** — the owned hexagon is purer in code, RTL becomes a transform not a re-render, and there's no asset gamble. |
| **C2 — Minimal Courier (bee as punctuation)** | **MODIFY** (keep the underline mechanic, drop the bee + runtime) | The premium abstract mark *does not exist yet* and the entire "not-a-mascot" claim rests on an illustration that's easy to underdeliver into the Duolingo trap. Worse: making the signature yellow underline *animation-born* breaks it for reduced-motion, JS-off, and slow-3G users — a self-refuting hero. Keep the underline as a **static-first CSS animation** (no bee required at load); relegate the bee to favicon/avatar scale only. |
| **C3 — Iridescent Hex (safe baseline)** | **MODIFY** (adopt the architecture, replace the surface, rename it) | It never executes the *owned* motion signature — "swarm converges once, then rests" — substituting a Stripe-2022 ambient pulse, and pairs it with a 2024 bento grid the brief explicitly calls slop; "iridescent" also violates the single-yellow palette. But its engineering rule — **LCP = the H1, canvas is progressive enhancement** — is the correct, non-negotiable foundation the winner is built on. Keep that rule; drop the visual language and the word "iridescent." |

---

## 4. How we'd actually build the winner

### Stack
- **Next.js 16 (App Router), React 19 server components** — static/editorial sections
  render server-side; hydration is islands-only (the C7 map + C6 typewriter reveal).
- **Tailwind + CSS logical properties throughout** — RTL is a `dir` flip, not a
  second layout. Enforce with a lint rule banning physical `left/right/ml/mr`.
- **Self-hosted Rubik (Latin + Hebrew), `unicode-range` subsetted, `size-adjust`
  fallback metrics** — this is the single most likely Lighthouse killer if done
  naively (80–130 KB Hebrew payload + font-swap CLS). Lock it at build time.
- **Motion:** CSS opacity/transform fades + one small SVG/canvas swarm convergence.
  Total custom JS budget < 20 KB. **No GSAP/Three.js/Rive/Lottie in v1.**
- **SEO/GEO hardware:** SSR text for all copy, `Organization` + `Service` +
  `FAQPage` JSON-LD mirroring on-page answers verbatim, `llms.txt`, robots
  allowlist for GPTBot/ClaudeBot/PerplexityBot.

### Assets (the real cost is here, not the code)
1. **Editorial founder photography** (Adam + Yarden) — launch-blocking; mediocre
   photos collapse the restraint thesis. Commission first.
2. **The C7 channel data model + hex-grid SVG** — 8–12 surfaces, each with a
   one-line proof rendered as **static SSR DOM** (use `<details>`/`aria-expanded`,
   never `display:none`) so AI crawlers see it.
3. **The single swarm convergence** — hand-tuned; this one motion moment must be
   genuinely beautiful because it's the *only* animation. Prototype in isolation.
4. **Copy** — the load-bearing asset. Restraint has nowhere to hide weak writing.

### Rough effort
- **v1 (ship-fast):** ~1.5–2 focused sprints. C8 shell + founder proof + C7 map
  (staggered-entry version) + C6 as a static answer-card proof section + SEO/GEO
  hardware. Target **95+ PageSpeed, sub-1.2s LCP, zero CLS**.
- **v2 (award-grade):** +1–2 sprints. True scroll-linked C7 fill, the polished
  swarm convergence, C6 four-surface sequence, build-time Lighthouse badge module,
  full RTL audit pass, mid-range-Android INP hardening.

### Phased path
- **Phase 0 — Gates (before any build):** self-host+subset Rubik; write the C7
  expand-overlay + mobile-grid prototype; commission photography; lock copy.
- **Phase 1 — v1 shell:** SSR hero, founder block, static C7, C6 proof section,
  JSON-LD/llms.txt. Ship behind the trademark hold as a staging demo.
- **Phase 2 — v2 polish:** motion, scroll-linking, badge module, RTL audit,
  device-lab INP testing on a Moto G / Galaxy A-class phone.
- **Gate to launch:** Lighthouse mobile ≥ 95 with **no INP warning**; Hebrew RTL
  reviewed by a native reader; all proof text visible to a JS-off crawl.

---

## 5. The single biggest overall risk

> **Craft-execution variance, not concept choice.** The winning combination has the
> highest *ceiling* and the highest *floor risk*. Restraint (C8) exposes every
> typographic, spacing, photography, and copy decision with no visual noise to hide
> behind; the C7 map degrades into "a chart that fills yellow" if the expand-proof
> layer is cut under deadline; the one swarm animation reads as a generic CodePen
> particle demo if it isn't hand-tuned. AI codegen produces *structurally correct
> but rhythmically template* layouts — which is precisely the "slop" this brand
> exists to reject. **Budget explicit manual craft-polish cycles as their own line
> item, separate from code scaffolding.** If you can't fund that, ship C3's
> architecture plain rather than ship C8 half-baked.

### Anti-slop checklist
- [ ] **LCP is the H1 in SSR HTML** — verified in field data, not just local dev.
      No text is "typed in" from an empty node.
- [ ] **Every word of the pitch is real DOM text** — nothing load-bearing baked
      into canvas, SVG-only, video, or image. JS-off crawl still shows the offer.
- [ ] **Rubik self-hosted, subsetted, `size-adjust`'d** — no Google-Fonts default,
      no font-swap CLS on the hero headline.
- [ ] **One motion moment, and it rests** — honor "converges once, then rests."
      Zero perpetual loops. Hand-tuned, not a library default.
- [ ] **Yellow only as fill/highlight**, never body text; one accent per screen.
- [ ] **Founders + one hard proof signal above or adjacent to the fold** — no cold
      buyer should have to scroll to learn who they're hiring or that anyone paid.
- [ ] **RTL reviewed by a native Hebrew reader** on a real device — not assumed
      from a `dir` flip. Asymmetric grids and FIG-labels are where it breaks.
- [ ] **prefers-reduced-motion → rested end-state**, and the yellow underline
      exists in static CSS (not animation-born).
- [ ] **INP tested on a mid-range Android** (Moto G / Galaxy A) — the swarm and any
      canvas must not spike past 200 ms.
- [ ] **JSON-LD mirrors on-page copy verbatim**, with a check that keeps them in
      sync when copy changes.
- [ ] **No literal screenshots** of ChatGPT/Perplexity/Gemini UI — editorial
      reinterpretation only, to avoid the derivative read and implied-endorsement risk.
- [ ] **No bento-grid-of-services** as the primary layout — the single most
      pattern-matched "agency template" tell.

---

*Prepared as an exploration for founder decision. Nothing here is committed; the
site remains launch-held pending trademark clearance.*
