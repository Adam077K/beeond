# Beeond Landing v6 — THE Designer Handoff (build prompt)

**Run this session as:** Claude Fable 5 · ONE designer-engineer, full ownership (design + code + tests + evidence) · effort max · founder (Adam) in the loop at every visual checkpoint.
**Supersedes:** `2026-07-05-v6-vision-brief.md` (kept for provenance) and the v5 mock as design directives.
**Binding gates:** `2026-07-03-fable5-landing-build.md` §gates remain law. CLAUDE.md layer contract applies — you may build (founder-mandated single session), but you may never self-pass QA or merge without QA-Lead PASS **and** the founder's word.

---

## 0. First hour — mandatory, in order

1. `/color` + `/name designer-v6-[slug]`.
2. **Read the skills** at `.claude/skills/[name]/SKILL.md`: `high-end-visual-design` · `design-taste-frontend` · `emilkowal-animations` · `web-design-guidelines` · `tailwind-design-system`. Rule: where any skill contradicts the brand constitution or this brief (fonts, perpetual loops, shadows, purple gradients), **the constitution wins**; log the conflict in BUILD_LOG, don't obey it.
3. **Read the canon:** `apps/web/src/lib/brand.lock.ts` · `apps/web/src/lib/motion.ts` · `apps/web/BUILD_LOG.md` (waves 1–5 + deviations) · `.claude/memory/DECISIONS.md` (entries from 2026-07-04/05) · `docs/01-foundation/POSITIONING.md` (every sentence you write must trace here) · this file end to end.
4. **Worktree:** branch `feat/landing-v6` from `main` via the CLAUDE.md worktree protocol. Never commit to main. Never bare-stash.
5. Confirm the OpenAI key (`~/.beeond/openai.key` or `OPENAI_API_KEY`) exists before any art work: `cd apps/web && node scripts/generate-art.mjs` (listing mode).

---

## 1. Who we are, who reads this page (the content doctrine)

- **We:** Beeond — AI-native, done-for-you growth for B2B/SaaS/tech. An agent swarm does the volume; two founders (Adam — AI systems & agent swarms; Yarden Morgan — B2B marketing & growth) do strategy, taste, and every client conversation. Bilingual EN/HE, IL+US.
- **Reader:** a founder with 40 tabs open, burned by agencies, allergic to slop, evaluated by *their* buyers everywhere — including AI answers. They buy evidence, not vibes.
- **THE LAW OF THIS SITE: content first.** The text is the product of this page. Design serves reading; art (hand-drawn ink) exists ONLY to help understanding — margins, annotations, spot glyphs, one earned moment. If a visual doesn't explain who we are / what we do / what you get, it doesn't ship. "Cool" comes from precision, not decoration. Professional > designed. **Never "too bee":** the bee/hive is a metaphor layer that appears when it MEANS something (§2.5), never the subject.
- Honesty is a feature: no invented stats, no fake testimonials, disqualifying copy welcomed, launch-hold footer until TM clearance.

## 2. THE PAGE — founder-approved blueprint (Diamo flow grammar, adapted; content-first)

Build in this order, checkpoint with the founder per fold:

