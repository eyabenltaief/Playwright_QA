# 🧪 TP 4 Playwright – Fixtures, Data-Driven & Parallélisme

## 🎯 Objectifs du TP

À la fin de ce TP, tu seras capable de :

* Structurer un projet Playwright propre et pro
* Utiliser **fixtures personnalisées**
* Externaliser la logique avec des **helpers**
* Implémenter des **tests data-driven**
* Exécuter des **tests en parallèle**
* Configurer Playwright via `playwright.config.ts`

---

## 🛠️ Prérequis

* Node.js ≥ 18
* Playwright installé

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## 📁 Étape 1 – Structure du projet

```txt
playwright-tp/
├── playwright.config.ts
├── tests/
│   ├── login.spec.ts
│   └── dashboard.spec.ts
├── fixtures/
│   └── auth.fixture.ts
├── helpers/
│   └── login.helper.ts
├── data/
│   └── users.data.ts
└── package.json
```

---

## ⚙️ Étape 2 – Configuration Playwright

### `playwright.config.ts`

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true, // Active les tests parallèles
  retries: 1,          // Relance une fois si échec
  use: {
    baseURL: 'https://practice.expandtesting.com',
    headless: true,    // Par défaut en headless
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});
```

👉 **Points clés**

* `fullyParallel: true` → tests exécutés en parallèle
* `workers: 3` → 3 navigateurs en même temps
* `baseURL` → évite de répéter l’URL

---

## 🧩 Étape 3 – Helper (logique réutilisable)

### `helpers/login.helper.ts`

```ts
import { Page, expect } from '@playwright/test';

export async function login(
  page: Page,
  username: string,
  password: string
) {
  await page.goto('https://practice.expandtesting.com/login');

  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('text=You logged into a secure area!')
  ).toBeVisible();
}

```

👉 **Pourquoi helper ?**

* DRY (Don’t Repeat Yourself)
* Lisibilité
* Maintenance facile

---

## 🧪 Étape 4 – Fixture personnalisée

### `fixtures/auth.fixture.ts`

```ts
import { test as base, expect, Page } from '@playwright/test';
import { login } from '../helpers/login.helper';

type MyFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await login(page, 'practice', 'SuperSecretPassword!');
    await use(page);
  }
});

export { expect };
```

👉 **Fixture = setup automatique avant chaque test**

---

## 📊 Étape 5 – Data-Driven Testing

### `data/users.data.ts`

```ts
export const users = [
  {
    role: 'admin',
    email: 'practice',
    password: 'SuperSecretPassword!'
  }
];
```

---

## 🧪 Étape 6 – Test Data-Driven

### `tests/login.spec.ts`

```ts
import { Page, expect } from '@playwright/test';

export async function login(
  page: Page,
  username: string,
  password: string
) {
  await page.goto('https://practice.expandtesting.com/login');

  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('text=You logged into a secure area!')
  ).toBeVisible();
}
```

👉 **Avantages**

* Un seul test
* Plusieurs scénarios
* Facile à étendre

---

## ⚡ Étape 7 – Test avec Fixture + Parallélisme

### `tests/dashboard.spec.ts`

```ts
import { test, expect } from '../fixtures/auth.fixture';

test('Afficher la page sécurisée', async ({ authenticatedPage }) => {
  await expect(
    authenticatedPage.locator('h1')
  ).toContainText('Secure Area');
});

test('Afficher le bouton Logout', async ({ authenticatedPage }) => {
  await expect(
    authenticatedPage.getByRole('link', { name: 'Logout' })
  ).toBeVisible();
});
```

👉 Ces tests :

* Utilisent une **fixture**
* S’exécutent **en parallèle**
* Partagent le même setup

---

## ▶️ Étape 8 – Exécution des tests

```bash
npx playwright test
```

Tests parallèles :

```bash
npx playwright test --workers=4
```

Mode UI :

```bash
npx playwright test --ui
```

---

## ✅ Résumé pédagogique

| Concept        | Utilité                    |
| -------------- | -------------------------- |
| Fixtures       | Préparer l’état avant test |
| Helpers        | Réutiliser la logique      |
| Data-Driven    | Multiplier les scénarios   |
| Parallel tests | Gain énorme de temps       |
| Config         | Centraliser les règles     |

---
