const professionalEdges = [
  {
    id: "ace",
    name: "Ace",
    type: "professional",
    description:
      "May spend Bennies to Soak damage for vehicles and ignore up to 2 points of penalties.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "acrobat",
    name: "Acrobat",
    type: "professional",
    description: "Free reroll on acrobatic Athletics attempts.",
    req: {
      tier: "novice",
      skills: [{ id: "athletics", value: "d8" }],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "combatAcrobat",
    name: "Combat Acrobat",
    type: "professional",
    description: "−1 to be hit by ranged and melee attacks.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["acrobat"],
    },
  },
  {
    id: "assassin",
    name: "Assassin",
    type: "professional",
    description:
      "+2 damage against foes when they are Vulnerable or when the assassin has The Drop.",
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
    description: "+2 to Research and certain types of Notice rolls.",
    req: {
      tier: "novice",
      skills: [{ id: "research", value: "d8" }],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "jackOfAllTrades",
    name: "Jack-of-All-Trades",
    type: "professional",
    description: "Gain a d4 in a skill (or d6 with a raise) until replaced.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "smarts", value: "d10" }],
      edges: [],
    },
  },
  {
    id: "mcGyver",
    name: "McGyver",
    type: "professional",
    description: "Quickly create improvised devices from scraps.",
    req: {
      tier: "novice",
      skills: [
        { id: "repair", value: "d6" },
        { id: "notice", value: "d8" },
      ],
      attributes: [{ id: "smarts", value: "d6" }],
      edges: [],
    },
  },
  {
    id: "mrFixIt",
    name: "Mr. Fix It",
    type: "professional",
    description: "+2 to Repair rolls; half the time required with a raise.",
    req: {
      tier: "novice",
      skills: [{ id: "repair", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "scholar",
    name: "Scholar",
    type: "professional",
    description: "+2 to any one knowledge skill.",
    req: {
      tier: "novice",
      skills: [{ id: "research", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "soldier",
    name: "Soldier",
    type: "professional",
    description:
      "Strength is one die type higher for Encumbrance and Minimum Strength. Reroll Vigor rolls against environmental hazards.",
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
  {
    id: "thief",
    name: "Thief",
    type: "professional",
    description:
      "+1 Thievery; Athletics rolls to climb; Stealth in urban environments.",
    req: {
      tier: "novice",
      skills: [
        { id: "stealth", value: "d6" },
        { id: "thievery", value: "d6" },
      ],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "woodsman",
    name: "Woodsman",
    type: "professional",
    description: "+2 to Survival and Stealth in the wilds.",
    req: {
      tier: "novice",
      skills: [{ id: "survival", value: "d8" }],
      attributes: [{ id: "spirit", value: "d6" }],
      edges: [],
    },
  },
];

export default professionalEdges;
