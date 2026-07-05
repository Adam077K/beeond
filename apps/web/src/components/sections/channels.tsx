import { hexPath } from "@/lib/hex";
import { CHANNELS, TILE, stageBounds, tileOffset } from "../channel-map/channels";
import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";
import { HiveMark } from "../hive-mark";

/**
 * Every channel (v6 §2.6) — the ecosystem, calm. The 11 channels arranged
 * around the Beeond mark as a STATIC assembled hive: no pin, no scrub, no
 * canvas — the showpiece (§2.5) owns the page's scroll choreography. All
 * 11 proof lines are SSR text (JS-off / AI-crawler visible); channel names
 * are TEXT until the third-party-logo legal pass (§9.3). GEO keeps the
 * hive's single yellow face. Mobile: the proven keystone-emblem + ledger.
 */

/** the center cell — the brand mark the channels arrange around */
function MarkTile({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="hex-tile absolute"
      style={{
        width: TILE.w,
        height: TILE.h,
        insetInlineStart: `calc(50% + ${x}px - ${TILE.w / 2}px)`,
        top: `calc(50% + ${y}px - ${TILE.h / 2}px)`,
      }}
    >
      {/* the one BUILT cell — ink walls, no ground face: the brand is the
          hive's dark core and the channels arrange around it */}
      <span className="hex-border" aria-hidden="true" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-ground">
        <svg viewBox="0 0 20 22" className="size-8" aria-hidden="true">
          <path
            d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
            fill="var(--color-yellow)" /* brand-lint-allow: the mark's hex-o, fill accent */
            stroke="var(--color-deep)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-2.5 text-[16px] font-bold tracking-[-0.01em]">Beeond</p>
        <p className="mt-1 text-[11px] text-ground/65">
          <I18n en="one swarm, one goal" he="נחיל אחד, מטרה אחת" />
        </p>
      </div>
    </div>
  );
}

export function ChannelsSection() {
  const bounds = stageBounds();

  return (
    <section id="channel-map" className="relative overflow-hidden">
      <HoneyField />

      {/* ── Desktop: static assembled hive around the mark ── */}
      <div className="relative mx-auto hidden max-w-[1180px] px-7 py-24 lg:block lg:py-28">
        <div data-reveal>
          <Eyebrow n="05" hex>
            <I18n en="Every channel" he="כל ערוץ" />
          </Eyebrow>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,3.2vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">
            <I18n
              en="Every channel your buyers use — one coordinated system."
              he="כל ערוץ שהקונים שלכם משתמשים בו — מערכת אחת מתואמת."
            />
          </h2>
          <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.5] text-muted">
            <I18n
              en="Not a menu of services, and not three vendors with three briefs. The whole footprint, one hive around one brand — including the channel your competitors haven't mapped yet."
              he="לא תפריט שירותים, ולא שלושה ספקים עם שלושה בריפים. כל הנוכחות, כוורת אחת סביב מותג אחד — כולל הערוץ שהמתחרים שלכם עוד לא מיפו."
            />
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          <div data-reveal className="relative" style={{ width: bounds.w, height: bounds.h }}>
            <MarkTile x={0} y={0} />
            {CHANNELS.map((ch, i) => {
              const { x, y } = tileOffset(ch);
              return (
                <div
                  key={ch.id}
                  className={`hex-tile absolute ${ch.anchor ? "hex-tile-anchor" : ""}`}
                  data-reveal
                  style={{
                    width: TILE.w,
                    height: TILE.h,
                    insetInlineStart: `calc(50% + ${x}px - ${TILE.w / 2}px)`,
                    top: `calc(50% + ${y}px - ${TILE.h / 2}px)`,
                    transitionDelay: `${i * 45}ms`,
                  }}
                >
                  {/* the paper sheet stays put; the cell lifts off it on hover */}
                  <span className="hex-stack" aria-hidden="true" />
                  <div className="hex-hover relative h-full w-full">
                    <span className="hex-border" aria-hidden="true" />
                    <span className="hex-face" aria-hidden="true" />
                    <span className="hex-rim" aria-hidden="true" />
                    <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                      <h3 className="text-[14.5px] font-semibold leading-[1.2] tracking-[-0.01em]">
                        <I18n en={ch.name} he={ch.nameHe} />
                      </h3>
                      <p
                        className={`mt-2 text-[11.5px] leading-[1.4] ${
                          ch.anchor ? "text-ink/75" : "text-muted"
                        }`}
                      >
                        <I18n en={ch.proof} he={ch.proofHe} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile: keystone emblem + hive ledger (proven, kept) ── */}
      <div className="relative px-7 py-20 lg:hidden">
        <Eyebrow n="05" hex>
          <I18n en="Every channel" he="כל ערוץ" />
        </Eyebrow>
        <h2 className="mt-4 text-[clamp(28px,7.4vw,34px)] font-bold leading-[1.08] tracking-[-0.03em]">
          <I18n
            en="Every channel your buyers use — one coordinated system."
            he="כל ערוץ שהקונים שלכם משתמשים בו — מערכת אחת מתואמת."
          />
        </h2>
        <p className="mt-3 text-[15px] leading-[1.5] text-muted">
          <I18n
            en="The whole footprint, built as one hive — not a menu of services."
            he="כל הנוכחות, בנויה ככוורת אחת — לא תפריט שירותים."
          />
        </p>
        <HiveMark className="mx-auto mt-9 w-full max-w-[300px]" />
        <p className="mt-2 text-center text-[12px] font-medium text-muted">
          <I18n
            en="GEO — AI-search visibility — locks the hive together."
            he="GEO — נראות בחיפוש AI — נועל את הכוורת יחד."
          />
        </p>
        <ul className="mt-9">
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
                <h3 className="text-[15px] font-semibold leading-tight">
                  <I18n en={ch.name} he={ch.nameHe} />
                </h3>
                <p className="mt-1 text-[13px] leading-[1.45] text-muted">
                  <I18n en={ch.proof} he={ch.proofHe} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Faint honeycomb field behind the hive — texture, never loud. */
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
