import {expect, test } from "@playwright/test"


test('Mon premier test', async({page})=> {
    await page.goto('https://playwright.dev/')
    await page.pause()
    //Expression régulière, elle vérifie que le titre contient le mot "Playwright" n'importe où dans le texte. 
    await expect(page).toHaveTitle(/Playwright/) 
    const getStarted= page.locator('text=Get Started').first()
    // J'attend et vérifie si le lien est présent
    await expect(getStarted).toHaveAttribute('href', '/docs/intro') 
    await getStarted.click();
    //Attend et verifie lorsqu'on arrive sur la page get started on est le lien 'Introdcution'
    await expect(page.locator('text=Introduction').first()).toBeVisible 
    await page.pause()

})