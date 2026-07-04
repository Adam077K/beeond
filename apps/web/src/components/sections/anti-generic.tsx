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
        <p className="text-[13px] font-medium">The anti-generic promise</p>
        <h2 className="mt-3 text-[clamp(28px,3.6vw,44px)] font-bold leading-[1.05] tracking-[-0.03em]">
          AI that doesn&apos;t make you sound like{" "}
          <span className="u-accent">everyone else</span>.
        </h2>
      </div>

      <div data-reveal className="mt-9 space-y-5 text-[16.5px] leading-[1.6]">
        <p>
          Yes, we use AI. Extensively. That&apos;s how we do what we do at the
          speed and price we do it. But here&apos;s what we&apos;ve learned
          building AI systems: <strong>automation is very good at volume. It
          is not good at taste.</strong>
        </p>
        <p className="text-muted">
          Every engagement starts with us getting obsessively specific about
          what &ldquo;on-brand&rdquo; means for you — what you sound like, what
          you stand for, what makes you different. Only then does the swarm
          move. An automated system calibrated to your brand is the only kind
          of AI marketing that actually works.
        </p>
      </div>

      {/* the specimen — banned-word slop vs the canon, framed like evidence */}
      <figure data-reveal className="mt-12 border border-hairline">
        <div className="border-b border-hairline px-7 py-6">
          <p className="text-[11.5px] font-medium text-muted">
            What the default sounds like — built from the buzzwords our voice
            canon bans
          </p>
          <p className="mt-2.5 text-[15.5px] leading-[1.5] text-muted line-through decoration-hairline decoration-2">
            Leverage our seamless, best-in-class marketing solutions to unlock
            next-level growth and transformative synergy.
          </p>
        </div>
        <div className="bg-panel px-7 py-6">
          <p className="text-[11.5px] font-medium text-muted">
            What calibrated sounds like
          </p>
          <p className="mt-2.5 text-[17px] font-semibold leading-[1.45]">
            Automation does the volume. Humans do the taste. Not generic.
            Never generic.
          </p>
        </div>
      </figure>
    </section>
  );
}
