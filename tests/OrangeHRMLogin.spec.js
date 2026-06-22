"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const OrangeHRM_LoginPage_1 = require("../pages/OrangeHRM_LoginPage");
const loginData_1 = require("../testdata/loginData");
(0, test_1.test)('Login Test', async ({ page }) => {
    const loginpage = new OrangeHRM_LoginPage_1.OrangeHRMLoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginpage.login(loginData_1.loginData.username, loginData_1.loginData.password);
    await (0, test_1.expect)(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    console.log('Logged in successfully');
});
//# sourceMappingURL=OrangeHRMLogin.spec.js.map