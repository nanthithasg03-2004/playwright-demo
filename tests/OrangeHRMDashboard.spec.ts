import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { OrangeHRMDashboardPage } from '../pages/OrangeHRM_DashboardPage';
import { loginData } from '../testdata/loginData';

test('Verify Dashboard', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    const dashboardpage = new OrangeHRMDashboardPage(page);


    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginPage.login(loginData.username, loginData.password);
    await dashboardpage.verifyDashboard();
    console.log('Dashboard verified successfully');
})











