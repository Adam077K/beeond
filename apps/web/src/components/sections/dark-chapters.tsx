import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";
import { ChaptersScrub } from "./chapters-scrub";

/**
 * Dark chapters (v6 §2.3) — "what we actually do." The page's ONE long deep
 * block: three chapters, left copy, right floating REAL work artifacts —
 * light paper documents on a dark desk, crisp and product-like. Every
 * artifact carries the attribution chip verbatim: "drafted by the swarm ·
 * calibrated by Yarden." Motion: gentle parallax drift only (CSS
 * scroll-driven, @supports-gated, reduced-motion = rested) — the scroll
 * SHOWPIECE lives in §2.5, not here.
 * Honesty: artifact contents depict deliverable FORMATS with sample-flavored
 * data; anything number-like is qualitative or tagged sample.
 */

function AttributionChip() {
  return (
    <p className="mt-4 flex items-center gap-2 border-t border-hairline pt-3 text-[10.5px] font-medium tracking-[0.02em] text-muted">
      <svg viewBox="0 0 20 22" className="size-2.5 shrink-0" aria-hidden="true">
        <path
          d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
          fill="var(--color-yellow)" /* brand-lint-allow: chip glyph, fill accent */
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <I18n en="drafted by the swarm · calibrated by Yarden" he="נוסח על ידי הנחיל · כויל על ידי ירדן" />
    </p>
  );
}

function SampleTag() {
  return (
    <span className="border border-hairline px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
      <I18n en="Sample" he="דוגמה" />
    </span>
  );
}

/** shared paper card on the dark desk */
function Paper({
  drift,
  className = "",
  children,
}: {
  /** parallax drift px (negative = counter-drift) */
  drift: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-reveal
      className={`float-card border border-hairline bg-ground p-5 text-ink ${className}`}
      style={{ ["--drift" as string]: `${drift}px` }}
    >
      {children}
    </div>
  );
}

/* ── Chapter a artifact — AI-search visibility check ── */
function VisibilityCheck() {
  const rows = [
    { engine: "ChatGPT", en: "cited", he: "מצוטט", hit: true },
    { engine: "Perplexity", en: "not cited yet", he: "עוד לא מצוטט", hit: false },
    { engine: "AI Overviews", en: "cited, with link", he: "מצוטט, עם קישור", hit: true },
  ];
  return (
    <Paper drift={22} className="max-w-[360px]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em]">
          <I18n en="AI-search visibility — weekly check" he="נראות בחיפוש AI — בדיקה שבועית" />
        </p>
        <SampleTag />
      </div>
      <p className="mt-3 text-[12px] text-muted">
        <I18n en={<>Query: &ldquo;done-for-you B2B marketing&rdquo;</>} he={<>שאילתה: ״שיווק B2B בניהול מלא״</>} />
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li key={r.engine} className="flex items-center gap-3 text-[13px]">
            <svg viewBox="0 0 20 22" className="size-3.5 shrink-0" aria-hidden="true">
              <path
                d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
                fill={r.hit ? "var(--color-ink)" : "none"}
                stroke="var(--color-ink)"
                strokeWidth="1.6"
                strokeLinejoin="round"
                opacity={r.hit ? 1 : 0.4}
              />
            </svg>
            <span dir="ltr" className="min-w-[92px] font-semibold">{r.engine}</span>
            <span className="text-muted"><I18n en={r.en} he={r.he} /></span>
          </li>
        ))}
      </ul>
      <AttributionChip />
    </Paper>
  );
}

/* ── Chapter b artifacts — content calendar + tracked-changes draft ── */
function ContentCalendar() {
  const cells: Array<{ en: string; he: string; state: "done" | "drafting" | "open" }> = [
    { en: "Article: the AI buying journey", he: "מאמר: מסע הרכישה בעידן ה-AI", state: "done" },
    { en: "LinkedIn: founder post", he: "לינקדאין: פוסט מייסדים", state: "done" },
    { en: "Newsletter #3", he: "ניוזלטר #3", state: "drafting" },
    { en: "Case-study outline", he: "שלד קייס סטאדי", state: "open" },
    { en: "PR: podcast pitch", he: "יח״צ: פיץ׳ לפודקאסט", state: "open" },
    { en: "", he: "", state: "open" },
  ];
  return (
    <Paper drift={30} className="max-w-[340px]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em]">
          <I18n en="Content calendar — week 2" he="לוח תוכן — שבוע 2" />
        </p>
        <SampleTag />
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-1.5">
        {cells.map((c, i) => (
          <li
            key={i}
            className={`min-h-[52px] border p-2 text-[10.5px] leading-tight ${
              c.state === "done"
                ? "border-hairline bg-panel"
                : c.state === "drafting"
                  ? "border-ink"
                  : "border-dashed border-hairline"
            }`}
          >
            {c.en ? (
              <>
                <I18n en={c.en} he={c.he} />
                {c.state === "drafting" ? (
                  <span className="mt-1 block bg-yellow px-1 py-px text-[9.5px] font-semibold w-fit" /* brand-lint-allow: highlight fill — the mid-fill cell */>
                    <I18n en="drafting…" he="בכתיבה…" />
                  </span>
                ) : null}
              </>
            ) : null}
          </li>
        ))}
      </ul>
      <AttributionChip />
    </Paper>
  );
}

