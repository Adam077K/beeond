import { hexPath, axialToPixel } from "@/lib/hex";
import { CHANNELS } from "./channel-map/channels";

/**
 * The assembled hive as a compact mark — Chapter 3's rested state, reusable
 * across schemes. Material pass: cells carry faint face fills (built comb,
 * not wireframe); the keystone holds honey (yellow + deeper lower half) and
 * on the dark scheme it GLOWS — the one lit cell in the room.
 */
export function HiveMark({
  scheme = "light",
  className = "",
}: {
  scheme?: "light" | "dark";
  className?: string;
}) {
  const size = 30;
  const dark = scheme === "dark";
  const stroke = dark ? "var(--color-ground)" : "var(--color-ink)";
  // lower-half honey shade of the anchor cell (pointy-top r30 at origin)
  const honeyShade = "M -25.98 7 L 25.98 7 L 25.98 15 L 0 30 L -25.98 15 Z";

  return (
    <svg viewBox="-160 -140 320 280" className={className} aria-hidden="true">
      {dark ? (
        <>
          <defs>
            <filter id="hm-glow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="17" />
            </filter>
          </defs>
          {/* the keystone is the one lit cell in the room */}
          <circle cx="0" cy="2" r="48" fill="var(--color-yellow)" opacity="0.17" filter="url(#hm-glow)" />
        </>
      ) : null}
      {CHANNELS.map((ch, i) => {
        const p = axialToPixel(ch.q, ch.r, size + 1.5);
        return (
          <g key={ch.id}>
            {!ch.anchor ? (
              <path
                d={hexPath(p.x, p.y, size)}
                fill={dark ? "var(--color-ground)" : "var(--color-panel)"}
                fillOpacity={dark ? (i % 2 ? 0.045 : 0.085) : i % 2 ? 0.55 : 0.95}
              />
            ) : null}
            <path
              d={hexPath(p.x, p.y, size)}
              fill={ch.anchor ? "var(--color-yellow)" : "none"}
              stroke={ch.anchor ? (dark ? "var(--color-yellow)" : "var(--color-ink)") : stroke}
              strokeOpacity={ch.anchor ? 1 : dark ? 0.4 : 0.6}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {!ch.anchor ? (
              <path
                d={hexPath(p.x, p.y, size - 4.5)}
                fill="none"
                stroke={stroke}
                strokeOpacity={dark ? 0.14 : 0.22}
                strokeWidth="1"
                strokeLinejoin="round"
              />
            ) : (
              <path d={honeyShade} fill="var(--color-ink)" opacity="0.12" />
            )}
          </g>
        );
      })}
      {/* rested bees — perched on walls, not floating in space */}
      {[
        [-48.7, 42], // wall of the SW cell
        [16, -49.5], // rim above the keystone
        [48.7, 27], // E wall
        [-8, -21], // keystone rim, start side
        [-97.4, -14], // far W wall
        [82, -56.5], // NE outpost wall
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="var(--color-yellow)" opacity="0.95" />
      ))}
    </svg>
  );
}
