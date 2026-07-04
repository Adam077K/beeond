/**
 * Numbered editorial eyebrow — the page's section grammar. A muted index,
 * the label, and a short hairline dash. Gives the one-pager a quiet
 * table-of-contents rhythm without a nav crutch.
 */
export function Eyebrow({
  n,
  hex = false,
  children,
}: {
  n?: string;
  /** marks the sections that carry the brand's yellow thread (C7, GEO) */
  hex?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 text-[13px] font-medium">
      {n ? (
        <span className="text-muted" aria-hidden="true">
          {n}
        </span>
      ) : null}
      {hex ? (
        <svg viewBox="0 0 20 22" className="size-2.5" aria-hidden="true">
          <path
            d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
            fill="var(--color-yellow)" /* brand-lint-allow: eyebrow hex glyph, fill accent */
            stroke="var(--color-ink)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      <span>{children}</span>
      <span aria-hidden="true" className="h-px w-12 bg-hairline" />
    </p>
  );
}
