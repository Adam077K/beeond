import { I18n } from "../i18n";

/**
 * Hero art (C8 v5, founder mock 2026-07-05) — the artwork IS the hero.
 * A monumental hand-inked comb bleeds off the top/right/bottom of the
 * viewport; channel chips (hand-inked icon + REAL TEXT label) overlay the
 * empty cells so the comb literally is the channel map — bilingual, crawlable,
 * crisp at any DPI. Bees are sprites: comb bees live on the art page, free
 * bees drift over the hero's whitespace. Everything converges once, then
 * rests (CSS only, zero hero JS).
 *
 * Geometry: .journal-page always spans the FULL 1536×1024 art (one coordinate
 * system, container-query units for scale); .journal-window clips to the
 * page's right ~62% and is right-anchored, so the art's own left zone (which
 * the model insists on populating with bees) never renders. RTL mirrors the
 * page with one scaleX(-1); chip content counter-flips so labels stay
 * readable. All offsets physical for that reason.
 */

/** Channel chips pinned to EMPTY cells. Coordinates are MEASURED centroids
 *  of the art's enclosed empty-cell regions (see BUILD_LOG wave 5) — never
 *  eyeballed. % of the full 1536×1024 page. */
const CHIPS = [
  { icon: "content", en: "Content", he: "תוכן", x: 58.1, y: 19.9 },
  { icon: "seo", en: "SEO", he: "SEO", x: 87.5, y: 19.9 },
  { icon: "social", en: "Social", he: "סושיאל", x: 58.0, y: 45.9 },
  { icon: "web", en: "Web", he: "אתר", x: 92.5, y: 32.5 },
  { icon: "email", en: "Email", he: "אימייל", x: 62.7, y: 59.6 },
  { icon: "analytics", en: "Analytics", he: "אנליטיקס", x: 92.3, y: 58.8 },
] as const;

/** Comb bees — on the art page (page %, sized in cqh so they track cells). */
const PAGE_BEES = [
  // landing on the honey column's upper rim
  { sprite: 4, x: 76.5, y: 13.5, w: 11, r: -6, tx: -120, ty: -60, d: 350 },
  // at rest on the wall beside the drip cell
  { sprite: 5, x: 78.5, y: 68.0, w: 9, r: -14, tx: -60, ty: -90, d: 620 },
] as const;

const SPRITE_H: Record<number, number> = {
  1: 176, 2: 203, 3: 220, 4: 135, 5: 124, 6: 161,
};

function Bee({
  sprite, x, y, w, r, tx, ty, d,
}: {
  sprite: number; x: number; y: number; w: number; r: number; tx: number; ty: number; d: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny alpha sprite, pre-sized
    <img
      src={`/art/bee-${sprite}.webp`}
      alt=""
      width={220}
      height={SPRITE_H[sprite]}
      loading="lazy"
      decoding="async"
      className="journal-bee"
      style={{
        left: `${x}%`, // brand-lint-allow: stage mirrors via scaleX(-1); logical would double-flip
        top: `${y}%`,
        width: `${w}cqh`,
        ["--r" as string]: `${r}deg`,
        ["--tx" as string]: `${tx}px`,
        ["--ty" as string]: `${ty}px`,
        ["--d" as string]: `${d}ms`,
      }}
    />
  );
}

export function JournalHeroArt() {
  const alt = {
    en: "Field-journal sketch: a monumental honeycomb running off the page — each cell a marketing channel, one dark keystone cell carrying the Beeond bee emblem — with dashed flight paths arriving.",
    he: "סקיצת יומן־שדה: חלת דבש עצומה שגולשת מעבר לדף — כל תא ערוץ שיווק, ותא אבן־ראשה כהה נושא את סמל הדבורה של Beeond — עם מסלולי טיסה מקווקוים.",
  };
  return (
    <div className="journal-window" aria-hidden={false}>
      <div className="journal-page">
        {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP set, deterministic; paper==ground makes seams impossible */}
        <img
          src="/art/hero-bleed.webp"
          srcSet="/art/hero-bleed-768.webp 768w, /art/hero-bleed-1024.webp 1024w, /art/hero-bleed.webp 1536w"
          // no fetchPriority=high: phones render the below-fold band (and hide
          // the desktop stage) — the art must not outrank the text-LCP fonts
          sizes="(min-width: 1024px) 92vh, 100vw"
          width={1536}
          height={1024}
          decoding="async"
          className="h-full w-full"
          alt=""
        />
        <span className="sr-only">
          <I18n en={alt.en} he={alt.he} />
        </span>
        {CHIPS.map((c) => (
          <div
            key={c.icon}
            className="journal-chip"
            style={{
              left: `${c.x}%`, // brand-lint-allow: stage mirrors via scaleX(-1); logical would double-flip
              top: `${c.y}%`,
            }}
          >
            <span className="journal-chip-inner">
              {/* eslint-disable-next-line @next/next/no-img-element -- hand-inked pictogram, pre-sized */}
              <img src={`/art/icon-${c.icon}.webp`} alt="" width={160} height={160} loading="lazy" decoding="async" />
              <span className="journal-chip-label">
                <I18n en={c.en} he={c.he} />
              </span>
            </span>
          </div>
        ))}
        {PAGE_BEES.map((b) => (
          <Bee key={`${b.sprite}-${b.x}`} {...b} />
        ))}
      </div>
    </div>
  );
}

/** Free bees that drift over the hero's whitespace (positioned in section %). */
export function JournalFreeBees() {
  return (
    <div className="journal-free" aria-hidden="true">
      <Bee sprite={3} x={46} y={17} w={4.6} r={10} tx={-140} ty={-40} d={200} />
      <Bee sprite={1} x={43} y={52} w={4.2} r={-6} tx={-150} ty={40} d={480} />
      <Bee sprite={6} x={7} y={86} w={3.4} r={16} tx={-90} ty={70} d={760} />
    </div>
  );
}
