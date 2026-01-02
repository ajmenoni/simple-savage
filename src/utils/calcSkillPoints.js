// determine what dice count as what step, like 0, 1 etc.
const DIE_ORDER = ["d4", "d6", "d8", "d10", "d12"];

function dieIndex(die) {
  return DIE_ORDER.indexOf(die);
}

function calcSkillCost(skill, attributes) {
  //know the 'step'
  const skillIndex = dieIndex(skill.die);
  // 'step' for linked att
  const attributeIndex = dieIndex(attributes[skill.linkedAttribute]);

  let cost = 0;

  //handle non-core initial cost via -1 as 'adding' the skill will then give us +1 to 0 index.
  let rollingIndex = skill.coreSkill ? 0 : -1;

  while (rollingIndex < skillIndex) {
    const nextIndex = rollingIndex + 1;
    //initial buy of non-core skill
    if (rollingIndex === -1) {
      cost += 1;
    } else {
      cost += nextIndex <= attributeIndex ? 1 : 2;
    }

    rollingIndex = nextIndex;
  }

  return cost;
}

export function calcSkillPoints(skills, attributes) {
  return skills.reduce((total, skill) => {
    return total + calcSkillCost(skill, attributes);
  }, 0);
}
