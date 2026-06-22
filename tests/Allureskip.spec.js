"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.skip('Skip based on condition', async ({ page }) => {
    await page.goto('https://example.com');
});
//# sourceMappingURL=Allureskip.spec.js.map