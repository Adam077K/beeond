"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every [data-reveal] element. CSS owns the
 * motion (settle curve, duration by travel); this only flips the class.
 * JS-off / reduced-motion: content is fully visible (the hidden state only
 * exists under html.js and outside prefers-reduced-motion).
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target); // one-shot — nothing loops
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      // already in view (deep link) → no entrance
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85) el.classList.add("in");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
