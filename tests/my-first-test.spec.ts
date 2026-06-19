import { test, expect } from '@playwright/test';

test('My first custom test', async ({ page }) => {
  await page.goto('https://example.com');

  console.log(await page.title());

  await expect(page).toHaveTitle(/Example/);
});