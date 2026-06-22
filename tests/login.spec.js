"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// Positive scenario
(0, test_1.test)('Valid login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await (0, test_1.expect)(page.locator('#flash')).toContainText('You logged into a secure area!');
});
//  Negative scenario
(0, test_1.test)('Invalid login test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('button[type="submit"]');
    await (0, test_1.expect)(page.locator('#flash')).toContainText('Your username is invalid!');
});
//# sourceMappingURL=login.spec.js.map