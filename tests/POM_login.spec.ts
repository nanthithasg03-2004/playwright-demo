import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/HerokuLoginPage';

test('POM Success Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

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
