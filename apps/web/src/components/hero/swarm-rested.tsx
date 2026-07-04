import { hexPath, hexVertices, axialToPixel, hexRing, mulberry32 } from "@/lib/hex";
import { CELL, HONEY_LINE, REST_DOTS, SWARM_VB } from "./swarm-data";

/**
 * The rested swarm — "the comb under construction". SSR SVG, present from
 * first paint; the reduced-motion state, the JS-off state, and the exact
 * frame Chapter 1 lands on.
 *
 * Craft recipe (all 7 tokens, no photos, no shadows): every built cell is
 * drawn with real WALL THICKNESS (outer wall → inner face), the main cell
 * holds a HONEY POOL (yellow as material, with a darker meniscus and
 * ground-token bubbles), neighbor cells sit at different completion states
 * (walls-only / paper-filled / part-built), and the swarm rests on the rim
 * and above the pool. Depth comes from layered fills, never drop shadows.
 */

/** one comb cell with wall thickness + optional face fill */
function CombCell({
  cx,
  cy,
  r,
  wall = 9,
  face = "ground",
  built = 1,
}: {
  cx: number;
  cy: number;
  r: number;
  wall?: number;
  face?: "ground" | "panel" | "none";
  built?: number; // 0..1 → wall stroke opacity (construction state)
}) {
  return (
    <g>
      <path
        d={hexPath(cx, cy, r)}
        fill={face === "none" ? "none" : "var(--color-panel)"}
        stroke="var(--color-ink)"
        strokeWidth={2.2}
        strokeLinejoin="round"
        strokeOpacity={built}
      />
      {face !== "none" ? (
        <path
          d={hexPath(cx, cy, r - wall)}
          fill={face === "panel" ? "var(--color-panel)" : "var(--color-ground)"}
          stroke="var(--color-hairline)"
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
      ) : null}
    </g>
  );
}

export function SwarmRested({ className = "" }: { className?: string }) {
  const { cx, cy, r } = CELL;
  const inner = r - 10;
  const v = hexVertices(cx, cy, inner);
  // honey pool: everything in the inner cell below the surface line
  const surfaceY = HONEY_LINE;
  // pool polygon: intersect inner hex with y >= surfaceY (surface crosses the
  // two vertical walls of the pointy-top hex, x = cx ± inner*√3/2)
  const h = (inner * Math.sqrt(3)) / 2;
  const pool = `M ${cx - h} ${surfaceY} L ${cx + h} ${surfaceY} L ${v[2].x} ${v[2].y} L ${v[3].x} ${v[3].y} L ${v[4].x} ${v[4].y} Z`;

  // neighbor cells (attached comb) — varied completion states
  const nbr = (q: number, rr: number, size: number) => {
    const p = axialToPixel(q, rr, size + 3);
    return { x: cx + p.x, y: cy + p.y };
  };
  const nTR = nbr(1, -1, r * 0.62); // top-end: walls only
  const nW = nbr(-1, 0, r * 0.62); // start side: paper-filled
  const nBR = nbr(1, 0, r * 0.52); // end side: part-built

  const fade = mulberry32(11);

  return (
    <svg
      viewBox={`0 0 ${SWARM_VB.w} ${SWARM_VB.h}`}
      className={className}
      aria-hidden="true"
      data-swarm-rested
    >
      {/* distant lattice — the hive continues beyond the frame */}
      <g stroke="var(--color-hairline)" strokeWidth="1.2" fill="none">
        {hexRing(2).map(([q, rr]) => {
          const p = axialToPixel(q, rr, r * 0.62 + 3);
          const o = 0.12 + fade() * 0.2;
          return (
            <path
              key={`r2-${q}-${rr}`}
              d={hexPath(cx + p.x, cy + p.y, r * 0.62)}
              opacity={o.toFixed(2)}
            />
          );
        })}
        {/* three tiny far cells, upper-start atmosphere */}
        <path d={hexPath(cx - 218, cy - 218, 30)} opacity="0.5" />
        <path d={hexPath(cx - 165, cy - 248, 30)} opacity="0.32" />
        <path d={hexPath(cx - 192, cy - 172, 22)} opacity="0.4" />
      </g>

      {/* attached neighbor cells — different construction states */}
      <CombCell cx={nW.x} cy={nW.y} r={r * 0.62} wall={7} face="ground" />
      <CombCell cx={nTR.x} cy={nTR.y} r={r * 0.62} face="none" built={0.55} />
      <CombCell cx={nBR.x} cy={nBR.y} r={r * 0.52} face="none" built={0.85} />

      {/* THE CELL — thick walls, ground face, honey pool */}
      <path
        d={hexPath(cx, cy, r)}
        fill="var(--color-panel)"
        stroke="var(--color-ink)"
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      <path
        d={hexPath(cx, cy, inner)}
        fill="var(--color-ground)"
        stroke="var(--color-hairline)"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {/* honey — yellow as material: pool, deeper meniscus, surface line */}
      <path d={pool} fill="var(--color-yellow)" />
      <path
        d={`M ${cx - h} ${surfaceY} L ${cx + h} ${surfaceY} L ${cx + h} ${surfaceY + 10} C ${cx + inner * 0.4} ${surfaceY + 16}, ${cx - inner * 0.4} ${surfaceY + 16}, ${cx - h} ${surfaceY + 10} Z`}
        fill="var(--color-ink)"
        opacity="0.08"
      />
      <line
        x1={cx - h}
        y1={surfaceY}
        x2={cx + h}
        y2={surfaceY}
        stroke="var(--color-ink)"
        strokeOpacity="0.35"
        strokeWidth="1.6"
      />
      {/* bubbles + glints in the honey — ground token only */}
      <circle cx={cx - inner * 0.34} cy={surfaceY + 26} r="5" fill="var(--color-ground)" opacity="0.5" />
      <circle cx={cx + inner * 0.22} cy={surfaceY + 40} r="3.4" fill="var(--color-ground)" opacity="0.4" />
      <circle cx={cx + inner * 0.45} cy={surfaceY + 18} r="2.4" fill="var(--color-ground)" opacity="0.55" />

      {/* the rested swarm — on the rim and above the pool (parametric identity) */}
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
