# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixturePIM.spec.ts >> OrangeHRM add employee test
- Location: tests\fixturePIM.spec.ts:3:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[text()="PIM"]')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
        - separator [ref=e40]
        - paragraph [ref=e42]: Or login with
        - generic "123541&" [ref=e44] [cursor=pointer]:
          - paragraph [ref=e45]: 123541&
      - generic [ref=e46]:
        - generic [ref=e47]:
          - link [ref=e48] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e54] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e57] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e60]:
          - paragraph [ref=e61]: OrangeHRM OS 5.8
          - paragraph [ref=e62]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e63] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e65]
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