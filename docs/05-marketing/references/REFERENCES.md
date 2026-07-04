# Beeond design references — pack for the Fable-5 build

Captured 2026-07-04 · 1440×900 @2×, above-the-fold. **All images live in this folder** (`docs/05-marketing/references/`); paths below are filenames.

**How to use (playbook §2):** before building each award section, open its 1-2 mapped `board-*.png` **and the negative set**. **BORROW** the one noted thing — never copy layout. **Diff every section against the negatives** — if it resembles them (gradient mesh, centered hero, three equal cards, Inter/Geist, glass pills), redo it.

---

## Positive references

### 1. Anthropic — GLOBAL PALETTE + C8 HERO  · `board-1-anthropic.png` · anthropic.com
- **BORROW:** the palette twin — warm off-white ground, near-black ink, one restrained accent, editorial type doing all the work with zero decoration. Proof that restraint + warmth reads *premium*, not empty.
- **AVOID:** their serif body / botanical imagery — not our system.

### 2. Linear — GLOBAL MOTION DISCIPLINE + DARK FINAL CTA · `board-2-linear.png` · linear.app
- **BORROW:** how *little* motion, how deliberate each move; a dark closing moment used as scarcity; inspect computed `transition` values.
- **AVOID:** the dark/purple palette and cool-tech register.

### 3. Family — SWARM CONVERGE + KEYSTONE LOCK · `board-3-family.png` · family.co
- **BORROW:** the gold standard for spring-physics choreography — physical, weighted, overshoot-and-settle. The quality bar for the hero converge + keystone. Study *easing*, not visual style.

### 4. Emil Kowalski — MOTION-TOKEN FILE + EASING DOCTRINE · `board-4-emilkowal.png` · emilkowal.ski
- **BORROW:** asymmetric enter/exit easing, exits faster than entrances, ~150-200ms not 300ms, spring feel, reduced-motion done right. Open when writing ANY `transition`/`spring` value.

### 5. basement.studio — C7 SCROLL SPINE + TYPO VOICE · `board-6-basement.png` · basement.studio
- **BORROW:** fearless big-type editorial + GSAP ScrollTrigger craft with perf discipline; scrubbed where it should scrub, never scroll-jacked. The "agency proving itself through its own site" energy.

### 6. Rauno Freiberg — MICRO-INTERACTIONS · `board-7-rauno.png` · rauno.me/craft
- **BORROW:** the 10% juries reward — radius-following focus rings, optical alignment, hover/press precision, keyboard-perfect components (FAQ, cursor, focus).

### 7. Stripe — SECTION RHYTHM + WARM ELEVATION · `board-8-stripe.png` · stripe.com
- **BORROW:** beauty serves clarity — every section advances the sell; warm-tinted (never flat-gray) elevation; single-accent discipline.

### 8. Igloo Inc — C7 AWARD CHOREOGRAPHY (⚠ PERF) · `board-9-igloo.png` · igloo.inc
- **BORROW:** the ceiling for scroll-choreographed "assembly" storytelling.
- **AVOID:** its multi-MB Three.js weight — a perf anti-pattern. Take the choreography, deliver the feeling at 1/10th the cost.

### 9. Lusion — C7 ASSEMBLING GEOMETRY · `board-10-lusion.png` · lusion.co
- **BORROW:** reversible, buttery build/converge-under-scrub choreography.
- **AVOID:** the payload — deliberately under-build to hold the perf gates.

### 10. Resend — C6 PROOF + TESTIMONIAL EMPTY-STATE · `board-11-resend.png` · resend.com
- **BORROW:** a B2B/dev brand that's fast, editorial, single-accent, crafted, and states proof honestly without fake logos. Models the "we're selective" empty-state.

### 11. Mercury — FOUNDERS / TRUST STRIP · `board-12-mercury.png` · mercury.com
- **BORROW:** warm, editorial, high-consideration B2B trust signals for an expensive, trust-sensitive purchase; restrained motion that reads premium.

### 12. GSAP ScrollTrigger docs — C7 MECHANISM · gsap.com/docs/v3/Plugins/ScrollTrigger
- **BORROW:** canonical pin + `scrub:true` (deterministic/reversible) + `ScrollTrigger.batch` staggered reveals. Technique, not taste. (No screenshot — read the live docs.)

---

## NEGATIVE SET — the slop to reject (diff against these before committing ANY section)

These are Framer template demo pages ("Made in Framer" badge) — the platonic generic "AI SaaS template." **If an in-progress section resembles any of these, redo it.**

- **`negative-1-landio.png`** · landio.framer.website — dark near-black hero + centered logo-glow + centered stacked headline + token italic-serif "With AI" flourish + spark-icon "Get Started" + "Book A Free Call". The default AI-agency template.
- **`negative-2-nexus.png`** · nexus-template.framer.website — black bg + faint grid mesh + glassmorphism nav pill + centered giant sans + one acid-lime accent word + "Version 2.1 Out Now" pill + tilted product-UI mockup. Textbook Framer SaaS.
- **`negative-3-omrix.png`** · omrix.framer.ai — **the platonic one:** light gradient-grid wash + centered hero + "JOIN 10,000+ TEAMS" pill + Inter sans + blue "Start Free Trial" + black "Book a Demo" + trust row + **three equal pastel bento stat cards** + dashboard mockup.
- **`negative-4-hiview.png`** · hiview.framer.ai — saturated blue gradient + isometric grid illustration + glass floating nav pill + centered hero + "Get a Demo →" + glass award-badge eyebrow + marquee logo strip. Same skeleton, blue skin.

**The tells to never reproduce:** centered hero · gradient mesh / grid wash · glassmorphism pills · three-equal-card bento · Inter/Geist · blue/purple/acid accent · "Book a Demo" dual-CTA · "no credit card / setup in 5 min" trust row · marquee logo strip · tilted product-UI mockup.

---

## Gates (from the board)
- **Palette gate:** every section passes the Anthropic + Stripe warm-neutral + single-accent test before it passes the Mercury trust test. Cool-SaaS-blue fails all three.
- **Motion gate:** Emil (doctrine) + Family (quality bar) open when writing any `transition`/`spring`.
- **Perf gate:** Igloo + Lusion are choreography-only — their runtime payload is explicitly rejected.
