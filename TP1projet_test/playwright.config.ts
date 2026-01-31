import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 20000, // 20s temp d'attente d'erreur
  retries: 1, // Le test est retenter sur la premier fois
  
  use: {
    headless: false, // Toujours afficher le navigateur
    trace:"on-first-retry", // Trace le dernier 
  },
  
  projects: [
    {
    name: 'edge',  // Edge en premier = par défaut
    use: { 
      ...devices['Desktop Edge'], 
      channel: 'msedge' },
    },
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});