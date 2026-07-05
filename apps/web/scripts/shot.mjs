/**
 * shot.mjs — evidence screenshots for the build loop.
 * usage: node scripts/shot.mjs <url> <out.png> [width] [height] [lang] [fullpage|scrollY]
 */
import { chromium } from "@playwright/test";

const [url, out, w = "1440", h = "900", lang = "en", mode = ""] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(w), height: Number(h) },
});
await page.goto(url, { waitUntil: "networkidle" });
if (lang === "he") {
  await page.evaluate(() => {
    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";
  });
}
if (mode && mode !== "fullpage" && !Number.isNaN(Number(mode))) {
  await page.evaluate((y) => window.scrollTo(0, y), Number(mode));
}
if (mode === "fullpage") {
  // walk the page so every [data-reveal] fires and scrubs reach rest
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
  });
}
await page.waitForTimeout(2200); // let one-shot reveals settle
await page.screenshot({ path: out, fullPage: mode === "fullpage" });
await browser.close();
console.log("saved", out);
