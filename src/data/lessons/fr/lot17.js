// Niveau 5 (fin) : histoire, droit, philosophie. Les dernières marches du parcours.
// Escalier : rappel → application → défi facultatif.

export default [
  // ───────────── Histoire · N5 ─────────────
  {
    id: 'histoire-5-1',
    screens: [
      {
        type: 'read',
        kicker: 'Greenwich, Connecticut, 1994',
        title: 'Le fonds des génies',
        body: "John Meriwether, star du trading obligataire, fonde **Long-Term Capital Management** (LTCM). Parmi ses associés : Myron Scholes et Robert Merton, qui recevront le prix Nobel en 1997 pour Black-Scholes.\n\nLa stratégie : repérer des écarts de prix **minuscules** entre titres très proches (par exemple deux obligations d'État américaines presque identiques) et parier qu'ils vont se **refermer**. Pour que ces petits écarts rapportent, il faut un **levier énorme**.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: "Début 1998, LTCM a environ 4,7 milliards de dollars de capitaux propres et 125 milliards d'actifs au bilan. Quel est son levier (actifs ÷ capitaux propres) ? (1 décimale)",
        answer: 26.6,
        tolerance: 0.1,
        explain: '125 ÷ 4,7 ≈ 26,6, sans compter plus de 1 000 milliards de dollars de notionnel en produits dérivés. Les rendements de 1995 et 1996 dépassent 40 % par an.',
      },
      {
        type: 'read',
        kicker: 'Août 1998',
        title: 'Tout bouge en même temps',
        body: "La Russie fait défaut sur sa dette. Les investisseurs paniqués se ruent vers les titres les plus sûrs et les plus liquides : c'est la **fuite vers la qualité**. Les écarts que LTCM pariait voir se refermer **s'élargissent**, partout à la fois. Des positions censées être indépendantes deviennent **corrélées**.\n\nEn moins de quatre mois, le fonds perd environ 4,6 milliards de dollars.",
      },
      {
        type: 'number',
        question: "Avec un levier de 25, de combien de % les capitaux propres baissent-ils si les actifs perdent 4 % ?",
        answer: 100,
        tolerance: 0.01,
        unit: '%',
        explain: '4 % × 25 = 100 % : tout le capital est effacé. Le levier transforme un mouvement modeste en catastrophe, comme l’achat sur marge en 1929.',
      },
      {
        type: 'read',
        kicker: 'Septembre 1998',
        title: 'Le sauvetage',
        body: "La Réserve fédérale de New York réunit 14 grandes banques, qui injectent environ **3,6 milliards de dollars** pour reprendre le fonds et le liquider en douceur. Pas d'argent public, mais une intervention directe des autorités.",
      },
      {
        type: 'quiz',
        question: "Pourquoi la Fed s'est-elle impliquée dans le sort d'un fonds privé ?",
        options: [
          'Parce que ses dirigeants étaient prix Nobel',
          "Parce que LTCM avait des positions avec presque toutes les grandes banques : une liquidation brutale aurait pu provoquer des pertes en chaîne dans tout le système",
          'Parce que la loi l’y obligeait',
          'Pour sauver les associés',
        ],
        answer: 1,
        explain: "C'est le **risque systémique** (Droit financier, niveau 1). Dix ans plus tard, le même dilemme se posera à une échelle bien plus grande avec Lehman Brothers.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Quelle est la leçon la plus profonde de LTCM ?',
        options: [
          'Que les mathématiques financières sont inutiles',
          "Que des modèles calibrés sur les corrélations et la liquidité du passé peuvent échouer exactement quand tout le monde veut sortir en même temps, et que le levier ne laisse pas le temps d'avoir raison",
          'Qu’il ne faut jamais investir en obligations',
          'Que les prix Nobel sont malhonnêtes',
        ],
        answer: 1,
        explain: "Queues épaisses, corrélations qui montent en crise, limites de l'arbitrage, levier, risque de liquidité : presque tout le programme du niveau 3 à 5 s'est joué en quelques semaines. Keynes l'avait dit : le marché peut rester irrationnel plus longtemps que tu ne restes solvable.",
      },
    ],
  },

  {
    id: 'histoire-5-2',
    screens: [
      {
        type: 'read',
        kicker: 'Au départ',
        title: 'Les subprimes et la titrisation',
        body: "Au début des années 2000, les banques américaines accordent de plus en plus de crédits immobiliers à des emprunteurs fragiles (**subprimes**), souvent avec des taux d'appel bas qui grimpent ensuite.\n\nCes crédits ne restent pas dans les banques : ils sont regroupés et transformés en titres (**titrisation**), vendus dans le monde entier. Puis ces titres sont eux-mêmes regroupés dans des **CDO**, découpés en **tranches**.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'La cascade',
        title: 'Comment fonctionnent les tranches',
        body: "Les pertes du portefeuille sont absorbées **dans l'ordre** :\n\n1. d'abord la tranche **equity** (la plus risquée, la mieux rémunérée) ;\n2. puis la tranche **mezzanine** ;\n3. enfin la tranche **senior**, protégée par les deux autres, et souvent notée **AAA**.\n\nExemple : un CDO de 100 M$ avec une tranche equity de 5, une mezzanine de 15 et une senior de 80.",
      },
      {
        type: 'number',
        question: "Le portefeuille subit 12 M$ de pertes. Quelle part de la tranche mezzanine est perdue, en % ? (2 décimales)",
        answer: 46.67,
        tolerance: 0.05,
        unit: '%',
        explain: 'L’equity absorbe les 5 premiers millions (perdue à 100 %). Les 7 suivants touchent la mezzanine : 7 ÷ 15 ≈ 46,67 %. La senior n’a rien perdu.',
      },
      {
        type: 'quiz',
        question: "Pourquoi les tranches senior paraissaient-elles presque sans risque, et pourquoi ne l'étaient-elles pas ?",
        options: [
          'Elles étaient garanties par l’État',
          "Les modèles supposaient que les défauts de régions différentes étaient peu corrélés ; une baisse nationale des prix de l'immobilier les a fait défaillir ensemble",
          'Elles ne contenaient aucun crédit immobilier',
          'Elles étaient sans risque, le problème était ailleurs',
        ],
        answer: 1,
        explain: "La loi des grands nombres ne protège que si les risques sont indépendants (Statistiques, niveau 3). Quand tout chute en même temps, la protection des tranches inférieures fond d'un coup.",
      },
      {
        type: 'read',
        kicker: '2008',
        title: "L'effondrement",
        body: "- **Mars** : Bear Stearns, au bord de la faillite, est rachetée par JPMorgan avec le soutien de la Fed.\n- **15 septembre** : **Lehman Brothers** fait faillite, avec plus de 600 milliards de dollars d'actifs, la plus grande faillite de l'histoire américaine.\n- **Le lendemain** : l'assureur **AIG**, qui avait vendu d'énormes quantités de protection contre les défauts (des CDS), est sauvé par l'État américain.\n- Un fonds monétaire réputé sans risque voit la valeur de ses parts tomber sous 1 dollar, et les retraits massifs se propagent à tout le financement de court terme.",
      },
      {
        type: 'quiz',
        question: "Le modèle « créer pour distribuer » (accorder un crédit puis le revendre aussitôt) a encouragé de mauvais crédits. Pourquoi ?",
        options: [
          'Parce que les taux étaient trop élevés',
          "Parce que le prêteur qui revend le crédit ne supporte plus le risque de défaut : il est incité à prêter beaucoup, pas à prêter bien",
          'Parce que les emprunteurs étaient trop riches',
          'Ce modèle n’a joué aucun rôle',
        ],
        answer: 1,
        explain: "C'est un **aléa moral** (Finances personnelles, niveau 2). La réglementation post-2008 oblige d'ailleurs les émetteurs de titrisations à conserver une partie du risque (environ 5 % en Europe).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Quel enchaînement résume le mieux la crise de 2008 ?',
        options: [
          'Une simple bulle immobilière, sans conséquence sur les banques',
          "Crédits de mauvaise qualité, titrisation qui disperse et masque le risque, levier élevé des banques, corrélations sous-estimées, puis panique sur le financement de court terme",
          'Une erreur informatique',
          'Une hausse soudaine des impôts',
        ],
        answer: 1,
        explain: "Incitations, modèles, levier, liquidité : chaque maillon a été vu dans un thème différent. Les réponses (Bâle III, garantie des dépôts, prêteur en dernier ressort, banque centrale) aussi.",
      },
    ],
  },

  {
    id: 'histoire-5-3',
    screens: [
      {
        type: 'read',
        kicker: '1999 – 2002',
        title: "L'euro",
        body: "L'euro naît en 1999 comme monnaie de compte, puis les billets et pièces arrivent le 1er janvier 2002. Une seule politique monétaire, celle de la BCE, pour des pays aux économies très différentes.\n\nMais il n'y a **pas d'union budgétaire** : chaque pays garde son budget et sa dette. Les critères de Maastricht (déficit ≤ 3 %, dette ≤ 60 %) sont censés suffire à garder la discipline.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'Les années faciles',
        title: 'La grande convergence',
        body: "Avant 2008, les marchés prêtent à la Grèce, au Portugal ou à l'Espagne presque au **même taux** qu'à l'Allemagne, comme si le risque avait disparu avec l'euro.\n\nLe crédit bon marché alimente des booms (immobilier en Espagne et en Irlande, dépenses publiques en Grèce) et de gros **déficits courants**, financés par les pays excédentaires du Nord.",
      },
      {
        type: 'read',
        kicker: 'Octobre 2009',
        title: 'La révélation grecque',
        body: "Le nouveau gouvernement grec annonce que le déficit public est bien plus élevé que prévu : environ **12,7 %** du PIB au lieu des 6 % annoncés (il sera finalement estimé à plus de 15 %). La confiance s'effondre, les taux grecs explosent.\n\nEn 2010, l'Union européenne et le FMI accordent un premier plan d'aide de **110 milliards d'euros**, puis un second d'environ **130 milliards** en 2012, avec la restructuration de la dette privée vue en Philosophie.",
      },
      {
        type: 'number',
        question: "Combien représentent ensemble les deux premiers plans d'aide, en milliards d'euros ?",
        answer: 240,
        tolerance: 0.5,
        unit: 'Md€',
        explain: '110 + 130 = 240 Md€, soit plus que le PIB grec de l’époque. Un troisième plan, de 86 Md€, suivra en 2015.',
      },
      {
        type: 'read',
        kicker: 'Le prix',
        title: "L'austérité",
        body: "En échange de l'aide, la Grèce doit réduire fortement ses dépenses et augmenter ses impôts. Entre 2008 et 2013, son PIB recule d'environ **25 %**, et le chômage dépasse **27 %**.\n\nUne dépression d'une ampleur comparable à celle des États-Unis dans les années 1930.",
      },
      {
        type: 'number',
        question: "Après une baisse de 25 % du PIB, de combien (en %) faut-il qu'il remonte pour revenir à son niveau d'avant-crise ? (2 décimales)",
        answer: 33.33,
        tolerance: 0.05,
        unit: '%',
        explain: '100 ÷ 75 − 1 ≈ 33,33 %. Le piège de l’asymétrie, vu dès le niveau 1 de Finance de marché, à l’échelle d’un pays entier.',
      },
      {
        type: 'read',
        kicker: 'Les réponses',
        title: "Ce que l'Europe a construit",
        body: "- **2012** : création du **Mécanisme européen de stabilité** (MES), capable de prêter aux États en difficulté.\n- **2012** : « *whatever it takes* » de Mario Draghi (Macroéconomie, niveau 5).\n- **2014** : l'**union bancaire** confie à la BCE la supervision des grandes banques, pour casser la boucle banques-États.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Selon la théorie des zones monétaires optimales (Robert Mundell, 1961), comment un pays de la zone euro peut-il retrouver sa compétitivité, puisqu'il ne peut plus dévaluer sa monnaie ?",
        options: [
          'En imprimant des euros',
          "Par une baisse relative de ses prix et salaires (« dévaluation interne »), par la mobilité des travailleurs, ou grâce à des transferts budgétaires entre pays",
          'En sortant automatiquement de l’euro',
          'Il n’a aucun moyen',
        ],
        answer: 1,
        explain: "Sans taux de change, l'ajustement passe par les prix, les salaires et le chômage, ce qui est lent et douloureux. D'où le débat sans fin sur une union budgétaire européenne. Tu viens de traverser 5 000 ans d'histoire financière, des tablettes de Mésopotamie à la zone euro.",
      },
    ],
  },

  // ───────────── Droit financier · N5 ─────────────
  {
    id: 'droit-5-1',
    screens: [
      {
        type: 'read',
        kicker: 'Réguler les cryptos',
        title: 'Le règlement MiCA',
        body: "Le règlement européen **MiCA** (*Markets in Crypto-Assets*), adopté en 2023, s'applique pleinement depuis le **30 décembre 2024**. Il crée un cadre unique pour les cryptoactifs dans toute l'Union :\n\n- les **prestataires de services sur cryptoactifs** (plateformes, conservateurs…) doivent être **agréés**, puis peuvent opérer dans toute l'UE (passeport européen) ;\n- les émetteurs doivent publier un **livre blanc** (un document d'information, comme un prospectus).",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Trois catégories',
        title: 'Tous les jetons ne se valent pas',
        body: "- **Jetons de monnaie électronique** (EMT) : des stablecoins adossés à **une seule monnaie officielle** (par exemple un euro numérique privé émis par un établissement agréé).\n- **Jetons se référant à des actifs** (ART) : des stablecoins adossés à un **panier** (plusieurs monnaies, matières premières…).\n- **Autres cryptoactifs** : bitcoin, ether et la plupart des autres jetons.",
      },
      {
        type: 'quiz',
        question: "Un stablecoin promet de valoir toujours exactement 1 €, et est adossé à des réserves en euros. Dans quelle catégorie MiCA entre-t-il ?",
        options: ['Autre cryptoactif', 'Jeton se référant à des actifs (ART)', 'Jeton de monnaie électronique (EMT)', 'Il n’est pas couvert'],
        answer: 2,
        explain: "Adossé à une seule monnaie officielle : c'est un EMT. Ses détenteurs doivent pouvoir se faire rembourser au pair, à tout moment.",
      },
      {
        type: 'read',
        kicker: 'Pourquoi tant de règles pour les stablecoins',
        title: 'Le souvenir de Terra',
        body: "En mai 2022, le stablecoin **TerraUSD**, qui n'était pas adossé à des réserves mais à un mécanisme algorithmique, perd son ancrage au dollar et s'effondre, entraînant des dizaines de milliards de dollars de pertes en quelques jours.\n\nMiCA impose donc des **réserves** solides et liquides, dont **au moins 30 %** en dépôts bancaires pour les jetons de monnaie électronique (davantage pour les plus gros).",
      },
      {
        type: 'number',
        question: "Un émetteur a 1 milliard d'euros de jetons de monnaie électronique en circulation. Quel montant minimum doit-il garder en dépôts bancaires, avec la règle des 30 %, en millions d'euros ?",
        answer: 300,
        tolerance: 0.5,
        unit: 'M€',
        explain: '30 % × 1 000 M€ = 300 M€. Le reste doit être placé dans des actifs très sûrs et liquides, comme des titres d’État à court terme.',
      },
      {
        type: 'quiz',
        question: 'Lequel de ces éléments est, en principe, hors du champ de MiCA ?',
        options: [
          'Une plateforme d’échange de cryptos',
          'Un stablecoin adossé au dollar',
          "Un NFT unique et non interchangeable (une œuvre numérique)",
          'Un conservateur de cryptoactifs',
        ],
        answer: 2,
        explain: "Les NFT réellement uniques sont en principe exclus (sauf s'ils sont émis en grandes séries interchangeables). La finance décentralisée sans intermédiaire identifiable et les monnaies de banque centrale le sont aussi.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Pourquoi les régulateurs s'inquiètent-ils particulièrement des grands stablecoins utilisés pour les paiements ?",
        options: [
          'Parce qu’ils sont trop lents',
          "Risque de panique et de retraits massifs comme pour une banque, création d'un système de paiement parallèle hors du contrôle des banques centrales, et enjeux de souveraineté monétaire",
          'Parce qu’ils ne peuvent pas être utilisés en Europe',
          'Parce qu’ils sont toujours frauduleux',
        ],
        answer: 1,
        explain: "Un stablecoin ressemble beaucoup à un dépôt bancaire : une promesse de remboursement au pair. Les leçons sur les paniques bancaires, la garantie des dépôts et la monnaie fiduciaire s'appliquent directement.",
      },
    ],
  },

  {
    id: 'droit-5-2',
    screens: [
      {
        type: 'read',
        kicker: 'Instrument par instrument',
        title: 'La fiscalité des placements en France',
        body: "Pour un particulier en France, les règles de base (avec les taux utilisés dans ce parcours, à vérifier chaque année) :\n\n- dividendes, intérêts, plus-values sur titres : **PFU d'environ 30 %**, ou option pour le barème ;\n- **PEA** et **assurance-vie** : régimes de faveur après 5 et 8 ans ;\n- **cryptoactifs** (investisseur occasionnel) : les plus-values sont imposées à environ 30 % lors d'une conversion en **monnaie officielle** ou d'un achat de bien. Un **échange crypto contre crypto** n'est pas imposable. Les cessions totales de moins de 305 € par an sont exonérées.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'La formule crypto',
        title: 'Une plus-value calculée sur le portefeuille',
        body: "Pour les cryptos, la plus-value se calcule sur l'**ensemble du portefeuille**, pas jeton par jeton :\n\n`plus-value = prix de cession − prix total d'acquisition × (prix de cession ÷ valeur globale du portefeuille)`\n\nAutrement dit, chaque vente « emporte » une part proportionnelle de ce que tu as payé.",
      },
      {
        type: 'number',
        question: "Tu as acheté pour 10 000 € de cryptos au total. Ton portefeuille vaut aujourd'hui 20 000 €. Tu en vends pour 5 000 €. Quelle est la plus-value imposable ?",
        answer: 2500,
        tolerance: 0.5,
        unit: '€',
        explain: '5 000 − 10 000 × (5 000 ÷ 20 000) = 5 000 − 2 500 = 2 500 €.',
      },
      {
        type: 'number',
        question: 'Avec un taux de 30 %, combien d’impôt dois-tu sur cette vente ?',
        answer: 750,
        tolerance: 0.5,
        unit: '€',
        explain: '30 % × 2 500 = 750 €. (Le prix total d’acquisition restant est ensuite réduit des 2 500 € « consommés ».)',
      },
      {
        type: 'read',
        kicker: "À l'international",
        title: 'Les dividendes étrangers',
        body: "Quand une entreprise étrangère te verse un dividende, son pays prélève souvent une **retenue à la source**. Grâce aux **conventions fiscales**, cette retenue est en général réduite (15 % pour les actions américaines, par exemple), et elle ouvre droit en France à un **crédit d'impôt**, imputé sur l'impôt sur le revenu (mais pas sur les prélèvements sociaux).",
      },
      {
        type: 'number',
        question: "Un dividende américain subit 15 % de retenue aux États-Unis. En France, le crédit de 15 % efface les 12,8 % d'impôt sur le revenu (l'excédent est perdu), mais les 17,2 % de prélèvements sociaux restent dus. Quel taux d'imposition total supportes-tu, en % ?",
        answer: 32.2,
        tolerance: 0.01,
        unit: '%',
        explain: '15 + 17,2 = 32,2 %, un peu plus que le PFU sur un dividende français. Un coût caché des actions étrangères en direct (sur un PEA, la question se pose différemment).',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Tu échanges du bitcoin contre de l'ether, puis l'ether contre des euros. Quelle opération est imposable en France ?",
        options: [
          'Les deux',
          'Seulement l’échange bitcoin contre ether',
          "Seulement la conversion en euros : l'échange crypto contre crypto est neutre fiscalement",
          'Aucune',
        ],
        answer: 2,
        explain: "Le fait générateur est la sortie vers la monnaie officielle (ou l'achat d'un bien). Les échanges entre cryptoactifs, y compris vers des stablecoins, sont en sursis d'imposition. Attention : chaque pays a ses propres règles, et elles évoluent vite.",
      },
    ],
  },

  {
    id: 'droit-5-3',
    screens: [
      {
        type: 'read',
        kicker: 'Cas pratique (fictif)',
        title: "L'affaire Canopée",
        body: "Canopée SA est une petite société cotée. Son PDG apprend, un lundi, que son plus gros client (40 % du chiffre d'affaires) ne renouvellera pas son contrat. Voici la chronologie. À toi de qualifier chaque étape avec ce que tu as appris en Droit financier.",
        guide: 'lion',
        note: 'Un vrai dossier se lit comme celui-ci : une chronologie, des faits, puis des qualifications. Prends ton temps.',
      },
      {
        type: 'table',
        kicker: 'La chronologie',
        title: 'Une semaine chez Canopée',
        columns: ['Jour', 'Fait'],
        rows: [
          ['Lundi', 'Le PDG apprend la perte du contrat'],
          ['Mardi', 'Il vend 200 000 actions Canopée à 10 €'],
          ['Mercredi', 'Communiqué : « L’activité reste solide et nos relations clients excellentes »'],
          ['Lundi suivant', 'La perte du contrat est enfin annoncée ; l’action tombe à 6 €'],
        ],
        caption: 'Les faits sont imaginaires, les règles sont réelles.',
      },
      {
        type: 'quiz',
        question: 'Comment qualifier la vente du mardi ?',
        options: ['Une opération normale', "Un délit d'initié (opération sur la base d'une information privilégiée)", 'Une manipulation de cours uniquement', 'Un franchissement de seuil'],
        answer: 1,
        explain: "L'information est précise, non publique, et allait faire chuter le cours. Le PDG l'a utilisée pour vendre.",
      },
      {
        type: 'number',
        question: 'Quelle perte le PDG a-t-il évitée grâce à cette vente ?',
        answer: 800000,
        tolerance: 0.5,
        unit: '€',
        explain: '200 000 × (10 − 6) = 800 000 €.',
      },
      {
        type: 'quiz',
        question: 'Et le communiqué du mercredi ?',
        options: [
          'Une simple opinion, sans conséquence',
          "Une diffusion d'information trompeuse (manipulation de cours), en plus d'un manquement à l'obligation de publier l'information privilégiée dès que possible",
          'Un délit d’initié',
          'Rien d’illégal',
        ],
        answer: 1,
        explain: "Non seulement l'information n'a pas été publiée, mais le marché a été activement trompé. Deux manquements distincts.",
      },
      {
        type: 'number',
        question: "La commission des sanctions de l'AMF peut infliger jusqu'à 100 M€, ou jusqu'à dix fois l'avantage retiré. Que vaut « dix fois l'avantage » ici ?",
        answer: 8000000,
        tolerance: 0.5,
        unit: '€',
        explain: '10 × 800 000 = 8 000 000 €. Le plafond retenu est le plus élevé des deux : ici, 100 M€. S’y ajoutent les poursuites pénales possibles.',
      },
      {
        type: 'read',
        kicker: 'La procédure',
        title: 'Deux voies, une seule poursuite',
        body: "L'AMF peut enquêter et sanctionner (voie **administrative**), et le **Parquet national financier** peut poursuivre devant le juge pénal. Depuis 2016, les deux autorités se concertent pour choisir **une seule** voie pour les mêmes faits : on ne peut pas être sanctionné deux fois.\n\nDans l'entreprise, la prévention repose sur des **listes d'initiés** obligatoires et sur les **fenêtres négatives** (30 jours avant les résultats).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Si tu étais responsable de la conformité de Canopée, quelle mesure aurait le plus probablement évité ce dossier ?",
        options: [
          'Interdire au PDG de détenir des actions',
          "Inscrire immédiatement l'information sur une liste d'initiés, bloquer toute opération des personnes informées, et publier l'information sans délai (ou justifier un différé strictement encadré)",
          'Attendre la fin de l’année',
          'Ne rien faire, ce n’est pas le rôle de la conformité',
        ],
        answer: 1,
        explain: "Tu viens d'appliquer, sur un seul dossier, l'information privilégiée, la manipulation de cours, l'obligation d'information et les sanctions. C'est exactement le raisonnement d'un juriste ou d'un compliance officer.",
      },
    ],
  },

  // ───────────── Philosophie · N5 ─────────────
  {
    id: 'philo-5-1',
    screens: [
      {
        type: 'read',
        kicker: '1971',
        title: 'Le voile d’ignorance',
        body: "Dans *Théorie de la justice*, John Rawls propose une expérience de pensée : imagine que tu dois choisir les règles d'une société **sans savoir** quelle place tu y occuperas (riche ou pauvre, en bonne santé ou non, talentueux ou non). C'est le **voile d'ignorance**.\n\nSa conclusion, le **principe de différence** : les inégalités ne sont justes que si elles profitent aussi aux **plus défavorisés**.",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: "Derrière le voile d'ignorance, laquelle de ces sociétés choisirais-tu selon Rawls ?",
        options: [
          'Celle où la moyenne est la plus élevée, même si les plus pauvres sont très pauvres',
          'Celle où le sort des plus défavorisés est le meilleur possible, même avec des inégalités',
          'Celle où tout le monde a exactement la même chose, même si tous sont plus pauvres',
          'Peu importe',
        ],
        answer: 1,
        explain: "Rawls n'est pas égalitariste strict : des inégalités sont acceptables si elles améliorent la situation des plus mal lotis (par exemple en récompensant l'innovation qui profite à tous).",
      },
      {
        type: 'read',
        kicker: 'La réponse libérale',
        title: 'Nozick',
        body: "En 1974, Robert Nozick objecte : la justice ne porte pas sur le **résultat** (qui a quoi), mais sur la **manière** dont on l'a obtenu. Si chaque échange a été libre et chaque acquisition légitime, la répartition qui en résulte est juste, quelle qu'elle soit.\n\nTaxer pour redistribuer revient alors, pour lui, à forcer certains à travailler pour d'autres.",
      },
      {
        type: 'read',
        kicker: '2013',
        title: 'Piketty et r > g',
        body: "Dans *Le Capital au XXIe siècle*, Thomas Piketty rassemble deux siècles de données. Sa thèse : quand le **rendement du capital** `r` dépasse durablement la **croissance de l'économie** `g`, les patrimoines hérités grossissent plus vite que les revenus du travail, et les inégalités de patrimoine se creusent.\n\nTu reconnais r et g ? Ce sont presque les mêmes lettres que dans la dynamique de la dette publique, mais avec un sens différent.",
      },
      {
        type: 'number',
        question: "Un patrimoine rapporte 5 % par an, entièrement réinvesti. Les salaires progressent de 1,5 % par an. Au bout de 30 ans, par combien le rapport patrimoine ÷ salaire a-t-il été multiplié ? (2 décimales)",
        answer: 2.77,
        tolerance: 0.02,
        hint: '(1,05 ÷ 1,015)³⁰.',
        explain: "≈ 2,77. Le patrimoine pèse presque trois fois plus lourd par rapport aux salaires en une génération. C'est la mécanique des intérêts composés (la Tortue), appliquée à toute une société.",
      },
      {
        type: 'reflect',
        question: 'Faut-il taxer davantage le capital et les héritages ?',
        options: [
          {
            label: 'Oui, pour limiter la concentration',
            response: "C'est la proposition de Piketty (impôt progressif sur le capital, mondial idéalement). Argument rawlsien : un héritage n'est mérité par personne. Objections : fuite des capitaux, difficultés d'évaluation, et effet possible sur l'investissement.",
          },
          {
            label: 'Non, ce serait injuste',
            response: "C'est l'argument de Nozick : si le patrimoine a été légitimement acquis, le taxer davantage est une forme de confiscation. Un argument économique s'y ajoute : taxer l'épargne décourage l'investissement qui fait la croissance.",
          },
          {
            label: 'Taxer autrement plutôt que plus',
            response: "Beaucoup d'économistes proposent de taxer plus les héritages et moins le travail, ou de mieux taxer les rentes (foncier, monopoles) que le capital productif. La question devient : quel capital, et à quel moment ?",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Dans la dynamique de la dette publique, on espérait r < g. Chez Piketty, on craint r > g. Est-ce contradictoire ?",
        options: [
          'Oui, l’un des deux se trompe forcément',
          "Non : chez Piketty, r est le rendement moyen du capital (actions, immobilier, entreprises), bien supérieur au taux d'intérêt des obligations d'État, qui est le r de la dette publique",
          'Non, ce sont exactement les mêmes grandeurs',
          'Oui, car g est toujours négatif',
        ],
        answer: 1,
        explain: "Le rendement du capital risqué inclut une prime de risque (CAPM, niveau 4). Les deux peuvent donc être vrais en même temps : r_capital > g > r_dette. Bien lire les définitions évite beaucoup de faux débats.",
      },
    ],
  },

  {
    id: 'philo-5-2',
    screens: [
      {
        type: 'read',
        kicker: 'Investir avec des valeurs',
        title: 'La finance durable',
        body: "La finance durable cherche à intégrer des critères **ESG** (environnementaux, sociaux, de gouvernance) dans les décisions d'investissement. Plusieurs approches :\n\n- **exclusion** de certains secteurs (charbon, armes…) ;\n- **best-in-class** : choisir les meilleures entreprises de chaque secteur ;\n- **engagement** : rester actionnaire et voter pour changer l'entreprise ;\n- **investissement d'impact** : financer des projets aux effets mesurables.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'Le cadre européen',
        title: 'SFDR et taxonomie',
        body: "Le règlement **SFDR** (2021) classe les fonds selon leur ambition :\n\n- **article 6** : pas d'objectif durable particulier ;\n- **article 8** : promeut des caractéristiques environnementales ou sociales ;\n- **article 9** : a un **objectif d'investissement durable**.\n\nLa **taxonomie** européenne définit, de son côté, quelles activités peuvent être qualifiées de « vertes ».",
      },
      {
        type: 'quiz',
        question: 'Un fonds dont l’objectif explicite est de financer la transition énergétique relève plutôt de quel article SFDR ?',
        options: ['Article 6', 'Article 8', 'Article 9', 'Aucun'],
        answer: 2,
        explain: "L'article 9 est réservé aux fonds dont l'investissement durable est l'objectif, pas seulement une caractéristique.",
      },
      {
        type: 'read',
        kicker: 'Le mécanisme espéré',
        title: 'Agir par le coût du capital',
        body: "L'argument principal : si de nombreux investisseurs refusent de financer les entreprises polluantes, celles-ci doivent offrir un rendement plus élevé pour attirer des capitaux. Leur **coût du capital** monte, leurs projets deviennent moins rentables (VAN, WACC), et elles investissent moins dans les activités polluantes.",
      },
      {
        type: 'number',
        question: "Un projet polluant rapporte 10 M€ par an, pour toujours. Si son coût du capital passe de 8 % à 9 %, de combien de % sa valeur baisse-t-elle ? (2 décimales)",
        answer: 11.11,
        tolerance: 0.05,
        unit: '%',
        hint: 'Rente perpétuelle : 10 ÷ 0,08 puis 10 ÷ 0,09.',
        explain: '125 M€ → 111,1 M€ : −11,11 %. Un point de coût du capital pèse lourd sur les projets longs : c’est le canal par lequel la finance peut peser.',
      },
      {
        type: 'read',
        kicker: 'Les critiques',
        title: 'Greenwashing et notes divergentes',
        body: "- **Greenwashing** : des fonds se présentent comme verts sans l'être vraiment.\n- **Désinvestir** ne fait parfois que transférer les actions à d'autres investisseurs moins exigeants.\n- Les **notes ESG** des différentes agences divergent fortement : une étude de 2022 (Berg, Kölbel et Rigobon) trouve une corrélation moyenne d'environ 0,5 entre elles, contre plus de 0,9 pour les notes de crédit.",
      },
      {
        type: 'reflect',
        question: 'La finance peut-elle vraiment aider à résoudre le problème climatique ?',
        options: [
          {
            label: 'Oui, en réorientant les capitaux',
            response: "Les besoins d'investissement de la transition se comptent en milliers de milliards. La finance est indispensable pour les financer, et le canal du coût du capital est réel, même s'il est modeste quand peu d'investisseurs y participent.",
          },
          {
            label: 'Non, c’est le rôle des États',
            response: "C'est la lecture par les externalités (Adam Smith, niveau 2) : tant que le prix du carbone ne reflète pas son coût, le marché « ment ». Une taxe carbone ou des quotas corrigent le prix pour tous, sans dépendre de la bonne volonté de certains investisseurs.",
          },
          {
            label: 'Les deux sont complémentaires',
            response: "Position de beaucoup d'économistes : l'État fixe le prix du carbone et les règles ; la finance alloue ensuite le capital efficacement à l'intérieur de ce cadre. Sans prix du carbone, la finance durable reste un pari sur une réglementation future.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "D'un point de vue économique, quelle est la solution la plus directe au problème de la pollution, selon la théorie vue depuis le niveau 2 ?",
        options: [
          'Compter uniquement sur la bonne volonté des investisseurs',
          "Faire payer l'externalité, par exemple avec une taxe carbone ou des quotas d'émission, pour que le prix intègre le coût réel",
          'Interdire toute activité industrielle',
          'Ne rien faire, la main invisible suffit',
        ],
        answer: 1,
        explain: "C'est la « solution pigouvienne », du nom de l'économiste Arthur Pigou (1920). Elle relie Smith, Hayek (des prix qui disent la vérité) et la finance durable. Le marché européen du carbone (depuis 2005) en est une application.",
      },
    ],
  },

  {
    id: 'philo-5-3',
    screens: [
      {
        type: 'read',
        kicker: '2006',
        title: 'Un moteur, pas un appareil photo',
        body: "Le sociologue Donald MacKenzie publie *An Engine, Not a Camera* : les modèles financiers ne se contentent pas de **décrire** les marchés, comme un appareil photo. Ils les **transforment**, comme un moteur. C'est la **performativité**.\n\nSon exemple central : Black-Scholes.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: "L'histoire d'une formule",
        title: 'Quand le marché se met à ressembler au modèle',
        body: "En 1973, le marché d'options organisé de Chicago (CBOE) ouvre l'année même où paraît la formule. Au début, les prix observés s'en écartent nettement. Puis les traders adoptent la formule, avec des feuilles de calcul et des calculatrices programmées, et l'utilisent pour couvrir leurs positions.\n\nAu fil des années 1970, les prix réels **convergent** vers ceux du modèle. La formule a contribué à rendre le marché conforme à elle.",
      },
      {
        type: 'quiz',
        question: 'Qu’est-ce que la « performativité » d’un modèle financier ?',
        options: [
          'Sa capacité à faire gagner de l’argent',
          "Le fait que son usage modifie les comportements, et donc les prix qu'il est censé décrire",
          'Sa rapidité de calcul',
          'Sa conformité à la loi',
        ],
        answer: 1,
        explain: "Un modèle utilisé par tous n'est plus un simple observateur : il devient un acteur du marché.",
      },
      {
        type: 'read',
        kicker: 'Le revers',
        title: 'La contre-performativité',
        body: "En 1987, l'assurance de portefeuille, fondée sur la même logique que Black-Scholes, contribue au krach (Histoire, niveau 4). Après le krach, les prix des options cessent de suivre le modèle : le **smile** apparaît.\n\nUn modèle très utilisé peut aussi rendre le monde **moins** conforme à lui, en créant les conditions de son échec.",
      },
      {
        type: 'number',
        question: "Beaucoup de banques limitent leur risque par une VaR proportionnelle à la volatilité. Si la volatilité double, de combien de % doivent-elles réduire leurs positions pour garder la même VaR ?",
        answer: 50,
        tolerance: 0.01,
        unit: '%',
        explain: 'VaR ∝ σ × position : si σ double, il faut diviser la position par deux, soit −50 %.',
      },
      {
        type: 'quiz',
        question: "Si toutes les banques appliquent cette règle en même temps lors d'une crise, que se passe-t-il ?",
        options: [
          'Le marché se stabilise',
          'Elles vendent toutes ensemble, les prix baissent, la volatilité monte encore, ce qui force de nouvelles ventes',
          'Rien de particulier',
          'Les prix montent',
        ],
        answer: 1,
        explain: "C'est la **procyclicité** : une règle prudente pour chacun devient déstabilisante pour tous. On l'a vue en 1929 (appels de marge), en 1987 (assurance de portefeuille), en 1998 (LTCM) et en 2008 (décotes).",
      },
      {
        type: 'reflect',
        question: 'Si les modèles changent le monde qu’ils décrivent, quelle responsabilité pour ceux qui les construisent et les utilisent ?',
        options: [
          {
            label: 'Une grande responsabilité',
            response: "Un modèle n'est jamais neutre : il oriente l'attention, les décisions et les capitaux. Ceux qui le construisent devraient expliciter ses hypothèses et ses limites, et se demander ce qui se passe si tout le monde l'utilise en même temps.",
          },
          {
            label: 'Aucune, un modèle n’est qu’un outil',
            response: "Argument fréquent : c'est l'usage qui pose problème, pas l'outil. Mais un outil dont on sait qu'il sera utilisé massivement, et qui change ce qu'il mesure, n'est pas tout à fait un outil comme les autres.",
          },
          {
            label: 'Une responsabilité partagée avec les régulateurs',
            response: "C'est l'esprit de la réglementation actuelle : obligations de validation des modèles, tests de résistance, attention portée au risque systémique. Le régulateur regarde ce que fait l'ensemble du marché, que chaque acteur ne voit pas.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Dernière question du parcours. Quel fil relie le troc du parcours Démarrer, la formule de Black-Scholes et la crise de 2008 ?",
        options: [
          'Aucun, ce sont des sujets sans rapport',
          "La finance repose sur la confiance et sur des représentations partagées de l'avenir (une monnaie, un prix, un modèle) qui peuvent se renforcer… ou s'effondrer quand tout le monde doute en même temps",
          'Ils ont tous été inventés à Chicago',
          'Ils concernent uniquement les banques',
        ],
        answer: 1,
        explain: "Une monnaie vaut par la confiance. Un prix d'option vaut par un modèle que tous partagent. Une banque tient tant que ses déposants ne courent pas tous au guichet. Tu as parcouru la jungle de la première banane à Black-Scholes, et au-delà. Bravo.",
      },
    ],
  },
]
