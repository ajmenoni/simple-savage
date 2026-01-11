const professionalEdges = [
  {
    id: "ace",
    name: "Ace",
    type: "professional",
    description: "Spend Bennies to Soak damage for vehicles; ignore penalties.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "assassin",
    name: "Assassin",
    type: "professional",
    description: "+2 damage when foe is Vulnerable or has The Drop.",
    req: {
      tier: "novice",
      skills: [
        { id: "fighting", value: "d6" },
        { id: "stealth", value: "d8" },
      ],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "investigator",
    name: "Investigator",
    type: "professional",
    description: "+2 to Research and certain Notice rolls.",
    req: {
      tier: "novice",
      skills: [{ id: "research", value: "d8" }],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "jackOfAllTrades",
    name: "Jack-of-all-Trades",
    type: "professional",
    description: "Gain d4 in a skill until replaced.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "smarts", value: "d10" }],
      edges: [],
    },
  },

  {
    id: "soldier",
    name: "Soldier",
    type: "professional",
    description: "Strength counts one die type higher for Encumbrance.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        { id: "strength", value: "d6" },
        { id: "vigor", value: "d6" },
      ],
      edges: [],
    },
  },
];

export default professionalEdges;
