import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 20000, // 20s temp d'attente d'erreur
  retries: 1, // Le test est retenter sur la premier fois
  
  use: {
    headless: false, // Toujours afficher le navigateur
    trace:"on-first-retry", // Trace le dernier 
  },

  //Configurer webserver
  webServer: {
    command: 'npx http-server -p 5000 ./',
    url: 'http://localhost:5000/',
    // utiliser le serveur déja existant
    reuseExistingServer: true,
    timeout: 2_000
  },
  
  projects: [
    {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    },
    // {
    // name: 'edge',  // Edge en premier = par défaut
    // use: { 
    //   ...devices['Desktop Edge'], 
    //   channel: 'msedge' },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});