function TrackedDraft() {
  return (
    <Paper drift={-18} className="max-w-[350px]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em]">
          <I18n en="Draft — v3, calibration pass" he="טיוטה — v3, סבב כיול" />
        </p>
        <SampleTag />
      </div>
      <p className="mt-3 text-[13px] leading-[1.65]">
        <span className="i18n-en">
          We <s className="opacity-45">leverage cutting-edge AI solutions</s>{" "}
          <span className="bg-yellow px-0.5" /* brand-lint-allow: tracked-changes insert, highlight fill */>
            built the system once — so your marketing ships every week
          </span>
          , not <s className="opacity-45">at scale</s>{" "}
          <span className="bg-yellow px-0.5" /* brand-lint-allow: tracked-changes insert, highlight fill */>
            every quarter
          </span>
          .
        </span>
        <span className="i18n-he" lang="he">
          אנחנו <s className="opacity-45">ממנפים פתרונות AI פורצי דרך</s>{" "}
          <span className="bg-yellow px-0.5" /* brand-lint-allow: tracked-changes insert, highlight fill */>
            בנינו את המערכת פעם אחת — כדי שהשיווק שלכם ייצא כל שבוע
          </span>
          , לא <s className="opacity-45">בקנה מידה</s>{" "}
          <span className="bg-yellow px-0.5" /* brand-lint-allow: tracked-changes insert, highlight fill */>
            כל רבעון
          </span>
          .
        </span>
      </p>
      <p className="mt-2 text-[11px] italic text-muted">
        <I18n en="— the slop gets struck before it ships." he="— הסלופ נמחק לפני שהוא יוצא." />
      </p>
      <AttributionChip />
    </Paper>
  );
}

