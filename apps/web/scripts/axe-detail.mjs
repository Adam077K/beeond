/** axe-detail.mjs — print serious/critical violation nodes (debug aid). */
import { chromium } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

const url = process.argv[2] ?? "http://localhost:3001";
const width = Number(process.argv[3] ?? 412);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height: 915 } });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });
const results = await new AxeBuilder({ page }).analyze();
for (const v of results.violations) {
  if (!["serious", "critical"].includes(v.impact ?? "")) continue;
  console.log(`\n${v.id} (${v.impact})`);
  for (const n of v.nodes) {
    console.log("  -", n.target.join(" "), "::", n.html.slice(0, 140));
    console.log("    ", n.failureSummary?.split("\n")[1] ?? "");
  }
}
await browser.close();