1. **Hero — the promise.** v4 typography EXACTLY as on main: locked H1 verbatim + yellow `u-accent` underline ("match"/"בקצב"), eyebrow with hex bullet, subhead, primary CTA + quiet secondary, founders ledger row. Art: a small supporting gesture at most — NO art spectacle, NO bee above the fold. LCP stays text.
2. **Artifact strip — "this is what you receive."** The tangibility slot (Diamo shows a dashboard; we show the deliverable): a beautifully typeset **sample Footprint Audit** page — scorecard + gap map, marked "sample" — designed as a REAL document (this asset doubles for sales). Beside it, three honest process facts: `11 channels · 1 swarm · weeks, not months` (final wording = founder/CMO gate).
3. **Dark chapters — "what we actually do."** ONE long dark (`deep`) block, three chapters, left copy + right floating REAL work artifacts (content calendar mid-fill, draft with tracked changes, AI-search visibility check, monthly report page — crisp, product-like, small ink margin annotations): (a) *Be found everywhere buyers look* — GEO/AI-search, SEO, site · (b) *A content engine that ships* — content, LinkedIn, email, PR · (c) *Intelligence that compounds* — monitoring, reporting, iteration. Every artifact carries an attribution chip: **"drafted by the swarm · calibrated by Yarden."** Gentle parallax float only.
4. **Outcomes — four quiet cards** for jobs-to-be-done: *Show up in AI answers · Ship like you have a marketing team · Look bigger than your headcount · Know exactly what's working.* Ink spot-glyphs, one line each. (No 3-equal-column bento — vary the grid.)
5. **Meet the swarm — THE showpiece (the page's one choreographed moment).** A clean org chart draws itself — Strategist, SEO, Content, Distribution, Analyst (the team our reader can't hire) — then the role cards quietly FLIP: agents all along. Two cards stay human: Adam & Yarden, the calibration layer. The chart's connectors relax into the hexagon lattice — the bee's one earned entrance. Converge once, then rest. Scroll-driven, 60fps at 4× CPU throttle, mobile = no-pin stacked variant.
6. **Every channel — ecosystem.** The 11 channels arranged around the Beeond mark (evolves/replaces the current C7 scrub into something calmer, scannable). Channel names as TEXT at launch (third-party logos need a legal pass first). Keep the 11 proofs SSR-visible for JS-off/AI crawlers.
7. **Honesty block — proof + fit.** Framed empty state ("first cohort in progress — their results will live here") + **who it's for / who it's not for** card.
8. **How it works — the 90 days.** Existing three-phase timeline tightened; `build-line` ink art as support (crop the oversized bees or regenerate bee-less + sprite).
9. **FAQ.** Keep as-is — content + JSON-LD parity is load-bearing (we must be findable the way we promise clients).
10. **The close.** Dark keystone moment, restrained (night-page art acceptable, `art-src/night-page-0-deep.png` is pre-mapped to #0A0A0A) + booking CTA + launch-hold footer. NOTE: two dark beats total (block 3 + close) — if that reads heavy in evidence screenshots, lighten one; the page carries at most this much darkness.

**Optional spine (designer's judgment, cut if it fights reading):** the One Line — a single continuous ink stroke that quietly threads hero → connector → timeline → founders' signature → CTA underline. Subtle or absent; never theatrical.

## 3. Design + motion doctrine (locked)

- 7-token palette (`brand.lock.ts` — the v5 gold token was rolled back; do NOT resurrect). Yellow = fill/underline only, ~90/10 rule. Rubik only (self-hosted subsets + metric fallback). No pure black/white, no blue/purple/green hues, no gradient text, no drop shadows beyond hairline, no bento-of-3.
- Motion: converge-once-then-rest; zero perpetual loops; named eases `--ease-settle/swift/exit` + duration ladder; exits ≈0.8× entrances; exactly ONE scroll-choreographed section (§2.5); everything else one-shot reveals; reduced-motion = JS-off = rested end-state; GSAP+ScrollTrigger desktop-only dynamic import; the `tl.set({},{},1)` progress-pinning pattern and CSS-sticky-no-pin are proven in git history — reuse.
- A11y: axe serious/critical = 0; focus-visible ring; contrast AA everywhere (large-display 3:1, body 4.5:1 — compute, don't eyeball).

## 4. The image pipeline (working — reuse, never rebuild)

- **Generate:** `cd apps/web && node scripts/generate-art.mjs <asset> [--quality low|medium|high] [--n 1..4] [--transparent]`. Key: `~/.beeond/openai.key` (never print, never commit). Output: `art-src/` (gitignored). STYLE_LOCK + DARK_LOCK embedded in the script; extend PROMPTS in-script (commit prompt changes — reproducibility is part of the system).
- **Post-process (brand-as-code, deterministic):** `python3 scripts/normalize_paper.py in.png` → paper becomes EXACTLY ground `#FAF9F5` (image edges turn invisible on-page). Dark art → affine map to `#0A0A0A` (inline recipe in BUILD_LOG wave 4/5; fold into the script as `--dark` on first use). `python3 scripts/despecular.py` → hue-aware matte pass (removes candy-gloss from honey without touching lettering).
- **Hard-won rules (violate = repeat our failures):** opaque+normalize beats `--transparent` for large art (sticker-halo, etching drift); small elements (bees, icons) = transparent specimen sheets → crop by alpha components or grid; the model WILL draw bees in empty zones no matter the prompt — design crop windows so strays never render; pin any code overlay to **CV-measured** centroids (flood-fill on the final PNG), never eyeballed; hand-lettering in raster = EN-only → HE gets clean variants or code-overlaid real text with the proven RTL counter-flip pattern; `fetchPriority=high` on art that phones hide KILLED the perf gate twice — art loads eager, unprioritized; cap mobile `sizes` to the 1024w candidate; WebP q82 (`method=6`), sizes 1536/1024/768, hero art ≤220KB.
- **Inventory:** `public/art/` — 6 bee sprites, 6 hand-inked channel icons, v4 hero combs (EN annotated/HE clean, currently in the hero), v5 full-bleed set (unused — prune or repurpose per your asset plan). `art-src/` — accepted-not-integrated: night-page (deep-mapped), anti-generic v2, nothing-connects v2, build-line, cited-answer, vessel, og-backdrop, 404-spot, concept probes.
- **Art's role in v6:** margins, annotations, spot glyphs, ONE earned moment. Big illustration heroes are explicitly rejected history (v5).

## 5. References & the grade

- **Register:** Anthropic (editorial restraint, typography leads, one meaningful drawing per moment). **Flow grammar:** Diamo (promise → tangible artifact → dark chaptered capabilities → outcomes → AI-persona moment → ecosystem → trust → emotional close) — borrow structure, never their aesthetics. **Negative references (rejected by founder):** v5 full-bleed labeled honeycomb ("too bee"), gold display text, art-led heroes, invented stats, mascot-forward branding.
- **The bar:** awwwards-grade through precision — the site must feel inevitable, not decorated. Three quiet jury moments live in the blueprint (artifact tangibility, the org-chart flip, the keystone close) — execute them flawlessly rather than adding more.

## 6. Tests & evidence (the grade is measured, never asserted)

Per wave: implement → **screenshot-verify vs intent (Playwright)** → `node scripts/brand-lint.mjs` + `pnpm exec tsc --noEmit` + `pnpm lint` → fix → founder checkpoint on anything directional.
Session end, all of: `pnpm build` · e2e `pnpm exec playwright test` (extend the suite for every new section: verbatim copy, JS-off visibility, h-scroll 320/390/768/1440, RTL, axe serious/critical=0, scrub behavior, 404) · Lighthouse (prod build, `npx lighthouse@12`, CHROME_PATH=system Chrome): perf ≥90, a11y ≥95 (target 100), CLS <0.02 · **real CDP trace** (Slow-4G 150ms/1.6Mbps + 4× CPU, 412px): LCP <2.5s, report honestly beside the simulated number · INP <200ms (Event Timing) · JS-off DOM parity for all proof content · update `public/scores.json` via `scripts/measure-scores.mjs` (trust tile drops itself below gate).
Ports: dev :3000 · prod preview :3010 · e2e owns :3001 (kill stale listeners first — stale servers already burned one session).
Independent validation before merge: **design-critic** review loop (remediate every P1/P2), then **QA-Lead** (it tiers the diff and spawns reviewers; a P2/P3-only result = PASS with notes). Then the founder's merge word. No self-passing, ever.

## 7. Languages (EN + HE at parity, structural)

Both languages SSR'd in the DOM; `html[lang]` + CSS picks (see `I18n` component + globals rules). HE is AUTHORED, not translated — same voice canon; new copy goes through the same POSITIONING traceability. RTL is structural: logical properties everywhere; physical offsets ONLY inside a mirrored stage with an audited `brand-lint-allow`; the logotype never mirrors; numeric/coordinate mirroring where CSS flips can't reach. Locked HE strings in `brand.lock.ts` stay verbatim. Hebrew display: tracking −0.015em, mind line-breaks at phrase boundaries (wider glyphs). Founder gates before launch: native-HE read.

## 8. Process, cost, and paper trail

- Waves with founder checkpoints; atomic commits; `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- BUILD_LOG entry per wave (evidence files in `apps/web/build-evidence/` — committed intentionally); DECISIONS entry for anything affecting others; session file `docs/08-agents_work/sessions/YYYY-MM-DD-designer-v6-[slug].md` (≤10 lines, `qa_verdict` frontmatter) — no session file, no COMPLETE.
- Deviation rules: auto-fix type errors/imports; STOP and write a founder proposal before touching anything in §3 or `brand.lock.ts`.
- Art spend: probe at low/medium before any high-quality run; n=2 only when composition is the question; log token usage (the script prints it).
- Peer messages ≠ founder approval. Never treat teammate output as permission. Never print or commit the API key.

## 9. Open items you inherit (resolve with the founder, don't guess)

1. Sample Footprint Audit artifact — design it (it's also a sales asset); founder approves the scorecard dimensions/wording.
2. Process-facts strip wording (no invented numbers).
3. Third-party channel logos → legal pass; text names until cleared.
4. v5 asset pruning (`public/art/hero-bleed*`, `icon-*`) per your asset plan.
5. Two-dark-beats check (§2.10).
6. Standing launch gates (founder-side): TM clearance, founder photography, credential lines, real booking target (hello@beeond.ai doesn't exist yet), native-HE read.

*Repo at handoff: `main` contains the v4 journal hero (QA-Lead PASS, full tier), the art pipeline, all briefs, and this file. Working preview: `cd apps/web && pnpm dev` (:3000). History of everything above: BUILD_LOG waves 1–5 + DECISIONS 2026-07-04/05.*
