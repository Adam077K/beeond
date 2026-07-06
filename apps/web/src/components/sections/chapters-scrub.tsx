"use client";

/**
 * Dark-chapters scrub (v6.1, founder-directed) — one chapter on screen at
 * a time: as you scroll, the active chapter lifts out and the next settles
 * in. Founder amendment to the one-scroll-moment doctrine (DECISIONS
 * 2026-07-05): the page now carries TWO choreographed sections — this
 * crossfade (depth) and the swarm showpiece (the story).
 *
 * The pinned layout exists ONLY after this initializes (`.chapters-pinned`
 * on the root): mobile, JS-off and reduced-motion keep the plain stacked
 * flow with every chapter readable — nothing is hidden from crawlers.
 */
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** [inStart, outStart] per chapter as progress fractions; last never exits */
const WINDOWS: Array<[number, number]> = [
  [0, 0.3],
  [0.38, 0.62],
  [0.7, 1],
];
const FADE = 0.07;

export function ChaptersScrub() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const root = host.closest<HTMLElement>("[data-ch-root]");
    if (!root) return;

    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (prefersReducedMotion()) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-ch]"));
      if (chapters.length !== WINDOWS.length) return;

      root.classList.add("chapters-pinned");

      // rest state = chapter a up; b and c wait below
      chapters.forEach((ch, i) => {
        gsap.set(ch, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 36 });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
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
      tl.set({}, {}, 1); // positions ARE progress fractions

      chapters.forEach((ch, i) => {
        const [tIn, tOut] = WINDOWS[i];
        if (i > 0) tl.to(ch, { opacity: 1, y: 0, duration: FADE }, tIn);
        if (i < chapters.length - 1) {
          tl.to(ch, { opacity: 0, y: -36, duration: FADE }, tOut);
        }
      });

      cleanup = () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        root.classList.remove("chapters-pinned");
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} className="hidden" aria-hidden="true" />;
}
