# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRMPIM.spec.ts >> PIM Page
- Location: tests\OrangeHRMPIM.spec.ts:7:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[text()="PIM"]')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { PIMLocators } from '../locators/OrangeHRM_PIMLocators';
  3  | 
  4  | export class PIMPage {
  5  |     constructor(private page: Page) { }
  6  | 
  7  |     async addEmployee(firstName: string, lastName: string) {
> 8  |         await this.page.locator(PIMLocators.PIMMenu).click();
     |                                                      ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  9  |         await this.page.locator(PIMLocators.AddButton).click();
  10 |         await this.page.locator(PIMLocators.FirstName).fill(firstName);
  11 |         await this.page.locator(PIMLocators.LastName).fill(lastName);
  12 |         await this.page.locator(PIMLocators.SaveButton).click();
  13 | 
  14 | 
  15 | 
  16 | 
  17 |     }
  18 | }
  19 | 
```