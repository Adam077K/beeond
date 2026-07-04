import { Eyebrow } from "../eyebrow";

/**
 * Section 6 — C6 answer-engine proof block. Editorial reinterpretation of a
 * cited AI answer — NEVER a literal ChatGPT/Perplexity screenshot, and never
 * a live claim about Beeond's own ranking. Stepped two-column composition:
 * the method panel top-aligns with the heading. Panel beat 2.
 * Copy: POSITIONING VP1 / Pillar 3; framing line per BRAND_AND_LANDING §B5.
 */
export function ProofC6Section() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-[1180px] px-7 py-28 lg:py-32">
        <div className="grid gap-y-10 lg:grid-cols-[1fr_1.1fr] lg:gap-x-12">
          <div>
            <div data-reveal>
              <Eyebrow n="05">The GEO story</Eyebrow>
              <h2 className="mt-4 max-w-[16ch] text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
                Be the answer when your buyer asks an AI.
              </h2>
              <p className="mt-4 max-w-[44ch] text-[15.5px] leading-[1.55] text-muted">
                Your buyers ask ChatGPT, Perplexity, and Google&apos;s AI who
                to use. Most agencies have no answer for this. It&apos;s the
                first channel we map — and the keystone of the hive you just
                scrolled.
              </p>
            </div>

            {/* the question — a specimen, not a chat UI */}
            <div
              data-reveal
              className="mt-10 border border-hairline bg-ground px-8 py-8"
            >
              <p className="text-[11.5px] font-medium text-muted">
                The question your buyer asks
              </p>
              <p className="mt-5 text-[clamp(20px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.02em]">
                &ldquo;Who should a B2B SaaS company hire to run its
                marketing?&rdquo;
              </p>
              <p className="mt-5 text-[12.5px] text-muted">
                Asked thousands of times a day, answered without a single ad
                impression.
              </p>
            </div>
          </div>

          {/* the method — top-aligned with the heading, carries equal weight */}
          <div data-reveal className="border border-hairline bg-ground px-8 py-8 lg:px-10 lg:py-10">
            <p className="text-[11.5px] font-medium text-muted">
              What makes a company the cited answer
            </p>
            <ul className="mt-7 space-y-7">
              {[
                {
                  n: "01",
                  k: "Citable structure",
                  v: "Answer-shaped pages: TL;DRs, Q&A blocks, schema that machines can quote.",
                },
                {
                  n: "02",
                  k: "Machine-readable trust",
                  v: "Structured data, llms.txt, entity consistency across every profile that AIs read.",
                },
                {
                  n: "03",
                  k: "Authority signals",
                  v: "The mentions, reviews and placements that make you the safe answer to give.",
                },
              ].map((row) => (
                <li key={row.k} className="flex gap-4 border-t border-hairline pt-6 first:border-t-0 first:pt-0">
                  <svg viewBox="0 0 20 22" className="mt-1 size-3.5 shrink-0" aria-hidden="true">
                    <path
                      d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
                      fill="var(--color-yellow)" /* brand-lint-allow: hex bullet fill, not text/CTA */
                      stroke="var(--color-ink)"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="text-[15.5px] font-semibold">{row.k}</h3>
                    <p className="mt-1.5 max-w-[44ch] text-[13.5px] leading-[1.55] text-muted">
                      {row.v}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-hairline pt-5 text-[12.5px] leading-relaxed text-muted">
              This is what we build toward — a methodology, not a screenshot.
              No platform UIs imitated, no rankings claimed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
