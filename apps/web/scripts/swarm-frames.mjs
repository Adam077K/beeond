/**
 * swarm-frames.mjs — frame-step a pinned scrub section for evidence.
 * usage: node scripts/swarm-frames.mjs <url> [p1,p2,...] [rootSelector] [prefix]
 */
import { chromium } from "@playwright/test";

const [
  url = "http://localhost:3001",
  list = "0.12,0.3,0.45,0.58,0.75,0.95",
  selector = "[data-swarm-root]",
  prefix = "v6-swarm",
] = process.argv.slice(2);
const targets = list.split(",").map(Number);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

for (const p of targets) {
  await page.evaluate(
    ([prog, sel]) => {
      const root = document.querySelector(sel);
      const top = root.getBoundingClientRect().top + window.scrollY;
      const runway = root.offsetHeight - window.innerHeight;
      window.scrollTo(0, top + Number(prog) * runway);
    },
    [p, selector],
  );
  await page.waitForTimeout(600);
  const measured = await page.evaluate(
    (sel) => document.querySelector(sel)?.getAttribute("data-p") ?? "n/a",
    selector,
  );
  const out = `build-evidence/${prefix}-${String(p).replace(".", "_")}.png`;
  await page.screenshot({ path: out });
  console.log("saved", out, "requested", p, "measured", measured);
}
await browser.close();
