# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixturePIM.spec.ts >> OrangeHRM add employee test
- Location: tests\fixturePIM.spec.ts:3:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'username')
```

# Test source

```ts
  1  | import { test } from '../fixtures/baseFixture';
  2  | 
  3  | test('OrangeHRM add employee test', async ({ pageManager, envData }) => {
  4  | 
  5  | 
  6  |     await pageManager.loginPage.login(
> 7  |         envData.username,
     |                 ^ TypeError: Cannot read properties of undefined (reading 'username')
  8  |         envData.password
  9  |     );
  10 | 
  11 | 
  12 |     await pageManager.pimPage.addEmployee(
  13 |         envData.employee.firstName,
  14 |         envData.employee.lastName
  15 |     );
  16 | 
  17 | });
```