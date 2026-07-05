/**
 * Hero art (v6.1, founder-directed) — the ONE drawing above the fold,
 * generated via scripts/generate-art.mjs `hero-signal` (prompt committed)
 * and normalized so its paper IS the ground token: five scattered channel
 * pictograms — search, an AI answer, email, a page, a chart — braid into
 * one dashed line and arrive at a single built honey cell. Scatter becomes
 * one coordinated presence; no bees above the fold; no lettering, so the
 * composition is direction-neutral (no RTL mirror needed).
 * Decorative (the H1/subhead carry the argument as text) — alt="".
 * Perf: eager but UNPRIORITIZED (fetchPriority=high on hero art killed the
 * perf gate twice in v4/v5); LCP stays the H1 text.
 */
export function HeroArt() {
  return (
    <div className="pointer-events-none absolute top-[46%] hidden w-[350px] -translate-y-1/2 select-none end-10 lg:block">
      {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP, paper==ground makes seams impossible */}
      <img
        src="/art/hero-signal.webp"
        srcSet="/art/hero-signal-640.webp 640w, /art/hero-signal.webp 1024w"
        sizes="330px"
        width={1024}
        height={1536}
        alt=""
        // lazy: desktop-only element — in-viewport lazy loads immediately on
        // desktop, and phones (display:none) skip the download entirely
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}
