import { test, expect } from '@playwright/test';

//Générer groupe de tests sur Wikipedia
// Test only pour un groupe spécifique sur un fichier de test
test.describe('Wikipedia', ()=> {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.wikipedia.org/');
    //Choisir la langue francais
    await page.locator('strong:has-text("Français")').click();
  })

// le test sur laquel appliqué sur wikipedia 
test('Trouve un raton laveur sur wikipedia', async ({ page }) => {
  await page.locator('[placeholder="Rechercher sur Wikipédia"]').click();
  // await page.getByRole('searchbox', { name: 'Rechercher sur Wikipédia' }).first().click();
  await page.keyboard.type('raton laveur')
  await expect(page.locator('#searchform-suggestions')).toBeVisible()
  await page.keyboard.press('Enter')
  // await page.pause()
  await expect (page.locator('h1').first()).toHaveText(/Raton laveur/)
});
})
