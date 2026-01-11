const socialEdges = [
  {
    id: "connections",
    name: "Connections",
    type: "social",
    description: "Contacts provide aid or favors once per session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "commonBond",
    name: "Common Bond",
    type: "social",
    description: "The hero may freely give Bennies to others.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
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
];

export default socialEdges;
