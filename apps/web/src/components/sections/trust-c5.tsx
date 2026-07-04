import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Section — C5 build-time trust strip. HONESTY RULE: the performance signal
 * renders ONLY from a real measured artifact (public/scores.json, written by
 * scripts/measure-scores.mjs at gate time). Below threshold or missing → the
 * tile is dropped, never faked. Business-outcome framing — not a self-issued
 * certificate.
 */
type Scores = {
  measuredAt: string;
  mobilePerformance: number; // 0–100
  mobileAccessibility: number;
  lcpSeconds: number;
};

function readScores(): Scores | null {
  try {
    const p = join(process.cwd(), "public", "scores.json");
    if (!existsSync(p)) return null;
    const s = JSON.parse(readFileSync(p, "utf8")) as Scores;
    if (s.mobilePerformance < 90 || s.mobileAccessibility < 95) return null; // fix the site or drop the badge
    return s;
  } catch {
    return null;
  }
}

export function TrustC5Section() {
  const scores = readScores();

  const signals: Array<{ k: string; v: string } | null> = [
    {
      k: "Machine-readable by design",
      v: "Organization, Service and FAQ structured data ship on this page — the same markup we build for clients.",
    },
    {
      k: "AI crawlers welcome",
      v: "GPTBot, ClaudeBot and PerplexityBot are explicitly allowed here. Being readable is the point.",
    },
    scores
      ? {
          k: "Built to the standard we sell",
          v: `This page measured ${scores.mobilePerformance}/100 mobile performance at build time (${scores.measuredAt.slice(0, 10)}) — the bar every client site gets held to.`,
        }
      : null,
  ];

  return (
    <section className="mx-auto max-w-[1180px] px-7 py-16 lg:py-20">
      <div data-reveal className="border-y border-hairline py-9">
        <p className="text-[13px] font-medium">
          We grade ourselves.{" "}
          <span className="font-normal text-muted">
            These are the signals we build into every client&apos;s site — live on ours.
          </span>
        </p>
        <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.1fr]">
          {signals.filter(Boolean).map((s) => (
            <div key={s!.k} className="flex gap-4">
              <svg viewBox="0 0 20 22" className="mt-0.5 size-4 shrink-0" aria-hidden="true">
                <path
                  d="M10 1 18 6.5v9L10 21l-8-5.5v-9Z"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="11" r="2.4" fill="var(--color-yellow)" />
              </svg>
              <div>
                <h3 className="text-[14.5px] font-semibold">{s!.k}</h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-muted">{s!.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
