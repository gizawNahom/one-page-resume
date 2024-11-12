import { test, expect } from "@playwright/test";

test("hero matches visual snapshot", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  await expect(page.getByTestId("splashScreen")).not.toBeVisible();

  await expect(page).toHaveScreenshot();
});
