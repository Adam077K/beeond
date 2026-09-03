# S1B SOURCED — award-grade immersive sites: scenes, transitions, and what motion costs — NOT PLAN OF RECORD
Accessed 2026-09-03 · `sourcer` · lenses research + design · **Status: PARTIAL**

*Written to disk verbatim by the orchestrator from the sourcer's in-band return — `sourcer` holds no write tool. `.mcp.json` contains one server, `playwright`; `claim-append` is absent, as the engine contract predicted.*

**Method caveat — read before any row.** My only network tools are `WebSearch` and `WebFetch`, and `WebFetch` renders a page to markdown through a summarising model. That means:

1. **I did not see any of these sites move.** Every "what moves" statement below is sourced to a *technology tag published by the awarding jury*, a *maker's own written case study*, or a *visible label in the DOM* ("scroll to explore", "Tap to Explore", a counter rendered as `0`). Where I have none of those, the cell says UNKNOWN. Nothing in this packet is inferred from a studio's reputation.
2. **Section order is DOM order,** not visual order. A pinned, sticky or carousel element can be misplaced.
3. **Quotes passed through a summariser** and are therefore *not* guaranteed character-exact. This is why `claims_emitted` is empty — see the last section.
4. **No cost figure was obtainable.** Five attempts at the Google PageSpeed Insights API across three URLs all returned HTTP 429 (keyless quota). Every cost cell reads "not measured". This is the largest hole in the packet.

---

## Table A — twelve sites

Columns: **Site · URL · Award (source, date) · Scenes in DOM order · Technique stack (as published) · System-visualisation device · Sections (proxy for length) · Cost · Confidence**

