import { test, expect } from '@playwright/test';

test('visual verification', async ({ page }) => {
  // 1. Homepage
  await page.goto('http://localhost:3000');
  await page.setViewportSize({ width: 1280, height: 1600 }); // Large height to see more

  // Verify copy
  await expect(page.locator('body')).toContainText('Senior Software Engineer');
  await expect(page.locator('body')).toContainText('Selected Case Studies');
  await expect(page.locator('body')).not.toContainText("Some Things I've Built");

  await page.screenshot({ path: 'tests/verification_artifacts/homepage.png' });

  // 2. Click Digital Wallet Link
  await page.click('text=Digital Wallet');
  await page.waitForURL('**/case-studies/digital-wallet');
  await page.screenshot({ path: 'tests/verification_artifacts/wallet.png' });

  // 3. Back and Click SuperApp
  await page.goto('http://localhost:3000');
  await page.click('text=Dashen SuperApp');
  await page.waitForURL('**/case-studies/dashen-superapp');
  await page.screenshot({ path: 'tests/verification_artifacts/superapp.png' });
});
