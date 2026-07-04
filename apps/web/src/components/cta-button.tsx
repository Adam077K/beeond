/**
 * Black-pill CTA — the ONLY primary button style. Ink fill, ground text,
 * button-in-button nested arrow orb (spring-feel hover via --ease-swift,
 * tactile press). Yellow is never a CTA background — Constitution #3.
 */
export function CtaButton({
  href,
  children,
  invert = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  /** invert on dark sections: ground pill, ink text */
  invert?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`cta group inline-flex items-center gap-3 rounded-full ps-7 pe-2.5 py-2.5 text-[15px] font-semibold ${
        invert ? "bg-ground text-ink" : "bg-ink text-ground"
      } ${className}`}
    >
      <span className="py-1">{children}</span>
      <span
        aria-hidden="true"
        className={`cta-orb flex size-9 items-center justify-center rounded-full ${
          invert ? "bg-ink/8" : "bg-ground/14"
        }`}
      >
        <svg viewBox="0 0 16 16" className="cta-arrow size-4" fill="none">
          <path
            d="M2.5 8h10.2M8.9 3.8 13.1 8l-4.2 4.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
