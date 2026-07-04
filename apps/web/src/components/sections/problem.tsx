import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Section 2 — The Problem. Editorial zig-zag (never three equal cards).
 * The loss-aversion panel rises beside the heading — no dead zones.
 * Copy direction: POSITIONING.md §5 Section 2.
 */
const OPTIONS = [
  {
    n: "01",
    name: "The traditional agency",
    nameHe: "הסוכנות המסורתית",
    line: "Five figures a month, quarterly thinking, and an account manager juggling twelve other clients.",
    lineHe: "חמש ספרות בחודש, חשיבה רבעונית, ומנהל תיק שמלהטט בין תריסר לקוחות נוספים.",
  },
  {
    n: "02",
    name: "The in-house hire",
    nameHe: "הגיוס הפנימי",
    line: "A real salary for one person who still can't cover ten channels alone.",
    lineHe: "משכורת מלאה לאדם אחד — שעדיין לא יכול לכסות עשרה ערוצים לבד.",
  },
  {
    n: "03",
    name: "The DIY AI stack",
    nameHe: "ערימת כלי ה-AI בעשה-זאת-בעצמך",
    line: "Fast and cheap — and every word of it sounds like everyone else's AI.",
    lineHe: "מהיר וזול — וכל מילה נשמעת כמו ה-AI של כולם.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-7 pb-28 pt-20 lg:pb-32 lg:pt-24">
      <div className="grid gap-y-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16">
        <div data-reveal>
          <Eyebrow n="01"><I18n en="The problem" he="הבעיה" /></Eyebrow>
          <h2 className="mt-4 max-w-[19ch] text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
            <I18n
              en="Most B2B companies run a fraction of their footprint — and lose pipeline to the ones that don't."
              he="רוב חברות ה-B2B מפעילות רק חלק קטן מהנוכחות שלהן — ומפסידות פייפליין לאלה שלא."
            />
          </h2>
        </div>

        {/* the cost panel — top-aligned with the heading, carries the weight */}
        <div data-reveal className="lg:row-span-2">
          <blockquote className="bg-panel px-8 py-9 lg:px-10 lg:py-11">
            <p className="text-[clamp(19px,1.9vw,25px)] font-bold leading-[1.3] tracking-[-0.02em]">
              <I18n
                en="Every week your competitors appear in AI answers and you don't is a week of pipeline left on the table."
                he="כל שבוע שבו המתחרים שלכם מופיעים בתשובות של AI ואתם לא — הוא שבוע של פייפליין שנשאר על השולחן."
              />
            </p>
          </blockquote>
          <p className="mt-6 max-w-[46ch] text-[14.5px] leading-[1.55] text-muted lg:ms-10">
            <I18n
              en="Your buyers search Google, ask ChatGPT, and scroll LinkedIn before they ever talk to you. Being great at one channel no longer covers the other nine."
              he="הקונים שלכם מחפשים בגוגל, שואלים ChatGPT וגוללים בלינקדאין לפני שהם בכלל מדברים איתכם. להיות מצוינים בערוץ אחד כבר לא מכסה את תשעת האחרים."
            />
          </p>
        </div>

        <ul className="space-y-8 lg:mt-2">
          {OPTIONS.map((o, i) => (
            <li
              key={o.name}
              data-reveal
              className={`flex max-w-[46ch] gap-5 border-t border-hairline pt-6 ${
                i === 1 ? "lg:ms-12" : ""
              }`}
            >
              <span className="mt-0.5 text-[12px] font-medium text-muted" aria-hidden="true">
                {o.n}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold"><I18n en={o.name} he={o.nameHe} /></h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-muted"><I18n en={o.line} he={o.lineHe} /></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
