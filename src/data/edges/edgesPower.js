const powerEdges = [
  {
    id: "artificer",
    name: "Artificer",
    type: "power",
    description: "Allows the creation of Arcane Devices.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "channeling",
    name: "Channeling",
    type: "power",
    description: "Reduce Power Point cost by 1 with a raise on activation.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "concentration",
    name: "Concentration",
    type: "power",
    description: "Double the Duration of non-Instant powers.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "newPowers",
    name: "New Powers",
    type: "power",
    description: "Gain two new powers.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "powerPoints",
    name: "Power Points",
    type: "power",
    description: "Gain 5 additional Power Points (once per Rank).",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "rapidRecharge",
    name: "Rapid Recharge",
    type: "power",
    description: "Recover 10 Power Points per hour.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "spirit", value: "d6" }],
      edges: [],
    },
  },

  {
    id: "improvedRapidRecharge",
    name: "Improved Rapid Recharge",
    type: "power",
    description: "Recover 20 Power Points per hour.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["rapidRecharge"],
    },
  },

  {
    id: "wizard",
    name: "Wizard",
    type: "power",
    description: "Spend 1 extra Power Point to change a spell’s Trapping.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
];

export default powerEdges;
