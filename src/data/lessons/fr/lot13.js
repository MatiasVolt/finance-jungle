// Niveau 4 (fin) : histoire, droit, philosophie.
// Escalier : intuition → application → défi facultatif.

export default [
  // ───────────── Histoire · N4 ─────────────
  {
    id: 'histoire-4-1',
    screens: [
      {
        type: 'read',
        kicker: 'New Hampshire, juillet 1944',
        title: 'Reconstruire le système monétaire',
        body: "Avant même la fin de la guerre, 44 pays se réunissent à **Bretton Woods**. Ils veulent éviter le chaos des années 1930 : dévaluations en cascade, protectionnisme, effondrement du commerce.\n\nLe système adopté :\n\n- le **dollar** est convertible en or, à **35 $ l'once**, pour les banques centrales ;\n- les autres monnaies ont une parité **fixe** (mais ajustable) avec le dollar ;\n- deux institutions naissent : le **FMI** et la **Banque mondiale**.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: "De 1949 à 1967, la livre sterling vaut 2,80 $. Combien de livres faut-il alors pour une once d'or ?",
        answer: 12.5,
        tolerance: 0.01,
        unit: '£',
        explain: "35 ÷ 2,80 = 12,5 £. Par le dollar, chaque monnaie du système est indirectement rattachée à l'or.",
      },
      {
        type: 'quiz',
        question: 'Quel est le rôle premier du FMI dans ce système ?',
        options: [
          'Financer des routes et des barrages',
          'Prêter temporairement aux pays en difficulté de balance des paiements, pour qu’ils puissent tenir leur parité',
          'Fixer les taux d’intérêt de chaque pays',
          'Imprimer une monnaie mondiale',
        ],
        answer: 1,
        explain: "Les grands projets de développement, c'est la Banque mondiale. Le FMI est le pompier des déséquilibres extérieurs.",
      },
      {
        type: 'read',
        kicker: 'Le plan perdant',
        title: 'Keynes et le bancor',
        body: "Keynes, qui représente le Royaume-Uni, proposait une monnaie internationale, le **bancor**, et un mécanisme qui pénalisait aussi les pays en **excédent**, pas seulement ceux en déficit.\n\nC'est le plan de l'Américain Harry Dexter White qui l'emporte : les États-Unis détiennent l'essentiel de l'or mondial, et le dollar devient le pivot du système.",
      },
      {
        type: 'read',
        kicker: 'Une faille dès l’origine',
        title: 'Le dilemme de Triffin',
        body: "En 1960, l'économiste Robert Triffin pointe une contradiction : pour que le reste du monde dispose d'assez de dollars, les États-Unis doivent avoir des **déficits** extérieurs. Mais plus il y a de dollars dans le monde par rapport à l'or américain, moins la promesse de convertibilité est **crédible**.\n\nLe système contient la cause de sa propre fin.",
      },
      {
        type: 'quiz',
        question: 'Selon Triffin, que se passerait-il si les États-Unis supprimaient leurs déficits extérieurs ?',
        options: [
          'Le système deviendrait parfait',
          'Le monde manquerait de dollars pour commercer : la liquidité internationale se tarirait',
          'L’or perdrait toute valeur',
          'Le FMI disparaîtrait',
        ],
        answer: 1,
        explain: "D'un côté, pas assez de dollars ; de l'autre, des dollars de moins en moins crédibles. Aucune issue stable.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Selon le « trilemme » de Mundell, un pays ne peut avoir à la fois des changes fixes, une politique monétaire autonome et une libre circulation des capitaux. Qu'a choisi Bretton Woods ?",
        options: [
          'Les trois',
          'Changes fixes et politique monétaire autonome, au prix de contrôles des capitaux',
          'Libre circulation des capitaux et changes flottants',
          'Aucun des trois',
        ],
        answer: 1,
        explain: "Les contrôles des capitaux étaient la norme. Quand les capitaux sont devenus plus mobiles dans les années 1960, la pression sur les parités a augmenté, jusqu'à la rupture.",
      },
    ],
  },

  {
    id: 'histoire-4-2',
    screens: [
      {
        type: 'read',
        kicker: 'Les années 1960',
        title: "L'or s'en va",
        body: "Guerre du Vietnam, programmes sociaux, inflation : les États-Unis dépensent, et les dollars s'accumulent à l'étranger. Plusieurs pays, dont la France du général de Gaulle, demandent à **convertir leurs dollars en or**.\n\nLe stock d'or américain fond : d'environ 20 000 tonnes au début des années 1950 à environ 9 000 tonnes en 1971.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: 'De 20 000 à 9 000 tonnes : de combien de % le stock d’or américain a-t-il baissé, environ ?',
        answer: 55,
        tolerance: 0.5,
        unit: '%',
        explain: '(20 000 − 9 000) ÷ 20 000 = 55 %. Les dollars en circulation à l’étranger dépassent largement ce qui reste d’or pour les garantir.',
      },
      {
        type: 'read',
        kicker: '15 août 1971',
        title: 'Le choc Nixon',
        body: "Un dimanche soir, à la télévision, le président Nixon annonce la **suspension de la convertibilité** du dollar en or. Les tentatives de rétablir des parités fixes échouent ; en **1973**, les grandes monnaies **flottent**.\n\nDepuis, aucune grande monnaie n'est adossée à l'or. C'est le monde de la monnaie **fiduciaire** décrit dans le parcours Démarrer.",
      },
      {
        type: 'quiz',
        question: "Depuis 1971, qu'est-ce qui fonde la valeur du dollar ?",
        options: [
          'Les réserves d’or de Fort Knox',
          'La confiance dans les institutions américaines, la banque centrale et l’économie, et le besoin mondial de dollars',
          'Le prix du pétrole uniquement',
          'Un accord avec le FMI',
        ],
        answer: 1,
        explain: "Le dollar est une monnaie fiduciaire. Sa domination repose sur la taille de l'économie américaine, la profondeur de ses marchés et la confiance dans ses institutions.",
      },
      {
        type: 'read',
        kicker: 'Les années 1970',
        title: 'Inflation et or',
        body: "Libérés de l'ancrage, beaucoup de pays connaissent une **inflation élevée**, aggravée par les chocs pétroliers de 1973 et 1979. L'or, lui, n'a plus de prix officiel : il passe de 35 $ à environ **850 $** l'once en janvier 1980.",
      },
      {
        type: 'number',
        question: "Par combien le prix de l'or a-t-il été multiplié entre 35 $ et 850 $ ? (2 décimales)",
        answer: 24.29,
        tolerance: 0.05,
        explain: '850 ÷ 35 ≈ 24,29 : en moins de dix ans.',
      },
      {
        type: 'read',
        kicker: 'Le remède de cheval',
        title: 'Volcker',
        body: "En 1979, Paul Volcker prend la tête de la Fed. Pour briser l'inflation, il laisse le taux directeur grimper jusqu'à environ **20 %** en 1981. L'économie plonge en récession, le chômage dépasse 10 %, mais l'inflation retombe durablement.\n\nCet épisode fonde la crédibilité moderne des banques centrales et l'importance des anticipations (macro, niveau 4).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "En 1971, le secrétaire au Trésor John Connally lance aux Européens : « Le dollar est notre monnaie, mais c'est votre problème. » Que veut-il dire ?",
        options: [
          'Que les Européens doivent acheter de l’or',
          'Que les décisions américaines sur le dollar s’imposent au reste du monde, qui en subit les conséquences',
          'Que le dollar va disparaître',
          'Que l’Europe doit adopter le dollar',
        ],
        answer: 1,
        explain: "Le reste du monde détient et utilise des dollars, mais ne décide rien. Cette asymétrie, parfois appelée « privilège exorbitant », reste au cœur des débats monétaires internationaux.",
      },
    ],
  },

  {
    id: 'histoire-4-3',
    screens: [
      {
        type: 'read',
        kicker: '19 octobre 1987',
        title: 'Le lundi noir',
        body: "Le Dow Jones perd **22,6 %** en une séance, la plus forte baisse en un jour de son histoire. Pas de guerre, pas de faillite majeure : des valorisations élevées, des taux en hausse… et une mécanique nouvelle qui s'emballe.\n\nCette mécanique, c'est l'**assurance de portefeuille**.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'Une bonne idée qui tourne mal',
        title: "L'assurance de portefeuille",
        body: "Inventée au début des années 1980 (Leland, O'Brien et Rubinstein), elle **réplique un put** au lieu de l'acheter : quand le marché baisse, on **vend** des contrats à terme sur indice, de plus en plus, pour protéger le portefeuille. C'est la logique du delta qui change, vue avec l'arbre binomial.\n\nDes dizaines de milliards de dollars sont gérés ainsi en 1987.",
      },
      {
        type: 'quiz',
        question: 'Pourquoi cette stratégie a-t-elle amplifié le krach ?',
        options: [
          'Parce qu’elle était illégale',
          "Parce que tous ses utilisateurs vendaient en même temps quand le marché baissait, ce qui le faisait baisser encore, et déclenchait de nouvelles ventes",
          'Parce qu’elle achetait trop',
          'Elle n’a joué aucun rôle',
        ],
        answer: 1,
        explain: "Une couverture individuellement rationnelle devient collectivement explosive quand tout le monde l'applique. On retrouve la spirale des appels de marge de 1929, en version algorithmique.",
      },
      {
        type: 'read',
        kicker: 'Les réponses',
        title: 'Coupe-circuits et prêteur en dernier ressort',
        body: "- Le lendemain, la Fed d'Alan Greenspan annonce qu'elle fournira toutes les liquidités nécessaires : la leçon de 1929 est appliquée.\n- Les Bourses instaurent des **coupe-circuits** : des pauses automatiques quand la baisse devient trop violente.",
      },
      {
        type: 'read',
        kicker: 'Une nouvelle culture du risque',
        title: 'La naissance de la VaR et du smile',
        body: "- Le krach pousse les banques à mesurer leur risque global chaque jour. Chez JP Morgan, le président Dennis Weatherstone exige un rapport quotidien d'une page, remis à 16 h 15. En 1994, la banque rend publique sa méthode, **RiskMetrics** : la VaR devient un standard.\n- Sur les marchés d'options, le **smile** de volatilité apparaît : les puts très en dehors de la monnaie deviennent nettement plus chers. Le marché intègre désormais la possibilité d'un krach.",
      },
      {
        type: 'quiz',
        question: 'Que signifie le fait qu’après 1987, les puts très en dehors de la monnaie soient devenus plus chers que ne le prévoit Black-Scholes ?',
        options: [
          'Que les traders se trompent',
          'Que le marché juge les fortes baisses plus probables que ne le suppose une loi normale : il fait payer les queues épaisses',
          'Que les taux ont monté',
          'Rien',
        ],
        answer: 1,
        explain: "La volatilité implicite plus élevée pour les strikes bas est la trace, dans les prix, de la leçon sur les queues épaisses. Le krach de 1987 l'a gravée dans le marché.",
      },
      {
        type: 'number',
        challenge: true,
        question: "Aujourd'hui, aux États-Unis, une baisse de 7 % du S&P 500 dans la journée déclenche une pause de 15 minutes. Si l'indice clôturait la veille à 5 000 points, à quel niveau la pause se déclenche-t-elle ?",
        answer: 4650,
        tolerance: 0.5,
        unit: 'points',
        explain: '5 000 × (1 − 0,07) = 4 650 points. Ces pauses ont été déclenchées plusieurs fois en mars 2020.',
      },
    ],
  },

  // ───────────── Droit financier · N4 ─────────────
  {
    id: 'droit-4-1',
    screens: [
      {
        type: 'read',
        kicker: 'Prendre le contrôle',
        title: 'Les offres publiques',
        body: "Une **offre publique** propose à **tous** les actionnaires d'une société cotée de racheter leurs titres :\n\n- contre de l'argent : une **OPA** (offre publique d'achat) ;\n- contre des titres de l'acheteur : une **OPE** (offre publique d'échange).\n\nPrincipe central : l'**égalité** entre actionnaires. L'AMF vérifie que l'offre respecte les règles et que l'information est complète.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Payer le contrôle',
        title: 'La prime',
        body: "Pour convaincre les actionnaires de vendre, l'acheteur propose en général un prix nettement supérieur au cours d'avant l'annonce : la **prime de contrôle**, souvent de 20 à 40 %.\n\nElle rémunère le pouvoir de décider seul de la stratégie, et les synergies que l'acheteur espère.",
      },
      {
        type: 'number',
        question: "Une action cotait 40 € avant l'annonce. L'offre est à 52 €. Quelle est la prime, en % ?",
        answer: 30,
        tolerance: 0.01,
        unit: '%',
        explain: '(52 − 40) ÷ 40 = 30 %.',
      },
      {
        type: 'read',
        kicker: 'En France',
        title: "L'offre obligatoire et le retrait obligatoire",
        body: "- Qui franchit le seuil de **30 %** du capital ou des droits de vote d'une société cotée doit **déposer une offre** sur l'ensemble des titres.\n- Quand l'initiateur détient au moins **90 %**, il peut lancer un **retrait obligatoire** : les minoritaires restants sont rachetés de force, au prix contrôlé, et la société sort de la Bourse.",
      },
      {
        type: 'quiz',
        question: 'Un fonds passe de 28 % à 31 % des droits de vote d’une société cotée française. Quelle est la conséquence ?',
        options: [
          'Aucune',
          'Il doit déposer une offre publique sur la totalité du capital',
          'Il doit revendre 1 %',
          'Il prend automatiquement la présidence',
        ],
        answer: 1,
        explain: "Le franchissement de 30 % déclenche l'offre obligatoire, en plus de la déclaration de franchissement de seuil vue au niveau 2.",
      },
      {
        type: 'read',
        kicker: 'Se défendre',
        title: 'Les défenses anti-OPA',
        body: "- **Pilule empoisonnée** (surtout aux États-Unis) : si un acheteur dépasse un seuil, les autres actionnaires peuvent acheter des actions à prix cassé, ce qui dilue l'assaillant.\n- **Chevalier blanc** : trouver un acquéreur ami qui fait une meilleure offre.\n- **Droits de vote double** : en France, depuis la loi Florange de 2014, les actions détenues au nominatif depuis deux ans ont en principe un droit de vote double, ce qui renforce les actionnaires fidèles.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Pourquoi la loi oblige-t-elle à lancer une offre sur 100 % du capital après avoir franchi 30 % ?",
        options: [
          'Pour enrichir l’AMF',
          "Pour que le nouvel actionnaire de contrôle ne capte pas seul la prime de contrôle : les minoritaires doivent pouvoir sortir au même prix",
          'Pour empêcher toute prise de contrôle',
          'Pour simplifier la cotation',
        ],
        answer: 1,
        explain: "Sans cette règle, on pourrait acheter discrètement le contrôle à quelques gros actionnaires avec une prime, et laisser les petits porteurs coincés avec un nouveau maître. C'est l'égalité entre actionnaires, appliquée.",
      },
    ],
  },

  {
    id: 'droit-4-2',
    screens: [
      {
        type: 'read',
        kicker: "Quand l'entreprise ne peut plus payer",
        title: 'La cessation des paiements',
        body: "En droit français, une entreprise est en **cessation des paiements** quand elle ne peut plus faire face à son **passif exigible** (les dettes à payer maintenant) avec son **actif disponible** (la trésorerie et ce qui est immédiatement mobilisable).\n\nLe dirigeant doit alors le déclarer au tribunal dans les **45 jours**.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Les outils',
        title: 'Du plus discret au plus radical',
        body: "- **Mandat ad hoc** et **conciliation** : négociations confidentielles avec les créanciers, avec l'aide d'un tiers.\n- **Sauvegarde** : avant la cessation des paiements, pour réorganiser l'entreprise sous la protection du tribunal.\n- **Redressement judiciaire** : après la cessation des paiements, quand un redressement reste possible.\n- **Liquidation judiciaire** : quand il n'y a plus d'espoir ; les actifs sont vendus pour payer les créanciers.",
      },
      {
        type: 'quiz',
        question: "Une entreprise voit venir de graves difficultés, mais paie encore ses dettes. Quelles procédures sont envisageables ?",
        options: ['La liquidation uniquement', 'La conciliation ou la sauvegarde', 'Le redressement judiciaire uniquement', 'Aucune, il faut attendre'],
        answer: 1,
        explain: "Plus on agit tôt, plus il reste de valeur à sauver. La sauvegarde a été créée en 2005 justement pour inciter les dirigeants à ne pas attendre.",
      },
      {
        type: 'read',
        kicker: 'Qui est payé en premier ?',
        title: "L'ordre des créanciers (simplifié)",
        body: "1. Les **salariés**, pour leurs derniers salaires (avec la garantie de l'AGS).\n2. Les frais de justice et certains créanciers nés **pendant** la procédure.\n3. Les créanciers **garantis** par une sûreté, sur le prix du bien qui la porte.\n4. Les créanciers **chirographaires** (sans garantie), au prorata.\n5. Les **actionnaires**, en dernier.",
      },
      {
        type: 'number',
        question: "En liquidation, une fois payés les salariés et les créanciers garantis, il reste 600 000 €. Les créanciers chirographaires réclament au total 1 500 000 €. Quel pourcentage de leur créance récupèrent-ils ?",
        answer: 40,
        tolerance: 0.01,
        unit: '%',
        explain: '600 000 ÷ 1 500 000 = 40 %. Chacun reçoit 40 centimes par euro dû. Les actionnaires, eux, ne reçoivent rien.',
      },
      {
        type: 'quiz',
        question: 'Dans une liquidation, que reçoivent en général les actionnaires ?',
        options: ['Le montant de leur apport', 'La moitié de leur apport', 'Généralement rien', 'Une indemnité de l’État'],
        answer: 2,
        explain: "Ils passent après tous les créanciers. C'est le revers de la responsabilité limitée : on ne perd que son apport, mais on le perd souvent entièrement.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Certains voient dans la sauvegarde une faveur faite aux mauvais gestionnaires, au détriment des créanciers. Quel est le principal argument en sa faveur ?",
        options: [
          'Elle efface toujours les dettes',
          "Une entreprise qui continue de fonctionner vaut souvent bien plus que ses actifs vendus un par un : préserver cette valeur peut profiter aussi aux créanciers et aux salariés",
          'Elle est gratuite',
          'Elle protège les actionnaires en priorité',
        ],
        answer: 1,
        explain: "C'est la différence entre **valeur de continuité** et **valeur de liquidation**. Une usine qui tourne vaut plus que des machines vendues aux enchères.",
      },
    ],
  },

  {
    id: 'droit-4-3',
    screens: [
      {
        type: 'read',
        kicker: 'Se protéger en prêtant',
        title: 'Les sûretés',
        body: "Une **sûreté** donne au créancier une protection supplémentaire en cas de défaut. Deux familles :\n\n- **personnelles** : une personne s'engage à payer à la place du débiteur (le **cautionnement**, vu au niveau 1 ; la **garantie à première demande**) ;\n- **réelles** : un **bien** est affecté au remboursement (**hypothèque** sur un immeuble, **nantissement** d'un compte-titres ou d'un fonds de commerce, **gage** sur un bien meuble).",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: "Ta banque prend une hypothèque sur la maison que tu achètes avec ton crédit. C'est une sûreté…",
        options: ['Personnelle', 'Réelle', 'Morale', 'Fiscale'],
        answer: 1,
        explain: "Elle porte sur un bien précis : en cas de défaut, la banque peut faire vendre la maison et se payer en priorité sur le prix.",
      },
      {
        type: 'read',
        kicker: 'Mesurer la protection',
        title: 'Le ratio prêt / valeur',
        body: "Le **LTV** (*loan-to-value*) rapporte le montant du prêt à la valeur du bien qui le garantit.\n\nPlus il est bas, plus le prêteur est protégé : si le bien perd de la valeur, il reste un **coussin** avant que la garantie ne couvre plus la dette.",
      },
      {
        type: 'number',
        question: 'Un prêt de 200 000 € est garanti par une maison estimée 250 000 €. Quel est le LTV, en % ?',
        answer: 80,
        tolerance: 0.01,
        unit: '%',
        explain: '200 000 ÷ 250 000 = 80 %. Le prix de la maison peut baisser de 20 % avant que la garantie ne suffise plus.',
      },
      {
        type: 'read',
        kicker: 'Les garanties financières',
        title: 'La décote',
        body: "Quand on prête contre des **titres** (obligations, actions), on applique une **décote** (*haircut*) : on ne prête pas toute la valeur du titre, pour se protéger de sa baisse possible et du temps qu'il faudrait pour le vendre.\n\nLes banques centrales elles-mêmes prêtent aux banques contre des titres, avec des décotes qui dépendent de leur qualité.",
      },
      {
        type: 'number',
        question: "Une banque apporte 1 000 000 € d'obligations en garantie, avec une décote de 10 %. Combien peut-elle emprunter au maximum ?",
        answer: 900000,
        tolerance: 0.5,
        unit: '€',
        explain: '1 000 000 × (1 − 10 %) = 900 000 €.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Pourquoi la décote appliquée à des actions est-elle en général bien plus forte que celle appliquée à des obligations d'un État très bien noté ?",
        options: [
          'Par tradition',
          'Parce que les actions sont plus volatiles et peuvent perdre beaucoup de valeur avant que le prêteur ait le temps de les vendre',
          'Parce que les actions ne rapportent rien',
          'Parce que la loi interdit de prêter contre des actions',
        ],
        answer: 1,
        explain: "La décote dépend de la volatilité, de la liquidité et du risque du titre. En crise, les décotes augmentent brutalement, ce qui force à vendre : un autre mécanisme d'amplification vu en 2008.",
      },
    ],
  },

  // ───────────── Philosophie · N4 ─────────────
  {
    id: 'philo-4-1',
    screens: [
      {
        type: 'read',
        kicker: '2007',
        title: 'Le cygne noir',
        body: "Pendant des siècles, les Européens tenaient pour certain que tous les cygnes étaient blancs. En 1697, des explorateurs en découvrent des noirs en Australie. Une seule observation a suffi à ruiner une certitude.\n\nNassim Nicholas Taleb appelle **cygne noir** un événement :\n\n- **rare** et imprévu ;\n- à l'**impact** énorme ;\n- que l'on **explique** facilement **après coup**, comme s'il avait été prévisible.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'Deux pays imaginaires',
        title: 'Médiocristan et Extrémistan',
        body: "- Au **Médiocristan**, aucune observation ne change la moyenne : ajouter la personne la plus grande du monde à une salle de 1 000 personnes modifie à peine la taille moyenne.\n- En **Extrémistan**, une seule observation peut tout dominer : ajouter le plus riche du monde à la même salle fait exploser le revenu moyen.\n\nLa finance, les ventes de livres, la taille des villes vivent en Extrémistan.",
      },
      {
        type: 'quiz',
        question: 'Lequel de ces phénomènes appartient plutôt à l’Extrémistan ?',
        options: ['Le poids des adultes', 'Le nombre de calories mangées par jour', "Les ventes des livres d'une année", 'La durée du sommeil'],
        answer: 2,
        explain: "Quelques best-sellers vendent plus que des milliers d'autres livres réunis. Dans ces domaines, la moyenne et l'écart-type trompent.",
      },
      {
        type: 'number',
        question: "1 000 personnes gagnent en moyenne 30 000 € par an. Une personne qui gagne 100 milliards d'euros entre dans la salle. Quel est le nouveau revenu moyen, en millions d'euros ? (2 décimales)",
        answer: 99.93,
        tolerance: 0.1,
        unit: 'M€',
        explain: '(1 000 × 30 000 + 100 000 000 000) ÷ 1 001 ≈ 99,93 M€. La médiane, elle, n’a pas bougé : 30 000 €. Retour à la leçon sur la moyenne et la médiane.',
      },
      {
        type: 'read',
        kicker: 'La parabole',
        title: 'La dinde de Thanksgiving',
        body: "Une dinde est nourrie chaque jour pendant 1 000 jours. Chaque jour renforce sa conviction que l'humain lui veut du bien. Sa confiance est **maximale** la veille de Thanksgiving.\n\nLe passé ne garantit rien quand le risque est caché. Les années calmes avant 2008 ressemblaient beaucoup aux 1 000 jours de la dinde.",
      },
      {
        type: 'reflect',
        question: "Peut-on se préparer à ce qu'on ne peut pas prévoir ?",
        options: [
          {
            label: 'Non, par définition',
            response: "Taleb répondrait : on ne peut pas prévoir **quel** cygne noir arrivera, mais on peut savoir qu'il y en aura. On peut donc éviter les positions qui en meurent : levier excessif, dépendance à un seul scénario.",
          },
          {
            label: 'Oui, avec de meilleurs modèles',
            response: "C'est l'espoir de la finance quantitative. Taleb est sceptique : les modèles calibrés sur le passé sont justement aveugles à ce qui ne s'est jamais produit. D'où l'importance des scénarios de crise imaginés, pas seulement observés.",
          },
          {
            label: 'Oui, en devenant robuste plutôt que prévisionniste',
            response: "C'est le cœur de son livre suivant, *Antifragile* (2012) : construire des systèmes qui supportent les chocs, voire en profitent, plutôt que de parier sur une prévision.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Taleb recommande une stratégie « haltère » : environ 90 % dans des placements extrêmement sûrs, et 10 % dans des paris très risqués à gain potentiel énorme. Quelle est la perte maximale de ce portefeuille ?",
        options: ['Environ 10 %', 'Environ 50 %', '100 %', 'Impossible à dire'],
        answer: 0,
        explain: "Si tous les paris risqués échouent, on perd environ 10 %. Mais si un cygne noir favorable survient, le gain peut être énorme. On évite le milieu, ces placements « moyennement risqués » qui peuvent cacher des pertes extrêmes.",
      },
    ],
  },

  {
    id: 'philo-4-2',
    screens: [
      {
        type: 'read',
        kicker: '1979',
        title: 'La théorie des perspectives',
        body: "Daniel Kahneman et Amos Tversky montrent que nous ne jugeons pas nos richesses en absolu, mais en **gains** et **pertes** par rapport à un **point de référence**.\n\nEt surtout : une perte fait environ **deux fois plus mal** qu'un gain équivalent ne fait plaisir. C'est l'**aversion aux pertes**. Kahneman recevra le prix Nobel d'économie en 2002.",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: "On te propose un pile ou face : face, tu gagnes 100 € ; pile, tu perds 100 €. Que répondent la plupart des gens ?",
        options: ["Ils acceptent avec enthousiasme", 'Ils refusent, alors que le jeu est équitable', 'Ils demandent à jouer 10 fois', 'Ils sont indifférents'],
        answer: 1,
        explain: "L'espérance est nulle, mais la douleur de perdre 100 € l'emporte sur le plaisir d'en gagner 100.",
      },
      {
        type: 'number',
        question: "Si une perte pèse 2 fois plus qu'un gain (coefficient d'aversion aux pertes de 2), combien faut-il gagner sur face, au minimum, pour qu'une personne accepte de risquer 100 € sur pile ?",
        answer: 200,
        tolerance: 0.5,
        unit: '€',
        explain: '2 × 100 = 200 €. Dans les expériences, beaucoup de gens demandent effectivement autour de 200 € avant d’accepter.',
      },
      {
        type: 'read',
        kicker: "L'inventaire",
        title: 'Les biais de l’investisseur',
        body: "- **Excès de confiance** : la plupart des gens se croient meilleurs que la moyenne, et échangent trop.\n- **Ancrage** : on reste accroché à un chiffre de départ, comme le prix d'achat d'une action.\n- **Effet de disposition** : on vend trop vite ce qui a gagné, et on garde trop longtemps ce qui a perdu, pour ne pas « matérialiser » la perte.\n- **Mimétisme** : on achète parce que les autres achètent.",
      },
      {
        type: 'quiz',
        question: "Tu as deux actions : A a pris 30 %, B a perdu 30 %. Tu as besoin d'argent et vends A « pour sécuriser le gain », en espérant que B remonte. Quel biais ?",
        options: ["L'ancrage seulement", "L'effet de disposition", "L'excès de confiance", 'Aucun'],
        answer: 1,
        explain: "La décision rationnelle dépend des perspectives futures de A et de B (et de la fiscalité), pas de ton prix d'achat. Le prix payé est un point de référence psychologique, pas une information économique.",
      },
      {
        type: 'read',
        kicker: 'Utiliser les biais pour le bien',
        title: 'Les nudges',
        body: "Richard Thaler (prix Nobel 2017) montre qu'on peut concevoir les choix pour aider les gens sans les contraindre : c'est le **nudge** (coup de pouce).\n\nExemple célèbre : le programme *Save More Tomorrow*, où les salariés s'engagent à épargner une part de leurs **futures** augmentations de salaire. La perte n'est jamais ressentie, et l'épargne monte fortement.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Une entreprise inscrit automatiquement ses salariés à son plan d'épargne retraite (ils peuvent se désinscrire en un clic). La participation passe de 40 % à 90 %. Pourquoi ?",
        options: [
          'Parce que le plan est devenu plus rentable',
          "Par l'effet du choix par défaut : l'inertie fait que la plupart des gens gardent l'option qu'on leur présente",
          'Parce que c’est obligatoire',
          'Parce que les salariés ont été mieux payés',
        ],
        answer: 1,
        explain: "Rien n'a changé dans l'intérêt économique du plan, seulement la présentation du choix. Des études américaines des années 2000 ont mesuré des écarts de cet ordre de grandeur.",
      },
    ],
  },

  {
    id: 'philo-4-3',
    screens: [
      {
        type: 'read',
        kicker: 'Une évidence ?',
        title: '« Il faut payer ses dettes »',
        body: "Dans *Dette : 5 000 ans d'histoire* (2011), David Graeber remarque que cette phrase est presque universellement acceptée comme une **évidence morale**. Pourtant, elle mélange deux choses :\n\n- une **dette morale** (on doit quelque chose à quelqu'un) ;\n- une **dette financière**, chiffrée, transférable, avec intérêts.\n\nTransformer une obligation morale en chiffre précis, dit-il, a toujours eu des conséquences politiques.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: "L'histoire le montre",
        title: 'Les dettes annulées',
        body: "On l'a vu avec les rois mésopotamiens. Plus près de nous :\n\n- **1953**, accord de Londres : la dette extérieure de l'Allemagne de l'Ouest est réduite d'environ moitié, ce qui facilite son redressement d'après-guerre ;\n- **2012**, Grèce : les créanciers privés acceptent une perte d'environ **53,5 %** sur la valeur nominale de leurs obligations, la plus grande restructuration de dette souveraine de l'histoire.",
      },
      {
        type: 'number',
        question: "En 2012, environ 206 milliards d'euros d'obligations grecques détenues par le privé sont concernés, avec une décote de 53,5 %. De combien la dette est-elle réduite, en milliards d'euros ? (à l'unité près)",
        answer: 110,
        tolerance: 1,
        unit: 'Md€',
        explain: '206 × 53,5 % ≈ 110 Md€. Une somme considérable, qui n’a pourtant pas suffi à rendre la dette grecque soutenable à elle seule.',
      },
      {
        type: 'reflect',
        question: 'Faut-il toujours rembourser ses dettes ?',
        options: [
          {
            label: 'Oui, sinon le crédit disparaît',
            response: "Argument fort : si les dettes peuvent être effacées facilement, plus personne ne prête, ou seulement à des taux énormes. La confiance dans les contrats est un bien commun, et les emprunteurs honnêtes paient pour les autres.",
          },
          {
            label: 'Pas quand la dette est devenue impossible à rembourser',
            response: "Position de beaucoup d'économistes : une dette insoutenable finit de toute façon en défaut, mais après des années de dégâts. La restructurer tôt peut être meilleur pour tous, créanciers compris. L'Allemagne de 1953 en est l'exemple souvent cité.",
          },
          {
            label: 'Ça dépend aussi de la responsabilité du prêteur',
            response: "Si le prêteur a prêté imprudemment, en sachant que l'emprunteur ne pourrait pas rembourser, doit-il supporter seul les conséquences ? C'est le débat sur l'**aléa moral** côté créancier, et sur la notion de « dette odieuse ».",
          },
        ],
      },
      {
        type: 'read',
        kicker: 'Les deux côtés',
        title: "L'aléa moral, dans les deux sens",
        body: "- Si les dettes sont souvent effacées, les **emprunteurs** peuvent être tentés de trop emprunter.\n- Si les créanciers sont toujours sauvés (par l'État, le FMI), les **prêteurs** peuvent être tentés de prêter sans regarder.\n\nUne bonne règle de restructuration doit donc faire supporter une part de la perte **aux deux**.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "La Bible prévoit, tous les 50 ans, un « jubilé » où les dettes sont remises et les terres rendues. À quelle institution plus ancienne, vue dans le thème Histoire, cela fait-il écho ?",
        options: [
          'La lettre de change florentine',
          'Le misharum des rois mésopotamiens, qui annulaient les dettes',
          'La Wisselbank d’Amsterdam',
          'Les accords de Bretton Woods',
        ],
        answer: 1,
        explain: "Des tablettes de Mésopotamie à la Grèce de 2012, la même question revient : que fait une société des dettes qu'on ne peut plus payer ? Tu as maintenant les outils pour en débattre en finance, en droit, en histoire et en philosophie.",
      },
    ],
  },
]
