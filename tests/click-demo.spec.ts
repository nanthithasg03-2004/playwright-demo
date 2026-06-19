import { test, expect } from '@playwright/test';

test('Click example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Click "Add/Remove Elements"
  await page.click('text=Add/Remove Elements');

  // Click Add Element button
  await page.click('button:text("Add Element")');

  // Verify Delete button appears
  await expect(page.locator('button.added-manually')).toBeVisible();
});