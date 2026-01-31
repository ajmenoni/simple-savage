const leadershipEdges = [
  {
    id: "command",
    name: "Command",
    type: "leadership",
    description: "+1 to Extras’ Shaken or Stunned recovery rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "smarts", value: "d6" }],
      edges: [],
    },
    reqDisplay: "N, Sm d6",
  },

  {
    id: "commandPresence",
    name: "Command Presence",
    type: "leadership",
    description: "Command Range increases to 10″ (20 yards).",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["command"],
    },
    reqDisplay: "S, Command",
  },

  {
    id: "fervor",
    name: "Fervor",
    type: "leadership",
    description: "Extras in range add +1 to their Fighting damage rolls.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: ["command"],
    },
    reqDisplay: "V, Sp d8, Command",
  },

  {
    id: "holdTheLine",
    name: "Hold the Line!",
    type: "leadership",
    description: "+1 Toughness to Extras in Command Range.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: ["command"],
    },
    reqDisplay: "S, Sm d8, Command",
  },

  {
    id: "inspire",
    name: "Inspire",
    type: "leadership",
    description:
      "Make a Battle roll to Support one Trait roll for Extras in range.",
    req: {
      tier: "seasoned",
      skills: [{ id: "battle", value: "d6" }],
      attributes: [],
      edges: ["command"],
    },
    reqDisplay: "S, Command",
  },

  {
    id: "naturalLeader",
    name: "Natural Leader",
    type: "leadership",
    description: "Leadership Edges now apply to Wild Cards.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: ["command"],
    },
    reqDisplay: "S, Sp d8, Command",
  },

  {
    id: "tactician",
    name: "Tactician",
    type: "leadership",
    description:
      "Draw an extra Action Card each turn and assign it to an Extra.",
    req: {
      tier: "seasoned",
      skills: [{ id: "battle", value: "d6" }],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: ["command"],
    },
    reqDisplay: "S, Sm d8, Command, Battle d6",
  },

  {
    id: "masterTactician",
    name: "Master Tactician",
    type: "leadership",
    description: "Draw and distribute two extra Action Cards instead of one.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["tactician"],
    },
    reqDisplay: "V, Tactician",
  },
];

export default leadershipEdges;
