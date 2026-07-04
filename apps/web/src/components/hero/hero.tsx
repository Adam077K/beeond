import { COPY } from "@/lib/brand.lock";
import { CtaButton } from "../cta-button";
import { I18n } from "../i18n";
import { JournalComb } from "./journal-comb";

/** Small yellow hex bullet — legit fill use. */
function HexBullet() {
  return (
    <svg viewBox="0 0 20 22" className="size-3" aria-hidden="true">
      <path
        d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
        fill="var(--color-yellow)"
        stroke="var(--color-ink)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

/**
 * Hero (C8 v4) — restrained, fast, editorial, asymmetric. H1 is real SSR text.
 * Committed composition: V-A split with the ledger-row founders graft
 * (BUILD_LOG). The art column is the Field Journal page (journal-comb.tsx):
 * paper == ground token, bee sprites converge once via CSS — zero hero JS.
 */
export function Hero() {
  const [line1, line2] = COPY.h1.en;
  const accent = COPY.h1AccentWord.en; // "match"
  // deliberate 3-line break: "The AI era moves fast." / "Your presence" / "needs to match."
  const [line2a, line2b] = ["Your presence", line2.replace("Your presence ", "")];
  const line2bLead = line2b.slice(0, line2b.lastIndexOf(accent)).trimEnd();
  // locked HE strings, same 3-line architecture, accent on בקצב
  const [heL1, heL2] = COPY.h1.he;
  const heAccent = COPY.h1AccentWord.he;
  const heL2a = "הנוכחות שלכם צריכה";
  const heL2b = heL2.replace(`${heL2a} `, ""); // "לעמוד בקצב."
  const heL2bLead = heL2b.slice(0, heL2b.lastIndexOf(heAccent)).trimEnd();

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 px-7 pb-16 pt-28 lg:grid-cols-[1.5fr_1fr] lg:gap-x-4 lg:pb-20 lg:pt-36">
        {/* copy column */}
        <div className="relative z-10">
          <p className="flex items-center gap-2.5 text-[13.5px] font-medium tracking-[0.01em]">
            <HexBullet />
            <I18n en={COPY.eyebrow.en} he={COPY.eyebrow.he} />
          </p>
          <h1 className="hero-h1 mt-7 text-[clamp(44px,5vw,74px)] font-bold leading-[1.02] tracking-[-0.035em] lg:w-[128%] lg:max-w-none">
            <span className="i18n-en">
              <span className="block lg:whitespace-nowrap">{line1}</span>
              <span className="block">{line2a}</span>
              <span className="block">
                {line2bLead} <span className="u-accent">{accent}</span>.
              </span>
            </span>
            <span className="i18n-he" lang="he">
              <span className="block lg:whitespace-nowrap">{heL1}</span>
              <span className="block">{heL2a}</span>
              <span className="block">
                {heL2bLead} <span className="u-accent">{heAccent}</span>.
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.55] text-muted lg:text-[18px]">
            <I18n en={COPY.subhead.en} he={COPY.subhead.he} />
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton href="#footprint-call">
              <I18n en={COPY.ctaPrimary.en} he={COPY.ctaPrimary.he} />
            </CtaButton>
            <a href="#channel-map" className="link-quiet text-[15px] font-medium">
              <I18n en={COPY.ctaSecondary.en} he={COPY.ctaSecondary.he} />
            </a>
          </div>
          <p className="mt-5 max-w-[52ch] text-[13px] leading-relaxed text-muted">
            <I18n en={COPY.ctaMicro.en} he={COPY.ctaMicro.he} />
          </p>
        </div>

        {/* art column — the Field Journal page; bees converge once, then rest */}
        <div className="relative mt-14 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[520px] lg:absolute lg:inset-x-0 lg:top-1/2 lg:max-w-none lg:-translate-y-[46%]">
            <JournalComb />
          </div>
        </div>

        {/* founders ledger — full-width proof row (V-C graft) */}
        <div className="mt-12 border-t border-hairline pt-6 lg:col-span-2 lg:mt-10">
          <p className="text-[12px] font-medium text-muted">
            <I18n
              en="Built by the people who actually do it."
              he="נבנה על ידי האנשים שבאמת עושים את זה."
            />
          </p>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:gap-14">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="flex items-center gap-4">
                <FounderMark initials={f.initials} />
                <div>
                  <p className="text-[15px] font-bold">{f.name}</p>
                  <p className="mt-0.5 max-w-[38ch] text-[12.5px] leading-snug text-muted">
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
