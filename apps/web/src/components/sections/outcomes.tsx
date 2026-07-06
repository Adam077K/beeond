import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Outcomes (v6 §2.4) — four quiet cards for the jobs-to-be-done, one line
 * each, ink spot-glyphs that argue the job (never decorate). Grid is an
 * OFFSET 2×2 — the second column drops, so it never reads as a bento of
 * equals (constitution: no bento-grid-of-services).
 * Copy traces: VP1/VP2/VP3/VP5 + pillar phrases (POSITIONING §2–3).
 */

/* spot glyphs — 44px ink drawings, one idea each */

/** an AI answer with you cited in it */
function GlyphAnswer() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="size-11" aria-hidden="true">
      <path d="M6 9h32M6 17h32M6 25h19" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" opacity="0.35" />
      <path
        d="M31 24.5 37.5 28v7L31 38.5 24.5 35v-7Z"
        fill="var(--color-yellow)" /* brand-lint-allow: spot-glyph fill accent — the citation */
        stroke="var(--color-ink)"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** work leaving the desk, week after week — one ink stroke loops and ships out */
function GlyphShip() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="size-11" aria-hidden="true">
      {/* the drafting loop */}
      <path
        d="M4 33c3-10 11-15 16-10 4 4 0 10-4 8-5-2 0-11 8-13 5-1 9 1 12 4"
        stroke="var(--color-ink)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* the dashed release — off the page */}
      <path
        d="M33 20c2 1 4 1 6 0"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 5"
        opacity="0.55"
      />
      {/* shipped — the cell at the terminus */}
      <path
        d="M38 8.5 42.5 11v5L38 18.5 33.5 16v-5Z"
        fill="var(--color-yellow)" /* brand-lint-allow: spot-glyph fill accent — the shipped piece */
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** two people casting a much larger lattice */
function GlyphBigger() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="size-11" aria-hidden="true">
      <g stroke="var(--color-ink)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35">
        <path d="M22 4 30 9v10l-8 5-8-5V9Z" />
        <path d="M30 19 38 24v10l-8 5-8-5V24Z" />
        <path d="M14 19 22 24v10l-8 5-8-5V24Z" />
      </g>
      <circle cx="19" cy="31" r="2.6" fill="var(--color-ink)" />
      <circle cx="25" cy="31" r="2.6" fill="var(--color-ink)" />
    </svg>
  );
}

/** the signal, read exactly — one ink curve; the moment that worked, marked */
function GlyphSignal() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="size-11" aria-hidden="true">
      {/* baseline */}
      <path d="M5 37h34" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      {/* the one reading that worked — marked under the curve */}
      <rect
        x="29"
        y="15"
        width="5"
        height="22"
        fill="var(--color-yellow)" /* brand-lint-allow: spot-glyph fill accent — the reading that worked */
        stroke="var(--color-ink)"
        strokeWidth="1.4"
      />
      {/* the signal — rises, dips, then earns the peak */}
      <path
        d="M5 32c5 0 6-8 10-8s4 6 8 5 4-11 9-15c2-1.5 4-2 7-2"
        stroke="var(--color-ink)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* the read — a tick where the founders looked */}
      <circle cx="31.5" cy="13" r="2.2" fill="var(--color-ink)" />
    </svg>
  );
}

const OUTCOMES = [
  {
    glyph: <GlyphAnswer />,
    tEn: "Show up in AI answers",
    tHe: "להופיע בתשובות AI",
    lEn: "When a buyer asks ChatGPT who to use — you're in the answer.",
    lHe: "כשלקוח שואל ChatGPT את מי לקחת — אתם בתשובה.",
  },
  {
    glyph: <GlyphShip />,
    tEn: "Ship like you have a marketing team",
    tHe: "להוציא כאילו יש לכם מחלקת שיווק",
    lEn: "A week's output, every week — without making a single hire.",
    lHe: "תפוקה של שבוע, כל שבוע — בלי לגייס אף אחד.",
  },
  {
    glyph: <GlyphBigger />,
    tEn: "Look bigger than your headcount",
    tHe: "להיראות גדולים מכפי שאתם",
    lEn: "A footprint that reads like a company twice your size.",
    lHe: "נוכחות שנקראת כמו חברה כפולה מכם.",
  },
  {
    glyph: <GlyphSignal />,
    tEn: "Know exactly what's working",
    tHe: "לדעת בדיוק מה עובד",
    lEn: "One report, every channel — no vendor finger-pointing.",
    lHe: "דוח אחד, כל הערוצים — בלי הפניות אצבע בין ספקים.",
  },
];

export function OutcomesSection() {
  return (
    <section id="outcomes" className="mx-auto max-w-[1180px] px-7 py-24 lg:py-28">
      <div data-reveal>
        <Eyebrow n="03">
          <I18n en="What you get" he="מה יוצא לכם מזה" />
        </Eyebrow>
        <h2 className="mt-5 max-w-[24ch] text-[clamp(28px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.025em]">
          <I18n en="What you're actually buying." he="מה אתם באמת קונים." />
        </h2>
      </div>

      {/* asymmetric two-column composition: wider end column + dropped
          rhythm — never a grid of equals (critic P2) */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-10">
        {OUTCOMES.map((o, i) => (
          <div
            key={o.tEn}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className={`border border-hairline p-7 lg:p-8 ${i % 2 === 1 ? "sm:mt-10" : ""}`}
          >
            {o.glyph}
            <h3 className="mt-5 text-[18px] font-bold tracking-[-0.01em]">
              <I18n en={o.tEn} he={o.tHe} />
            </h3>
            <p className="mt-2 max-w-[38ch] text-[14px] leading-[1.55] text-muted">
              <I18n en={o.lEn} he={o.lHe} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
