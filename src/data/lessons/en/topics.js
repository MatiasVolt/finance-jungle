// Topic lessons. English version of fr/themes.js — same ids, same screens in the same order.

export default [
  // ───────────── Markets · L1 ─────────────
  {
    id: 'marches-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Quick recap',
        title: 'Three things to tell apart',
        body: "- A **share**: a slice of ownership in a company.\n- A **bond**: a slice of a loan made to a government or a company.\n- An **index**: a basket of securities whose value we track to sum up a market.\n\nIf any of these definitions feels fuzzy, Getting started covers them gently. Otherwise, let's go further.",
        guide: 'singe',
      },
      {
        type: 'read',
        kicker: 'What is the company worth to the market?',
        title: 'Market capitalisation',
        body: "`market cap = share price × number of shares`\n\nIf a company has 200 million shares trading at €50, the market values it at **€10 billion**.\n\nThat's the value of the **equity** as seen by the market, not the value of the whole firm: you'd have to add its debt for that. We'll come back to it at level 3.",
      },
      {
        type: 'number',
        question: 'A company has 80 million shares trading at €25. What is its market cap, in millions of euros?',
        answer: 2000,
        tolerance: 0.5,
        unit: '€m',
        explain: '80 million × €25 = €2,000 million, i.e. €2 billion.',
      },
      {
        type: 'read',
        kicker: 'How an index is built',
        title: 'Weighted by market cap',
        body: "The CAC 40 and the S&P 500 are **market-cap weighted** (free-float, meaning the shares that actually trade). The bigger a company is on the market, the more it counts in the index.\n\nThe result: a 10% rise in a giant moves the index far more than a 10% rise in a small company. In the US, a handful of tech giants make up more than a quarter of the S&P 500.",
      },
      {
        type: 'table',
        kicker: 'A mini-index',
        title: 'Three companies, one weighting',
        columns: ['Company', 'Market cap', 'Weight'],
        rows: [
          ['Alpha', '€60bn', '60%'],
          ['Beta', '€30bn', '30%'],
          ['Gamma', '€10bn', '10%'],
        ],
        caption: "Each weight = the company's market cap ÷ total market cap (€100bn).",
      },
      {
        type: 'number',
        question: 'In this mini-index, Alpha rises 10% while Beta and Gamma stay flat. By how much does the index rise, in %?',
        answer: 6,
        tolerance: 0.05,
        unit: '%',
        hint: "The index's change is the average of the changes, weighted by the weights.",
        explain: '60% × 10% + 30% × 0% + 10% × 0% = 6%.',
      },
      {
        type: 'quiz',
        question: 'Gamma doubles (+100%), the others stay flat. And the index?',
        options: ['+100%', '+33%', '+10%', '+1%'],
        answer: 2,
        explain: '10% × 100% = +10%. A small company can double without the index taking off.',
      },
    ],
  },

  // ───────────── Accounting · L1 ─────────────
  {
    id: 'compta-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Venice, 1494',
        title: "A merchants' invention",
        body: "In 1494, the monk and mathematician Luca Pacioli described the method used by Venetian merchants in a treatise: **double-entry bookkeeping**. More than five centuries later, every company in the world still uses it.\n\nThe idea fits in one sentence: **every transaction is recorded in two places**.",
        guide: 'elephant',
        note: 'I never forget anything, because I write everything down. Twice.',
      },
      {
        type: 'read',
        kicker: 'The principle',
        title: 'Where did the money come from, where did it go?',
        body: "Every transaction has a **source** and a **destination**.\n\nYour company buys a €1,000 computer, paid by bank transfer:\n\n- the computer comes into the company (destination);\n- the money leaves the bank account (source).\n\nIn accounting, the destination is recorded as a **debit** and the source as a **credit**. The words are misleading: here, debit doesn't mean \"loss\".",
      },
      {
        type: 'table',
        kicker: 'The entry',
        title: 'Buying the computer',
        columns: ['Account', 'Debit', 'Credit'],
        rows: [
          ['IT equipment', '€1,000', ''],
          ['Bank', '', '€1,000'],
        ],
        caption: 'An entry is always **balanced**: total debits = total credits.',
      },
      {
        type: 'quiz',
        question: 'The company borrows €5,000 from its bank, paid into its account. Which entry?',
        options: ['Debit Bank 5,000 / Credit Loan 5,000', 'Debit Loan 5,000 / Credit Bank 5,000', 'Debit Bank 5,000 only', 'Credit Bank 5,000 / Credit Loan 5,000'],
        answer: 0,
        explain: 'The money arrives in the account (destination: debit Bank) and comes from a debt (source: credit Loan).',
      },
      {
        type: 'read',
        kicker: 'The consequence',
        title: 'The equation that never gets it wrong',
        body: "Since every entry is balanced, the **balance sheet** always is too:\n\n`Assets = Liabilities + Equity`\n\n**Assets** are what the company owns (computer, cash, inventory…). On the other side is where the resources came from: the owners' money (**equity**) and debts (**liabilities**).\n\nIf the equation doesn't add up, there's a mistake somewhere. It was the first automatic control system in history.",
      },
      {
        type: 'number',
        question: 'A company has €30,000 of equity and €20,000 of debt. What are its total assets?',
        answer: 50000,
        tolerance: 0.5,
        unit: '€',
        explain: 'Assets = equity + debt = 30,000 + 20,000 = €50,000. Everything the company owns was financed by one or the other.',
      },
      {
        type: 'quiz',
        question: 'A customer pays cash for an invoice they already owed. What happens to total assets?',
        options: ['They go up', 'They go down', "They don't change", 'They double'],
        answer: 2,
        explain: 'Cash goes up and receivables go down by the same amount. The assets change form, not size.',
      },
    ],
  },

  // ───────────── Financial mathematics · L1 ─────────────
  {
    id: 'temps-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'The two formulas',
        title: 'Simple or compound',
        body: "For a capital `C₀`, an annual rate `r` and a period of `n` years:\n\n- **Simple interest**: `Cₙ = C₀ × (1 + n·r)`. Interest is calculated on the starting capital only.\n- **Compound interest**: `Cₙ = C₀ × (1 + r)ⁿ`. Interest is added to the capital and earns interest in turn.",
        guide: 'tortue',
      },
      {
        type: 'number',
        question: '€5,000 invested at 3% for 4 years, simple interest. Final value?',
        answer: 5600,
        tolerance: 0.5,
        unit: '€',
        explain: '5,000 × (1 + 4 × 0.03) = 5,000 × 1.12 = €5,600.',
      },
      {
        type: 'number',
        question: 'Same investment, compound interest. Final value (to the nearest euro)?',
        answer: 5627.54,
        tolerance: 1,
        unit: '€',
        hint: '5,000 × 1.03⁴. On a calculator: 1.03 ^ 4.',
        explain: '5,000 × 1.03⁴ = 5,000 × 1.1255 ≈ €5,628. The gap with simple interest is small at first and grows over time.',
      },
      { type: 'compound' },
      {
        type: 'read',
        kicker: 'A classic trap',
        title: 'And for less than a year?',
        body: "For `n < 1`, it's the other way round: `(1 + r)ⁿ < 1 + n·r`.\n\nOver 6 months at 10%: simple → × 1.05; compound → × 1.10^0.5 ≈ × 1.0488.\n\nThat's why money markets (investments under a year) often use simple interest, and long-term investments use compound interest. Always check the convention before comparing two rates.",
      },
      {
        type: 'quiz',
        question: 'Two banks advertise "4%". One compounds interest every year, the other never does. Over 20 years, which is better?',
        options: ['The one that compounds', "The one that doesn't", "They're the same", 'Impossible to say'],
        answer: 0,
        explain: '1.04²⁰ ≈ 2.19 versus 1 + 20 × 0.04 = 1.80. Same "advertised rate", very different result.',
      },
    ],
  },

  // ───────────── Statistics · L1 ─────────────
  {
    id: 'stats-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Two summaries of a series',
        title: 'Mean and median',
        body: "The **mean** adds up all the values and divides by how many there are.\n\nThe **median** is the middle value: half the values are below it, half above.\n\nOn symmetrical data, they look alike. On lopsided data, they tell very different stories.",
        guide: 'crocodile',
        note: 'A very big animal can sleep under a calm average.',
      },
      {
        type: 'number',
        question: 'A start-up has 9 employees paid €2,000 and a founder paid €100,000. What is the average salary?',
        answer: 11800,
        tolerance: 0.5,
        unit: '€',
        explain: '(9 × 2,000 + 100,000) ÷ 10 = 118,000 ÷ 10 = €11,800. Nobody earns €11,800.',
      },
      {
        type: 'quiz',
        question: 'And the median salary?',
        options: ['€2,000', '€11,800', '€51,000', '€100,000'],
        answer: 0,
        explain: 'Sorted, the 5th and 6th salaries are €2,000. The median resists extreme values; the mean does not.',
      },
      {
        type: 'read',
        kicker: 'In finance',
        title: 'The average-return trap',
        body: "An investment makes **+50%** one year, then **−50%** the next. Average return: (50 − 50) ÷ 2 = **0%**.\n\nYet with €100: 100 → 150 → 75. You've lost **25%**.\n\nThe arithmetic mean doesn't tell you what you really earn when returns compound. For that, you need the **geometric mean**: `(1.5 × 0.5)^(1/2) − 1 ≈ −13.4%` a year.",
      },
      {
        type: 'number',
        question: 'A fund makes +20% then −20%. Starting from €1,000, how much is left?',
        answer: 960,
        tolerance: 0.5,
        unit: '€',
        explain: '1,000 × 1.2 × 0.8 = €960. Arithmetic mean: 0%. Reality: −4%. The more volatile the returns, the wider the gap.',
      },
      {
        type: 'quiz',
        question: 'A fund manager boasts an "average return of 10% a year". What should you ask first?',
        options: ['Arithmetic or geometric mean?', 'What colour is the logo?', 'How many employees?', "Nothing, 10% is clear"],
        answer: 0,
        explain: 'With very volatile years, the arithmetic mean can be flattering. The geometric (or "annualised") mean tells you what the investor actually got.',
      },
    ],
  },

  // ───────────── Macroeconomics · L1 ─────────────
  {
    id: 'macro-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'The most quoted number',
        title: 'GDP',
        body: "**Gross domestic product** measures the value of everything produced in a territory in a year. France produces nearly **€3 trillion** a year.\n\nBut how do you add up baguettes, haircuts and Airbus planes without counting the same thing twice?",
        guide: 'baleine',
        note: "I don't watch the waves one by one. I watch the tide.",
      },
      {
        type: 'read',
        kicker: 'Avoiding double counting',
        title: 'Value added',
        body: "A farmer sells wheat to a miller for €100. The miller sells the flour to a baker for €250. The baker sells the bread for €400.\n\nIf you add up the sales (€750), you count the wheat three times. Instead, you add up what **each one adds**:\n\n- farmer: €100\n- miller: 250 − 100 = €150\n- baker: 400 − 250 = €150",
      },
      {
        type: 'number',
        question: "What is this supply chain's total contribution to GDP?",
        answer: 400,
        tolerance: 0.5,
        unit: '€',
        explain: '100 + 150 + 150 = €400, exactly the value of the final product. GDP is the sum of value added.',
      },
      {
        type: 'read',
        kicker: 'Three doors, one room',
        title: 'Three ways to measure',
        body: "- **Output**: the sum of value added.\n- **Expenditure**: `GDP = C + I + G + (X − M)`: household consumption, investment, government spending, exports minus imports.\n- **Income**: wages + profits + taxes on production.\n\nIn theory, all three give the same number: whatever is produced is necessarily bought by someone and earns someone an income.",
      },
      {
        type: 'quiz',
        question: 'Which of these is NOT counted in GDP?',
        options: ['A haircut at the barber', 'The meal you cook at home', "A teacher's salary", 'An exported Airbus'],
        answer: 1,
        explain: 'Unpaid household work is not counted. Other blind spots: environmental damage, inequality, volunteering.',
      },
      {
        type: 'read',
        kicker: 'Nominal or real',
        title: 'Correcting for prices',
        body: "If GDP rises by 5% but prices rose by 3%, output in volume only grew by about **2%**.\n\n**Nominal** GDP is measured at current prices; **real** GDP corrects for inflation. When people talk about \"growth\", they almost always mean real GDP.",
      },
      {
        type: 'quiz',
        question: 'Nominal GDP +4%, inflation +4%. Real growth is about…',
        options: ['+8%', '+4%', '0%', '−4%'],
        answer: 2,
        explain: 'The whole increase comes from prices, not from the quantities produced.',
      },
    ],
  },

  // ───────────── History · L1 ─────────────
  {
    id: 'histoire-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Mesopotamia, 3rd millennium BC',
        title: 'Bookkeeping before money',
        body: "Between the Tigris and the Euphrates, temples and palaces managed huge stocks of barley, wool and livestock. To keep track, scribes wrote everything down on **clay tablets**.\n\nAmong humanity's oldest writings, a large share are… accounts. Writing itself was born partly to record debts and stocks.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'A unit of account',
        title: 'The silver shekel',
        body: "Mesopotamians used the **shekel**, a weight of silver of about 8 grams, as their unit of account. But people rarely paid in silver: most debts were settled in barley, at a fixed conversion rate.\n\nSilver was mainly used to **measure**, barley to **pay**. The unit of account and the means of payment don't have to be the same thing.",
      },
      {
        type: 'quiz',
        question: 'In this example, which function of money does the silver shekel mainly fulfil?',
        options: ['Unit of account', 'Means of payment', 'Store of value', 'None'],
        answer: 0,
        explain: 'The shekel serves as a common yardstick to express values and debts, even though people often paid in barley.',
      },
      {
        type: 'read',
        kicker: 'Around 1750 BC',
        title: 'The Code of Hammurabi regulates interest',
        body: "Hammurabi, king of Babylon, had a collection of laws engraved. Several articles deal with loans, and the texts of the time set **maximum rates**: about **20%** a year for a silver loan, **33⅓%** for a grain loan.\n\nNearly 4,000 years ago, people were already regulating the price of credit.",
      },
      {
        type: 'quiz',
        question: 'Why was the rate on grain higher than on silver, do you think?',
        options: ['Grain is rarer', 'Grain gets lost or rots, and the harvest is uncertain: the lender takes more risk', 'The king preferred grain', 'No reason'],
        answer: 1,
        explain: "That's the classic reading: a riskier or costlier-to-store loan demands a higher rate. The risk premium, already.",
      },
      {
        type: 'read',
        kicker: 'A forgotten idea',
        title: 'Wiping out debts',
        body: "When debts became unbearable and peasants were reduced to servitude, Mesopotamian kings sometimes proclaimed a **general cancellation of debts** (*misharum*): tablets were broken and debt slaves freed.\n\nThe question of what to do with unpayable debts is as old as debt itself. We'll meet it again in 2010 with Greece.",
      },
    ],
  },

  // ───────────── Management control · L1 ─────────────
  {
    id: 'controle-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Two families of costs',
        title: 'Fixed and variable',
        body: "You launch a burger food truck.\n\n- Some costs don't move whether you sell 0 or 1,000 burgers: the pitch, the insurance, the truck loan. These are **fixed costs**. Say **€1,500 a month**.\n- Others rise with every burger sold: bun, meat, packaging. These are **variable costs**. Say **€3 per burger**.",
        guide: 'abeille',
        note: "A hive that doesn't know what a gram of honey costs ends up running short.",
      },
      {
        type: 'number',
        question: 'You sell 300 burgers in the month. What is your total cost?',
        answer: 2400,
        tolerance: 0.5,
        unit: '€',
        explain: '€1,500 fixed + 300 × €3 variable = €2,400.',
      },
      {
        type: 'table',
        kicker: 'The volume effect',
        title: 'The cost of a burger depends on how many you sell',
        columns: ['Burgers sold', 'Total cost', 'Cost per burger'],
        rows: [
          ['100', '€1,800', '€18.00'],
          ['300', '€2,400', '€8.00'],
          ['500', '€3,000', '€6.00'],
        ],
        caption: 'Fixed costs are spread over more units: the unit cost falls as volume rises.',
      },
      {
        type: 'read',
        kicker: 'What each burger brings in',
        title: 'Contribution margin',
        body: "You sell the burger for **€10**. Each burger costs €3 more to make. You're left with **€7** to cover fixed costs, then make a profit.\n\nThose €7 are called the **contribution margin**. Until fixed costs are covered, you lose money. After that, each burger brings in €7 of profit.",
      },
      {
        type: 'number',
        question: 'How many burgers must you sell at minimum to cover the €1,500 of fixed costs? (round up)',
        answer: 215,
        tolerance: 0,
        unit: 'burgers',
        hint: 'Fixed costs ÷ margin per burger.',
        explain: "1,500 ÷ 7 ≈ 214.3. So you need 215. That's the **break-even point**, which we dig into in the next lesson.",
      },
      {
        type: 'quiz',
        question: 'A customer offers to buy 50 burgers at €5 each for an event. Your fixed costs are already covered this month. Accept?',
        options: ['No, €5 is below the average cost', 'Yes, each burger still brings in €2 extra', 'No, never sell at a loss', 'Impossible to say'],
        answer: 1,
        explain: "Fixed costs are already paid: only the variable cost (€3) matters for this extra order. 50 × €2 = €100 of extra profit. That's marginal-cost reasoning, with its limits (don't undercut your usual prices).",
      },
    ],
  },

  // ───────────── Financial law · L1 ─────────────
  {
    id: 'droit-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'The starting question',
        title: 'Why regulate finance?',
        body: "Selling shoes isn't regulated the way a bank is. Why does finance get special treatment?\n\nFour reasons always come up:\n\n- **information asymmetry**;\n- **protecting savers**;\n- **market integrity**;\n- **systemic risk**.",
        guide: 'lion',
        note: 'In the jungle, the strongest wins. In a market, we decided it would be whoever is best informed, honestly.',
      },
      {
        type: 'read',
        kicker: 'Reasons 1 and 2',
        title: "The one who knows and the one who doesn't",
        body: "A company's managers know far better than you whether it's doing well. The seller of a complex financial product knows its risks better than the buyer.\n\nWithout rules, those who know can exploit those who don't. Hence **disclosure** obligations (publishing accounts, a clear prospectus) and **advice** obligations (checking that a product suits the client).",
      },
      {
        type: 'read',
        kicker: 'Reasons 3 and 4',
        title: 'An honest market, a sound system',
        body: "**Integrity**: if prices can be rigged (insider trading, market manipulation), nobody trusts prices any more, and the market stops working.\n\n**Systemic risk**: the failure of a big bank can drag down others, then the whole economy, as in 2008. A bakery closing doesn't bring down the other bakeries.",
      },
      {
        type: 'quiz',
        question: 'Why are banks required to hold more capital than an ordinary company?',
        options: ['To tax them more', 'Because their failure can spread to the whole system', 'To slow their growth', 'To protect their shareholders'],
        answer: 1,
        explain: "That's systemic risk. Capital acts as a shock absorber: it soaks up losses before they reach depositors and other banks.",
      },
      {
        type: 'read',
        kicker: 'Who watches in France (and elsewhere)',
        title: 'The watchdogs',
        body: "- **The AMF** (France's financial markets authority, created in 2003) oversees markets, listed companies' disclosures and products sold to savers. Its US counterpart is the SEC; in the UK, the FCA.\n- **The ACPR**, attached to the Banque de France, supervises banks and insurers.\n- Since 2014, the **ECB** directly supervises the largest banks in the euro area.\n\nAbove them, many rules come from the European Union.",
      },
      {
        type: 'quiz',
        question: 'A French listed company publishes misleading accounts. Which French authority is concerned first?',
        options: ['The AMF', 'The ACPR', 'The ECB', 'INSEE (the statistics office)'],
        answer: 0,
        explain: "Listed companies' financial disclosures fall under the AMF, which can investigate and impose sanctions.",
      },
    ],
  },

  // ───────────── Philosophy · L1 ─────────────
  {
    id: 'philo-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Athens, 4th century BC',
        title: 'Two ways of acquiring',
        body: "In the *Politics*, Aristotle distinguishes two arts:\n\n- **economics** (*oikonomia*), running the household: acquiring what you need to live well. It has a natural limit.\n- **chrematistics**, the art of making money for its own sake. It has **no limit**: you never have \"enough\" money.\n\nFor Aristotle, the first is natural; the second becomes less and less so the further it strays from real needs.",
        guide: 'paresseux',
        note: "I go slowly on purpose. Good questions shouldn't be rushed.",
      },
      {
        type: 'read',
        kicker: 'The worst case',
        title: 'Money that has offspring',
        body: "For Aristotle, the worst of all is lending at interest. Money was invented to make exchange easier, not to reproduce itself.\n\nYet in Greek, interest is *tokos*, which also means \"offspring\". The usurer makes money **give birth**, which Aristotle judges the most unnatural of all.\n\nThis idea ran through the Middle Ages: Thomas Aquinas drew on it, and the Church condemned usury for centuries.",
      },
      {
        type: 'reflect',
        question: 'What do you think: is charging interest on a loan legitimate?',
        options: [
          {
            label: 'Yes, lending has a cost',
            response: "That's the modern argument: the lender gives up using their money (the price of time), takes the risk of not being repaid, and suffers inflation. Interest pays for those three things. Aristotle had neither the notion of productive capital nor that of a risk premium.",
          },
          {
            label: "No, money shouldn't produce money",
            response: "You're siding with Aristotle, but also with part of Islamic finance, which forbids *riba* (interest) and prefers sharing profits and losses. A question for later: is sharing risk with the borrower really different from interest?",
          },
          {
            label: 'It depends on the rate and the situation',
            response: "That's the position of most modern legal systems: interest is allowed, but capped. In France, the **usury rate** sets a legal maximum depending on the type of loan; many US states have similar caps. Hammurabi did the same thing 4,000 years ago.",
          },
        ],
      },
      {
        type: 'quiz',
        question: 'For Aristotle, what sets chrematistics apart from economics?',
        options: ['It uses coins', 'It aims at unlimited accumulation', 'It is practised by the state', 'It is more recent'],
        answer: 1,
        explain: 'Economics stops when needs are met. Chrematistics pursues money for its own sake, without end.',
      },
    ],
  },

  // ───────────── Derivatives · L1 ─────────────
  {
    id: 'derives-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'The need',
        title: 'Two people afraid of the future',
        body: "A baker fears the price of wheat will **rise** over the next six months. A farmer fears it will **fall** before the harvest.\n\nToday they sign a contract: in six months, the farmer will deliver 100 tonnes of wheat to the baker at **€200 a tonne**, whatever the market price is at that point.\n\nThis contract is called a **forward** (an over-the-counter contract for future delivery).",
        guide: 'cameleon',
        note: 'A derivative changes colour with whatever it touches. Here, it takes on the colour of wheat.',
      },
      {
        type: 'read',
        kicker: 'The vocabulary',
        title: 'Who is long, who is short',
        body: "- The one who **will buy** (the baker) has a **long** position.\n- The one who **will sell** (the farmer) has a **short** position.\n- The agreed price (€200) is the **forward price** `K`.\n- The market price at maturity is written `S_T`.\n\nAt maturity, the buyer's gain per tonne is `S_T − K`. The seller's is `K − S_T`.",
      },
      {
        type: 'number',
        question: "In six months, wheat trades at €230 a tonne. What is the baker's gain on 100 tonnes, in euros?",
        answer: 3000,
        tolerance: 0.5,
        unit: '€',
        explain: '(230 − 200) × 100 = €3,000. He pays €200 for a tonne worth €230 on the market.',
      },
      {
        type: 'quiz',
        question: 'And the farmer, in this scenario?',
        options: ['He also gains €3,000', 'He "loses" €3,000 compared with the market', 'He neither gains nor loses', 'He loses €230'],
        answer: 1,
        explain: 'He could have sold at €230; he sells at €200. A forward is a zero-sum game: what one gains, the other loses.',
      },
      {
        type: 'read',
        kicker: 'So why sign?',
        title: 'Hedging',
        body: "The farmer didn't \"lose\" in the way he feared: he got **certainty** of selling at €200. Had wheat dropped to €150, he'd have been the one protected.\n\nUsed this way, a derivative is for **hedging**: you give up a possible gain to eliminate a possible loss. The same contract, signed by someone who has no wheat, becomes a bet on the price: **speculation**.",
      },
      {
        type: 'quiz',
        question: 'An airline buys next year\'s jet fuel forward at a fixed price. It is…',
        options: ['speculating on a rise', 'hedging against a rise in fuel prices', 'hedging against a fall', 'doing arbitrage'],
        answer: 1,
        explain: 'Its risk is that jet fuel goes up. By fixing the price, it makes its costs predictable.',
      },
    ],
  },

  // ───────────── Derivatives · L3 (example of a demanding lesson) ─────────────
  {
    id: 'derives-3-1',
    screens: [
      {
        type: 'read',
        kicker: 'The simplest possible model',
        title: 'A world with two states',
        body: "A stock is worth `S₀ = €100` today. In a year, it can only be worth two things: **€120** (up) or **€80** (down). For now, the risk-free rate is zero.\n\nWe want the price of a **call** with strike `K = 100`: the right, but not the obligation, to buy the stock for €100 in a year.\n\nPrerequisite: knowing what a call is (level 2). If you don't, you can carry on, but come back to this lesson afterwards.",
        guide: 'cameleon',
      },
      {
        type: 'table',
        kicker: 'At maturity',
        title: 'What the call is worth',
        columns: ['State', 'Stock', 'Call: max(S − 100, 0)'],
        rows: [
          ['Up', '€120', '€20'],
          ['Down', '€80', '€0'],
        ],
        caption: "Note: you were given **no probability** of going up or down. And yet we'll find a single price.",
      },
      {
        type: 'read',
        kicker: 'The key idea',
        title: 'Replicating the call',
        body: "Let's build a portfolio that pays **exactly** like the call in both states: `Δ` shares and an amount `B` invested (or borrowed) at the risk-free rate.\n\n- Up: `120·Δ + B = 20`\n- Down: `80·Δ + B = 0`\n\nTwo equations, two unknowns. If this portfolio pays like the call, it must **cost** the same as the call; otherwise there's a risk-free profit to grab (an **arbitrage**).",
      },
      {
        type: 'number',
        question: 'What is Δ, the number of shares to hold?',
        answer: 0.5,
        tolerance: 0.001,
        hint: 'Subtract the second equation from the first.',
        explain: "40·Δ = 20, so Δ = 0.5. Δ = (difference in the call's payoffs) ÷ (difference in the stock's prices). This is the future \"delta\" of the Greeks.",
      },
      {
        type: 'number',
        question: 'What is B? (negative if you borrow)',
        answer: -40,
        tolerance: 0.001,
        unit: '€',
        explain: '80 × 0.5 + B = 0, so B = −40: you borrow €40.',
      },
      {
        type: 'number',
        question: "Today's call price = Δ·S₀ + B. How much?",
        answer: 10,
        tolerance: 0.001,
        unit: '€',
        explain: '0.5 × 100 − 40 = €10. Any other price creates an arbitrage.',
      },
      {
        type: 'read',
        kicker: 'Same result, another way',
        title: 'The risk-neutral probability',
        body: "Let's look for a \"probability\" `q` of going up such that the stock earns, on average, the risk-free rate:\n\n`q·120 + (1 − q)·80 = 100 × (1 + r)`\n\nWith `r = 0`: `q = 0.5`. Call price = `q·20 + (1 − q)·0 = €10`. Same result.\n\nWith a rate `r`, the general formula becomes:\n\n`q = (1 + r − d) / (u − d)` and `price = [q·C_up + (1 − q)·C_down] / (1 + r)`\n\nwhere `u = 1.2` and `d = 0.8` are the up and down factors.",
      },
      {
        type: 'number',
        question: 'Same tree, but the risk-free rate is 5%. Call price? (2 decimals)',
        answer: 11.9,
        tolerance: 0.01,
        unit: '€',
        hint: 'First compute q = (1.05 − 0.8) / 0.4.',
        explain: 'q = 0.25 / 0.4 = 0.625. Price = 0.625 × 20 / 1.05 ≈ €11.90. A higher rate makes the call more expensive.',
      },
      {
        type: 'quiz',
        question: 'An analyst thinks the up move has a 90% chance of happening. The arbitrage price of the call (with r = 0)…',
        options: ['rises to €18', 'stays at €10', 'falls', 'cannot be calculated'],
        answer: 1,
        explain: "The price comes from replication, not from real-world probabilities. The analyst's beliefs are already reflected in the stock price. This is the idea that leads, step by step, to Black-Scholes.",
      },
    ],
  },

  // ───────────── Quantitative finance · L1 ─────────────
  {
    id: 'quant-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'The raw material',
        title: 'Simple returns',
        body: "A quant almost never works on prices, but on **returns**.\n\n`R = P₁ / P₀ − 1`\n\nA stock goes from 100 to 110: `R = 10%`. Simple, readable, and returns of several assets aggregate nicely in a portfolio: the portfolio's return is the weighted average of the returns.",
        guide: 'jaguar',
        note: "I hunt with equations. They don't lie, but you have to know which ones to use.",
      },
      {
        type: 'read',
        kicker: 'The other definition',
        title: 'Log returns',
        body: "`r = ln(P₁ / P₀)`\n\nFor 100 → 110: `r = ln(1.1) ≈ 9.53%`. Very close to 10% for small moves, different for big ones.\n\nIts main strength: it **adds up over time**. The log return over two periods is the sum of the log returns of each period.",
      },
      {
        type: 'number',
        question: 'A stock goes from 50 to 60. What is its log return, in %? (2 decimals)',
        answer: 18.23,
        tolerance: 0.02,
        unit: '%',
        hint: 'ln(60 / 50) = ln(1.2).',
        explain: 'ln(1.2) ≈ 0.1823, i.e. 18.23%. The simple return is 20%.',
      },
      {
        type: 'read',
        kicker: 'Why it matters',
        title: '+50% then −50%, log version',
        body: "With simple returns, +50% then −50% gives an \"average\" of 0% even though you lost 25%.\n\nWith log returns: `ln(1.5) + ln(0.5) = ln(0.75) ≈ −28.8%`. The sum gives the total log return **directly**. No trap.\n\nThat's why continuous-time models (Black-Scholes, simulations) work in logs.",
      },
      {
        type: 'quiz',
        question: "You have a stock's daily log returns over a month. How do you get the monthly log return?",
        options: ['Multiply them', 'Add them up', 'Take their average', 'Take the maximum'],
        answer: 1,
        explain: 'ln(P_end / P_start) = sum of ln(P_t / P_t−1). The product of ratios becomes a sum of logs.',
      },
      {
        type: 'quiz',
        question: "And to compute a multi-stock portfolio's return over one day, which is more convenient?",
        options: ['The simple return', 'The log return', "They're identical", 'Neither'],
        answer: 0,
        explain: "A portfolio's simple return is exactly the weighted average of the simple returns. Not so for logs. Rule of thumb: logs for time, simple returns for portfolios.",
      },
    ],
  },

  // ───────────── Personal finance · L1 ─────────────
  {
    id: 'perso-1-1',
    screens: [
      {
        type: 'read',
        kicker: 'Before anything else',
        title: 'Knowing where your money goes',
        body: "Investing, saving, borrowing: none of it works without knowing what comes in and what goes out each month.\n\nA budget isn't a punishment. It's a **map**: it shows you where you're heading and lets you decide whether that's where you want to go.",
        guide: 'fourmi',
        note: 'People laugh at the ants who stockpile all summer. Nobody laughs in winter.',
      },
      {
        type: 'read',
        kicker: 'A starting rule',
        title: 'The 50 / 30 / 20 rule',
        body: "A simple method to split your take-home pay:\n\n- **50%** for needs: rent, groceries, transport, bills.\n- **30%** for wants: going out, travel, subscriptions.\n- **20%** for savings and paying down debt early.\n\nIt's not a law. In a big city, rent alone often exceeds 30%. But it's a good benchmark to see where you stand.",
      },
      {
        type: 'number',
        question: 'You take home €1,800 a month. How much should you set aside under the 50/30/20 rule?',
        answer: 360,
        tolerance: 0.5,
        unit: '€',
        explain: '20% × 1,800 = €360 a month, i.e. €4,320 a year.',
      },
      {
        type: 'read',
        kicker: 'The real secret',
        title: 'Pay yourself first',
        body: "Most people save whatever is left at the end of the month. Often, nothing is left.\n\nThe trick: set up an **automatic transfer** to your savings on the day you get paid. You then live on the rest. Saving becomes a fixed expense, not a good intention.",
      },
      {
        type: 'quiz',
        question: 'Which expense is usually the easiest to cut for good?',
        options: ["Subscriptions you don't use any more", 'Rent', 'Taxes', 'Mandatory health insurance'],
        answer: 0,
        explain: 'Small forgotten recurring expenses are the ideal target: one effort, savings every month.',
      },
      {
        type: 'number',
        question: 'You cancel three subscriptions at €9.99 a month. How much do you save over a year? (2 decimals)',
        answer: 359.64,
        tolerance: 0.01,
        unit: '€',
        explain: '3 × 9.99 × 12 = €359.64. Almost a month of savings under the 50/30/20 rule.',
      },
    ],
  },
]
