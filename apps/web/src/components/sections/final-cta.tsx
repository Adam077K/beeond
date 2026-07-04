import { COPY } from "@/lib/brand.lock";
import { CtaButton } from "../cta-button";
import { HiveMark } from "../hive-mark";
import { Logo } from "../logo";

/**
 * Section 10 — final CTA + footer. Chapter 3: the rested hive, static payoff
 * on the page's one deep-black moment. Copy: POSITIONING §5 Section 10.
 */

export function FinalCtaSection() {
  return (
    <section id="footprint-call" data-scheme="dark" className="bg-deep text-ground">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-7 pb-16 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-20 lg:pt-40">
        <div data-reveal>
          <p className="text-[13px] font-medium text-ground/60">The next step</p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(34px,4.4vw,62px)] font-bold leading-[1.04] tracking-[-0.035em]">
            Your buyers are looking. Let&apos;s make sure they{" "}
            <span className="u-accent">find you</span>.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.55] text-ground/70">
            A 30-minute call with Yarden and Adam. We&apos;ll show you where
            your footprint has gaps, what it would take to close them, and
            whether Beeond is the right fit — no pitch deck, no pressure.
          </p>
          <div className="mt-9">
            <CtaButton href="mailto:hello@beeond.ai?subject=Footprint%20call" invert>
              {COPY.ctaFinal.en}
            </CtaButton>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-ground/55">
            We talk to every potential client personally. We&apos;re selective
            because we have to be — the founders are the system.
          </p>
        </div>
        <div data-reveal className="mx-auto w-full max-w-[500px]">
          <HiveMark scheme="dark" className="w-full" />
        </div>
      </div>

      <footer className="border-t border-ground/15">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-7 py-9 md:flex-row md:items-center md:justify-between">
          <a href="#main" className="text-[17px]" aria-label="Beeond — back to top">
            <Logo hexFill="yellow" />
          </a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-ground/70">
            <a className="footer-link" href="#channel-map">The swarm</a>
            <a className="footer-link" href="#how-it-works">How it works</a>
            <a className="footer-link" href="#founders">Founders</a>
            <a className="footer-link" href="#faq">FAQ</a>
          </nav>
          <p className="text-[11px] font-light tracking-[0.01em] text-ground/50">
            {COPY.launchHold.en}
          </p>
        </div>
      </footer>
    </section>
  );
}
