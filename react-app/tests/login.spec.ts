import { test, expect } from '@playwright/test';

const playwrightUrl = process.env.NODE_ENV === 'production' ? process.env.STAGING_URL : 'http://127.0.0.1:3000';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(playwrightUrl);
    await page.locator('text=Login').click();
  });
  test('user should be able to navigate to the login page', async ({ page }) => {
    await expect(page.locator('text=Email').first()).toBeVisible();
  });
  test('Demo User button should be visible', async ({ page }) => {
    await expect(page.locator('#demoLogin').first()).toBeVisible();
  });
  test('Clicking the Demo User button logs the user in', async ({ page }) => {
    const demoButton = page.locator('#demoLogin').first();
    await demoButton.click();

    const demoText = page.locator('.dashboard__title').first();

    await expect(demoText).toBeVisible();
  });
});
