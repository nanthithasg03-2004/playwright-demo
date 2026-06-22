"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('My first test - open Google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await (0, test_1.expect)(page).toHaveTitle(/Google/);
});
//# sourceMappingURL=firstTest.spec.js.map