"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

const NAV = [
  { href: "#channel-map", label: "The swarm" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
] as const;

/**
 * Floating header. Transparent over the hero; becomes the ONE sanctioned
 * glass pill once the page scrolls (IntersectionObserver sentinel — no
 * scroll listeners). Fixed element → backdrop-blur is perf-safe.
 */
export function SiteHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-16 h-px w-px" />
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:text-ground"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3">
        <div
          className={`header-shell flex w-full max-w-[1132px] items-center justify-between gap-6 rounded-full py-2.5 ps-5 pe-2.5 ${
            scrolled ? "header-glass" : ""
          }`}
        >
          <a href="#main" className="text-[19px] text-ink" aria-label="Beeond — home">
            <Logo />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-[14px] font-medium">
                {item.label}
              </a>
            ))}
          </nav>
          {/* header CTA fades in once the hero CTA scrolls away — one CTA per fold */}
          <a
            href="#footprint-call"
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
            className={`header-cta cta hidden rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-ground md:inline-block ${
              scrolled ? "" : "header-cta-hidden"
            }`}
          >
            Get a free footprint audit
          </a>
          <a
            href="#footprint-call"
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
            className={`header-cta cta rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-ground md:hidden ${
              scrolled ? "" : "header-cta-hidden"
            }`}
          >
            Free audit
          </a>
        </div>
      </header>
    </>
  );
}
