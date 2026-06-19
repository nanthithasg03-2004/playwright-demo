import { test, expect } from '@playwright/test';

test('debug visual test', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(3000);

    await page.locator('textarea[name="q"]').click();

    await page.fill('textarea[name="q"]', 'playwright');

    expect(1).toBe(2);
});