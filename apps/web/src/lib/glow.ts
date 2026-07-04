/**
 * glow.ts — the offscreen-baked additive glow sprite. ONE definition shared
 * by Chapter 1 (hero) and Chapter 2 (C7): this is the parametric identity
 * that makes two separate canvases read as the same bees. Never per-frame
 * shadowBlur.
 */
import { DOT } from "./motion";

export function bakeGlowSprite(scale: number): HTMLCanvasElement {
  const r = (DOT.radius + DOT.glowRadius) * scale;
  const c = document.createElement("canvas");
  c.width = c.height = Math.ceil(r * 2);
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(r, r, DOT.radius * scale * 0.6, r, r, r);
  g.addColorStop(0, `${DOT.color}5e`); /* brand-lint-allow: alpha appended to the brand yellow token */
  g.addColorStop(1, `${DOT.color}00`); /* brand-lint-allow: alpha appended to the brand yellow token */
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, c.width, c.height);
  return c;
}

/** sprite radius in un-scaled units — for draw placement */
export const GLOW_R = DOT.radius + DOT.glowRadius;
