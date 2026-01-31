# Playwright_QA
Projet de tests automatisés avec l'outil Playwright
## Extensions VS Code
- NPM RUN
- npm Intellisense
- Playwright snippets
- Playwright Test for VSCode
## Installer Playwright
```bash
# Histoire et l'instancier le package .json
npm init -Y 
# Installer les dépendances de PLaywright
npm add -D @playwright/test 
# Installer les différents dépendances qui nécessaires pour faire fontionner Playwright ou kes navigateurs que vous avez sélectionné
npx playwright install 
npx playwright test # tester le projet
```
## Créer les fichiers de tests
- Architecture recommandé: Ajouter un nouveau dossier sur le projet 'tests' et les fichiers de tests ajouter sur ce dossier.
- Ajouter les fichiers de tests 'playwright.test.ts'

## Locator
Un locator est un moyen d’identifier un élément. Il permet de localiser des éléments, puis d’effectuer des actions dessus. Nous avons utilisé des locators basés sur le texte, car ils sont moins susceptibles d’être modifiés lorsque la structure de la page change.
```bash
const getStarted= page.locator('text=Get Started').first()
getStarted.click();
```
## Test multi navigateur
Modifier la politique d'exécution PowerShell:
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Configurer VS Code pour utiliser CMD au lieu de PowerShell:
1. Appuyez sur Ctrl + Shift + P
2. Tapez "Terminal: Select Default Profile"
3. Choisissez Command Prompt
4. Ajouter les commandes à exécuter dans le fichier package.json et les lancer via l’extension NPM Run de VS Code.

## Génération des tests
```bash
npx playwright codegen wikipedia.org
```
## Rapport d'erreur
```bash
npx playwright test --reporter html
```
- Trace : https://trace.playwright.dev/