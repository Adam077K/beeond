import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Section 5 — the anti-generic promise. The page's dense/tight beat:
 * narrowest column, manifesto register. Copy: POSITIONING.md §5 Section 6 +
 * §8 voice canon (the "generic" specimen is built from the canon's own
 * banned-word list — traceable, nothing invented).
 */
export function AntiGenericSection() {
  return (
    <section className="mx-auto max-w-[760px] px-7 py-20 lg:py-24">
      <div data-reveal>
        <Eyebrow n="04"><I18n en="The anti-generic promise" he="ההבטחה האנטי-גנרית" /></Eyebrow>
        <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-bold leading-[1.05] tracking-[-0.03em]">
          <span className="i18n-en">
            AI that doesn&apos;t make you sound like{" "}
            <span className="u-accent">everyone else</span>.
          </span>
          <span className="i18n-he" lang="he">
            AI שלא גורם לכם להישמע <span className="u-accent">כמו כולם</span>.
          </span>
        </h2>
      </div>

      <div data-reveal className="mt-9 space-y-5 text-[16.5px] leading-[1.6]">
        <p>
          <I18n
            en={<>Yes, we use AI. Extensively. That&apos;s how we do what we do at the speed and price we do it. But here&apos;s what we&apos;ve learned building AI systems: <strong>automation is very good at volume. It is not good at taste.</strong></>}
            he={<>כן, אנחנו משתמשים ב-AI. הרבה. ככה אנחנו עושים את מה שאנחנו עושים, במהירות ובמחיר שאנחנו עושים אותו. אבל הנה מה שלמדנו מבניית מערכות AI: <strong>אוטומציה מצוינת בכמות. היא לא טובה בטעם.</strong></>}
          />
        </p>
        <p className="text-muted">
          <I18n
            en={'Every engagement starts with us getting obsessively specific about what "on-brand" means for you — what you sound like, what you stand for, what makes you different. Only then does the swarm move. An automated system calibrated to your brand is the only kind of AI marketing that actually works.'}
            he={'כל התקשרות מתחילה בזה שאנחנו נהיים אובססיביים לגבי מה זה "און-ברנד" אצלכם — איך אתם נשמעים, על מה אתם עומדים, מה מבדל אתכם. רק אז הנחיל זז. מערכת אוטומטית שמכוילת למותג שלכם היא סוג שיווק ה-AI היחיד שבאמת עובד.'}
          />
        </p>
      </div>

      {/* the specimen — banned-word slop vs the canon, framed like evidence */}
      <figure data-reveal className="mt-12 border border-hairline">
        <div className="border-b border-hairline px-7 py-6">
          <p className="text-[11.5px] font-medium text-muted">
            <I18n
              en="What the default sounds like — built from the buzzwords our voice canon bans"
              he="איך נשמע הדיפולט — בנוי מהבאזוורדים שקאנון הקול שלנו אוסר"
            />
          </p>
          <p className="mt-2.5 text-[15.5px] leading-[1.5] text-muted line-through decoration-hairline decoration-2">
            <I18n
              en="Leverage our seamless, best-in-class marketing solutions to unlock next-level growth and transformative synergy."
              he="ממנפים פתרונות שיווק חלקים ופורצי דרך כדי לשחרר צמיחה ברמה הבאה וסינרגיה טרנספורמטיבית."
            />
          </p>
        </div>
        <div className="border-s-[3px] border-yellow bg-panel px-8 py-8">
          <p className="text-[11.5px] font-medium text-muted">
            <I18n en="What calibrated sounds like" he="איך נשמע מכויל" />
          </p>
          <p className="mt-3 max-w-[30ch] text-[clamp(17px,1.8vw,21px)] font-bold leading-[1.4] tracking-[-0.01em]">
            <I18n
              en="Automation does the volume. Humans do the taste. Not generic. Never generic."
              he="אוטומציה עושה את הכמות. בני אדם עושים את הטעם. לא גנרי. אף פעם לא גנרי."
            />
          </p>
        </div>
      </figure>
    </section>
  );
}
