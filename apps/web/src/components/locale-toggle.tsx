"use client";

import { useState } from "react";

/**
 * EN ↔ HE toggle. Swaps lang+dir on <html> inside a View Transition; both
 * languages are SSR'd and CSS picks one (see i18n rules in globals.css).
 * The hero art mirrors itself via html[lang="he"] .journal-stage — the
 * toggle no longer touches any artwork.
 */
export function LocaleToggle({ className = "" }: { className?: string }) {
  // SSR always ships lang="en"; the toggle is the only writer of html[lang]
  const [locale, setLocale] = useState<"en" | "he">("en");

  const apply = (next: "en" | "he") => {
    const run = () => {
      const html = document.documentElement;
      html.lang = next;
      html.dir = next === "he" ? "rtl" : "ltr";
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
