import { expect, test } from "@playwright/test";

test("renders the private-contact senior backend portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Nahom Gizaw" })).toBeVisible();
  await expect(page.locator("#systems")).toBeAttached();
  await expect(page.getByText("gizawnahom5@gmail.com")).toHaveCount(0);
  await expect(page.getByText("Download Résumé")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /GitHub/ }).first()).toHaveAttribute("href", "https://github.com/gizawNahom");
});

test("section navigation updates and works without hover", async ({ page }) => {
  await page.goto("/");
  await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });
  await page.getByRole("link", { name: "Skills" }).first().click();
  await expect(page.locator("#skills")).toBeInViewport();
  await expect(page.getByRole("link", { name: "Skills" }).first()).toHaveAttribute("aria-current", "location");
});

test("desktop navigation tracks short and final sections while scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.getByRole("link", { name: "Experience" })).toHaveAttribute("aria-current", "location");

  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(page.getByRole("link", { name: "Skills" })).toHaveAttribute("aria-current", "location");
});

test("single-column layouts do not show a horizontal section navigation strip", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator(".section-nav")).toBeHidden();
});

test("mobile section header uses a sticky presentation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const indicator = page.locator(".mobile-section-indicator");
  await expect(indicator).toHaveText("About");
  await expect(indicator).toHaveCSS("position", "sticky");
  await expect(indicator).toHaveCSS("font-size", "16px");
  await expect(page.getByRole("heading", { name: "About" })).toHaveCSS("width", "1px");
});

test("retains factual case-study routes", async ({ page }) => {
  await page.goto("/case-studies/digital-wallet");
  await expect(page.getByRole("heading", { name: "Digital Wallet Transaction Capabilities" })).toBeVisible();
  await expect(page.getByText("event-sourced", { exact: false })).toHaveCount(0);

  await page.goto("/case-studies/dashen-superapp");
  await expect(page.getByRole("heading", { name: "Dashen Digital Onboarding" })).toBeVisible();
  await expect(page.getByText("SOAP/XML", { exact: false })).toHaveCount(0);
});
