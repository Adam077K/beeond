import { axialToPixel, hexPath, hexRing } from "@/lib/hex";
import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";

/**
 * Section 7 — Founders, deep editorial treatment. Mirrored asymmetry vs the
 * hero (art start / copy end). Hex placeholders are designed brand objects —
 * founder photography is a launch-gate item, never a sad gray box.
 * Copy: POSITIONING §5 Section 8 (credential-dense lines = founder-supplied,
 * launch gate; the quotes below are POSITIONING's own).
 */
const FOUNDERS = [
  {
    initials: "A",
    name: "Adam",
    role: "AI systems & agent swarms",
    roleHe: "מערכות AI ונחילי סוכנים",
    quote:
      "I build the thing that makes everything run. When I tell you we use AI to do your marketing, I mean I built the AI.",
    quoteHe:
      "אני בונה את הדבר שמריץ הכול. כשאני אומר שאנחנו עושים לכם שיווק עם AI — אני מתכוון שאני בניתי את ה-AI.",
  },
  {
    initials: "YM",
    name: "Yarden Morgan",
    role: "B2B marketing & growth",
    roleHe: "שיווק וצמיחה B2B",
    quote:
      "I know what great B2B marketing looks like because I've shipped it. That's the standard the swarm is calibrated to.",
    quoteHe:
      "אני יודעת איך נראה שיווק B2B מצוין כי שלחתי כזה. זה הסטנדרט שאליו הנחיל מכויל.",
  },
] as const;

function FounderCell({ initials }: { initials: string }) {
  const C = { x: 100, y: 112, r: 106 };
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <svg viewBox="-56 -44 312 312" className="w-full" aria-hidden="true">
        {/* the cell's hive neighborhood — same lattice grammar as the hero */}
        <g fill="none" stroke="var(--color-hairline)" strokeWidth="1.3">
          {hexRing(1).map(([q, r], i) => {
            const p = axialToPixel(q, r, C.r + 4);
            return (
              <path
                key={`${q}-${r}`}
                d={hexPath(C.x + p.x, C.y + p.y, C.r)}
                opacity={0.3 + (i % 3) * 0.12}
              />
            );
          })}
        </g>
        <path
          d={hexPath(C.x, C.y, C.r)}
          fill="var(--color-panel)"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* comb wall thickness — the placeholder is a built cell */}
        <path
          d={hexPath(C.x, C.y, C.r - 12)}
          fill="var(--color-ground)"
          stroke="var(--color-hairline)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        {/* a small honey pool at the cell floor */}
        <path
          d={`M ${C.x - 62} 172 L ${C.x + 62} 172 L ${C.x + 47} 199 L ${C.x - 47} 199 Z`}
          fill="var(--color-yellow)"
        />
        <line
          x1={C.x - 62}
          y1={172}
          x2={C.x + 62}
          y2={172}
          stroke="var(--color-ink)"
          strokeOpacity="0.3"
          strokeWidth="1.4"
        />
        <circle cx={C.x - 20} cy={182} r="3" fill="var(--color-ground)" opacity="0.5" />
        {/* two rested bees on the rim */}
        <circle cx={C.x - 74} cy={78} r="2.8" fill="var(--color-yellow)" />
        <circle cx={C.x + 63} cy={64} r="2.8" fill="var(--color-yellow)" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[44px] font-bold tracking-[-0.02em]">
        {initials}
      </span>
    </div>
  );
}

export function FoundersSection() {
  return (
    <section id="founders" className="mx-auto max-w-[1180px] px-7 py-24 lg:py-28">
      <div data-reveal className="lg:ms-[38%]">
        <Eyebrow n="06"><I18n en="Founders" he="המייסדים" /></Eyebrow>
        <h2 className="mt-4 max-w-[22ch] text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
          <I18n
            en="Built by the people who actually do it."
            he="נבנה על ידי האנשים שבאמת עושים את זה."
          />
        </h2>
      </div>

      <div className="mt-14 space-y-16">
        {FOUNDERS.map((f, i) => (
          <div
            key={f.name}
            data-reveal
            className="grid items-center gap-9 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16"
          >
            <div className={i === 1 ? "lg:order-2" : ""}>
              <FounderCell initials={f.initials} />
            </div>
            <div className={i === 1 ? "lg:order-1 lg:text-end" : ""}>
              <h3 className="text-[22px] font-bold tracking-[-0.01em]">{f.name}</h3>
              <p className="mt-1 text-[13.5px] font-medium text-muted"><I18n en={f.role} he={f.roleHe} /></p>
              <blockquote
                className={`mt-5 max-w-[44ch] text-[clamp(17px,1.7vw,21px)] font-medium leading-[1.45] tracking-[-0.01em] ${
                  i === 1 ? "lg:ms-auto" : ""
                }`}
              >
                <I18n en={f.quote} he={f.quoteHe} />
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-16 border-t border-hairline pt-8 lg:ms-[38%]">
        <p className="max-w-[52ch] text-[16px] leading-[1.55]">
          <span className="i18n-en">
            We didn&apos;t find each other at a networking event. We built Beeond
            because we couldn&apos;t find an agency that did what we knew was{" "}
            <span className="u-accent">possible</span>.
          </span>
          <span className="i18n-he" lang="he">
            לא מצאנו זה את זה באירוע נטוורקינג. בנינו את Beeond כי לא מצאנו
            סוכנות שעושה את מה שידענו שהוא <span className="u-accent">אפשרי</span>.
          </span>
        </p>
        <p className="mt-4 max-w-[52ch] text-[13.5px] leading-[1.55] text-muted">
          <I18n
            en="Built for founders who move fast and spend seriously on growth. We talk to every potential client personally — we're selective because we have to be."
            he="נבנה למייסדים שזזים מהר ומשקיעים ברצינות בצמיחה. אנחנו מדברים עם כל לקוח פוטנציאלי אישית — אנחנו סלקטיביים כי אנחנו חייבים להיות."
          />
        </p>
      </div>
    </section>
  );
}
