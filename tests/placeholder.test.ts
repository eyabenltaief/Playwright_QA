import { test, expect } from '@playwright/test';

test('Ajouter un commentaire via mock réseau', async ({ page }) => {

  // Mock de l'API comments
  await page.route('**/comments*', route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 1,
          name: 'Eya QA',
          body: 'Playwright mock commentaire réussi'
        }
      ])
    })
  );

  // Ouvrir une page vide
  await page.goto('about:blank');

  // Simuler un frontend qui appelle l'API
  await page.evaluate(async () => {

    // Appel API
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    );

    // Conversion JSON
    const comments = await response.json();

    // Création HTML
    comments.forEach((comment: any) => {

      const div = document.createElement('div');

      div.className = 'comment';

      div.innerText =
        `${comment.name} : ${comment.body}`;

      document.body.appendChild(div);
    });
  });

  // Vérification du commentaire ajouté
  await expect(
    page.locator('.comment')
  ).toContainText(
    'Playwright mock commentaire réussi'
  );

});