"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Login and verify next page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await (0, test_1.expect)(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    console.log('Login successful');
});
(0, test_1.test)('Negative Login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('toomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await (0, test_1.expect)(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await (0, test_1.expect)(page.locator('#flash')).toContainText('Your username is invalid!');
    console.log('Login failed');
});
//# sourceMappingURL=herokuapp_login.spec.js.map