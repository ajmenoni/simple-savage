const legendaryEdges = [
  {
    id: "followers",
    name: "Followers",
    type: "legendary",
    description: "The hero gains five followers.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "professionalLegendary",
    name: "Professional",
    type: "legendary",
    description: "Increase a Trait and its limit one step.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: [],
    },
  },

  {
    id: "expert",
    name: "Expert",
    type: "legendary",
    description: "Increase a Trait and its limit another step.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: ["professionalLegendary"],
    },
  },

  {
    id: "master",
    name: "Master",
    type: "legendary",
    description: "Wild Die becomes d10 for a chosen Trait.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: ["expert"],
    },
  },
];

export default legendaryEdges;
