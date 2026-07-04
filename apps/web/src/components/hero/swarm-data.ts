/**
 * swarm-data.ts — deterministic rested-swarm composition shared by the SSR SVG
 * (the reduced-motion / JS-off / pre-hydration state) and the canvas one-shot
 * (which must land on EXACTLY these coordinates). Seeded PRNG → identical on
 * server and client; no hydration mismatch, no per-load randomness.
 */
import { hexVertices, mulberry32, pointInHex, type Pt } from "@/lib/hex";

export const SWARM_VB = { w: 560, h: 620 } as const;

/** The hero cell — the hex the swarm settles into. */
export const CELL = { cx: 288, cy: 332, r: 146 } as const;

const DOT_COUNT = 66;
const EDGE_PERCHERS = 10;
const MIN_DIST = 10.5;

function buildRestDots(): Pt[] {
  const rnd = mulberry32(7);
  const dots: Pt[] = [];
  let guard = 0;
  while (dots.length < DOT_COUNT && guard < 8000) {
    guard++;
    const a = rnd() * Math.PI * 2;
    const rad = Math.sqrt(rnd()) * (CELL.r - 16);
    const x = CELL.cx + Math.cos(a) * rad;
    const y = CELL.cy + Math.sin(a) * rad;
    if (!pointInHex(x, y, CELL.cx, CELL.cy, CELL.r - 12)) continue;
    // gravity: settle density grows steeply toward the cell floor
    const depth = (y - (CELL.cy - CELL.r)) / (2 * CELL.r); // 0 top → 1 bottom
    if (rnd() > 0.06 + 0.94 * depth * depth * depth) continue;
    if (dots.some((d) => (d.x - x) ** 2 + (d.y - y) ** 2 < MIN_DIST ** 2)) continue;
    dots.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
  }
  // a few bees perched on the lower edges of the cell
  const v = hexVertices(CELL.cx, CELL.cy, CELL.r);
  // pointy-top vertex order starts at top, clockwise: lower edges are v[1]→v[2], v[2]→v[3] (right-down),
  // v[3]→v[4] (bottom-left), keep to the two bottom-most edges
  const edges: Array<[Pt, Pt]> = [
    [v[1], v[2]],
    [v[2], v[3]],
    [v[3], v[4]],
  ];
  for (let i = 0; i < EDGE_PERCHERS; i++) {
    const [a, b] = edges[i % edges.length];
    const t = 0.2 + rnd() * 0.6;
    dots.push({
      x: Math.round((a.x + (b.x - a.x) * t) * 10) / 10,
      y: Math.round((a.y + (b.y - a.y) * t) * 10) / 10,
    });
  }
  return dots;
}

/** The rested composition — Chapter 1's final frame and Chapter 3's vocabulary. */
export const REST_DOTS: readonly Pt[] = buildRestDots();
