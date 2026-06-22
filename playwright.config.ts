import { defineConfig, devices } from '@playwright/test';
import { config } from './config/config';

const env = process.env.ENV || 'qa';

export default defineConfig({
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
    headless: true,

    viewport: { width: 1280, height: 720 },

    baseURL: config?.[env as keyof typeof config]?.baseURL || '',

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
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});