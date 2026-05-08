import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  use: {
    baseURL: 'http://localhost:5000',
    headless: true,
  },

  webServer: {
    command: 'npx http-server . -p 5000',
    url: 'http://localhost:5000',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
});