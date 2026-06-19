import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { loginData } from '../testdata/loginData';


test('Login Test', async ({ page }) => {
    const loginpage = new OrangeHRMLoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginpage.login(loginData.username, loginData.password);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    console.log('Logged in successfully');
})

