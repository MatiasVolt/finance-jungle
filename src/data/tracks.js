// Le catalogue. « Démarrer » est un parcours facultatif pour qui part de zéro.
// Chaque thème monte en 5 niveaux, du très accessible au très exigeant.
// Rien n'est verrouillé : l'ordre est conseillé, jamais imposé.
// Les textes sont bilingues : { fr, en }.

export const LEVELS = [
  { n: 1, name: { fr: 'Découverte', en: 'Discovery' }, hint: { fr: 'Aucun prérequis', en: 'No prerequisites' } },
  { n: 2, name: { fr: 'Fondamentaux', en: 'Fundamentals' }, hint: { fr: 'Les bases du thème', en: 'The core of the topic' } },
  { n: 3, name: { fr: 'Intermédiaire', en: 'Intermediate' }, hint: { fr: 'On sort les outils', en: 'Time for the tools' } },
  { n: 4, name: { fr: 'Avancé', en: 'Advanced' }, hint: { fr: 'Niveau master', en: "Master's degree level" } },
  { n: 5, name: { fr: 'Expert', en: 'Expert' }, hint: { fr: 'Pour faire chauffer la tête', en: 'For when you want your brain to sweat' } },
]

const L = (id, fr, en, minutes = 8) => ({ id, title: { fr, en }, minutes })

export const START = {
  id: 'demarrer',
  title: { fr: 'Démarrer', en: 'Getting started' },
  guide: 'hibou',
  tagline: {
    fr: 'Les bases des bases, et un peu d’histoire. Pour celles et ceux qui partent de zéro.',
    en: 'The very basics, plus a little history. For anyone starting from zero.',
  },
  lessons: [
    L('d-argent', "D'où vient l'argent ?", 'Where does money come from?', 6),
    L('d-banques', 'Les banques fabriquent de la monnaie', 'Banks create money', 5),
    L('d-temps', 'La Tortue et le temps', 'The Tortoise and time', 7),
    L('d-inflation', 'Le voleur silencieux', 'The silent thief', 5),
    L('d-risque', 'Pas de rendement sans risque', 'No return without risk', 6),
    L('d-marches', "Ce qu'on achète vraiment en Bourse", 'What you really buy on the stock market', 6),
  ],
}

