/**
 * brand.lock.ts — the Beeond brand constitution as EXECUTABLE code.
 *
 * This file is the single source of truth for every color, the only typeface,
 * and every founder-locked copy string. Components import from here — they
 * never retype a hex or a headline. Enforcement: scripts/brand-lint.mjs fails
 * the build on any deviation; src/app/globals.css deletes Tailwind's default
 * palette so off-brand utilities do not compile at all.
 *
 * Changing anything in this file is a Constitution change → founder proposal,
 * never a silent edit. (See docs/08-agents_work/briefs/2026-07-03-fable5-landing-build.md §3.)
 */

/** The 7-token palette. Nothing else exists. No pure black, no pure white, no blue/purple. */
export const COLORS = {
  /** Primary page background — warm white, never cool, never pure */
  ground: "#FAF9F5",
  /** Primary text — near-black with warm undertone. Never pure black. */
  ink: "#141413",
  /** THE single accent. Fill / highlight / underline ONLY — never body text, never a CTA background. */
  yellow: "#FFDB5B",
  /** Cream moment panels, alternate section beats */
  panel: "#F0EEE6",
  /** Optional deep-moment sections (final CTA). 1–2 per page max. */
  deep: "#0A0A0A",
  /** 1px borders on light backgrounds */
  hairline: "#E3DDD5",
  /** Secondary text — warm medium gray, AA on ground */
  muted: "#5C5751",
} as const;

export type BrandColor = keyof typeof COLORS;

/** ~90/10 ink-and-ground to yellow. Yellow points — it never floods. */
export const YELLOW_RATIO = 0.1;

/** Rubik is the ONLY registered typeface. Self-hosted variable woff2, latin +
 *  hebrew subsets split by unicode-range (Hebrew ships zero bytes on the EN path). */
export const FONT = {
  family: "Rubik",
  fallback: "Rubik Fallback", // metric-matched local Arial — kills swap CLS
  weightSpan: "300 900",
  files: {
    latin: "/fonts/rubik-latin.woff2",
    hebrew: "/fonts/rubik-hebrew.woff2",
  },
} as const;

/** Founder-locked copy. VERBATIM — Constitution invariant #6. */
export const COPY = {
  /** Category eyebrow — founder-approved wording, sits above the H1. */
  eyebrow: {
    en: "Done-for-you growth, AI-native",
    he: "צמיחה בניהול מלא, AI-native",
  },
  /** Locked H1 (founder pick 2026-06-30). Line 2 is the accented line. */
  h1: {
    en: ["The AI era moves fast.", "Your presence needs to match."],
    he: ["עידן ה-AI זז מהר.", "הנוכחות שלכם צריכה לעמוד בקצב."],
  },
  /** The ONE word on line 2 that carries the yellow underline. */
  h1AccentWord: {
    en: "match",
    he: "בקצב",
  },
  /** Locked subhead — explicit what / who / how. */
  subhead: {
    en: "Beeond runs your whole digital presence — every channel your buyers use to find and evaluate vendors — as one coordinated swarm that adapts as fast as the market moves.",
    he: "Beeond מנהלת את כל הנוכחות הדיגיטלית שלכם — כל ערוץ שבו הלקוחות מחפשים ובוחנים ספקים — כנחיל אחד מתואם שמסתגל מהר כמו השוק.",
  },
  ctaPrimary: {
    en: "Get a free footprint audit",
    he: "קבלו אבחון נוכחות חינם",
  },
  ctaSecondary: {
    en: "See how the swarm works",
    he: "איך הנחיל עובד",
  },
  ctaFinal: {
    en: "Book a footprint call",
    he: "קביעת שיחה עם המייסדים",
  },
  ctaMicro: {
    en: "No agency pitch. No deck. We'll show you where your footprint has gaps — and what it would take to close them.",
    he: "בלי פיץ' של סוכנות, בלי מצגת. נראה לכם איפה יש פערים בנוכחות — ומה נדרש כדי לסגור אותם.",
  },
  /** Launch-hold footer line — required on every build until TM clearance. */
  launchHold: {
    en: "Launching 2026 — trademark clearance in progress.",
    he: "השקה ב-2026 — בהמתנה לאישור סימן מסחר.",
  },
} as const;

export type Locale = "en" | "he";

/** The Constitution — encoded here, enforced by brand-lint + this module.
 *  If an invariant genuinely hurts the outcome: STOP, write a founder proposal. */
export const INVARIANTS = [
  "7-token palette + ~90/10 ink-and-ground to yellow",
  "Rubik only, self-hosted + subset (latin + hebrew via unicode-range)",
  "Yellow = fill/highlight/underline ONLY — never body text, never CTA background",
  "Swarm converges ONCE then rests — zero perpetual loops",
  "Bee⬡nd hex-'o' logotype (inline SVG), no bee mascot in headers",
  "Locked H1 copy, verbatim",
  "No bento-grid-of-services",
  "LCP = the hero H1 in SSR HTML",
  "All copy traceable to POSITIONING.md",
  "Mobile perf ≥90 / a11y ≥95 gates",
] as const;
