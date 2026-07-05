import { Eyebrow } from "../eyebrow";
import { I18n } from "../i18n";
import { SwarmScrub } from "./scrub";

/**
 * Meet the swarm (v6 §2.5) — THE showpiece, the page's one scroll-
 * choreographed moment. A clean org chart draws itself — the team our
 * reader can't hire — then the role cards flip: agents all along. Two
 * cards stay human (Adam & Yarden, the calibration layer), and the
 * chart's connectors relax into the hexagon lattice — the bee's one
 * earned entrance. Converge once, then rest.
 *
 * SSR state = the RESTED END: hive arrangement, agent faces up, lattice
 * drawn. The scrub (scrub.tsx) rewinds to the org chart and replays it
 * under scroll — reduced-motion / JS-off / mobile never see a wire.
 * Mobile = no-pin stacked ledger. Diagram coordinates are physical and
 * direction-neutral (an org chart reads identically in RTL); text inside
 * cards is fully bilingual.
 */

/** the reusable agent mark — hexagon, core, two ports */
export function AgentMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M13 2 23 8.5v11L13 26 3 19.5v-11Z"
        stroke="var(--color-ink)"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="14" r="3.2" fill="var(--color-ink)" />
      <path d="M13 10.8V7M9.9 15.8l-3.2 1.9M16.1 15.8l3.2 1.9" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HumanChip() {
  return (
    <p
      data-swarm-chip
      className="mt-3 flex w-fit items-center gap-1.5 border border-hairline px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
    >
      <svg viewBox="0 0 20 22" className="size-2.5" aria-hidden="true">
        <path
          d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
          fill="var(--color-yellow)" /* brand-lint-allow: fill accent — the calibration layer, this section's one yellow */
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <I18n en="Human — calibration layer" he="אנושי — שכבת הכיול" />
    </p>
  );
}

type Role = {
  /** chart center %x,%y and hive center %x,%y */
  chart: [number, number];
  hive: [number, number];
  frontEn: string;
  frontHe: string;
  frontLineEn: string;
  frontLineHe: string;
  backEn: string;
  backHe: string;
  backLineEn: string;
  backLineHe: string;
};

const ROLES: Role[] = [
  {
    chart: [50, 42],
    hive: [50, 44],
    frontEn: "Head of Strategy",
    frontHe: "ראש אסטרטגיה",
    frontLineEn: "the first hire you can't afford",
    frontLineHe: "הגיוס הראשון שאין לו תקציב",
    backEn: "Strategy agent",
    backHe: "סוכן אסטרטגיה",
    backLineEn: "reads your market, writes the swarm's brief",
    backLineHe: "קורא את השוק, כותב את הבריף של הנחיל",
  },
  {
    chart: [14, 79],
    hive: [24, 44],
    frontEn: "SEO lead",
    frontHe: "מוביל SEO",
    frontLineEn: "the specialist you'd share with 12 clients",
    frontLineHe: "המומחה שהייתם חולקים עם 12 לקוחות",
    backEn: "SEO agent",
    backHe: "סוכן SEO",
    backLineEn: "keeps you found where search still happens",
    backLineHe: "שומר שתימצאו איפה שעדיין מחפשים",
  },
  {
    chart: [38, 79],
    hive: [76, 44],
    frontEn: "Content lead",
    frontHe: "מוביל תוכן",
    frontLineEn: "the writer who burns out",
    frontLineHe: "הכותב שנשחק",
    backEn: "Content agent",
    backHe: "סוכן תוכן",
    backLineEn: "drafts at machine speed; nothing ships uncalibrated",
    backLineHe: "מנסח במהירות מכונה; שום דבר לא יוצא בלי כיול",
  },
  {
    chart: [62, 79],
    hive: [37, 76],
    frontEn: "Distribution lead",
    frontHe: "מוביל הפצה",
    frontLineEn: "the growth hire that never sticks",
    frontLineHe: "גיוס הצמיחה שאף פעם לא מחזיק",
    backEn: "Distribution agent",
    backHe: "סוכן הפצה",
    backLineEn: "puts every piece where your buyers already are",
    backLineHe: "שם כל פיסת תוכן איפה שהקונים שלכם כבר נמצאים",
  },
  {
    chart: [86, 79],
    hive: [63, 76],
    frontEn: "Growth analyst",
    frontHe: "אנליסט צמיחה",
    frontLineEn: "the analyst you'll hire “next year”",
    frontLineHe: "האנליסט שתגייסו ״בשנה הבאה״",
    backEn: "Analyst agent",
    backHe: "סוכן אנליטיקה",
    backLineEn: "reads the signal, files the report",
    backLineHe: "קורא את הסיגנל, מגיש את הדוח",
  },
];

