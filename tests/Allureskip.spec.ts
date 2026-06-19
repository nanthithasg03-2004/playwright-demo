import { test } from '@playwright/test';

test.skip('Skip based on condition', async ({ page }) => {
    await page.goto('https://example.com');
});