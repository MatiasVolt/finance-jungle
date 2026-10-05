# Finance Jungle — la bible du projet

> De la première banane à Black-Scholes. Une appli pour apprendre la finance étape par étape,
> comme Mimo pour le code, sans jamais prendre l'apprenant pour un idiot.

## 1. Les 7 lois de la jungle (règles pédagogiques)

1. **Respect.** On ne dit jamais « c'est facile » ni « évidemment ». On parle à quelqu'un d'intelligent qui ne connaît pas encore le sujet.
2. **Une idée par écran.** Maximum ~45 mots. Si un écran a besoin de deux idées, c'est deux écrans.
3. **Le concret avant le symbole.** D'abord des bananes, des pommes, un cheval. La lettre `n` arrive seulement quand le joueur a déjà *vu* ce qu'elle représente.
4. **Faire avant lire.** Le joueur manipule (glisse, compte, échange) avant qu'on lui donne la règle.
5. **Une formule se construit, elle ne se donne pas.** Chaque terme arrive seul, avec sa couleur et sa raison d'exister, puis on vérifie sur un exemple que le joueur peut compter lui-même.
6. **L'erreur n'est jamais punie.** Une mauvaise réponse déclenche une explication et un nouvel essai, pas une perte.
7. **Tout se raccroche.** Chaque notion plante une graine pour plus tard (la partie double dans l'échange du ver, l'unité de compte dans le comptage des prix).

## 2. L'économie du jeu

| Élément | Rôle |
|---|---|
| 🪱 Ver de terre | Gagné en réussissant les quiz d'une étape |
| 🍌 Bananes | Monnaie de la jungle. Le Hibou échange les vers contre des bananes. Les bananes ouvrent les étapes suivantes |
| ✨ XP de Sagesse | Progression générale |
| 🏅 Badges | Un par étape (« Rescapé du Troc »…) |

L'économie du jeu *est* une leçon : le joueur vit le troc (ver ⇄ bananes) avant d'apprendre la monnaie,
et le petit tableau de l'échange prépare la comptabilité en partie double.

## 3. La distribution

| Personnage | Rôle |
|---|---|
| 🦉 Le Hibou | Mentor, fil rouge de toute l'aventure |
| 🗿 Akno | Tailleur de pierre, héros du chapitre 1 |
| 🐢 La Tortue | Le temps, les intérêts composés (lente mais imbattable sur la durée) |
| 🐊 Le Crocodile | Le risque, ce qui dort sous l'eau calme |
| 🦜 Le Perroquet | Le crieur du marché, les prix |
| 🐜 La Reine Fourmi | Finances personnelles |
| 🐘 L'Éléphant | Entreprise et comptabilité (l'éléphant n'oublie rien : il note tout) |
| 🐒 Le Singe | Marchés et portefeuilles, et nos biais (il achète quand ça monte…) |
| 🦎 Le Caméléon | Les dérivés : leur valeur change de couleur avec ce qu'ils touchent |
| 🐆 Le Jaguar | Finance quantitative |

## 4. La carte

### La Clairière (tronc commun, pour tout le monde)

1. **L'odyssée de la valeur** (Hibou) : troc → coquillages, sel, cacao → or et sceau de Lydie → papier → banques → monnaie fiat → monnaie numérique
2. **La Tortue et le Temps** : prix de l'attente → intérêt simple → intérêt composé → temps long → actualisation → inflation
3. **Le Crocodile du Risque** : probabilités → espérance → écart-type → diversification → arnaques (Ponzi)
4. **Le Grand Marché** : offre et demande → carnet d'ordres → actions → obligations → devises

### La Grande Fourche (chemins au choix)

| Chemin | Guide | Sommet |
|---|---|---|
| Le Sentier des Fourmis | 🐜 | Le plan de toute une vie (budget, crédit, ETF, retraite) |
| Le Territoire de l'Éléphant | 🐘 | DCF & LBO |
| La Canopée des Singes | 🐒 | Frontière efficiente & CAPM |
| Le Repaire du Caméléon | 🦎 | Black-Scholes |
| La Rivière du Jaguar | 🐆 | Monte Carlo & VaR |

## 5. Exemple d'échelle vers une formule : Black-Scholes

Personne ne voit `C = S·N(d₁) − K·e^(−rT)·N(d₂)` d'un coup. Chaque morceau a déjà été gagné avant :

1. `e^(−rT)` ← chapitre 2 : intérêt composé → composé de plus en plus souvent → le nombre e → actualisation
2. `N(·)` ← chapitre 3 : pile ou face → beaucoup de pièces → la cloche (loi normale)
3. `S` et `K` ← Caméléon : une option, c'est le droit d'acheter une banane à un prix fixé (K) quand elle vaut S
4. L'arbre binomial à 1 pas (la banane monte ou descend) → réplication → monde neutre au risque
5. L'arbre à 2, 10, 1 000 pas → la cloche réapparaît → Black-Scholes émerge
6. On n'écrit la formule qu'à la fin, et chaque terme s'allume avec la couleur de l'étape où il est né.

## 6. Avancement

- [x] Fondations : écran citation, carte, moteur de leçon, sauvegarde
- [x] Ch.1 · Étape 1 : L'aube des échanges (troc), jouable
- [ ] Ch.1 · Étape 2 : L'objet magique (sel, cacao, cowries) — script déjà écrit
- [ ] Ch.1 · Étape 3 : Le sacre du métal — script déjà écrit
- [ ] …
