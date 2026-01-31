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
    reqDisplay: "S, Fighting d8",
  },
  {
    id: "improvedBlock",
    name: "Improved Block",
    type: "combat",
    description: "+2 Parry; ignore 2 points of Gang Up bonus.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["block"],
    },
    reqDisplay: "V, Block",
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
    reqDisplay: "N, St d8, V d8",
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
    reqDisplay: "S, Brawler",
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
    reqDisplay: "N, Sm d8",
  },
  {
    id: "combatReflexes",
    name: "Combat Reflexes",
    type: "combat",
    description: "+2 Spirit to recover from being Shaken or Stunned.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "S",
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
    reqDisplay: "S, Fighting d8",
  },
  {
    id: "improvedCounterattack",
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
    reqDisplay: "V, Counterattack",
  },
  {
    id: "deadShot",
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
    reqDisplay: "WildCard, N, Athletics or Shooting d8",
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
    reqDisplay: "S, A d8",
  },
  {
    id: "improvedDodge",
    name: "Improved Dodge",
    type: "combat",
    description: "+2 to Evasion totals.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["dodge"],
    },
    reqDisplay: "S, Dodge",
  },
  {
    id: "doubleTap",
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
    reqDisplay: "S, Shooting d6",
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
    reqDisplay: "N, A d8",
  },
  {
    id: "improvedExtraction",
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
    reqDisplay: "S, Extraction",
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
    reqDisplay: "N, Fighting d8",
  },
  {
    id: "firstStrike",
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
    reqDisplay: "N, A d8",
  },
  {
    id: "improvedFirstStrike",
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
    reqDisplay: "H, First Strike",
  },
  {
    id: "freeRunner",
    name: "Free Runner",
    type: "combat",
    description:
      "Ignore Difficult Ground and add +2 Athletics in foot chases and Athletics (climbing)",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "Athletics", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, A d8",
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
    reqDisplay: "S, Fighting d8",
  },
  {
    id: "improvedFrenzy",
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
    reqDisplay: "V, Frenzy",
  },
  {
    id: "giantKiller",
    name: "Giant Killer",
    type: "combat",
    description: "+1d6 damage against creatures three Sizes larger or more.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "V",
  },
  {
    id: "hardToKill",
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
    reqDisplay: "N, Sp d8",
  },
  {
    id: "harderToKill",
    name: "Harder to Kill",
    type: "combat",
    description:
      "On death, roll a die; on an even result, the hero survives but is Incapacitated.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["hardToKill"],
    },
    reqDisplay: "V, Hard to Kill",
  },
  {
    id: "improvisationalFighter",
    name: "Improvisational Fighter",
    type: "combat",
    description: "Ignore -2 penalty when attacking with improvised weapons",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "smarts", value: "d6" }],
      edges: [],
    },
  },
  {
    id: "ironJaw",
    name: "Iron Jaw",
    type: "combat",
    description: "+2 to Soak and Vigor rolls to avoid Knockout Blows.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, V d8",
  },
  {
    id: "killerInstinct",
    name: "Killer Instinct",
    type: "combat",
    description:
      "The hero gets a free reroll in any opposed Test he initiates.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "S",
  },
  {
    id: "levelHeaded",
    name: "Level Headed",
    type: "combat",
    description:
      "Draw an additional Action Card each round in combat and choose which one to use",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [{ id: "smarts", value: "d8" }],
      edges: [],
    },
    reqDisplay: "S, Sm d8",
  },
  {
    id: "improvedLevelHeaded",
    name: "Improved Level Headed",
    type: "combat",
    description:
      "Draw two additional Action Cards each round in combat and choose which one to use.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["levelHeaded"],
    },
    reqDisplay: "S, Level Headed",
  },
  {
    id: "marksman",
    name: "Marksman",
    type: "combat",
    description:
      "Ignore up to 2 points of penalties from Range, Cover, Called Shot, Scale, or Speed; or add +1 to first Athletics (throwing) or Shooting roll. Character may not move or fire greater than RoF 1.",
    req: {
      tier: "seasoned",
      skills: [
        { id: "athletics", value: "d8" },
        { id: "shooting", value: "d8" },
      ],
      edges: [],
    },
    reqDisplay: "S, Athletics or Shooting d8",
  },
  {
    id: "martialArtist",
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
    reqDisplay: "N, Fighting d6",
  },
  {
    id: "martialWarrior",
    name: "Martial Warrior",
    type: "combat",
    description:
      "+2 Unarmed Fighting; increase unarmed damage die type one step.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["martialArtist"],
    },
    reqDisplay: "S, Martial Artist",
  },
  {
    id: "mightyBlow",
    name: "Mighty Blow",
    type: "combat",
    description:
      "On first successful Fighting roll, double damage when dealt a Joker.",
    req: {
      tier: "wildcard",
      skills: ["fighting"],
      attributes: [],
      edges: [],
    },
    reqDisplay: "WC, Fighting d8",
  },
  {
    id: "nervesOfSteel",
    name: "Nerves of Steel",
    type: "combat",
    description: "Ignore one level of Wound penalties.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["vigor"],
      edges: [],
    },
    reqDisplay: "N, Vigor d8",
  },
  {
    id: "improvedNervesOfSteel",
    name: "Improved Nerves of Steel",
    type: "combat",
    description: "Ignore up to two levels of Wound penalties.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["nervesOfSteel"],
    },
    reqDisplay: "N, Nerves of Steel",
  },
  {
    id: "noMercy",
    name: "No Mercy",
    type: "combat",
    description: "+2 damage when spending a Benny to reroll damage.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "S",
  },
  {
    id: "rapidFire",
    name: "Rapid Fire",
    type: "combat",
    description: "Increase RoF by 1 for one Shooting attack per turn.",
    req: {
      tier: "seasoned",
      skills: ["shooting"],
      attributes: [],
      edges: [],
    },
    reqDisplay: "S, Shooting d6",
  },
  {
    id: "improvedRapidFire",
    name: "Improved Rapid Fire",
    type: "combat",
    description: "Increase RoF by 1 for up to two Shooting attacks per turn.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["rapidFire"],
    },
    reqDisplay: "V, Rapid Fire",
  },
  {
    id: "rockAndRoll",
    name: "Rock and Roll!",
    type: "combat",
    description:
      "Ignore the Recoil penalty when firing weapons with a RoF of 2 or more. Character may not move.",
    req: {
      tier: "seasoned",
      skills: ["shooting"],
      attributes: [],
      edges: [],
    },
    reqDisplay: "S, Shooting d8",
  },
  {
    id: "steadyHands",
    name: "Steady Hands",
    type: "combat",
    description:
      "Ignore Unstable Platform penalty; reduce running penalty to –1.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["agility"],
      edges: [],
    },
    reqDisplay: "N, Agility d8",
  },
  {
    id: "sweep",
    name: "Sweep",
    type: "combat",
    description:
      "Fighting roll with two-handed weapon (–2 without) to hit all targets in weapon’s Reach. Limited action.",
    req: {
      tier: "novice",
      skills: ["fighting"],
      attributes: ["strength"],
      edges: [],
    },
    reqDisplay: "N, Strength d8, Fighting d8",
  },
  {
    id: "improvedSweep",
    name: "Improved Sweep",
    type: "combat",
    description: "As Sweep, but attack can avoid allies. Limited action.",
    req: {
      tier: "veteran",
      skills: [],
      attributes: [],
      edges: ["sweep"],
    },
    reqDisplay: "V, Sweep",
  },
  {
    id: "trademarkWeapon",
    name: "Trademark Weapon",
    type: "combat",
    description:
      "+1 to Athletics (throwing), Fighting, or Shooting total with a specific weapon; +1 Parry while weapon is readied.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N, d8 in related skill",
  },
  {
    id: "improvedTrademarkWeapon",
    name: "Improved Trademark Weapon",
    type: "combat",
    description: "The attack and Parry bonus increases to +2.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["trademarkWeapon"],
    },
    reqDisplay: "S, Trademark Weapon",
  },
  {
    id: "twoFisted",
    name: "Two-Fisted",
    type: "combat",
    description:
      "Make one extra Fighting roll with a second melee weapon in the off-hand at no Multi-Action penalty.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["agility"],
      edges: [],
    },
    reqDisplay: "N, Agility d8",
  },
  {
    id: "twoGunKid",
    name: "Two-Gun Kid",
    type: "combat",
    description:
      "Make one extra Shooting or Athletics (throwing) roll with a second ranged weapon in the off-hand at no Multi-Action penalty.",
    req: {
      tier: "novice",
      skills: [],
      attributes: ["agility"],
      edges: [],
    },
    reqDisplay: "N, Agility d8",
  },
];

export default combatEdges;
