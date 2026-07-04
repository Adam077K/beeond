import { hexPath, axialToPixel } from "@/lib/hex";
import { CHANNELS } from "./channel-map/channels";

/**
 * The assembled hive as a compact mark — Chapter 3's rested state, reusable
 * across schemes. Dark: the final CTA payoff. Light: mobile C7's keystone
 * emblem, so the brand's signature geometry survives the breakpoint.
 */
export function HiveMark({
  scheme = "light",
  className = "",
}: {
  scheme?: "light" | "dark";
  className?: string;
}) {
  const size = 30;
  const stroke = scheme === "dark" ? "var(--color-ground)" : "var(--color-ink)";
  const strokeOpacity = scheme === "dark" ? 0.38 : 0.55;
  return (
    <svg viewBox="-160 -140 320 280" className={className} aria-hidden="true">
      {CHANNELS.map((ch) => {
        const p = axialToPixel(ch.q, ch.r, size + 1.5);
        return (
          <path
            key={ch.id}
            d={hexPath(p.x, p.y, size)}
            fill={ch.anchor ? "var(--color-yellow)" : "none"}
            stroke={ch.anchor ? (scheme === "dark" ? "var(--color-yellow)" : "var(--color-ink)") : stroke}
            strokeOpacity={ch.anchor ? 1 : strokeOpacity}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        );
      })}
      {/* rested bees — the quiet echo of the one motion moment */}
      {[
        [-64, 44],
        [10, -52],
        [58, 30],
        [2, 6],
        [-96, -8],
        [72, -60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="var(--color-yellow)" opacity="0.9" />
      ))}
    </svg>
  );
}
