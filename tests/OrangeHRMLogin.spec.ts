import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { loginData } from '../testdata/loginData';

test('Login Test', async ({ page }) => {
    const loginpage = new OrangeHRMLoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await loginpage.login(loginData.username, loginData.password);

    // FIX: wait for dashboard
    await page.waitForURL('**/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);

    console.log('Logged in successfully');
});