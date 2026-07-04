import { hexPath, axialToPixel, hexRing, mulberry32 } from "@/lib/hex";
import { CELL, REST_DOTS, SWARM_VB } from "./swarm-data";

/**
 * The rested swarm — SSR SVG, present from first paint. This IS the
 * reduced-motion state, the JS-off state, and the exact end frame the
 * canvas one-shot lands on. Designed as a finished composition first.
 */
export function SwarmRested({ className = "" }: { className?: string }) {
  const ring1 = hexRing(1);
  const ring2 = hexRing(2);
  const latticeSize = CELL.r; // neighbor cells share edge length with the cell

  return (
    <svg
      viewBox={`0 0 ${SWARM_VB.w} ${SWARM_VB.h}`}
      className={className}
      aria-hidden="true"
      data-swarm-rested
    >
      {/* faint honeycomb neighborhood — the hive the cell belongs to */}
      <g stroke="var(--color-hairline)" strokeWidth="1.25" fill="none">
        {ring1.map(([q, r]) => {
          const p = axialToPixel(q, r, latticeSize);
          return (
            <path
              key={`r1-${q}-${r}`}
              d={hexPath(CELL.cx + p.x, CELL.cy + p.y, CELL.r)}
              opacity="0.75"
            />
          );
        })}
        {(() => {
          const fade = mulberry32(11);
          return ring2.map(([q, r]) => {
            const p = axialToPixel(q, r, latticeSize);
            const o = 0.14 + fade() * 0.22; // deterministic per-cell fade, not erosion
            return (
              <path
                key={`r2-${q}-${r}`}
                d={hexPath(CELL.cx + p.x, CELL.cy + p.y, CELL.r)}
                opacity={o.toFixed(2)}
              />
            );
          });
        })()}
      </g>

      {/* the cell — the swarm's destination, drawn in ink */}
      <path
        d={hexPath(CELL.cx, CELL.cy, CELL.r)}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* the rested swarm — soft halo + solid core per dot (parametric identity) */}
      <g fill="var(--color-yellow)" data-swarm-dots>
        {REST_DOTS.map((d, i) => (
          <circle key={`h-${i}`} cx={d.x} cy={d.y} r="4.5" opacity="0.18" />
        ))}
        {REST_DOTS.map((d, i) => (
          <circle key={`c-${i}`} cx={d.x} cy={d.y} r="3" />
        ))}
      </g>
    </svg>
  );
}
