import { defineConfig, devices } from '@playwright/test';
import { config } from './config/config';

console.log("ENV VALUE =", process.env.ENV);
console.log("BROWSER VALUE =", process.env.BROWSER);
console.log("THREADS VALUE =", process.env.THREADS);

const env = process.env.ENV || 'qa';
const browser = process.env.BROWSER || 'chromium';
const threads = process.env.THREADS ? parseInt(process.env.THREADS) : 2;

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: threads,

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
    headless: true,

    viewport: { width: 1280, height: 720 },

    baseURL: config[env as keyof typeof config]?.baseURL,

    screenshot: 'only-on-failure',

    video: {
      mode: 'retain-on-failure',
      size: { width: 1280, height: 720 }
    },

    trace: 'on-first-retry',

    launchOptions: {
      slowMo: 0
    },

    actionTimeout: 10000,
    navigationTimeout: 15000
  },

  projects: [
    browser === 'chromium'
      ? {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }
      }
      : browser === 'firefox'
        ? {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] }
        }
        : {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] }
        }
  ]
});