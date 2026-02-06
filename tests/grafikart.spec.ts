import { test, expect } from '@playwright/test';

// Test only pour un groupe spécifique sur un fichier de test
test.describe('Grafitek', ()=> {
  test.beforeEach(async ({page}) => {
    await page.goto('https://grafikart.fr/tutoriels/cypress-993');
  })


test('Affiche 0 commentaire', async ({ page }) => {
    // scroll tous la page 
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('.comments_title')).toHaveText('0 commentaire')
    //Exécuter le code et mocker la réponse
});

// Mise en place des données de commentaires (exercice)
})


