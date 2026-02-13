# TP5 (Parite 1 et 2) : Automatisation d'une Application E-commerce


## 📋 Contexte

Vous êtes testeur QA pour une boutique en ligne "TechShop" qui vend des produits électroniques. Votre mission est de créer une suite de tests automatisés robuste pour garantir la qualité de l'application.

**URL de test** : `https://www.saucedemo.com/` (site de démonstration)

## 🔧 Partie 1 : Installation & Configuration

### Exercice 1.1 : Initialisation du projet
1. Créer un nouveau projet Node.js
2. Installer Playwright avec la commande appropriée
3. Configurer Playwright pour tester sur les 3 navigateurs (Chromium, Firefox, WebKit) -> package.json
### Installation et test (commandes)

```bash
# Créer le projet
mkdir playwright-tp && cd playwright-tp

# Initialiser npm
npm init -y

# Installer Playwright
npm init playwright@latest

# Installer les navigateurs
npx playwright install chromium firefox webkit

# Créer la structure de dossiers
mkdir -p tests pages fixtures data utils screenshots

# Lancer les tests
npm test

# Lancer en mode UI
npm run test:ui

# Voir le rapport
npm run report
```
### Exercice 1.2 : Configuration avancée
Dans le fichier `playwright.config.ts`, configurer :
- L'URL de base (`https://www.saucedemo.com/`)
- Le mode headless par défaut
- La capture de screenshots uniquement en cas d'échec
- L'enregistrement de vidéos uniquement pour les tests échoués
- L'exécution parallèle avec 3 workers

---

## 📄 Fichiers de support

### data/testData.json

```json
{
  "users": [
    {
      "username": "standard_user",
      "password": "secret_sauce",
      "shouldSucceed": true,
      "description": "Utilisateur standard - devrait réussir"
    },
    {
      "username": "locked_out_user",
      "password": "secret_sauce",
      "shouldSucceed": false,
      "expectedError": "Epic sadface: Sorry, this user has been locked out.",
      "description": "Utilisateur bloqué - devrait échouer"
    },
    {
      "username": "problem_user",
      "password": "secret_sauce",
      "shouldSucceed": true,
      "description": "Utilisateur avec problèmes - devrait réussir mais avec bugs UI"
    },
    {
      "username": "performance_glitch_user",
      "password": "secret_sauce",
      "shouldSucceed": true,
      "description": "Utilisateur avec ralentissements"
    },
    {
      "username": "invalid_user",
      "password": "wrong_password",
      "shouldSucceed": false,
      "expectedError": "Epic sadface: Username and password do not match any user in this service",
      "description": "Identifiants invalides"
    }
  ],
  "products": [
    {
      "name": "Sauce Labs Backpack",
      "price": 29.99,
      "description": "carry.allTheThings() with the sleek, streamlined Sly Pack"
    },
    {
      "name": "Sauce Labs Bike Light",
      "price": 9.99,
      "description": "A red light isn't the desired state in testing"
    },
    {
      "name": "Sauce Labs Bolt T-Shirt",
      "price": 15.99,
      "description": "Get your testing superhero on"
    },
    {
      "name": "Sauce Labs Fleece Jacket",
      "price": 49.99,
      "description": "It's not every day that you come across a midweight quarter-zip fleece jacket"
    },
    {
      "name": "Sauce Labs Onesie",
      "price": 7.99,
      "description": "Rib snap infant onesie for the junior automation engineer"
    },
    {
      "name": "Test.allTheThings() T-Shirt (Red)",
      "price": 15.99,
      "description": "This classic Sauce Labs t-shirt is perfect to wear"
    }
  ],
  "checkout": {
    "firstName": "John",
    "lastName": "Doe",
    "postalCode": "75001"
  }
}
```

## 🏗️ Structure

- `tests/` : Tests organisés par fonctionnalité
- `pages/` : Page Object Model
- `fixtures/` : Fixtures réutilisables
- `data/` : Données de test
- `utils/` : Fonctions utilitaires (réutilisables)

## 📊 Rapports

Les rapports sont générés automatiquement dans :
- `playwright-report/` : Rapport HTML
- `test-results/` : Résultats JSON et traces

---

## 🎭 Partie 2 : Sélecteurs Intelligents & Auto-Wait
Dans la partie 2, il s’agit d’un compte rendu pour la prochaine séance.
Avant de démarrer cette partie, merci d’effectuer les recherches suivantes et de pratiquer des tutoriels si nécessaire.
Les réponses doivent être rédigées dans un fichier CompteRendu1.md et déployées sur votre repository QA_automation/votrenom sur GitHub.
Recherches demandées :
- Qu’est-ce que le Page Object Model (POM) ?
- Quelle est la différence entre fixtures et utils dans la structuration des dossiers d’un projet de tests automatisés avec Playwright ?
### Exercice 2.1 : Page de connexion
Créer un test qui :
1. Navigue vers la page de connexion
2. Remplit le formulaire en utilisant **3 types de sélecteurs différents** :
   - Sélecteur par `data-test` pour le champ username
   - Sélecteur par placeholder pour le champ password
   - Sélecteur par texte pour le bouton de connexion
3. Se connecte avec l'utilisateur : `standard_user` / `secret_sauce`

### Exercice 2.2 : Vérification avec Auto-Wait
Après connexion, vérifier que :
- L'URL contient `/inventory.html`
- Le titre de la page produits est visible
- Le menu burger est présent et cliquable
