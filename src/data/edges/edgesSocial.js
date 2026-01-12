const socialEdges = [
  {
    id: "bolster",
    name: "Bolster",
    type: "social",
    description: "May remove Distracted or Vulnerable state after a Test.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "commonBond",
    name: "Common Bond",
    type: "social",
    description: "May freely give Bennies to others.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
      wildcard: true,
    },
  },
  {
    id: "connections",
    name: "Connections",
    type: "social",
    description: "Contacts provide aid or other favors once per session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "humiliate",
    name: "Humiliate",
    type: "social",
    description: "Free reroll when making Taunt rolls.",
    req: {
      tier: "novice",
      skills: [{ id: "taunt", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "menacing",
    name: "Menacing",
    type: "social",
    description: "+2 to Intimidation rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "provoke",
    name: "Provoke",
    type: "social",
    description: "May provoke foes with a raise on a Taunt roll.",
    req: {
      tier: "novice",
      skills: [{ id: "taunt", value: "d6" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "rabbleRouser",
    name: "Rabble-Rouser",
    type: "social",
    description:
      "Affect all foes in a Medium Blast Template with an Intimidation or Taunt Test. Limited action.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "reliable",
    name: "Reliable",
    type: "social",
    description: "Free reroll when making Support rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "retort",
    name: "Retort",
    type: "social",
    description:
      "A raise when resisting a Taunt or Intimidation attack makes the foe Distracted.",
    req: {
      tier: "novice",
      skills: [{ id: "taunt", value: "d6" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "streetwise",
    name: "Streetwise",
    type: "social",
    description: "+2 to Common Knowledge and criminal networking.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "smarts", value: "d6" }],
      edges: [],
    },
  },
  {
    id: "strongWilled",
    name: "Strong Willed",
    type: "social",
    description: "+2 to resist Smarts- or Spirit-based Tests.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "ironWill",
    name: "Iron Will",
    type: "social",
    description: "Bonus applies to resisting and recovery from powers.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["brave", "strongWilled"],
    },
  },
  {
    id: "workTheRoom",
    name: "Work the Room",
    type: "social",
    description:
      "Roll a second die when Supporting via Performance or Persuasion and apply result to an additional ally. Limited action.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "workTheCrowd",
    name: "Work the Crowd",
    type: "social",
    description: "As Work the Room, but roll a third die. Limited action.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["workTheRoom"],
    },
  },
];

export default socialEdges;
