const weirdEdges = [
  {
    id: "dangerSense",
    name: "Danger Sense",
    type: "weird",
    description: "+2 Notice to detect ambushes or traps.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "healer",
    name: "Healer",
    type: "weird",
    description: "+2 to Healing rolls, magical or mundane.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },

  {
    id: "scavenger",
    name: "Scavenger",
    type: "weird",
    description: "May find a needed item once per encounter.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["luck"],
    },
  },
];

export default weirdEdges;
