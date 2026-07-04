/**
 * hex.ts — hexagon geometry. Pointy-top everywhere (logo hex-"o", hero cell,
 * C7 lattice) so the brand's atomic unit is a single consistent shape.
 */

export type Pt = { x: number; y: number };

/** 6 vertices of a pointy-top hexagon (vertex straight up). */
export function hexVertices(cx: number, cy: number, r: number): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 90);
    pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
  }
  return pts;
}

/** SVG path string for a pointy-top hexagon. */
export function hexPath(cx: number, cy: number, r: number): string {
  const v = hexVertices(cx, cy, r);
  return (
    v.map((p, i) => `${i === 0 ? "M" : "L"}${round(p.x)} ${round(p.y)}`).join(" ") +
    " Z"
  );
}

/** Axial hex coordinates → pixel center (pointy-top). size = circumradius. */
export function axialToPixel(q: number, r: number, size: number): Pt {
  return {
    x: size * Math.sqrt(3) * (q + r / 2),
    y: size * 1.5 * r,
  };
}

/** Axial coordinates of the ring at distance n from origin (n ≥ 1). */
export function hexRing(n: number): Array<[number, number]> {
  if (n === 0) return [[0, 0]];
  const dirs: Array<[number, number]> = [
    [1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1],
  ];
  const out: Array<[number, number]> = [];
  let q = -n;
  let r = n; // start at direction 4 scaled by n
  for (let side = 0; side < 6; side++) {
    for (let step = 0; step < n; step++) {
      out.push([q, r]);
      q += dirs[side][0];
      r += dirs[side][1];
    }
  }
  return out;
}

/** Point-in-pointy-top-hexagon test. */
export function pointInHex(px: number, py: number, cx: number, cy: number, r: number): boolean {
  const x = Math.abs(px - cx);
  const y = Math.abs(py - cy);
  const h = r * (Math.sqrt(3) / 2); // inradius (half-width for pointy-top)
  if (x > h) return false;
  if (y > r) return false;
  // slanted edge: from (0, r) to (h, r/2)
  return r * h - 0.5 * r * x - h * y >= -0.0001 * r * h ? y <= r - (r / 2) * (x / h) : false;
}

/** Deterministic PRNG — identical on server and client (hydration-safe). */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
