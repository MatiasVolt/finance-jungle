# Finance Jungle

**Site en ligne : [finance-jungle.pages.dev](https://finance-jungle.pages.dev)**

Apprendre la finance pour de vrai, quelques minutes par jour, en français ou en anglais.
Une application web d'apprentissage progressif, dans l'esprit de Mimo ou Codecademy (séries, XP, objectif du jour), pensée pour les 16-30 ans : ce n'est ni un jeu ni un produit pour enfants.

## Le contenu

- **186 leçons, environ 1 300 écrans**, toutes écrites en français et en anglais.
- **Démarrer** (facultatif) : 6 leçons pour partir de zéro, de l'origine de la monnaie au risque.
- **12 thèmes**, chacun en 5 niveaux (Découverte, Fondamentaux, Intermédiaire, Avancé, Expert), 3 leçons par niveau.

| Thème | Guide |
|---|---|
| Finance de marché | 🐒 Le Singe |
| Comptabilité | 🐘 L'Éléphant |
| Mathématiques financières | 🐢 La Tortue |
| Statistiques | 🐊 Le Crocodile |
| Macroéconomie | 🐋 La Baleine |
| Histoire de la finance | 🦉 Le Hibou |
| Contrôle de gestion | 🐝 L'Abeille |
| Droit financier | 🦁 Le Lion |
| Philosophie financière | 🦥 Le Paresseux |
| Produits dérivés | 🦎 Le Caméléon |
| Finance quantitative | 🐆 Le Jaguar |
| Finances personnelles | 🐜 La Reine Fourmi |

Chaque thème a un animal guide, qui intervient en marge des leçons.

## La méthode

- **Une idée par écran**, et le concret avant le symbole : un exemple chiffré d'abord, la formule ensuite.
- **Les formules se construisent pièce par pièce** au lieu d'être données d'un bloc.
- **On fait avant de lire** : calcul à rentrer, simulateur, prise de position.
- **L'erreur n'est jamais punie** : on peut toujours réessayer ; pour une réponse chiffrée, un indice s'affiche, puis la solution après deux essais ratés.
- **Rien n'est verrouillé** : l'ordre des niveaux est conseillé, jamais imposé.
- **Un défi facultatif** en fin de leçon, un cran au-dessus, que l'on peut passer.

Types d'écran : lecture, QCM, réponse chiffrée (avec tolérance), formule construite pas à pas, tableau, prise de position sans bonne réponse (philosophie), simulateur d'intérêts composés, casse-tête des prix du troc.

## La progression

XP selon le niveau de la leçon, bonus pour les bonnes réponses du premier coup, séries de jours consécutifs, objectif quotidien au choix, niveau global et page de statistiques (XP par jour, calendrier d'activité, XP par thème).
La progression est enregistrée dans le navigateur : il n'y a ni compte ni serveur.

## Lancer le projet

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev      # site de développement sur http://localhost:5173
npm run build    # version de production dans dist/
```

## Organisation du code

| Dossier / fichier | Rôle |
|---|---|
| `src/data/tracks.js` | Catalogue : thèmes, niveaux, titres des leçons (bilingues) |
| `src/data/lessons/fr`, `src/data/lessons/en` | Contenu des leçons, même identifiant et mêmes écrans dans les deux langues |
| `src/components/screens/` | Un composant par type d'écran |
| `src/components/pages/` | Accueil, page d'un thème, statistiques, première visite |
| `src/store.js` | XP, séries, niveaux, sauvegarde de la progression |
| `src/i18n.jsx` | Textes de l'interface en français et en anglais |
| `CURRICULUM.md` | Règles pédagogiques, barème de progression, guide pour écrire une leçon |

React 19 et Vite, sans autre dépendance.

## Limites connues

- Les leçons de droit et de fiscalité françaises citent des taux et des plafonds qui changent : elles sont à relire chaque année.
- Toutes les leçons sont chargées d'un coup (le fichier JavaScript dépasse 1 Mo) ; un chargement à la demande allégerait le site.
- La progression reste sur l'appareil utilisé : elle ne se retrouve pas sur un autre navigateur.

## Comment ce projet a été construit

J'ai conçu l'application (public visé, progression, méthode pédagogique, choix des thèmes et des écrans) et je l'ai développée avec l'aide d'un assistant de programmation IA (Claude), d'où sa présence dans l'historique des commits. Les leçons ont été relues, mais elles peuvent encore contenir des erreurs : toute correction est la bienvenue.
