# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRMLogin.spec.ts >> Login Test
- Location: tests\OrangeHRMLogin.spec.ts:6:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
  3  | import { loginData } from '../testdata/loginData';
  4  | 
  5  | 
  6  | test('Login Test', async ({ page }) => {
  7  |     const loginpage = new OrangeHRMLoginPage(page);
  8  | 
  9  |     await page.goto('https://opensource-demo.orangehrmlive.com/');
  10 |     await loginpage.login(loginData.username, loginData.password);
> 11 |     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  12 |     console.log('Logged in successfully');
  13 | })
  14 | 
  15 | 
```