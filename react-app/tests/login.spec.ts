import { test, expect, Page } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    await page.locator('text=Login').click();
  })
  test('user should be able to navigate to the login page', async ({ page }) => {    
    await expect(page.locator('text=Email').first()).toBeVisible();

})})