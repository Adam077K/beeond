import { hexPath } from "@/lib/hex";
import { CHANNELS, TILE, stageBounds, tileOffset } from "./channels";
import { ChannelMapScrub } from "./scrub";
import { Eyebrow } from "../eyebrow";

/**
 * C7 — the honeycomb channel-map. The page's ONE full-bleed section and its
 * award moment. SSR renders the FULLY ASSEMBLED hive (pre-hydration state =
 * reduced-motion state = JS-off state); the scrub client hides tiles and
 * re-lays them cell by cell as the user scrolls, anchor locking LAST.
 *
 * Desktop (lg+): absolute hex tiles inside a sticky 100dvh stage in a 260vh
 * section. Mobile: plain-flow hive ledger — readable, fast, no pin.
 */
export function ChannelMapSection() {
  const bounds = stageBounds();

  return (
    <section id="channel-map" className="relative">
      {/* ── Desktop: pinned scroll stage ── */}
      <div data-c7-root className="relative hidden h-[260vh] lg:block">
        <div data-c7-sticky className="sticky top-0 flex h-dvh flex-col overflow-hidden">
          {/* full-bleed hairline honeycomb field */}
          <HoneyField />
          <div className="relative mx-auto w-full max-w-[1180px] px-7 pt-24">
            <Eyebrow n="02">The swarm</Eyebrow>
            <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,3.2vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Every channel your buyers use — one coordinated system.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.5] text-muted">
              Not a menu of services, and not three vendors with three briefs.
              The whole footprint, built as one hive — and it assembles around
              the channel your competitors haven&apos;t mapped yet.
            </p>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center">
            <div
              data-c7-stage
              className="relative"
              style={{ width: bounds.w, height: bounds.h }}
            >
              {CHANNELS.map((ch) => {
                const { x, y } = tileOffset(ch);
                return (
                  <div
                    key={ch.id}
                    data-c7-tile={ch.reveal}
                    data-c7-anchor={ch.anchor ? "" : undefined}
                    className={`hex-tile absolute ${ch.anchor ? "hex-tile-anchor" : ""}`}
                    style={{
                      width: TILE.w,
                      height: TILE.h,
                      insetInlineStart: `calc(50% + ${x}px - ${TILE.w / 2}px)`,
                      top: `calc(50% + ${y}px - ${TILE.h / 2}px)`,
                    }}
                  >
                    {ch.anchor ? (
                      <span className="hex-pulse" aria-hidden="true">
                        <svg viewBox="0 0 200 220" className="size-full">
                          <path
                            d={hexPath(100, 110, 104)}
                            fill="none"
                            stroke="var(--color-ink)"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                    ) : null}
                    <div className="hex-hover relative h-full w-full">
                      <span className="hex-border" aria-hidden="true" />
                      <span className="hex-face" aria-hidden="true" />
                      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                        <h3 className="text-[14.5px] font-semibold leading-[1.2] tracking-[-0.01em]">
                          {ch.name}
                        </h3>
                        <p
                          className={`mt-2 text-[11.5px] leading-[1.4] ${
                            ch.anchor ? "text-ink/75" : "text-muted"
                          }`}
                        >
                          {ch.proof}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <ChannelMapScrub />
            </div>
          </div>
          <p
            data-c7-hint
            className="pointer-events-none pb-6 text-center text-[12px] font-medium text-muted"
          >
            The hive assembles as you scroll — GEO locks it together.
          </p>
        </div>
      </div>

      {/* ── Mobile: hive ledger — every channel + proof, plain flow ── */}
      <div className="px-7 py-20 lg:hidden">
        <Eyebrow n="02">The swarm</Eyebrow>
        <h2 className="mt-4 text-[clamp(28px,7.4vw,34px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Every channel your buyers use — one coordinated system.
        </h2>
        <p className="mt-3 text-[15px] leading-[1.5] text-muted">
          The whole footprint, built as one hive — not a menu of services.
        </p>
        <ul className="mt-8">
          {[...CHANNELS].sort((a, b) => (a.anchor ? -1 : b.anchor ? 1 : 0)).map((ch) => (
            <li
              key={ch.id}
              className={`flex gap-4 border-b border-hairline py-4 first:border-t ${
                ch.anchor ? "bg-panel ps-3 pe-2 -mx-3 rounded-sm" : ""
              }`}
            >
              <svg viewBox="0 0 20 22" className="mt-0.5 size-4 shrink-0" aria-hidden="true">
                <path
                  d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
                  fill={ch.anchor ? "var(--color-yellow)" : "none"}
                  stroke="var(--color-ink)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-[15px] font-semibold leading-tight">{ch.name}</h3>
                <p className="mt-1 text-[13px] leading-[1.45] text-muted">{ch.proof}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Full-bleed faint honeycomb field behind the stage — texture, never loud. */
function HoneyField() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="honeyfield"
          width="97.5"
          height="169"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(24 8)"
        >
          {/* two staggered pointy-top hexes tile the plane */}
          <path
            d={hexPath(48.75, 56.5, 56)}
            fill="none"
            stroke="var(--color-hairline)"
            strokeWidth="1"
          />
          <path
            d={hexPath(0, 141, 56)}
            fill="none"
            stroke="var(--color-hairline)"
            strokeWidth="1"
          />
          <path
            d={hexPath(97.5, 141, 56)}
            fill="none"
            stroke="var(--color-hairline)"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="honeyfade" cx="50%" cy="46%" r="62%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="70%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="honeymask">
          <rect width="100%" height="100%" fill="url(#honeyfade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeyfield)" mask="url(#honeymask)" />
    </svg>
  );
}
