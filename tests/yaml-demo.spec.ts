import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

// 1. Tell the computer where the YAML file is
const yamlPath = path.resolve(__dirname, '../testdata/data.yml');

// 2. Read the YAML file as plain text
const rawText = fs.readFileSync(yamlPath, 'utf8');

// 3. Convert the YAML text into a JavaScript list that our code can understand
const testCasesObj = yaml.load(rawText) as any;

const testCases = Object.keys(testCasesObj).map(key => ({
  testId: key,
  query: testCasesObj[key].firstName + ' ' + testCasesObj[key].lastName,
  expected: testCasesObj[key].firstName
}));

// 4. For every item in our list, run a test!
for (const item of testCases) {
  test(`Running ${item.testId} - Search for ${item.query}`, async ({ page }) => {

    // Go to Google
    await page.goto('https://www.google.com');

    // Find the Google search box, type the query, and press Enter
    const searchBox = page.locator('[name="q"]');
    await searchBox.fill(item.query);
    await searchBox.press('Enter');

    // Check if the title of the page has our expected word
    await expect(page).toHaveTitle(new RegExp(item.expected, 'i'));
  });
}
