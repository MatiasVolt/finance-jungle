# Finance Jungle — la bible du projet

> Apprendre la finance pour de vrai, quelques minutes par jour. Pour les 16-30 ans.
> Gamifié comme Codecademy (séries, XP, objectifs), mais ce n'est ni un jeu ni un produit pour enfants.

## 1. Les règles pédagogiques

1. **Respect.** On ne dit jamais « c'est facile » ni « évidemment ». On parle à quelqu'un d'intelligent qui ne connaît pas encore le sujet.
2. **Une idée par écran.** Si un écran a besoin de deux idées, ça fait deux écrans.
3. **Le concret avant le symbole.** Un exemple chiffré d'abord, la lettre ensuite.
4. **Faire avant lire.** Calculer, manipuler un simulateur, choisir une position.
5. **Une formule se construit, elle ne se donne pas.** Chaque terme arrive seul, avec sa raison d'exister.
6. **L'erreur n'est jamais punie.** On signale l'erreur, on donne un indice, on laisse réessayer. Après deux essais ratés, on peut voir la solution.
7. **Rien n'est verrouillé.** L'ordre des niveaux est conseillé, jamais imposé.
8. **La bonne difficulté.** Ni ennui ni angoisse. Chaque leçon monte en escalier : intuition → calcul guidé (avec indice) → application → **défi** facultatif en fin de leçon (`challenge: true`), un cran au-dessus, qu'on peut passer. Chaque leçon réutilise une notion d'une leçon précédente.

## 2. La structure

- **Démarrer** (facultatif) : les bases des bases et un peu d'histoire, pour qui part de zéro.
- **12 thèmes**, chacun en 5 niveaux : Découverte → Fondamentaux → Intermédiaire → Avancé → Expert.

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

Les guides interviennent en marge des leçons (une remarque, une image), sans infantiliser.

## 3. La progression

| Élément | Règle |
|---|---|
| XP d'une leçon | 20 (Démarrer, niv. 1), 30, 45, 65, 90 (niv. 5) |
| Bonus | +3 XP par réponse juste du premier coup |
| Révision | 25 % de l'XP, et elle compte pour la série |
| Série | Jours consécutifs avec au moins une leçon terminée |
| Objectif du jour | 20, 50, 100 ou 150 XP, au choix |
| Niveau global | 100 XP pour le niv. 2, puis +25 % par niveau |
| Suivi | XP par jour (14 jours), calendrier d'activité (20 semaines), XP par thème, succès |

La progression est stockée dans le navigateur (`localStorage`).

## 4. Écrire une leçon

Le site est bilingue (français / anglais). Les leçons sont dans `src/data/lessons/fr/` et `src/data/lessons/en/`, le catalogue (titres bilingues) dans `src/data/tracks.js`, les textes de l'interface dans `src/i18n.jsx`.
Chaque leçon doit exister dans les deux langues avec **le même id et la même suite d'écrans** (mêmes types, mêmes réponses) : changer de langue en pleine leçon garde l'écran en cours. Si une traduction manque, la leçon s'affiche dans l'autre langue avec un avertissement.
Une leçon du catalogue sans contenu apparaît « En préparation ».

Les écrans `quiz` et `number` acceptent `challenge: true` (étiquette « Défi », bouton « Passer ce défi »).

Types d'écran : `read`, `quiz`, `number` (réponse chiffrée avec tolérance), `formula` (construction pièce par pièce),
`table`, `reflect` (positions sans bonne réponse, pour la philo), `compound` (simulateur de la Tortue), `prices` (le casse-tête des prix du troc).

Texte : paragraphes séparés par une ligne vide, `**gras**`, `*italique*`, `` `formule` ``, lignes `- ` en liste.

## 5. Avancement

- [x] Moteur de leçons, séries, XP, statistiques, défis facultatifs
- [x] Interface et leçons en français et en anglais
- [x] Démarrer : 6 leçons
- [x] 12 thèmes × 5 niveaux × 3 leçons : 180 leçons
- [x] **Catalogue complet : 186 leçons, ~1 300 écrans, dans les deux langues**

## 6. Pistes pour la suite

- Faire relire les leçons de droit et de fiscalité françaises chaque année (taux, plafonds, seuils).
- Charger les leçons à la demande, par langue, pour alléger le site (le paquet JS dépasse 1 Mo).
- Ajouter des écrans interactifs propres à certains thèmes (arbre binomial, carnet d'ordres, courbe des taux).
- Sauvegarde de la progression dans un compte, pour la retrouver sur plusieurs appareils.
