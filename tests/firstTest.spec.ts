import { test, expect } from '@playwright/test';

test('My first test - open Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);
});