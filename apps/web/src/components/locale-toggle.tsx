"use client";

import { useState } from "react";
import { SWARM_VB } from "./hero/swarm-data";

/**
 * EN ↔ HE toggle — proves the RTL architecture with the founder-locked HE
 * hero strings (full Hebrew content is a fast-follow). Swaps lang+dir on
 * <html> inside a View Transition, and mirrors the rested swarm's dot
 * CENTROIDS numerically (cx' = w − cx) — a coordinate mirror, never a CSS
 * dir flip of the canvas/SVG.
 */
export function LocaleToggle({ className = "" }: { className?: string }) {
  // SSR always ships lang="en"; the toggle is the only writer of html[lang]
  const [locale, setLocale] = useState<"en" | "he">("en");

  const apply = (next: "en" | "he") => {
    const run = () => {
      const html = document.documentElement;
      html.lang = next;
      html.dir = next === "he" ? "rtl" : "ltr";
      // Chapter-1 canvas (if still mid-flight) yields to the rested state
      document
        .querySelectorAll<HTMLCanvasElement>("[data-swarm-stage] canvas")
        .forEach((c) => (c.style.display = "none"));
      document
        .querySelectorAll<SVGGElement>("[data-swarm-dots]")
        .forEach((g) => (g.style.opacity = "1"));
      // mirror the rested swarm centroids numerically
      document
        .querySelectorAll<SVGCircleElement>("[data-swarm-rested] circle")
        .forEach((c) => {
          const cx = Number(c.getAttribute("cx"));
          c.setAttribute("cx", String(Math.round((SWARM_VB.w - cx) * 10) / 10));
        });
      setLocale(next);
    };
    if (document.startViewTransition) document.startViewTransition(run);
    else run();
  };

  const next = locale === "en" ? "he" : "en";
  return (
    <button
      type="button"
      onClick={() => apply(next)}
      className={`locale-toggle rounded-full px-2.5 py-1 text-[13px] font-medium ${className}`}
      aria-label={next === "he" ? "עברית" : "Switch to English"}
    >
      {next === "he" ? "עב" : "EN"}
    </button>
  );
}
