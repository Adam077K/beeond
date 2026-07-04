/**
 * Section 4 — Phased onboarding. Three UNEVEN steps on a flight path that
 * draws once on reveal (stroke-dashoffset, one-shot, settle curve).
 * Copy: POSITIONING.md §5 Section 4 / OFFER_SPEC §4. Panel beat 1.
 */
const STEPS = [
  {
    n: "01",
    range: "Weeks 1–4",
    name: "Foundation",
    line: "Brand intake, technical + GEO audit, tracking, schema, voice calibration. Before anything publishes, the infrastructure holds the weight.",
  },
  {
    n: "02",
    range: "Weeks 4–8",
    name: "Content engine",
    line: "SEO articles, LinkedIn cadence, email lifecycle. The swarm starts to coordinate — each piece feeds the next.",
  },
  {
    n: "03",
    range: "Weeks 8–12",
    name: "Amplification",
    line: "Paid campaigns, digital PR, AI-citation content. Every core channel active, optimizing on real signal.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-panel">
      <div className="mx-auto max-w-[980px] px-7 py-24 lg:py-28">
        <div data-reveal>
          <p className="text-[13px] font-medium">How it works</p>
          <h2 className="mt-3 max-w-[26ch] text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Your footprint, built in layers — not lit up all at once.
          </h2>
        </div>

        <div className="relative mt-14" data-reveal>
          {/* the flight path — draws once when revealed */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-[26px] hidden h-[60px] w-full md:block"
            viewBox="0 0 900 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="flight-path"
              d="M8 42 C 150 42, 210 14, 340 14 S 560 50, 690 50 S 860 22, 892 22"
              fill="none"
              stroke="var(--color-yellow)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1"
            />
          </svg>
          <ol className="grid gap-10 md:grid-cols-[1fr_1.15fr_0.95fr] md:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.n} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-7" : ""}>
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex size-9 items-center justify-center">
                    <svg viewBox="0 0 36 40" className="absolute inset-0 size-full" aria-hidden="true">
                      <path
                        d="M18 2 33 11.5v17L18 38 3 28.5v-17Z"
                        fill="var(--color-ground)"
                        stroke="var(--color-ink)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="relative text-[12px] font-bold">{s.n}</span>
                  </span>
                  <span className="text-[12px] font-medium text-muted">{s.range}</span>
                </div>
                <h3 className="mt-4 text-[19px] font-bold tracking-[-0.01em]">{s.name}</h3>
                <p className="mt-2 max-w-[34ch] text-[14px] leading-[1.55] text-muted">{s.line}</p>
              </li>
            ))}
          </ol>
        </div>

        <p data-reveal className="mt-12 text-[14.5px] font-medium">
          We don&apos;t light up 20 channels in week one. We build the
          foundation that makes all 20 work.
        </p>
      </div>
    </section>
  );
}
