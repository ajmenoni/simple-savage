import Card from "../Card";
import TraitRow from "../TraitRow/TraitRow";
import PointDisplay from "../PointDisplay/PointDisplay";
import { calcSkillPoints } from "../../utils/calcSkillPoints";

import "../../styles/traitRow.css";

function Skills({ character, setCharacter }) {
  function setSkill(skillId, die) {
    setCharacter((prev) => {
      const updatedSkills = prev.skills.map((skill) =>
        skill.id === skillId ? { ...skill, die } : skill
      );

      const spent = calcSkillPoints(updatedSkills);

      return {
        ...prev,
        skills: updatedSkills,
        skillPointsSpent: spent,
      };
    });
  }

  return (
    <Card padding="compact">
      <div className="slide slide-in-bottom">
        <h2>Skills</h2>

        <div className="trait-rows">
          {character.skills.map((skill) => (
            <TraitRow
              key={skill.id}
              trait={skill}
              value={skill.die}
              onChange={setSkill}
            />
          ))}
        </div>
      </div>

      <PointDisplay attributePoints={character.skillPointsSpent} />
    </Card>
  );
}

export default Skills;
