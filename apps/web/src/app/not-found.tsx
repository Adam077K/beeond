import Link from "next/link";
import { hexPath } from "@/lib/hex";

/** Branded 404 — the hex-"o" stands in for the missing cell. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[1180px] flex-col justify-center px-7 py-24">
      <p className="text-[13.5px] font-medium tracking-[0.01em]">Beeond</p>
      <h1 className="mt-6 flex items-baseline text-[clamp(88px,14vw,180px)] font-bold leading-none tracking-[-0.04em]">
        4
        <svg
          viewBox="0 0 88 100"
          aria-hidden="true"
          className="mx-[0.04em] inline-block h-[0.72em] w-auto self-center"
        >
          <path
            d={hexPath(44, 50, 45)}
            fill="none"
            stroke="var(--color-yellow)"
            strokeWidth={10}
            strokeLinejoin="round"
          />
        </svg>
        4
      </h1>
      <p className="mt-6 max-w-[38ch] text-[19px] leading-[1.5] text-muted">
        This cell isn&apos;t part of the hive. The swarm checked.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="cta inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-ground"
        >
          Back to the hive
        </Link>
      </div>
    </main>
  );
}
