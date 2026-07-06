/**
 * scrub-fps.mjs — frame-time capture for the swarm showpiece scrub under
 * 4× CPU throttle at 1440. Scrolls the full runway in small steps while a
 * rAF probe records frame deltas; reports avg / worst / frames >33ms.
 */
import { chromium } from "@playwright/test";

const url = process.argv[2] ?? "http://localhost:3001";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const cdp = await ctx.newCDPSession(page);
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const result = await page.evaluate(async () => {
  const root = document.querySelector("[data-swarm-root]");
  const top = root.getBoundingClientRect().top + window.scrollY;
  const runway = root.offsetHeight - window.innerHeight;
  const deltas = [];
  let last = performance.now();
  let running = true;
  const probe = () => {
    const now = performance.now();
    deltas.push(now - last);
    last = now;
    if (running) requestAnimationFrame(probe);
  };
  requestAnimationFrame(probe);
  const steps = 120;
  for (let i = 0; i <= steps; i++) {
    window.scrollTo(0, top + (i / steps) * runway);
    await new Promise((r) => setTimeout(r, 33));
  }
  running = false;
  deltas.shift();
  const avg = deltas.reduce((a, b) => a + b, 0) / deltas.length;
  const worst = Math.max(...deltas);
  const over33 = deltas.filter((d) => d > 33.4).length;
  return { frames: deltas.length, avgMs: +avg.toFixed(1), worstMs: +worst.toFixed(1), over33 };
});
console.log(JSON.stringify(result));
await browser.close();
