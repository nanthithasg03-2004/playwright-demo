import { test } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { negativeData } from '../testdata/negativeLoginData';

test('NegativeLogin', async ({ page }) => {
    const neglogin = new OrangeHRMLoginPage(page);
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await neglogin.login(negativeData.username, negativeData.password);
    // await neglogin.verifyErrorMessage();


    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.waitForLoadState('networkidle');

    await neglogin.login(negativeData.username, negativeData.password);

    await neglogin.verifyErrorMessage();



});





