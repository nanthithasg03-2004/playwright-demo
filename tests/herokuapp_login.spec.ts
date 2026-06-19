import { test, expect } from '@playwright/test';
test('Login and verify next page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    console.log('Login successful');


})

test('Negative Login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('toomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await expect(page.locator('#flash')).toContainText('Your username is invalid!')
    console.log('Login failed');
})






