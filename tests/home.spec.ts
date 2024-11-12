import { test, expect } from "@playwright/test";

test("hero matches visual snapshot", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  await expect(page.getByTestId("splashScreen")).not.toBeVisible();

  await expect(page).toHaveScreenshot();
});

test("about matches visual snapshot", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/");

  await expect(page.getByTestId("splashScreen")).not.toBeVisible();
  const aboutSection = page.getByTestId("aboutSection");

  await expect(
    await aboutSection.screenshot({
      animations: "disabled",
    })
  ).toMatchSnapshot({ maxDiffPixelRatio: 0.12 });
});
