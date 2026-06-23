import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { PIMPage } from '../pages/OrangeHRM_PIMPage';
import { loginData } from '../testdata/loginData';
import { pimData } from '../testdata/pimData';

test('PIM Page', async ({ page }) => {

    const loginpage = new OrangeHRMLoginPage(page);
    const pimpage = new PIMPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Login
    await loginpage.login(loginData.username, loginData.password);

    await page.waitForURL('**/dashboard/**');
    await page.waitForLoadState('networkidle');

    // Navigate to PIM ONCE
    await page.getByRole('link', { name: 'PIM' }).click();

    await expect(page).toHaveURL(/pim/);
    await page.waitForLoadState('networkidle');

    // Add employee
    await pimpage.addEmployee(pimData.firstName, pimData.lastName);
});