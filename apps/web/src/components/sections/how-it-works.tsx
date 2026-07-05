import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Section 4 — Phased onboarding. All three hex nodes sit on ONE flight line
 * (the path passes through them and is absorbed at the last node); the
 * uneven editorial rhythm lives in the text blocks below. Panel beat 1.
 * Copy: POSITIONING.md §5 Section 4 / OFFER_SPEC §4.
 */
const STEPS = [
  {
    n: "01",
    spot: "foundation",
    range: "Weeks 1–4",
    rangeHe: "שבועות 1–4",
    name: "Foundation",
    nameHe: "יסודות",
    line: "Brand intake, technical + GEO audit, tracking, schema, voice calibration. Before anything publishes, the infrastructure holds the weight.",
    lineHe: "אינטייק מותג, אודיט טכני ו-GEO, מדידה, סכמה, כיול קול. לפני שמשהו מתפרסם — התשתית מחזיקה את המשקל.",
    offset: "",
  },
  {
    n: "02",
    spot: "engine",
    range: "Weeks 4–8",
    rangeHe: "שבועות 4–8",
    name: "Content engine",
    nameHe: "מנוע תוכן",
    line: "SEO articles, LinkedIn cadence, email lifecycle. The swarm starts to coordinate — each piece feeds the next.",
    lineHe: "מאמרי SEO, קצב לינקדאין, מייל לייפסייקל. הנחיל מתחיל לפעול כאחד — כל פריט מזין את הבא.",
    offset: "md:mt-9",
  },
  {
    n: "03",
    spot: "amplify",
    range: "Weeks 8–12",
    rangeHe: "שבועות 8–12",
    name: "Amplification",
    nameHe: "הגברה",
    line: "Paid campaigns, digital PR, AI-citation content. Every core channel active, optimizing on real signal.",
    lineHe: "קמפיינים ממומנים, יח״צ דיגיטלי, תוכן לציטוט AI. כל ערוץ ליבה פעיל, מתייעל על סיגנל אמיתי.",
    offset: "md:mt-4",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-panel">
      <div className="mx-auto max-w-[980px] px-7 py-24 lg:py-28">
        <div data-reveal>
          <Eyebrow n="07"><I18n en="How it works" he="איך זה עובד" /></Eyebrow>
          <h2 className="mt-4 max-w-[26ch] text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.06] tracking-[-0.03em]">
            <I18n
              en="Your footprint, built in layers — not lit up all at once."
              he="הנוכחות שלכם נבנית בשכבות — לא נדלקת בבת אחת."
            />
          </h2>
        </div>

        <div className="relative mt-16" data-reveal>
          {/* the flight line — strung under the three nodes, lands at 03 */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden w-full md:block"
            viewBox="0 0 900 58"
            aria-hidden="true"
          >
            <path
              className="flight-path"
              d="M22 40 C 120 56, 235 56, 323 40 C 440 56, 565 56, 662 40"
              fill="none"
              stroke="var(--color-yellow)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1"
            />
            <circle className="flight-dot" cx="662" cy="40" r="4" fill="var(--color-yellow)" />
          </svg>
          <ol className="grid gap-10 md:grid-cols-[1fr_1.15fr_0.95fr] md:gap-8">
            {STEPS.map((s) => (
              <li key={s.n}>
                {/* node row — constant baseline for the flight line */}
                <div className="relative flex items-center gap-3">
                  <span className="relative inline-flex size-11 items-center justify-center">
                    <svg viewBox="0 0 40 44" className="absolute inset-0 size-full" aria-hidden="true">
                      <path
                        d="M20 2 37 12.5v19L20 42 3 31.5v-19Z"
                        fill="var(--color-ground)"
                        stroke="var(--color-ink)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="relative text-[12.5px] font-bold">{s.n}</span>
                  </span>
                  <span className="text-[12px] font-medium text-muted"><I18n en={s.range} he={s.rangeHe} /></span>
                </div>
                {/* the editorial stagger lives below the line */}
                <div className={s.offset}>
                  {/* phase spot — hand-inked margin drawing (v6.1, generated) */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- tiny alpha spot, pre-sized */}
                  <img
                    src={`/art/spot-${s.spot}.webp`}
                    alt=""
                    width={320}
                    height={280}
                    loading="lazy"
                    decoding="async"
                    className="mt-6 h-[90px] w-auto select-none"
                  />
                  <h3 className="mt-3 text-[19px] font-bold tracking-[-0.01em]"><I18n en={s.name} he={s.nameHe} /></h3>
                  <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.55] text-muted">
                    <I18n en={s.line} he={s.lineHe} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p data-reveal className="mt-14 border-t border-hairline pt-6 text-[14.5px] font-medium">
          <I18n
            en="We don't light up 20 channels in week one. We build the foundation that makes all 20 work."
            he="אנחנו לא מדליקים 20 ערוצים בשבוע הראשון. אנחנו בונים את היסודות שגורמים לכל ה-20 לעבוד."
          />
        </p>
      </div>
    </section>
  );
}
