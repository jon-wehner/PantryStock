import { test, expect, Page } from '@playwright/test';

test.describe('Login', () => {
  test('user should be able to navigate to the login page', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000')
    await page.locator('text=Login').click()
    await expect(page.locator('text=Email'))

})})