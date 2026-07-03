# Beeond — Wave 2 Design Critique (Brand + Landing)

> **Reviewer:** design-critic (independent — did not create this work) · **Date:** 2026-06-29
> **Verdict:** **revise-then-build** · **Anti-generic bar:** PASS (with one P1 caveat on the *applied* logo)
> **Artifacts reviewed:** `BRAND_AND_LANDING_DESIGN.md`, `brand-assets/concept-desktop-full.png`, `brand-assets/concept-mobile-hero.png`. Judged against `FOUNDING_BRIEF.md` §9/§4, `POSITIONING.md` (voice canon + 10-section copy), `.claude/memory/DECISIONS.md` (composite-mark registrability decision).
> **Method:** visual review of the rendered comps (no dev server applies — static concept). Findings cite what is visible in the artifacts.

---

## Verdict in one paragraph

This is a confident, genuinely non-template system. The warm palette, the converging-swarm motif, and the asymmetric editorial layout clear Beeond's own "AI that doesn't look generic" bar — screenshot it with the logo removed and you would still recognize it, which is the test the thesis sets for itself. **But it is not ready to advance to code as-is.** Four issues are must-fix before build: (1) the bee glyph reads as a **frowning face** at the hero convergence cell — the exact spot meant to deliver "friendly" and the emotional payoff of "one goal"; (2) the **distinctive "ee-cells" wordmark is deployed nowhere it matters** — every applied header shows plain "Beeond" in Rubik bold, i.e. effectively a stock-font wordmark, which is precisely the registrability and anti-generic weakness this brand was built to avoid; (3) the **mobile nav is broken** in the comp (links wrap and clip off-screen); (4) **conversion-critical microcopy fails contrast.** Fix these and it is a strong build.

---

## Axis-by-axis

### 1. Brand fidelity — warm/natural × futuristic × friendly
**Strong on warm + futuristic; weak on friendly.** Honey/cream/espresso + the honeycomb hairline + mono labels nail "warm natural × future-facing structure." The **friendly** leg is undercut by the central bee glyph reading as a sad face (see P1.1) and by founder chips that are too small to feel human (P2.5). The brief's "future tech with people behind it" lands on the tech, less on the people.

### 2. Anti-generic bar — does THIS clear it?
**Yes for the system; the applied logo is the exception.** Palette (no SaaS blue/purple), asymmetric hero, bento-not-3-cards, and the owned swarm motif all read as deliberately non-default. The two generic-leaning elements: (a) the **applied wordmark** is plain Rubik bold "Beeond" in every real context — the signature ee-cells appear only in one brand-board swatch (P1.2); (b) **Rubik** is the safest, most common "not-Inter" Google font — it does not actively differentiate; the distinctiveness is carried entirely by palette + motif (P2.2).

### 3. Distinctiveness / trademark (crowded Bee/Beyond/Beond field)
The hive+bee device + honey trade-dress give a defensible **figurative mark** — aligned with the DECISIONS.md "composite mark is more registrable than the bare word" call. **Risk:** the bee glyph is **inconsistent** across renders (upward strokes in the header lockups vs. a downturned curve in the hero cell) and the ee-cells are not legible/deployed. A figurative filing needs **one resolved, consistent device** (P2.3).

### 4. Bilingual HE + EN parity
**Concept-level parity is real and above the bar for a v0** — a true bilingual specimen ("נחיל אחד. כל ערוץ. המותג שלכם.") and a full RTL hero frame are rendered, not bolted on. Parity is **asserted, not yet proven** at component level: verify in build that the art column truly swaps to the left, that the HE eyebrow uses Rubik 500 rather than the Latin mono-caps treatment (the HE frame still appears to carry an "AI-NATIVE" mono eyebrow), and that inline Latin/SEO terms don't break RTL flow (P2.4).

### 5. Conversion craft
Hero hierarchy is excellent: scope headline → service-naming subhead → prominent honey CTA → secondary link → reassurance. Bento communicates breadth without a menu-dump. Section 3 dark moment is well-placed for emphasis. **Gaps:** mobile nav breakage (P1.3), low-contrast reassurance line sitting directly under the primary CTA (P1.4), and under-weighted founder proof (P2.5).

### 6. Accessibility signals visible in the comp
- **Fail:** Geist-Mono reassurance + caption/data lines in Soft Caption gray `#9B9286` on cream ≈ **2.6:1** — below AA (P1.4).
- **Borderline fail:** Amber Deep `#B36A06` letterspaced mono-caps eyebrow on Comb Wash `#FBEFD7` ≈ **3.5–4:1**, under AA for sub-18px (P2.1).
- **Pass:** Espresso-on-cream body/headlines (AAA), Cream-on-Hive-Dark (AAA), Espresso-on-honey CTA (large/bold AA). The doc's contrast discipline (honey never as body text → Amber Deep) is correct in principle; the failures are in the *small mono* tier the doc under-protects.

