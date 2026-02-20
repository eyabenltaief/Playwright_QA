# TP Playwright : Automatisation d'une Application E-commerce

## 🎯 Objectif

Créer **3 tests automatisés simples** pour une boutique en ligne en utilisant Playwright avec TypeScript.

## 📋 Compte Rendu et Contexte

Le TP 5 s’agit d’un compte rendu pour la prochaine séance.
Avant de démarrer cette partie, merci d’effectuer les recherches suivantes et de pratiquer des tutoriels si nécessaire.\
Les réponses doivent être rédigées dans un fichier CompteRendu1.md et déployées sur votre repository votrenom/QA_automation sur GitHub. \
Recherches demandées :
- Qu’est-ce que le Page Object Model (POM) ?
- Quelle est la différence entre fixtures et utils dans la structuration des dossiers d’un projet de tests automatisés avec Playwright ?

**Application à tester** : `https://www.saucedemo.com/` (site de démonstration)

**Ce que vous allez apprendre :**
- Automatiser la connexion
- Ajouter des produits au panier
- Vérifier le processus de commande
- Organiser vos tests avec le Page Object Model
- Exécuter des tests sur un seul worker

---

## 🔧 Partie 1 : Installation & Configuration

### Exercice 1.1 : Initialisation
1. Créer un nouveau projet Node.js
2. Installer Playwright
3. Configurer Playwright pour Chromium uniquement

```bash
npm init -y
npm install --save-dev @playwright/test typescript @types/node
npx playwright install chromium
```

### Exercice 1.2 : Configuration
Créer le fichier `playwright.config.ts` avec :
- URL de base : `https://www.saucedemo.com/`
- Mode headless activé
- Screenshots en cas d'échec
- **1 seul worker** pour l'exécution (pas de parallélisation)
- Navigateur : **Chromium uniquement**

---

## 🎭 Partie 2 : Les 3 Tests à Implémenter

### Test 1 : Connexion
**Fichier** : `tests/auth.spec.ts`

**Objectif** : Se connecter à l'application

**Étapes** :
1. Aller sur `https://www.saucedemo.com/`
2. Remplir le formulaire avec : `standard_user` / `secret_sauce`
3. Cliquer sur le bouton de connexion
4. Vérifier que l'URL contient `/inventory.html`

---

### Test 2 : Ajout au panier
**Fichier** : `tests/cart.spec.ts`

**Objectif** : Ajouter des produits au panier

**Étapes** :
1. Se connecter (réutiliser la connexion)
2. Ajouter 2 produits au panier
3. Vérifier que le badge du panier affiche "2"
4. Aller dans le panier
5. Vérifier que les 2 produits sont présents

---

### Test 3 : Commande complète
**Fichier** : `tests/checkout.spec.ts`

**Objectif** : Finaliser une commande

**Étapes** :
1. Se connecter
2. Ajouter 1 produit au panier
3. Aller au panier
4. Cliquer sur "Checkout"
5. Remplir le formulaire (prénom, nom, code postal)
6. Continuer
7. Finaliser la commande
8. Vérifier le message de confirmation "Thank you for your order"

---

## ✅ Partie 3 : Page Object Model

### Exercice 3.1 : Créer LoginPage
Créer `pages/LoginPage.ts` avec :
- Les sélecteurs (username, password, bouton)
- Une méthode `login(username, password)`

### Exercice 3.2 : Créer InventoryPage
Créer `pages/InventoryPage.ts` avec :
- Méthode pour ajouter un produit au panier
- Méthode pour obtenir le nombre dans le badge
- Méthode pour aller au panier

### Exercice 3.3 : Créer CheckoutPage
Créer `pages/CheckoutPage.ts` avec :
- Méthode pour remplir le formulaire
- Méthode pour finaliser la commande
- Méthode pour obtenir le message de confirmation

---

## 📦 Structure Finale du Projet

```
playwright-tp-simple/
├── tests/
│   ├── auth.spec.ts          # Test 1 : Connexion
│   ├── cart.spec.ts          # Test 2 : Ajout au panier
│   └── checkout.spec.ts      # Test 3 : Commande complète
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CheckoutPage.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 Critères de Réussite

✅ **3 tests au total** (pas plus, pas moins)  
✅ Page Object Model implémenté  
✅ Tous les tests passent sur Chromium  
✅ Exécution séquentielle (1 worker)  
✅ Code propre et commenté en TypeScript

---

## 💡 Commandes Utiles

```bash
# Installer
npm install

# Lancer tous les tests (les 3)
npx playwright test

# Mode visuel (avec navigateur)
npx playwright test --headed

# Un seul fichier
npx playwright test tests/auth.spec.ts

# Voir le rapport
npx playwright show-report

# Générer du code automatiquement
npx playwright codegen https://www.saucedemo.com
```

---

Bon courage ! 🚀
