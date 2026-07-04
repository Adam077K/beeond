/**
 * Section — social proof, honestly empty. No fake logos, no invented
 * testimonials: the "we're selective" framing from POSITIONING §5 Section 7.
 * The layout gracefully accepts 0, 1 or N real proofs later.
 */
export function SocialProofSection() {
  return (
    <section className="mx-auto max-w-[900px] px-7 py-14 lg:py-16">
      {/* a designed object, not floating text — the empty state IS the claim */}
      <div data-reveal className="border border-hairline px-8 py-12 text-center lg:px-14">
        <svg viewBox="0 0 20 22" className="mx-auto size-5" aria-hidden="true">
          <path
            d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="11" r="2.2" fill="var(--color-yellow)" />
        </svg>
        <h2 className="mx-auto mt-6 max-w-[26ch] text-[clamp(24px,2.8vw,36px)] font-bold leading-[1.12] tracking-[-0.025em]">
          We&apos;ll earn our reviews. Ask us for references.
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-[1.55] text-muted">
          Beeond is new — the founders&apos; work isn&apos;t. We&apos;re
          selective about who we take on, because at this depth the founders
          are the system. The logos will come; we&apos;d rather show you real
          work on the call than paste borrowed badges here.
        </p>
      </div>
    </section>
  );
}