---

## P1 — Must-fix before build

1. **The bee reads as a frowning face at the hero convergence cell.** In `concept-mobile-hero.png` the central hexagon shows a dot above a downturned curve — a ☹ emoticon — and it sits at the *exact* point where the swarm converges (the emotional payoff of "one swarm, one goal" and the brand's "friendly" anchor). It also renders **differently** from the upward-stroke glyph in the header lockups, so the mark is not yet consistent. Fix: lock one warm, unmistakably-bee (or neutral-positive) glyph; the convergence cell must not read as unhappy.
2. **The distinctive "ee-cells" wordmark is not deployed anywhere it counts.** Every applied header — hero nav, dark Section 3, bento, mobile, Hebrew frame — shows plain **"Beeond" in Rubik bold**, i.e. effectively a stock-font wordmark. The signature ee-cells appear only in the single brand-board primary lockup. This is the exact weakness `NAME_CLEARANCE.md`/DECISIONS.md said to avoid and the thing the anti-generic thesis says "would refute the pitch." Fix: either deploy the resolved ee-cells in the real lockup, or make the **hive device** carry in-product distinctiveness — but the applied logo cannot remain a default-font word.
3. **Mobile nav is broken in the comp.** At 375px (`concept-mobile-hero.png`) the links "How it works / Services / The swarm / EN" wrap ("How it / works") and clip off the right edge — no hamburger present. The doc defers the hex-hamburger to "Wave 3," but a broken mobile nav is shipped in the concept and mobile is ~half of SMB traffic. Fix: design and validate the collapsed mobile nav before build, not after.
4. **Conversion-critical microcopy fails contrast.** The Geist-Mono reassurance "No agency pitch. No deck…" sits directly under the primary CTA in Soft Caption gray on cream (≈2.6:1, fails AA); the bento caption/data lines share the problem, compounded by 11px size + heavy letterspacing. Fix: move this tier to Espresso/Taupe and cut tracking; never put the trust-reassurance line below AA.

## P2 — Should-fix

1. **Eyebrow pills are borderline-illegible.** "AI-NATIVE · FOUNDER-LED" and the bento cluster eyebrows are letterspaced mono-caps in Amber Deep on Comb Wash (≈3.5–4:1, under AA for small text). Increase size/weight or darken the swatch behind them.
2. **Rubik is the weakest anti-generic lever.** It's a ubiquitous Google font; "not on the banned list" is a low bar. Acceptable for a bootstrapped launch, but the distinctiveness rests entirely on palette+motif. Consider the flagged Ploni/Simpler upgrade for **display/wordmark only** to add owned character cheaply.
3. **Standardize the bee glyph for the TM filing.** A figurative mark needs one resolved device across all weights/sizes. Recommend the registrable mark be the **hive+bee device** (cleanest, most defensible) since the ee-cells aren't legible yet — and lock a single glyph form (ties to P1.1).
4. **Prove HE/EN parity at the component level.** Verify the art column swaps to the left in RTL, the HE eyebrow uses Rubik 500 (not Latin mono-caps), HE body sets ~1px larger for optical parity, and inline Latin/SEO/numerals stay LTR without breaking flow. Parity is currently asserted by the concept, not demonstrated per-component.
5. **Founder proof is under-weighted.** In Section 3 the Adam / Yarden Morgan chips read as metadata, not a trust anchor — yet at this stage "the people are the proof." Give the founders more visual weight (Section 8 split is fine; the Section-3 chips are too quiet).

## P3 — Polish / nice-to-have

1. **Pay off the motif narrative.** Ensure the hero swarm reads as in-motion/diverging and the Section-10 cell reads as fully converged — the intro→payoff arc only works if the two states visibly differ.
2. **Resolve the primary-lockup kerning.** "Be⬡⬡ond" can misread as "Beoond"/"Be∞ond" to a first-time viewer; the ee-cells must unmistakably read as "ee" (a type-designer step the doc already flags in §D).
3. **Watch honey-accent discipline in the bento.** Amber eyebrows + honey feature tile + comb-wash tiles compete slightly; confirm one clear accent focus per viewport.

---

## Strongest elements (preserve these)

1. **The warm honey/cream/espresso palette** — genuinely differentiated, premium, and faithful to warm×futuristic; the refusal of SaaS blue/purple is the single biggest anti-generic win.
2. **The converging-swarm flight-path motif** — distinctive, ownable, and a literal visualization of "one swarm, one goal." This is the element a viewer remembers.
3. **Layout craft** — asymmetric editorial hero with clean hierarchy and a prominent honey CTA, plus a real asymmetric bento (not three equal cards). Confident and trustworthy for B2B.
4. **Genuine bilingual intent** — a true HE+EN type specimen and a full RTL hero frame, designed at parity rather than as an afterthought.

---

_Independent critique — read-only. No design files were edited. design-critic, 2026-06-29._
