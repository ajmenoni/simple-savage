import Card from "../Card";
import TraitRow from "../TraitRow/TraitRow";
import PointDisplay from "../PointDisplay/PointDisplay";
import skills from "../../data/skills";
import { calcAttributePoints } from "../../utils/calcAttributePoints";

import "../../styles/traitRow.css";

function Skills({ character, setCharacter }) {
  function setSkill(skillId, die) {
    setCharacter((prev) => {
      const updatedSkills = {
        ...prev.skills,
        [skillId]: die,
      };

      const spent = calcAttributePoints(updatedSkills);
      console.log(character.skills);

      return {
        ...prev,
        skills: updatedSkills,
        attributePointsSpent: spent,
      };
    });
  }

  return (
    <Card padding="compact">
      <div className="slide slide-in-bottom">
        <h2>Skills</h2>
        <div className="trait-rows">
          {skills.map((skill) => (
            <TraitRow
              key={skill.id}
              characterTraits={character.skills}
              trait={skill}
              setTrait={setSkill}
            />
          ))}
        </div>
      </div>
      <PointDisplay attributePoints={character.skillPointsSpent} />
    </Card>
  );
}

export default Skills;
