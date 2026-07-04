import { Eyebrow } from "../eyebrow";

/**
 * Section 2 — The Problem. Editorial zig-zag (never three equal cards).
 * The loss-aversion panel rises beside the heading — no dead zones.
 * Copy direction: POSITIONING.md §5 Section 2.
 */
const OPTIONS = [
  {
    n: "01",
    name: "The traditional agency",
    line: "Five figures a month, quarterly thinking, and an account manager juggling twelve other clients.",
  },
  {
    n: "02",
    name: "The in-house hire",
    line: "A real salary for one person who still can't cover ten channels alone.",
  },
  {
    n: "03",
    name: "The DIY AI stack",
    line: "Fast and cheap — and every word of it sounds like everyone else's AI.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-7 pb-28 pt-20 lg:pb-32 lg:pt-24">
      <div className="grid gap-y-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16">
        <div data-reveal>
          <Eyebrow n="01">The problem</Eyebrow>
          <h2 className="mt-4 max-w-[19ch] text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Most B2B companies run a fraction of their footprint — and lose
            pipeline to the ones that don&apos;t.
          </h2>
        </div>

        {/* the cost panel — top-aligned with the heading, carries the weight */}
        <div data-reveal className="lg:row-span-2">
          <blockquote className="bg-panel px-8 py-9 lg:px-10 lg:py-11">
            <p className="text-[clamp(19px,1.9vw,25px)] font-bold leading-[1.3] tracking-[-0.02em]">
              Every week your competitors appear in AI answers and you
              don&apos;t is a week of pipeline left on the table.
            </p>
          </blockquote>
          <p className="mt-6 max-w-[46ch] text-[14.5px] leading-[1.55] text-muted lg:ms-10">
            Your buyers search Google, ask ChatGPT, and scroll LinkedIn before
            they ever talk to you. Being great at one channel no longer covers
            the other nine.
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
                <h3 className="text-[16px] font-semibold">{o.name}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-muted">{o.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
