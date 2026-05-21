# Matopio Paysage — Site vitrine

Site vitrine premium pour **Matopio Paysage**, paysagiste en France.  
Stack : **Next.js 16** + **Tailwind CSS 4**.

## Démarrage rapide

```bash
cd ~/projects/matopio-paysage
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Modifier le site (guide débutant)

### Textes & coordonnées
Éditez **`src/content/site.ts`** :
- Nom, slogan, téléphone, email
- Zone d'intervention, réseaux sociaux
- ID Formspree pour le formulaire

### Prestations
Éditez **`src/content/services.ts`** — ajoutez ou modifiez une carte.

### Réalisations (avant / après)
1. Ajoutez vos photos dans **`public/assets/images/projects/`**
2. Dupliquez un projet dans **`src/content/projects.ts`**

### Avis Google
- En attendant l'API : **`src/content/reviews.ts`**
- Pour l'API : mettez `useMockData: false` + `GOOGLE_PLACES_API_KEY` dans `.env`

### Images
Remplacez les fichiers dans **`public/assets/images/`** (même nom de fichier = pas de code à changer pour le hero).

| Fichier | Usage |
|---------|--------|
| `hero.jpg` | Bannière accueil |
| `about.jpg` | Section présentation |
| `prestations/*.jpg` | Cartes prestations |
| `projects/*-avant.jpg` / `*-apres.jpg` | Galerie |

### Formulaire de contact (Formspree)
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez l'ID (ex: `xyzabcde`)
3. Collez-le dans `site.ts` → `formspreeId: "xyzabcde"`

## Structure du projet

```
src/
├── app/              # Pages (routes)
├── components/       # Composants UI
├── content/          # ★ Tous les textes & données
└── lib/              # SEO, utils, API Google
public/
└── assets/images/    # ★ Toutes les images
```

## Déploiement

Recommandé : [Vercel](https://vercel.com) — `npm run build` puis déployer.

Pensez à mettre à jour `site.url` dans `site.ts` avec votre domaine réel.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run start` | Lancer en production |
