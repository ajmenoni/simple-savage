const backgroundEdges = [
  {
    id: "alertness",
    name: "Alertnes",
    type: "background",
    description: "+2 to Notice Rolls",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "gifted",
    name: "Arcane Background [Gifted]",
    type: "background",
    arcaneSkill: "Focus (Spirit)",
    startingPowers: "1",
    powerPoints: "15",
    description:
      "The character has innate abilities that don’t fit into the usual tropes of magic, miracles, or psionics. Their powers may be low-level super powers, divine gifts, or even alien abilities, and are often very unusual or unique for their setting.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "magic",
    name: "Arcane Background [Magic]",
    type: "background",
    arcaneSkill: "Spellcasting (Smarts)",
    startingPowers: "3",
    powerPoints: "10",
    description:
      "Magicians range from powerful wizards to vile cultists. They draw on raw supernatural energy to fuel their eldritch fires. This energy infuses the worlds in which they live, and is drawn forth with gestures, words of power, or ancient runes.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "miracles",
    name: "Arcane Background [Miracles]",
    type: "background",
    arcaneSkill: "Faith (Spirit)",
    startingPowers: "3",
    powerPoints: "10",
    description:
      "Those who invoke miracles channel divine power from gods, spirits, or nature, usually through prayers or sacred rituals. They serve as champions of their faith, often bound by religious Hindrances like Vow or Obligation, and may have Connections within their religion who can aid them when their divine strength falters.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "psionics",
    name: "Arcane Background [Psionics]",
    type: "background",
    arcaneSkill: "Psionics (Spirit)",
    startingPowers: "3",
    powerPoints: "10",
    description:
      "Psionicists tap into their own mental energy to manipulate matter, read minds, and far more. Some are agents in the employ of a vast government agency, while others are often on the run from them! Some may have years of training or they might have developed their incredible powers in isolation.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "weirdScience",
    name: "Arcane Background [Weird Science]",
    type: "background",
    arcaneSkill: "Weird Science (Smarts)",
    startingPowers: "2",
    powerPoints: "15",
    description:
      "Weird scientists wield inventions that exceed the setting’s normal tech level, powered by bizarre fuels, alien tech, or sheer genius. Their powers are always tied to a specific device, which they must have on hand to use, and only the inventor can activate it—the “magic” comes from them, not the gadget itself. Creating devices that others can use is possible, but requires special rules like Arcane Devices and the Artificer Edge.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },
  {
    id: "abmidextrous",
    name: "Ambidextrous",
    type: "background",
    description: "Ignore -2 penatly when making Trait rolls with off-hand.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        {
          id: "athletics",
          value: "d8",
        },
      ],
      edges: [],
    },
    reqDisplay: "N A d8",
  },
  {
    id: "arcaneResistance",
    name: "Arcane Resistance",
    type: "background",
    description:
      "Enemy arcane skills targeting the hero suffer a −2 penalty; magical damage is reduced by 2.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, Sp d8",
  },

  {
    id: "improvedArcaneResistance",
    name: "Improved Arcane Resistance",
    type: "background",
    description:
      "As Arcane Resistance, but penalty increases to −4 and magical damage is reduced by 4.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["arcaneResistance"],
    },
    reqDisplay: "N, Arcane Resistance",
  },

  {
    id: "aristocrat",
    name: "Aristocrat",
    type: "background",
    description: "+2 to Common Knowledge and networking with the upper class.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "attractive",
    name: "Attractive",
    type: "background",
    description: "+1 to Performance and Persuasion rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d6" }],
      edges: [],
    },
    reqDisplay: "N, V d6",
  },

  {
    id: "veryAttractive",
    name: "Very Attractive",
    type: "background",
    description: "+2 to Performance and Persuasion rolls.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["attractive"],
    },
    reqDisplay: "N, Attractive",
  },

  {
    id: "berserk",
    name: "Berserk",
    type: "background",
    description:
      "After being Shaken or Wounded, melee attacks must be Wild Attacks. +1 die type Strength, +2 Toughness, ignore one Wound penalty. Critical Failure on Fighting hits random target. Fatigue every five rounds; Smarts −2 to end rage.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "brave",
    name: "Brave",
    type: "background",
    description: "+2 to Fear checks and −2 on the Fear Table.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d6" }],
      edges: [],
    },
    reqDisplay: "N, Sp d6",
  },

  {
    id: "brawny",
    name: "Brawny",
    type: "background",
    description:
      "Size +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        { id: "strength", value: "d6" },
        { id: "vigor", value: "d6" },
      ],
      edges: [],
    },
    reqDisplay: "N, St d6, V d6",
  },

  {
    id: "brute",
    name: "Brute",
    type: "background",
    description:
      "Athletics is linked to Strength instead of Agility. Thrown weapon ranges increase.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [
        { id: "strength", value: "d6" },
        { id: "vigor", value: "d6" },
      ],
      edges: [],
    },
    reqDisplay: "N, St d6, V d6",
  },

  {
    id: "charismatic",
    name: "Charismatic",
    type: "background",
    description: "Free reroll when using Persuasion.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, Sp d8",
  },

  {
    id: "elan",
    name: "Elan",
    type: "background",
    description: "+2 when spending a Benny to reroll a Trait roll.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "spirit", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, Sp d8",
  },

  {
    id: "fame",
    name: "Fame",
    type: "background",
    description:
      "+1 Persuasion when recognized; double usual Performance fees.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "famous",
    name: "Famous",
    type: "background",
    description:
      "+2 Persuasion when recognized; five times usual Performance fees.",
    req: {
      tier: "seasoned",
      skills: [],
      attributes: [],
      edges: ["fame"],
    },
    reqDisplay: "S, Fame",
  },

  {
    id: "fastHealer",
    name: "Fast Healer",
    type: "background",
    description:
      "+2 to Vigor rolls for natural healing; check every three days.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "vigor", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, V d8",
  },

  {
    id: "fleetFooted",
    name: "Fleet-Footed",
    type: "background",
    description: "Pace +2; running die increases one step.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d6" }],
      edges: [],
    },
    reqDisplay: "N, A d6",
  },

  {
    id: "linquist",
    name: "Linquist",
    type: "background",
    description: "Character has d6 in languages equal to half her Smarts die.",
    req: {
      tier: "novice",
      skills: [
        {
          id: "smarts",
          value: "d6",
        },
      ],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "luck",
    name: "Luck",
    type: "background",
    description: "+1 Benny at the start of each session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "greatLuck",
    name: "Great Luck",
    type: "background",
    description: "+2 Bennies at the start of each session.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["luck"],
    },
    reqDisplay: "N, Luck",
  },

  {
    id: "quick",
    name: "Quick",
    type: "background",
    description: "Discard and redraw Action Cards of 5 or lower.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [{ id: "agility", value: "d8" }],
      edges: [],
    },
    reqDisplay: "N, A d8",
  },

  {
    id: "rich",
    name: "Rich",
    type: "background",
    description: "Three times starting funds and $150K annual salary.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: [],
    },
    reqDisplay: "N",
  },

  {
    id: "filthyRich",
    name: "Filthy Rich",
    type: "background",
    description: "Five times starting funds and $500K annual salary.",
    req: {
      tier: "novice",
      skills: [],
      attributes: [],
      edges: ["rich"],
    },
    reqDisplay: "N, Rich",
  },
];

export default backgroundEdges;
