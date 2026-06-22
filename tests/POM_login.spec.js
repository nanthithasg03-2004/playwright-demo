"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const HerokuLoginPage_1 = require("../pages/HerokuLoginPage");
(0, test_1.test)('POM Success Login Test', async ({ page }) => {
    const loginPage = new HerokuLoginPage_1.LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    if (page.url() === 'https://the-internet.herokuapp.com/secure') {
        console.log('Login Successful');
    }
    else {
        const errormsg = await loginPage.getErrorMessage().textContent();
        console.log(errormsg);
    }
});
//# sourceMappingURL=POM_login.spec.js.map