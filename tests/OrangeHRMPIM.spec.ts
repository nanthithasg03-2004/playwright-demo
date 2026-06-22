import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { PIMPage } from '../pages/OrangeHRM_PIMPage';
import { loginData } from '../testdata/loginData';
import { pimData } from '../testdata/pimData';

test('PIM Page', async ({ page }) => {
    const loginpage = new OrangeHRMLoginPage(page);
    const PIMpage = new PIMPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await loginpage.login(loginData.username, loginData.password);

    // FIX 1: wait for dashboard
    await page.waitForURL('**/dashboard/index');

    // FIX 2: go to PIM explicitly (safer)
    await page.locator('a[href*="pim"]').click();

    // FIX 3: ensure PIM page is loaded
    await expect(page).toHaveURL(/pim/);

    await PIMpage.addEmployee(pimData.firstName, pimData.lastName);
});