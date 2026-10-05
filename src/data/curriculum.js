// La carte de la jungle.
// Le tronc commun (la Clairière) est suivi par tout le monde, puis la Grande Fourche
// ouvre des chemins qui montent chacun jusqu'à un sommet (une grande formule).
// `cost` = bananes à dépenser pour ouvrir l'étape.

export const TRUNK = [
  {
    id: 'ch1',
    number: 1,
    title: "L'odyssée de la valeur",
    guide: 'hibou',
    blurb: "Comment un simple objet a fini par représenter la valeur de tout le reste.",
    steps: [
      { id: 'troc', title: "L'aube des échanges", icon: '🤝' },
      { id: 'coquillages', title: "L'objet magique", icon: '🐚', cost: 10 },
      { id: 'metal', title: 'Le sacre du métal', icon: '🪙', cost: 10 },
      { id: 'papier', title: 'Le papier qui promet', icon: '📜', cost: 15 },
      { id: 'banques', title: "Les temples de l'argent", icon: '🏛️', cost: 15 },
      { id: 'fiat', title: 'La monnaie de confiance', icon: '💶', cost: 20 },
      { id: 'numerique', title: "L'argent invisible", icon: '💳', cost: 20 },
    ],
  },
  {
    id: 'ch2',
    number: 2,
    title: 'La Tortue et le Temps',
    guide: 'tortue',
    blurb: "Pourquoi 100 bananes aujourd'hui valent plus que 100 bananes dans un an.",
    steps: [
      { id: 'attente', title: "Le prix de l'attente", icon: '⏳' },
      { id: 'interet-simple', title: "L'intérêt simple", icon: '🌱' },
      { id: 'interet-compose', title: "L'intérêt composé", icon: '🌳' },
      { id: 'temps-long', title: 'La magie du temps long', icon: '🐢' },
      { id: 'actualisation', title: 'Remonter le temps', icon: '⏪' },
      { id: 'inflation', title: 'Le voleur silencieux', icon: '🦟' },
    ],
  },
  {
    id: 'ch3',
    number: 3,
    title: 'Le Crocodile du Risque',
    guide: 'crocodile',
    blurb: "Le hasard a des règles. Apprends à les lire avant de traverser la rivière.",
    steps: [
      { id: 'probas', title: 'Pile ou banane', icon: '🎲' },
      { id: 'esperance', title: "L'espérance", icon: '⚖️' },
      { id: 'ecart-type', title: 'Mesurer la tempête', icon: '🌪️' },
      { id: 'diversification', title: 'Ne pas mettre ses œufs…', icon: '🧺' },
      { id: 'arnaques', title: 'Les promesses trop belles', icon: '🪤' },
    ],
  },
  {
    id: 'ch4',
    number: 4,
    title: 'Le Grand Marché',
    guide: 'perroquet',
    blurb: "Qui fixe les prix ? Personne… et tout le monde à la fois.",
    steps: [
      { id: 'offre-demande', title: 'Offre et demande', icon: '📈' },
      { id: 'carnet', title: "Le carnet d'ordres", icon: '📒' },
      { id: 'actions', title: "Posséder un morceau d'arbre", icon: '🌴' },
      { id: 'obligations', title: 'Prêter à la tribu', icon: '🤲' },
      { id: 'devises', title: 'Bananes contre noix de coco', icon: '💱' },
    ],
  },
]

export const PATHS = [
  {
    id: 'fourmis',
    name: 'Le Sentier des Fourmis',
    guide: 'fourmi',
    theme: 'Finances personnelles',
    summit: 'Le plan de toute une vie',
    stops: ['Budget', 'Épargne de précaution', 'Crédit immobilier', 'Investissement passif', 'Retraite'],
  },
  {
    id: 'elephant',
    name: "Le Territoire de l'Éléphant",
    guide: 'elephant',
    theme: 'Entreprise & valorisation',
    summit: 'DCF & LBO',
    stops: ['Les trois états financiers', 'Ratios', 'Flux de trésorerie', 'WACC', 'DCF', 'Fusions & LBO'],
  },
  {
    id: 'singe',
    name: 'La Canopée des Singes',
    guide: 'singe',
    theme: 'Marchés & portefeuilles',
    summit: 'Frontière efficiente & CAPM',
    stops: ['Prix d\'une obligation', 'Duration & convexité', 'Valoriser une action', 'Markowitz', 'CAPM', 'Biais du singe'],
  },
  {
    id: 'cameleon',
    name: 'Le Repaire du Caméléon',
    guide: 'cameleon',
    theme: 'Produits dérivés',
    summit: 'Black-Scholes',
    stops: ['Forwards', 'Futures', 'Swaps', 'Options', 'Parité call-put', 'Arbre binomial', 'Monde neutre au risque', 'Mouvement brownien', "Lemme d'Itô", 'Black-Scholes', 'Les Grecques'],
  },
  {
    id: 'jaguar',
    name: 'La Rivière du Jaguar',
    guide: 'jaguar',
    theme: 'Risque & finance quantitative',
    summit: 'Monte Carlo & VaR',
    stops: ['Value at Risk', 'Simulations Monte Carlo', 'Taux stochastiques', 'Risque de crédit'],
  },
]
