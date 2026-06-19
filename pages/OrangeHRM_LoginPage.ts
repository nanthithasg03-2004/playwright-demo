import { Page, expect } from '@playwright/test';
import { OrangeHRM_LoginLocators } from '../locators/OrangeHRM_LoginLocators';

export class OrangeHRMLoginPage {
    constructor(private page: Page) { }

    async login(username: string, password: string) {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/');

        await this.page.locator(OrangeHRM_LoginLocators.usernameTextbox).fill(username);
        await this.page.locator(OrangeHRM_LoginLocators.passwordTextbox).fill(password);
        await this.page.locator(OrangeHRM_LoginLocators.loginButton).click();
    }

    async verifyErrorMessage() {
        await expect(this.page.locator(OrangeHRM_LoginLocators.errorMessage)).toHaveText('Invalid credentials123 ');
    }
}
