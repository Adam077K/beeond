/**
 * Section 2 — The Problem. Editorial zig-zag (never three equal cards).
 * Copy direction: POSITIONING.md §5 Section 2.
 */
const OPTIONS = [
  {
    name: "The traditional agency",
    line: "Five figures a month, quarterly thinking, and an account manager juggling twelve other clients.",
  },
  {
    name: "The in-house hire",
    line: "A real salary for one person who still can't cover ten channels alone.",
  },
  {
    name: "The DIY AI stack",
    line: "Fast and cheap — and every word of it sounds like everyone else's AI.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-7 py-28 lg:py-32">
      <div data-reveal>
        <p className="text-[13px] font-medium">The problem</p>
        <h2 className="mt-3 max-w-[24ch] text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
          Most B2B companies run a fraction of their footprint — and lose
          pipeline to the ones that don&apos;t.
        </h2>
      </div>

      <div className="mt-14 grid gap-y-10 lg:grid-cols-2 lg:gap-x-16">
        <ul className="space-y-9">
          {OPTIONS.map((o, i) => (
            <li
              key={o.name}
              data-reveal
              className={`flex max-w-[46ch] gap-4 ${i === 1 ? "lg:ms-14" : ""}`}
            >
              <svg viewBox="0 0 20 22" className="mt-1 size-3.5 shrink-0" aria-hidden="true">
                <path
                  d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
                  fill="none"
                  stroke="var(--color-hairline)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-[16px] font-semibold">{o.name}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.5] text-muted">{o.line}</p>
              </div>
            </li>
          ))}
        </ul>
        <div data-reveal className="lg:mt-6">
          <blockquote className="bg-panel px-8 py-9 lg:px-10 lg:py-11">
            <p className="text-[clamp(19px,1.9vw,25px)] font-bold leading-[1.3] tracking-[-0.02em]">
              Every week your competitors appear in AI answers and you
              don&apos;t is a week of pipeline left on the table.
            </p>
          </blockquote>
          <p className="mt-5 max-w-[46ch] text-[14.5px] leading-[1.55] text-muted">
            Your buyers search Google, ask ChatGPT, and scroll LinkedIn before
            they ever talk to you. Being great at one channel no longer covers
            the other nine.
          </p>
        </div>
      </div>
    </section>
  );
}
