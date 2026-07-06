/**
 * cdp-trace.mjs — REAL device-condition trace (the brief's primary LCP
 * artifact, vs Lighthouse's lantern simulation): Slow-4G (150ms RTT /
 * 1.6Mbps) + 4× CPU throttle at 412×915. Reports LCP, CLS, and INP-style
 * worst interaction duration (Event Timing) for FAQ open/close + menu.
 */
import { chromium } from "@playwright/test";

const url = process.argv[2] ?? "http://localhost:3001";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 412, height: 915 } });
const page = await ctx.newPage();

await page.addInitScript(() => {
  window.__lcp = 0;
  window.__cls = 0;
  window.__ints = [];
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__lcp = e.startTime;
  }).observe({ type: "largest-contentful-paint", buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
  }).observe({ type: "layout-shift", buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__ints.push(e.duration);
  }).observe({ type: "event", durationThreshold: 16, buffered: true });
});

const cdp = await ctx.newCDPSession(page);
await cdp.send("Network.enable");
await cdp.send("Network.emulateNetworkConditions", {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (0.75 * 1024 * 1024) / 8,
});
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

// real interactions under throttle: FAQ open + close, menu open + close
await page.locator(".faq-item summary").first().scrollIntoViewIfNeeded();
await page.locator(".faq-item summary").first().click();
await page.waitForTimeout(600);
await page.locator(".faq-item summary").first().click();
await page.waitForTimeout(600);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await page.locator(".burger").click();
await page.waitForTimeout(700);
await page.locator('#mobile-menu button[aria-label="Close menu"]').click();
await page.waitForTimeout(700);

const out = await page.evaluate(() => ({
  lcpMs: Math.round(window.__lcp),
  cls: Number(window.__cls.toFixed(4)),
  interactions: window.__ints.length,
  worstInteractionMs: Math.max(0, ...window.__ints),
}));
console.log(JSON.stringify(out, null, 2));
await browser.close();
