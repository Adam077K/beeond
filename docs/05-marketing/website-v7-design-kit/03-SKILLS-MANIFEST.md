# Skills Manifest — Design & Build

*The skills that matter for a world-class marketing site, categorized, with a load order per session. Skills load on demand only — never preload. Both `.claude/skills/[name]/SKILL.md` and `.agent/skills/[name]/SKILL.md` are identical mirrors (148 each); use either path.*

> Budget: **3–5 skills for a lead/chair · 2–3 for a worker.** Load the set for the session you're in, not the whole list.

---

## A · Visual / Brand / Art-direction
- `high-end-visual-design` — agency-grade type/spacing/shadows/cards; avoids the generic AI look. **★ core**
- `stitch-design-taste` — DESIGN.md generator enforcing premium type, color, asymmetric layout, micro-motion.
- `design-taste-frontend` — senior UI/UX rules that override default LLM visual biases.
- `minimalist-ui` — editorial monochrome, restraint, no gradient/heavy-shadow slop. (Fits the Editorial-restraint direction.)
- `frontend-design` — distinctive, non-generic production visual identity.
- `redesign-existing-projects` — audits generic→premium (useful lens even on a clean slate).

## B · UI components & design systems
- `tailwind-design-system` — scalable tokens/components in Tailwind. **★ core (build)**
- `tailwind-patterns` — Tailwind v4 CSS-first config, container queries.
- `radix-ui-design-system` — accessible headless primitives (wizard, accordion, dialog). **★ core (wizard)**
- `core-components` — component library / design-token patterns.
- `react-ui-patterns` — the 4 UI states (loading/error/empty/data) — mandatory for the wizard.
- `nextjs-app-router-patterns` / `nextjs-best-practices` — SSR/SSG, App Router, Server Components. **★ core (build)**
- `vercel-composition-patterns` — compound components, flexible APIs.

## C · UX / flows / onboarding / CRO
- `page-cro` — page-level conversion diagnosis. **★ core (planning)**
- `form-cro` — form friction/completion — **the Footprint-Audit wizard.** **★ core (wizard)**
- `onboarding-cro` — first-run/activation experience — the wizard as onboarding.
- `web-design-guidelines` — Web Interface Guidelines compliance (UI/UX/a11y). **★ core**
- `ui-visual-validator` — visual-regression / design-system compliance / a11y verification.
- `marketing-psychology` — behavioral-science leverage scoring. **★ core (planning)**
- `pricing-strategy` — if/when a pricing surface is added.
- `product-manager-toolkit` — RICE, PRD templates, discovery.

## D · Motion & animation
- `emilkowal-animations` — Emil Kowalski transition/easing/gesture craft. **★ core (build)**
- `vercel-react-view-transitions` — View Transition API, route/page animation.
*(For the signature device: prefer SVG/canvas/CSS over raster — see `07-VISUAL-GENERATION`.)*

## E · Copywriting & messaging
- `copywriting` — testable landing/pricing/feature copy. **★ core (copy)**
- `humanizer` — strips AI-writing tells; essential for the anti-generic voice. **★ core (copy)**
- `data-storytelling` — turning proof into narrative.
- `email-systems` — the wizard's lead nurture + lifecycle.
- `social-content`, `seo-content-writer` — channel + SEO content (also a live product proof).

## F · SEO / GEO
- `seo-content-writer` — keyword-driven SEO content, HE + EN separately.
- `segment-cdp` — analytics/tracking + attribution instrumentation (wizard events, GEO signals).

## G · Frontend build craft
- `frontend-dev-guidelines` — React+TS standards, Suspense-first fetching. **★ core (build)**
- `frontend-developer` — component/layout/state implementation.
- `vercel-react-best-practices` — Next.js/React perf. **★ core (perf gate)**
- `screenshots` — Playwright marketing screenshots (design-critic evidence loop). **★ core (build)**
- `playwright-skill` — browser automation/testing.
- `deploy-to-vercel` / `vercel-deployment` / `vercel-cli-with-tokens` — staging→prod.
- `full-output-enforcement` — complete, unabridged code during the build. **★ core (build)**

## H · Accessibility & performance
- `wcag-audit-patterns` — WCAG 2.2 audit + remediation. **★ core (a11y gate)**
- `web-design-guidelines` — a11y-inclusive review (also in C).

## I · Orchestration & thinking
- `design-orchestration` — routes design through brainstorm→review→execution. **★ core (planning chair)**
- `multi-agent-brainstorming` — structured multi-agent critique for higher-confidence calls. **★ core (concept gate)**
- `brainstorming` — disciplined pre-build ideation.
- `competitive-landscape` — positioning/differentiation for messaging.
- `sharp-edges` — flags error-prone APIs/configs.

---

## Load order per session

**Session B — Design Planning (chair: Design-Lead, Opus):**
Load first → `design-orchestration`, `multi-agent-brainstorming`, `high-end-visual-design`, `marketing-psychology`, `page-cro`.
Copy pass adds → `copywriting`, `humanizer`, `competitive-landscape`.
Concept pass adds → `minimalist-ui` / `stitch-design-taste` (per chosen direction).

**Session C — Build (Fable-5):**
Load first → `frontend-dev-guidelines`, `nextjs-app-router-patterns`, `tailwind-design-system`, `radix-ui-design-system`.
Motion adds → `emilkowal-animations`, `vercel-react-view-transitions`.
Wizard adds → `form-cro`, `react-ui-patterns`.
Gate adds → `wcag-audit-patterns`, `web-design-guidelines`, `vercel-react-best-practices`, `screenshots`, `full-output-enforcement`.

---

## Gap note (skills referenced elsewhere but NOT in these two dirs)
The session skill list surfaces `12-principles-of-animation`, `baseline-ui`, `design-audit`, `design-mirror`, `ui-typography`, `writing-guidelines`, `dataviz`, `artifact-design` — highly relevant, but they live in a **separate global/plugin source**, not `.claude/skills` or `.agent/skills`. If Session B/C wants them, resolve the plugin source; otherwise the ★-marked in-repo skills cover the same ground.
