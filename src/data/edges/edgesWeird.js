const weirdEdges = [
  {
    id: "beastBond",
    name: "Beast Bond",
    type: "weird",
    description: "May spend Bennies for animals under her control.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "beastMaster",
    name: "Beast Master",
    type: "weird",
    description: "Animals like the hero and she has a pet of some sort.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "champion",
    name: "Champion",
    type: "weird",
    description: "+2 damage against supernaturally evil creatures.",
    req: {
      tier: "novice",
      skills: [{ id: "fighting", value: "d6" }],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "chi",
    name: "Chi",
    type: "weird",
    description:
      "Once per combat, reroll a failed attack, force an enemy to reroll a successful attack, or add +d6 to unarmed Fighting damage.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["martialWarrior"],
    },
  },
  {
    id: "dangerSense",
    name: "Danger Sense",
    type: "weird",
    description: "+2 to Notice rolls to sense ambushes or similar events.",
    req: {
      tier: "novice",
      skills: [{ id: "notice", value: "d6" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "healer",
    name: "Healer",
    type: "weird",
    description: "+2 to Healing rolls, magical or otherwise.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "liquidCourage",
    name: "Liquid Courage",
    type: "weird",
    description:
      "Alcohol increases Vigor one die type and ignores one level of Wound penalties, but gives −1 to Agility, Smarts, and related skills.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
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
