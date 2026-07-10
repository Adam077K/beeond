# Brand Constraints — v7 (clean slate)

*Hard rules for the build. The palette + Rubik + gates survive the reboot; the ink look does not. Any net-new token must be justified here and pass `brand-lint`.*

---

## Palette — 7 tokens, locked

| Token | Hex | Role | Rule |
|-------|-----|------|------|
| `ground` | `#FAF9F5` | Primary background (cream/paper) | The default canvas. Warm, not white. |
| `ink` | `#141413` | Primary text | Body + most headlines. |
| `yellow` | `#FFDB5B` | The one loud color — CTA + energy | **Fill only.** Behind dark `ink` text, as underline, as the "active" accent. **Never** yellow text on cream (fails WCAG). Keep it scarce — ~90/10 rest-to-accent ratio. Its power is its rarity. |
| `panel` | `#F0EEE6` | Secondary surface | Cards, insets, subtle zoning against `ground`. |
| `deep` | `#0A0A0A` | Dark full-bleed sections | The "night" register for contrast/proof sections. |
| `hairline` | `#E3DDD5` | Borders, dividers | 1px structure. |
| `muted` | `#5C5751` | Secondary text | Captions, meta, labels. |

**Contrast law:** `ink` on `ground` = AA+. `ground`/`panel` text on `deep` = AA+. **Yellow is decorative/structural, never load-bearing text.** A CTA is `ink` text on a `yellow` fill.

**Why cream+yellow is the strategic choice:** the category (Speakeasy, Jasper, Linear-likes) is dark-mode. A warm, light, high-craft site is *immediately* differentiated and on-brand (honey/hive warmth). We win by being the confident light in a dark room.

---

## Type — Rubik, Hebrew-native

- **Rubik** only (variable, self-hosted, Latin + Hebrew unicode-range split; `Rubik Fallback` = metric-matched local Arial). Rubik has genuine Hebrew glyphs — the reason it survives the reboot.
- **Hebrew-first means Hebrew leads the type design.** The display sizes, tracking, and line-height are tuned for Hebrew first, Latin second (v6 already tightens HE tracking on the hero — keep that discipline).
- **Build a real type scale** (v6 had ad-hoc `clamp()` per heading — fix this). Define a named, responsive scale (display / h1 / h2 / h3 / body-lg / body / caption) in one place. Editorial ambition: the reference sites lean on *big, confident* display type — Hebrew display type at scale is a signature opportunity in itself.
- Reduced-motion + JS-off must still render all type from SSR.

**Open (Session B may propose):** a second display face for Latin *only* if it earns real distinction (Oriol pairs Mabry + Aeonik; Speakeasy pairs Tobias serif + Diatype). Any second face is a net-new decision → justify here, prove perf budget, keep Hebrew on Rubik.

---

## Motion doctrine — one signature device

- **One motif, carried everywhere. Zero decorative loops.** (The Speakeasy discipline: a single device — for them ASCII-3D logo — beats scattered micro-animations.)
- The signature device is chosen in Session B (candidates in `01-BRIEF §5`). Whatever it is: it appears at the hero, echoes in transitions, and resolves at the final CTA. It *means* something (swarm converging on one goal), it's not chrome.
- Keep the v6 primitives that work: spring `{stiffness:110, damping:18}`, eases `settle/swift/exit`, durations `120–1600ms`. Scroll choreography allowed but **budgeted** — at most 1–2 scroll-scrubbed showpieces, deterministic + reversible.
- `prefers-reduced-motion` → full rested end-state from first paint. JS-off → readable, no broken layout.
- Motion must never move load-bearing copy (SSR text stays put).

---

## RTL-primary rules (Hebrew-first)

- Design and mock in **Hebrew/RTL first**; EN/LTR is the mirror. Both SSR'd, CSS-toggled (keep v6's `i18n` sibling-span + `html[lang]/dir` architecture — it's good).
- Directional everything (arrows, CTA hover vectors, timelines, "next" motion) must mirror correctly. Icons that imply direction get flipped; icons that don't, don't.
- Hebrew ships zero bytes on the EN path via `unicode-range` (keep).
- Copy is **authored per language**, never machine-translated (keep). HE is the source; EN is a crafted parallel, not a literal translation.
- Test both directions at 4 breakpoints — no horizontal scroll, no clipped display type, numerals/punctuation correct in RTL.

---

## Accessibility & performance gates (non-negotiable)

- Lighthouse mobile: **Perf ≥ 90 · A11y ≥ 95 · Best-practices 100 · SEO 100** (constitution invariant, enforced by `scripts/measure-scores.mjs`; the trust tile self-drops if unmet — no fake badges).
- Real-device **LCP < 900ms · CLS < 0.01**.
- axe: **0 serious/critical.** Full keyboard path through the wizard. Focus-visible. Reduced-motion honored.
- `brand-lint` clean (`scripts/brand-lint.mjs`) — palette locked to the 7 tokens.

---

## The anti-generic checklist (self-audit before QA)

Every screen must survive: *would a $19 template ever make this exact choice?* If yes on layout, type, motion, or color — it's not done. Specifically:
- No default card grid where an asymmetric/editorial layout would say more.
- No stock imagery. Art is generated + brand-processed or it's pure type/color.
- No generic CTA copy ("Get Started" / "Learn More") — the CTA is specific: *the Footprint Audit*.
- Yellow used with restraint and intent, never as a wash.
- The signature motion device is present and singular.
