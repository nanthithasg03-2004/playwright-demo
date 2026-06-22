"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const OrangeHRM_LoginPage_1 = require("../pages/OrangeHRM_LoginPage");
const negativeLoginData_1 = require("../testdata/negativeLoginData");
(0, test_1.test)('NegativeLogin', async ({ page }) => {
    const neglogin = new OrangeHRM_LoginPage_1.OrangeHRMLoginPage(page);
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await neglogin.login(negativeData.username, negativeData.password);
    // await neglogin.verifyErrorMessage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForLoadState('networkidle');
    await neglogin.login(negativeLoginData_1.negativeData.username, negativeLoginData_1.negativeData.password);
    await neglogin.verifyErrorMessage();
});
//# sourceMappingURL=OrangeHRMLogin_NegativeData.spec.js.map