const HUMANS = [
  {
    chart: [40, 10] as const,
    hive: [37, 14] as const,
    name: "Adam",
    lineEn: "AI systems & agent swarms — builds the machine",
    lineHe: "מערכות AI ונחילי סוכנים — בונה את המכונה",
  },
  {
    chart: [60, 10] as const,
    hive: [63, 14] as const,
    name: "Yarden Morgan",
    lineEn: "B2B marketing & growth — sets the standard",
    lineHe: "שיווק וצמיחה B2B — קובעת את הסטנדרט",
  },
];

/* SVG space is px-true (viewBox 0 0 1060 560) so getTotalLength ==
   on-screen length and the dash draw math is exact — a %-space viewBox
   with non-scaling strokes leaked dash fragments (measured, r0). */
const X = (p: number) => p * 10.6;
const Y = (p: number) => p * 5.6;

/* org-chart wires (drawn, then released) — run BEHIND the cards */
const WIRES = [
  `M${X(40)} ${Y(10)} V${Y(27)} H${X(50)} V${Y(42)}`,
  `M${X(60)} ${Y(10)} V${Y(27)} H${X(50)} V${Y(42)}`,
  `M${X(50)} ${Y(42)} V${Y(61)} H${X(14)} V${Y(79)}`,
  `M${X(50)} ${Y(42)} V${Y(61)} H${X(38)} V${Y(79)}`,
  `M${X(50)} ${Y(42)} V${Y(61)} H${X(62)} V${Y(79)}`,
  `M${X(50)} ${Y(42)} V${Y(61)} H${X(86)} V${Y(79)}`,
];

/* the lattice the connectors relax into — a hexagon ring + spokes */
const RING: Array<[number, number]> = [
  [37, 14],
  [63, 14],
  [76, 44],
  [63, 76],
  [37, 76],
  [24, 44],
];
const LATTICE = [
  ...RING.map((p, i) => {
    const q = RING[(i + 1) % RING.length];
    return `M${X(p[0])} ${Y(p[1])} L${X(q[0])} ${Y(q[1])}`;
  }),
  ...RING.map((p) => `M${X(50)} ${Y(44)} L${X(p[0])} ${Y(p[1])}`),
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <div
      className="swarm-anchor" /* brand-lint-allow: diagram coordinates — direction-neutral org chart, see header comment */
      style={{ left: `${role.hive[0]}%`, top: `${role.hive[1]}%` }}
    >
      <div
        data-swarm-mover
        data-chart={`${role.chart[0]},${role.chart[1]}`}
        data-hive={`${role.hive[0]},${role.hive[1]}`}
        data-order={index + 2}
      >
        <div data-swarm-flip className="swarm-flip">
          {/* front — the unfilled hire */}
          <div className="swarm-face swarm-front border border-dashed border-hairline bg-panel p-4" aria-hidden="true">
            <p className="text-[13.5px] font-bold">{role.frontEn}</p>
            <p className="mt-1 text-[11.5px] leading-snug text-muted">{role.frontLineEn}</p>
            <p className="mt-3 w-fit border border-hairline px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Unfilled
            </p>
          </div>
          {/* back — the agent, already working */}
          <div className="swarm-face swarm-back border border-hairline bg-ground p-4">
            <AgentMark />
            <p className="mt-2.5 text-[13.5px] font-bold">
              <I18n en={role.backEn} he={role.backHe} />
            </p>
            <p className="mt-1 text-[11.5px] leading-snug text-muted">
              <I18n en={role.backLineEn} he={role.backLineHe} />
            </p>
            <p className="mt-3 w-fit border border-hairline px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <I18n en="Already working" he="כבר עובד" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HumanCard({ h, index }: { h: (typeof HUMANS)[number]; index: number }) {
  return (
    <div
      className="swarm-anchor" /* brand-lint-allow: diagram coordinates — direction-neutral org chart, see header comment */
      style={{ left: `${h.hive[0]}%`, top: `${h.hive[1]}%` }}
    >
      <div
        data-swarm-mover
        data-chart={`${h.chart[0]},${h.chart[1]}`}
        data-hive={`${h.hive[0]},${h.hive[1]}`}
        data-order={index}
        className="border border-hairline bg-ground p-4"
      >
        <p className="text-[13.5px] font-bold">{h.name}</p>
        <p className="mt-1 text-[11.5px] leading-snug text-muted">
          <I18n en={h.lineEn} he={h.lineHe} />
        </p>
        <HumanChip />
      </div>
    </div>
  );
}

