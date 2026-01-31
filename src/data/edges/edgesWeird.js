const weirdEdges = [
  {
    id: "beastBond",
    name: "Beast Bond",
    type: "weird",
    description: "The hero may spend Bennies for animals under her control.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "beastMaster",
    name: "Beast Master",
    type: "weird",
    description: "Animals like your hero and he has a pet of some sort.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["spirit"],
      edges: [],
    },
    reqDisplay: "N, Spirit d8",
  },
  {
    id: "champion",
    name: "Champion",
    type: "combat",
    description: "+2 damage vs. supernaturally evil creatures.",
    req: {
      tier: "novice",
      skills: ["fighting"],
      attributes: ["spirit"],
      edges: [],
    },
    reqDisplay: "N, Spirit d8, Fighting d6",
  },
  {
    id: "chi",
    name: "Chi",
    type: "combat",
    description:
      "Once per combat, reroll a failed attack, make an enemy reroll a successful attack, or add +d6 to an unarmed Fighting attack.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["martialWarrior"],
    },
    reqDisplay: "V, Martial Warrior",
  },
  {
    id: "dangerSense",
    name: "Danger Sense",
    type: "weird",
    description: "Notice roll at +2 to sense ambushes or similar events.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "healer",
    name: "Healer",
    type: "weird",
    description: "+2 to Healing rolls, magical or otherwise.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["spirit"],
      edges: [],
    },
    reqDisplay: "N, Spirit d8",
  },
  {
    id: "liquidCourage",
    name: "Liquid Courage",
    type: "weird",
    description:
      "Alcohol increases Vigor a die type and ignores one level of Wound penalty; −1 to Agility, Smarts, and related skills.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["vigor"],
      edges: [],
    },
    reqDisplay: "N, Vigor d8",
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
    reqDisplay: "N, Luck",
  },
];

export default weirdEdges;
