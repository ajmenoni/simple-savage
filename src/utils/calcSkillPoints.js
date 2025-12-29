export function calcSkillPoints(skills) {
  const DIE_COST = {
    d4: 0,
    d6: 1,
    d8: 2,
    d10: 3,
    d12: 4,
  };

  return skills.reduce((total, skill) => {
    if (!skill.die) return total;
    return total + DIE_COST[skill.die];
  }, 0);
}