export function SwarmSection() {
  return (
    <section id="swarm" data-swarm-root className="relative">
      <div data-swarm-sticky className="mx-auto max-w-[1180px] px-7 py-24 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
        <div data-reveal className="lg:shrink-0">
          <Eyebrow n="04" hex>
            <I18n en="Meet the swarm" he="הכירו את הנחיל" />
          </Eyebrow>
          <h2 className="mt-5 max-w-[26ch] text-[clamp(28px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.025em]">
            <I18n
              en="The team you can't hire is already working."
              he="הצוות שאתם לא יכולים לגייס — כבר עובד."
            />
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.55] text-muted">
            <I18n
              en="Five roles a fifteen-person company can't staff. In Beeond they're agents — one coordinated swarm, calibrated by the two humans who built it."
              he="חמישה תפקידים שחברה של חמישה-עשר איש לא יכולה לאייש. ב-Beeond הם סוכנים — נחיל אחד מתואם, מכויל על ידי שני האנשים שבנו אותו."
            />
          </p>
        </div>

        {/* ── desktop stage: the rested hive (SSR); the scrub rewinds it ── */}
        <div
          data-swarm-stage
          className="relative mx-auto mt-8 hidden h-[560px] w-full max-w-[1060px] lg:block"
        >
          <svg
            data-swarm-wires
            viewBox="0 0 1060 560"
            preserveAspectRatio="none"
            className="swarm-wires absolute inset-0 h-full w-full opacity-0"
            aria-hidden="true"
          >
            {WIRES.map((d) => (
              <path key={d} d={d} data-swarm-wire fill="none" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="1.5" />
            ))}
          </svg>
          <svg
            viewBox="0 0 1060 560"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {LATTICE.map((d) => (
              <path key={d} d={d} data-swarm-lat fill="none" stroke="var(--color-ink)" strokeOpacity="0.22" strokeWidth="1.5" />
            ))}
          </svg>
          {HUMANS.map((h, i) => (
            <HumanCard key={h.name} h={h} index={i} />
          ))}
          {ROLES.map((r, i) => (
            <RoleCard key={r.backEn} role={r} index={i} />
          ))}
        </div>

        {/* ── mobile: no-pin stacked ledger, resolved end-state ── */}
        <div className="mt-10 lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {HUMANS.map((h) => (
              <div key={h.name} className="border border-hairline bg-ground p-4">
                <p className="text-[13.5px] font-bold">{h.name}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted">
                  <I18n en={h.lineEn} he={h.lineHe} />
                </p>
                <HumanChip />
              </div>
            ))}
          </div>
          <ul className="mt-3 space-y-3">
            {ROLES.map((r) => (
              <li key={r.backEn} className="border border-hairline bg-ground p-4">
                <div className="flex items-center gap-3">
                  <AgentMark className="size-7 shrink-0" />
                  <div>
                    <p className="text-[11px] text-muted line-through opacity-70" aria-hidden="true">
                      {r.frontEn}
                    </p>
                    <p className="text-[14px] font-bold">
                      <I18n en={r.backEn} he={r.backHe} />
                    </p>
                  </div>
                  <p className="ms-auto shrink-0 border border-hairline px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.12em]">
                    <I18n en="Already working" he="כבר עובד" />
                  </p>
                </div>
                <p className="mt-2 text-[12px] leading-snug text-muted">
                  <I18n en={r.backLineEn} he={r.backLineHe} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SwarmScrub />
    </section>
  );
}
