"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async openLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username, password) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button[type="submit"]').click();
    }
    getErrorMessage() {
        return this.page.locator('#flash');
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=HerokuLoginPage.js.map