"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const OrangeHRM_LoginPage_1 = require("../pages/OrangeHRM_LoginPage");
const OrangeHRM_DashboardPage_1 = require("../pages/OrangeHRM_DashboardPage");
const loginData_1 = require("../testdata/loginData");
(0, test_1.test)('Verify Dashboard', async ({ page }) => {
    const loginPage = new OrangeHRM_LoginPage_1.OrangeHRMLoginPage(page);
    const dashboardpage = new OrangeHRM_DashboardPage_1.OrangeHRMDashboardPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginPage.login(loginData_1.loginData.username, loginData_1.loginData.password);
    await dashboardpage.verifyDashboard();
    console.log('Dashboard verified successfully');
});
//# sourceMappingURL=OrangeHRMDashboard.spec.js.map