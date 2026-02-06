import { test, expect } from '@playwright/test';

// Tester si le site web à le button enregistrer
test.describe.only('Snapshot', ()=> {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5000/');
  })


test('Je trouve le button', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('button.png')
});
})


