import { expect, test } from "@playwright/test";

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 1024, height: 768 },
  { name: "mobile", width: 390, height: 844 },
]) {
  test(`${viewport.name} portfolio verification`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await expect(page.locator("body")).toContainText("Senior Backend Engineer");
    await expect(page.locator("body")).toContainText("Layout inspired by Brittany Chiang's portfolio");
    await page.screenshot({ path: `test-results/portfolio-${viewport.name}.png`, fullPage: true, animations: "disabled" });
  });
}
