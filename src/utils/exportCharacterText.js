function getDieValue(die) {
  if (!die) return 0;
  const match = String(die).match(/d(\d+)/i);
  return match ? Number(match[1]) : 0;
}

function formatList(items, formatter) {
  if (!items?.length) return "None";
  return items.map(formatter).join("\n");
}

export function exportCharacterText(character) {
  const fightingSkill = character?.skills?.find(
    (skill) => skill.name?.toLowerCase() === "fighting",
  );

  const parry = Math.floor(getDieValue(fightingSkill?.die) / 2) + 2;
  const toughness =
    Math.floor(getDieValue(character?.attributes?.vigor) / 2) + 2;

  const lines = [
    "",
    `Name: ${character?.name || "Unnamed"}`,
    `Concept: ${character?.concept || "No concept entered"}`,
    `Ancestry: ${character?.ancestry?.name || ""}`,
    "",
    "Derived Stats",
    `Parry: ${parry}`,
    `Toughness: ${toughness}`,
    "",
    "Hindrances",
    formatList(
      character?.hindrances,
      (hindrance) =>
        `- ${hindrance.name} (${hindrance.selectedSeverity}) | ${hindrance.description}`,
    ),
    "",
    "Attributes",
    ...Object.entries(character?.attributes || {}).map(
      ([key, value]) => `- ${key}: ${value}`,
    ),
    "",
    "Skills",
    formatList(character?.skills, (skill) => `- ${skill.name}: ${skill.die}`),
    "",
    "Edges",
    formatList(
      character?.edges,
      (edge) => `- ${edge.name} (${edge.type}) | ${edge.description}`,
    ),
    "",
    "Powers",
    formatList(
      character?.powers,
      (power) => `- ${power.name} | ${power.description}`,
    ),
    "",
    "Gear & Items",
    formatList(character?.items, (item) => {
      const itemDetails = [
        `- ${item.name}`,
        item.armor && `  Armor: +${item.armor}`,
        item.parry && `  Parry: +${item.parry}`,
        item.cover && `  Cover: -${item.cover}`,
        item.range && `  Range: ${item.range}`,
        item.ap && `  AP: ${item.ap}`,
        item.rof && `  ROF: ${item.rof}`,
        item.damage && `  Damage: ${item.damage}`,
        item.minStr && `  Minimum Strength: d${item.minStr}`,
        item.notes && `  Notes: ${item.notes}`,
      ]
        .filter(Boolean)
        .join("\n");

      return itemDetails;
    }),
  ];

  return lines.join("\n");
}

export function downloadCharacterText(
  character,
  filename = `${character.name}.txt`,
) {
  const text = exportCharacterText(character);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}
