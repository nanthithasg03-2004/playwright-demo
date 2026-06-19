import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { PIMPage } from '../pages/OrangeHRM_PIMPage';
import { loginData } from '../testdata/loginData';
import { pimData } from '../testdata/pimData';

test('PIM Page', async ({ page }) => {
    const loginpage = new OrangeHRMLoginPage(page);
    const PIMpage = new PIMPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginpage.login(loginData.username, loginData.password);
    await PIMpage.addEmployee(pimData.firstName, pimData.lastName);



})
