#!/usr/bin/env node
/**
 * measure-scores — turns a real Lighthouse run into public/scores.json,
 * the ONLY source the C5 trust tile may render from. No artifact → no tile.
 * Usage: node scripts/measure-scores.mjs [path-to-lighthouse.json]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const src = process.argv[2] ?? "build-evidence/lighthouse-mobile.json";
const lh = JSON.parse(readFileSync(src, "utf8"));

const scores = {
  measuredAt: lh.fetchTime,
  lighthouseVersion: lh.lighthouseVersion,
  mobilePerformance: Math.round(lh.categories.performance.score * 100),
  mobileAccessibility: Math.round(lh.categories.accessibility.score * 100),
  lcpSeconds:
    Math.round((lh.audits["largest-contentful-paint"].numericValue / 1000) * 10) / 10,
  cls: lh.audits["cumulative-layout-shift"].numericValue,
};

writeFileSync(
  join(process.cwd(), "public", "scores.json"),
  JSON.stringify(scores, null, 2) + "\n",
);
console.log("scores.json written:", JSON.stringify(scores));
