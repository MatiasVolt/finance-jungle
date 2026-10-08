// Niveau 3 (fin) : histoire, droit, philosophie. Escalier : intuition → application → défi facultatif.

export default [
  // ───────────── Histoire · N3 ─────────────
  {
    id: 'histoire-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'Paris, 1716',
        title: "L'Écossais qui voulait réinventer la monnaie",
        body: "La France sort ruinée du règne de Louis XIV. Un financier écossais, **John Law**, convainc le Régent d'une idée neuve : remplacer les pièces rares par du **papier-monnaie** émis par une banque, pour faire circuler le crédit et relancer l'économie.\n\nEn 1716, il fonde la Banque générale. En 1717, il prend le contrôle de la **Compagnie d'Occident**, qui a le monopole du commerce avec la Louisiane : le « Mississippi ».",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'Le Système',
        title: 'Dette, actions et billets',
        body: "Law imagine un mécanisme audacieux : les créanciers de l'État peuvent échanger leurs titres de dette contre des **actions** de sa compagnie. Les actions s'achètent avec des **billets** de sa banque, devenue Banque royale. Et la banque prête volontiers… pour acheter des actions.\n\nRue Quincampoix, à Paris, la foule se presse. C'est à cette époque qu'apparaît le mot « millionnaire ».",
      },
      {
        type: 'number',
        question: "L'action de la Compagnie passe d'environ 500 livres à près de 10 000 livres entre 1719 et début 1720. Quelle hausse cela représente-t-il, en % ?",
        answer: 1900,
        tolerance: 0.5,
        unit: '%',
        explain: '(10 000 − 500) ÷ 500 = 19, soit +1 900 %. Le prix a été multiplié par 20 en quelques mois.',
      },
      {
        type: 'read',
        kicker: '1720',
        title: "L'effondrement",
        body: "Les profits de la Louisiane sont bien loin des promesses. Des investisseurs commencent à convertir leurs gains en or, la confiance se fissure, l'action s'effondre et les billets perdent leur valeur. Law s'enfuit de France à la fin de 1720.\n\nLe traumatisme est durable : la France se méfiera du papier-monnaie et même du mot « banque » pendant des décennies. La Banque de France ne naîtra qu'en 1800.",
      },
      {
        type: 'quiz',
        question: 'La même année 1720, une autre bulle éclate à Londres. Laquelle ?',
        options: ['La tulipomanie', 'La bulle des Mers du Sud', 'Le krach de 1929', 'La bulle internet'],
        answer: 1,
        explain: "La Compagnie des Mers du Sud suit un schéma proche : dette publique échangée contre des actions. Isaac Newton y aurait perdu une fortune et dit qu'il savait calculer le mouvement des astres, mais pas la folie des hommes.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Quel mécanisme a rendu le Système de Law si explosif, à la hausse comme à la baisse ?",
        options: [
          'Les taux de change fixes',
          "Une boucle : la banque créait des billets pour acheter des actions, et la hausse des actions semblait justifier toujours plus de billets",
          "L'étalon-or",
          'Une taxe sur les actions',
        ],
        answer: 1,
        explain: "Le crédit nourrit le prix, le prix justifie le crédit. Cette boucle de rétroaction se retrouve dans presque toutes les grandes bulles, jusqu'à l'immobilier américain de 2006.",
      },
    ],
  },

  {
    id: 'histoire-3-2',
    screens: [
      {
        type: 'read',
        kicker: 'XIXe siècle',
        title: "L'étalon-or",
        body: "Sous l'**étalon-or**, chaque monnaie est définie comme un **poids fixe d'or**, et la banque centrale s'engage à échanger ses billets contre de l'or à ce prix.\n\nLe Royaume-Uni l'adopte officiellement en 1821 ; la plupart des grandes économies le rejoignent dans les années 1870. Conséquence immédiate : les taux de change entre ces monnaies deviennent **fixes**.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: "Avant 1914, une livre sterling contient environ 7,3224 g d'or fin, et un dollar 1,5046 g. Combien de dollars vaut une livre ? (2 décimales)",
        answer: 4.87,
        tolerance: 0.01,
        unit: '$',
        explain: '7,3224 ÷ 1,5046 ≈ 4,87 $. Ce taux, à peu de chose près, est resté stable pendant des décennies.',
      },
      {
        type: 'read',
        kicker: 'Le mécanisme',
        title: "L'ajustement automatique de Hume",
        body: "Dès 1752, le philosophe David Hume décrit le mécanisme : un pays qui importe trop paie en or, l'or **sort**, la quantité de monnaie **baisse**, les prix **baissent**, ses produits redeviennent compétitifs, et la balance se rééquilibre.\n\nÉlégant… mais l'ajustement passe par la **baisse des prix et des salaires**, souvent douloureuse.",
      },
      {
        type: 'quiz',
        question: "Quel est le principal inconvénient de l'étalon-or pour une banque centrale ?",
        options: [
          'Il rend l’inflation impossible à mesurer',
          "Elle ne peut pas mener sa propre politique monétaire : la quantité de monnaie dépend de l'or, pas des besoins de l'économie",
          'Il interdit les banques privées',
          'Il impose des taux d’intérêt négatifs',
        ],
        answer: 1,
        explain: "Une découverte de mines (Californie, 1848) fait gonfler la monnaie ; une pénurie d'or provoque la déflation. La politique monétaire est pilotée par la géologie.",
      },
      {
        type: 'read',
        kicker: 'La fin',
        title: 'De la Grande Guerre aux années 1930',
        body: "En 1914, la guerre suspend la convertibilité. Dans les années 1920, plusieurs pays reviennent à l'or, parfois à des parités trop élevées : en 1925, le Royaume-Uni rétablit la livre à son niveau d'avant-guerre, ce qui pénalise ses exportations.\n\nPendant la Grande Dépression, les pays abandonnent l'or les uns après les autres. Les historiens, comme Barry Eichengreen, ont montré que **ceux qui l'ont quitté le plus tôt se sont redressés le plus vite**.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Pourquoi quitter l’étalon-or tôt a-t-il aidé à sortir de la Dépression ?',
        options: [
          'Parce que l’or était devenu inutile',
          'Parce que cela rendait la liberté de créer de la monnaie et de baisser les taux pour stopper la déflation',
          'Parce que cela augmentait les exportations d’or',
          'Ce n’est pas le cas',
        ],
        answer: 1,
        explain: "Attaché à l'or, un pays en déflation devait laisser ses prix et sa production s'effondrer. Libéré, il pouvait relancer. C'est l'une des grandes leçons qui inspirent les banques centrales depuis.",
      },
    ],
  },

  {
    id: 'histoire-3-3',
    screens: [
      {
        type: 'read',
        kicker: 'Les années folles',
        title: 'Acheter à crédit',
        body: "Dans les années 1920, l'économie américaine est en plein essor : automobile, électricité, radio. La Bourse s'envole : le Dow Jones est multiplié par environ six entre 1921 et 1929.\n\nBeaucoup achètent des actions **sur marge** : ils n'apportent qu'une petite partie du prix (parfois 10 %) et empruntent le reste à leur courtier.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: "Tu achètes 1 000 $ d'actions en apportant 100 $ et en empruntant 900 $. Les actions baissent de 10 %. Quelle part de ta mise as-tu perdue, en % ?",
        answer: 100,
        tolerance: 0.01,
        unit: '%',
        explain: "Les actions valent 900 $, exactement ta dette : ta mise de 100 $ est entièrement perdue. Levier de 10 : −10 % sur le prix, −100 % pour toi.",
      },
      {
        type: 'read',
        kicker: 'Octobre 1929',
        title: 'La spirale',
        body: "Le jeudi 24 octobre (« jeudi noir »), puis les 28 et 29, les cours chutent violemment. Les courtiers lancent des **appels de marge** : ceux qui ne peuvent pas payer voient leurs actions **vendues de force**, ce qui fait encore baisser les prix, et déclenche de nouveaux appels de marge.\n\nLe krach n'est que le début : la baisse se poursuit pendant presque trois ans.",
      },
      {
        type: 'number',
        question: 'Le Dow Jones culmine à 381 points en septembre 1929 et touche le fond à 41 points en juillet 1932. Quelle est la baisse totale, en % ? (1 décimale)',
        answer: 89.2,
        tolerance: 0.1,
        unit: '%',
        explain: '(381 − 41) ÷ 381 ≈ 89,2 %. Il faudra attendre 1954 pour retrouver le sommet de 1929.',
      },
      {
        type: 'read',
        kicker: 'De la crise boursière à la Dépression',
        title: 'Les banques tombent',
        body: "Entre 1930 et 1933, environ **9 000 banques** américaines font faillite. Les déposants paniqués retirent leur argent, la quantité de monnaie s'effondre d'environ un tiers, les prix et la production suivent.\n\nMilton Friedman et Anna Schwartz (1963) accusent la Réserve fédérale de ne pas avoir joué son rôle de **prêteur en dernier ressort** : elle a laissé le système bancaire s'écrouler.",
      },
      {
        type: 'read',
        kicker: 'Ce qui en est resté',
        title: 'Les règles nées de 1929',
        body: "- **1933** : le *Glass-Steagall Act* sépare les banques de dépôt et les banques d'investissement, et crée la **FDIC**, qui garantit les dépôts.\n- **1934** : naissance de la **SEC**, le gendarme de la Bourse américaine, et obligation d'information pour les sociétés cotées.\n\nBeaucoup des règles vues en Droit financier sont des cicatrices de 1929.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Ben Bernanke, spécialiste de la Grande Dépression, préside la Fed en 2008. Quelle leçon de 1929 applique-t-il ?",
        options: [
          'Laisser les banques faire faillite pour assainir le système',
          'Fournir massivement des liquidités aux banques et éviter à tout prix l’effondrement de la quantité de monnaie',
          'Revenir à l’étalon-or',
          'Fermer la Bourse',
        ],
        answer: 1,
        explain: "En 2002, il avait dit à Milton Friedman, à propos de la Dépression : « Vous avez raison, nous l'avons provoquée. Nous ne recommencerons pas. » En 2008, la Fed a agi en prêteur en dernier ressort, massivement.",
      },
    ],
  },

  // ───────────── Droit financier · N3 ─────────────
  {
    id: 'droit-3-1',
    screens: [
      {
        type: 'read',
        kicker: "La règle européenne",
        title: 'MiFID II',
        body: "La directive européenne sur les marchés d'instruments financiers (**MiFID**, 2007), révisée en **MiFID II** (appliquée depuis janvier 2018), encadre tous ceux qui vendent ou conseillent des placements.\n\nDeux objectifs : **protéger les investisseurs** et rendre les marchés plus **transparents**.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Qui est le client ?',
        title: 'Trois catégories, trois niveaux de protection',
        body: "- **Client non professionnel** (toi, en général) : protection maximale.\n- **Client professionnel** (banques, grandes entreprises, investisseurs avertis) : protection allégée.\n- **Contrepartie éligible** (établissements financiers entre eux) : protection minimale.\n\nUn particulier peut, sous conditions, demander à être traité comme professionnel.",
      },
      {
        type: 'read',
        kicker: 'Avant de vendre',
        title: 'Adéquation et caractère approprié',
        body: "- En cas de **conseil**, le prestataire doit vérifier l'**adéquation** : le produit correspond-il à tes objectifs, ta situation financière, ta tolérance aux pertes, tes connaissances ?\n- Sans conseil, pour un produit complexe, il doit au moins vérifier le **caractère approprié** : as-tu les connaissances et l'expérience pour comprendre ce que tu achètes ?",
      },
      {
        type: 'quiz',
        question: 'Ton conseiller bancaire te recommande un produit structuré complexe sans t’avoir jamais posé de question sur ta situation ni tes connaissances. Est-ce conforme ?',
        options: ['Oui, il est libre de recommander', "Non : un conseil exige d'abord d'évaluer l'adéquation du produit à ton profil", 'Oui, si le produit est rentable', 'Seulement si tu signes'],
        answer: 1,
        explain: "Sans questionnaire sur ton profil, aucun conseil n'est valable au sens de MiFID II.",
      },
      {
        type: 'read',
        kicker: 'Transparence',
        title: 'Les coûts, en euros',
        body: "MiFID II impose d'informer le client de **tous les coûts**, avant (ex ante) et après (ex post, au moins une fois par an), en **pourcentage et en euros**.\n\nElle encadre aussi les **incitations** (rétrocessions) : elles doivent améliorer le service rendu au client, être déclarées, et sont interdites en cas de conseil indépendant.",
      },
      {
        type: 'number',
        question: 'Ton relevé annuel indique 1,2 % de frais totaux sur un portefeuille de 25 000 €. Combien as-tu payé, en euros ?',
        answer: 300,
        tolerance: 0.5,
        unit: '€',
        explain: '1,2 % × 25 000 = 300 €. Voir le montant en euros fait souvent plus réagir qu’un pourcentage, et c’est voulu.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Pour accéder à des produits réservés, tu demandes à être classé « client professionnel ». Qu'est-ce que cela implique ?",
        options: [
          'Rien, c’est un simple statut',
          'Tu renonces à une partie des protections (information, vérifications) prévues pour les non-professionnels',
          'Tu paies moins d’impôts',
          'Tu deviens salarié de la banque',
        ],
        answer: 1,
        explain: "Le statut professionnel suppose que tu sais te protéger seul. La banque doit t'avertir des protections que tu perds.",
      },
    ],
  },

  {
    id: 'droit-3-2',
    screens: [
      {
        type: 'read',
        kicker: 'Les règles des banques',
        title: 'Bâle et les fonds propres',
        body: "Le **Comité de Bâle**, hébergé par la Banque des règlements internationaux, fixe les standards mondiaux de solvabilité des banques. Les accords **Bâle III** ont été adoptés après la crise de 2008.\n\nLeur cœur : une banque doit détenir assez de **fonds propres** par rapport à ses **actifs pondérés des risques** (RWA, *risk-weighted assets*). Plus un actif est risqué, plus il « pèse ».",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Les pondérations',
        title: 'Tous les prêts ne se valent pas',
        body: "Dans l'approche standard, des exemples simplifiés de pondérations :\n\n- obligation d'un État bien noté : **0 %** ;\n- crédit immobilier résidentiel bien garanti : environ **35 %** ;\n- prêt à une entreprise non notée : **100 %**.\n\nUn prêt de 100 M€ pondéré à 35 % compte pour 35 M€ d'actifs pondérés.",
      },
      {
        type: 'number',
        question: "Une banque détient 100 M€ de prêts aux entreprises (100 %), 200 M€ de crédits immobiliers (35 %) et 50 M€ d'obligations d'État (0 %). Quel est le total de ses actifs pondérés, en M€ ?",
        answer: 170,
        tolerance: 0.5,
        unit: 'M€',
        explain: '100 + 0,35 × 200 + 0 × 50 = 100 + 70 = 170 M€.',
      },
      {
        type: 'number',
        question: "Bâle III exige au minimum 4,5 % de fonds propres « durs » (CET1), plus un coussin de conservation de 2,5 %. Combien de CET1 cette banque doit-elle détenir au minimum, en M€ ? (1 décimale)",
        answer: 11.9,
        tolerance: 0.05,
        unit: 'M€',
        explain: '7 % × 170 = 11,9 M€. En pratique, s’ajoutent d’autres coussins et des exigences spécifiques à chaque banque.',
      },
      {
        type: 'read',
        kicker: 'Les filets de sécurité',
        title: 'Levier et liquidité',
        body: "Bâle III ajoute :\n\n- un **ratio de levier** : fonds propres de catégorie 1 / total des expositions **non pondérées** ≥ **3 %** ;\n- deux ratios de **liquidité** : le **LCR** (assez d'actifs liquides pour tenir 30 jours de crise) et le **NSFR** (financer les actifs longs par des ressources stables).",
      },
      {
        type: 'quiz',
        question: 'Pourquoi ajouter un ratio de levier non pondéré, alors qu’il existe déjà un ratio pondéré par les risques ?',
        options: [
          'Pour simplifier la vie des banques',
          "Parce que les pondérations peuvent se tromper : en 2008, des titres notés AAA, faiblement pondérés, se sont révélés toxiques",
          'Parce que les régulateurs aiment les ratios',
          'Pour remplacer le ratio pondéré',
        ],
        answer: 1,
        explain: "Le ratio de levier est un garde-fou grossier mais impossible à contourner avec des modèles optimistes.",
      },
      {
        type: 'number',
        challenge: true,
        question: 'Cette banque a 350 M€ d’expositions totales et 12 M€ de fonds propres de catégorie 1. Quel est son ratio de levier, en % ? (2 décimales) Respecte-t-elle le minimum ?',
        answer: 3.43,
        tolerance: 0.01,
        unit: '%',
        explain: '12 ÷ 350 ≈ 3,43 % : au-dessus des 3 %, mais de peu. Elle ne peut perdre qu’environ 3,4 % de ses actifs avant que ses fonds propres soient effacés.',
      },
    ],
  },

  {
    id: 'droit-3-3',
    screens: [
      {
        type: 'read',
        kicker: "L'argent sale",
        title: 'Les trois étapes du blanchiment',
        body: "Blanchir, c'est donner une apparence légale à de l'argent issu d'activités criminelles. Classiquement, en trois temps :\n\n1. le **placement** : faire entrer l'argent liquide dans le système financier ;\n2. l'**empilement** (*layering*) : multiplier les opérations pour brouiller les pistes ;\n3. l'**intégration** : réinjecter l'argent dans l'économie légale (immobilier, entreprises).",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: 'Des dizaines de virements entre des sociétés écrans dans plusieurs pays, sans logique commerciale. Quelle étape ?',
        options: ['Le placement', "L'empilement", "L'intégration", 'Aucune'],
        answer: 1,
        explain: "Le but est de rendre l'origine des fonds impossible à retracer.",
      },
      {
        type: 'read',
        kicker: 'Les obligations des banques',
        title: 'Connaître son client',
        body: "La lutte contre le blanchiment et le financement du terrorisme (**LCB-FT**) impose aux banques et à beaucoup d'autres professionnels :\n\n- de **connaître le client** (*KYC*) et l'origine de ses fonds ;\n- d'identifier le **bénéficiaire effectif** : la personne physique qui contrôle réellement une société (en France, au-delà de 25 % du capital ou des droits de vote, ou par un autre moyen de contrôle) ;\n- de **déclarer leurs soupçons** à la cellule de renseignement financier (TRACFIN en France).",
      },
      {
        type: 'quiz',
        question: 'Une banquière soupçonne qu’un client blanchit de l’argent. Que doit-elle faire ?',
        options: [
          'Prévenir le client qu’il est surveillé',
          'Faire une déclaration de soupçon à TRACFIN, sans en informer le client',
          'Fermer le compte et ne rien dire à personne',
          'Attendre une preuve certaine',
        ],
        answer: 1,
        explain: "Un simple soupçon suffit pour déclarer, et il est interdit d'en avertir le client : ce serait l'aider à fuir.",
      },
      {
        type: 'read',
        kicker: 'Des plafonds',
        title: "Les espèces sous surveillance",
        body: "En France, un particulier résidant ne peut pas payer un professionnel en espèces au-delà de **1 000 €**. Au-delà, il faut un moyen de paiement traçable.\n\nLes grosses opérations en liquide, les montages complexes et les pays à risque déclenchent des **vigilances renforcées**.",
      },
      {
        type: 'number',
        question: "Mme A détient 60 % d'une holding, qui détient elle-même 50 % de la société B. Quel pourcentage de B Mme A détient-elle indirectement ?",
        answer: 30,
        tolerance: 0.01,
        unit: '%',
        explain: "60 % × 50 % = 30 %, au-dessus du seuil de 25 % : elle est bénéficiaire effective de B, et doit être identifiée.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Un client dépose chaque jour, dans différentes agences, des sommes juste en dessous des seuils qui déclenchent des contrôles. Comment appelle-t-on cette pratique, et que faut-il faire ?",
        options: [
          "C'est de l'épargne régulière ; rien à faire",
          "C'est du fractionnement (*smurfing*) pour éviter les seuils ; c'est en soi un signal de soupçon à déclarer",
          "C'est légal tant que chaque dépôt est sous le seuil",
          "C'est du délit d'initié",
        ],
        answer: 1,
        explain: "Contourner volontairement les seuils est l'un des signaux les plus classiques. Les systèmes de surveillance des banques sont conçus pour repérer ces schémas.",
      },
    ],
  },

  // ───────────── Philosophie · N3 ─────────────
  {
    id: 'philo-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'Londres, 1936',
        title: 'Les esprits animaux',
        body: "Dans la *Théorie générale*, John Maynard Keynes affirme que l'avenir est profondément **incertain** : personne ne peut vraiment calculer le rendement d'une usine sur trente ans.\n\nSi les entrepreneurs investissent quand même, c'est sous l'effet d'**esprits animaux** : un élan spontané à l'action, plutôt que le résultat d'un calcul de probabilités. Et cet élan peut retomber brutalement.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'Une métaphore célèbre',
        title: 'Le concours de beauté',
        body: "Keynes compare la Bourse à un concours de journal : il faut choisir, parmi cent photos, les six visages **que les autres participants choisiront le plus**.\n\nLe bon joueur ne choisit pas les visages qu'il trouve beaux, ni même ceux que l'opinion moyenne trouve beaux, mais ceux dont l'opinion moyenne **pense** que l'opinion moyenne les trouvera beaux. Et ainsi de suite.",
      },
      {
        type: 'quiz',
        question: 'Que suggère le concours de beauté sur les prix de marché ?',
        options: [
          'Qu’ils reflètent la valeur réelle des entreprises',
          'Qu’ils peuvent refléter surtout des anticipations sur les anticipations des autres',
          'Qu’ils sont fixés par le gouvernement',
          'Qu’ils ne bougent jamais',
        ],
        answer: 1,
        explain: "Si chacun cherche à deviner ce que les autres vont faire, le prix peut s'éloigner durablement des fondamentaux. C'est une piste pour comprendre les bulles.",
      },
      {
        type: 'number',
        question: "Jeu inspiré de Keynes : chaque joueur choisit un nombre entre 0 et 100 ; gagne celui qui est le plus proche des 2/3 de la moyenne. Si tu penses que les autres choisissent au hasard (moyenne 50), que réponds-tu ? (2 décimales)",
        answer: 33.33,
        tolerance: 0.5,
        explain: "2/3 × 50 ≈ 33,33. Mais si tous raisonnent comme toi, la moyenne sera 33, et il faudrait viser 22… puis 15… jusqu'à 0. Dans les expériences réelles, le gagnant est souvent autour de 20 à 25 : on raisonne en moyenne un ou deux niveaux, pas à l'infini.",
      },
      {
        type: 'read',
        kicker: 'Un autre paradoxe',
        title: "Le paradoxe de l'épargne",
        body: "Pour un individu, épargner davantage en temps de crise est raisonnable. Mais si **tout le monde** le fait en même temps, la consommation s'effondre, les entreprises vendent moins, licencient, et les revenus baissent. L'épargne totale peut finalement **ne pas augmenter**.\n\nCe qui est rationnel pour chacun peut être désastreux pour tous : c'est l'un des arguments de Keynes pour l'intervention de l'État.",
      },
      {
        type: 'reflect',
        question: 'Selon toi, les marchés financiers sont-ils rationnels ?',
        options: [
          {
            label: 'Oui, globalement',
            response: "C'est la position de l'hypothèse des marchés efficients (Fama) : les prix intègrent rapidement l'information disponible. Les bulles seraient plus rares et moins évidentes qu'on ne le croit après coup.",
          },
          {
            label: 'Non, ils sont guidés par les émotions',
            response: "C'est la lignée de Keynes, puis de la finance comportementale (Shiller, Kahneman) : excès d'optimisme, mimétisme, panique. Objection : s'il est si facile de voir l'irrationalité, pourquoi est-il si difficile de battre le marché ?",
          },
          {
            label: "Rationnels en moyenne, fous par moments",
            response: "Position de beaucoup de praticiens : les prix sont difficiles à battre en temps normal, mais des épisodes de folie collective existent. Le problème, c'est qu'on les reconnaît rarement à temps.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "On attribue souvent à Keynes la phrase : « Les marchés peuvent rester irrationnels plus longtemps que vous ne pouvez rester solvable. » Que veut-elle dire ?",
        options: [
          'Qu’il ne faut jamais investir',
          "Qu'avoir raison trop tôt, surtout avec de la dette, peut ruiner avant que le marché ne vous donne raison",
          'Que les marchés sont toujours rationnels',
          'Que la solvabilité ne compte pas',
        ],
        answer: 1,
        explain: "Parier contre une bulle avec du levier, c'est risquer des appels de marge tant qu'elle gonfle. Beaucoup de vendeurs à découvert ont eu raison… après avoir fait faillite. (L'attribution à Keynes est d'ailleurs incertaine.)",
      },
    ],
  },

  {
    id: 'philo-3-2',
    screens: [
      {
        type: 'read',
        kicker: 'Chicago, 1945',
        title: 'Le savoir est dispersé',
        body: "Dans *L'utilisation de la connaissance dans la société*, Friedrich Hayek part d'une idée simple : l'information utile à l'économie n'est rassemblée nulle part. Elle est **dispersée** entre des millions de personnes : un commerçant sait que son quartier manque de tel produit, un ingénieur connaît une technique, un agriculteur la météo de sa vallée.\n\nAucun planificateur, aussi intelligent soit-il, ne peut tout savoir.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: "L'exemple de l'étain",
        title: 'Le prix comme message',
        body: "Supposons que l'étain devienne plus rare (une mine ferme, un nouvel usage apparaît). Son **prix monte**.\n\nDes milliers d'utilisateurs se mettent à l'économiser ou à le remplacer, **sans savoir pourquoi** il est devenu rare. Ils n'en ont pas besoin : le prix leur a transmis l'essentiel de l'information. Pour Hayek, le système des prix est un formidable **outil de communication**.",
      },
      {
        type: 'quiz',
        question: 'Quel est l’argument central de Hayek contre la planification centrale ?',
        options: [
          'Les planificateurs sont malhonnêtes',
          "Aucun planificateur ne peut rassembler toute l'information dispersée que les prix transmettent",
          'La planification coûte trop cher en salaires',
          'Les ordinateurs n’existaient pas',
        ],
        answer: 1,
        explain: "C'est un argument sur l'**information**, pas sur la morale. Il reste au cœur des débats sur ce que l'État peut ou ne peut pas piloter.",
      },
      {
        type: 'read',
        kicker: 'Le grand débat',
        title: 'Le calcul économique',
        body: "Dès 1920, Ludwig von Mises soutient qu'une économie sans marché ne peut pas **calculer** : sans prix, comment savoir s'il vaut mieux construire un pont en acier ou en béton ?\n\nL'économiste Oskar Lange répond dans les années 1930 qu'un planificateur pourrait **simuler** un marché par essais et erreurs. Le débat a resurgi avec l'informatique et l'intelligence artificielle.",
      },
      {
        type: 'reflect',
        question: "Si les prix transmettent l'information, faut-il en conclure qu'il ne faut jamais intervenir sur les marchés ?",
        options: [
          {
            label: 'Oui, toute intervention brouille le signal',
            response: "C'est une lecture forte de Hayek : un prix plafonné ou subventionné envoie un faux message. Objection : quand le prix ne reflète pas tous les coûts (pollution, vu avec Smith), le signal est déjà faux.",
          },
          {
            label: 'Non, il faut corriger les prix qui mentent',
            response: "C'est l'idée d'une taxe carbone : plutôt que de planifier, on corrige le prix pour qu'il intègre le coût caché, puis on laisse le marché utiliser l'information. Une solution hayékienne à un problème non hayékien.",
          },
          {
            label: 'Ça dépend du marché',
            response: "Les prix fonctionnent bien quand il y a beaucoup d'acheteurs et de vendeurs informés. Ils fonctionnent mal en cas de monopole, de panique ou d'asymétrie d'information forte, comme en finance en 2008.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Si les prix intègrent parfaitement toute l'information disponible, quel paradoxe apparaît, selon Grossman et Stiglitz (1980) ?",
        options: [
          'Les prix deviendraient négatifs',
          "Plus personne n'aurait intérêt à payer pour s'informer, donc les prix ne pourraient plus intégrer l'information",
          'Les marchés fermeraient',
          'Les banques centrales perdraient leur pouvoir',
        ],
        answer: 1,
        explain: "S'informer coûte cher. Si le prix dit déjà tout, ceux qui s'informent ne gagnent rien, et arrêtent. Les marchés ne peuvent donc être que **presque** efficients : juste assez inefficients pour rémunérer ceux qui les rendent efficients.",
      },
    ],
  },

  {
    id: 'philo-3-3',
    screens: [
      {
        type: 'read',
        kicker: 'Chicago, 1921',
        title: 'Risque ou incertitude ?',
        body: "Dans *Risk, Uncertainty and Profit*, l'économiste Frank Knight fait une distinction devenue essentielle :\n\n- le **risque** : on ne sait pas ce qui va arriver, mais on connaît les **probabilités** (un dé, les accidents de la route d'une population) ;\n- l'**incertitude** : on ne connaît même pas les probabilités (le succès d'une invention, l'issue d'une guerre).",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: 'Lequel de ces cas relève de l’incertitude au sens de Knight, plutôt que du risque ?',
        options: [
          "La probabilité qu'un conducteur de 25 ans ait un accident cette année",
          'Le succès commercial d’une technologie qui n’existe pas encore',
          'Le résultat d’un lancer de dé',
          'Le nombre de cambriolages dans une grande ville',
        ],
        answer: 1,
        explain: "Pour les trois autres, on dispose de fréquences observées. Pour une innovation radicale, il n'existe aucune série d'expériences passées pour estimer une probabilité.",
      },
      {
        type: 'read',
        kicker: 'La thèse de Knight',
        title: "D'où vient le profit",
        body: "Le risque s'**assure** : un assureur peut calculer une prime. L'incertitude, non.\n\nPour Knight, le **profit** de l'entrepreneur est justement la rémunération de cette incertitude que personne ne peut assurer à sa place. Dans un monde de pur risque, la concurrence ferait disparaître les profits.",
      },
      {
        type: 'read',
        kicker: 'Une expérience de 1961',
        title: "Le paradoxe d'Ellsberg",
        body: "Deux urnes. L'urne A contient **50 boules rouges et 50 noires**. L'urne B contient **100 boules** rouges et noires, en proportion **inconnue**. Tu gagnes si tu tires une rouge. Quelle urne choisis-tu ?\n\nLa plupart des gens choisissent A. Puis, si on gagne en tirant une noire… ils choisissent encore A. Pourtant, logiquement, ils ne peuvent pas penser que B contient moins de rouges **et** moins de noires.",
      },
      {
        type: 'quiz',
        question: "Qu'est-ce que l'expérience d'Ellsberg révèle ?",
        options: [
          'Que les gens savent mal compter',
          "Une aversion à l'ambiguïté : on préfère un risque connu à un risque dont on ignore les probabilités",
          'Que les urnes sont truquées',
          'Que le hasard n’existe pas',
        ],
        answer: 1,
        explain: "C'est l'incertitude de Knight observée en laboratoire. En finance, elle aide à comprendre pourquoi les investisseurs fuient en masse les situations qu'ils ne savent pas évaluer.",
      },
      {
        type: 'read',
        kicker: 'En finance',
        title: 'Mesurer le risque, oublier l’incertitude',
        body: "La finance moderne est très bonne pour mesurer le **risque** : volatilité, VaR, probabilités de défaut, tout ce que tu as vu en Statistiques et en Finance quantitative.\n\nMais beaucoup de crises viennent de l'**incertitude** : des situations jamais vues, où les probabilités estimées sur le passé ne valent rien. En 2008, les modèles mesuraient le risque des crédits immobiliers à partir d'une histoire sans crise nationale des prix de l'immobilier.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Pourquoi l'incertitude au sens de Knight ne peut-elle pas être assurée ?",
        options: [
          'Parce que les assureurs refusent par principe',
          "Parce que, sans probabilités, il est impossible de calculer une prime juste, ni de mutualiser des cas comparables",
          'Parce que c’est interdit par la loi',
          'Elle peut l’être, sans problème',
        ],
        answer: 1,
        explain: "L'assurance repose sur la loi des grands nombres (le théorème central limite, vu en Statistiques). Sans fréquences, pas de prime, et pas de mutualisation : il ne reste que l'entrepreneur pour porter ce pari.",
      },
    ],
  },
]
