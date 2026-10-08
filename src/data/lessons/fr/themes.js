// Leçons des thèmes. Même syntaxe de texte que demarrer.js.

export default [
  // ───────────── Finance de marché · N1 ─────────────
  {
    id: 'marches-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Rappel express',
        title: 'Trois objets à distinguer',
        body: "- Une **action** : une part de propriété d'une entreprise.\n- Une **obligation** : une part d'un prêt fait à un État ou une entreprise.\n- Un **indice** : un panier de titres dont on suit la valeur, pour résumer un marché.\n\nSi l'une de ces définitions est floue, le parcours Démarrer les pose en douceur. Sinon, allons plus loin.",
        guide: 'singe',
      },
      {
        type: 'read',
        kicker: 'Combien vaut l’entreprise pour le marché ?',
        title: 'La capitalisation boursière',
        body: "`capitalisation = cours de l'action × nombre d'actions`\n\nSi une entreprise a 200 millions d'actions cotées 50 €, le marché la valorise **10 milliards d'euros**.\n\nC'est la valeur des **fonds propres** vue par le marché, pas la valeur totale de l'entreprise : il faudrait y ajouter sa dette pour l'avoir. On y reviendra au niveau 3.",
      },
      {
        type: 'number',
        question: 'Une société compte 80 millions d’actions qui cotent 25 €. Quelle est sa capitalisation, en millions d’euros ?',
        answer: 2000,
        tolerance: 0.5,
        unit: 'M€',
        explain: '80 millions × 25 € = 2 000 millions d’euros, soit 2 milliards.',
      },
      {
        type: 'read',
        kicker: 'Comment on construit un indice',
        title: 'Pondéré par la capitalisation',
        body: "Le CAC 40 et le S&P 500 sont **pondérés par la capitalisation** (flottante, c'est-à-dire les actions réellement échangeables). Plus une entreprise pèse lourd en Bourse, plus elle compte dans l'indice.\n\nConséquence : une hausse de 10 % d'un géant fait bouger l'indice bien plus qu'une hausse de 10 % d'une petite société. Aux États-Unis, une poignée de géants de la tech pèse plus du quart du S&P 500.",
      },
      {
        type: 'table',
        kicker: 'Un mini-indice',
        title: 'Trois entreprises, une pondération',
        columns: ['Entreprise', 'Capitalisation', 'Poids'],
        rows: [
          ['Alpha', '60 Md€', '60 %'],
          ['Bêta', '30 Md€', '30 %'],
          ['Gamma', '10 Md€', '10 %'],
        ],
        caption: 'Chaque poids = capitalisation de l’entreprise ÷ capitalisation totale (100 Md€).',
      },
      {
        type: 'number',
        question: "Dans ce mini-indice, Alpha monte de 10 %, Bêta et Gamma ne bougent pas. De combien monte l'indice, en % ?",
        answer: 6,
        tolerance: 0.05,
        unit: '%',
        hint: 'La variation de l’indice est la moyenne des variations, pondérée par les poids.',
        explain: '60 % × 10 % + 30 % × 0 % + 10 % × 0 % = 6 %.',
      },
      {
        type: 'quiz',
        question: 'Gamma double (+100 %), les autres ne bougent pas. Et l’indice ?',
        options: ['+100 %', '+33 %', '+10 %', '+1 %'],
        answer: 2,
        explain: '10 % × 100 % = +10 %. Une petite entreprise peut doubler sans que l’indice ne s’envole.',
      },
    ],
  },

  // ───────────── Comptabilité · N1 ─────────────
  {
    id: 'compta-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Venise, 1494',
        title: 'Une invention de marchands',
        body: "En 1494, le moine mathématicien Luca Pacioli décrit dans un traité la méthode des marchands vénitiens : la **comptabilité en partie double**. Plus de cinq siècles plus tard, toutes les entreprises du monde l'utilisent encore.\n\nL'idée tient en une phrase : **chaque opération s'inscrit à deux endroits**.",
        guide: 'elephant',
        note: "Je n'oublie rien, parce que je note tout. Deux fois.",
      },
      {
        type: 'read',
        kicker: 'Le principe',
        title: "D'où vient l'argent, où est-il allé ?",
        body: "Toute opération a une **origine** et une **destination**.\n\nTon entreprise achète un ordinateur 1 000 € payé par virement :\n\n- l'ordinateur entre dans l'entreprise (destination) ;\n- l'argent sort du compte bancaire (origine).\n\nEn comptabilité, la destination se note au **débit**, l'origine au **crédit**. Les mots sont trompeurs : ici, débit ne veut pas dire « perte ».",
      },
      {
        type: 'table',
        kicker: 'L’écriture',
        title: "L'achat de l'ordinateur",
        columns: ['Compte', 'Débit', 'Crédit'],
        rows: [
          ['Matériel informatique', '1 000 €', ''],
          ['Banque', '', '1 000 €'],
        ],
        caption: 'Une écriture est toujours **équilibrée** : total des débits = total des crédits.',
      },
      {
        type: 'quiz',
        question: "L'entreprise emprunte 5 000 € à sa banque, versés sur son compte. Quelle écriture ?",
        options: ['Débit Banque 5 000 / Crédit Emprunt 5 000', 'Débit Emprunt 5 000 / Crédit Banque 5 000', 'Débit Banque 5 000 seulement', 'Crédit Banque 5 000 / Crédit Emprunt 5 000'],
        answer: 0,
        explain: "L'argent arrive sur le compte (destination : débit Banque) et il vient d'une dette (origine : crédit Emprunt).",
      },
      {
        type: 'read',
        kicker: 'La conséquence',
        title: "L'équation qui ne se trompe jamais",
        body: "Comme chaque écriture est équilibrée, le **bilan** l'est toujours aussi :\n\n`Actif = Passif`\n\nL'**actif**, c'est ce que l'entreprise possède (ordinateur, trésorerie, stocks…). Le **passif**, c'est d'où viennent les ressources : l'argent des associés (capitaux propres) et les dettes.\n\nSi l'équation ne tombe pas juste, il y a une erreur quelque part. C'était le premier système de contrôle automatique de l'histoire.",
      },
      {
        type: 'number',
        question: 'Une entreprise a 30 000 € de capitaux propres et 20 000 € de dettes. Quel est le total de son actif ?',
        answer: 50000,
        tolerance: 0.5,
        unit: '€',
        explain: 'Actif = capitaux propres + dettes = 30 000 + 20 000 = 50 000 €. Tout ce que l’entreprise possède a été financé par l’un ou l’autre.',
      },
      {
        type: 'quiz',
        question: "Un client paie en espèces une facture qu'il devait déjà. Qu'arrive-t-il au total de l'actif ?",
        options: ['Il augmente', 'Il baisse', 'Il ne change pas', 'Il double'],
        answer: 2,
        explain: "La trésorerie augmente, la créance client diminue du même montant. L'actif change de forme, pas de taille.",
      },
    ],
  },

  // ───────────── Mathématiques financières · N1 ─────────────
  {
    id: 'temps-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Les deux formules',
        title: 'Simple ou composé',
        body: "Pour un capital `C₀`, un taux annuel `r` et une durée de `n` années :\n\n- **Intérêt simple** : `Cₙ = C₀ × (1 + n·r)`. Les intérêts sont calculés sur le capital de départ uniquement.\n- **Intérêt composé** : `Cₙ = C₀ × (1 + r)ⁿ`. Les intérêts s'ajoutent au capital et rapportent à leur tour.",
        guide: 'tortue',
      },
      {
        type: 'number',
        question: '5 000 € placés à 3 % pendant 4 ans, intérêt simple. Valeur finale ?',
        answer: 5600,
        tolerance: 0.5,
        unit: '€',
        explain: '5 000 × (1 + 4 × 0,03) = 5 000 × 1,12 = 5 600 €.',
      },
      {
        type: 'number',
        question: 'Même placement, intérêts composés. Valeur finale (arrondie à l’euro) ?',
        answer: 5627.54,
        tolerance: 1,
        unit: '€',
        hint: '5 000 × 1,03⁴. Avec une calculatrice : 1,03 ^ 4.',
        explain: '5 000 × 1,03⁴ = 5 000 × 1,1255 ≈ 5 628 €. L’écart avec l’intérêt simple est petit au début et grandit avec le temps.',
      },
      { type: 'compound' },
      {
        type: 'read',
        kicker: 'Un piège classique',
        title: "Et sur moins d'un an ?",
        body: "Pour `n < 1`, c'est l'inverse : `(1 + r)ⁿ < 1 + n·r`.\n\nSur 6 mois à 10 % : simple → × 1,05 ; composé → × 1,10^0,5 ≈ × 1,0488.\n\nC'est pour cela que les marchés monétaires (placements de moins d'un an) utilisent souvent l'intérêt simple, et les placements longs l'intérêt composé. Toujours vérifier la convention avant de comparer deux taux.",
      },
      {
        type: 'quiz',
        question: 'Deux banques affichent « 4 % ». L’une capitalise les intérêts chaque année, l’autre ne les capitalise jamais. Sur 20 ans, laquelle est la meilleure ?',
        options: ['Celle qui capitalise', 'Celle qui ne capitalise pas', 'Elles sont identiques', 'Impossible à dire'],
        answer: 0,
        explain: '1,04²⁰ ≈ 2,19 contre 1 + 20 × 0,04 = 1,80. Même « taux affiché », résultat très différent.',
      },
    ],
  },

  // ───────────── Statistiques · N1 ─────────────
  {
    id: 'stats-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Deux résumés d’une série',
        title: 'Moyenne et médiane',
        body: "La **moyenne** additionne toutes les valeurs et divise par leur nombre.\n\nLa **médiane** est la valeur du milieu : la moitié des valeurs est en dessous, la moitié au-dessus.\n\nSur des données symétriques, elles se ressemblent. Sur des données déséquilibrées, elles racontent des histoires très différentes.",
        guide: 'crocodile',
        note: 'Sous une moyenne tranquille peut dormir un très gros animal.',
      },
      {
        type: 'number',
        question: 'Une start-up a 9 salariés payés 2 000 € et un fondateur payé 100 000 €. Quel est le salaire moyen ?',
        answer: 11800,
        tolerance: 0.5,
        unit: '€',
        explain: '(9 × 2 000 + 100 000) ÷ 10 = 118 000 ÷ 10 = 11 800 €. Personne ne gagne 11 800 €.',
      },
      {
        type: 'quiz',
        question: 'Et le salaire médian ?',
        options: ['2 000 €', '11 800 €', '51 000 €', '100 000 €'],
        answer: 0,
        explain: 'Triés, les 5e et 6e salaires valent 2 000 €. La médiane résiste aux valeurs extrêmes, pas la moyenne.',
      },
      {
        type: 'read',
        kicker: 'En finance',
        title: 'Le piège des rendements moyens',
        body: "Un placement fait **+50 %** une année, puis **−50 %** l'année suivante. Rendement moyen : (50 − 50) ÷ 2 = **0 %**.\n\nPourtant, avec 100 € : 100 → 150 → 75. Tu as perdu **25 %**.\n\nLa moyenne arithmétique ne dit pas ce que tu gagnes vraiment quand les rendements s'enchaînent. Pour ça, il faut la **moyenne géométrique** : `(1,5 × 0,5)^(1/2) − 1 ≈ −13,4 %` par an.",
      },
      {
        type: 'number',
        question: 'Un fonds fait +20 % puis −20 %. Partant de 1 000 €, combien reste-t-il ?',
        answer: 960,
        tolerance: 0.5,
        unit: '€',
        explain: '1 000 × 1,2 × 0,8 = 960 €. Moyenne arithmétique : 0 %. Réalité : −4 %. Plus les rendements sont volatils, plus l’écart est grand.',
      },
      {
        type: 'quiz',
        question: 'Un gérant vante un « rendement moyen de 10 % par an ». Quelle question poser en premier ?',
        options: ['Moyenne arithmétique ou géométrique ?', 'Quelle est la couleur du logo ?', 'Combien de salariés ?', 'Aucune, 10 % c’est clair'],
        answer: 0,
        explain: 'Avec des années très volatiles, la moyenne arithmétique peut être flatteuse. La géométrique (ou « annualisée ») dit ce que l’investisseur a réellement touché.',
      },
    ],
  },

  // ───────────── Macroéconomie · N1 ─────────────
  {
    id: 'macro-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Le chiffre le plus cité',
        title: 'Le PIB',
        body: "Le **produit intérieur brut** mesure la valeur de tout ce qui est produit sur un territoire en un an. La France produit près de **3 000 milliards d'euros** par an.\n\nMais comment additionner des baguettes, des coupes de cheveux et des Airbus sans compter deux fois la même chose ?",
        guide: 'baleine',
        note: "Je ne regarde pas les vagues une par une. Je regarde la marée.",
      },
      {
        type: 'read',
        kicker: 'Éviter le double comptage',
        title: 'La valeur ajoutée',
        body: "Un agriculteur vend son blé 100 € à un meunier. Le meunier vend la farine 250 € à un boulanger. Le boulanger vend le pain 400 €.\n\nSi on additionne les ventes (750 €), on compte le blé trois fois. On additionne plutôt ce que **chacun ajoute** :\n\n- agriculteur : 100 €\n- meunier : 250 − 100 = 150 €\n- boulanger : 400 − 250 = 150 €",
      },
      {
        type: 'number',
        question: 'Quelle est la contribution totale de cette filière au PIB ?',
        answer: 400,
        tolerance: 0.5,
        unit: '€',
        explain: '100 + 150 + 150 = 400 €, soit exactement la valeur du produit final. Le PIB, c’est la somme des valeurs ajoutées.',
      },
      {
        type: 'read',
        kicker: 'Trois portes, une même pièce',
        title: 'Trois façons de mesurer',
        body: "- **Production** : somme des valeurs ajoutées.\n- **Dépenses** : `PIB = C + I + G + (X − M)` : consommation des ménages, investissement, dépenses publiques, exportations moins importations.\n- **Revenus** : salaires + profits + impôts sur la production.\n\nEn théorie, les trois donnent le même chiffre : ce qui est produit est forcément acheté par quelqu'un et rapporte un revenu à quelqu'un.",
      },
      {
        type: 'quiz',
        question: 'Lequel de ces éléments n’est PAS compté dans le PIB ?',
        options: ['La coupe chez le coiffeur', 'Le repas que tu cuisines chez toi', 'Le salaire d’un enseignant', 'Un Airbus exporté'],
        answer: 1,
        explain: "Le travail domestique non rémunéré n'est pas compté. Autres angles morts : la dégradation de l'environnement, les inégalités, le bénévolat.",
      },
      {
        type: 'read',
        kicker: 'Nominal ou réel',
        title: 'Corriger les prix',
        body: "Si le PIB augmente de 5 % mais que les prix ont monté de 3 %, la production en volume n'a progressé que d'environ **2 %**.\n\nLe PIB **nominal** est mesuré aux prix courants, le PIB **réel** corrige l'inflation. Quand on parle de « croissance », c'est presque toujours du PIB réel.",
      },
      {
        type: 'quiz',
        question: 'PIB nominal +4 %, inflation +4 %. La croissance réelle est d’environ…',
        options: ['+8 %', '+4 %', '0 %', '−4 %'],
        answer: 2,
        explain: 'Toute la hausse vient des prix, pas des quantités produites.',
      },
    ],
  },

  // ───────────── Histoire · N1 ─────────────
  {
    id: 'histoire-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Mésopotamie, IIIe millénaire av. J.-C.',
        title: 'La comptabilité avant la monnaie',
        body: "Entre le Tigre et l'Euphrate, les temples et les palais gèrent d'immenses stocks d'orge, de laine, de bétail. Pour s'y retrouver, les scribes notent tout sur des **tablettes d'argile**.\n\nParmi les plus anciens écrits de l'humanité, une grande partie sont… des comptes. L'écriture elle-même est née en partie pour enregistrer des dettes et des stocks.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'Une unité de compte',
        title: "Le sicle d'argent",
        body: "Les Mésopotamiens utilisent le **sicle**, un poids d'argent d'environ 8 grammes, comme unité de compte. Mais on paie rarement en argent : la plupart des dettes se règlent en orge, à un taux de conversion fixé.\n\nL'argent sert surtout à **mesurer**, l'orge à **payer**. Unité de compte et moyen de paiement ne sont pas forcément le même objet.",
      },
      {
        type: 'quiz',
        question: 'Dans cet exemple, quelle fonction de la monnaie le sicle d’argent remplit-il surtout ?',
        options: ['Unité de compte', 'Moyen de paiement', 'Réserve de valeur', 'Aucune'],
        answer: 0,
        explain: 'Le sicle sert de règle commune pour exprimer les valeurs et les dettes, même si on paie souvent en orge.',
      },
      {
        type: 'read',
        kicker: 'Vers 1750 av. J.-C.',
        title: "Le code d'Hammurabi encadre l'intérêt",
        body: "Le roi de Babylone Hammurabi fait graver un recueil de lois. Plusieurs articles portent sur les prêts, et les textes de l'époque fixent des **taux maximums** : environ **20 %** par an pour un prêt en argent, **33 ⅓ %** pour un prêt en grain.\n\nIl y a près de 4 000 ans, on régulait donc déjà le prix du crédit.",
      },
      {
        type: 'quiz',
        question: 'Pourquoi le taux sur le grain était-il plus élevé que sur l’argent, selon toi ?',
        options: ['Le grain est plus rare', 'Le grain se perd, pourrit, et sa récolte est incertaine : le prêteur prend plus de risque', 'Le roi préférait le grain', 'Aucune raison'],
        answer: 1,
        explain: "C'est une lecture classique : un prêt plus risqué ou plus coûteux à conserver exige un taux plus élevé. La prime de risque, déjà.",
      },
      {
        type: 'read',
        kicker: 'Une idée oubliée',
        title: 'Effacer les dettes',
        body: "Quand les dettes devenaient insoutenables et que les paysans étaient réduits en servitude, les rois mésopotamiens proclamaient parfois une **annulation générale des dettes** (*misharum*) : les tablettes étaient brisées, les esclaves pour dettes libérés.\n\nLa question de ce qu'on fait des dettes impayables est aussi vieille que la dette elle-même. On la retrouvera en 2010 avec la Grèce.",
      },
    ],
  },

  // ───────────── Contrôle de gestion · N1 ─────────────
  {
    id: 'controle-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Deux familles de coûts',
        title: 'Fixes et variables',
        body: "Tu lances un food truck de burgers.\n\n- Certains coûts ne bougent pas, que tu vendes 0 ou 1 000 burgers : l'emplacement, l'assurance, le crédit du camion. Ce sont les **coûts fixes**. Disons **1 500 € par mois**.\n- D'autres augmentent avec chaque burger vendu : pain, viande, emballage. Ce sont les **coûts variables**. Disons **3 € par burger**.",
        guide: 'abeille',
        note: 'Une ruche qui ne sait pas ce que coûte un gramme de miel finit par en manquer.',
      },
      {
        type: 'number',
        question: 'Tu vends 300 burgers dans le mois. Quel est ton coût total ?',
        answer: 2400,
        tolerance: 0.5,
        unit: '€',
        explain: '1 500 € de fixes + 300 × 3 € de variables = 2 400 €.',
      },
      {
        type: 'table',
        kicker: 'L’effet volume',
        title: 'Le coût d’un burger dépend du nombre vendu',
        columns: ['Burgers vendus', 'Coût total', 'Coût par burger'],
        rows: [
          ['100', '1 800 €', '18,00 €'],
          ['300', '2 400 €', '8,00 €'],
          ['500', '3 000 €', '6,00 €'],
        ],
        caption: 'Les coûts fixes se répartissent sur plus d’unités : le coût unitaire baisse quand le volume monte.',
      },
      {
        type: 'read',
        kicker: 'Ce que rapporte chaque burger',
        title: 'La marge sur coût variable',
        body: "Tu vends le burger **10 €**. Chaque burger coûte 3 € de plus à produire. Il te reste **7 €** pour payer les coûts fixes, puis faire du bénéfice.\n\nCes 7 € s'appellent la **marge sur coût variable**. Tant que les fixes ne sont pas couverts, tu perds de l'argent. Après, chaque burger rapporte 7 € de bénéfice.",
      },
      {
        type: 'number',
        question: 'Combien de burgers faut-il vendre au minimum pour couvrir les 1 500 € de coûts fixes ? (arrondis à l’unité supérieure)',
        answer: 215,
        tolerance: 0,
        unit: 'burgers',
        hint: 'Coûts fixes ÷ marge par burger.',
        explain: '1 500 ÷ 7 ≈ 214,3. Il en faut donc 215. C’est le **seuil de rentabilité**, qu’on creuse dans la leçon suivante.',
      },
      {
        type: 'quiz',
        question: 'Un client propose de t’acheter 50 burgers à 5 € pièce pour un événement. Tes coûts fixes sont déjà couverts ce mois-ci. Accepter ?',
        options: ['Non, 5 € est sous le coût moyen', 'Oui, chaque burger rapporte quand même 2 € de plus', 'Non, on ne vend jamais à perte', 'Impossible à dire'],
        answer: 1,
        explain: "Les fixes sont déjà payés : seul le coût variable (3 €) compte pour cette commande en plus. 50 × 2 € = 100 € de bénéfice supplémentaire. C'est le raisonnement au coût marginal, avec ses limites (ne pas casser ses prix habituels).",
      },
    ],
  },

  // ───────────── Droit financier · N1 ─────────────
  {
    id: 'droit-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'La question de départ',
        title: 'Pourquoi réguler la finance ?',
        body: "On ne régule pas la vente de chaussures comme on régule une banque. Pourquoi la finance a-t-elle droit à un traitement à part ?\n\nQuatre raisons reviennent toujours :\n\n- l'**asymétrie d'information** ;\n- la **protection des épargnants** ;\n- l'**intégrité des marchés** ;\n- le **risque systémique**.",
        guide: 'lion',
        note: 'Dans la jungle, le plus fort gagne. Sur un marché, on a décidé que ce serait le mieux informé honnêtement.',
      },
      {
        type: 'read',
        kicker: 'Raisons 1 et 2',
        title: "Celui qui sait, et celui qui ne sait pas",
        body: "Le dirigeant d'une entreprise sait bien mieux que toi si elle va bien. Le vendeur d'un produit financier complexe en connaît les risques mieux que l'acheteur.\n\nSans règles, ceux qui savent peuvent exploiter ceux qui ne savent pas. D'où des obligations d'**information** (publier ses comptes, un prospectus clair) et de **conseil** (vérifier qu'un produit convient au client).",
      },
      {
        type: 'read',
        kicker: 'Raisons 3 et 4',
        title: 'Un marché honnête, un système solide',
        body: "**Intégrité** : si les prix peuvent être truqués (délit d'initié, manipulation de cours), plus personne ne fait confiance aux prix, et le marché cesse de fonctionner.\n\n**Risque systémique** : la faillite d'une grande banque peut en entraîner d'autres, puis toute l'économie, comme en 2008. Une boulangerie qui ferme ne fait pas tomber les autres boulangeries.",
      },
      {
        type: 'quiz',
        question: "Pourquoi exige-t-on des banques plus de fonds propres que d'une entreprise ordinaire ?",
        options: ['Pour les taxer davantage', 'Parce que leur faillite peut contaminer tout le système', 'Pour freiner leur croissance', 'Pour protéger leurs actionnaires'],
        answer: 1,
        explain: "C'est le risque systémique. Les fonds propres servent d'amortisseur : ils absorbent les pertes avant qu'elles ne touchent les déposants et les autres banques.",
      },
      {
        type: 'read',
        kicker: 'Qui surveille en France',
        title: 'Les gendarmes',
        body: "- **L'AMF** (Autorité des marchés financiers, créée en 2003) surveille les marchés, l'information des sociétés cotées et les produits vendus aux épargnants.\n- **L'ACPR**, adossée à la Banque de France, surveille les banques et les assurances.\n- Depuis 2014, la **BCE** supervise directement les plus grandes banques de la zone euro.\n\nAu-dessus, de nombreuses règles viennent de l'Union européenne.",
      },
      {
        type: 'quiz',
        question: 'Une société cotée publie des comptes trompeurs. Quelle autorité française est la première concernée ?',
        options: ["L'AMF", "L'ACPR", 'La BCE', "L'INSEE"],
        answer: 0,
        explain: "L'information financière des sociétés cotées relève de l'AMF, qui peut enquêter et sanctionner.",
      },
    ],
  },

  // ───────────── Philosophie · N1 ─────────────
  {
    id: 'philo-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Athènes, IVe siècle av. J.-C.',
        title: "Deux façons d'acquérir",
        body: "Dans *Les Politiques*, Aristote distingue deux arts :\n\n- l'**économie** (*oikonomia*), la gestion de la maison : acquérir ce dont on a besoin pour bien vivre. Elle a une limite naturelle.\n- la **chrématistique**, l'art de gagner de l'argent pour lui-même. Elle n'a **aucune limite** : on n'a jamais « assez » d'argent.\n\nPour Aristote, la première est naturelle, la seconde le devient de moins en moins à mesure qu'elle s'éloigne des besoins réels.",
        guide: 'paresseux',
        note: "Je vais lentement exprès. Les bonnes questions ne se pressent pas.",
      },
      {
        type: 'read',
        kicker: 'Le cas le plus grave',
        title: "L'argent qui fait des petits",
        body: "Pour Aristote, le pire est le prêt à intérêt. La monnaie a été inventée pour faciliter l'échange, pas pour se reproduire.\n\nOr en grec, l'intérêt se dit *tokos*, qui veut aussi dire « progéniture ». L'usurier fait **enfanter** l'argent, ce qu'Aristote juge le plus contraire à la nature.\n\nCette idée traversera le Moyen Âge : Thomas d'Aquin s'en inspire, et l'Église condamne l'usure pendant des siècles.",
      },
      {
        type: 'reflect',
        question: 'Et toi, qu’en penses-tu : demander un intérêt sur un prêt, est-ce légitime ?',
        options: [
          {
            label: 'Oui, prêter a un coût',
            response: "C'est l'argument moderne : le prêteur renonce à utiliser son argent (le prix du temps), prend un risque de ne pas être remboursé, et subit l'inflation. L'intérêt rémunère ces trois choses. Aristote n'avait ni la notion de capital productif, ni celle de prime de risque.",
          },
          {
            label: 'Non, l’argent ne devrait pas produire de l’argent',
            response: "Tu rejoins Aristote, mais aussi une partie de la finance islamique, qui interdit le *riba* (l'intérêt) et lui préfère le partage des profits et des pertes. Question pour la suite : partager les risques avec l'emprunteur, est-ce vraiment différent d'un intérêt ?",
          },
          {
            label: 'Ça dépend du taux et de la situation',
            response: "C'est la position de la plupart des droits modernes : l'intérêt est permis, mais plafonné. En France, le **taux d'usure** fixe un maximum légal selon le type de crédit. Hammurabi faisait déjà la même chose il y a 4 000 ans.",
          },
        ],
      },
      {
        type: 'quiz',
        question: 'Pour Aristote, qu’est-ce qui distingue la chrématistique de l’économie ?',
        options: ['Elle utilise des pièces', 'Elle vise l’accumulation sans limite', 'Elle est pratiquée par l’État', 'Elle est plus récente'],
        answer: 1,
        explain: "L'économie s'arrête quand les besoins sont satisfaits. La chrématistique poursuit l'argent pour lui-même, sans fin.",
      },
    ],
  },

  // ───────────── Produits dérivés · N1 ─────────────
  {
    id: 'derives-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Le besoin',
        title: 'Deux personnes qui ont peur de l’avenir',
        body: "Un boulanger craint que le prix du blé **monte** d'ici six mois. Un agriculteur craint qu'il **baisse** avant sa récolte.\n\nIls signent aujourd'hui un contrat : dans six mois, l'agriculteur livrera 100 tonnes de blé au boulanger à **200 € la tonne**, quel que soit le prix du marché à ce moment-là.\n\nCe contrat s'appelle un **forward** (contrat à terme de gré à gré).",
        guide: 'cameleon',
        note: 'Un dérivé change de couleur avec ce qu’il touche. Ici, il prend la couleur du blé.',
      },
      {
        type: 'read',
        kicker: 'Le vocabulaire',
        title: 'Qui est long, qui est court',
        body: "- Celui qui **achètera** (le boulanger) est en position **longue**.\n- Celui qui **vendra** (l'agriculteur) est en position **courte**.\n- Le prix fixé (200 €) est le **prix à terme** `K`.\n- Le prix du marché à l'échéance se note `S_T`.\n\nÀ l'échéance, le gain de l'acheteur par tonne vaut `S_T − K`. Celui du vendeur vaut `K − S_T`.",
      },
      {
        type: 'number',
        question: 'Dans six mois, le blé cote 230 € la tonne. Quel est le gain du boulanger sur ses 100 tonnes, en euros ?',
        answer: 3000,
        tolerance: 0.5,
        unit: '€',
        explain: '(230 − 200) × 100 = 3 000 €. Il paie 200 € une tonne qui en vaut 230 sur le marché.',
      },
      {
        type: 'quiz',
        question: 'Et l’agriculteur, dans ce scénario ?',
        options: ['Il gagne aussi 3 000 €', 'Il « perd » 3 000 € par rapport au marché', 'Il ne gagne ni ne perd', 'Il perd 230 €'],
        answer: 1,
        explain: "Il aurait pu vendre 230 €, il vend 200 €. Un forward est un jeu à somme nulle : ce que l'un gagne, l'autre le perd.",
      },
      {
        type: 'read',
        kicker: 'Alors pourquoi signer ?',
        title: 'La couverture',
        body: "L'agriculteur n'a pas « perdu » au sens où il le craignait : il a obtenu **la certitude** de vendre à 200 €. Si le blé était tombé à 150 €, c'est lui qui aurait été protégé.\n\nUtilisé ainsi, un dérivé sert à **se couvrir** : on renonce à un gain possible pour éliminer une perte possible. Le même contrat, signé par quelqu'un qui n'a pas de blé, devient un pari sur le prix : de la **spéculation**.",
      },
      {
        type: 'quiz',
        question: 'Une compagnie aérienne achète du kérosène à terme à prix fixé pour l’an prochain. Elle…',
        options: ['spécule à la hausse', 'se couvre contre une hausse du prix du carburant', 'se couvre contre une baisse', 'fait de l’arbitrage'],
        answer: 1,
        explain: "Son risque est que le kérosène monte. En fixant le prix, elle rend ses coûts prévisibles.",
      },
    ],
  },

  // ───────────── Produits dérivés · N3 (exemple de leçon exigeante) ─────────────
  {
    id: 'derives-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'Le modèle le plus simple possible',
        title: 'Un monde à deux états',
        body: "Une action vaut aujourd'hui `S₀ = 100 €`. Dans un an, elle ne peut valoir que deux choses : **120 €** (hausse) ou **80 €** (baisse). Pour l'instant, le taux sans risque est nul.\n\nOn veut le prix d'un **call** de strike `K = 100` : le droit, pas l'obligation, d'acheter l'action 100 € dans un an.\n\nPrérequis : savoir ce qu'est un call (niveau 2). Si ce n'est pas le cas, tu peux continuer, mais relis cette leçon après.",
        guide: 'cameleon',
      },
      {
        type: 'table',
        kicker: 'À l’échéance',
        title: 'Ce que vaut le call',
        columns: ['État', 'Action', 'Call : max(S − 100, 0)'],
        rows: [
          ['Hausse', '120 €', '20 €'],
          ['Baisse', '80 €', '0 €'],
        ],
        caption: "Remarque : on ne t'a donné **aucune probabilité** de hausse ou de baisse. Et pourtant, on va trouver un prix unique.",
      },
      {
        type: 'read',
        kicker: 'L’idée clé',
        title: 'Répliquer le call',
        body: "Construisons un portefeuille qui paie **exactement** comme le call dans les deux états : `Δ` actions et un montant `B` placé (ou emprunté) au taux sans risque.\n\n- Hausse : `120·Δ + B = 20`\n- Baisse : `80·Δ + B = 0`\n\nDeux équations, deux inconnues. Si ce portefeuille paie comme le call, il doit **coûter** comme le call, sinon il y a un profit sans risque à saisir (un **arbitrage**).",
      },
      {
        type: 'number',
        question: 'Que vaut Δ, le nombre d’actions à détenir ?',
        answer: 0.5,
        tolerance: 0.001,
        hint: 'Soustrais la deuxième équation de la première.',
        explain: '40·Δ = 20, donc Δ = 0,5. Δ = (écart des payoffs du call) ÷ (écart des prix de l’action). C’est le futur « delta » des Grecques.',
      },
      {
        type: 'number',
        question: 'Que vaut B ? (négatif si on emprunte)',
        answer: -40,
        tolerance: 0.001,
        unit: '€',
        explain: '80 × 0,5 + B = 0, donc B = −40 : on emprunte 40 €.',
      },
      {
        type: 'number',
        question: "Prix du call aujourd'hui = Δ·S₀ + B. Combien ?",
        answer: 10,
        tolerance: 0.001,
        unit: '€',
        explain: '0,5 × 100 − 40 = 10 €. Tout autre prix crée un arbitrage.',
      },
      {
        type: 'read',
        kicker: 'Le même résultat, autrement',
        title: 'La probabilité risque-neutre',
        body: "Cherchons une « probabilité » `q` de hausse telle que l'action rapporte en moyenne le taux sans risque :\n\n`q·120 + (1 − q)·80 = 100 × (1 + r)`\n\nAvec `r = 0` : `q = 0,5`. Prix du call = `q·20 + (1 − q)·0 = 10 €`. Même résultat.\n\nAvec un taux `r`, la formule générale devient :\n\n`q = (1 + r − d) / (u − d)` et `prix = [q·C_haut + (1 − q)·C_bas] / (1 + r)`\n\noù `u = 1,2` et `d = 0,8` sont les facteurs de hausse et de baisse.",
      },
      {
        type: 'number',
        question: 'Même arbre, mais le taux sans risque vaut 5 %. Prix du call ? (2 décimales)',
        answer: 11.9,
        tolerance: 0.01,
        unit: '€',
        hint: 'Calcule d’abord q = (1,05 − 0,8) / 0,4.',
        explain: 'q = 0,25 / 0,4 = 0,625. Prix = 0,625 × 20 / 1,05 ≈ 11,90 €. Un taux plus élevé rend le call plus cher.',
      },
      {
        type: 'quiz',
        question: "Un analyste pense que la hausse a 90 % de chances de se produire. Le prix d'arbitrage du call (avec r = 0)…",
        options: ['monte à 18 €', 'reste 10 €', 'baisse', 'ne peut pas être calculé'],
        answer: 1,
        explain: "Le prix vient de la réplication, pas des probabilités réelles. Ses croyances se reflètent déjà dans le prix de l'action. C'est l'idée qui mène, pas à pas, à Black-Scholes.",
      },
    ],
  },

  // ───────────── Finance quantitative · N1 ─────────────
  {
    id: 'quant-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'La matière première',
        title: 'Le rendement simple',
        body: "Un quant ne travaille presque jamais sur les prix, mais sur les **rendements**.\n\n`R = P₁ / P₀ − 1`\n\nUne action passe de 100 à 110 : `R = 10 %`. Simple, lisible, et les rendements de plusieurs actifs s'agrègent bien dans un portefeuille : le rendement du portefeuille est la moyenne pondérée des rendements.",
        guide: 'jaguar',
        note: "Je chasse avec des équations. Elles ne mentent pas, mais il faut savoir lesquelles utiliser.",
      },
      {
        type: 'read',
        kicker: 'L’autre définition',
        title: 'Le log-rendement',
        body: "`r = ln(P₁ / P₀)`\n\nPour 100 → 110 : `r = ln(1,1) ≈ 9,53 %`. Très proche de 10 % pour les petites variations, différent pour les grandes.\n\nSon atout majeur : il **s'additionne dans le temps**. Le log-rendement sur deux périodes est la somme des log-rendements de chaque période.",
      },
      {
        type: 'number',
        question: 'Une action passe de 50 à 60. Quel est son log-rendement, en % ? (2 décimales)',
        answer: 18.23,
        tolerance: 0.02,
        unit: '%',
        hint: 'ln(60 / 50) = ln(1,2).',
        explain: 'ln(1,2) ≈ 0,1823, soit 18,23 %. Le rendement simple vaut 20 %.',
      },
      {
        type: 'read',
        kicker: 'Pourquoi ça compte',
        title: '+50 % puis −50 %, version log',
        body: "Avec les rendements simples, +50 % puis −50 % donne une « moyenne » de 0 % alors qu'on a perdu 25 %.\n\nAvec les log-rendements : `ln(1,5) + ln(0,5) = ln(0,75) ≈ −28,8 %`. La somme donne **directement** le log-rendement total. Pas de piège.\n\nC'est pour cela que les modèles en temps continu (Black-Scholes, simulations) travaillent en log.",
      },
      {
        type: 'quiz',
        question: 'Tu as les log-rendements quotidiens d’une action sur un mois. Comment obtenir le log-rendement mensuel ?',
        options: ['En les multipliant', 'En les additionnant', 'En prenant leur moyenne', 'En prenant le maximum'],
        answer: 1,
        explain: 'ln(P_fin / P_début) = somme des ln(P_t / P_t−1). Le produit des ratios devient une somme de logs.',
      },
      {
        type: 'quiz',
        question: 'Et pour calculer le rendement d’un portefeuille de plusieurs actions sur un jour, lequel est le plus pratique ?',
        options: ['Le rendement simple', 'Le log-rendement', 'Les deux sont identiques', 'Aucun'],
        answer: 0,
        explain: 'Le rendement simple d’un portefeuille est exactement la moyenne pondérée des rendements simples. Pas le log. Règle pratique : log pour le temps, simple pour les portefeuilles.',
      },
    ],
  },

  // ───────────── Finances personnelles · N1 ─────────────
  {
    id: 'perso-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Avant tout le reste',
        title: 'Savoir où part son argent',
        body: "Investir, épargner, emprunter : rien de tout ça ne marche sans savoir ce qui rentre et ce qui sort chaque mois.\n\nUn budget n'est pas une punition. C'est une **carte** : il te montre où tu vas, et te laisse décider si c'est là que tu veux aller.",
        guide: 'fourmi',
        note: "On se moque des fourmis qui stockent tout l'été. Personne ne rit en hiver.",
      },
      {
        type: 'read',
        kicker: 'Une règle de départ',
        title: 'Le 50 / 30 / 20',
        body: "Une méthode simple pour répartir son revenu net :\n\n- **50 %** pour les besoins : loyer, courses, transport, factures.\n- **30 %** pour les envies : sorties, voyages, abonnements.\n- **20 %** pour l'épargne et le remboursement anticipé des dettes.\n\nCe n'est pas une loi. À Paris, le loyer seul dépasse souvent 30 %. Mais c'est un bon point de repère pour se situer.",
      },
      {
        type: 'number',
        question: 'Tu gagnes 1 800 € net par mois. Combien mettre de côté selon la règle 50/30/20 ?',
        answer: 360,
        tolerance: 0.5,
        unit: '€',
        explain: '20 % × 1 800 = 360 € par mois, soit 4 320 € par an.',
      },
      {
        type: 'read',
        kicker: 'Le vrai secret',
        title: "Se payer en premier",
        body: "La plupart des gens épargnent ce qu'il reste à la fin du mois. Souvent, il ne reste rien.\n\nL'astuce : programmer un **virement automatique** vers ton épargne le jour où tu reçois ton salaire. Tu vis ensuite avec le reste. L'épargne devient une dépense fixe, pas une bonne résolution.",
      },
      {
        type: 'quiz',
        question: 'Quelle dépense est la plus facile à réduire durablement, en général ?',
        options: ['Les abonnements qu’on n’utilise plus', 'Le loyer', 'Les impôts', 'L’assurance santé obligatoire'],
        answer: 0,
        explain: 'Les petites dépenses récurrentes oubliées sont la cible idéale : un effort une fois, une économie chaque mois.',
      },
      {
        type: 'number',
        question: 'Tu résilies trois abonnements à 9,99 € par mois. Combien économises-tu sur un an ? (2 décimales)',
        answer: 359.64,
        tolerance: 0.01,
        unit: '€',
        explain: '3 × 9,99 × 12 = 359,64 €. Presque un mois d’épargne selon la règle 50/30/20.',
      },
    ],
  },
]
