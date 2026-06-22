"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrangeHRMLoginPage = void 0;
const test_1 = require("@playwright/test");
const OrangeHRM_LoginLocators_1 = require("../locators/OrangeHRM_LoginLocators");
class OrangeHRMLoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async login(username, password) {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
        await this.page.locator(OrangeHRM_LoginLocators_1.OrangeHRM_LoginLocators.usernameTextbox).fill(username);
        await this.page.locator(OrangeHRM_LoginLocators_1.OrangeHRM_LoginLocators.passwordTextbox).fill(password);
        await this.page.locator(OrangeHRM_LoginLocators_1.OrangeHRM_LoginLocators.loginButton).click();
    }
    async verifyErrorMessage() {
        await (0, test_1.expect)(this.page.locator(OrangeHRM_LoginLocators_1.OrangeHRM_LoginLocators.errorMessage)).toHaveText('Invalid credentials123 ');
    }
}
exports.OrangeHRMLoginPage = OrangeHRMLoginPage;
//# sourceMappingURL=OrangeHRM_LoginPage.js.map