"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('debug visual test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    await page.locator('textarea[name="q"]').click();
    await page.fill('textarea[name="q"]', 'playwright');
    (0, test_1.expect)(1).toBe(2);
});
//# sourceMappingURL=Allurefail.spec.js.map