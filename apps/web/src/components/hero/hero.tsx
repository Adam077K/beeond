import { COPY } from "@/lib/brand.lock";
import { CtaButton } from "../cta-button";
import { I18n } from "../i18n";
import { JournalHeroArt, JournalFreeBees } from "./journal-hero";

/** Hand-inked hex-bee glyph for the micro-proof row (gold stroke). */
function HexBeeGlyph() {
  return (
    <svg viewBox="0 0 44 48" className="size-11 shrink-0" aria-hidden="true">
      <path
        d="M22 3 39 13v22L22 45 5 35V13Z"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <g stroke="var(--color-gold)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <ellipse cx="22" cy="26" rx="4.2" ry="6" />
        <path d="M18.4 24.4h7.2M18.6 27h6.8M19.4 29.6h5.2" />
        <circle cx="22" cy="18.4" r="1.8" />
        <path d="M17.8 21.5c-3.4-1.4-5.8-.6-6.6 1.2 1.8 1.6 4.4 1.4 6.9-.1M26.2 21.5c3.4-1.4 5.8-.6 6.6 1.2-1.8 1.6-4.4 1.4-6.9-.1" />
        <path d="M20.9 16.9c-.7-1.1-1.6-1.7-2.6-1.9M23.1 16.9c.7-1.1 1.6-1.7 2.6-1.9" />
      </g>
    </svg>
  );
}

/** Play glyph nested in its own circle (secondary CTA, mock pattern). */
function PlayOrb() {
  return (
    <span className="cta-play inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/25">
      <svg viewBox="0 0 10 12" className="ms-0.5 size-2.5" aria-hidden="true">
        <path d="M1 1.2v9.6L9 6Z" fill="var(--color-ink)" />
      </svg>
    </span>
  );
}

const FOUNDERS = [
  {
    initials: "A",
    name: "Adam",
    line: "AI systems & agent swarms — the builder of the swarm itself.",
    lineHe: "מערכות AI ונחילי סוכנים — הבונה של הנחיל עצמו.",
  },
  {
    initials: "YM",
    name: "Yarden Morgan",
    line: "B2B marketing & growth — the keeper of the standard it ships to.",
    lineHe: "שיווק וצמיחה B2B — שומרת הסטנדרט שאליו הוא מכויל.",
  },
] as const;

function FounderMark({ initials }: { initials: string }) {
  return (
    <span className="relative inline-flex size-11 shrink-0 items-center justify-center">
      <svg viewBox="0 0 40 44" className="absolute inset-0 size-full" aria-hidden="true">
        <path
          d="M20 2 37 12.5v19L20 42 3 31.5v-19Z"
          fill="var(--color-panel)"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative text-[13px] font-bold tracking-[-0.01em]">{initials}</span>
    </span>
  );
}

/**
 * Hero (C8 v5) — the founder's mock: the Field Journal artwork IS the hero.
 * Full-bleed comb runs off three page edges (journal-hero.tsx); text column
 * left; H1 two-tone (line 1 ink, sentence 2 watercolor-gold — v5 amendment);
 * micro-proof row anchors the fold. H1 copy stays verbatim per brand.lock.
 */
export function Hero() {
  const [line1, line2] = COPY.h1.en;
  const [line2a] = ["Your presence"];
  const line2b = line2.replace("Your presence ", "");
  const [heL1, heL2] = COPY.h1.he;
  // break at the natural phrase boundary so HE holds 3 lines like EN
  const heL2a = "הנוכחות שלכם";
  const heL2b = heL2.replace(`${heL2a} `, "");

  return (
    <section className="hero-v5 relative flex min-h-[100dvh] flex-col">
      {/* the artwork layer — bleeds off top/right/bottom; sr-only description inside */}
      <div className="journal-stage">
        <JournalHeroArt />
      </div>
      <JournalFreeBees />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-7 pb-14 pt-32 lg:pt-36">
        <div className="max-w-[560px]">
          <p className="eyebrow-gold text-[13px] font-semibold uppercase tracking-[0.18em]">
            <I18n en={COPY.eyebrow.en} he={COPY.eyebrow.he} />
          </p>
          <h1 className="hero-h1 mt-6 text-[clamp(42px,4.8vw,72px)] font-bold leading-[1.04] tracking-[-0.035em]">
            <span className="i18n-en">
              <span className="block">{line1}</span>
              <span className="block text-gold">{line2a}</span>
              <span className="block text-gold">{line2b}</span>
            </span>
            <span className="i18n-he" lang="he">
              <span className="block">{heL1}</span>
              <span className="block text-gold">{heL2a}</span>
              <span className="block text-gold">{heL2b}</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[44ch] text-[16.5px] leading-[1.6] text-muted lg:text-[17.5px]">
            <I18n en={COPY.subhead.en} he={COPY.subhead.he} />
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <CtaButton href="#footprint-call">
              <I18n en={COPY.ctaPrimary.en} he={COPY.ctaPrimary.he} />
            </CtaButton>
            <a
              href="#channel-map"
              className="cta-ghost inline-flex items-center gap-3 rounded-full border border-ink/30 py-2.5 pe-2.5 ps-6 text-[15px] font-medium"
            >
              <I18n en={COPY.ctaSecondary.en} he={COPY.ctaSecondary.he} />
              <PlayOrb />
            </a>
          </div>
          <div className="mt-10 flex max-w-[52ch] items-start gap-4">
            <HexBeeGlyph />
            <p className="text-[13px] leading-relaxed text-muted">
              <span className="block font-semibold text-ink">
                <I18n en="No agency pitch. No deck." he="בלי פיץ׳ של סוכנות, בלי מצגת." />
              </span>
              <I18n
                en="We'll show you where your footprint has gaps — and what it would take to close them."
                he="נראה לכם איפה יש פערים בנוכחות — ומה נדרש כדי לסגור אותם."
              />
            </p>
          </div>
        </div>

        {/* mobile: the comb rides below the copy */}
        <div className="journal-mobile mt-12" aria-hidden="true">
          <JournalHeroArt />
        </div>
      </div>

      {/* founders ledger — proof row at the fold's edge */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-7 pb-8">
        <div className="border-t border-hairline pt-5 lg:max-w-[640px]">
          <p className="text-[12px] font-medium text-muted">
            <I18n
              en="Built by the people who actually do it."
              he="נבנה על ידי האנשים שבאמת עושים את זה."
            />
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-12">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="flex items-center gap-4">
                <FounderMark initials={f.initials} />
                <div>
                  <p className="text-[14.5px] font-bold">{f.name}</p>
                  <p className="mt-0.5 max-w-[38ch] text-[12px] leading-snug text-muted">
                    <I18n en={f.line} he={f.lineHe} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
