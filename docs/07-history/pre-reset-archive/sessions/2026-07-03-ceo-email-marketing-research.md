---
role: ceo
task: email-marketing-research
date: 2026-07-03
color: gold
qa_verdict: N/A (research/advisory, no code)
tier: n/a
---

# CEO — Email Marketing Research (client: בונים עתיד / Bonim Atid RE)

**Ask:** Founder wants email-marketing best practices, tech/system options (simple vs complex), and costs for a first client (Israeli real-estate co.), designed to become a repeatable Beeond service. Pricing-to-client left to superior.

**Method:** 3 parallel researcher threads — (1) platforms+costs, (2) deliverability engineering + Israeli law, (3) real-estate lifecycle + client grounding.

**Key findings:**
- Client site bonimatid-re.com is Cloudflare-bot-walled → client profile LOW confidence (inferred: IL brokerage/advisory; audiences = local Hebrew buyers + diaspora/Anglo EN buyers; long 3–18mo cycle; WhatsApp-first market).
- Recommended stack: **MailerLite** (Tier-1 default, native RTL) → **ActiveCampaign** (Tier-2 automation, native RTL, agency reseller program) → **Resend/SES custom** (Year-2 margin play). Avoid Mailchimp/Klaviyo/HubSpot for HE/SMB.
- Do NOT build a complex system for client #1. Buy ESP, sell DFY service on top.
- Legal is a real liability: Israel Anti-Spam §30A (explicit consent, "פרסומת" subject, 1,000 NIS/msg, personal liability); PPL Amendment 13 (register DB >10k contacts); GDPR triggers on any EU/diaspora contact.
- Deliverability non-negotiables: dedicated subdomain + SPF/DKIM/DMARC (progress p=none→reject), warmup, complaint <0.1%.

**Deliverable:** Full options brief presented to founder. Research files in scratchpad (thread1-platforms-costs.md) + threads 2/3 in transcript.

**Next:** Founder picks platform direction → then log DECISIONS entry + brief CTO (sending infra) / CMO (bilingual flows) / CBO (client pricing). Confirm client business type + existing list before any build.
