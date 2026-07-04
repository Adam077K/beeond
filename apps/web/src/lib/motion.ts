/**
 * motion.ts — the motion-token file. Authored FIRST, before any component.
 *
 * One motif, three chapters, zero loops:
 *   Ch.1  Scatter→Converge→Rest   (hero, load-triggered, one-shot ~1.6s spring)
 *   Ch.2  Release→Build           (C7, scroll-scrubbed, deterministic, reversible)
 *   Ch.3  Rested Hive             (dark final CTA, static payoff)
 *
 * Continuity between chapters is PARAMETRIC IDENTITY (the constants below),
 * never shared state: two separate canvas contexts, two mount lifecycles.
 * After converge-and-rest the hero swarm is DEAD until C7.
 *
 * CSS mirror lives in src/app/globals.css (@theme --ease-*, :root --dur-*).
 * Raw browser easing keywords, blanket property transitions, and uniform
 * global durations are all banned — duration scales with travel distance.
 */

import { COLORS } from "./brand.lock";

/** Spring for the swarm + CTA arrow (Family-grade overshoot-and-settle). */
export const SPRING = { stiffness: 110, damping: 18 } as const;

/** 6-step duration ladder (ms) — pick by travel distance, never uniformly. */
export const DUR = {
  /** exits, micro state flips (always faster than the matching entrance) */
  xs: 120,
  /** hovers */
  sm: 180,
  /** small travel */
  md: 240,
  /** medium reveals */
  lg: 400,
  /** section entrances */
  xl: 640,
  /** hero convergence one-shot */
  hero: 1600,
} as const;

/** Exit : entrance ratio — accordion/menu closes run at ~0.8× their entrance. */
export const EXIT_RATIO = 0.8;

/** Named easing per intent. Entrances settle; hovers are swift; exits accelerate. */
export const EASE = {
  settle: "cubic-bezier(0.16, 1, 0.3, 1)",
  swift: "cubic-bezier(0.32, 0.72, 0.36, 1)",
  exit: "cubic-bezier(0.5, 0, 0.75, 0.4)",
} as const;

/** GSAP-friendly array forms. */
export const EASE_ARR = {
  settle: [0.16, 1, 0.3, 1],
  swift: [0.32, 0.72, 0.36, 1],
  exit: [0.5, 0, 0.75, 0.4],
} as const;

/**
 * Parametric identity — "the same bees" in both chapters.
 * Same dot radius, same yellow, same offscreen-baked additive glow, same spring —
 * across two separate canvases. Do NOT wire hero state into C7.
 */
export const DOT = {
  radius: 3,
  color: COLORS.yellow,
  /** additive glow: offscreen-baked sprite drawn with this composite op */
  composite: "lighter" as GlobalCompositeOperation,
  /** glow sprite radius (px) baked once offscreen, never per-frame shadowBlur */
  glowRadius: 9,
} as const;

/** THE KEYSTONE — C7's final ~1.5s. ~40% of the polish budget lives here. */
export const KEYSTONE = {
  /** cells reveal by distance-to-anchor, outer ring inward */
  staggerRangeMs: [40, 60] as const,
  /** cap: ~6 staggered, then the rest together; total reveal ≤ 500ms */
  staggerCap: 6,
  revealTotalMs: 500,
  /** anchor cell locks LAST: spring overshoot-and-settle + ONE hairline pulse */
  pulseFadeMs: 400,
} as const;

/** Honor prefers-reduced-motion everywhere: rested end-state from first paint. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
