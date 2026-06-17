import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
test('POM Success Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');




})