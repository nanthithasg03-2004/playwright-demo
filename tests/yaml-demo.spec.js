"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yaml = __importStar(require("js-yaml"));
// 1. Tell the computer where the YAML file is
const yamlPath = path.resolve(__dirname, '../testdata/searchData.yaml');
// 2. Read the YAML file as plain text
const rawText = fs.readFileSync(yamlPath, 'utf8');
// 3. Convert the YAML text into a JavaScript list that our code can understand
const testCases = yaml.load(rawText);
// 4. For every item in our list, run a test!
for (const item of testCases) {
    (0, test_1.test)(`Running ${item.testId} - Search for ${item.query}`, async ({ page }) => {
        // Go to Google
        await page.goto('https://www.google.com');
        // Find the Google search box, type the query, and press Enter
        const searchBox = page.locator('[name="q"]');
        await searchBox.fill(item.query);
        await searchBox.press('Enter');
        // Check if the title of the page has our expected word
        await (0, test_1.expect)(page).toHaveTitle(new RegExp(item.expected, 'i'));
    });
}
//# sourceMappingURL=yaml-demo.spec.js.map