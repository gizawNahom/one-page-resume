import { expect, test } from "@playwright/test";

test("respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.body, "::before").display)).toBe("none");
});

test("updates the desktop spotlight from pointer movement", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.getByRole("link", { name: "About", exact: true }).click();
  await page.evaluate(() => {
    window.dispatchEvent(new PointerEvent("pointermove", { clientX: 320, clientY: 420 }));
  });
  await expect.poll(() => page.locator("html").evaluate((element) => getComputedStyle(element).getPropertyValue("--spotlight-x").trim())).toBe("320px");
  await expect.poll(() => page.locator("html").evaluate((element) => getComputedStyle(element).getPropertyValue("--spotlight-y").trim())).toBe("420px");
});
