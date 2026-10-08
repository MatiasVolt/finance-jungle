// End of level 2. English version of fr/lot5.js.

export default [
  // ───────────── History · L2 ─────────────
  {
    id: 'histoire-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Amsterdam, 1602',
        title: "A company that doesn't die",
        body: "Before 1602, merchants set up a company **per voyage**: you funded an expedition to Asia, and when it came back you split the loot and wound everything up.\n\nThe **Dutch East India Company** (VOC) changed the rules: its capital was **permanent**, and its shares **freely tradable**. To get your money back, you no longer asked the company: you sold your share to someone else.",
        guide: 'hibou',
      },
      {
        type: 'quiz',
        question: 'Why does permanent capital change everything for a company like the VOC?',
        options: [
          'It lets it pay less tax',
          'It lets it invest for the long term (trading posts, a fleet) without paying the money back after every voyage',
          'It forbids shareholders from selling',
          'It makes voyages faster',
        ],
        answer: 1,
        explain: "Forts, warehouses and ships don't pay for themselves in one voyage. Permanent capital lets you build for the long run, and the exchange still lets shareholders get out.",
      },
      {
        type: 'read',
        kicker: 'A market is born',
        title: 'The Amsterdam exchange',
        body: "VOC shares trade in a building opened in 1611: the first modern **stock exchange**. Sophisticated tools soon appear: **forward** sales, **options**, buying on credit.\n\nIn 1688, Joseph de la Vega published *Confusion of Confusions*, the first book about the stock market. It already describes panic, euphoria and rumours.",
      },
      {
        type: 'read',
        kicker: 'And money?',
        title: 'The Bank of Amsterdam',
        body: "In 1609, the city created the **Wisselbank**. Merchants deposited their coins, of very uneven quality, and received credit in \"bank money\" of fixed value. Payments were made by transfer between accounts.\n\nThe result: a stable unit of account amid the chaos of clipped coins. Amsterdam became Europe's financial centre for over a century.",
      },
      {
        type: 'quiz',
        question: 'What problem did the Wisselbank solve first?',
        options: [
          'A shortage of ships',
          'The uncertain quality of circulating coins, which made every payment complicated',
          'The ban on usury',
          'High taxes',
        ],
        answer: 1,
        explain: "Gresham's law again: good coins disappeared, bad ones circulated. Fixed-value bank money restored trust.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'In 1609, former director Isaac Le Maire sold huge amounts of VOC shares he did not yet own, betting on a fall. How did the authorities respond in 1610?',
        options: [
          'They made him director',
          'They banned this kind of short selling: one of the first stock market regulations',
          'They closed the exchange',
          'They bought back all the shares',
        ],
        answer: 1,
        explain: "History's first big bear raid triggered the first ban on short selling. The debate over such sales comes back in every crisis, to this day.",
      },
    ],
  },

  {
    id: 'histoire-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Dutch Republic, 1634 – 1637',
        title: 'Tulip fever',
        body: "Brought from the Ottoman Empire, tulips became a luxury item in the Netherlands. Some varieties with streaked petals, like the *Semper Augustus*, reached extraordinary prices, comparable to a house.\n\nIn taverns, people traded **contracts** on bulbs still in the ground, deliverable in spring.",
        guide: 'hibou',
      },
      {
        type: 'quiz',
        question: 'Why did people trade forward contracts rather than the bulbs themselves?',
        options: [
          'Because bulbs were banned',
          'Because in winter the bulbs are in the ground: they can only be delivered in spring',
          'To pay less tax',
          'Because tulips were too heavy',
        ],
        answer: 1,
        explain: 'Seasonality creates the need for a forward contract, just like the wheat in the forwards lesson.',
      },
      {
        type: 'read',
        kicker: 'February 1637',
        title: 'The crash',
        body: "In Haarlem, at an auction, buyers fail to show up. Within days, prices collapse, and many buyers refuse to honour their contracts.\n\nBeware the myth: historian Anne Goldgar showed that the economic consequences were **limited**, and that the story of widespread ruin, popularised by Charles Mackay in 1841, is greatly exaggerated.",
      },
      {
        type: 'read',
        kicker: 'The mechanism',
        title: 'What is a bubble?',
        body: "A **bubble** forms when an asset's price drifts away from its **fundamental value** (what its income or use justifies) because buyers expect to **resell it for more**.\n\nAs long as new buyers keep coming, it works. That's the **greater fool theory**: you can overpay as long as you find someone willing to pay even more.",
      },
      {
        type: 'quiz',
        question: 'According to the greater fool theory, who loses in the end?',
        options: ['The first buyer', 'The last buyer, who finds no one to sell to', 'The bulb seller', 'Nobody'],
        answer: 1,
        explain: "In a bubble, everyone bets they won't be the last. When newcomers run out, the price collapses all at once.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Of these signals, which is the most telling sign of a bubble?',
        options: [
          'The price rises along with profits',
          'Buyers justify the price only by future price rises, and many novices borrow to buy',
          'Trading volume is low',
          'Experts disagree',
        ],
        answer: 1,
        explain: 'Price justified by resale, easy credit, a flood of new buyers: these signs show up in 1637, 1720, 1929, the 2000 dot-com bubble and some recent speculative waves.',
      },
    ],
  },

  // ───────────── Financial law · L2 ─────────────
  {
    id: 'droit-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Deceiving the market',
        title: 'Market manipulation',
        body: "The EU's MAR regulation forbids giving **false or misleading signals** about the supply, demand or price of a security. In practice:\n\n- spreading **false information**;\n- placing **misleading orders** you don't intend to execute;\n- setting a price **artificially**.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'A classic',
        title: 'The pump and dump',
        body: "1. Quietly buy a small, illiquid stock.\n2. **Promote** it (forums, social media, fake tips) to attract buyers: the price climbs (*pump*).\n3. **Sell** everything at the top (*dump*).\n\nThe price collapses, and those who bought on the strength of the promotion lose their money.",
      },
      {
        type: 'quiz',
        question: 'An influencer buys a small stock, posts "this is going 10x, get in!", then sells everything the next day. This is…',
        options: ['Legal investment advice', 'A pump-and-dump market manipulation', 'Insider dealing', "Nothing illegal as long as he doesn't lie about his name"],
        answer: 1,
        explain: 'He spreads a misleading message to push the price up and profits from it. The regulator can sanction him, and so can the criminal courts.',
      },
      {
        type: 'read',
        kicker: 'The electronic version',
        title: 'Spoofing',
        body: "**Spoofing** means placing large orders you **don't intend to execute**, to create the illusion of strong demand (or supply), then cancelling them as soon as the price has moved the way you want.\n\nBritish trader Navinder Sarao was prosecuted in the US for this kind of practice, accused of contributing to the \"flash crash\" of 6 May 2010. He pleaded guilty in 2016.",
      },
      {
        type: 'quiz',
        question: 'A trader places a giant buy order just below the market price, sells his own shares while the price rises, then cancels the giant order. This is…',
        options: ['Market making', 'Spoofing', 'Arbitrage', 'A normal limit order'],
        answer: 1,
        explain: 'The giant order was only there to mislead others about real demand. The intention not to execute is at the heart of the offence.',
      },
      {
        type: 'read',
        kicker: 'Where is the line?',
        title: 'The GameStop case',
        body: "In January 2021, thousands of investors coordinating on Reddit bought GameStop stock, which soared. Manipulation?\n\nBuying as a group because you believe in a stock, or to take on short sellers, isn't manipulation in itself. What defines manipulation is **deception**: false information, fake orders, intent to mislead others.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'An analyst publishes a well-argued buy recommendation on a stock she owns, clearly stating that she owns it. Is that manipulation?',
        options: [
          "Yes, you can never recommend a stock you own",
          'No, if the analysis is genuine and the conflict of interest is disclosed',
          'Yes, every recommendation moves the price',
          'Only if the price rises',
        ],
        answer: 1,
        explain: "The law doesn't forbid having an opinion or a position. It demands **transparency** about conflicts of interest and forbids deception. If she secretly sold right after, it would be a different story.",
      },
    ],
  },

  {
    id: 'droit-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Telling what you know',
        title: "Listed companies' disclosure duties",
        body: "A listed company must publish:\n\n- an **annual financial report**, within 4 months of the year end;\n- a **half-year report**, within 3 months of the end of the half;\n- **any inside information**, \"as soon as possible\".\n\nAnd when it offers its securities to the public, it must publish a **prospectus**, approved by the regulator (the AMF in France).",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: 'A listed company learns it is losing its biggest customer. What must it do?',
        options: ['Wait for the next annual report', 'Publish the information as soon as possible', 'Tell only its employees', "Nothing, it's confidential"],
        answer: 1,
        explain: "It's inside information: precise, not public, and it will move the price. Until it's published, every insider who knows it is a risk.",
      },
      {
        type: 'read',
        kicker: 'A controlled exception',
        title: 'Delaying disclosure',
        body: "A company can **delay** publication if three conditions are met: immediate disclosure would harm its legitimate interests (for example, an ongoing negotiation), the delay doesn't mislead the public, and **confidentiality** is ensured.\n\nIf there's a leak, it must publish immediately.",
      },
      {
        type: 'read',
        kicker: 'For individuals',
        title: 'The key information document',
        body: "For many products sold to individuals (funds, structured products, unit-linked life insurance), the seller must provide a **KID** of at most three pages, in a format standardised across Europe.\n\nIt contains a **risk indicator from 1 to 7**, performance **scenarios** and, above all, a breakdown of **costs**. It's the document to read before signing.",
      },
      {
        type: 'quiz',
        question: "You're hesitating between two funds and want to compare their fees and risk level. Where should you look first?",
        options: ["The fund's advertising", "Each fund's key information document", 'Social media reviews', "The bank's annual report"],
        answer: 1,
        explain: 'The KID is standardised: same format, same sections for everyone. It is designed for comparison.',
      },
      {
        type: 'read',
        kicker: 'Who owns what',
        title: 'Shareholding thresholds',
        body: "In France, a shareholder who crosses certain thresholds of capital or voting rights, upwards or downwards, must notify the company and the AMF within 4 trading days: **5%**, 10%, 15%, 20%, 25%, 30%, 33⅓%, 50%, 66⅔%, 90% and 95%. (Most countries have similar rules, starting at 3% in the UK.)\n\nThe goal: let the market know who is building a stake, and prevent creeping, hidden takeovers.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'A fund holds 4.9% of a French listed company and buys another 0.3%. Must it disclose this?',
        options: ['No, it only bought 0.3%', 'Yes, it has just crossed the 5% threshold', 'Only if it goes above 10%', 'Only if the company asks'],
        answer: 1,
        explain: "It's not the size of the purchase that matters but the threshold crossed: 4.9% → 5.2% crosses the 5% line.",
      },
    ],
  },

  // ───────────── Philosophy · L2 ─────────────
  {
    id: 'philo-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'London, 1867',
        title: 'Two circuits',
        body: "In *Capital*, Karl Marx distinguishes two ways of using money:\n\n- **C – M – C**: I sell a commodity to buy another. Money is just a go-between; the goal is use.\n- **M – C – M′**: I advance money to buy commodities (including labour), in order to get **more** money back (M′ > M). That is **capital**.",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: 'In the M – C – M′ circuit, what is the goal?',
        options: ['Consuming a useful commodity', 'Getting back more money than you advanced', 'Exchanging without money', 'Paying taxes'],
        answer: 1,
        explain: 'The start and end points are money: only the difference counts. Aristotle would have recognised his chrematistics.',
      },
      {
        type: 'read',
        kicker: "Marx's question",
        title: 'Where does the "more" come from?',
        body: "If everything trades at its fair value, where does the **surplus value** M′ − M come from?\n\nMarx's answer: from a special commodity, **labour power**. The capitalist buys it at its value (the wage, enough to live on). But in a day, a worker produces **more value** than they cost. The difference, **surplus labour**, goes to the capitalist.",
      },
      {
        type: 'number',
        question: 'In Marx\'s framework: a worker produces €200 of value a day and is paid €120. What is the "rate of surplus value" (surplus value ÷ wage), in %? (2 decimals)',
        answer: 66.67,
        tolerance: 0.05,
        unit: '%',
        explain: 'Surplus value: €80. Rate: 80 ÷ 120 ≈ 66.67%. Marx also calls this ratio the "rate of exploitation".',
      },
      {
        type: 'read',
        kicker: 'The debate',
        title: "What's been challenged, what remains",
        body: "**Challenged**: the labour theory of value (the marginalists replaced it), the neglected role of the entrepreneur, risk and innovation, and predictions such as the ever-growing impoverishment of workers, disproved in rich countries.\n\n**Still debated**: the concentration of capital, the instability of cycles, the balance of power between wages and profits. Writers like Thomas Piketty take up these questions with other tools.",
      },
      {
        type: 'reflect',
        question: 'Is profit a form of exploitation?',
        options: [
          {
            label: 'Yes, it comes from unpaid labour',
            response: "That's Marx's thesis. It assumes only labour creates value. The objection: without capital (machines) or risk-taking, the same labour would produce far less.",
          },
          {
            label: 'No, it rewards capital, risk and organisation',
            response: "That's mainstream economics' answer: profit pays for time (money tied up), the risk of loss and coordination. The Marxist objection: it's the balance of power that sets the split, not a \"fair\" reward.",
          },
          {
            label: 'It depends on the split and the context',
            response: "A nuanced position: profit isn't illegitimate by nature, but the split between wages and profits depends on bargaining power, competition and rules. That's where today's debates on inequality take place.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Which of Aristotle's concepts matches Marx's M – C – M′ circuit?",
        options: ['Oikonomia', 'Chrematistics', 'Marginal utility', 'Use value'],
        answer: 1,
        explain: 'Money seeking to become more money, with no natural limit: Marx actually quotes Aristotle on this point. Two thousand years separate the two texts.',
      },
    ],
  },

  {
    id: 'philo-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'The Middle Ages',
        title: 'The Church against usury',
        body: "For centuries, the Church forbade lending at interest between Christians. For Thomas Aquinas, money is only consumed by being spent: charging for its use **on top of** returning it means charging twice.\n\nIt was also said that the usurer sells **time**, which belongs to God alone.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'The genius of workarounds',
        title: 'From usury to interest',
        body: "Merchants worked around the ban (the bill of exchange, seen in History), and theologians eventually accepted **compensation**: a lender could be indemnified for a loss suffered (*damnum emergens*) or a gain forgone (*lucrum cessans*).\n\nIn the 16th century, John Calvin accepted **moderate** interest. Little by little, \"usury\" came to mean only **excessive** interest.",
      },
      {
        type: 'quiz',
        question: 'Today, in French law, what does the "usury rate" refer to?',
        options: ['A ban on all interest', 'The legal maximum rate above which a loan is forbidden', "The ECB's rate", "The Livret A's rate"],
        answer: 1,
        explain: 'Interest is allowed, excess is forbidden: the direct legacy of that shift in meaning. (Many US states have similar usury caps.)',
      },
      {
        type: 'read',
        kicker: 'Another tradition',
        title: 'Islamic finance',
        body: "Islamic law forbids **riba** (interest), **gharar** (excessive uncertainty in a contract) and **maysir** (gambling). It has developed its own instruments:\n\n- **murabaha**: the bank buys an asset and resells it to the client at a margin agreed in advance, payable over time;\n- **ijara**: a lease;\n- **mudaraba** and **musharaka**: partnerships that share profits **and** losses;\n- **sukuk**: securities backed by real assets.",
      },
      {
        type: 'number',
        question: 'In a murabaha, the bank buys a car for €20,000 and resells it to the client for €22,000, payable over 4 years. What is the total margin, as a % of the purchase price?',
        answer: 10,
        tolerance: 0.01,
        unit: '%',
        explain: "2,000 ÷ 20,000 = 10% over 4 years. Critics note that economically this looks a lot like a fixed-rate loan. Defenders reply that the bank really owned the asset and bore its risk.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'What really sets a musharaka apart from a conventional loan?',
        options: [
          'The rate is lower',
          'The bank shares the losses if the project fails, instead of demanding a fixed repayment',
          "There's no contract",
          "Nothing, it's a different name for the same thing",
        ],
        answer: 1,
        explain: 'With a loan, the borrower must repay whatever happens. In a musharaka, the bank is a partner: if the project loses, so does the bank. It is risk sharing, not a price for time.',
      },
    ],
  },

  // ───────────── Quantitative finance · L2 ─────────────
  {
    id: 'quant-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'Paris, 1900',
        title: 'The random walk',
        body: "In his thesis *The Theory of Speculation*, mathematician Louis Bachelier proposed a surprising model: tomorrow's price = today's price + an unpredictable **random shock**.\n\nThat's the **random walk**. Popularised by Burton Malkiel's book (1973), it remains the starting point for modelling prices.",
        guide: 'jaguar',
      },
      {
        type: 'quiz',
        question: 'If prices follow a random walk, what can their past moves tell you about the next one?',
        options: ['That the trend will continue', 'That the trend will reverse', 'Nothing: each shock is unpredictable', "Tomorrow's exact price"],
        answer: 2,
        explain: "That's the point of the model: the past contains no exploitable information about the direction of the next move.",
      },
      {
        type: 'read',
        kicker: 'But the spread grows',
        title: 'The square root of time, again',
        body: "Picture a price that goes up or down **€1** every day, on a coin toss. On average, it doesn't move. But it **drifts away** from where it started.\n\nSince the shocks are independent, variances add up: after `n` days, the standard deviation of the position is `√n`. The same square root as for annualising volatility.",
      },
      {
        type: 'number',
        question: 'After 100 days of this walk (±€1 a day), what is the standard deviation of the distance from the starting point?',
        answer: 10,
        tolerance: 0.01,
        unit: '€',
        explain: "√100 = €10. After 100 steps of €1, you're typically about ten euros from the start, one way or the other.",
      },
      {
        type: 'number',
        question: 'And after 400 days?',
        answer: 20,
        tolerance: 0.01,
        unit: '€',
        explain: '√400 = €20. Four times as much time, only twice the spread.',
      },
      {
        type: 'read',
        kicker: 'A more realistic version',
        title: 'Walking in percentages',
        body: "A real price can't go negative, and a €1,000 stock moves more in euros than a €10 one. So we model a random walk on the **logarithm** of the price instead: each day, the price is **multiplied** by a random factor.\n\nIn continuous time, this gives **geometric Brownian motion**, at the heart of Black-Scholes (level 4).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "An index's daily returns are almost uncorrelated from one day to the next. But their absolute values (the size of the moves) are clearly correlated. What does that mean?",
        options: [
          'That prices are perfectly predictable',
          'That direction is unpredictable, but turbulence clusters: a choppy day often heralds more choppy days',
          'That the random walk is exactly right',
          "That crashes don't exist",
        ],
        answer: 1,
        explain: 'This is **volatility clustering**. The direction of the next move stays unpredictable, but its likely size does not. GARCH models (Statistics, level 5) exploit exactly this.',
      },
    ],
  },

  {
    id: 'quant-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'Testing on the past',
        title: 'What is a backtest?',
        body: "A **backtest** applies an investment rule to historical data to see what it would have earned. For example: \"buy the index when its price crosses above its 200-day average, sell when it crosses below\".\n\nIt's essential… and it's the best way to fool yourself.",
        guide: 'jaguar',
        note: 'A perfect backtest on the past is often prey that has already been eaten.',
      },
      {
        type: 'read',
        kicker: 'The classic traps',
        title: 'Four ways to get it wrong',
        body: "- **Survivorship bias**: testing only on companies that still exist today, forgetting those that went bust.\n- **Look-ahead bias**: using information you wouldn't have had at the time of the decision.\n- **Forgotten costs**: fees, spread, taxes.\n- **Overfitting**: tweaking the rule until it fits the past perfectly.",
      },
      {
        type: 'quiz',
        question: "You test a strategy over 20 years using the 40 companies in today's CAC 40. Which bias?",
        options: ['Look-ahead bias', 'Survivorship bias', 'None', 'Cost bias'],
        answer: 1,
        explain: "Those 40 companies are the winners. The ones that left the index or disappeared aren't in your test: your results look too good.",
      },
      {
        type: 'quiz',
        question: 'Your rule: "buy at the open if the day\'s session closes higher". What\'s the problem?',
        options: ['None', "Look-ahead bias: at the open, you don't yet know the close", 'Survivorship bias', "It's too expensive"],
        answer: 1,
        explain: 'The backtest uses information from the future. In real life, this rule is impossible to apply, and its historical result means nothing.',
      },
      {
        type: 'number',
        question: 'Your strategy makes 300 round trips a year. Each buy and each sell costs 0.1%. What is the total annual cost, in %?',
        answer: 60,
        tolerance: 0.01,
        unit: '%',
        hint: 'One round trip = one buy + one sell.',
        explain: '300 × 2 × 0.1% = 60% a year. A strategy that "earns 40%" before costs becomes a disaster after them.',
      },
      {
        type: 'read',
        kicker: 'The subtlest trap',
        title: 'Data snooping',
        body: "If you test 1,000 random strategies, some will show great results **by pure chance**. Picking the best one and presenting it as a discovery is **data snooping**.\n\nThe remedy: set part of the data aside and test the chosen strategy on it (**out of sample**), and be wary of results that look too good.",
      },
      {
        type: 'number',
        challenge: true,
        question: "You test 100 strategies that actually have no value. Each has a 5% chance of looking \"significant\" by chance. On average, how many will seem to work?",
        answer: 5,
        tolerance: 0.01,
        explain: '100 × 5% = 5 false discoveries on average. Expected value (Statistics, level 2) applied to research: the more you test, the more you "find".',
      },
    ],
  },

  // ───────────── Personal finance · L2 ─────────────
  {
    id: 'perso-2-2',
    screens: [
      {
        type: 'read',
        kicker: 'The rules in France',
        title: 'How much can you borrow?',
        body: "Since 2022, French banks must follow the High Council for Financial Stability's rules:\n\n- a maximum **debt-to-income ratio** of **35%**: monthly payments (insurance included) must not exceed 35% of net income;\n- a maximum **term** of **25 years** (27 in some cases with a deferral).\n\nBanks can make exceptions for a small share of their files. Other countries have comparable rules (in the UK, a cap on loan-to-income multiples).",
        guide: 'fourmi',
      },
      {
        type: 'number',
        question: 'A couple takes home €3,500 a month. What maximum monthly payment can they take on under the 35% rule?',
        answer: 1225,
        tolerance: 0.5,
        unit: '€',
        explain: '35% × 3,500 = €1,225 a month, insurance included.',
      },
      {
        type: 'read',
        kicker: 'Buying costs',
        title: '"Notary fees"',
        body: "When buying in France, you mainly pay **transfer taxes** to the state and local authorities (the notary keeps only a small part). They come to about **7 to 8%** of the price for an existing property, and **2 to 3%** for a new build. (In the UK, the equivalent is stamp duty.)\n\nBanks often require a personal **deposit** covering at least these costs.",
      },
      {
        type: 'number',
        question: 'An existing flat costs €250,000. With costs of about 7.5%, how much should you budget on top of the price?',
        answer: 18750,
        tolerance: 0.5,
        unit: '€',
        explain: '7.5% × 250,000 = €18,750. Often the minimum deposit required.',
      },
      {
        type: 'read',
        kicker: 'Borrowing capacity',
        title: 'The rate changes everything',
        body: "For a given monthly payment, how much you can borrow depends heavily on the **rate**. You invert the payment formula:\n\n`principal = M × (1 − (1 + i)^−n) ÷ i`\n\nwith `i` the monthly rate and `n` the number of months.",
      },
      {
        type: 'number',
        question: 'With €1,225 a month over 25 years at 3.6% a year (0.3% a month), how much can this couple borrow? (to the nearest hundred euros)',
        answer: 242094,
        tolerance: 100,
        unit: '€',
        hint: 'n = 300 months. Work out 1.003^−300 first.',
        explain: '1.003^−300 ≈ 0.407. Principal ≈ 1,225 × 0.593 ÷ 0.003 ≈ €242,100. (This ignores insurance.)',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Between 2021 and 2023, mortgage rates went from about 1% to about 4%. For the same monthly payment over 25 years, how did the amount you could borrow change?',
        options: ['About −5%', 'About −30%', 'About −75%', 'It did not change'],
        answer: 1,
        explain: 'At 1%, €1,000 a month lets you borrow about €265,000; at 4%, about €189,000. Almost 30% less: that is why rate rises froze the housing market so quickly.',
      },
    ],
  },

  {
    id: 'perso-2-3',
    screens: [
      {
        type: 'read',
        kicker: 'The principle',
        title: 'Pooling risk',
        body: "Insuring yourself means paying a **small, certain amount** (the premium) to avoid a **large, uncertain loss**. The insurer gathers many policyholders: everyone's premiums pay for the claims of a few.\n\nSince the insurer has to cover its costs and make a profit, the policyholder's expected gain is **negative**. Insurance isn't an investment: it's protection.",
        guide: 'fourmi',
      },
      {
        type: 'quiz',
        question: 'Which risks should you insure first?',
        options: [
          'Small, frequent losses, like a cracked phone screen',
          'Rare but ruinous losses, like a fire or damage you cause to someone',
          'Everything, without exception',
          "Nothing, it's better to save",
        ],
        answer: 1,
        explain: "Your emergency fund can absorb a small loss. A €200,000 loss, it can't. That's where insurance is essential.",
      },
      {
        type: 'number',
        question: "You're offered an extended warranty for €79 on a €600 phone. The probability of a covered breakdown is 8%, with an average repair cost of €250. What is the expected amount the insurance would pay you?",
        answer: 20,
        tolerance: 0.01,
        unit: '€',
        explain: "8% × 250 = €20, for a €79 premium. You pay almost 4 times what you get back on average. Unless a breakdown would really put you in trouble, it's a bad deal.",
      },
      {
        type: 'read',
        kicker: 'The lever to know',
        title: 'The deductible',
        body: "The **deductible** (or excess) is the part of a claim you pay yourself. The higher it is, the lower the premium.\n\nWith a solid emergency fund, choosing a higher deductible often pays off: you self-insure the small amounts, and the insurance only kicks in for big ones.",
      },
      {
        type: 'read',
        kicker: 'In France',
        title: 'Compulsory… or nearly',
        body: "- Third-party **liability** car insurance is compulsory.\n- A **tenant** must insure their home against rental risks.\n- **Borrower insurance** isn't required by law, but banks almost always demand it. Since the Lemoine law (2022), you can **switch at any time**, which often saves a lot.",
      },
      {
        type: 'quiz',
        question: "You've had a mortgage for 3 years and find much cheaper borrower insurance. What does France's Lemoine law allow?",
        options: ['Nothing, you have to wait until the loan ends', 'Switching insurer at any time, with equivalent cover', 'Switching only on the anniversary date', 'No longer being insured at all'],
        answer: 1,
        explain: 'You can switch at any time, provided the cover is equivalent to what the bank requires.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Once well insured, some policyholders become less careful. What is this phenomenon called, and how do insurers respond?',
        options: [
          'Adverse selection; they refuse everyone',
          'Moral hazard; they leave part of the risk with the policyholder, for example through a deductible',
          'Leverage; they raise rates',
          'Pooling; they do nothing',
        ],
        answer: 1,
        explain: "**Moral hazard**: being protected reduces the incentive to be careful. The deductible keeps the policyholder \"invested\" in the risk. (Adverse selection is a different problem: the riskiest people are the keenest to get insured.)",
      },
    ],
  },
]
