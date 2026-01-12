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
    id: "improved-block",
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
    description:
      "+1 Toughness; add d4 to unarmed damage (or increase die type if combined with Martial Artist or similar).",
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
    description:
      "Increase unarmed Strength damage a die type and Toughness another +1.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["brawler"],
    },
  },
  {
    id: "calculating",
    name: "Calculating",
    type: "combat",
    description:
      "Ignore up to 2 points of penalties on one action with an Action Card of Five or less.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "combat-reflexes",
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
    id: "counterattack",
    name: "Counterattack",
    type: "combat",
    description:
      "Free attack against one foe per turn who failed a Fighting roll.",
    req: {
      tier: "seasoned",
      skills: [{ id: "fighting", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "improved-counterattack",
    name: "Improved Counterattack",
    type: "combat",
    description:
      "As Counterattack, but against up to three failed attacks per turn.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["counterattack"],
    },
  },
  {
    id: "dead-shot",
    name: "Dead Shot",
    type: "combat",
    description:
      "On the first successful Athletics (throwing) or Shooting roll, double damage when dealt a Joker.",
    req: {
      tier: "novice",
      skills: [
        { id: "athletics", value: "d8" },
        { id: "shooting", value: "d8" },
      ],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "dodge",
    name: "Dodge",
    type: "combat",
    description: "−2 to be hit by ranged attacks.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "improved-dodge",
    name: "Improved Dodge",
    type: "combat",
    description: "+2 to Evasion totals.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["dodge"],
    },
  },
  {
    id: "double-tap",
    name: "Double Tap",
    type: "combat",
    description:
      "+1 to hit and damage when firing no more than RoF 1 per action.",
    req: {
      tier: "seasoned",
      skills: [{ id: "shooting", value: "d6" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "extraction",
    name: "Extraction",
    type: "combat",
    description:
      "One adjacent foe doesn’t get a free attack when you withdraw from close combat.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "improved-extraction",
    name: "Improved Extraction",
    type: "combat",
    description:
      "Up to three adjacent foes don’t get free attacks when you withdraw from combat.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["extraction"],
    },
  },
  {
    id: "feint",
    name: "Feint",
    type: "combat",
    description:
      "You may choose to make a foe resist with Smarts instead of Agility during a Fighting Test.",
    req: {
      tier: "novice",
      skills: [{ id: "fighting", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "first-strike",
    name: "First Strike",
    type: "combat",
    description:
      "Free Fighting attack once per round when a foe moves within Reach.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "improved-first-strike",
    name: "Improved First Strike",
    type: "combat",
    description:
      "Free Fighting attack against up to three foes when they move within Reach.",
    req: {
      tier: "heroic",
      skills: [],
      attributes: [],
      edges: ["first-strike"],
    },
  },
  {
    id: "frenzy",
    name: "Frenzy",
    type: "combat",
    description:
      "Roll a second Fighting die in one melee attack. Limited action.",
    req: {
      tier: "seasoned",
      skills: [{ id: "fighting", value: "d8" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "improved-frenzy",
    name: "Improved Frenzy",
    type: "combat",
    description:
      "Roll a third Fighting die in one melee attack. Limited action.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["frenzy"],
    },
  },
  {
    id: "giant-killer",
    name: "Giant Killer",
    type: "combat",
    description: "+1d6 damage against creatures three Sizes larger or more.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "hard-to-kill",
    name: "Hard to Kill",
    type: "combat",
    description:
      "Ignore Wound penalties when making Vigor rolls to avoid Bleeding Out.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "harder-to-kill",
    name: "Harder to Kill",
    type: "combat",
    description:
      "On death, roll a die; on an even result, the hero survives but is Incapacitated.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["hard-to-kill"],
    },
  },
  {
    id: "iron-jaw",
    name: "Iron Jaw",
    type: "combat",
    description: "+2 to Soak and Vigor rolls to avoid Knockout Blows.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "martial-artist",
    name: "Martial Artist",
    type: "combat",
    description:
      "+1 Unarmed Fighting; fists and feet are Natural Weapons; add d4 damage.",
    req: {
      tier: "novice",
      skills: [{ id: "fighting", value: "d6" }],
      attributes: [],
      edges: [],
    },
  },
  {
    id: "martial-warrior",
    name: "Martial Warrior",
    type: "combat",
    description:
      "+2 Unarmed Fighting; increase unarmed damage die type one step.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["martial-artist"],
    },
  },
  {
    id: "two-fisted",
    name: "Two-Fisted",
    type: "combat",
    description:
      "Make one extra Fighting roll with an off-hand melee weapon at no Multi-Action penalty.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
  {
    id: "two-gun-kid",
    name: "Two-Gun Kid",
    type: "combat",
    description:
      "Make one extra Shooting or Athletics (throwing) roll with an off-hand ranged weapon at no Multi-Action penalty.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
  },
];

export default combatEdges;
