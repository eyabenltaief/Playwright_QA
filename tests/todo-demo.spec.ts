import { test, expect } from '@playwright/test';

test.describe.only('Gestion dynamique et assertions', ()=> {
  test.beforeEach(async ({page}) => {
    // Navigation
    await page.goto('https://demo.playwright.dev/todomvc/');
  })


test('Interaction et auto-wait ', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Apprendre Playwright');
  await input.press('Enter');
  await page.pause();
  // L'auto-wait s'assure que l'élément est prêt avant de cliquer
  const todoItem = page.getByTestId('todo-item');
  await todoItem.getByRole('checkbox').check();
  await page.pause();


  // Capture d'écran (Screenshot) pour preuve de test
  await page.screenshot({ path: 'todo-complete.png' });
  await page.pause();

  // Simulation d'un élément dynamique (filtre)
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.pause();

  // Assertions intelligentes
  // On vérifie que la liste ne contient qu'un seul élément terminé
  await expect(page.getByTestId('todo-item')).toHaveCount(1);
  await page.pause();

  // Vérification de la classe CSS (élément barré)
  await expect(page.getByTestId('todo-item')).toHaveClass(['completed']);
});
})
