// Fin du niveau 2. Escalier : intuition → calcul guidé → application → défi facultatif.

export default [
  // ───────────── Histoire · N2 ─────────────
  {
    id: 'histoire-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Amsterdam, 1602',
        title: 'Une société qui ne meurt pas',
        body: "Avant 1602, les marchands montaient une société **par voyage** : on finançait une expédition vers l'Asie, et au retour on partageait le butin puis on liquidait tout.\n\nLa **Compagnie néerlandaise des Indes orientales** (VOC) change la règle : son capital est **permanent**, et ses parts sont **librement négociables**. Pour récupérer ton argent, tu ne demandes plus à la compagnie : tu vends ta part à quelqu'un d'autre.",
        guide: 'hibou',
      },
      {
        type: 'quiz',
        question: 'Pourquoi un capital permanent change-t-il tout pour une entreprise comme la VOC ?',
        options: [
          'Il permet de payer moins d’impôts',
          'Il permet d’investir sur le long terme (comptoirs, flotte) sans rendre l’argent à chaque retour de bateau',
          'Il interdit aux actionnaires de vendre',
          'Il rend les voyages plus rapides',
        ],
        answer: 1,
        explain: "Des forts, des entrepôts et des navires ne se rentabilisent pas en un voyage. Le capital permanent permet de bâtir dans la durée, et la Bourse permet quand même aux actionnaires de sortir.",
      },
      {
        type: 'read',
        kicker: 'Un marché est né',
        title: "La Bourse d'Amsterdam",
        body: "Les parts de la VOC s'échangent dans un bâtiment ouvert en 1611 : la première **Bourse** moderne. On y invente vite des outils sophistiqués : ventes **à terme**, **options**, achats à crédit.\n\nEn 1688, Joseph de la Vega publie *Confusion des confusions*, le premier livre consacré à la Bourse. Il y décrit déjà la panique, l'euphorie et les rumeurs.",
      },
      {
        type: 'read',
        kicker: 'Et la monnaie ?',
        title: "La Banque d'Amsterdam",
        body: "En 1609, la ville crée la **Wisselbank**. Les marchands y déposent leurs pièces, de qualité très variable, et reçoivent en échange un crédit en « monnaie de banque » à valeur fixe. Les paiements se font par virement entre comptes.\n\nRésultat : une unité de compte stable au milieu du chaos des pièces rognées. Amsterdam devient le centre financier de l'Europe pour plus d'un siècle.",
      },
      {
        type: 'quiz',
        question: "Quel problème la Wisselbank résolvait-elle d'abord ?",
        options: [
          'Le manque de bateaux',
          'La qualité incertaine des pièces en circulation, qui rendait chaque paiement compliqué',
          'L’interdiction de l’usure',
          'Les impôts trop élevés',
        ],
        answer: 1,
        explain: "La loi de Gresham, encore : les bonnes pièces disparaissaient, les mauvaises circulaient. Une monnaie de banque à valeur fixe a rétabli la confiance.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "En 1609, l'ancien administrateur Isaac Le Maire vend massivement des actions VOC qu'il ne possède pas encore, en pariant sur leur baisse. Comment réagissent les autorités en 1610 ?",
        options: [
          'Elles le nomment directeur',
          'Elles interdisent ce type de vente à découvert : c’est l’une des premières régulations boursières',
          'Elles ferment la Bourse',
          'Elles rachètent toutes les actions',
        ],
        answer: 1,
        explain: "La première grande opération baissière de l'histoire a provoqué la première interdiction de vente à découvert. Le débat sur ces ventes revient à chaque crise, jusqu'à aujourd'hui.",
      },
    ],
  },

  {
    id: 'histoire-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Provinces-Unies, 1634 – 1637',
        title: 'La fièvre des tulipes',
        body: "Venues de l'Empire ottoman, les tulipes deviennent un objet de luxe aux Pays-Bas. Certaines variétés aux pétales striés, comme la *Semper Augustus*, atteignent des prix extraordinaires, comparables à ceux d'une maison.\n\nDans les tavernes, on échange des **contrats** portant sur des bulbes encore en terre, livrables au printemps.",
        guide: 'hibou',
      },
      {
        type: 'quiz',
        question: 'Pourquoi échangeait-on des contrats à terme plutôt que les bulbes eux-mêmes ?',
        options: [
          'Parce que les bulbes étaient interdits',
          "Parce qu'en hiver les bulbes sont en terre : on ne peut les livrer qu'au printemps",
          'Pour payer moins d’impôts',
          'Parce que les tulipes étaient trop lourdes',
        ],
        answer: 1,
        explain: "La saisonnalité crée le besoin d'un contrat à terme, comme pour le blé de la leçon sur les forwards.",
      },
      {
        type: 'read',
        kicker: 'Février 1637',
        title: 'Le krach',
        body: "À Haarlem, lors d'une vente, les acheteurs ne se présentent pas. En quelques jours, les prix s'effondrent, et beaucoup d'acheteurs refusent d'honorer leurs contrats.\n\nAttention au mythe : l'historienne Anne Goldgar a montré que les conséquences économiques ont été **limitées**, et que le récit d'une ruine générale, popularisé par Charles Mackay en 1841, est très exagéré.",
      },
      {
        type: 'read',
        kicker: 'Le mécanisme',
        title: "Qu'est-ce qu'une bulle ?",
        body: "Une **bulle** se forme quand le prix d'un actif s'éloigne de sa **valeur fondamentale** (ce que justifient ses revenus ou son usage) parce que les acheteurs anticipent de le **revendre plus cher**.\n\nTant que de nouveaux acheteurs arrivent, ça marche. C'est la **théorie du plus grand imbécile** : on peut payer trop cher tant qu'on trouve quelqu'un pour payer encore plus.",
      },
      {
        type: 'quiz',
        question: "D'après la théorie du plus grand imbécile, qui perd à la fin ?",
        options: ['Le premier acheteur', 'Le dernier acheteur, qui ne trouve personne à qui revendre', 'Le vendeur de bulbes', 'Personne'],
        answer: 1,
        explain: "Dans une bulle, chacun parie qu'il ne sera pas le dernier. Quand les nouveaux venus manquent, le prix s'effondre d'un coup.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Parmi ces signaux, lequel est le plus révélateur d’une bulle ?',
        options: [
          'Le prix monte en même temps que les bénéfices',
          "Les acheteurs ne justifient le prix que par la hausse future du prix, et beaucoup de novices s'endettent pour acheter",
          'Le volume d’échanges est faible',
          'Les experts sont divisés',
        ],
        answer: 1,
        explain: "Prix justifié par la revente, crédit facile, afflux de nouveaux acheteurs : on retrouve ces signes en 1637, en 1720, en 1929, dans la bulle internet de 2000 et dans certaines vagues spéculatives récentes.",
      },
    ],
  },

  // ───────────── Droit financier · N2 ─────────────
  {
    id: 'droit-2-2',
    screens: [
      {
        type: 'read',
        kicker: "Tromper le marché",
        title: 'La manipulation de cours',
        body: "Le règlement européen MAR interdit de donner des **indications fausses ou trompeuses** sur l'offre, la demande ou le prix d'un titre. Concrètement :\n\n- diffuser de **fausses informations** ;\n- passer des **ordres trompeurs** qu'on n'a pas l'intention d'exécuter ;\n- fixer **artificiellement** un cours.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Un grand classique',
        title: 'Le « pump and dump »',
        body: "1. On achète discrètement une petite valeur peu liquide.\n2. On en fait la **promotion** (forums, réseaux sociaux, faux conseils) pour attirer des acheteurs : le cours grimpe (*pump*).\n3. On **revend** tout au sommet (*dump*).\n\nLe cours s'effondre, et ceux qui ont acheté sur la foi de la promotion perdent leur argent.",
      },
      {
        type: 'quiz',
        question: "Un influenceur achète une petite action, publie « ça va faire x10, foncez ! », puis revend tout le lendemain. C'est…",
        options: ['Un conseil d’investissement légal', 'Une manipulation de cours de type pump and dump', 'Un délit d’initié', 'Rien d’illégal tant qu’il ne ment pas sur son nom'],
        answer: 1,
        explain: "Il diffuse un message trompeur pour faire monter le cours et en profite. Le régulateur peut sanctionner, et le juge pénal aussi.",
      },
      {
        type: 'read',
        kicker: 'Version électronique',
        title: 'Le spoofing',
        body: "Le **spoofing** consiste à placer de gros ordres qu'on n'a **pas l'intention d'exécuter**, pour faire croire à une forte demande (ou offre), puis à les annuler dès que le prix a bougé dans le sens voulu.\n\nLe trader britannique Navinder Sarao a été poursuivi aux États-Unis pour ce type de pratique, accusé d'avoir contribué au « flash crash » du 6 mai 2010. Il a plaidé coupable en 2016.",
      },
      {
        type: 'quiz',
        question: "Un trader place un ordre d'achat géant juste sous le prix du marché, vend ses propres actions pendant que le prix monte, puis annule son ordre géant. C'est…",
        options: ['Du market making', 'Du spoofing', 'De l’arbitrage', 'Un ordre à cours limité normal'],
        answer: 1,
        explain: "L'ordre géant n'était là que pour tromper les autres sur la demande réelle. L'intention de ne pas exécuter est au cœur de l'infraction.",
      },
      {
        type: 'read',
        kicker: 'Où passe la frontière ?',
        title: 'Le cas GameStop',
        body: "En janvier 2021, des milliers d'investisseurs coordonnés sur Reddit achètent l'action GameStop, qui s'envole. Manipulation ?\n\nAcheter en groupe parce qu'on croit à une action, ou pour contrer des vendeurs à découvert, n'est pas en soi une manipulation. Ce qui la caractérise, c'est la **tromperie** : fausses informations, ordres fictifs, intention d'induire les autres en erreur.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Une analyste publie une recommandation d'achat argumentée sur une action qu'elle détient, en indiquant clairement qu'elle la détient. Est-ce une manipulation ?",
        options: [
          'Oui, on ne peut jamais recommander une action qu’on détient',
          'Non, si l’analyse est sincère et que le conflit d’intérêts est déclaré',
          'Oui, toute recommandation fait bouger le cours',
          'Seulement si le cours monte',
        ],
        answer: 1,
        explain: "Le droit n'interdit pas d'avoir un avis ni une position. Il exige la **transparence** sur les conflits d'intérêts et interdit la tromperie. Si elle revendait juste après en cachette, ce serait autre chose.",
      },
    ],
  },

  {
    id: 'droit-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Dire ce qu’on sait',
        title: "Les obligations d'information des sociétés cotées",
        body: "Une société cotée doit publier :\n\n- un **rapport financier annuel**, dans les 4 mois suivant la clôture de l'exercice ;\n- un **rapport semestriel**, dans les 3 mois suivant la fin du semestre ;\n- **toute information privilégiée**, « dès que possible ».\n\nEt quand elle propose ses titres au public, elle doit publier un **prospectus**, visé par l'AMF en France.",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: "Une société cotée apprend qu'elle perd son plus gros client. Que doit-elle faire ?",
        options: ['Attendre le prochain rapport annuel', "Publier l'information dès que possible", 'Prévenir seulement ses salariés', 'Rien, c’est confidentiel'],
        answer: 1,
        explain: "C'est une information privilégiée : précise, non publique, et elle fera bouger le cours. Tant qu'elle n'est pas publiée, chaque initié qui la connaît est un risque.",
      },
      {
        type: 'read',
        kicker: 'Une exception encadrée',
        title: 'Le différé de publication',
        body: "Une société peut **retarder** la publication si trois conditions sont réunies : la publication immédiate nuirait à ses intérêts légitimes (par exemple, une négociation en cours), le retard n'induit pas le public en erreur, et la **confidentialité** est assurée.\n\nSi une fuite se produit, elle doit publier immédiatement.",
      },
      {
        type: 'read',
        kicker: 'Pour les particuliers',
        title: "Le document d'informations clés",
        body: "Pour beaucoup de produits proposés aux particuliers (fonds, produits structurés, assurance-vie en unités de compte), le vendeur doit remettre un **DIC** de trois pages maximum, au format standardisé dans toute l'Europe.\n\nOn y trouve un **indicateur de risque de 1 à 7**, des **scénarios** de performance et surtout le détail des **coûts**. C'est le document à lire avant de signer.",
      },
      {
        type: 'quiz',
        question: 'Tu hésites entre deux fonds et veux comparer leurs frais et leur niveau de risque. Où regarder en priorité ?',
        options: ['La publicité du fonds', 'Le document d’informations clés de chaque fonds', 'Les avis sur les réseaux sociaux', 'Le rapport annuel de la banque'],
        answer: 1,
        explain: 'Le DIC est standardisé : même format, mêmes rubriques pour tous. C’est fait pour comparer.',
      },
      {
        type: 'read',
        kicker: 'Qui possède quoi',
        title: 'Les franchissements de seuils',
        body: "En France, un actionnaire qui franchit, à la hausse ou à la baisse, certains seuils de capital ou de droits de vote doit le déclarer à la société et à l'AMF dans les 4 jours de bourse : **5 %**, 10 %, 15 %, 20 %, 25 %, 30 %, 33⅓ %, 50 %, 66⅔ %, 90 % et 95 %.\n\nObjectif : que le marché sache qui monte au capital, et empêcher les prises de contrôle rampantes et discrètes.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Un fonds détient 4,9 % d'une société cotée française et achète 0,3 % de plus. Doit-il le déclarer ?",
        options: ['Non, il n’a acheté que 0,3 %', 'Oui, il vient de franchir le seuil de 5 %', 'Seulement s’il dépasse 10 %', 'Seulement si la société le lui demande'],
        answer: 1,
        explain: "Ce n'est pas la taille de l'achat qui compte, mais le seuil franchi : 4,9 % → 5,2 % fait passer la barre des 5 %.",
      },
    ],
  },

  // ───────────── Philosophie · N2 ─────────────
  {
    id: 'philo-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Londres, 1867',
        title: 'Deux circuits',
        body: "Dans *Le Capital*, Karl Marx distingue deux façons d'utiliser l'argent :\n\n- **M – A – M** : je vends une marchandise pour en acheter une autre. L'argent n'est qu'un intermédiaire, le but est l'usage.\n- **A – M – A′** : j'avance de l'argent pour acheter des marchandises (dont du travail), afin de récupérer **plus** d'argent (A′ > A). C'est le **capital**.",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: 'Dans le circuit A – M – A′, quel est le but ?',
        options: ['Consommer une marchandise utile', "Récupérer plus d'argent qu'on en a avancé", 'Échanger sans monnaie', 'Payer des impôts'],
        answer: 1,
        explain: "Le point de départ et d'arrivée sont de l'argent : seule la différence compte. Aristote aurait reconnu sa chrématistique.",
      },
      {
        type: 'read',
        kicker: 'La question de Marx',
        title: "D'où vient le « plus » ?",
        body: "Si tout s'échange à sa juste valeur, d'où vient la **plus-value** A′ − A ?\n\nRéponse de Marx : d'une marchandise spéciale, la **force de travail**. Le capitaliste l'achète à sa valeur (le salaire, de quoi vivre). Mais un travailleur produit, dans sa journée, **plus de valeur** que ce qu'il coûte. La différence, le **surtravail**, revient au capitaliste.",
      },
      {
        type: 'number',
        question: "Dans le cadre de Marx : un ouvrier produit 200 € de valeur par jour et reçoit 120 € de salaire. Quel est le « taux de plus-value » (plus-value ÷ salaire), en % ? (2 décimales)",
        answer: 66.67,
        tolerance: 0.05,
        unit: '%',
        explain: 'Plus-value : 80 €. Taux : 80 ÷ 120 ≈ 66,67 %. Marx appelle aussi ce ratio le « taux d’exploitation ».',
      },
      {
        type: 'read',
        kicker: 'Le débat',
        title: 'Ce qui a été contesté, ce qui reste',
        body: "**Contesté** : la théorie de la valeur-travail (les marginalistes l'ont remplacée), le rôle ignoré de l'entrepreneur, du risque et de l'innovation, et des prédictions comme l'appauvrissement continu des ouvriers, démenties dans les pays riches.\n\n**Toujours discuté** : la concentration du capital, l'instabilité des cycles, le rapport de force entre salaires et profits. Des auteurs comme Thomas Piketty reprennent ces questions avec d'autres outils.",
      },
      {
        type: 'reflect',
        question: 'Le profit est-il une forme d’exploitation ?',
        options: [
          {
            label: 'Oui, il vient du travail non payé',
            response: "C'est la thèse de Marx. Elle suppose que seul le travail crée de la valeur. Objection : sans capital (machines) ni prise de risque, ce même travail produirait beaucoup moins.",
          },
          {
            label: 'Non, il rémunère le capital, le risque et l’organisation',
            response: "C'est la réponse de l'économie dominante : le profit paie le temps (l'argent immobilisé), le risque de perte et la coordination. Objection marxiste : c'est le rapport de force qui fixe le partage, pas une « juste » rémunération.",
          },
          {
            label: 'Ça dépend du partage et du contexte',
            response: "Position nuancée : le profit n'est pas illégitime par nature, mais le partage entre salaires et profits dépend du pouvoir de négociation, de la concurrence, des règles. C'est le terrain des débats actuels sur les inégalités.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Quel concept d'Aristote correspond au circuit A – M – A′ de Marx ?",
        options: ["L'oikonomia", 'La chrématistique', "L'utilité marginale", 'La valeur d’usage'],
        answer: 1,
        explain: "L'argent qui cherche à devenir plus d'argent, sans limite naturelle : Marx cite d'ailleurs explicitement Aristote sur ce point. Deux mille ans séparent les deux textes.",
      },
    ],
  },

  {
    id: 'philo-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Moyen Âge',
        title: "L'Église contre l'usure",
        body: "Pendant des siècles, l'Église interdit le prêt à intérêt entre chrétiens. Pour Thomas d'Aquin, l'argent ne se consomme qu'en étant dépensé : faire payer son usage **en plus** de sa restitution, c'est faire payer deux fois.\n\nOn disait aussi que l'usurier vend le **temps**, qui n'appartient qu'à Dieu.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'Le génie du contournement',
        title: "De l'usure à l'intérêt",
        body: "Les marchands contournent l'interdit (la lettre de change, vue en histoire) et les théologiens finissent par admettre des **compensations** : le prêteur peut être indemnisé pour la perte qu'il subit (*damnum emergens*) ou le gain qu'il manque (*lucrum cessans*).\n\nAu XVIe siècle, Jean Calvin accepte un intérêt **modéré**. Peu à peu, « usure » finit par désigner seulement l'intérêt **excessif**.",
      },
      {
        type: 'quiz',
        question: "Aujourd'hui, en France, que désigne juridiquement le « taux d'usure » ?",
        options: ['L’interdiction de tout intérêt', 'Le taux maximum légal au-delà duquel un crédit est interdit', 'Le taux de la BCE', 'Le taux du Livret A'],
        answer: 1,
        explain: "L'intérêt est permis, l'excès est interdit : c'est l'héritage direct de ce glissement de sens.",
      },
      {
        type: 'read',
        kicker: 'Une autre tradition',
        title: 'La finance islamique',
        body: "Le droit islamique interdit le **riba** (l'intérêt), le **gharar** (l'incertitude excessive dans un contrat) et le **maysir** (le jeu de hasard). Il a développé ses propres instruments :\n\n- **mourabaha** : la banque achète un bien et le revend au client avec une marge connue d'avance, payable à terme ;\n- **ijara** : une location ;\n- **moudaraba** et **moucharaka** : des partenariats où l'on partage profits **et** pertes ;\n- **sukuk** : des titres adossés à des actifs réels.",
      },
      {
        type: 'number',
        question: 'En mourabaha, la banque achète une voiture 20 000 € et la revend 22 000 € au client, payables en 4 ans. Quelle est la marge totale, en % du prix d’achat ?',
        answer: 10,
        tolerance: 0.01,
        unit: '%',
        explain: '2 000 ÷ 20 000 = 10 % sur 4 ans. Ses critiques notent qu’économiquement, cela ressemble beaucoup à un crédit à taux fixe. Ses défenseurs répondent que la banque a réellement possédé le bien et en a porté le risque.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Qu'est-ce qui distingue vraiment une moucharaka d'un prêt classique ?",
        options: [
          'Le taux est plus bas',
          'La banque partage les pertes si le projet échoue, au lieu d’exiger un remboursement fixe',
          'Il n’y a pas de contrat',
          'Rien, c’est un nom différent pour la même chose',
        ],
        answer: 1,
        explain: "Dans un prêt, l'emprunteur doit rembourser quoi qu'il arrive. Dans une moucharaka, la banque est associée : si le projet perd, elle perd aussi. C'est un partage du risque, pas un prix du temps.",
      },
    ],
  },

  // ───────────── Finance quantitative · N2 ─────────────
  {
    id: 'quant-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Paris, 1900',
        title: 'La marche aléatoire',
        body: "Dans sa thèse *Théorie de la spéculation*, le mathématicien Louis Bachelier propose un modèle surprenant : le prix de demain = le prix d'aujourd'hui + un **choc aléatoire** imprévisible.\n\nC'est la **marche aléatoire**. Popularisée par le livre de Burton Malkiel (1973), elle reste le point de départ de la modélisation des prix.",
        guide: 'jaguar',
      },
      {
        type: 'quiz',
        question: 'Si les prix suivent une marche aléatoire, que peut-on déduire de leurs mouvements passés pour prédire le prochain ?',
        options: ['Que la tendance va continuer', 'Que la tendance va s’inverser', 'Rien : chaque choc est imprévisible', 'Le prix exact de demain'],
        answer: 2,
        explain: "C'est le sens du modèle : le passé ne contient pas d'information exploitable sur la direction du prochain mouvement.",
      },
      {
        type: 'read',
        kicker: 'Mais l’écart grandit',
        title: 'La racine du temps, encore',
        body: "Imagine un prix qui monte ou baisse de **1 €** chaque jour, à pile ou face. En moyenne, il ne bouge pas. Mais il s'**éloigne** de son point de départ.\n\nComme les chocs sont indépendants, les variances s'additionnent : après `n` jours, l'écart-type de la position vaut `√n`. C'est la même racine que pour annualiser la volatilité.",
      },
      {
        type: 'number',
        question: "Après 100 jours de cette marche (±1 € par jour), quel est l'écart-type de la distance au point de départ ?",
        answer: 10,
        tolerance: 0.01,
        unit: '€',
        explain: '√100 = 10 €. Après 100 pas de 1 €, on est typiquement à une dizaine d’euros du départ, d’un côté ou de l’autre.',
      },
      {
        type: 'number',
        question: 'Et après 400 jours ?',
        answer: 20,
        tolerance: 0.01,
        unit: '€',
        explain: '√400 = 20 €. Quatre fois plus de temps, seulement deux fois plus d’écart.',
      },
      {
        type: 'read',
        kicker: 'Une version plus réaliste',
        title: 'Marcher en pourcentage',
        body: "Un vrai prix ne peut pas devenir négatif, et une action à 1 000 € bouge plus en euros qu'une action à 10 €. On modélise donc plutôt une marche aléatoire sur le **logarithme** du prix : chaque jour, le prix est **multiplié** par un facteur aléatoire.\n\nEn temps continu, cela donne le **mouvement brownien géométrique**, au cœur de Black-Scholes (niveau 4).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Les rendements quotidiens d'un indice ne sont presque pas corrélés d'un jour à l'autre. Mais leurs valeurs absolues (la taille des mouvements) le sont nettement. Qu'est-ce que cela signifie ?",
        options: [
          'Que les prix sont parfaitement prévisibles',
          "Que la direction est imprévisible, mais que l'agitation se regroupe : une journée agitée annonce souvent d'autres journées agitées",
          'Que la marche aléatoire est parfaitement exacte',
          'Que les krachs n’existent pas',
        ],
        answer: 1,
        explain: "C'est le phénomène des **clusters de volatilité**. Le sens du prochain mouvement reste imprévisible, mais pas son ampleur probable. Les modèles GARCH (niveau 5 de Statistiques) exploitent exactement cela.",
      },
    ],
  },

  {
    id: 'quant-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Tester sur le passé',
        title: "Qu'est-ce qu'un backtest ?",
        body: "Un **backtest** applique une règle d'investissement à des données historiques pour voir ce qu'elle aurait rapporté. Par exemple : « acheter l'indice quand son cours passe au-dessus de sa moyenne des 200 derniers jours, vendre quand il passe en dessous ».\n\nC'est indispensable… et c'est le meilleur moyen de se raconter des histoires.",
        guide: 'jaguar',
        note: 'Un backtest parfait sur le passé, c’est souvent une proie qui a déjà été mangée.',
      },
      {
        type: 'read',
        kicker: 'Les pièges classiques',
        title: 'Quatre façons de se tromper',
        body: "- **Biais du survivant** : tester seulement sur les entreprises qui existent encore aujourd'hui, en oubliant celles qui ont fait faillite.\n- **Biais d'anticipation** (*look-ahead*) : utiliser une information qu'on n'aurait pas eue au moment de la décision.\n- **Coûts oubliés** : frais, spread, impôts.\n- **Surapprentissage** : ajuster la règle jusqu'à ce qu'elle colle parfaitement au passé.",
      },
      {
        type: 'quiz',
        question: 'Tu testes une stratégie sur 20 ans en utilisant les 40 entreprises qui composent le CAC 40 aujourd’hui. Quel biais ?',
        options: ['Biais d’anticipation', 'Biais du survivant', 'Aucun', 'Biais de coût'],
        answer: 1,
        explain: "Ces 40 entreprises sont celles qui ont réussi. Celles qui sont sorties de l'indice ou ont disparu ne sont pas dans ton test : tes résultats sont trop beaux.",
      },
      {
        type: 'quiz',
        question: "Ta règle : « acheter à l'ouverture si la séance du jour termine en hausse ». Quel est le problème ?",
        options: ['Aucun', 'Biais d’anticipation : à l’ouverture, on ne connaît pas encore la clôture', 'Biais du survivant', 'Elle coûte trop cher'],
        answer: 1,
        explain: "Le backtest utilise une information du futur. En réel, cette règle est impossible à appliquer, et son résultat historique ne veut rien dire.",
      },
      {
        type: 'number',
        question: "Ta stratégie fait 300 allers-retours par an. Chaque achat et chaque vente coûte 0,1 %. Quel est le coût total annuel, en % ?",
        answer: 60,
        tolerance: 0.01,
        unit: '%',
        hint: 'Un aller-retour = un achat + une vente.',
        explain: '300 × 2 × 0,1 % = 60 % par an. Une stratégie qui « rapporte 40 % » avant frais devient une catastrophe après.',
      },
      {
        type: 'read',
        kicker: 'Le piège le plus subtil',
        title: 'Le data snooping',
        body: "Si tu testes 1 000 stratégies au hasard, certaines auront de très bons résultats **par pure chance**. Choisir la meilleure et la présenter comme une découverte, c'est du **data snooping**.\n\nLe remède : garder une partie des données de côté et tester la stratégie choisie dessus (**hors échantillon**), et se méfier des résultats trop beaux.",
      },
      {
        type: 'number',
        challenge: true,
        question: "Tu testes 100 stratégies qui n'ont en réalité aucune valeur. Chacune a 5 % de chances de paraître « significative » par hasard. Combien en trouveras-tu, en moyenne, qui ont l'air de marcher ?",
        answer: 5,
        tolerance: 0.01,
        explain: "100 × 5 % = 5 fausses découvertes en moyenne. C'est l'espérance (niveau 2 de Statistiques) appliquée à la recherche : plus on teste, plus on « trouve ».",
      },
    ],
  },

  // ───────────── Finances personnelles · N2 ─────────────
  {
    id: 'perso-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Les règles en France',
        title: 'Combien peut-on emprunter ?',
        body: "Depuis 2022, les banques doivent respecter les règles du Haut Conseil de stabilité financière :\n\n- **taux d'effort** maximal de **35 %** : les mensualités (assurance comprise) ne doivent pas dépasser 35 % des revenus nets ;\n- **durée** maximale de **25 ans** (27 ans dans certains cas avec différé).\n\nLes banques peuvent déroger pour une petite partie de leurs dossiers.",
        guide: 'fourmi',
      },
      {
        type: 'number',
        question: 'Un couple gagne 3 500 € net par mois. Quelle mensualité maximale peut-il supporter selon la règle des 35 % ?',
        answer: 1225,
        tolerance: 0.5,
        unit: '€',
        explain: '35 % × 3 500 = 1 225 € par mois, assurance comprise.',
      },
      {
        type: 'read',
        kicker: 'Les frais d’acquisition',
        title: 'Les « frais de notaire »',
        body: "En achetant, on paie surtout des **droits de mutation** à l'État et aux collectivités (le notaire n'en garde qu'une petite partie). Ils représentent environ **7 à 8 %** du prix dans l'ancien, et **2 à 3 %** dans le neuf.\n\nLes banques demandent souvent un **apport** personnel couvrant au moins ces frais.",
      },
      {
        type: 'number',
        question: 'Un appartement ancien coûte 250 000 €. Avec des frais d’environ 7,5 %, combien prévoir en plus du prix ?',
        answer: 18750,
        tolerance: 0.5,
        unit: '€',
        explain: '7,5 % × 250 000 = 18 750 €. C’est souvent l’apport minimum exigé.',
      },
      {
        type: 'read',
        kicker: 'La capacité d’emprunt',
        title: 'Le taux change tout',
        body: "À mensualité fixée, le montant qu'on peut emprunter dépend fortement du **taux**. On inverse la formule de la mensualité :\n\n`capital = M × (1 − (1 + i)^−n) ÷ i`\n\navec `i` le taux mensuel et `n` le nombre de mois.",
      },
      {
        type: 'number',
        question: 'Avec 1 225 € par mois sur 25 ans à 3,6 % par an (0,3 % par mois), combien ce couple peut-il emprunter ? (à la centaine d’euros près)',
        answer: 242094,
        tolerance: 100,
        unit: '€',
        hint: 'n = 300 mois. Calcule 1,003^−300 d’abord.',
        explain: '1,003^−300 ≈ 0,407. Capital ≈ 1 225 × 0,593 ÷ 0,003 ≈ 242 100 €. (Ce calcul ignore l’assurance.)',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Entre 2021 et 2023, les taux immobiliers sont passés d’environ 1 % à environ 4 %. Pour la même mensualité sur 25 ans, comment a évolué la somme empruntable ?',
        options: ['Environ −5 %', 'Environ −30 %', 'Environ −75 %', 'Elle n’a pas changé'],
        answer: 1,
        explain: "À 1 %, 1 000 € par mois permettent d'emprunter environ 265 000 € ; à 4 %, environ 189 000 €. Près de 30 % de moins : c'est pourquoi les hausses de taux ont si vite gelé le marché immobilier.",
      },
    ],
  },

  {
    id: 'perso-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Le principe',
        title: 'Mutualiser le risque',
        body: "S'assurer, c'est payer une **petite somme certaine** (la prime) pour éviter une **grosse perte incertaine**. L'assureur rassemble beaucoup d'assurés : les primes de tous paient les sinistres de quelques-uns.\n\nComme l'assureur doit couvrir ses frais et faire un bénéfice, l'espérance de gain de l'assuré est **négative**. L'assurance n'est pas un placement : c'est une protection.",
        guide: 'fourmi',
      },
      {
        type: 'quiz',
        question: "Quels risques faut-il assurer en priorité ?",
        options: [
          'Les petites pertes fréquentes, comme un écran de téléphone fissuré',
          'Les pertes rares mais ruineuses, comme un incendie ou des dommages causés à quelqu’un',
          'Tout, sans exception',
          'Rien, il vaut mieux épargner',
        ],
        answer: 1,
        explain: "Une petite perte, ton épargne de précaution peut l'absorber. Une perte de 200 000 €, non. C'est là que l'assurance est indispensable.",
      },
      {
        type: 'number',
        question: "On te propose une extension de garantie à 79 € pour un téléphone de 600 €. La probabilité d'une panne couverte est de 8 %, avec une réparation moyenne de 250 €. Quelle est l'espérance de ce que l'assurance te rembourserait ?",
        answer: 20,
        tolerance: 0.01,
        unit: '€',
        explain: '8 % × 250 = 20 €, pour une prime de 79 €. Tu paies près de 4 fois ce que tu récupères en moyenne. Sauf si une panne te mettait vraiment en difficulté, c’est un mauvais calcul.',
      },
      {
        type: 'read',
        kicker: 'Le levier à connaître',
        title: 'La franchise',
        body: "La **franchise** est la part du sinistre qui reste à ta charge. Plus elle est élevée, plus la prime est faible.\n\nAvec une épargne de précaution solide, choisir une franchise plus haute est souvent rentable : tu t'auto-assures sur les petits montants, et l'assurance ne joue que pour les gros.",
      },
      {
        type: 'read',
        kicker: 'En France',
        title: 'Obligatoires… ou presque',
        body: "- L'assurance **responsabilité civile** automobile est obligatoire.\n- Un **locataire** doit assurer son logement contre les risques locatifs.\n- L'**assurance emprunteur** n'est pas obligatoire par la loi, mais les banques l'exigent presque toujours. Depuis la loi Lemoine (2022), on peut en **changer à tout moment**, ce qui permet souvent de faire de grosses économies.",
      },
      {
        type: 'quiz',
        question: 'Tu as un crédit immobilier depuis 3 ans et trouves une assurance emprunteur bien moins chère. Que permet la loi Lemoine ?',
        options: ['Rien, il faut attendre la fin du crédit', 'De changer d’assurance à tout moment, à garanties équivalentes', 'De changer seulement à la date anniversaire', 'De ne plus être assuré du tout'],
        answer: 1,
        explain: 'Le changement est possible à tout moment, à condition que les garanties soient équivalentes à celles exigées par la banque.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Une fois bien assurés, certains assurés deviennent moins prudents. Comment s'appelle ce phénomène, et comment les assureurs y répondent-ils ?",
        options: [
          "L'antisélection ; ils refusent tout le monde",
          "L'aléa moral ; ils laissent une part du risque à l'assuré, par exemple avec une franchise",
          "L'effet de levier ; ils augmentent les taux",
          'La mutualisation ; ils ne font rien',
        ],
        answer: 1,
        explain: "L'**aléa moral** : être protégé réduit l'incitation à faire attention. La franchise garde l'assuré « intéressé » au risque. (L'antisélection est un autre problème : ce sont les plus risqués qui ont le plus envie de s'assurer.)",
      },
    ],
  },
]
