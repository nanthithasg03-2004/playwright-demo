"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const config_1 = require("./config/config");
console.log("ENV VALUE =", process.env.ENV);
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: 1,
    timeout: 30 * 1000,
    expect: {
        timeout: 5000
    },
    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright']
    ],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: config_1.config[process.env.ENV]?.baseURL,
        screenshot: 'only-on-failure',
        video: {
            mode: 'retain-on-failure',
            size: { width: 1280, height: 720 }
        },
        trace: 'on-first-retry',
        launchOptions: {
            slowMo: 200
        },
        actionTimeout: 10000,
        navigationTimeout: 15000
    },
    projects: [
        {
            name: 'chromium',
            use: { ...test_1.devices['Desktop Chrome'] }
        }
    ]
});
//# sourceMappingURL=playwright.config.js.map