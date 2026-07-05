"use client";

/**
 * The swarm showpiece scrub — scroll-driven, deterministic, reversible
 * (the page's ONE choreographed section; C7's proven lifecycle pattern).
 *
 * SSR ships the rested hive. On desktop with motion allowed, this rewinds
 * everything to the org chart and replays under scrub:
 *   0.03–0.26  the chart draws (cards pop, wires draw)
 *   0.34–0.58  the role cards flip — agents all along; human chips light
 *   0.66–0.88  connectors relax into the hexagon lattice; cards settle
 *   0.88–1.00  rested hold
 * Reduced-motion: runway collapses, the rested hive stands. Mobile: the
 * stacked ledger renders instead — this component exits before importing
 * GSAP.
 */
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function SwarmScrub() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const root = host.closest<HTMLElement>("[data-swarm-root]");
    if (!root) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!desktop) return;
    if (prefersReducedMotion()) {
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

      const stage = root.querySelector<HTMLElement>("[data-swarm-stage]");
      const movers = Array.from(
        root.querySelectorAll<HTMLElement>("[data-swarm-mover]"),
      ).sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
      const flips = Array.from(root.querySelectorAll<HTMLElement>("[data-swarm-flip]"));
      const wiresLayer = root.querySelector<SVGElement>("[data-swarm-wires]");
      const wires = Array.from(root.querySelectorAll<SVGPathElement>("[data-swarm-wire]"));
      const lattice = Array.from(root.querySelectorAll<SVGPathElement>("[data-swarm-lat]"));
      const chips = Array.from(root.querySelectorAll<HTMLElement>("[data-swarm-chip]"));
      const caps = Array.from(root.querySelectorAll<HTMLElement>("[data-swarm-cap]"));
      if (!stage || movers.length === 0) return;

      root.classList.add("swarm-live"); // narrator captions replace the sub

      const prep = (paths: SVGPathElement[]) =>
        paths.forEach((p) => {
          const len = p.getTotalLength();
          p.style.strokeDasharray = `${len}`;
          p.style.strokeDashoffset = `${len}`;
        });

      // rewind to the org chart: offsets from hive → chart in live px (the
      // anchors keep centering; movers only carry the delta)
      const sRect = stage.getBoundingClientRect();
      movers.forEach((m) => {
        const [cx, cy] = (m.dataset.chart ?? "0,0").split(",").map(Number);
        const [hx, hy] = (m.dataset.hive ?? "0,0").split(",").map(Number);
        gsap.set(m, {
          x: ((cx - hx) / 100) * sRect.width,
          y: ((cy - hy) / 100) * sRect.height,
          opacity: 0,
          scale: 0.94,
        });
      });
      gsap.set(flips, { rotationY: 0 }); // the unfilled hires face up
      if (wiresLayer) gsap.set(wiresLayer, { opacity: 1 });
      prep(wires);
      prep(lattice);
      gsap.set(chips, { opacity: 0 });
      caps.forEach((c, i) => gsap.set(c, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 10 }));

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
          },
        },
      });
      // pin timeline duration to 1 — positions ARE progress fractions
      tl.set({}, {}, 1);

      // ── 1. the chart draws itself ──
      movers.forEach((m, i) => {
        tl.to(m, { opacity: 1, scale: 1, duration: 0.06 }, 0.03 + i * 0.028);
      });
      wires.forEach((w, i) => {
        tl.to(w, { strokeDashoffset: 0, duration: 0.09, ease: "power1.inOut" }, 0.07 + i * 0.02);
      });

      // ── 2. the flips — agents all along ──
      flips.forEach((f, i) => {
        tl.to(f, { rotationY: 180, duration: 0.07, ease: "power2.inOut" }, 0.34 + i * 0.045);
      });
      // two cards stay human — the calibration layer declares itself
      tl.to(chips, { opacity: 1, duration: 0.05 }, 0.58);

      // ── 3. the connectors relax into the hexagon lattice ──
      if (wiresLayer) tl.to(wiresLayer, { opacity: 0, duration: 0.07, ease: "power1.inOut" }, 0.66);
      movers.forEach((m, i) => {
        tl.to(m, { x: 0, y: 0, duration: 0.16, ease: "power3.inOut" }, 0.68 + i * 0.008);
      });
      lattice.forEach((p, i) => {
        tl.to(p, { strokeDashoffset: 0, duration: 0.08, ease: "power1.inOut" }, 0.72 + i * 0.012);
      });

      // ── the narrator: one caption per phase (founder directive) ──
      const CAP_WINDOWS: Array<[number, number | null]> = [
        [0, 0.3], // five hires you can't make yet
        [0.33, 0.56], // agents all along
        [0.58, 0.66], // two stay human
        [0.7, null], // the chart relaxes into a hive
      ];
      caps.forEach((c, i) => {
        const [tIn, tOut] = CAP_WINDOWS[i];
        if (i > 0) tl.to(c, { opacity: 1, y: 0, duration: 0.025 }, tIn);
        if (tOut !== null) tl.to(c, { opacity: 0, y: -10, duration: 0.025 }, tOut);
      });
      // 0.88 → 1: rested hold — the hive stands, nothing loops

      cleanup = () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        root.classList.remove("swarm-live");
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} className="hidden" aria-hidden="true" />;
}
