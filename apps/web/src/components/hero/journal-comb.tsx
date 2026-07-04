/**
 * Hero art (C8 v4) — "The Founders' Field Journal" master-plan page.
 * Hand-drawn ink + watercolor comb, generated via scripts/generate-art.mjs,
 * paper white-balanced to ground #FAF9F5 (scripts/normalize_paper.py) so the
 * artwork sits ON the page — no rectangle seam. Bees are separate transparent
 * sprites composited here at true field-sketch scale; each flies in once and
 * rests (converge-once doctrine, pure CSS, no client JS).
 *
 * EN art carries hand-lettered annotations ("every channel" / "one swarm" /
 * "GEO" with a painted yellow underline). HE uses the clean, letter-free
 * variant; .journal-stage mirrors under html[lang="he"] so the paths enter
 * from the reading direction. All offsets are PHYSICAL (left/right), never
 * logical — the RTL mirror comes from that single transform.
 *
 * Responsive crop is pure CSS: .journal-page always spans the FULL journal
 * page (bees keep one coordinate system); on desktop the .journal-crop box
 * narrows and clips to the comb spread (right 78% of the page).
 */

const IMG_W = 1536;
const IMG_H = 1024;

type Bee = {
  /** sprite index 1..6 (public/art/bee-N.webp) */
  sprite: 1 | 2 | 3 | 4 | 5 | 6;
  /** rest position (sprite center), % of the full page */
  x: number;
  y: number;
  /** sprite width as % of the full page width (a real bee ≈ half a cell) */
  w: number;
  /** rest rotation deg */
  r: number;
  /** fly-from delta px */
  tx: number;
  ty: number;
  /** stagger delay ms */
  d: number;
};

/** One swarm, placed along the painted flight paths. */
const BEES: Bee[] = [
  // banking in toward the comb's upper-left rim
  { sprite: 3, x: 56.5, y: 30.5, w: 5.4, r: 6, tx: -130, ty: -46, d: 250 },
  // cruising the lower path, about to arrive
  { sprite: 1, x: 45.0, y: 84.0, w: 5.0, r: -4, tx: -150, ty: 26, d: 420 },
  // seen from above, drifting past the "one swarm" loop
  { sprite: 6, x: 38.5, y: 58.0, w: 3.9, r: 14, tx: -110, ty: 58, d: 590 },
  // already at rest on the lower wall, beside the drip
  { sprite: 5, x: 70.5, y: 80.0, w: 4.2, r: -12, tx: -48, ty: -84, d: 740 },
];

const SPRITE_H: Record<Bee["sprite"], number> = {
  1: 176,
  2: 203,
  3: 220,
  4: 135,
  5: 124,
  6: 161,
};

function ArtPage({ lang, eager }: { lang: "en" | "he"; eager?: boolean }) {
  const alt =
    lang === "en"
      ? "Field-journal sketch: a honeycomb being built cell by cell — one dark keystone cell marked GEO — with bees arriving along dashed flight paths."
      : "סקיצת יומן־שדה: חלת דבש שנבנית תא אחרי תא — תא אבן־ראשה כהה במרכז — ודבורים מגיעות לאורך מסלולי טיסה מקווקוים.";
  return (
    <div className={`journal-crop relative overflow-hidden ${lang === "en" ? "i18n-en" : "i18n-he"}`}>
      <div className="journal-page absolute top-0 h-full">
        {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP set, deterministic (no optimizer runtime); paper==ground makes seams impossible */}
        <img
          src={`/art/hero-comb-${lang}.webp`}
          srcSet={`/art/hero-comb-${lang}-768.webp 768w, /art/hero-comb-${lang}-1024.webp 1024w, /art/hero-comb-${lang}.webp 1536w`}
          // 700px ≈ .journal-page at desktop: right column (~472px at the
          // 1180px container) × 128.2% crop overflow + growth headroom
          sizes="(min-width: 1024px) 700px, 100vw"
          width={IMG_W}
          height={IMG_H}
          alt={alt}
          // no fetchPriority=high: on phones the art sits below the fold and
          // must not outrank the fonts that paint the text LCP
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full"
        />
        {BEES.map((b) => (
          // eslint-disable-next-line @next/next/no-img-element -- tiny alpha sprite, pre-sized
          <img
            key={`bee-${b.sprite}-${b.x}-${b.y}`}
            src={`/art/bee-${b.sprite}.webp`}
            alt=""
            width={220}
            height={SPRITE_H[b.sprite]}
            loading="lazy"
            decoding="async"
            className="journal-bee"
            style={{
              left: `${b.x}%`, // brand-lint-allow: stage mirrors via scaleX(-1); logical would double-flip
              top: `${b.y}%`,
              width: `${b.w}%`,
              ["--r" as string]: `${b.r}deg`,
              ["--tx" as string]: `${b.tx}px`,
              ["--ty" as string]: `${b.ty}px`,
              ["--d" as string]: `${b.d}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function JournalComb() {
  return (
    <div className="journal-stage">
      <ArtPage lang="en" eager />
      <ArtPage lang="he" />
    </div>
  );
}
