/**
 * Hero gesture (v6) — the ONE small supporting drawing above the fold.
 * A dashed ink flight line dropping out of the fast-moving era, resolving
 * into a single hex cell with a yellow nucleus: movement becomes structure —
 * "your presence needs to match." Inline SVG, brand tokens only, decorative
 * (aria-hidden), desktop-only; reveals once via the shared [data-reveal]
 * system. RTL: the stage mirrors itself (abstract, no lettering).
 */
export function HeroGesture() {
  return (
    <div
      data-reveal
      aria-hidden="true"
      className="hero-gesture pointer-events-none absolute top-36 hidden w-[280px] end-7 lg:block"
    >
      <svg viewBox="0 0 300 430" fill="none" className="h-auto w-full">
        {/* speed ticks — the era passing */}
        <g stroke="var(--color-ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.3">
          <path d="M251 26l-11 13" />
          <path d="M262 47l-11 13" />
        </g>
        {/* dashed flight line — hand-inked S descent */}
        <path
          d="M281 14C232 66 268 128 222 190c-40 54-88 82-74 128 6 20 12 26 2 40"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="7 9"
          opacity="0.5"
        />
        {/* the cell — slightly wobbled, hand-drawn */}
        <path
          d="M150.8 342.4l25.5 14.2-.7 30.9-26.1 14.7-24.9-15.4.3-29.5Z"
          stroke="var(--color-ink)"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        {/* yellow nucleus — the keystone echo */}
        <path
          d="M150 363l8 4.5v9l-8 4.5-8-4.5v-9Z"
          fill="var(--color-yellow)"
          stroke="var(--color-ink)"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
