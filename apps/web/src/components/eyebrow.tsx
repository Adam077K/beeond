/**
 * Numbered editorial eyebrow — the page's section grammar. A muted index,
 * the label, and a short hairline dash. Gives the one-pager a quiet
 * table-of-contents rhythm without a nav crutch.
 */
export function Eyebrow({
  n,
  children,
}: {
  n?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 text-[13px] font-medium">
      {n ? (
        <span className="text-muted" aria-hidden="true">
          {n}
        </span>
      ) : null}
      <span>{children}</span>
      <span aria-hidden="true" className="h-px w-12 bg-hairline" />
    </p>
  );
}