/* ── Chapter c artifact — monthly report page ── */
function ReportPage() {
  const bars = [46, 62, 78]; // qualitative month-over-month presence, sample
  return (
    <Paper drift={20} className="max-w-[340px]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em]">
          <I18n en="Monthly report — p.4" he="דוח חודשי — עמ׳ 4" />
        </p>
        <SampleTag />
      </div>
      <p className="mt-3 text-[12px] text-muted">
        <I18n en="Tracked-query presence, month over month" he="נוכחות בשאילתות במעקב, חודש מול חודש" />
      </p>
      <div className="mt-3 space-y-2.5">
        {bars.map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-14 text-[11px] font-medium text-muted">
              <I18n en={`Month ${i + 1}`} he={`חודש ${i + 1}`} />
            </span>
            <span className="h-[10px] flex-1 border border-hairline">
              <span
                className={`block h-full ${i === bars.length - 1 ? "bg-yellow" /* brand-lint-allow: fill accent — the current month */ : "bg-ink"}`}
                style={{ width: `${w}%` }}
              />
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-snug text-muted">
        <I18n
          en="What moved, why it moved, and what the swarm does differently next month."
          he="מה זז, למה זה זז, ומה הנחיל עושה אחרת בחודש הבא."
        />
      </p>
      <AttributionChip />
    </Paper>
  );
}

/* ── chapters ── */
const CHAPTERS = [
  {
    k: "a",
    titleEn: "Be found everywhere buyers look",
    titleHe: "להימצא בכל מקום שבו קונים מחפשים",
    bodyEn:
      "Your buyers search Google, ask ChatGPT, and check who shows up before they ever talk to you. We build the footprint that answers — AI-search visibility, SEO foundation, a site that holds the claim.",
    bodyHe:
      "הקונים שלכם מחפשים בגוגל, שואלים ChatGPT, ובודקים מי מופיע — עוד לפני שהם מדברים איתכם. אנחנו בונים את הנוכחות שעונה: נראות בחיפוש AI, תשתית SEO, ואתר שמחזיק את ההבטחה.",
    channelsEn: ["GEO / AI-search", "SEO", "Site"],
    channelsHe: ["GEO / חיפוש AI", "SEO", "אתר"],
    art: (
      <div className="flex justify-center lg:justify-end">
        <VisibilityCheck />
      </div>
    ),
  },
  {
    k: "b",
    titleEn: "A content engine that ships",
    titleHe: "מנוע תוכן שבאמת מוציא",
    bodyEn:
      "Volume without slop. Articles, LinkedIn, email and PR are drafted by the swarm at machine speed — and nothing leaves the hive until it's calibrated to sound like you.",
    bodyHe:
      "כמות בלי סלופ. מאמרים, לינקדאין, אימייל ויח״צ נכתבים על ידי הנחיל במהירות של מכונה — ושום דבר לא יוצא מהכוורת לפני שהוא מכויל להישמע כמוכם.",
    channelsEn: ["Content", "LinkedIn", "Email", "PR"],
    channelsHe: ["תוכן", "לינקדאין", "אימייל", "יח״צ"],
    art: (
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center lg:justify-end">
        <ContentCalendar />
        <div className="sm:mt-14">
          <TrackedDraft />
        </div>
      </div>
    ),
  },
  {
    k: "c",
    titleEn: "Intelligence that compounds",
    titleHe: "אינטליגנציה שמצטברת",
    bodyEn:
      "Every channel reports back into one system. The swarm reads the signal, the founders read the swarm — and next month starts smarter than this one.",
    bodyHe:
      "כל ערוץ מדווח חזרה למערכת אחת. הנחיל קורא את הסיגנל, המייסדים קוראים את הנחיל — והחודש הבא מתחיל חכם יותר מהנוכחי.",
    channelsEn: ["Monitoring", "Reporting", "Iteration"],
    channelsHe: ["ניטור", "דיווח", "איטרציה"],
    art: (
      <div className="flex justify-center lg:justify-end">
        <ReportPage />
      </div>
    ),
  },
];

export function DarkChaptersSection() {
  return (
    <section id="what-we-do" data-ch-root data-scheme="dark" className="relative bg-deep text-ground">
      <div data-ch-sticky className="mx-auto max-w-[1180px] px-7 py-24 lg:py-32">
        <div data-reveal className="max-w-[52ch]">
          <Eyebrow n="02">
            <I18n en="What we actually do" he="מה אנחנו באמת עושים" />
          </Eyebrow>
          <h2 className="mt-5 text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
            <I18n
              en="Not a services menu. Three jobs — shown as the documents they arrive in."
              he="לא תפריט שירותים. שלוש עבודות — מוצגות כמסמכים שבהם הן מגיעות."
            />
          </h2>
        </div>

        <div data-ch-stage className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {CHAPTERS.map((ch, chIndex) => (
            <div key={ch.k} data-ch={chIndex} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div data-reveal>
                <p aria-hidden="true" className="text-[13px] font-medium text-ground/40">
                  {ch.k}.
                </p>
                <h3 className="mt-3 max-w-[20ch] text-[clamp(22px,2.2vw,30px)] font-bold leading-[1.12] tracking-[-0.02em]">
                  <I18n en={ch.titleEn} he={ch.titleHe} />
                </h3>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.6] text-ground/70">
                  <I18n en={ch.bodyEn} he={ch.bodyHe} />
                </p>
                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12.5px] font-medium text-ground/55">
                  {ch.channelsEn.map((c, i) => (
                    <span key={c} className="flex items-center gap-3">
                      {i > 0 ? (
                        <svg viewBox="0 0 20 22" className="size-1.5 opacity-50" aria-hidden="true">
                          <path d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z" fill="currentColor" />
                        </svg>
                      ) : null}
                      <span>
                        <I18n en={c} he={ch.channelsHe[i]} />
                      </span>
                    </span>
                  ))}
                </p>
              </div>
              {ch.art}
            </div>
          ))}
        </div>

        <p data-reveal className="ch-rule mt-16 border-t border-ground/15 pt-6 text-[13.5px] text-ground/60 lg:mt-20">
          <I18n
            en={<>Automation does the volume. Humans do the taste. <span className="text-ground/40">— the rule every artifact above was made under.</span></>}
            he={<>האוטומציה עושה את הכמות. בני אדם עושים את הטעם. <span className="text-ground/40">— הכלל שלפיו נוצר כל מסמך שלמעלה.</span></>}
          />
        </p>
      </div>
      <ChaptersScrub />
    </section>
  );
}
