import { test, expect } from '@playwright/test';

test.describe('Snapshot', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Je trouve le button Enregistrer', async ({ page }) => {
    // Vérifier que le bouton existe
    const button = page.getByRole('button', { name: 'Enregistrer' });
    await expect(button).toBeVisible();

    // Capturer le snapshot de la page entière
    expect(
      await page.screenshot()
    ).toMatchSnapshot('button.png');
  });

});