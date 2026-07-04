import { FAQ } from "./faq-data";

/**
 * Section 9 — FAQ. Native <details> accordion (answers stay in the DOM for
 * crawlers when closed), hairline dividers, hex marker that morphs + → × in
 * BOTH directions (exit runs ~0.8× entrance). Height animation is modern
 * progressive enhancement (interpolate-size / ::details-content).
 */
export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-[760px] px-7 py-24 lg:py-28">
      <div data-reveal>
        <p className="text-[13px] font-medium">Questions founders actually ask</p>
        <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.08] tracking-[-0.03em]">
          The answers, without the pitch.
        </h2>
      </div>
      <div data-reveal className="mt-10 border-t border-hairline">
        {FAQ.map((item) => (
          <details key={item.q} className="faq-item group border-b border-hairline">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="faq-marker relative inline-flex size-8 shrink-0 items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 32 36" className="absolute inset-0 size-full">
                  <path
                    d="M16 2 29.5 10.5v15L16 34 2.5 25.5v-15Z"
                    fill="none"
                    stroke="var(--color-hairline)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg viewBox="0 0 12 12" className="faq-plus relative size-3">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="var(--color-ink)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="faq-body">
              <p className="max-w-[62ch] pb-6 text-[14.5px] leading-[1.6] text-muted">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
