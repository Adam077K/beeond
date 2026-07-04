"use client";

/**
 * Chapter 1 — Scatter → Converge → Rest. Load-triggered ONE-SHOT (~1.6s).
 * Dots arrive from the stage edges along curved flight paths, spring-settle
 * onto the exact REST_DOTS coordinates the SSR SVG already shows, then the
 * canvas crossfades out and unmounts. After that the swarm is DEAD — zero
 * rAF, zero loops — until C7 re-activates the vocabulary (separate canvas,
 * parametric identity only).
 *
 * Reduced motion / JS-off / already-scrolled-past: the canvas never mounts;
 * the rested SVG (present from first paint) IS the composition.
 */
import { useEffect, useRef } from "react";
import { mulberry32 } from "@/lib/hex";
import { bakeGlowSprite, GLOW_R } from "@/lib/glow";
import { DOT, DUR, SPRING, prefersReducedMotion } from "@/lib/motion";
import { REST_DOTS, SWARM_VB } from "./swarm-data";

type Flight = {
  sx: number; // scatter origin
  sy: number;
  cx: number; // bezier control
  cy: number;
  tx: number; // rest target
  ty: number;
  delay: number; // ms
  p: number; // spring progress
  v: number; // spring velocity
};

function buildFlights(): Flight[] {
  const rnd = mulberry32(21);
  return REST_DOTS.map((d) => {
    // origin: off one of the four stage edges, biased to the top + start side
    const edge = rnd();
    const m = 40; // overshoot beyond the viewBox
    let sx: number;
    let sy: number;
    if (edge < 0.34) {
      sx = rnd() * SWARM_VB.w;
      sy = -m; // top
    } else if (edge < 0.58) {
      sx = SWARM_VB.w + m;
      sy = rnd() * SWARM_VB.h * 0.7; // end side
    } else if (edge < 0.82) {
      sx = -m;
      sy = rnd() * SWARM_VB.h * 0.8; // start side
    } else {
      sx = rnd() * SWARM_VB.w;
      sy = SWARM_VB.h + m; // bottom
    }
    // curved path: control point = midpoint pushed perpendicular
    const mx = (sx + d.x) / 2;
    const my = (sy + d.y) / 2;
    const dx = d.x - sx;
    const dy = d.y - sy;
    const len = Math.max(Math.hypot(dx, dy), 1);
    const side = rnd() < 0.5 ? -1 : 1;
    const bow = (0.18 + rnd() * 0.22) * len * side;
    return {
      sx,
      sy,
      cx: mx + (-dy / len) * bow,
      cy: my + (dx / len) * bow,
      tx: d.x,
      ty: d.y,
      delay: rnd() * 500,
      p: 0,
      v: 0,
    };
  });
}

export function SwarmChapterOne() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion()) return;
    const stage = canvas.parentElement;
    if (!stage) return;
    // deep links below the hero: skip the show, keep the rested state
    const rect = stage.getBoundingClientRect();
    if (rect.bottom < 0) return;

    const restedDots = stage.querySelector<SVGGElement>("[data-swarm-dots]");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = rect.width;
    const h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const scale = (w / SWARM_VB.w) * dpr; // stage aspect == viewBox aspect
    const glow = bakeGlowSprite(scale);
    const flights = buildFlights();

    // spring on path-progress → overshoot along the flight tangent.
    // TIME_SCALE runs the brand spring slow enough that stagger + settle
    // lands the whole one-shot at ~DUR.hero (1.6s).
    const k = SPRING.stiffness;
    const c = SPRING.damping;
    const TIME_SCALE = 0.62;
    let start: number | null = null;
    let last = 0;
    let raf = 0;
    let fading = false;

    if (restedDots) restedDots.style.opacity = "0";

    const draw = (now: number) => {
      if (start === null) {
        start = now;
        last = now;
      }
      const t = now - start;
      const frameDt = Math.min((now - last) / 1000, 1 / 30) * TIME_SCALE;
      last = now;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      let allSettled = true;
      for (const f of flights) {
        const local = t - f.delay;
        if (local <= 0) {
          allSettled = false;
          continue;
        }
        const sub = 3;
        for (let s = 0; s < sub; s++) {
          const a = k * (1 - f.p) - c * f.v;
          f.v += a * (frameDt / sub);
          f.p += f.v * (frameDt / sub);
        }
        if (Math.abs(1 - f.p) > 0.004 || Math.abs(f.v) > 0.004) allSettled = false;
        const p = f.p;
        // quadratic bezier, progress may overshoot slightly past 1
        const u = 1 - p;
        const x = u * u * f.sx + 2 * u * p * f.cx + p * p * f.tx;
        const y = u * u * f.sy + 2 * u * p * f.cy + p * p * f.ty;
        const alpha = Math.min(local / 120, 1); // no pop at the origin
        ctx.globalAlpha = alpha;
        ctx.globalCompositeOperation = DOT.composite;
        ctx.drawImage(glow, x - GLOW_R, y - GLOW_R, GLOW_R * 2, GLOW_R * 2);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = DOT.color;
        ctx.beginPath();
        ctx.arc(x, y, DOT.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (allSettled && t > 900 && !fading) {
        fading = true;
        // crossfade: canvas out, SVG rested dots back in — identical frames
        canvas.style.transition = `opacity ${DUR.md}ms cubic-bezier(0.5, 0, 0.75, 0.4)`;
        canvas.style.opacity = "0";
        if (restedDots) {
          restedDots.style.transition = `opacity ${DUR.md}ms cubic-bezier(0.16, 1, 0.3, 1)`;
          restedDots.style.opacity = "1";
        }
        window.setTimeout(() => {
          cancelAnimationFrame(raf);
          canvas.style.display = "none"; // converge once, then rest — the island is done
        }, DUR.md + 50);
        return;
      }
      if (!fading) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      if (restedDots) {
        restedDots.style.transition = "";
        restedDots.style.opacity = "1";
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
