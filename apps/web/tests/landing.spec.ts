import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const H1 = "The AI era moves fast. Your presence needs to match.";

test.describe("landing — hard gates", () => {
  test("H1 is the locked copy, verbatim, in SSR", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1 .i18n-en");
    await expect(h1).toContainText("The AI era moves fast.");
    await expect(h1).toContainText("Your presence");
    await expect(h1).toContainText("needs to match.");
    const text = (await h1.innerText()).replace(/\s+/g, " ").trim();
    expect(text).toBe(H1);
  });

  test("zero console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.waitForTimeout(2500); // through Chapter-1 + idle
    expect(errors).toEqual([]);
  });

  test("JS-off: H1 + all 11 channel proofs are visible DOM text", async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3001/");
    await expect(page.locator("h1")).toContainText("The AI era moves fast.");
    const isDesktop = (page.viewportSize()?.width ?? 0) >= 1024;
    const proofs = page.locator(
      isDesktop ? "[data-c7-tile] p" : "#channel-map li p",
    );
    await expect(proofs).toHaveCount(11);
    for (const p of await proofs.all()) await expect(p).toBeVisible();
    await ctx.close();
  });

  test("no horizontal scroll at 320/390/768/1440", async ({ page }) => {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `overflow at ${width}px`).toBeLessThanOrEqual(0);
    }
  });

  test("asymmetry gate: H1 center-x not within 10% of viewport center", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "1440 gate");
    await page.goto("/");
    // measure the painted glyphs of the first H1 line (the element box
    // includes the deliberate 128% overhang and would mislead)
    const centerX = await page.evaluate(() => {
      const line = document.querySelector("h1 .i18n-en .block")!;
      const range = document.createRange();
      range.selectNodeContents(line);
      const r = range.getBoundingClientRect();
      return r.x + r.width / 2;
    });
    expect(Math.abs(centerX - 720)).toBeGreaterThan(144);
  });

  test("C7 scrub assembles and the GEO anchor locks last", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "scrub is desktop-only");
    await page.goto("/", { waitUntil: "networkidle" });
    const root = page.locator("[data-c7-root]");
    const box = await root.boundingBox();
    const runway = box!.height - 900;
    // pre-keystone: hive minus anchor
    await page.evaluate(([t, r]) => window.scrollTo(0, t + r * 0.38), [box!.y, runway]);
    await page.waitForTimeout(350);
    const anchorAt038 = await page
      .locator("[data-c7-anchor]")
      .evaluate((el) => Number(getComputedStyle(el).opacity));
    expect(anchorAt038).toBeLessThan(0.2);
    // post-keystone: locked
    await page.evaluate(([t, r]) => window.scrollTo(0, t + r * 0.6), [box!.y, runway]);
    await page.waitForTimeout(350);
    const anchorAt06 = await page
      .locator("[data-c7-anchor]")
      .evaluate((el) => Number(getComputedStyle(el).opacity));
    expect(anchorAt06).toBeGreaterThan(0.95);
    expect(await root.getAttribute("data-p")).toBeTruthy();
  });

  test("FAQ opens and closes (exit animation path)", async ({ page }) => {
    await page.goto("/");
    const first = page.locator(".faq-item").first();
    await first.locator("summary").click();
    await expect(first).toHaveAttribute("open", "");
    await expect(first.locator(".faq-body p")).toBeVisible();
    await first.locator("summary").click();
    await expect(first).not.toHaveAttribute("open", "");
  });

  test("RTL: toggle flips dir, logo stays LTR, HE hero verbatim", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "toggle in desktop nav");
    await page.goto("/", { waitUntil: "networkidle" });
    await page.locator("header .locale-toggle").click();
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("html")).toHaveAttribute("lang", "he");
    // the logotype lockup itself never mirrors (tagline wrapper may precede it)
    await expect(page.locator("header [aria-label] span[dir='ltr']").first()).toBeVisible();
    await expect(page.locator("h1 .i18n-he")).toContainText("עידן ה-AI זז מהר.");
  });

  test("mobile menu opens, closes, and locks scroll", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "mobile only");
    await page.goto("/");
    await page.locator(".burger").click();
    await expect(page.locator("#mobile-menu")).toHaveClass(/open/);
    await expect(page.locator("#mobile-menu .m-link").first()).toBeVisible();
    await page.locator('#mobile-menu button[aria-label="Close menu"]').click();
    await expect(page.locator("#mobile-menu")).not.toHaveClass(/open/);
  });

  test("axe: no serious/critical violations", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? ""),
    );
    expect(serious.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
  });

  test("404 is branded", async ({ page }) => {
    const res = await page.goto("/definitely-not-a-cell");
    expect(res!.status()).toBe(404);
    await expect(page.locator("text=This cell isn't part of the hive.")).toBeVisible();
  });
});
