import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Honesty block (v6 §2.7) — proof + fit. Left: the framed empty state
 * ("first cohort in progress") — no fake logos, no invented testimonials;
 * the empty frame IS the claim. Right: who it's for / who it's NOT for —
 * disqualifying copy welcomed (brief §1; POSITIONING §5.7 + voice canon).
 * The C5 trust strip renders right below as this block's coda (page.tsx).
 */

function FitHex({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 22" className="mt-0.5 size-4 shrink-0" aria-hidden="true">
      <path
        d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity={filled ? 1 : 0.45}
      />
      {filled ? <circle cx="10" cy="11" r="2.2" fill="var(--color-yellow)" /> : null}
    </svg>
  );
}

const FOR = [
  {
    en: "Your buyers research before they ever talk to you — search, AI answers, LinkedIn.",
    he: "הקונים שלכם חוקרים לפני שהם בכלל מדברים איתכם — חיפוש, תשובות AI, לינקדאין.",
  },
  {
    en: "You want one accountable system, not five vendors and a Slack thread.",
    he: "אתם רוצים מערכת אחת אחראית, לא חמישה ספקים ות׳רד בסלאק.",
  },
  {
    en: "Brand voice is non-negotiable — you'd rather ship less than sound generic.",
    he: "קול המותג לא נתון למשא ומתן — עדיף לכם להוציא פחות מאשר להישמע גנרי.",
  },
];

const NOT_FOR = [
  {
    en: "You need pipeline this week. We build presence that compounds — that takes weeks, not days.",
    he: "אתם צריכים פייפליין השבוע. אנחנו בונים נוכחות שמצטברת — וזה לוקח שבועות, לא ימים.",
  },
  {
    en: "You want the cheapest possible content, at any quality.",
    he: "אתם מחפשים את התוכן הכי זול שיש, בכל איכות.",
  },
  {
    en: "You'd rather build and manage an in-house team — genuinely the right call past ~50 people.",
    he: "אתם מעדיפים לבנות ולנהל צוות פנימי — בחירה נכונה באמת מ-50 עובדים בערך ומעלה.",
  },
];

export function HonestySection() {
  return (
    <section id="proof" className="mx-auto max-w-[1180px] px-7 pb-8 pt-24 lg:pb-10 lg:pt-28">
      <div data-reveal>
        <Eyebrow n="06">
          <I18n en="Proof & fit" he="הוכחות והתאמה" />
        </Eyebrow>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* the framed empty state — the honesty IS the proof */}
        <div data-reveal className="flex flex-col justify-center border border-hairline px-8 py-12 text-center lg:px-12 lg:py-14">
          <svg viewBox="0 0 20 22" className="mx-auto size-5" aria-hidden="true">
            <path
              d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="11" r="2.2" fill="var(--color-yellow)" />
          </svg>
          <h2 className="mx-auto mt-6 max-w-[24ch] text-[clamp(24px,2.6vw,34px)] font-bold leading-[1.12] tracking-[-0.025em]">
            <I18n
              en="First cohort in progress — their results will live here."
              he="הקבוצה הראשונה בעבודה — התוצאות שלהם יגורו כאן."
            />
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[14.5px] leading-[1.55] text-muted">
            <I18n
              en="Beeond is new — the founders' work isn't. We're selective about who we take on, because at this depth the founders are the system. We'd rather show you real work on the call than paste borrowed badges here."
              he="Beeond חדשה — העבודה של המייסדים לא. אנחנו סלקטיביים לגבי מי שאנחנו לוקחים, כי בעומק הזה המייסדים הם המערכת. נעדיף להראות לכם עבודה אמיתית בשיחה מאשר להדביק כאן תגים מושאלים."
            />
          </p>
          <p className="mt-6 text-[13px] font-medium">
            <I18n
              en="We'll earn our reviews. Ask us for references."
              he="את הביקורות שלנו נרוויח. בקשו מאיתנו ממליצים."
            />
          </p>
        </div>

        {/* who it's for / who it's not for */}
        <div data-reveal className="border border-hairline p-8 lg:p-10">
          <h3 className="text-[15px] font-bold">
            <I18n en="It's for you if —" he="זה בשבילכם, אם —" />
          </h3>
          <ul className="mt-4 space-y-3.5">
            {FOR.map((f) => (
              <li key={f.en} className="flex gap-3 text-[14px] leading-[1.5]">
                <FitHex filled />
                <span>
                  <I18n en={f.en} he={f.he} />
                </span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 border-t border-hairline pt-7 text-[15px] font-bold text-muted">
            <I18n en="And honestly, not for you if —" he="ובכנות, לא בשבילכם, אם —" />
          </h3>
          <ul className="mt-4 space-y-3.5">
            {NOT_FOR.map((f) => (
              <li key={f.en} className="flex gap-3 text-[14px] leading-[1.5] text-muted">
                <FitHex filled={false} />
                <span>
                  <I18n en={f.en} he={f.he} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
