const combatEdges = [
  {
    id: "block",
    name: "Block",
    type: "combat",
    description: "+1 Parry; ignore 1 point of Gang Up bonus.",
    req: {
      tier: "seasoned",
      skills: [{ id: "fighting", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "improvedBlock",
    name: "Improved Block",
    type: "combat",
    description: "+2 Parry; ignore 2 points of Gang Up bonus.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["block"],
    },
  },

  {
    id: "brawler",
    name: "Brawler",
    type: "combat",
    description: "+1 Toughness; add d4 to unarmed damage.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        { id: "strength", value: "d8" },
        { id: "vigor", value: "d8" },
      ],
      edges: [],
    },
  },

  {
    id: "bruiser",
    name: "Bruiser",
    type: "combat",
    description: "Increase unarmed Strength damage a die type; Toughness +1.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["brawler"],
    },
  },

  {
    id: "combatReflexes",
    name: "Combat Reflexes",
    type: "combat",
    description: "+2 Spirit to recover from being Shaken or Stunned.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "frenzy",
    name: "Frenzy",
    type: "combat",
    description: "Roll a second Fighting die in one melee attack.",
    req: {
      tier: "seasoned",
      skills: [{ id: "fighting", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "improvedFrenzy",
    name: "Improved Frenzy",
    type: "combat",
    description: "Roll a third Fighting die in one melee attack.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["frenzy"],
    },
  },
];

export default combatEdges;
