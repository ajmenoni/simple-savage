const hindrances = [
  {
    id: "allThumbs",
    name: "All Thumbs",
    severity: ["minor"],
    description: "–2 to use mechanical or electrical devices.",
  },
  {
    id: "anemic",
    name: "Anemic",
    severity: ["minor"],
    description: "–2 Vigor when resisting Fatigue.",
  },
  {
    id: "arrogant",
    name: "Arrogant",
    severity: ["major"],
    description:
      "Likes to dominate opponents and challenge the most powerful foe in combat.",
  },
  {
    id: "badEyes",
    name: "Bad Eyes",
    severity: ["minor", "major"],
    description:
      "–1 (Minor) or –2 (Major) to all Trait rolls dependent on vision. Eyewear negates penalty but has a 50% chance of breaking when the hero suffers trauma.",
  },
  {
    id: "badLuck",
    name: "Bad Luck",
    severity: ["major"],
    description: "The character starts with one less Benny per session.",
  },
  {
    id: "bigMouth",
    name: "Big Mouth",
    severity: ["minor"],
    description:
      "Unable to keep secrets and constantly gives away private information.",
  },
  {
    id: "blind",
    name: "Blind",
    severity: ["major"],
    description:
      "–6 to all tasks that require vision (but gains a free Edge to offset).",
  },
  {
    id: "bloodthirsty",
    name: "Bloodthirsty",
    severity: ["major"],
    description: "Never takes prisoners.",
  },
  {
    id: "cantSwim",
    name: "Can't Swim",
    severity: ["minor"],
    description:
      "–2 to swimming (Athletics) rolls; each inch moved in water costs 3″ of Pace.",
  },
  {
    id: "cautious",
    name: "Cautious",
    severity: ["minor"],
    description: "Plans extensively and is overly careful.",
  },
  {
    id: "clueless",
    name: "Clueless",
    severity: ["major"],
    description: "–1 to Common Knowledge and Notice rolls.",
  },
  {
    id: "clumsy",
    name: "Clumsy",
    severity: ["major"],
    description: "–2 to Athletics and Stealth rolls.",
  },
  {
    id: "codeOfHonor",
    name: "Code of Honor",
    severity: ["major"],
    description: "Keeps their word and always acts honorably.",
  },
  {
    id: "curious",
    name: "Curious",
    severity: ["major"],
    description: "Wants to know about everything.",
  },
  {
    id: "deathWish",
    name: "Death Wish",
    severity: ["minor"],
    description: "Wants to die after or while completing some epic task.",
  },
  {
    id: "delusional",
    name: "Delusional",
    severity: ["minor", "major"],
    description:
      "Believes something strange that causes occasional (Minor) or frequent (Major) trouble.",
  },
  {
    id: "doubtingThomas",
    name: "Doubting Thomas",
    severity: ["minor"],
    description:
      "Doesn’t believe in the supernatural, exposing them to unnecessary risks.",
  },
  {
    id: "driven",
    name: "Driven",
    severity: ["minor", "major"],
    description: "Driven by an important goal or belief.",
  },
  {
    id: "elderly",
    name: "Elderly",
    severity: ["major"],
    description:
      "–1 to Pace, running, Agility, Strength, and Vigor. Gains 5 extra skill points.",
  },
  {
    id: "enemy",
    name: "Enemy",
    severity: ["minor", "major"],
    description: "Has a recurring nemesis.",
  },
  {
    id: "greedy",
    name: "Greedy",
    severity: ["minor", "major"],
    description: "Obsessed with wealth and material possessions.",
  },
  {
    id: "habit",
    name: "Habit",
    severity: ["minor", "major"],
    description: "Addicted to something; suffers Fatigue if deprived.",
  },
  {
    id: "hardOfHearing",
    name: "Hard of Hearing",
    severity: ["minor", "major"],
    description: "–4 to Notice sounds; automatic failure if completely deaf.",
  },
  {
    id: "heroic",
    name: "Heroic",
    severity: ["major"],
    description: "Always helps those in need.",
  },
  {
    id: "hesitant",
    name: "Hesitant",
    severity: ["minor"],
    description:
      "Draw two Action Cards and take the lowest (Jokers may be kept).",
  },
  {
    id: "illiterate",
    name: "Illiterate",
    severity: ["minor"],
    description: "Cannot read or write.",
  },
  {
    id: "impulsive",
    name: "Impulsive",
    severity: ["major"],
    description: "Leaps before looking.",
  },
  {
    id: "jealous",
    name: "Jealous",
    severity: ["minor", "major"],
    description: "Covets what others have.",
  },
  {
    id: "loyal",
    name: "Loyal",
    severity: ["minor"],
    description: "Loyal to friends and allies.",
  },
  {
    id: "mean",
    name: "Mean",
    severity: ["minor"],
    description: "–1 to Persuasion rolls.",
  },
  {
    id: "mildMannered",
    name: "Mild Mannered",
    severity: ["minor"],
    description: "–2 to Intimidation rolls.",
  },
  {
    id: "mute",
    name: "Mute",
    severity: ["major"],
    description: "Cannot speak.",
  },
  {
    id: "obese",
    name: "Obese",
    severity: ["minor"],
    description:
      "Size +1, Pace –1, running die d4. Treat Strength as one die type lower for Minimum Strength.",
  },
  {
    id: "obligation",
    name: "Obligation",
    severity: ["minor", "major"],
    description: "Weekly obligation of 20 hours (Minor) or 40 hours (Major).",
  },
  {
    id: "oneArm",
    name: "One Arm",
    severity: ["major"],
    description: "–4 to tasks that require two hands.",
  },
  {
    id: "oneEye",
    name: "One Eye",
    severity: ["major"],
    description: "–2 to actions at 5″ (10 yards) or more.",
  },
  {
    id: "outsider",
    name: "Outsider",
    severity: ["minor", "major"],
    description:
      "–2 to Persuasion rolls. As Major, has no legal rights or severe social consequences.",
  },
  {
    id: "overconfident",
    name: "Overconfident",
    severity: ["major"],
    description: "Believes they can do anything.",
  },
  {
    id: "pacifist",
    name: "Pacifist",
    severity: ["minor", "major"],
    description:
      "Minor: fights only in self-defense. Major: won’t fight at all.",
  },
  {
    id: "phobia",
    name: "Phobia",
    severity: ["minor", "major"],
    description:
      "–1 (Minor) or –2 (Major) to all Trait rolls when exposed to the phobia.",
  },
  {
    id: "poverty",
    name: "Poverty",
    severity: ["minor"],
    description: "Half starting funds and always broke.",
  },
  {
    id: "quirk",
    name: "Quirk",
    severity: ["minor"],
    description: "Minor but persistent foible that annoys others.",
  },
  {
    id: "ruthless",
    name: "Ruthless",
    severity: ["minor", "major"],
    description: "Does whatever it takes to get their way.",
  },
  {
    id: "secret",
    name: "Secret",
    severity: ["minor", "major"],
    description: "Has a dark secret.",
  },
  {
    id: "shamed",
    name: "Shamed",
    severity: ["minor", "major"],
    description: "Haunted by a tragic past event.",
  },
  {
    id: "slow",
    name: "Slow",
    severity: ["minor", "major"],
    description:
      "Minor: Pace –1, running die –1 step. Major: Pace –2, –2 to Athletics and resisting Athletics. Cannot take Fleet-Footed.",
  },
  {
    id: "small",
    name: "Small",
    severity: ["minor"],
    description: "Size and Toughness –1 (minimum Size –1).",
  },
  {
    id: "stubborn",
    name: "Stubborn",
    severity: ["minor"],
    description: "Rarely admits mistakes and insists on their way.",
  },
  {
    id: "suspicious",
    name: "Suspicious",
    severity: ["minor", "major"],
    description: "Paranoid. As Major, allies suffer –2 when Supporting.",
  },
  {
    id: "thinSkinned",
    name: "Thin Skinned",
    severity: ["minor", "major"],
    description: "Minor: –2 to resist Taunt. Major: –4 to resist Taunt.",
  },
  {
    id: "timid",
    name: "Timid",
    severity: ["major"],
    description: "–2 to Fear checks and resisting Intimidation.",
  },
  {
    id: "tongueTied",
    name: "Tongue-Tied",
    severity: ["major"],
    description: "–1 to Intimidation, Persuasion, and Taunt rolls.",
  },
  {
    id: "ugly",
    name: "Ugly",
    severity: ["minor", "major"],
    description: "–1 (Minor) or –2 (Major) to Persuasion rolls.",
  },
  {
    id: "vengeful",
    name: "Vengeful",
    severity: ["minor", "major"],
    description: "Seeks payback. As Major, will cause physical harm to get it.",
  },
  {
    id: "vow",
    name: "Vow",
    severity: ["minor", "major"],
    description: "Pledged to a cause.",
  },
  {
    id: "wanted",
    name: "Wanted",
    severity: ["minor", "major"],
    description: "Wanted by the authorities.",
  },
  {
    id: "young",
    name: "Young",
    severity: ["minor", "major"],
    description:
      "Minor: 4 attribute points, 10 skill points, +1 Benny. Major: 3 attribute points, 10 skill points, +2 Bennies.",
  },
];

export default hindrances;
