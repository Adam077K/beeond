import { hexPath } from "@/lib/hex";

/**
 * Bee⬡nd — the versioned inline-SVG logotype. INTERIM v0.9 build (founder to
 * resolve the refined vector pass, see BUILD_LOG deferrals): Rubik 700 letters
 * with the "o" as a pointy-top hexagon cell sized to x-height +5% optical.
 * The lockup is locked LTR and NEVER mirrors in RTL.
 */
export function Logo({
  hexFill = "outline",
  className = "",
}: {
  /** outline (default) · yellow (accent lockup) */
  hexFill?: "outline" | "yellow";
  className?: string;
}) {
  return (
    <span
      dir="ltr"
      className={`inline-flex select-none items-baseline font-bold tracking-[-0.03em] ${className}`}
    >
      Bee
      <svg
        viewBox="0 0 88 100"
        aria-hidden="true"
        className="mx-[0.035em] inline-block h-[0.56em] w-auto self-baseline"
      >
        <path
          d={hexPath(44, 50, 46)}
          fill={hexFill === "yellow" ? "var(--color-yellow)" : "none"}
          stroke="currentColor"
          strokeWidth={11}
          strokeLinejoin="round"
        />
      </svg>
      nd
    </span>
  );
}
