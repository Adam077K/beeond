/**
 * channels.ts — the C7 hive data model. 11 channels from OFFER_SPEC.md §3
 * clusters; every proof line traces to a Definition-of-Done row (DoD-N).
 * Proof wording is CMO-reviewable copy (BUILD_LOG D-item) but never invents
 * a claim. The GEO cell is THE anchor — the single yellow in the hive.
 */
import { axialToPixel } from "@/lib/hex";

export type Channel = {
  id: string;
  name: string;
  proof: string;
  /** axial hex coords relative to the anchor */
  q: number;
  r: number;
  /** hive-assembly order (outer ring first, anchor LAST) */
  reveal: number;
  anchor?: boolean;
};

/** hex tile metrics (px, desktop stage) — pointy-top */
export const TILE = { h: 196, get w() { return Math.round(this.h * 0.866); } } as const;

/** axial size = circumradius = h/2; small breathing gap between cells */
const SIZE = TILE.h / 2 + 4;

export const CHANNELS: Channel[] = [
  // ── ring 2 outposts — first to land (reveal 1–4) ──
  {
    id: "pr",
    name: "Digital PR & backlinks",
    proof: "The deliverable is the published placement — not the pitch count.",
    q: 2, r: -1, reveal: 1,
  },
  {
    id: "monitoring",
    name: "Brand monitoring",
    proof: "Every mention categorized and routed — amplify, flag, or note.",
    q: -1, r: -1, reveal: 2,
  },
  {
    id: "trust",
    name: "Trust & case studies",
    proof: "Real names, real numbers — reviews we earn, not buy.",
    q: -2, r: 1, reveal: 3,
  },
  {
    id: "reporting",
    name: "Rank tracking & reporting",
    proof: "What changed, and what we'd do about it — never a screenshot dump.",
    q: 1, r: 1, reveal: 4,
  },
  // ── ring 1 — the working core (reveal 5–10) ──
  {
    id: "seo",
    name: "SEO content engine",
    proof: "Long-form built to rank and be cited by AI — in your voice.",
    q: 1, r: 0, reveal: 5,
  },
  {
    id: "linkedin",
    name: "LinkedIn organic",
    proof: "Insight, founder POV, customer stories — never filler.",
    q: 1, r: -1, reveal: 6,
  },
  {
    id: "paid",
    name: "Paid — Google & LinkedIn",
    proof: "Documented hypotheses, tracked against your own baseline.",
    q: 0, r: -1, reveal: 7,
  },
  {
    id: "email",
    name: "Email lifecycle",
    proof: "Every email does one job — welcome, activate, nurture, win back.",
    q: -1, r: 0, reveal: 8,
  },
  {
    id: "cro",
    name: "Landing pages & CRO",
    proof: "Hypothesis before launch, learnings logged — failures count.",
    q: -1, r: 1, reveal: 9,
  },
  {
    id: "founder",
    name: "Founder-led content",
    proof: "Written from the founder — never a name-swapped ghost post.",
    q: 0, r: 1, reveal: 10,
  },
  // ── THE ANCHOR — locks last, the keystone (reveal 11) ──
  {
    id: "geo",
    name: "GEO — AI-search visibility",
    proof: "Be the answer when your buyer asks an AI.",
    q: 0, r: 0, reveal: 11, anchor: true,
  },
];

/** pixel offset of a channel's tile center from the hive center */
export function tileOffset(ch: Channel): { x: number; y: number } {
  return axialToPixel(ch.q, ch.r, SIZE);
}

/** stage bounds (px) that contain every tile plus a little air */
export function stageBounds() {
  let maxX = 0;
  let maxY = 0;
  for (const ch of CHANNELS) {
    const { x, y } = tileOffset(ch);
    maxX = Math.max(maxX, Math.abs(x) + TILE.w / 2);
    maxY = Math.max(maxY, Math.abs(y) + TILE.h / 2);
  }
  return { w: Math.ceil(maxX * 2) + 8, h: Math.ceil(maxY * 2) + 8 };
}
