"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const OrangeHRM_LoginPage_1 = require("../pages/OrangeHRM_LoginPage");
const OrangeHRM_PIMPage_1 = require("../pages/OrangeHRM_PIMPage");
const loginData_1 = require("../testdata/loginData");
const pimData_1 = require("../testdata/pimData");
(0, test_1.test)('PIM Page', async ({ page }) => {
    const loginpage = new OrangeHRM_LoginPage_1.OrangeHRMLoginPage(page);
    const PIMpage = new OrangeHRM_PIMPage_1.PIMPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginpage.login(loginData_1.loginData.username, loginData_1.loginData.password);
    await PIMpage.addEmployee(pimData_1.pimData.firstName, pimData_1.pimData.lastName);
});
//# sourceMappingURL=OrangeHRMPIM.spec.js.map