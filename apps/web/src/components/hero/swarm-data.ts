/**
 * swarm-data.ts — deterministic rested-swarm composition shared by the SSR SVG
 * (the reduced-motion / JS-off / pre-hydration state) and the canvas one-shot
 * (which must land on EXACTLY these coordinates). Seeded PRNG → identical on
 * server and client; no hydration mismatch, no per-load randomness.
 */
import { hexVertices, mulberry32, pointInHex, type Pt } from "@/lib/hex";

export const SWARM_VB = { w: 560, h: 620 } as const;

/** The hero cell — the comb cell the swarm settles into. */
export const CELL = { cx: 288, cy: 332, r: 146 } as const;

/** honey surface inside the cell — dots rest ON and ABOVE it, never below */
export const HONEY_LINE = CELL.cy + CELL.r * 0.22;

const DOT_COUNT = 40;
const RIM_PERCHERS = 12;
const SURFACE_SITTERS = 7;
const MIN_DIST = 10.5;

function buildRestDots(): Pt[] {
  const rnd = mulberry32(7);
  const dots: Pt[] = [];
  let guard = 0;
  // airborne-at-rest: hovering inside the cell, above the honey
  while (dots.length < DOT_COUNT && guard < 8000) {
    guard++;
    const a = rnd() * Math.PI * 2;
    const rad = Math.sqrt(rnd()) * (CELL.r - 18);
    const x = CELL.cx + Math.cos(a) * rad;
    const y = CELL.cy + Math.sin(a) * rad;
    if (!pointInHex(x, y, CELL.cx, CELL.cy, CELL.r - 14)) continue;
    if (y > HONEY_LINE - 8) continue; // the pool is honey, not bees
    // density grows toward the surface — the swarm gathers at its work
    const depth = (y - (CELL.cy - CELL.r)) / (HONEY_LINE - (CELL.cy - CELL.r));
    if (rnd() > 0.12 + 0.88 * depth * depth) continue;
    if (dots.some((d) => (d.x - x) ** 2 + (d.y - y) ** 2 < MIN_DIST ** 2)) continue;
    dots.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  }
  // sitters ON the honey surface
  const h = ((CELL.r - 12) * Math.sqrt(3)) / 2;
  for (let i = 0; i < SURFACE_SITTERS; i++) {
    const t = 0.1 + rnd() * 0.8;
    dots.push({
      x: Math.round((CELL.cx - h + 2 * h * t) * 10) / 10,
      y: Math.round((HONEY_LINE - 3 + rnd() * 2) * 10) / 10,
    });
  }
  // perchers on the cell rim (upper edges — the comb's working lip)
  const v = hexVertices(CELL.cx, CELL.cy, CELL.r);
  const edges: Array<[Pt, Pt]> = [
    [v[5], v[0]],
    [v[0], v[1]],
    [v[4], v[5]],
    [v[1], v[2]],
  ];
  for (let i = 0; i < RIM_PERCHERS; i++) {
    const [a, b] = edges[i % edges.length];
    const t = 0.15 + rnd() * 0.7;
    dots.push({
      x: Math.round((a.x + (b.x - a.x) * t) * 10) / 10,
      y: Math.round((a.y + (b.y - a.y) * t) * 10) / 10,
    });
  }
  return dots;
}

/** The rested composition — Chapter 1's final frame and Chapter 3's vocabulary. */
export const REST_DOTS: readonly Pt[] = buildRestDots();
