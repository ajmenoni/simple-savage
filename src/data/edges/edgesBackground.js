const backgroundEdges = [
  {
    id: "alertness",
    name: "Alertnes",
    type: "background",
    description: "+2 to Notice Rolls",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "abmidextrous",
    name: "Ambidextrous",
    type: "background",
    description: "Ignore -2 penatly when making Trait rolls with off-hand.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        {
          id: "athletics",
          value: "d8",
        },
      ],
      edges: [],
    },
  },
  {
    id: "arcaneResistance",
    name: "Arcane Resistance",
    type: "background",
    description:
      "Enemy arcane skills targeting the hero suffer a −2 penalty; magical damage is reduced by 2.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "improvedArcaneResistance",
    name: "Improved Arcane Resistance",
    type: "background",
    description:
      "As Arcane Resistance, but penalty increases to −4 and magical damage is reduced by 4.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["arcaneResistance"],
    },
  },

  {
    id: "aristocrat",
    name: "Aristocrat",
    type: "background",
    description: "+2 to Common Knowledge and networking with the upper class.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "attractive",
    name: "Attractive",
    type: "background",
    description: "+1 to Performance and Persuasion rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d6" }],
      edges: [],
    },
  },

  {
    id: "veryAttractive",
    name: "Very Attractive",
    type: "background",
    description: "+2 to Performance and Persuasion rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["attractive"],
    },
  },

  {
    id: "berserk",
    name: "Berserk",
    type: "background",
    description:
      "After being Shaken or Wounded, melee attacks must be Wild Attacks. +1 die type Strength, +2 Toughness, ignore one Wound penalty. Critical Failure on Fighting hits random target. Fatigue every five rounds; Smarts −2 to end rage.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "brave",
    name: "Brave",
    type: "background",
    description: "+2 to Fear checks and −2 on the Fear Table.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d6" }],
      edges: [],
    },
  },

  {
    id: "brawny",
    name: "Brawny",
    type: "background",
    description:
      "Size +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength.",
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
    id: "brute",
    name: "Brute",
    type: "background",
    description:
      "Athletics is linked to Strength instead of Agility. Thrown weapon ranges increase.",
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
    id: "charismatic",
    name: "Charismatic",
    type: "background",
    description: "Free reroll when using Persuasion.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "elan",
    name: "Elan",
    type: "background",
    description: "+2 when spending a Benny to reroll a Trait roll.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "fame",
    name: "Fame",
    type: "background",
    description:
      "+1 Persuasion when recognized; double usual Performance fees.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "famous",
    name: "Famous",
    type: "background",
    description:
      "+2 Persuasion when recognized; five times usual Performance fees.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["fame"],
    },
  },

  {
    id: "fastHealer",
    name: "Fast Healer",
    type: "background",
    description:
      "+2 to Vigor rolls for natural healing; check every three days.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "fleetFooted",
    name: "Fleet-Footed",
    type: "background",
    description: "Pace +2; running die increases one step.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d6" }],
      edges: [],
    },
  },

  {
    id: "luck",
    name: "Luck",
    type: "background",
    description: "+1 Benny at the start of each session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "greatLuck",
    name: "Great Luck",
    type: "background",
    description: "+2 Bennies at the start of each session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["luck"],
    },
  },

  {
    id: "quick",
    name: "Quick",
    type: "background",
    description: "Discard and redraw Action Cards of 5 or lower.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "rich",
    name: "Rich",
    type: "background",
    description: "Three times starting funds and $150K annual salary.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "filthyRich",
    name: "Filthy Rich",
    type: "background",
    description: "Five times starting funds and $500K annual salary.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["rich"],
    },
  },
];

export default backgroundEdges;
