# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixturePIM.spec.ts >> OrangeHRM add employee test
- Location: tests\fixturePIM.spec.ts:3:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'users')
```

# Test source

```ts
  1  | import { test } from '../fixtures/baseFixture';
  2  | 
  3  | test('OrangeHRM add employee test', async ({ pageManager, envData }) => {
  4  | 
  5  |     await pageManager.loginPage.login(
> 6  |         envData.users.admin.username,
     |                 ^ TypeError: Cannot read properties of undefined (reading 'users')
  7  |         envData.users.admin.password
  8  |     );
  9  | 
  10 |     await pageManager.pimPage.addEmployee(
  11 |         envData.employee.firstName,
  12 |         envData.employee.lastName
  13 |     );
  14 | 
  15 | });
```