"use client";

/**
 * Chapter 2 — Release → Build. Scroll-SCRUBBED, deterministic, reversible.
 * The SSR hive is fully assembled; when motion is allowed on desktop this
 * hides the tiles and re-lays them under scrub: outer ring first, building
 * inward, THE KEYSTONE — the yellow GEO anchor — locking LAST with a spring
 * overshoot-and-settle and one hairline pulse. Canvas dots (same parametric
 * identity as the hero) ferry each cell in and are absorbed on landing.
 *
 * Reduced motion / mobile / JS-off: nothing here runs — the assembled SSR
 * hive stands, and the 260vh pin collapses to a single viewport.
 */
import { useEffect, useRef } from "react";
import { mulberry32 } from "@/lib/hex";
import { bakeGlowSprite, GLOW_R } from "@/lib/glow";
import { DOT, prefersReducedMotion } from "@/lib/motion";

const ASSEMBLY_END = 0.5; // last half of the pin = assembled, readable
const ANCHOR_START = 0.4;

type Ferry = {
  ox: number; // origin (canvas coords)
  oy: number;
  cx: number; // bezier control
  cy: number;
  tx: number; // tile center target
  ty: number;
  t0: number; // progress window
  t1: number;
};

export function ChannelMapScrub() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const root = host.closest<HTMLElement>("[data-c7-root]");
    const stage = host.closest<HTMLElement>("[data-c7-stage]");
    if (!root || !stage) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!desktop) return;
    if (prefersReducedMotion()) {
      // no scrub: collapse the pin runway to one viewport, hive stays assembled
      root.style.height = "auto";
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const sticky = root.querySelector<HTMLElement>("[data-c7-sticky]");
      const tiles = Array.from(
        root.querySelectorAll<HTMLElement>("[data-c7-tile]"),
      ).sort(
        (a, b) => Number(a.dataset.c7Tile) - Number(b.dataset.c7Tile),
      );
      const anchor = root.querySelector<HTMLElement>("[data-c7-anchor]");
      const pulse = root.querySelector<HTMLElement>(".hex-pulse");
      const face = anchor?.querySelector<HTMLElement>(".hex-face");
      const hint = root.querySelector<HTMLElement>("[data-c7-hint]");
      if (!sticky || tiles.length === 0 || !anchor || !face) return;

      // ── canvas across the whole sticky viewport ──
      const canvas = document.createElement("canvas");
      canvas.setAttribute("aria-hidden", "true");
      canvas.className = "pointer-events-none absolute inset-0";
      sticky.appendChild(canvas);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // ferry flights: computed from LIVE tile rects → RTL mirrors for free
      let ferries: Ferry[] = [];
      let scale = 1;
      const buildFerries = () => {
        const sRect = sticky.getBoundingClientRect();
        canvas.width = Math.round(sRect.width * dpr);
        canvas.height = Math.round(sRect.height * dpr);
        canvas.style.width = `${sRect.width}px`;
        canvas.style.height = `${sRect.height}px`;
        scale = dpr;
        const rnd = mulberry32(33);
        ferries = [];
        tiles.forEach((tile, i) => {
          const r = tile.getBoundingClientRect();
          const tx = r.left - sRect.left + r.width / 2;
          const ty = r.top - sRect.top + r.height / 2;
          const isAnchor = tile.hasAttribute("data-c7-anchor");
          const [t0, t1] = revealWindow(i, tiles.length, isAnchor);
          const dots = isAnchor ? 12 : 7;
          for (let d = 0; d < dots; d++) {
            // origins ring the stage edges, biased upward — "released" bees
            const edge = rnd();
            const m = 30;
            let ox: number;
            let oy: number;
            if (edge < 0.4) {
              ox = rnd() * sRect.width;
              oy = -m;
            } else if (edge < 0.7) {
              ox = sRect.width + m;
              oy = rnd() * sRect.height * 0.6;
            } else {
              ox = -m;
              oy = rnd() * sRect.height * 0.6;
            }
            const mx = (ox + tx) / 2;
            const my = (oy + ty) / 2;
            const dx = tx - ox;
            const dy = ty - oy;
            const len = Math.max(Math.hypot(dx, dy), 1);
            const bow = (0.15 + rnd() * 0.25) * len * (rnd() < 0.5 ? -1 : 1);
            const span = t1 - t0;
            const dt0 = t0 + rnd() * span * 0.35;
            ferries.push({
              ox,
              oy,
              cx: mx + (-dy / len) * bow,
              cy: my + (dx / len) * bow,
              tx,
              ty,
              t0: dt0,
              t1: Math.min(dt0 + span * 0.75, t1 + 0.01),
            });
          }
        });
      };

      const glow = bakeGlowSprite(dpr);
      const ctx = canvas.getContext("2d")!;
      const drawFerries = (progress: number) => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (progress <= 0.005 || progress >= ASSEMBLY_END) return;
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        for (const f of ferries) {
          if (progress <= f.t0 || progress >= f.t1) continue;
          const p = (progress - f.t0) / (f.t1 - f.t0);
          const e = 1 - Math.pow(1 - p, 3); // cubic settle flavor for the ferry path
          const u = 1 - e;
          const x = u * u * f.ox + 2 * u * e * f.cx + e * e * f.tx;
          const y = u * u * f.oy + 2 * u * e * f.cy + e * e * f.ty;
          // fade in fast, absorbed at landing
          const alpha = p < 0.12 ? p / 0.12 : p > 0.85 ? (1 - p) / 0.15 : 1;
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
      };

      buildFerries();

      // ── tile timeline: hide the SSR-assembled hive, re-lay it under scrub ──
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            root.dataset.p = self.progress.toFixed(3);
            drawFerries(self.progress);
          },
        },
      });
      // hard-pin timeline duration to 1 so tween positions ARE progress
      // fractions, and 0.56→1 becomes the assembled-hold half of the pin
      tl.set({}, {}, 1);

      const nonAnchor = tiles.filter((t) => !t.hasAttribute("data-c7-anchor"));
      gsap.set(nonAnchor, { opacity: 0, scale: 0.92, y: 16 });
      gsap.set(anchor, { opacity: 0, scale: 0.9 });
      gsap.set(face, { opacity: 0 }); // yellow arrives only at the lock
      if (pulse) gsap.set(pulse, { opacity: 0, scale: 1 });
      if (hint) gsap.set(hint, { opacity: 1 });

      nonAnchor.forEach((tile, i) => {
        const [t0, t1] = revealWindow(i, tiles.length, false);
        tl.to(
          tile,
          { opacity: 1, scale: 1, y: 0, duration: t1 - t0 },
          t0,
        );
      });
      // THE KEYSTONE — anchor locks last: overshoot-and-settle + one pulse
      tl.to(
        anchor,
        {
          keyframes: [
            { opacity: 1, scale: 1.06, duration: 0.06, ease: "power2.out" },
            { scale: 1, duration: 0.035, ease: "power1.inOut" },
          ],
        },
        ANCHOR_START,
      );
      tl.to(face, { opacity: 1, duration: 0.05, ease: "power2.out" }, ANCHOR_START + 0.01);
      if (pulse) {
        tl.to(
          pulse,
          {
            keyframes: [
              { opacity: 0.85, scale: 1.03, duration: 0.015 },
              { opacity: 0, scale: 1.55, duration: 0.06, ease: "power2.out" },
            ],
          },
          ANCHOR_START + 0.045,
        );
      }
      if (hint) tl.to(hint, { opacity: 0, duration: 0.05 }, ANCHOR_START + 0.06);

      // FLOURISH (Charter of Autonomy, the one invention): "the hive
      // tightens" — the instant the keystone locks, every ring tile eases
      // ~2.5px toward the anchor and settles there. The GEO cell doesn't
      // just complete the hive; it visibly pulls it together. Scrub-mapped,
      // deterministic, reversible; the tightened hive IS the rested state.
      {
        const aRect = anchor.getBoundingClientRect();
        const ax = aRect.left + aRect.width / 2;
        const ay = aRect.top + aRect.height / 2;
        nonAnchor.forEach((tile) => {
          const r = tile.getBoundingClientRect();
          const dx = ax - (r.left + r.width / 2);
          const dy = ay - (r.top + r.height / 2);
          const len = Math.max(Math.hypot(dx, dy), 1);
          tl.to(
            tile,
            {
              x: (dx / len) * 2.5,
              y: (dy / len) * 2.5,
              duration: 0.05,
              ease: "power2.inOut",
            },
            ANCHOR_START + 0.055,
          );
        });
      }

      const onResize = () => buildFerries();
      window.addEventListener("resize", onResize);

      cleanup = () => {
        window.removeEventListener("resize", onResize);
        tl.scrollTrigger?.kill();
        tl.kill();
        canvas.remove();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} className="hidden" aria-hidden="true" />;
}

/** progress window for tile i (reveal order): rings staggered, anchor last */
function revealWindow(i: number, total: number, isAnchor: boolean): [number, number] {
  if (isAnchor) return [ANCHOR_START, ANCHOR_START + 0.095];
  // first ~6 individually staggered, the rest land closer together
  const staggered = Math.min(i, 6);
  const packed = Math.max(0, i - 6);
  const start = 0.05 + staggered * 0.038 + packed * 0.016;
  return [start, start + 0.085];
}
