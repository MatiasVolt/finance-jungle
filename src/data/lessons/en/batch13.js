// End of level 4: history, law, philosophy. English version of fr/lot13.js.

export default [
  // ───────────── History · L4 ─────────────
  {
    id: 'histoire-4-1',
    screens: [
      {
        type: 'read',
        kicker: 'New Hampshire, July 1944',
        title: 'Rebuilding the monetary system',
        body: "Even before the war ended, 44 countries met at **Bretton Woods**. They wanted to avoid the chaos of the 1930s: competitive devaluations, protectionism, collapsing trade.\n\nThe system they adopted:\n\n- the **dollar** is convertible into gold at **$35 an ounce**, for central banks;\n- other currencies have a **fixed** (but adjustable) parity with the dollar;\n- two institutions are born: the **IMF** and the **World Bank**.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: 'From 1949 to 1967, the pound sterling is worth $2.80. How many pounds does an ounce of gold cost then?',
        answer: 12.5,
        tolerance: 0.01,
        unit: '£',
        explain: '35 ÷ 2.80 = £12.5. Through the dollar, every currency in the system is indirectly tied to gold.',
      },
      {
        type: 'quiz',
        question: "What is the IMF's primary role in this system?",
        options: [
          'Financing roads and dams',
          'Lending temporarily to countries with balance-of-payments problems, so they can hold their parity',
          "Setting each country's interest rates",
          'Printing a world currency',
        ],
        answer: 1,
        explain: 'Big development projects are the World Bank. The IMF is the firefighter for external imbalances.',
      },
      {
        type: 'read',
        kicker: 'The losing plan',
        title: 'Keynes and the bancor',
        body: "Keynes, representing the UK, proposed an international currency, the **bancor**, and a mechanism that penalised **surplus** countries too, not just deficit ones.\n\nThe plan of the American Harry Dexter White won: the United States held most of the world's gold, and the dollar became the system's pivot.",
      },
      {
        type: 'read',
        kicker: 'A flaw from the start',
        title: "Triffin's dilemma",
        body: "In 1960, economist Robert Triffin pointed out a contradiction: for the rest of the world to have enough dollars, the United States has to run external **deficits**. But the more dollars there are in the world relative to US gold, the less **credible** the convertibility promise.\n\nThe system contains the seeds of its own end.",
      },
      {
        type: 'quiz',
        question: 'According to Triffin, what would happen if the United States eliminated its external deficits?',
        options: [
          'The system would become perfect',
          'The world would run short of dollars to trade with: international liquidity would dry up',
          'Gold would lose all value',
          'The IMF would disappear',
        ],
        answer: 1,
        explain: 'On one side, not enough dollars; on the other, less and less credible dollars. No stable way out.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: "According to Mundell's \"trilemma\", a country can't have fixed exchange rates, independent monetary policy and free capital movement all at once. What did Bretton Woods choose?",
        options: [
          'All three',
          'Fixed rates and independent monetary policy, at the cost of capital controls',
          'Free capital movement and floating rates',
          'None of the three',
        ],
        answer: 1,
        explain: 'Capital controls were the norm. As capital became more mobile in the 1960s, pressure on parities grew, until the break.',
      },
    ],
  },

  {
    id: 'histoire-4-2',
    screens: [
      {
        type: 'read',
        kicker: 'The 1960s',
        title: 'The gold drains away',
        body: "The Vietnam War, social programmes, inflation: the United States spends, and dollars pile up abroad. Several countries, including General de Gaulle's France, ask to **convert their dollars into gold**.\n\nThe US gold stock melts away: from about 20,000 tonnes in the early 1950s to about 9,000 tonnes in 1971.",
        guide: 'hibou',
      },
      {
        type: 'number',
        question: 'From 20,000 to 9,000 tonnes: by roughly what % did the US gold stock fall?',
        answer: 55,
        tolerance: 0.5,
        unit: '%',
        explain: '(20,000 − 9,000) ÷ 20,000 = 55%. Dollars held abroad far exceed the gold left to back them.',
      },
      {
        type: 'read',
        kicker: '15 August 1971',
        title: 'The Nixon shock',
        body: "On a Sunday evening, on television, President Nixon announces the **suspension of the dollar's convertibility** into gold. Attempts to restore fixed parities fail; by **1973**, the major currencies **float**.\n\nSince then, no major currency has been backed by gold. This is the world of **fiat** money described in Getting started.",
      },
      {
        type: 'quiz',
        question: "Since 1971, what underpins the dollar's value?",
        options: [
          'The gold reserves at Fort Knox',
          'Confidence in US institutions, the central bank and the economy, and global demand for dollars',
          'The price of oil alone',
          'An agreement with the IMF',
        ],
        answer: 1,
        explain: "The dollar is a fiat currency. Its dominance rests on the size of the US economy, the depth of its markets and confidence in its institutions.",
      },
      {
        type: 'read',
        kicker: 'The 1970s',
        title: 'Inflation and gold',
        body: "Freed from the anchor, many countries experience **high inflation**, made worse by the oil shocks of 1973 and 1979. Gold no longer has an official price: it goes from $35 to about **$850** an ounce in January 1980.",
      },
      {
        type: 'number',
        question: 'By how much was the price of gold multiplied between $35 and $850? (2 decimals)',
        answer: 24.29,
        tolerance: 0.05,
        explain: '850 ÷ 35 ≈ 24.29: in less than ten years.',
      },
      {
        type: 'read',
        kicker: 'Strong medicine',
        title: 'Volcker',
        body: "In 1979, Paul Volcker takes over the Fed. To break inflation, he lets the policy rate climb to about **20%** in 1981. The economy plunges into recession and unemployment tops 10%, but inflation falls for good.\n\nThis episode founded central banks' modern credibility and the importance of expectations (macro, level 4).",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'In 1971, Treasury Secretary John Connally told the Europeans: "The dollar is our currency, but it\'s your problem." What did he mean?',
        options: [
          'That Europeans should buy gold',
          "That US decisions about the dollar are imposed on the rest of the world, which bears the consequences",
          'That the dollar would disappear',
          'That Europe should adopt the dollar',
        ],
        answer: 1,
        explain: 'The rest of the world holds and uses dollars, but decides nothing. That asymmetry, sometimes called the "exorbitant privilege", remains central to international monetary debates.',
      },
    ],
  },

  {
    id: 'histoire-4-3',
    screens: [
      {
        type: 'read',
        kicker: '19 October 1987',
        title: 'Black Monday',
        body: "The Dow Jones loses **22.6%** in a single session, the biggest one-day fall in its history. No war, no major bankruptcy: high valuations, rising rates… and a new mechanism that runs out of control.\n\nThat mechanism is **portfolio insurance**.",
        guide: 'hibou',
      },
      {
        type: 'read',
        kicker: 'A good idea gone wrong',
        title: 'Portfolio insurance',
        body: "Invented in the early 1980s (Leland, O'Brien and Rubinstein), it **replicates a put** instead of buying one: when the market falls, you **sell** index futures, more and more, to protect the portfolio. It's the changing-delta logic you saw with the binomial tree.\n\nTens of billions of dollars were managed this way in 1987.",
      },
      {
        type: 'quiz',
        question: 'Why did this strategy amplify the crash?',
        options: [
          'Because it was illegal',
          'Because all its users sold at the same time when the market fell, pushing it down further and triggering more selling',
          'Because it bought too much',
          'It played no role',
        ],
        answer: 1,
        explain: "A hedge that's rational for each becomes explosive when everyone applies it. It's the 1929 margin-call spiral, in algorithmic form.",
      },
      {
        type: 'read',
        kicker: 'The responses',
        title: 'Circuit breakers and the lender of last resort',
        body: "- The next day, Alan Greenspan's Fed announces it will provide all the liquidity needed: the lesson of 1929 is applied.\n- Exchanges introduce **circuit breakers**: automatic pauses when the fall becomes too violent.",
      },
      {
        type: 'read',
        kicker: 'A new risk culture',
        title: 'The birth of VaR and the smile',
        body: "- The crash pushes banks to measure their overall risk every day. At JP Morgan, chairman Dennis Weatherstone demands a one-page daily report, delivered at 4:15 pm. In 1994, the bank makes its method public, **RiskMetrics**: VaR becomes a standard.\n- In options markets, the volatility **smile** appears: puts far out of the money become markedly more expensive. The market now builds in the possibility of a crash.",
      },
      {
        type: 'quiz',
        question: 'What does it mean that, after 1987, far out-of-the-money puts became more expensive than Black-Scholes predicts?',
        options: [
          'That traders are wrong',
          'That the market sees big falls as more likely than a normal distribution assumes: it charges for fat tails',
          'That rates rose',
          'Nothing',
        ],
        answer: 1,
        explain: 'Higher implied volatility for low strikes is the trace, in prices, of the fat-tails lesson. The 1987 crash engraved it into the market.',
      },
      {
        type: 'number',
        challenge: true,
        question: "Today in the US, a 7% intraday fall in the S&P 500 triggers a 15-minute halt. If the index closed at 5,000 the day before, at what level is the halt triggered?",
        answer: 4650,
        tolerance: 0.5,
        unit: 'points',
        explain: '5,000 × (1 − 0.07) = 4,650 points. These halts were triggered several times in March 2020.',
      },
    ],
  },

  // ───────────── Financial law · L4 ─────────────
  {
    id: 'droit-4-1',
    screens: [
      {
        type: 'read',
        kicker: 'Taking control',
        title: 'Takeover bids',
        body: "A **public offer** proposes to buy the shares of **all** the shareholders of a listed company:\n\n- for cash: a **tender offer** (OPA in France);\n- for the bidder's own shares: an **exchange offer** (OPE).\n\nThe core principle: **equal treatment** of shareholders. The regulator (the AMF in France, the Takeover Panel in the UK) checks that the offer follows the rules and that information is complete.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'Paying for control',
        title: 'The premium',
        body: "To persuade shareholders to sell, the bidder usually offers a price well above the pre-announcement share price: the **control premium**, often 20 to 40%.\n\nIt pays for the power to set strategy alone, and for the synergies the bidder hopes for.",
      },
      {
        type: 'number',
        question: 'A share traded at €40 before the announcement. The offer is €52. What is the premium, in %?',
        answer: 30,
        tolerance: 0.01,
        unit: '%',
        explain: '(52 − 40) ÷ 40 = 30%.',
      },
      {
        type: 'read',
        kicker: 'In France (and the UK)',
        title: 'Mandatory bids and squeeze-outs',
        body: "- Whoever crosses **30%** of the capital or voting rights of a listed company must **launch an offer** for all the shares (the UK has the same 30% rule).\n- When the bidder holds at least **90%**, it can launch a **squeeze-out**: the remaining minority shareholders are bought out compulsorily, at a regulated price, and the company leaves the stock market.",
      },
      {
        type: 'quiz',
        question: 'A fund goes from 28% to 31% of the voting rights of a French listed company. What is the consequence?',
        options: [
          'None',
          'It must launch a public offer for the whole capital',
          'It must sell 1%',
          'It automatically becomes chair',
        ],
        answer: 1,
        explain: 'Crossing 30% triggers the mandatory bid, on top of the threshold disclosure seen at level 2.',
      },
      {
        type: 'read',
        kicker: 'Defending yourself',
        title: 'Takeover defences',
        body: "- **Poison pill** (mainly in the US): if a buyer crosses a threshold, other shareholders can buy shares at a steep discount, diluting the raider.\n- **White knight**: finding a friendly buyer who makes a better offer.\n- **Double voting rights**: in France, since the Florange law of 2014, shares held in registered form for two years carry double votes by default, strengthening loyal shareholders.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Why does the law require an offer for 100% of the capital after crossing 30%?',
        options: [
          'To enrich the regulator',
          'So the new controlling shareholder does not capture the control premium alone: minority shareholders must be able to exit at the same price',
          'To prevent all takeovers',
          'To simplify listing',
        ],
        answer: 1,
        explain: 'Without this rule, you could quietly buy control from a few big shareholders at a premium and leave small investors stuck with a new master. Equal treatment, in action.',
      },
    ],
  },

  {
    id: 'droit-4-2',
    screens: [
      {
        type: 'read',
        kicker: "When the company can't pay",
        title: 'Insolvency',
        body: "Under French law, a company is in **cessation des paiements** (insolvency) when it can no longer meet its **due liabilities** (debts payable now) with its **available assets** (cash and what can be raised immediately).\n\nThe manager must then file with the court within **45 days**.",
        guide: 'lion',
      },
      {
        type: 'read',
        kicker: 'The tools',
        title: 'From the most discreet to the most radical',
        body: "French procedures (other countries have equivalents, such as Chapter 11 and Chapter 7 in the US):\n\n- **Mandat ad hoc** and **conciliation**: confidential negotiations with creditors, with a third party's help.\n- **Sauvegarde** (safeguard): before insolvency, to reorganise under court protection.\n- **Redressement judiciaire** (receivership): after insolvency, when a recovery is still possible.\n- **Liquidation judiciaire**: when there's no hope left; assets are sold to pay creditors.",
      },
      {
        type: 'quiz',
        question: 'A company sees serious trouble coming but is still paying its debts. Which procedures can it consider?',
        options: ['Liquidation only', 'Conciliation or safeguard', 'Receivership only', 'None, it has to wait'],
        answer: 1,
        explain: 'The earlier you act, the more value is left to save. French safeguard was created in 2005 precisely to encourage managers not to wait.',
      },
      {
        type: 'read',
        kicker: 'Who gets paid first?',
        title: 'The creditor ranking (simplified)',
        body: "1. **Employees**, for their last wages (with a wage guarantee fund).\n2. Court costs and some creditors whose claims arose **during** the proceedings.\n3. **Secured** creditors, from the sale price of the asset backing their claim.\n4. **Unsecured** creditors, pro rata.\n5. **Shareholders**, last.",
      },
      {
        type: 'number',
        question: 'In a liquidation, once employees and secured creditors have been paid, €600,000 is left. Unsecured creditors claim €1,500,000 in total. What percentage of their claim do they recover?',
        answer: 40,
        tolerance: 0.01,
        unit: '%',
        explain: '600,000 ÷ 1,500,000 = 40%. Each gets 40 cents per euro owed. Shareholders get nothing.',
      },
      {
        type: 'quiz',
        question: 'In a liquidation, what do shareholders usually get?',
        options: ['Their contribution back', 'Half their contribution', 'Usually nothing', 'Compensation from the state'],
        answer: 2,
        explain: "They come after every creditor. It's the flip side of limited liability: you can only lose your stake, but you often lose all of it.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Some see safeguard procedures as a favour to bad managers, at creditors\' expense. What is the main argument in their favour?',
        options: [
          'They always wipe out debts',
          'A company that keeps running is often worth far more than its assets sold off one by one: preserving that value can benefit creditors and employees too',
          "They're free",
          'They protect shareholders first',
        ],
        answer: 1,
        explain: "It's the difference between **going-concern value** and **liquidation value**. A working factory is worth more than machines sold at auction.",
      },
    ],
  },

  {
    id: 'droit-4-3',
    screens: [
      {
        type: 'read',
        kicker: 'Protecting yourself when lending',
        title: 'Security interests',
        body: "A **security** gives the creditor extra protection in case of default. Two families:\n\n- **personal**: a person commits to pay in the debtor's place (a **guarantee**, seen at level 1; an **on-demand guarantee**);\n- **real** (on assets): a **specific asset** is earmarked for repayment (a **mortgage** on property, a **pledge** of a securities account or a business, a **lien** on movable goods).",
        guide: 'lion',
      },
      {
        type: 'quiz',
        question: 'Your bank takes a mortgage on the house you buy with your loan. This is a…',
        options: ['Personal security', 'Real security (on an asset)', 'Moral security', 'Tax security'],
        answer: 1,
        explain: 'It covers a specific asset: if you default, the bank can have the house sold and be paid first from the proceeds.',
      },
      {
        type: 'read',
        kicker: 'Measuring the protection',
        title: 'Loan-to-value',
        body: "**LTV** (loan-to-value) compares the loan amount with the value of the asset securing it.\n\nThe lower it is, the better protected the lender: if the asset loses value, there's a **cushion** before the security no longer covers the debt.",
      },
      {
        type: 'number',
        question: 'A €200,000 loan is secured on a house valued at €250,000. What is the LTV, in %?',
        answer: 80,
        tolerance: 0.01,
        unit: '%',
        explain: "200,000 ÷ 250,000 = 80%. The house price can fall 20% before the security stops being enough.",
      },
      {
        type: 'read',
        kicker: 'Financial collateral',
        title: 'The haircut',
        body: "When you lend against **securities** (bonds, shares), you apply a **haircut**: you don't lend the full value of the security, to protect against a possible fall and the time it would take to sell it.\n\nCentral banks themselves lend to banks against securities, with haircuts that depend on their quality.",
      },
      {
        type: 'number',
        question: 'A bank pledges €1,000,000 of bonds as collateral, with a 10% haircut. What is the most it can borrow?',
        answer: 900000,
        tolerance: 0.5,
        unit: '€',
        explain: '1,000,000 × (1 − 10%) = €900,000.',
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Why is the haircut on shares usually much larger than on bonds from a very highly rated government?',
        options: [
          'Tradition',
          'Because shares are more volatile and can lose a lot of value before the lender has time to sell them',
          "Because shares don't earn anything",
          'Because the law forbids lending against shares',
        ],
        answer: 1,
        explain: "The haircut depends on the security's volatility, liquidity and risk. In a crisis, haircuts jump, forcing sales: another amplification mechanism seen in 2008.",
      },
    ],
  },

  // ───────────── Philosophy · L4 ─────────────
  {
    id: 'philo-4-1',
    screens: [
      {
        type: 'read',
        kicker: '2007',
        title: 'The black swan',
        body: "For centuries, Europeans took it as certain that all swans were white. In 1697, explorers found black ones in Australia. A single observation was enough to destroy a certainty.\n\nNassim Nicholas Taleb calls a **black swan** an event that is:\n\n- **rare** and unforeseen;\n- of enormous **impact**;\n- easily **explained after the fact**, as if it had been predictable.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'Two imaginary countries',
        title: 'Mediocristan and Extremistan',
        body: "- In **Mediocristan**, no single observation changes the average: adding the world's tallest person to a room of 1,000 people barely shifts the average height.\n- In **Extremistan**, one observation can dominate everything: adding the world's richest person to the same room makes the average income explode.\n\nFinance, book sales and city sizes live in Extremistan.",
      },
      {
        type: 'quiz',
        question: 'Which of these phenomena belongs to Extremistan?',
        options: ["Adults' weight", 'Calories eaten per day', "A year's book sales", 'Hours of sleep'],
        answer: 2,
        explain: 'A few bestsellers outsell thousands of other books combined. In these domains, the mean and the standard deviation mislead.',
      },
      {
        type: 'number',
        question: '1,000 people earn €30,000 a year on average. Someone earning €100 billion walks into the room. What is the new average income, in millions of euros? (2 decimals)',
        answer: 99.93,
        tolerance: 0.1,
        unit: '€m',
        explain: '(1,000 × 30,000 + 100,000,000,000) ÷ 1,001 ≈ €99.93m. The median has not moved: €30,000. Back to the lesson on mean and median.',
      },
      {
        type: 'read',
        kicker: 'The parable',
        title: 'The Thanksgiving turkey',
        body: "A turkey is fed every day for 1,000 days. Each day strengthens its belief that humans mean it well. Its confidence is at its **peak** the day before Thanksgiving.\n\nThe past guarantees nothing when risk is hidden. The calm years before 2008 looked a lot like the turkey's 1,000 days.",
      },
      {
        type: 'reflect',
        question: "Can you prepare for what you can't predict?",
        options: [
          {
            label: 'No, by definition',
            response: "Taleb would answer: you can't predict **which** black swan will come, but you can know there will be some. So you can avoid positions that die from them: excessive leverage, dependence on a single scenario.",
          },
          {
            label: 'Yes, with better models',
            response: "That's quantitative finance's hope. Taleb is sceptical: models calibrated on the past are blind precisely to what has never happened. Hence the importance of imagined crisis scenarios, not just observed ones.",
          },
          {
            label: 'Yes, by becoming robust rather than predicting',
            response: 'That\'s the heart of his next book, *Antifragile* (2012): build systems that withstand shocks, or even benefit from them, rather than betting on a forecast.',
          },
        ],
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'Taleb recommends a "barbell" strategy: about 90% in extremely safe investments, and 10% in very risky bets with a potentially huge payoff. What is the maximum loss of this portfolio?',
        options: ['About 10%', 'About 50%', '100%', 'Impossible to say'],
        answer: 0,
        explain: 'If all the risky bets fail, you lose about 10%. But if a favourable black swan comes along, the gain can be enormous. You avoid the middle: those "moderately risky" investments that can hide extreme losses.',
      },
    ],
  },

  {
    id: 'philo-4-2',
    screens: [
      {
        type: 'read',
        kicker: '1979',
        title: 'Prospect theory',
        body: "Daniel Kahneman and Amos Tversky showed that we don't judge wealth in absolute terms, but as **gains** and **losses** relative to a **reference point**.\n\nAbove all: a loss hurts about **twice as much** as an equal gain pleases. That's **loss aversion**. Kahneman received the Nobel prize in economics in 2002.",
        guide: 'paresseux',
      },
      {
        type: 'quiz',
        question: "You're offered a coin toss: heads, you win €100; tails, you lose €100. What do most people say?",
        options: ['They accept enthusiastically', 'They refuse, even though the game is fair', 'They ask to play 10 times', "They're indifferent"],
        answer: 1,
        explain: 'The expected value is zero, but the pain of losing €100 outweighs the pleasure of winning €100.',
      },
      {
        type: 'number',
        question: 'If a loss weighs twice as much as a gain (a loss-aversion coefficient of 2), how much must heads pay, at minimum, for someone to accept risking €100 on tails?',
        answer: 200,
        tolerance: 0.5,
        unit: '€',
        explain: '2 × 100 = €200. In experiments, many people do indeed ask for around €200 before accepting.',
      },
      {
        type: 'read',
        kicker: 'The inventory',
        title: "The investor's biases",
        body: "- **Overconfidence**: most people think they're above average, and trade too much.\n- **Anchoring**: clinging to a starting figure, such as the price you paid for a share.\n- **Disposition effect**: selling winners too soon and holding losers too long, so as not to \"lock in\" the loss.\n- **Herding**: buying because others are buying.",
      },
      {
        type: 'quiz',
        question: 'You own two stocks: A is up 30%, B is down 30%. You need cash and sell A "to lock in the gain", hoping B will recover. Which bias?',
        options: ['Anchoring only', 'The disposition effect', 'Overconfidence', 'None'],
        answer: 1,
        explain: "The rational decision depends on A's and B's future prospects (and tax), not on what you paid. The purchase price is a psychological reference point, not economic information.",
      },
      {
        type: 'read',
        kicker: 'Using biases for good',
        title: 'Nudges',
        body: "Richard Thaler (Nobel prize 2017) showed that choices can be designed to help people without forcing them: the **nudge**.\n\nA famous example: the *Save More Tomorrow* programme, where employees commit to saving part of their **future** pay rises. The loss is never felt, and saving rises sharply.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'A company automatically enrols its employees in its retirement savings plan (they can opt out with one click). Participation goes from 40% to 90%. Why?',
        options: [
          'Because the plan became more profitable',
          'Because of the default effect: inertia means most people keep the option they are presented with',
          "Because it's compulsory",
          'Because employees got paid more',
        ],
        answer: 1,
        explain: "Nothing changed in the plan's economics, only how the choice was presented. US studies in the 2000s measured gaps of this order of magnitude.",
      },
    ],
  },

  {
    id: 'philo-4-3',
    screens: [
      {
        type: 'read',
        kicker: 'Self-evident?',
        title: '"You have to pay your debts"',
        body: "In *Debt: The First 5,000 Years* (2011), David Graeber notes that this sentence is almost universally accepted as a **moral truism**. Yet it blends two things:\n\n- a **moral debt** (you owe someone something);\n- a **financial debt**, quantified, transferable, with interest.\n\nTurning a moral obligation into a precise number, he argues, has always had political consequences.",
        guide: 'paresseux',
      },
      {
        type: 'read',
        kicker: 'History shows it',
        title: 'Debts written off',
        body: "We saw it with the Mesopotamian kings. Closer to our time:\n\n- **1953**, the London Agreement: West Germany's external debt was cut by about half, easing its post-war recovery;\n- **2012**, Greece: private creditors accepted a loss of about **53.5%** on the face value of their bonds, the largest sovereign debt restructuring in history.",
      },
      {
        type: 'number',
        question: 'In 2012, about €206 billion of Greek bonds held by private investors were affected, with a 53.5% haircut. By how much was the debt reduced, in billions of euros? (to the nearest billion)',
        answer: 110,
        tolerance: 1,
        unit: '€bn',
        explain: "206 × 53.5% ≈ €110bn. A huge sum, which still wasn't enough on its own to make Greece's debt sustainable.",
      },
      {
        type: 'reflect',
        question: 'Should debts always be repaid?',
        options: [
          {
            label: 'Yes, otherwise credit disappears',
            response: 'A strong argument: if debts can be wiped out easily, nobody lends, or only at huge rates. Trust in contracts is a common good, and honest borrowers pay for the others.',
          },
          {
            label: 'Not when the debt has become impossible to repay',
            response: "The position of many economists: an unsustainable debt ends in default anyway, but after years of damage. Restructuring early can be better for everyone, creditors included. Germany in 1953 is the example often cited.",
          },
          {
            label: "It also depends on the lender's responsibility",
            response: 'If the lender lent recklessly, knowing the borrower could not repay, should it alone bear the consequences? That is the debate on creditor-side **moral hazard**, and on the notion of "odious debt".',
          },
        ],
      },
      {
        type: 'read',
        kicker: 'Both sides',
        title: 'Moral hazard, both ways',
        body: "- If debts are often written off, **borrowers** may be tempted to borrow too much.\n- If creditors are always rescued (by the state, the IMF), **lenders** may be tempted to lend without looking.\n\nA good restructuring rule must therefore make **both** bear part of the loss.",
      },
      {
        type: 'quiz',
        challenge: true,
        question: 'The Bible provides, every 50 years, for a "jubilee" in which debts are forgiven and land returned. Which older institution, seen in the History topic, does this echo?',
        options: [
          'The Florentine bill of exchange',
          'The misharum of the Mesopotamian kings, who cancelled debts',
          'The Bank of Amsterdam',
          'The Bretton Woods agreements',
        ],
        answer: 1,
        explain: 'From Mesopotamian tablets to Greece in 2012, the same question keeps coming back: what does a society do with debts that can no longer be paid? You now have the tools to debate it in finance, law, history and philosophy.',
      },
    ],
  },
]
