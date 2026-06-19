# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixtureLogin.spec.ts >> OrangeHRM login test
- Location: tests\fixtureLogin.spec.ts:3:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { OrangeHRM_LoginLocators } from '../locators/OrangeHRM_LoginLocators';
  3  | 
  4  | export class OrangeHRMLoginPage {
  5  |     constructor(private page: Page) { }
  6  | 
  7  |     async login(username: string, password: string) {
  8  | 
> 9  |         await this.page.locator(OrangeHRM_LoginLocators.usernameTextbox).fill(username);
     |                                                                          ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  10 |         await this.page.locator(OrangeHRM_LoginLocators.passwordTextbox).fill(password);
  11 |         await this.page.locator(OrangeHRM_LoginLocators.loginButton).click();
  12 |     }
  13 | 
  14 |     async verifyErrorMessage() {
  15 |         await expect(this.page.locator(OrangeHRM_LoginLocators.errorMessage)).toHaveText('Invalid credentials123 ');
  16 |     }
  17 | }
  18 | 
```