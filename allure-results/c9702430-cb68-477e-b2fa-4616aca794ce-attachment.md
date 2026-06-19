# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Allurefail.spec.ts >> Intentional Fail
- Location: tests\Allurefail.spec.ts:2:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 1
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | test('Intentional Fail', async ({ page }) => {
> 3 |     expect(1).toBe(2);
    |               ^ Error: expect(received).toBe(expected) // Object.is equality
  4 | });
```