### A1 · Terminal Industries — https://terminal-industries.com
**Award:** Awwwards Site of the Day, 2026… corrected: **2025-09-03**, score 7.68. Studios REJOUICE® + PROPAGANDE. Source: https://www.awwwards.com/sites/terminal-industries (accessed 2026-09-03).
**Job:** sells an AI platform for shipping-yard operations. Commercial, enterprise.
**Scenes:** hero "We have reinvented the future of logistics through the yard" → client logos (DSV, Lineage, Goodyear, Honda, Ryder, HP) → three-column value proposition ("Fix One Yard Problem Today" / "Single Site & Growing" / "Enterprise Network") → **interactive yard-efficiency calculator, inputs for gates, shifts, wages** → "Why Terminal", numbered 01–04 with counters → **platform tour as four tabs: "AT THE GATE", "IN THE YARD", "AT THE DOCK", "ACROSS OPERATIONS"** → built by the industry → Ryder testimonial → contact form → FAQ grouped by Core Technology / Value / Implementation / Site Operations → footer CTA "The yard of the future starts today".
**Technique (jury tags):** Animation · Scrolling · Storytelling · Interaction Design · CSS · Vue.js · Vercel. **No WebGL or Three.js tag.**
**System device:** the calculator (visitor's own numbers) and the four-stage tabbed tour. No 3D.
**Sections:** 13. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high on award, tags and section order; **UNKNOWN on motion.**

### A2 · Oryzo AI — https://oryzo.ai
**Awards:** Awwwards SOTD 2026-04-13, score 7.86, and Site of the Month April 2026 (https://www.awwwards.com/sites/oryzo-ai) · CSS Design Awards Website of the Day 2026-04-09, UI 9.22 / UX 9.15 / Innovation 9.28 / final 9.22 (https://www.cssdesignawards.com/sites/oryzo-ai/49111) · FWA Site of the Month, per the maker's project page. Studio: Lusion. All accessed 2026-09-03.
**Job:** a self-initiated product launch by a studio — "presenting a simple cork coaster as a serious AI era product launch" (https://lusion.co/projects/oryzo_ai).
**Scenes:** "Made for mugs. Built for tables." → "Designed by Lusion, the award-winning design studio" → "The world's most unnecessarily sophisticated cork coaster." → PLAY (film) → "isn't just a coaster." → "Powered by AI" → "Oryzo-1" → **"Try to hover hand"** → "So portable, it's wearable" → "Warning" → chat interface with Send → "ISSUE NO. 00124" magazine block → features (Elevate, Handles Extremes, Perfectly Round) → thermal and encryption → "100% Plant-based" → testimonials [4.9/5] → social tiles → three tiers → Abstract / Paper / Model / Code → footer.
The maker states the spine plainly: **"hero shot, key benefit, usage, specs, reviews, comparisons, purchase"** (https://blog.lusion.co/oryzo-bts-part-3-7-website-ux-ui-and-illustrations).
**Technique (jury tags + maker):** WebGL · Three.js · GSAP · 3D · Transitions. The hero is **Gaussian splatting**, chosen after rejecting two alternatives: *"We tried image sequences and video, but they lacked the interactivity we wanted. We also tested real time PBR rendering, but it did not quite reach the visual quality we were aiming for."* Splats are used selectively — *"We used splats only for the props and the desk reflections...around 78,233 splats on desktop and 44,683 on mobile"* (https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics).
**Restraint rule, stated by the maker:** *"use as few typefaces as possible, and use as few colours as possible"* — one typeface family, four values (cream, near-black, muted olive, orange) — because *"design cannot constantly ask for attention. Its job is to support the content, not compete with it."*
**Sections:** 21. **Screens:** not measured. **Cost:** not measured (splat counts above are the only quantified payload signal).
**Confidence:** high on awards, technique and the maker's rules; medium on scene order (long client-rendered page).

### A3 · Devin — Cognition AI, built by Lusion
**Fetched at:** https://archive-devin-ai.lusion.co/ (2026-09-03). Studio credits and scope: https://lusion.co/projects/devin_ai — *"Concept, Web Design, Web Development, 3D Design, WebGL"*, using *"subtle storytelling, animation, and interactive design"* to make a sophisticated AI product "accessible".
**Job:** sells an AI software engineer. The closest thing in this set to Beeond's category.
**Scenes:** nav → Nubank case-study headline "How Nubank refactors millions of lines of code to improve engineering efficiency with Devin" → metrics "8x engineering time efficiency gain" and "20x cost savings" → overview → the problem (a 6M+ line monolith) → the decision, "an army of Devins to tackle subtasks in parallel" → the solution, "40 minutes per sub-task dropped to 10" → results quote → **a collaborative workflow demo showing a conversation between a user and Devin setting up Next.js** → **"Devin's Workspace" depicting Shell, Browser, Editor and Planner** → five use cases → "Learn & Work Together" → 20+ integrations → industry leaders → footer.
**Technique:** WebGL and 3D per the studio's own service list. No jury tag list found.
**Sections:** 15. **Screens:** not measured. **Cost:** not measured.
**Confidence: MEDIUM, with a caveat that matters.** The archive URL returned content led by a recent Nubank case study. I could not establish whether that host serves the archived award-era Lusion build or proxies the current live site. Direct fetches of https://devin.ai/ returned HTTP 429 on three attempts.

### A4 · Sharplink — https://www.sharplink.com/
**Award:** Awwwards Site of the Day + Developer Award, 2026-08-27, score 7.38. Studio Freight. Source: https://www.awwwards.com/sites/sharplink (accessed 2026-09-03).
**Job:** "the institutional-grade Ethereum treasury platform giving investors a smarter, more productive access vehicle to ETH."
**Scenes:** **NOT OBTAINED.** Four fetch attempts across two URL forms returned only the document title "Sharplink : Home" with the body truncated. The page appears to be entirely client-rendered.
**Technique (jury tags):** Animation · 3D · Footer Design · **GSAP · Three.js · Vue.js**.
**Sections / screens / cost:** not measured. **Confidence:** high on award and tags, **none on scenes.** PARTIAL.

### A5 · Squarespace Foundations — https://brand.squarespace.com/
**Award:** Awwwards Site of the Day + Developer Award, 2026-09-01, score 7.38. Resn with Squarespace. Source: https://www.awwwards.com/sites/squarespace-foundations.
**Job:** "an interactive brand experience" presenting a design system. The closest analogue in the set to *showing a system as the subject*.
**Scenes:** six numbered chapters — **01 Logo · 02 Typography · 03 Color · 04 Photography · 05 Campaign · 06 Motion**. Visible chrome: **"Tap to Explore"**, horizontal directional controls rendered as "←←←" and "→→→", a **loading progress indicator at 0%**, a dark-mode toggle, and a location stamp "(NYC)".
**Technique (jury tags):** Scrolling · Transitions · Storytelling · Interaction Design · HTML5 · **GSAP** · Javascript. No WebGL tag.
**System device:** the brand system itself, split into six chapters you move through laterally.
**Sections:** 6 chapters. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high on award, tags and chapter titles; the body text is injected at runtime, so I saw structure only.

### A6 · Alethia — https://www.alethia.earth/
**Award:** Awwwards Site of the Day 2026-08-05, score 7.34. ++hellohello, Pablo Picart, SEB®, Ismael Martínez. Source: https://www.awwwards.com/sites/alethia. Jury description: *"A website where content, visuals, and interaction work as one system to make complex environmental data feel clear and trustworthy."*
**Job:** sells environmental intelligence to enterprises.
**Scenes:** hero "Where Ecosystem Science and Enterprise Strategy Meet" → **an impact display carrying one number, "-8.3 tCO₂e", broken into verified removal and emission** → five numbered features 01–05 (Gold-Standard Observation Systems … Blockchain-Secured Traceability) → "From Data Chaos to Science-Backed, Actionable Insights" → two solutions → technology in three parts, closing on "No Spreadsheets, No Guesswork" → **"The Biggest Problem in Climate Action: Trust"** → four-step process 01–04 → two case studies → news → locations (Buenos Aires; Logan, Utah) → footer.
**Technique (jury tags):** Animation · Scrolling · Storytelling · Interaction Design · Figma · **Framer**. Palette #0F1F10 / #C6F19D.
**System device:** one large number, and two numbered ladders. **No chart, map or diagram was present in the DOM.**
**Sections:** 12. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high.

### A7 · Artificial Societies — https://www.societies.io/
**Award:** Awwwards Honorable Mention 2025-09-02. Studio: Excited. Source: https://www.awwwards.com/sites/artificial-societies. Jury description: *"Artificial Societies are collectives of AI personas that allow you to run experiments in minutes, not months."*
**Job:** sells simulated-audience research. An AI service business with a thin proof base.
**Scenes:** hero "Simulate opinions that matter." / "With networks of AI personas that model high-value audiences." → "Informing strategies at" + "As seen in" logo rows → **"We are experts in human societies"** — *"Founded by Oxbridge social & data scientists, our team authored the first large-scale AI society paper. We bring scientific rigour to every simulation."* with university logos → "Our capabilities" carrying four counters — **"2.5m+ AI personas", "95% Accuracy", "24hr Turn-around"**, plus "Network Modelling" and "Zero Exposure" → "Flagship Solutions", four offerings → Teneo case study → Pulsar partnership.
**Technique (jury tags):** Animation · Clean · Minimal · Scrolling · Single page · **Webflow · After Effects · Figma**. **No code-animation library and no 3D.** Motion was produced in After Effects and placed.
**Sections:** 7, single page. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high.

### A8 · Spur — https://spur.us/
**Award:** Awwwards Honorable Mention 2026-07-13. Engine Digital. Source: https://www.awwwards.com/sites/spur-intelligence. Jury description: *"Spur provides IP intelligence that helps organizations detect and prevent threats hidden behind VPNs, proxies, and other anonymization infrastructure."*
**Scenes:** **NOT OBTAINED.** Four attempts, all HTTP 429.
**Technique (jury tags):** 3D · Interaction Design · Footer Design · 404 pages · **Parallax · Typography · Three.js · Sanity · GSAP**. Palette #141414 / #CEFF00.
**Sections / screens / cost:** not measured. **Confidence:** high on award and tags, **none on scenes.** PARTIAL.

### A9 · Heron AI — https://heronaiapp.com/
**Award:** Awwwards **Nominee**, 2026-09-01 (not yet a SOTD). Bearplus with Kenny Ho. Source: https://www.awwwards.com/sites/heron-ai. Jury description: *"Heron AI is an agent that works inside your design tools. It watches your model as you design, suggests fixes, and makes the edits itself once you approve. Built by architects."*
**Job:** sells an approval-gated AI agent. **Structurally the nearest site in this set to Beeond's mechanism.**
**Scenes:** hero "An AI agent that works inside your design tools" → **an interactive violation demo: an architectural sketch annotated with real code citations, IBC 1015.3 and IBC 1011.11** → "Faster iterations / Fewer mistakes / Less busywork" → "THE REPETITIVE PARTS OF MODELLING SHOULDN'T EAT YOUR DAY…" → client logos → "Works natively inside the tools you already use…" → **four numbered problems: [01] Manual "Every change is on you" · [02] Disjointed "AI help sits outside your model" · [03] Blind "Nothing watches for problems" · [04] Slow "Small tasks pile up into lost days"** → floor plans with code alerts → a scrollable narrative of the architect's day → "RUN AN AGENT NATIVELY IN YOUR MODEL" → two product surfaces, [01] Heron Chat Widget and [02] Heron Dashboard → **a four-verb loop: Observe — "Heron watches your model as you design" · Advise — "It flags issues and suggests fixes in plain language" · Act — "With your approval, it makes the edit directly in the model" · Learn — "It picks up your firm's standards and gets more useful"** → eight roles served → CTA "SEE WHAT HERON CAN DO IN YOUR MODEL / Book a demo" → footer.
**Technique (jury tags):** **GSAP · Webflow · Canvas API** · Animation · Scrolling · Storytelling · Content Architecture · Interaction Design.
**System device:** the annotated drawing, repeated at three scales, plus the four-verb loop with the human approval written into the verb.
**Sections:** 16. **Screens:** not measured. **Cost:** not measured (one PageSpeed attempt, HTTP 429).
**Confidence:** high.

### A10 · AI in Design Report 2026 — https://stateofaidesign.com/
**Award:** Awwwards Site of the Day + Developer Award, 2026-08-26. Score 7.4 — **Design 7.66 · Usability 7.21 · Creativity 7.14 · Content 7.38**; Dev Award 7.23. ++hellohello, SEB®, Pablo Picart, Ismael Martínez. Source: https://www.awwwards.com/sites/ai-in-design-report-2026. Jury description: *"A research report transformed into an editorial digital experience, where data, analysis, and motion speak in a single visual language."*
**Job:** a report that sells the studio. The nearest analogue to "put Beeond's thinking in front of the market".
**Scenes:** partners → **"An Inflection Point"** / *"In 2025, designers were experimenting with AI. In 2026, they're rebuilding around it."* with counters "900+ designers surveyed in 60+ countries" and "20+ interviews" → **01 Tools — "The great toolstack shakeup"** → **02 Craft — "Craft in the age of infinite output"** (50% deployed AI-generated code to production) → **03 Teams — "Redesigning the design org"** → video case studies (Sierra, Linear, Shopify live; four marked coming soon) → "Inside AI-native design teams" → "Get new case studies & report markdown" → Methodology, **whose counters are rendered as `0` in the markup**.
**Technique (jury tags):** **Data Visualization** · Storytelling · Animation · Colorful · **Responsive Design** · Figma · **Framer**.
**Sections:** 9. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high.

### A11 · Immersive Garden — https://immersive-g.com/
**Award:** Awwwards Site of the Day 2025-01-07, **score 8/10 — the highest in this set**, and Site of the Month January 2025. Source: https://www.awwwards.com/sites/immersive-garden-website.
**Job:** a studio selling itself.
**Scenes:** header "Innovative digital experiences studio" + **"Scroll down"** → hero "Transcend anything seen or felt before by crafting unparalleled experiences for ambitious brands." → approach → project showcase, each item labelled by type (Web Experience / E-Shop / Corporate) → "We partner with exceptional clients, helping drive their success." → further projects → footer (Paris).
**Technique (jury tags):** Experimental · Animation · **3D** · **Gestures / Interaction** · UI design · Project Page · Contentful. The Awwwards entry names the specific devices the jury saw: **"Bas-relief (interaction)", "Menu Transition", "Rapid Scroll feature", "Projects Listing", "Contact section"**. Palette #000000 / #c2c2c2.
**Sections:** 8. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high on award and named devices; UNKNOWN on how they behave.

### A12 · Lama Lama — https://lamalama.com/
**Award:** Awwwards Site of the Day 2026-07-20, score 7.51, and **Site of the Month July 2026**. Source: https://www.awwwards.com/sites/lama-lama-2.
**Job:** "A creative digital agency that goes all in or not at all" — a done-for-you services business.
**Scenes:** nav → hero, the positioning line as the headline → featured work carousel, six cases (Jack & AI, Moov, Gardeners, Neurons Lab, Prazeres United, Home, Ajax) → "What we do", three categories (Branding / Digital / Marketing) → "happy clients" (Achmea, Cupra, BUMA, Sony, Van Doorne, DSM, Amsterdam) → **"Our awwwards talk"**, listing Awwwards, FWA, Lovie and CSS Design recognitions → "Based in the beating heart of Amsterdam" → four values ("Think wild craft sharp", "Keep it human", "Impact with heart", "Everything we got") → "All in or nothing" → work showcase → CTA **"Say no more. it's a match"** with a phone number → footer.
**Technique (jury tags):** **WebGL · GSAP · Javascript** · Animation · Graphic design.
**Sections:** 12. **Screens:** not measured. **Cost:** not measured.
**Confidence:** high.

### Also examined, not scored as rows
- **Lusion** (https://lusion.co, accessed 2026-09-03) — hero "We create 3D visual storytelling and interactive web experiences that help brands stand out" with a visible **"scroll to explore"**; work grid whose cards carry tag strings ("concept • web • design • development • 3d • animation"); counters rendered as `0`. Its own Awwwards case study (https://www.awwwards.com/case-study-for-lusion-by-lusion-winner-of-site-of-the-month-may.html, **undated in the fetched page**) is the single best cost document I found — quoted in §B8 and §B9.
- **basement.studio** (https://basement.studio) — "A digital studio & branding powerhouse making cool shit that performs"; Selected Work (Vercel Ship, Daylight, KidSuper, Shop MrBeast); "We're here to create the extraordinary." Its client project **USAvionix** took an Awwwards Honorable Mention 2026-08-10 — *"The first agent in the air, built with the speed, range, and onboard intelligence to search vast areas on its own"* — tagged **Next.js · WebGL · 3D · Storytelling** (https://www.awwwards.com/sites/usavionix).
- **REJOUICE** (https://rejouice.com) — the studio behind Terminal Industries. Numbers used as texture throughout: "60 brands successfully launched since 2013", "70+ industry-recognized awards", "Driving 150% LTV:CAC in average", office timezone displays for San Diego and Paris, "©13—26".
- **HOBRO DIGITAL** (https://hobro.digital, Awwwards SOTD 2026-08-29, score 7.29, tags Node.js · GSAP · 3D) — returned almost no body text to a fetch; see anti-pattern C2.
- **Contrast cases — high-craft AI companies that are *not* scene-driven.** **Clay** (https://www.clay.com) is a long conventional product page: hero "Build systems to grow revenue", four capability clusters, an interactive **"What do you want to build?"** block with three search options and a submit button, then **seven tabbed capability set-pieces** each carrying a product still. **Sierra** (https://sierra.ai) is hero → 30 customer logos → four value statements → four testimonials → "Meet Sierra" (Ghostwriter, Insights, Horizon) → nine compliance badges → CTA. Both are commercially successful and neither is an experience. Their presence in the set is the evidence that immersion is a choice, not a requirement.

---

## §B — Synthesis

### The patterns that recur (each sourced to rows above)

**B1 · The mechanism is the first interactive thing, not a mood image.** Terminal puts a working calculator that takes gates, shifts and wages early in the page; Heron's first screen after the headline is an architectural sketch annotated with two real code citations; Oryzo's hero is the object itself, rendered live. In none of the twelve is the opening set-piece decorative. *(A1, A2, A9)*

**B2 · Numbered chapters carry the narrative.** Explicit ordinals appear in **6 of 12**: Squarespace Foundations 01–06, Alethia 01–05 and again 01–04, Heron 01–04 twice, Terminal 01–04, State of AI Design 01–03. The ordinal is doing the work the reference corpus's "numbered rows with mono ordinals" already flagged. *(A1, A5, A6, A9, A10)*

**B3 · Counters that begin at zero.** Lusion's homepage and State of AI Design's methodology block both render their figures as literal `0` in the served markup, which means the number is animated on arrival. Artificial Societies carries four ("2.5m+", "95%", "24hr"), Devin two ("8x", "20x"), Alethia one ("-8.3 tCO₂e"). *(A3, A6, A7, A10, Lusion)*

**B4 · A staged tour replaces the product screenshot.** Terminal splits its platform into four named stages — AT THE GATE, IN THE YARD, AT THE DOCK, ACROSS OPERATIONS. Devin shows "Devin's Workspace" as four labelled tools (Shell, Browser, Editor, Planner). Clay uses seven capability tabs. The system is shown as *stations you move through*, not as one dashboard image. *(A1, A3, Clay)*

**B5 · A verb loop makes an invisible process visible.** Heron's **Observe → Advise → Act → Learn** is the clearest instance, and the human is written into the verb: *"With your approval, it makes the edit directly in the model."* This is how a site states an approval gate without faking a product screen. *(A9)*

**B6 · Award-grade motion is frequently cheap.** Of the twelve, **WebGL or Three.js appears in only five** (Oryzo, Sharplink, Spur, Lama Lama, and basement's USAvionix). **Three of the twelve were built in no-code tools** — Alethia and State of AI Design in Framer, Artificial Societies in Webflow with After Effects. Heron is Webflow plus GSAP plus the Canvas API. Terminal, whose jury tags are Animation · Scrolling · Storytelling, lists only CSS and Vue.js. A 2026 Site of the Day does not require a 3D engine. *(A1, A6, A7, A9, A10)*

**B7 · The makers describe craft as subtraction.** Lusion, on Oryzo: *"design cannot constantly ask for attention. Its job is to support the content, not compete with it"*, enforced as one typeface family and four colour values. Studio Freight, in its Codrops interview (https://tympanus.net/codrops/2026/07/29/studio-freight-moving-missions-forward/): *"disciplined about making things exactly as they should be, no more and no less."* Lusion again, on method: *"every project gets its own system, its own logic, and its own flavour."* *(A2, A4, A11)*

**B8 · Pre-compute; do not do it live.** Lusion's own case study is explicit: *"You don't need to do everything real-time."* They shipped **11 keyframes for a 66-frame animation and interpolated at runtime**, and stored the data *"into a 16bit integer data"* rather than 32-bit float. On Oryzo they rejected video ("lacked the interactivity we wanted") *and* real-time PBR ("did not quite reach the visual quality"), and used splats **only for props and desk reflections**. *(A2, Lusion case study)*

**B9 · Mobile is the same scene at a lower resolution.** Two quantified instances, both from Lusion: Oryzo runs **78,233 splats on desktop and 44,683 on mobile**; the earlier cloth animation shipped **983 KB on desktop (4,096 vertices) and 246 KB on mobile (1,024 vertices)**. Squarespace Foundations changes the instruction rather than the content — its prompt reads **"Tap to Explore"**. State of AI Design carries an explicit "Responsive Design" jury tag. *(A2, A5, A10, Lusion case study)*

**B10 · The ask stays ordinary at the end.** Heron closes on "SEE WHAT HERON CAN DO IN YOUR MODEL / Book a demo". Terminal closes on a contact form, an FAQ and "The yard of the future starts today". Lama Lama closes on "Say no more. it's a match" and a phone number. No site in the set replaced its CTA with an experience. *(A1, A9, A12)*

**B11 · Identity proof still sits at section two.** Terminal, Artificial Societies, Heron, Lama Lama and Sierra all place a logo row or a credibility block immediately after the hero — consistent with the r1 packet's finding of 8 of 10. Artificial Societies substitutes founder credentials for client volume: *"Founded by Oxbridge social & data scientists, our team authored the first large-scale AI society paper."* That substitution is available to a company with no clients. *(A1, A7, A9, A12)*

### Anti-patterns — what I could and could not source

**Honest framing:** the brief named five. I found direct evidence for two. I will not restate the other three as findings.

**C1 · A visible loader on a jury-scored page.** Squarespace Foundations exposes a loading progress indicator sitting at 0% in the served document. This is a *presence* finding, not a penalty finding — I have no jury comment tying it to a score. Related and weak: for the one site in the set publishing sub-scores, **State of AI Design, Usability (7.21) was its lowest of four dimensions against Design (7.66)**. One data point. Low confidence as a rule.

**C2 · Content that exists only in JavaScript.** Sharplink, HOBRO DIGITAL and Squarespace Foundations returned an empty or near-empty document to a text fetch on 2026-09-03; Sharplink returned only its title across four attempts. Whatever this costs in ranking or reader-mode, it is exactly what a non-executing client receives. Evidence: my own fetches.

**C3 · The AI-template tells** — centred hero, gradient-mesh or grid wash, glassmorphism pill, three-equal-card bento, "Book a Demo" dual CTA, "No credit card required / Setup in 5 minutes / Cancel anytime" trust row, marquee logo strip, tilted dashboard mockup. Sourced **not** to my fetches but to this repository's own negative set, `docs/05-marketing/references/negative-1..4-*.png`, which I opened today. All four are Framer template demos. Note the tension with B6: **Framer is also the tool behind two Sites of the Day in this set.** The tool is not the tell; the template is.

**C4 · Scrolljacking · C5 · Motion with no subject · everything easing in · unreadable text over motion — UNSOURCED.** I could not observe motion and found no jury statement on any of them in this pass. Awwwards' evaluation-criteria page returned HTTP 404. These stay in Gaps, not in findings.

### Mobile, as far as it is evidenced
Only three concrete signals exist, all listed in B9: two quantified desktop/mobile payload splits from Lusion, and one instruction change ("Tap to Explore"). No site in the set was fetched with a mobile user agent and no mobile Lighthouse run succeeded. **The mobile story in this packet is thin and should not be treated as covered.**

### Pattern → Beeond scene (from plan §10)

| Beeond scene | Pattern that serves it | Evidence, and why it fits |
|---|---|---|
| **The gathering** — marks assemble into one finished piece | B2 numbered chapters + B8 pre-computation | The assembly is a sequence, so give it ordinals. Lusion's *"You don't need to do everything real-time"* plus 11-keyframes-for-66-frames is the technique that puts an assembly on a scroll without a 3D engine; it is also exactly what DESIGN-LANGUAGE Layer 4b's ≤90-frame scrub budget already assumes. |
| **The hand that stops it** — a person signs off | B5 verb loop, as built by Heron AI | Heron states the approval gate as a verb — *"With your approval, it makes the edit directly in the model"* — beside three sibling verbs. It is the only site in the set whose product claim is "an agent that stops for a human", and it carries it in words plus an annotated drawing, not a dashboard. |
| **The record writing itself** — the ledger, line by line | B3 zero-start counters + A6 Alethia's single-number treatment | Two opposite executions are both awarded: Alethia gives the whole scene to one figure ("-8.3 tCO₂e") split into its parts; State of AI Design ships its methodology counters as `0` and lets arrival fill them. Neither invents client data. |
| **The footprint lighting up** — channels joining into one shape | B4 staged tour, as built by Terminal Industries | AT THE GATE → IN THE YARD → AT THE DOCK → ACROSS OPERATIONS is the same move as channel-by-channel coverage: named stations, one at a time, ending on the whole. Terminal does it with CSS and Vue, no WebGL. |
| **Your own footprint** — the free audit, drawn for the visitor's URL | B1 mechanism-as-first-interaction | Three instances: Terminal's calculator takes the visitor's gates, shifts and wages; Heron's hero runs the check on a drawing in front of you; Clay's "What do you want to build?" block takes a query and a submit. All three make the ask *the demo*. |
| **One place, one day** (art) | B7 subtraction | Nothing in the set is an art-only scene that a jury rewarded on its own; the art in these sites is always the *treatment* of a system scene. Immersive Garden — the highest-scoring site here at 8/10 — is the exception worth studying, and its jury-named devices are "Bas-relief", "Menu Transition", "Rapid Scroll". |
| **The close** — a photograph, one line, the wordmark | B10 ordinary ask | Every site in the set lands on a conventional CTA. "Book a demo", "it's a match", "The yard of the future starts today". The peak-end moment and the ask are not the same element. |

---

## §C — How the best of them hold art and system together

The balance is not struck by alternating pretty scenes with explanatory ones; it is struck by making the explanatory scenes carry the art, and then removing almost everything else. Lusion says it directly about the most ornate site in this set: the constraint was *"use as few typefaces as possible, and use as few colours as possible"* — one family, four values — because *"design cannot constantly ask for attention. Its job is to support the content, not compete with it."* The expense went into one subject, the object on the desk, and every other surface was made quiet enough to let it read; the same instinct is why they used splats *only* for the props and the reflections rather than the whole scene, and why Studio Freight describes its own standard as *"exactly as they should be, no more and no less."* The corollary shows up in the tooling. Two Sites of the Day in this set were built in Framer and one in Webflow with After Effects, which means the jury was not rewarding the engine — it was rewarding a page where one idea per scene was executed completely and nothing else moved. For a page whose subject is a swarm doing work, that reads as a rule rather than a preference: pick the single Beeond mechanism each scene is about, spend the whole motion budget on that one subject, and let the surrounding surface be cream, black, type and space. The sites that feel expensive here are the ones that left the most out.

---

## GAPS

1. **I never saw a single site move.** `WebFetch` returns rendered markdown, not a running page. Every motion statement is second-hand from a jury tag, a maker's case study, or a DOM label. Playwright is the one MCP server configured in this repo; an engine that can drive it could close this gap directly, and should, before any of these patterns is built.
2. **No cost figure was obtained for any site.** Five PageSpeed Insights API attempts across three URLs (oryzo.ai, terminal-industries.com, societies.io, heronaiapp.com) all returned HTTP 429 — the keyless quota. Lighthouse mobile score and total payload are UNKNOWN for all twelve. The only payload evidence in the packet is Lusion's self-reported splat counts and vertex-animation sizes.
3. **Page length in screens is not measured for any site.** The "sections" count is a DOM proxy and will overstate short pinned sequences and understate long ones.
4. **Sharplink (Studio Freight, SOTD 2026-08-27): scenes not obtained.** Four attempts, two URL forms; the document returns its title only.
5. **Spur (Engine Digital, HM 2026-07-13): scenes not obtained.** Four attempts, all HTTP 429.
6. **The Devin row is uncertain in a way that matters.** The content came from `archive-devin-ai.lusion.co` and leads with a recent Nubank case study, so I cannot tell whether I read the archived award-era Lusion build or a proxy of the live site. Three direct fetches of devin.ai returned HTTP 429.
7. **Awwwards' evaluation criteria are unread.** https://www.awwwards.com/about-evaluation.php returned HTTP 404, so I have no published weighting for design vs usability vs creativity, and therefore no jury-side evidence for what is *punished*.
8. **FWA yielded nothing.** thefwa.com/awards/fwa-of-the-day returned HTTP 500 and thefwa.com returned a title-only document. Every FWA reference in this packet is second-hand via a maker's page.
9. **CSS Design Awards is represented by one site.** cssdesignawards.com/website-of-the-year redirects to a 404; only the Oryzo entry was reachable by direct URL.
10. **Three of the five anti-patterns the brief asked for are unsourced** — scrolljacking, motion with no subject, unreadable text over motion. Not asserted. See C4.
11. **The Lusion case study used for the payload numbers in B8 and B9 is undated in the fetched page.** It is that studio's own writing about an earlier Site of the Month, so the figures are a craft principle with a real provenance, not a 2026 measurement.
12. **No Hebrew or RTL immersive reference was sourced.** Still open from the r1 packet.
13. **Nothing here is customer evidence.** The lens exception in the brief stands: `requires_claims: [user-language]` is unsatisfiable, per `docs/05-marketing/WEBSITE-DESIGN-PROCESS.md` §10. These are craft observations about other companies' sites, and none of them is a signal about Beeond's buyer.

## claims_emitted

`[]`

Two independent reasons, both binding:
- **`claim-append` is absent.** `.mcp.json` declares one server, `playwright`. Verified by reading the file today, as the engine contract instructs.
- **No quote here is guaranteed character-exact.** `WebFetch` passes every page through a summarising model, so the `claim-source` resolver — which re-fetches the URL and asserts the quote is present character for character — would be checking text I did not read raw. Registering these as claims would fail CI for whoever opens the next PR. Quotes are marked in italics in the body and should be re-verified against the live page by a tool that returns raw text before any of them is put in the ledger.
- Separately: award rows would survive a `valid_until`, but homepage structure will not. No row above has a defensible re-check date beyond a few weeks.
