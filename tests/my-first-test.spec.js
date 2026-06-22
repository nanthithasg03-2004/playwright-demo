"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('My first custom test', async ({ page }) => {
    await page.goto('https://example.com');
    console.log(await page.title());
    await (0, test_1.expect)(page).toHaveTitle(/Example/);
});
//# sourceMappingURL=my-first-test.spec.js.map