export const TRACKS = [
  {
    id: 'marches',
    title: { fr: 'Finance de marché', en: 'Markets' },
    guide: 'singe',
    tagline: {
      fr: 'Actions, obligations, indices, et comment on construit un portefeuille.',
      en: 'Stocks, bonds, indices, and how to build a portfolio.',
    },
    levels: [
      [L('marches-1-1', 'Une action, une obligation, un indice', 'A stock, a bond, an index'), L('marches-1-2', 'Le cours de Bourse', 'The share price'), L('marches-1-3', 'Rendement et dividende', 'Return and dividends')],
      [L('marches-2-1', "Le carnet d'ordres", 'The order book'), L('marches-2-2', 'Liquidité et spread', 'Liquidity and the spread'), L('marches-2-3', "Prix et taux d'une obligation", 'Bond prices and yields')],
      [L('marches-3-1', 'Valoriser une action : dividendes actualisés', 'Valuing a stock: discounted dividends'), L('marches-3-2', 'Les multiples (PER, EV/EBITDA)', 'Multiples (P/E, EV/EBITDA)'), L('marches-3-3', 'Duration et convexité', 'Duration and convexity')],
      [L('marches-4-1', 'Markowitz et la diversification', 'Markowitz and diversification'), L('marches-4-2', 'La frontière efficiente', 'The efficient frontier'), L('marches-4-3', 'Le CAPM et le bêta', 'CAPM and beta')],
      [L('marches-5-1', 'Efficience des marchés', 'Market efficiency'), L('marches-5-2', 'Modèles multifactoriels', 'Multi-factor models'), L('marches-5-3', 'Microstructure et trading haute fréquence', 'Microstructure and high-frequency trading')],
    ],
  },
  {
    id: 'compta',
    title: { fr: 'Comptabilité', en: 'Accounting' },
    guide: 'elephant',
    tagline: {
      fr: 'La langue des entreprises. Chaque euro qui bouge laisse deux traces.',
      en: 'The language of business. Every euro that moves leaves two traces.',
    },
    levels: [
      [L('compta-1-1', 'La partie double', 'Double-entry bookkeeping'), L('compta-1-2', 'Le bilan en une image', 'The balance sheet in one picture'), L('compta-1-3', 'Le compte de résultat', 'The income statement')],
      [L('compta-2-1', 'Charges, produits, et le piège de la trésorerie', 'Expenses, revenue and the cash trap'), L('compta-2-2', 'Amortissements', 'Depreciation'), L('compta-2-3', 'Stocks et créances', 'Inventory and receivables')],
      [L('compta-3-1', 'Le tableau des flux de trésorerie', 'The cash flow statement'), L('compta-3-2', 'Provisions et dépréciations', 'Provisions and impairments'), L('compta-3-3', 'Soldes intermédiaires de gestion', 'From revenue to net income, step by step')],
      [L('compta-4-1', 'Normes IFRS vs plan comptable français', 'IFRS vs local GAAP'), L('compta-4-2', 'Consolidation de groupe', 'Group consolidation'), L('compta-4-3', 'Goodwill et regroupements', 'Goodwill and business combinations')],
      [L('compta-5-1', 'Analyse financière complète', 'Full financial analysis'), L('compta-5-2', 'Détecter un habillage de bilan', 'Spotting window dressing'), L('compta-5-3', 'Cas : lire un rapport annuel du CAC 40', 'Case study: reading a blue-chip annual report')],
    ],
  },
  {
    id: 'temps',
    title: { fr: 'Mathématiques financières', en: 'Financial mathematics' },
    guide: 'tortue',
    tagline: {
      fr: "Intérêts, actualisation, emprunts : tout ce que le temps fait à l'argent.",
      en: 'Interest, discounting, loans: everything time does to money.',
    },
    levels: [
      [L('temps-1-1', 'Intérêt simple, intérêt composé', 'Simple and compound interest'), L('temps-1-2', 'La règle de 72', 'The rule of 72'), L('temps-1-3', 'Taux annuel, taux mensuel', 'Annual rates, monthly rates')],
      [L('temps-2-1', 'Valeur actuelle et actualisation', 'Present value and discounting'), L('temps-2-2', 'La VAN', 'Net present value'), L('temps-2-3', 'Le TRI', 'Internal rate of return')],
      [L('temps-3-1', 'Rentes et annuités', 'Annuities'), L('temps-3-2', "Tableau d'amortissement d'un prêt", 'A loan amortisation schedule'), L('temps-3-3', 'TAEG et coût réel du crédit', 'APR and the true cost of credit')],
      [L('temps-4-1', 'Capitalisation continue et le nombre e', 'Continuous compounding and the number e'), L('temps-4-2', 'Courbe des taux', 'The yield curve'), L('temps-4-3', 'Taux forward', 'Forward rates')],
      [L('temps-5-1', 'Bootstrapping de la courbe zéro-coupon', 'Bootstrapping the zero-coupon curve'), L('temps-5-2', 'Modèles de taux (Vasicek, CIR)', 'Interest rate models (Vasicek, CIR)'), L('temps-5-3', 'Valoriser un swap de taux', 'Pricing an interest rate swap')],
    ],
  },
  {
    id: 'stats',
    title: { fr: 'Statistiques', en: 'Statistics' },
    guide: 'crocodile',
    tagline: {
      fr: "Le hasard a des règles. Les connaître, c'est voir ce qui dort sous l'eau calme.",
      en: "Chance has rules. Knowing them means seeing what sleeps under calm water.",
    },
    levels: [
      [L('stats-1-1', 'Moyenne, médiane, et pourquoi elles mentent', 'Mean, median, and why they lie'), L('stats-1-2', 'Dispersion et écart-type', 'Spread and standard deviation'), L('stats-1-3', 'Lire un graphique sans se faire avoir', 'Reading a chart without being fooled')],
      [L('stats-2-1', 'Probabilités de base', 'Basic probability'), L('stats-2-2', "L'espérance", 'Expected value'), L('stats-2-3', 'Probabilités conditionnelles et Bayes', 'Conditional probability and Bayes')],
      [L('stats-3-1', 'La loi normale', 'The normal distribution'), L('stats-3-2', 'Le théorème central limite', 'The central limit theorem'), L('stats-3-3', 'Queues épaisses : quand la cloche ment', 'Fat tails: when the bell curve lies')],
      [L('stats-4-1', 'Intervalles de confiance', 'Confidence intervals'), L('stats-4-2', "Tests d'hypothèse et p-value", 'Hypothesis tests and p-values'), L('stats-4-3', 'Régression linéaire', 'Linear regression')],
      [L('stats-5-1', 'Séries temporelles et stationnarité', 'Time series and stationarity'), L('stats-5-2', 'Modèles ARMA et GARCH', 'ARMA and GARCH models'), L('stats-5-3', 'Overfitting et data snooping', 'Overfitting and data snooping')],
    ],
  },
  {
    id: 'macro',
    title: { fr: 'Macroéconomie', en: 'Macroeconomics' },
    guide: 'baleine',
    tagline: {
      fr: 'PIB, inflation, banques centrales : la mer dans laquelle tout le monde nage.',
      en: 'GDP, inflation, central banks: the sea everybody swims in.',
    },
    levels: [
      [L('macro-1-1', 'Le PIB, ce qu’il mesure et ce qu’il oublie', 'GDP: what it measures and what it misses'), L('macro-1-2', 'Inflation et chômage', 'Inflation and unemployment'), L('macro-1-3', 'Qui fait quoi : État, banque centrale, banques', 'Who does what: government, central bank, banks')],
      [L('macro-2-1', 'La politique monétaire', 'Monetary policy'), L('macro-2-2', 'La politique budgétaire', 'Fiscal policy'), L('macro-2-3', 'Dette publique et déficit', 'Public debt and deficits')],
      [L('macro-3-1', 'Taux de change', 'Exchange rates'), L('macro-3-2', 'Balance des paiements', 'The balance of payments'), L('macro-3-3', 'Le modèle offre globale / demande globale', 'Aggregate supply and demand')],
      [L('macro-4-1', 'IS-LM', 'IS-LM'), L('macro-4-2', 'La courbe de Phillips', 'The Phillips curve'), L('macro-4-3', 'Règle de Taylor', 'The Taylor rule')],
      [L('macro-5-1', 'Assouplissement quantitatif', 'Quantitative easing'), L('macro-5-2', 'Crises de dette souveraine', 'Sovereign debt crises'), L('macro-5-3', 'Les débats actuels : MMT, r*, stagnation séculaire', 'Current debates: MMT, r*, secular stagnation')],
    ],
  },
  {
    id: 'histoire',
    title: { fr: 'Histoire de la finance', en: 'History of finance' },
    guide: 'hibou',
    tagline: {
      fr: 'De Babylone à la blockchain : chaque crise a laissé une règle derrière elle.',
      en: 'From Babylon to the blockchain: every crisis left a rule behind.',
    },
    levels: [
      [L('histoire-1-1', 'Mésopotamie : la dette avant la monnaie', 'Mesopotamia: debt before money'), L('histoire-1-2', 'Lydie : la première pièce', 'Lydia: the first coin'), L('histoire-1-3', 'Le papier-monnaie chinois', 'Chinese paper money')],
      [L('histoire-2-1', 'Les banquiers de Florence', 'The bankers of Florence'), L('histoire-2-2', 'Amsterdam et la première Bourse', 'Amsterdam and the first stock exchange'), L('histoire-2-3', 'La tulipomanie', 'Tulip mania')],
      [L('histoire-3-1', 'John Law et la bulle du Mississippi', 'John Law and the Mississippi bubble'), L('histoire-3-2', "L'étalon-or", 'The gold standard'), L('histoire-3-3', 'Le krach de 1929', 'The crash of 1929')],
      [L('histoire-4-1', 'Bretton Woods', 'Bretton Woods'), L('histoire-4-2', '1971 : la fin de la convertibilité', '1971: the end of convertibility'), L('histoire-4-3', 'Le krach de 1987 et la naissance du risque moderne', '1987 and the birth of modern risk management')],
      [L('histoire-5-1', 'LTCM : quand les prix Nobel font faillite', 'LTCM: when Nobel laureates go bust'), L('histoire-5-2', '2008, pièce par pièce', '2008, piece by piece'), L('histoire-5-3', "L'euro, la crise grecque et après", 'The euro, the Greek crisis and after')],
    ],
  },
  {
    id: 'controle',
    title: { fr: 'Contrôle de gestion', en: 'Management control' },
    guide: 'abeille',
    tagline: {
      fr: "Savoir ce que coûte vraiment ce qu'on fabrique, et piloter avec des chiffres.",
      en: 'Knowing what things really cost to make, and steering by the numbers.',
    },
    levels: [
      [L('controle-1-1', 'Coûts fixes, coûts variables', 'Fixed and variable costs'), L('controle-1-2', 'Le seuil de rentabilité', 'The break-even point'), L('controle-1-3', 'Marge et taux de marge', 'Margin and margin rate')],
      [L('controle-2-1', 'Coûts directs et indirects', 'Direct and indirect costs'), L('controle-2-2', 'La méthode des coûts complets', 'Full costing'), L('controle-2-3', 'Le coût marginal', 'Marginal cost')],
      [L('controle-3-1', 'Construire un budget', 'Building a budget'), L('controle-3-2', "L'analyse des écarts", 'Variance analysis'), L('controle-3-3', 'La méthode ABC', 'Activity-based costing')],
      [L('controle-4-1', 'Tableaux de bord et KPI', 'Dashboards and KPIs'), L('controle-4-2', 'Balanced scorecard', 'The balanced scorecard'), L('controle-4-3', 'Prix de cession interne', 'Transfer pricing')],
      [L('controle-5-1', 'Création de valeur : EVA et ROCE', 'Value creation: EVA and ROCE'), L('controle-5-2', 'Pilotage d’un groupe multi-activités', 'Steering a multi-business group'), L('controle-5-3', 'Cas : redresser une business unit', 'Case study: turning around a business unit')],
    ],
  },
  {
    id: 'droit',
    title: { fr: 'Droit financier', en: 'Financial law' },
    guide: 'lion',
    tagline: {
      fr: 'Qui a le droit de faire quoi, et pourquoi la loi de la jungle a besoin de règles.',
      en: 'Who is allowed to do what, and why the law of the jungle needs rules.',
    },
    levels: [
      [L('droit-1-1', 'Pourquoi réguler la finance ?', 'Why regulate finance?'), L('droit-1-2', 'Les formes de sociétés', 'Types of companies'), L('droit-1-3', 'Les gendarmes : AMF, ACPR, BCE', 'The watchdogs')],
      [L('droit-2-1', "Le délit d'initié", 'Insider trading'), L('droit-2-2', 'Manipulation de cours', 'Market manipulation'), L('droit-2-3', "L'information des investisseurs", 'Investor disclosure')],
      [L('droit-3-1', 'MiFID II', 'MiFID II'), L('droit-3-2', 'Bâle III et les fonds propres des banques', 'Basel III and bank capital'), L('droit-3-3', 'Lutte contre le blanchiment (LCB-FT)', 'Anti-money laundering')],
      [L('droit-4-1', 'Les offres publiques (OPA, OPE)', 'Takeover bids'), L('droit-4-2', 'Procédures collectives', 'Insolvency proceedings'), L('droit-4-3', 'Sûretés et garanties', 'Collateral and guarantees')],
      [L('droit-5-1', 'Le règlement MiCA et les cryptoactifs', 'MiCA and crypto-assets'), L('droit-5-2', 'Fiscalité des instruments financiers', 'Taxation of financial instruments'), L('droit-5-3', 'Cas : anatomie d’une affaire de manipulation', 'Case study: anatomy of a manipulation case')],
    ],
  },
  {
    id: 'philo',
    title: { fr: 'Philosophie financière', en: 'Philosophy of finance' },
    guide: 'paresseux',
    tagline: {
      fr: "Qu'est-ce que la valeur ? Le profit est-il moral ? Les grandes questions, sans jargon.",
      en: 'What is value? Is profit moral? The big questions, without the jargon.',
    },
    levels: [
      [L('philo-1-1', "Aristote et l'argent qui fait de l'argent", 'Aristotle and money that breeds money'), L('philo-1-2', "Qu'est-ce que la valeur ?", 'What is value?'), L('philo-1-3', 'Le mythe du troc', 'The myth of barter')],
      [L('philo-2-1', 'Adam Smith et la main invisible', 'Adam Smith and the invisible hand'), L('philo-2-2', 'Marx et le capital', 'Marx and capital'), L('philo-2-3', "L'usure, de l'Église à la finance islamique", 'Usury, from the Church to Islamic finance')],
      [L('philo-3-1', 'Keynes et les esprits animaux', 'Keynes and animal spirits'), L('philo-3-2', 'Hayek et le prix comme information', 'Hayek and prices as information'), L('philo-3-3', 'Risque et incertitude selon Knight', 'Knight on risk and uncertainty')],
      [L('philo-4-1', 'Taleb : le cygne noir', 'Taleb: the black swan'), L('philo-4-2', 'La finance comportementale', 'Behavioural finance'), L('philo-4-3', 'Qui doit quoi à qui ? Philosophie de la dette', 'Who owes what to whom? A philosophy of debt')],
      [L('philo-5-1', 'Finance et justice : Rawls, Piketty', 'Finance and justice: Rawls, Piketty'), L('philo-5-2', 'La finance durable est-elle possible ?', 'Is sustainable finance possible?'), L('philo-5-3', 'Performativité : quand les modèles font les marchés', 'Performativity: when models make markets')],
    ],
  },
  {
    id: 'derives',
    title: { fr: 'Produits dérivés', en: 'Derivatives' },
    guide: 'cameleon',
    tagline: {
      fr: "Des contrats dont la valeur change de couleur avec ce qu'ils touchent.",
      en: 'Contracts whose value changes colour with whatever they touch.',
    },
    levels: [
      [L('derives-1-1', 'Forward : fixer un prix aujourd’hui', 'Forwards: locking in a price today'), L('derives-1-2', 'Futures et marché organisé', 'Futures and exchanges'), L('derives-1-3', 'Couverture ou spéculation ?', 'Hedging or speculating?')],
      [L('derives-2-1', 'Call et put', 'Calls and puts'), L('derives-2-2', 'Profils de gain', 'Payoff diagrams'), L('derives-2-3', 'Stratégies simples', 'Simple strategies')],
      [L('derives-3-1', "L'arbre binomial à une période", 'The one-period binomial tree'), L('derives-3-2', 'La parité call-put', 'Put-call parity'), L('derives-3-3', "L'arbre à plusieurs périodes", 'Multi-period trees')],
      [L('derives-4-1', 'Mouvement brownien', 'Brownian motion'), L('derives-4-2', "Le lemme d'Itô", "Itô's lemma"), L('derives-4-3', 'Black-Scholes', 'Black-Scholes')],
      [L('derives-5-1', 'Les Grecques', 'The Greeks'), L('derives-5-2', 'Volatilité implicite et smile', 'Implied volatility and the smile'), L('derives-5-3', 'Options exotiques', 'Exotic options')],
    ],
  },
  {
    id: 'quant',
    title: { fr: 'Finance quantitative', en: 'Quantitative finance' },
    guide: 'jaguar',
    tagline: {
      fr: 'Modéliser, simuler, mesurer le risque. Là où les maths rencontrent les marchés.',
      en: 'Modelling, simulating, measuring risk. Where maths meets markets.',
    },
    levels: [
      [L('quant-1-1', 'Rendements simples et logarithmiques', 'Simple and log returns'), L('quant-1-2', 'Volatilité historique', 'Historical volatility'), L('quant-1-3', 'Corrélation', 'Correlation')],
      [L('quant-2-1', 'Matrices de covariance', 'Covariance matrices'), L('quant-2-2', 'Marche aléatoire', 'Random walks'), L('quant-2-3', 'Backtester une stratégie', 'Backtesting a strategy')],
      [L('quant-3-1', 'Simulation de Monte Carlo', 'Monte Carlo simulation'), L('quant-3-2', 'Value at Risk', 'Value at Risk'), L('quant-3-3', 'Expected Shortfall', 'Expected Shortfall')],
      [L('quant-4-1', 'Calcul stochastique appliqué', 'Applied stochastic calculus'), L('quant-4-2', 'Monte Carlo pour les options', 'Monte Carlo for options'), L('quant-4-3', 'Calibration de modèles', 'Model calibration')],
      [L('quant-5-1', 'Volatilité stochastique (Heston)', 'Stochastic volatility (Heston)'), L('quant-5-2', 'Risque de crédit et modèle de Merton', 'Credit risk and the Merton model'), L('quant-5-3', 'Machine learning en finance : promesses et pièges', 'Machine learning in finance: promise and pitfalls')],
    ],
  },
  {
    id: 'perso',
    title: { fr: 'Finances personnelles', en: 'Personal finance' },
    guide: 'fourmi',
    tagline: {
      fr: 'Budget, épargne, crédit, investissement : gérer son argent sans se faire avoir.',
      en: 'Budgeting, saving, borrowing, investing: managing your money without getting ripped off.',
    },
    levels: [
      [L('perso-1-1', 'Faire un budget qui tient', 'A budget that actually holds'), L('perso-1-2', "L'épargne de précaution", 'The emergency fund'), L('perso-1-3', 'Les livrets réglementés', "France's regulated savings accounts")],
      [L('perso-2-1', 'Comprendre un crédit', 'Understanding a loan'), L('perso-2-2', 'Le crédit immobilier', 'Mortgages'), L('perso-2-3', 'Assurances : utiles ou pas ?', 'Insurance: worth it or not?')],
      [L('perso-3-1', 'Investir avec des ETF', 'Investing with ETFs'), L('perso-3-2', 'PEA, assurance-vie, compte-titres', 'Tax wrappers: PEA, life insurance, brokerage account'), L('perso-3-3', 'Les frais qui mangent tout', 'The fees that eat everything')],
      [L('perso-4-1', "L'allocation d'actifs", 'Asset allocation'), L('perso-4-2', 'Investir chaque mois : le DCA', 'Investing every month: dollar-cost averaging'), L('perso-4-3', "La fiscalité de l'épargne", 'How savings are taxed')],
      [L('perso-5-1', 'Préparer sa retraite', 'Planning for retirement'), L('perso-5-2', 'Immobilier locatif : faire les vrais calculs', 'Buy-to-let: doing the real maths'), L('perso-5-3', 'Transmettre un patrimoine', 'Passing on wealth')],
    ],
  },
]

export const ALL_TRACKS = [START, ...TRACKS]

// Index rapide : lessonId -> { track, level (0 pour Démarrer), meta, index }
export const LESSON_INDEX = {}
START.lessons.forEach((meta, index) => (LESSON_INDEX[meta.id] = { track: START, level: 0, meta, index }))
TRACKS.forEach(track =>
  track.levels.forEach((lessons, li) =>
    lessons.forEach((meta, index) => (LESSON_INDEX[meta.id] = { track, level: li + 1, meta, index })),
  ),
)

export function trackLessons(track) {
  return track.levels ? track.levels.flat() : track.lessons
}

export function findTrack(id) {
  return ALL_TRACKS.find(t => t.id === id)
}
