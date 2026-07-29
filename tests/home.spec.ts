import { expect, test } from "@playwright/test";

test("renders the private-contact senior backend portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Nahom Derese Gizaw" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected Systems" })).toBeVisible();
  await expect(page.getByText("gizawnahom5@gmail.com")).toHaveCount(0);
  await expect(page.getByText("Download Résumé")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /GitHub/ }).first()).toHaveAttribute("href", "https://github.com/gizawNahom");
});

test("section navigation updates and works without hover", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Skills" }).first().click();
  await expect(page.getByRole("heading", { name: "Technical Skills" })).toBeInViewport();
  await expect(page.getByRole("link", { name: "Skills" }).first()).toHaveAttribute("aria-current", "location");
});

test("retains factual case-study routes", async ({ page }) => {
  await page.goto("/case-studies/digital-wallet");
  await expect(page.getByRole("heading", { name: "Digital Wallet Transaction Capabilities" })).toBeVisible();
  await expect(page.getByText("event-sourced", { exact: false })).toHaveCount(0);

  await page.goto("/case-studies/dashen-superapp");
  await expect(page.getByRole("heading", { name: "Dashen Digital Onboarding" })).toBeVisible();
  await expect(page.getByText("SOAP/XML", { exact: false })).toHaveCount(0);
});
