import { test, expect } from '@playwright/test';

test('Click example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Click "Add/Remove Elements"
  await page.getByText('Add/Remove Elements').click();

  // Click Add Element button
  await page.getByRole('button', { name: 'Add Element' }).click();

  // Verify Delete button appears
  await expect(page.locator('button.added-manually')).toBeVisible();
});