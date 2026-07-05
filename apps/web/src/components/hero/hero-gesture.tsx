/**
 * Hero gesture (v6, r1 per founder adjust) — the ONE small supporting
 * drawing above the fold. Scattered ink dots — a presence in pieces —
 * fall in along a dashed flight line and converge into a single hex cell
 * with a yellow nucleus: scatter becomes structure, "your presence needs
 * to match." Chapter-1 of the old swarm story, retold in still ink.
 * Inline SVG, brand tokens only, decorative (aria-hidden), desktop-only;
 * reveals once via the shared [data-reveal] system. RTL: self-mirrors.
 */
export function HeroGesture() {
  return (
    <div
      data-reveal
      aria-hidden="true"
      className="hero-gesture pointer-events-none absolute top-28 hidden w-[340px] end-14 lg:block"
    >
      <svg viewBox="0 0 300 430" fill="none" className="h-auto w-full">
        {/* scattered presence — loose dots, not yet a system */}
        <g fill="var(--color-ink)">
          <circle cx="206" cy="26" r="2.6" opacity="0.3" />
          <circle cx="257" cy="44" r="2.2" opacity="0.28" />
          <circle cx="176" cy="62" r="2.9" opacity="0.34" />
          <circle cx="268" cy="92" r="2.3" opacity="0.32" />
          <circle cx="222" cy="104" r="2.6" opacity="0.4" />
          {/* falling in — tighter, darker, joining the line */}
          <circle cx="243" cy="158" r="2.7" opacity="0.52" />
          <circle cx="219" cy="214" r="2.8" opacity="0.62" />
          <circle cx="192" cy="266" r="2.9" opacity="0.74" />
          <circle cx="168" cy="306" r="3" opacity="0.85" />
        </g>
        {/* dashed flight line — hand-inked descent the dots ride */}
        <path
          d="M262 40c-27 60-4 110-37 165-29 49-65 85-73 125"
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
