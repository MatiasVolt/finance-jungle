// End of level 3: history, law, philosophy. English version of fr/lot9.js.

export default [
  // ───────────── History · L3 ─────────────
  {
    id: 'histoire-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'Paris, 1716',
        title: 'The Scot who wanted to reinvent money',
        body: "France emerges ruined from the reign of Louis XIV. A Scottish financier, **John Law**, convinces the Regent of a new idea: replace scarce coins with **paper money** issued by a bank, to get credit flowing and revive the economy.\n\nIn 1716, he founds the Banque Générale. In 1717, he takes control of the **Company of the West**, which holds the monopoly on trade with Louisiana: the \"Mississippi\".",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'The System',
        title: 'Debt, shares and banknotes',
        body: "Law designs a bold mechanism: holders of government debt can swap their bonds for **shares** in his company. Shares can be bought with **notes** from his bank, now the Royal Bank. And the bank is happy to lend… to buy shares.\n\nOn rue Quincampoix in Paris, crowds jostle. It's at this time that the word \"millionaire\" appears.",
      },
      {
        type: 'number',
        question: "The Company's share goes from about 500 livres to nearly 10,000 livres between 1719 and early 1720. What rise is that, in %?",
        answer: 1900,
        tolerance: 0.5,
        unit: '%',
        explain: '(10,000 − 500) ÷ 500 = 19, i.e. +1,900%. The price was multiplied by 20 in a few months.',
      },
      {
        type: 'read',
        kicker: '1720',
        title: 'The collapse',
        body: "Louisiana's profits fall far short of the promises. Some investors start converting their gains into gold, confidence cracks, the share collapses and the notes lose their value. Law flees France at the end of 1720.\n\nThe trauma lasts: France would distrust paper money, and even the word \"bank\", for decades. The Banque de France was only born in 1800.",
      },
      {
        type: 'quiz',
        question: 'In the same year, 1720, another bubble bursts in London. Which one?',
        options: ['Tulip mania', 'The South Sea Bubble', 'The 1929 crash', 'The dot-com bubble'],
        answer: 1,
        explain: 'The South Sea Company followed a similar pattern: government debt swapped for shares. Isaac Newton is said to have lost a fortune and remarked that he could calculate the motions of the heavenly bodies, but not the madness of people.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "What mechanism made Law's System so explosive, on the way up and the way down?",
        options: [
          'Fixed exchange rates',
          'A loop: the bank created notes to buy shares, and rising shares seemed to justify ever more notes',
          'The gold standard',
          'A tax on shares',
        ],
        answer: 1,
        explain: 'Credit feeds the price, the price justifies the credit. This feedback loop shows up in almost every great bubble, right up to US housing in 2006.',
      },
    ],
  },

  {
    id: 'histoire-3-2',
    screens: [
      {
        type: 'read',
        kicker: '19th century',
        title: 'The gold standard',
        body: "Under the **gold standard**, each currency is defined as a **fixed weight of gold**, and the central bank commits to exchanging its notes for gold at that price.\n\nThe United Kingdom officially adopted it in 1821; most major economies joined in the 1870s. The immediate consequence: exchange rates between these currencies became **fixed**.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: 'Before 1914, a pound sterling contains about 7.3224 g of fine gold, and a dollar 1.5046 g. How many dollars is a pound worth? (2 decimals)',
        answer: 4.87,
        tolerance: 0.01,
        unit: '$',
        explain: '7.3224 ÷ 1.5046 ≈ $4.87. This rate stayed almost unchanged for decades.',
      },
      {
        type: 'read',
        kicker: 'The mechanism',
        title: "Hume's automatic adjustment",
        body: "As early as 1752, philosopher David Hume described the mechanism: a country that imports too much pays in gold, gold **flows out**, the money supply **shrinks**, prices **fall**, its goods become competitive again, and the balance is restored.\n\nElegant… but the adjustment works through **falling prices and wages**, which is often painful.",
      },
      {
        type: 'quiz',
        question: 'What is the main drawback of the gold standard for a central bank?',
        options: [
          'It makes inflation impossible to measure',
          'It cannot run its own monetary policy: the money supply depends on gold, not on the needs of the economy',
          'It bans private banks',
          'It imposes negative interest rates',
        ],
        answer: 1,
        explain: 'A mining discovery (California, 1848) inflates the money supply; a gold shortage causes deflation. Monetary policy is run by geology.',
      },
      {
        type: 'read',
        kicker: 'The end',
        title: 'From the Great War to the 1930s',
        body: "In 1914, the war suspended convertibility. In the 1920s, several countries returned to gold, sometimes at parities that were too high: in 1925, the UK restored the pound to its pre-war level, which hurt its exports.\n\nDuring the Great Depression, countries abandoned gold one after another. Historians such as Barry Eichengreen showed that **those that left earliest recovered fastest**.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Why did leaving the gold standard early help countries out of the Depression?',
        options: [
          'Because gold had become useless',
          'Because it restored the freedom to create money and cut rates to stop deflation',
          'Because it boosted gold exports',
          "It didn't",
        ],
        answer: 1,
        explain: 'Tied to gold, a country in deflation had to let its prices and output collapse. Freed, it could stimulate. One of the great lessons central banks have drawn on ever since.',
      },
    ],
  },

  {
    id: 'histoire-3-3',
    screens: [
      {
        type: 'read',
        kicker: 'The Roaring Twenties',
        title: 'Buying on credit',
        body: "In the 1920s, the US economy is booming: cars, electricity, radio. The stock market soars: the Dow Jones roughly sextuples between 1921 and 1929.\n\nMany people buy shares **on margin**: they put up only a small part of the price (sometimes 10%) and borrow the rest from their broker.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: 'You buy $1,000 of shares, putting up $100 and borrowing $900. The shares fall 10%. What share of your stake have you lost, in %?',
        answer: 100,
        tolerance: 0.01,
        unit: '%',
        explain: 'The shares are worth $900, exactly your debt: your $100 stake is wiped out. Leverage of 10: −10% on the price, −100% for you.',
      },
      {
        type: 'read',
        kicker: 'October 1929',
        title: 'The spiral',
        body: "On Thursday 24 October (\"Black Thursday\"), then on the 28th and 29th, prices plunge. Brokers issue **margin calls**: those who can't pay see their shares **sold off by force**, pushing prices down further, triggering new margin calls.\n\nThe crash is only the start: the decline continues for almost three years.",
      },
      {
        type: 'number',
        question: 'The Dow Jones peaks at 381 in September 1929 and bottoms at 41 in July 1932. What is the total fall, in %? (1 decimal)',
        answer: 89.2,
        tolerance: 0.1,
        unit: '%',
        explain: '(381 − 41) ÷ 381 ≈ 89.2%. It took until 1954 to regain the 1929 peak.',
      },
      {
        type: 'read',
        kicker: 'From market crash to Depression',
        title: 'The banks fall',
        body: "Between 1930 and 1933, around **9,000** US banks failed. Panicked depositors withdrew their money, the money supply collapsed by about a third, and prices and output followed.\n\nMilton Friedman and Anna Schwartz (1963) blamed the Federal Reserve for failing to act as **lender of last resort**: it let the banking system collapse.",
      },
      {
        type: 'read',
        kicker: 'What remained',
        title: 'The rules born of 1929',
        body: "- **1933**: the *Glass-Steagall Act* separates commercial banking from investment banking, and creates the **FDIC**, which insures deposits.\n- **1934**: birth of the **SEC**, the US market watchdog, and disclosure duties for listed companies.\n\nMany of the rules you saw in Financial law are scars from 1929.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Ben Bernanke, an expert on the Great Depression, chaired the Fed in 2008. Which lesson of 1929 did he apply?',
        options: [
          'Let banks fail to clean up the system',
          'Supply banks with liquidity on a massive scale and avoid a collapse of the money supply at all costs',
          'Return to the gold standard',
          'Close the stock exchange',
        ],
        answer: 1,
        explain: 'In 2002 he had told Milton Friedman, about the Depression: "You\'re right, we did it. We\'re very sorry. But thanks to you, we won\'t do it again." In 2008, the Fed acted as lender of last resort, massively.',
      },
    ],
  },

  // ───────────── Financial law · L3 ─────────────
  {
    id: 'droit-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'The European rule',
        title: 'MiFID II',
        body: "The EU's Markets in Financial Instruments Directive (**MiFID**, 2007), revised as **MiFID II** (applied since January 2018), governs everyone who sells or advises on investments.\n\nTwo goals: **protect investors** and make markets more **transparent**.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Who is the client?',
        title: 'Three categories, three levels of protection',
        body: "- **Retail client** (you, usually): maximum protection.\n- **Professional client** (banks, large companies, experienced investors): lighter protection.\n- **Eligible counterparty** (financial institutions dealing with each other): minimal protection.\n\nAn individual can, under conditions, ask to be treated as a professional.",
      },
      {
        type: 'read',
        kicker: 'Before selling',
        title: 'Suitability and appropriateness',
        body: "- When **advising**, the firm must check **suitability**: does the product match your objectives, financial situation, tolerance for losses and knowledge?\n- Without advice, for a complex product, it must at least check **appropriateness**: do you have the knowledge and experience to understand what you're buying?",
      },
      {
        type: 'quiz',
        question: 'Your bank adviser recommends a complex structured product without ever asking about your situation or knowledge. Is that compliant?',
        options: ["Yes, they're free to recommend", 'No: advice requires first assessing whether the product suits your profile', "Yes, if the product is profitable", 'Only if you sign'],
        answer: 1,
        explain: 'Without a questionnaire on your profile, no advice is valid under MiFID II.',
      },
      {
        type: 'read',
        kicker: 'Transparency',
        title: 'Costs, in euros',
        body: "MiFID II requires clients to be told about **all costs**, before (ex ante) and after (ex post, at least once a year), as a **percentage and in euros**.\n\nIt also restricts **inducements** (retrocessions): they must improve the service to the client, be disclosed, and are banned for independent advice.",
      },
      {
        type: 'number',
        question: 'Your annual statement shows 1.2% total costs on a €25,000 portfolio. How much did you pay, in euros?',
        answer: 300,
        tolerance: 0.5,
        unit: '€',
        explain: '1.2% × 25,000 = €300. Seeing the amount in euros often gets more of a reaction than a percentage, and that is deliberate.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'To access restricted products, you ask to be classified as a "professional client". What does that imply?',
        options: [
          "Nothing, it's just a label",
          'You give up some of the protections (information, checks) intended for retail clients',
          'You pay less tax',
          'You become a bank employee',
        ],
        answer: 1,
        explain: 'Professional status assumes you can protect yourself. The bank must warn you about the protections you lose.',
      },
    ],
  },

  {
    id: 'droit-3-2',
    screens: [
      {
        type: 'read',
        kicker: "Banks' rules",
        title: 'Basel and capital',
        body: "The **Basel Committee**, hosted by the Bank for International Settlements, sets global standards for bank solvency. The **Basel III** accords were adopted after the 2008 crisis.\n\nTheir core: a bank must hold enough **capital** relative to its **risk-weighted assets** (RWA). The riskier an asset, the more it \"weighs\".",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'The weightings',
        title: 'Not all loans are equal',
        body: "In the standardised approach, some simplified risk weights:\n\n- a bond from a highly rated government: **0%**;\n- a well-secured residential mortgage: about **35%**;\n- a loan to an unrated company: **100%**.\n\nA €100m loan weighted at 35% counts for €35m of risk-weighted assets.",
      },
      {
        type: 'number',
        question: 'A bank holds €100m of corporate loans (100%), €200m of mortgages (35%) and €50m of government bonds (0%). What are its total risk-weighted assets, in €m?',
        answer: 170,
        tolerance: 0.5,
        unit: '€m',
        explain: '100 + 0.35 × 200 + 0 × 50 = 100 + 70 = €170m.',
      },
      {
        type: 'number',
        question: 'Basel III requires at least 4.5% of core capital (CET1), plus a 2.5% conservation buffer. How much CET1 must this bank hold at minimum, in €m? (1 decimal)',
        answer: 11.9,
        tolerance: 0.05,
        unit: '€m',
        explain: '7% × 170 = €11.9m. In practice, other buffers and bank-specific requirements come on top.',
      },
      {
        type: 'read',
        kicker: 'The safety nets',
        title: 'Leverage and liquidity',
        body: "Basel III adds:\n\n- a **leverage ratio**: Tier 1 capital / total **unweighted** exposures ≥ **3%**;\n- two **liquidity** ratios: the **LCR** (enough liquid assets to survive 30 days of stress) and the **NSFR** (fund long-term assets with stable resources).",
      },
      {
        type: 'quiz',
        question: 'Why add an unweighted leverage ratio when a risk-weighted ratio already exists?',
        options: [
          "To make banks' lives easier",
          'Because risk weights can be wrong: in 2008, AAA-rated securities with low weights turned out to be toxic',
          'Because regulators like ratios',
          'To replace the risk-weighted ratio',
        ],
        answer: 1,
        explain: 'The leverage ratio is a crude safeguard, but one that optimistic models cannot get around.',
      },
      {
        type: 'number',
        challenge: true,
        question: 'This bank has €350m of total exposures and €12m of Tier 1 capital. What is its leverage ratio, in %? (2 decimals) Does it meet the minimum?',
        answer: 3.43,
        tolerance: 0.01,
        unit: '%',
        explain: '12 ÷ 350 ≈ 3.43%: above 3%, but only just. It can lose only about 3.4% of its assets before its capital is wiped out.',
      },
    ],
  },

  {
    id: 'droit-3-3',
    screens: [
      {
        type: 'read',
        kicker: 'Dirty money',
        title: 'The three stages of money laundering',
        body: "Laundering means making money from criminal activity look legal. Classically, in three stages:\n\n1. **placement**: getting the cash into the financial system;\n2. **layering**: piling up transactions to blur the trail;\n3. **integration**: putting the money back into the legal economy (property, businesses).",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: 'Dozens of transfers between shell companies in several countries, with no commercial logic. Which stage?',
        options: ['Placement', 'Layering', 'Integration', 'None'],
        answer: 1,
        explain: 'The aim is to make the origin of the funds impossible to trace.',
      },
      {
        type: 'read',
        kicker: "Banks' obligations",
        title: 'Know your customer',
        body: "Anti-money laundering and counter-terrorist financing rules (**AML/CFT**) require banks and many other professionals to:\n\n- **know the customer** (*KYC*) and the source of their funds;\n- identify the **beneficial owner**: the natural person who really controls a company (in France and the EU, above 25% of capital or voting rights, or through other control);\n- **report suspicions** to the financial intelligence unit (TRACFIN in France).",
      },
      {
        type: 'quiz',
        question: 'A banker suspects a client of laundering money. What must she do?',
        options: [
          'Warn the client that they are being watched',
          'File a suspicious activity report with the financial intelligence unit, without telling the client',
          'Close the account and tell no one',
          'Wait for certain proof',
        ],
        answer: 1,
        explain: 'A mere suspicion is enough to report, and tipping off the client is forbidden: it would help them escape.',
      },
      {
        type: 'read',
        kicker: 'Limits',
        title: 'Cash under scrutiny',
        body: "In France, a resident individual can't pay a business in cash above **€1,000**. Above that, a traceable means of payment is required.\n\nLarge cash transactions, complex structures and high-risk countries trigger **enhanced due diligence**.",
      },
      {
        type: 'number',
        question: 'Ms A owns 60% of a holding company, which itself owns 50% of company B. What percentage of B does Ms A own indirectly?',
        answer: 30,
        tolerance: 0.01,
        unit: '%',
        explain: '60% × 50% = 30%, above the 25% threshold: she is a beneficial owner of B and must be identified.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'A client deposits, every day and at different branches, amounts just below the thresholds that trigger checks. What is this practice called, and what should be done?',
        options: [
          "It's regular saving; nothing to do",
          "It's structuring (smurfing) to avoid thresholds; that in itself is a red flag to report",
          "It's legal as long as each deposit is below the threshold",
          "It's insider dealing",
        ],
        answer: 1,
        explain: "Deliberately dodging thresholds is one of the most classic warning signs. Banks' monitoring systems are designed to spot exactly these patterns.",
      },
    ],
  },

  // ───────────── Philosophy · L3 ─────────────
  {
    id: 'philo-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'London, 1936',
        title: 'Animal spirits',
        body: "In *The General Theory*, John Maynard Keynes argues that the future is deeply **uncertain**: nobody can really calculate a factory's return over thirty years.\n\nIf entrepreneurs invest anyway, it's driven by **animal spirits**: a spontaneous urge to action, rather than the result of a probability calculation. And that urge can collapse suddenly.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'A famous metaphor',
        title: 'The beauty contest',
        body: "Keynes compares the stock market to a newspaper contest: you must pick, from a hundred photos, the six faces **that the other entrants will pick most**.\n\nThe smart player doesn't pick the faces they find prettiest, nor even those average opinion finds prettiest, but those average opinion **expects** average opinion to find prettiest. And so on.",
      },
      {
        type: 'quiz',
        question: 'What does the beauty contest suggest about market prices?',
        options: [
          "That they reflect companies' real value",
          "That they may mostly reflect expectations about other people's expectations",
          'That the government sets them',
          'That they never move',
        ],
        answer: 1,
        explain: 'If everyone tries to guess what others will do, the price can drift away from fundamentals for a long time. A clue to understanding bubbles.',
      },
      {
        type: 'number',
        question: 'A game inspired by Keynes: each player picks a number from 0 to 100; whoever is closest to 2/3 of the average wins. If you think the others pick at random (average 50), what do you answer? (2 decimals)',
        answer: 33.33,
        tolerance: 0.5,
        explain: "2/3 × 50 ≈ 33.33. But if everyone reasons like you, the average will be 33, and you'd need to aim for 22… then 15… down to 0. In real experiments, the winner is often around 20 to 25: people reason one or two levels deep on average, not infinitely.",
      },
      {
        type: 'read',
        kicker: 'Another paradox',
        title: 'The paradox of thrift',
        body: "For an individual, saving more in a crisis is sensible. But if **everyone** does it at once, spending collapses, firms sell less, lay people off, and incomes fall. Total saving may end up **not rising** at all.\n\nWhat's rational for each can be disastrous for all: one of Keynes's arguments for government intervention.",
      },
      {
        type: 'reflect',
        question: 'In your view, are financial markets rational?',
        options: [
          {
            label: 'Yes, broadly',
            response: "That's the efficient markets hypothesis (Fama): prices quickly absorb available information. Bubbles would be rarer and less obvious than they look with hindsight.",
          },
          {
            label: 'No, they are driven by emotion',
            response: "That's the line from Keynes to behavioural finance (Shiller, Kahneman): over-optimism, herding, panic. The objection: if irrationality is so easy to see, why is it so hard to beat the market?",
          },
          {
            label: 'Rational on average, crazy at times',
            response: "The view of many practitioners: prices are hard to beat in normal times, but bouts of collective madness happen. The problem is that they are rarely recognised in time.",
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Keynes is often credited with the line: "Markets can remain irrational longer than you can remain solvent." What does it mean?',
        options: [
          'That you should never invest',
          'That being right too early, especially with debt, can ruin you before the market proves you right',
          'That markets are always rational',
          "That solvency doesn't matter",
        ],
        answer: 1,
        explain: "Betting against a bubble with leverage means facing margin calls for as long as it keeps inflating. Many short sellers were right… after going bust. (The attribution to Keynes is itself uncertain.)",
      },
    ],
  },

  {
    id: 'philo-3-2',
    screens: [
      {
        type: 'read',
        kicker: 'Chicago, 1945',
        title: 'Knowledge is dispersed',
        body: "In *The Use of Knowledge in Society*, Friedrich Hayek starts from a simple idea: the information the economy needs isn't gathered in one place. It's **dispersed** among millions of people: a shopkeeper knows their area is short of a product, an engineer knows a technique, a farmer knows the weather in their valley.\n\nNo planner, however clever, can know it all.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'The tin example',
        title: 'Price as a message',
        body: "Suppose tin becomes scarcer (a mine closes, a new use appears). Its **price rises**.\n\nThousands of users start saving it or replacing it, **without knowing why** it became scarce. They don't need to: the price has passed on the essential information. For Hayek, the price system is a remarkable **communication tool**.",
      },
      {
        type: 'quiz',
        question: "What is Hayek's central argument against central planning?",
        options: [
          'Planners are dishonest',
          'No planner can gather all the dispersed information that prices pass on',
          'Planning costs too much in salaries',
          "Computers didn't exist",
        ],
        answer: 1,
        explain: "It's an argument about **information**, not morality. It remains at the heart of debates about what the state can and cannot steer.",
      },
      {
        type: 'read',
        kicker: 'The great debate',
        title: 'Economic calculation',
        body: "As early as 1920, Ludwig von Mises argued that an economy without markets cannot **calculate**: without prices, how do you know whether to build a bridge from steel or concrete?\n\nEconomist Oskar Lange replied in the 1930s that a planner could **simulate** a market by trial and error. The debate has resurfaced with computing and artificial intelligence.",
      },
      {
        type: 'reflect',
        question: 'If prices pass on information, does it follow that you should never intervene in markets?',
        options: [
          {
            label: 'Yes, any intervention scrambles the signal',
            response: "That's a strong reading of Hayek: a capped or subsidised price sends a false message. The objection: when the price doesn't reflect all costs (pollution, seen with Smith), the signal is already false.",
          },
          {
            label: 'No, prices that lie should be corrected',
            response: "That's the idea behind a carbon tax: rather than planning, correct the price so it includes the hidden cost, then let the market use the information. A Hayekian solution to a non-Hayekian problem.",
          },
          {
            label: 'It depends on the market',
            response: 'Prices work well when there are many informed buyers and sellers. They work badly with monopoly, panic or strong information asymmetry, as in finance in 2008.',
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'If prices perfectly incorporated all available information, what paradox arises, according to Grossman and Stiglitz (1980)?',
        options: [
          'Prices would become negative',
          'Nobody would have any reason to pay to get informed, so prices could no longer incorporate information',
          'Markets would close',
          'Central banks would lose their power',
        ],
        answer: 1,
        explain: 'Getting informed is costly. If the price already says everything, those who get informed gain nothing, and stop. So markets can only be **almost** efficient: just inefficient enough to reward those who make them efficient.',
      },
    ],
  },

  {
    id: 'philo-3-3',
    screens: [
      {
        type: 'read',
        kicker: 'Chicago, 1921',
        title: 'Risk or uncertainty?',
        body: "In *Risk, Uncertainty and Profit*, economist Frank Knight drew a distinction that became essential:\n\n- **risk**: you don't know what will happen, but you know the **probabilities** (a die, a population's road accidents);\n- **uncertainty**: you don't even know the probabilities (the success of an invention, the outcome of a war).",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: "Which of these cases is uncertainty in Knight's sense, rather than risk?",
        options: [
          'The probability that a 25-year-old driver has an accident this year',
          "The commercial success of a technology that doesn't exist yet",
          'The result of a die roll',
          'The number of burglaries in a large city',
        ],
        answer: 1,
        explain: "For the other three, observed frequencies exist. For a radical innovation, there's no series of past experiments from which to estimate a probability.",
      },
      {
        type: 'read',
        kicker: "Knight's thesis",
        title: 'Where profit comes from',
        body: "Risk can be **insured**: an insurer can calculate a premium. Uncertainty cannot.\n\nFor Knight, the entrepreneur's **profit** is precisely the reward for bearing this uncertainty that nobody can insure on their behalf. In a world of pure risk, competition would make profits disappear.",
      },
      {
        type: 'read',
        kicker: 'An experiment from 1961',
        title: 'The Ellsberg paradox',
        body: "Two urns. Urn A contains **50 red and 50 black balls**. Urn B contains **100 balls**, red and black, in **unknown** proportions. You win if you draw a red. Which urn do you pick?\n\nMost people choose A. Then, if you win by drawing a black… they choose A again. Yet logically, they can't believe B contains fewer reds **and** fewer blacks.",
      },
      {
        type: 'quiz',
        question: "What does Ellsberg's experiment reveal?",
        options: [
          "That people can't count",
          'Ambiguity aversion: we prefer a known risk to a risk whose probabilities we do not know',
          'That the urns are rigged',
          "That chance doesn't exist",
        ],
        answer: 1,
        explain: "It's Knightian uncertainty observed in the lab. In finance, it helps explain why investors flee en masse from situations they can't assess.",
      },
      {
        type: 'read',
        kicker: 'In finance',
        title: 'Measuring risk, forgetting uncertainty',
        body: "Modern finance is very good at measuring **risk**: volatility, VaR, default probabilities, everything you saw in Statistics and Quantitative finance.\n\nBut many crises come from **uncertainty**: situations never seen before, where probabilities estimated from the past are worthless. In 2008, models measured mortgage risk using a history with no nationwide fall in US house prices.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: "Why can't Knightian uncertainty be insured?",
        options: [
          'Because insurers refuse on principle',
          'Because without probabilities, it is impossible to calculate a fair premium or to pool comparable cases',
          'Because it is illegal',
          'It can, no problem',
        ],
        answer: 1,
        explain: 'Insurance rests on the law of large numbers (the central limit theorem, seen in Statistics). No frequencies, no premium, and no pooling: only the entrepreneur is left to carry the bet.',
      },
    ],
  },
]
