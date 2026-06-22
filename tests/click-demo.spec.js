"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Click example', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // Click "Add/Remove Elements"
    await page.click('text=Add/Remove Elements');
    // Click Add Element button
    await page.click('button:text("Add Element")');
    // Verify Delete button appears
    await (0, test_1.expect)(page.locator('button.added-manually')).toBeVisible();
});
//# sourceMappingURL=click-demo.spec.js.map