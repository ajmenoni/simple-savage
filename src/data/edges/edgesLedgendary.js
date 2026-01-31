const legendaryEdges = [
  {
    id: "followers",
    name: "Followers",
    type: "legendary",
    description: "The hero has five followers.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "WC, L",
  },
  {
    id: "professional",
    name: "Professional",
    type: "legendary",
    description: "Increase a chosen Trait and its maximum by one die type.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "L, Max Trait",
  },
  {
    id: "expert",
    name: "Expert",
    type: "legendary",
    description: "Increase a chosen Trait and its maximum by one die type.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: ["professional"],
    },
    reqDisplay: "L, Professional in Trait",
  },
  {
    id: "master",
    name: "Master",
    type: "legendary",
    description:
      "The character’s Wild Die becomes a d10 when using a chosen Trait.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: ["expert"],
    },
    reqDisplay: "WC, L, Expert in Trait",
  },
  {
    id: "sidekick",
    name: "Sidekick",
    type: "legendary",
    description: "The hero gains a Wild Card sidekick.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "WC, L",
  },
  {
    id: "toughAsNails",
    name: "Tough as Nails",
    type: "legendary",
    description: "The hero can take four Wounds before being Incapacitated.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
      edges: [],
    },
    reqDisplay: "L, V d8",
  },
  {
    id: "tougherThanNails",
    name: "Tougher than Nails",
    type: "legendary",
    description: "The hero can take five Wounds before being Incapacitated.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [{ id: "vigor", value: "d12" }],
      edges: ["toughAsNails"],
    },
    reqDisplay: "L, Tough as Nails, V d12",
  },
  {
    id: "weaponMaster",
    name: "Weapon Master",
    type: "legendary",
    description: "+1 Parry; Fighting bonus damage die becomes d8.",
    req: {
      tier: "legendary",
      skills: [{ id: "fighting", value: "d12" }],
      attributes: [],
      edges: [],
    },
    reqDisplay: "L, Fighting d12",
  },
  {
    id: "masterOfArms",
    name: "Master of Arms",
    type: "legendary",
    description:
      "Parry increases by another +1; Fighting bonus damage die becomes d10.",
    req: {
      tier: "legendary",
      skills: [],
      attributes: [],
      edges: ["weaponMaster"],
    },
    reqDisplay: "L, Weapon Master",
  },
];

export default legendaryEdges;
