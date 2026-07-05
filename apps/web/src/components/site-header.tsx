"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { LocaleToggle } from "./locale-toggle";
import { I18n } from "./i18n";

const NAV = [
  { href: "#swarm", label: "The swarm", labelHe: "הנחיל" },
  { href: "#how-it-works", label: "How it works", labelHe: "איך זה עובד" },
  { href: "#founders", label: "Founders", labelHe: "המייסדים" },
  { href: "#faq", label: "FAQ", labelHe: "שאלות" },
] as const;

/**
 * Floating header. Transparent over the hero; becomes the ONE sanctioned
 * glass pill once the page scrolls (IntersectionObserver sentinel — no
 * scroll listeners). Mobile: hex hamburger → full-screen glass menu with
 * staggered reveal; the close direction runs at ~0.8× the entrance.
 */
export function SiteHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;
    const burger = burgerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burger?.focus();
    };
  }, [menuOpen]);

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
                <I18n en={item.label} he={item.labelHe} />
              </a>
            ))}
            <LocaleToggle />
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
            <I18n en="Get a free footprint audit" he="קבלו אבחון נוכחות חינם" />
          </a>
          <button
            ref={burgerRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="burger relative flex size-11 items-center justify-center md:hidden"
          >
            <svg viewBox="0 0 40 44" className="absolute inset-0 size-full" aria-hidden="true">
              <path
                d="M20 3 36 12.5v19L20 41 4 31.5v-19Z"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span aria-hidden="true" className="relative block h-[10px] w-[16px]">
              <span className="burger-line absolute inset-x-0 top-0 h-[1.8px] rounded-full bg-ink" />
              <span className="burger-line absolute inset-x-0 bottom-0 h-[1.8px] rounded-full bg-ink" />
            </span>
          </button>
        </div>
      </header>

      {/* full-screen mobile menu — mounted always; classes drive both directions */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <a href="#main" onClick={() => setMenuOpen(false)} className="text-[19px] text-ink">
            <Logo />
          </a>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="relative flex size-11 items-center justify-center"
            tabIndex={menuOpen ? 0 : -1}
          >
            <svg viewBox="0 0 40 44" className="absolute inset-0 size-full" aria-hidden="true">
              <path
                d="M20 3 36 12.5v19L20 41 4 31.5v-19Z"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <svg viewBox="0 0 12 12" className="relative size-3" aria-hidden="true">
              <path
                d="m2 2 8 8M10 2l-8 8"
                stroke="var(--color-ink)"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="m-link py-3 text-[32px] font-bold tracking-[-0.02em]"
              style={{ "--i": i } as React.CSSProperties}
            >
              <I18n en={item.label} he={item.labelHe} />
            </a>
          ))}
          <div className="m-link mt-4" style={{ "--i": NAV.length } as React.CSSProperties}>
            <LocaleToggle />
          </div>
        </nav>
        <div className="m-link px-8 pb-10" style={{ "--i": NAV.length + 1 } as React.CSSProperties}>
          <a
            href="#footprint-call"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="cta block rounded-full bg-ink px-7 py-4 text-center text-[16px] font-semibold text-ground"
          >
            <I18n en="Get a free footprint audit" he="קבלו אבחון נוכחות חינם" />
          </a>
        </div>
      </div>
    </>
  );
}
