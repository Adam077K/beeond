import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Artifact strip (v6 §2.2) — "this is what you receive." The tangibility
 * slot: a typeset SAMPLE Footprint Audit page (scorecard + gap map) beside
 * three founder-approved process facts. The document is real SSR text —
 * crawlable, bilingual, designed to double as a sales asset. Sample data
 * lives INSIDE a page explicitly stamped "sample"; nothing here claims a
 * result we haven't earned (honesty doctrine).
 * Scorecard dimensions + facts wording: founder-approved 2026-07-05.
 */

type Dimension = {
  en: string;
  he: string;
  score: number; // 0–10
  noteEn: string;
  noteHe: string;
  /** the keystone gap — carries the yellow underline */
  geo?: boolean;
};

const DIMENSIONS: Dimension[] = [
  {
    en: "AI-answer visibility",
    he: "נראות בתשובות AI",
    score: 2,
    noteEn: "Invisible in ChatGPT and Perplexity vendor answers.",
    noteHe: "בלתי נראים בתשובות ספקים של ChatGPT ו-Perplexity.",
    geo: true,
  },
  {
    en: "Search & site foundation",
    he: "חיפוש ותשתית אתר",
    score: 5,
    noteEn: "Ranks on brand terms only; no structured data.",
    noteHe: "מדורגים רק על שם המותג; בלי דאטה מובנה.",
  },
  {
    en: "Content engine & social",
    he: "מנוע תוכן וסושיאל",
    score: 3,
    noteEn: "Last post six weeks ago; no cadence.",
    noteHe: "פוסט אחרון לפני שישה שבועות; בלי קצב.",
  },
  {
    en: "Email & lifecycle",
    he: "אימייל ומחזור חיים",
    score: 2,
    noteEn: "Newsletter dormant; no sequences.",
    noteHe: "ניוזלטר רדום; בלי רצפים.",
  },
  {
    en: "Trust & proof signals",
    he: "אמון והוכחות",
    score: 4,
    noteEn: "No G2 profile; case studies unpublished.",
    noteHe: "בלי פרופיל G2; קייס סטאדיז לא פורסמו.",
  },
];

/** 11 channel cells for the gap map — filled = working, open = gap. */
const GAP_MAP = [true, false, false, true, false, true, false, false, true, false, false];

function ScoreBar({ score, geo }: { score: number; geo?: boolean }) {
  return (
    <span className="flex items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className={`h-[9px] w-[7px] rounded-[1px] ${
            i < score
              ? geo
                ? "bg-yellow" /* brand-lint-allow: fill accent — the keystone row */
                : "bg-ink"
              : "border border-hairline"
          }`}
        />
      ))}
    </span>
  );
}

function GapHex({ filled, keystone }: { filled: boolean; keystone?: boolean }) {
  return (
    <svg viewBox="0 0 20 22" className="size-[15px]" aria-hidden="true">
      <path
        d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
        fill={filled ? "var(--color-ink)" : "none"}
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity={filled ? 1 : 0.45}
      />
      {keystone ? <circle cx="10" cy="11" r="3" fill="var(--color-yellow)" /> : null}
    </svg>
  );
}

/** The document itself — a typeset audit page, stamped SAMPLE. */
function AuditSheet() {
  return (
    <div
      data-reveal
      className="relative border border-hairline bg-ground p-6 outline outline-1 outline-offset-4 outline-hairline sm:p-8"
    >
      {/* document header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            <I18n en="Footprint audit" he="אבחון נוכחות" />
          </p>
          <p className="mt-1.5 text-[12px] text-muted">
            <I18n en="B2B SaaS · ~15 people · IL + US" he="חברת B2B SaaS · כ-15 עובדים · ישראל וארה״ב" />
          </p>
        </div>
        <span className="-rotate-3 border border-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em]">
          <I18n en="Sample" he="דוגמה" />
        </span>
      </div>

      {/* scorecard */}
      <ul className="mt-7 space-y-0 border-t border-hairline">
        {DIMENSIONS.map((d, i) => (
          <li
            key={d.en}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className="border-b border-hairline py-3.5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13.5px] font-semibold">
                {d.geo ? (
                  <span className="u-accent">
                    <I18n en={d.en} he={d.he} />
                  </span>
                ) : (
                  <I18n en={d.en} he={d.he} />
                )}
              </p>
              <div className="flex items-center gap-3">
                <ScoreBar score={d.score} geo={d.geo} />
                <span dir="ltr" className="w-10 text-end text-[12px] font-medium tabular-nums text-muted">
                  {d.score} / 10
                </span>
              </div>
            </div>
            <p className="mt-1 text-[12px] leading-snug text-muted">
              <I18n en={d.noteEn} he={d.noteHe} />
            </p>
          </li>
        ))}
      </ul>

      {/* gap map footer */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-[5px]">
          {GAP_MAP.map((filled, i) => (
            <GapHex key={i} filled={filled} keystone={i === 1} />
          ))}
        </div>
        <p className="text-[12px] font-medium">
          <I18n
            en={<>Gap map — <span className="text-muted">14 quick wins · 6 structural fixes</span></>}
            he={<>מפת פערים — <span className="text-muted">14 מהלכים מהירים · 6 מבניים</span></>}
          />
        </p>
      </div>
    </div>
  );
}

const FACTS = [
  {
    v: "11",
    vHe: "11",
    label: "channels, run as one system",
    labelHe: "ערוצים, מנוהלים כמערכת אחת",
  },
  {
    v: "1",
    vHe: "1",
    label: "swarm doing the volume",
    labelHe: "נחיל אחד שעושה את הכמות",
  },
  {
    v: "Weeks",
    vHe: "שבועות",
    label: "not months, to stand your footprint up",
    labelHe: "לא חודשים, עד שהנוכחות שלכם עומדת",
  },
];

export function ArtifactStripSection() {
  return (
    <section id="deliverable" className="bg-panel">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-y-12 px-7 py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-x-16 lg:py-32">
        {/* the document — leads on desktop, follows the copy on mobile */}
        <div className="order-2 max-w-[560px] lg:order-1">
          <AuditSheet />
        </div>

        {/* copy + process facts */}
        <div className="order-1 lg:order-2 lg:pt-4">
          <div data-reveal>
            <Eyebrow n="01">
              <I18n en="What you receive" he="מה מקבלים" />
            </Eyebrow>
            <h2 className="mt-5 text-[clamp(28px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.025em]">
              <I18n
                en="Where your footprint stands — on one page."
                he="איפה הנוכחות שלכם עומדת — בעמוד אחד."
              />
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.6] text-muted">
              <I18n
                en="The free footprint audit is a real document, not a sales call in disguise: every surface your buyers check, scored, with the gaps ranked by what they cost you. The sample here is exactly what lands in your inbox."
                he="אבחון הנוכחות החינמי הוא מסמך אמיתי, לא שיחת מכירה במסווה: כל ערוץ שהלקוחות שלכם בודקים, עם ציון, והפערים מדורגים לפי מה שהם עולים לכם. הדוגמה כאן היא בדיוק מה שמגיע לתיבה שלכם."
              />
            </p>
          </div>

          <dl className="mt-10">
            {FACTS.map((f, i) => (
              <div
                key={f.v}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="flex items-baseline gap-5 border-t border-hairline py-4"
              >
                <dd className="min-w-[92px] text-[28px] font-bold tracking-[-0.02em]">
                  <I18n en={f.v} he={f.vHe} />
                </dd>
                <dt className="text-[14px] text-muted">
                  <I18n en={f.label} he={f.labelHe} />
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
