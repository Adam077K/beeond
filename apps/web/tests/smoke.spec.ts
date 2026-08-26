import { test, expect } from "@playwright/test";

/**
 * Placeholder suite. The v6 landing spec (23 assertions) was removed with the
 * v6 site on 2026-08-26; the real suite gets written against the new design.
 * This keeps the harness wired and provably green in the meantime.
 */
test("home renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
