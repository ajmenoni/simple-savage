import Card from "../Card";
import TraitRow from "../TraitRow/TraitRow";
import PointDisplay from "../PointDisplay/PointDisplay";
import Button from "../Button/Button";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";
import { calcSkillPoints } from "../../utils/calcSkillPoints";
import skillsData from "../../data/skills";

import "../../styles/traitRow.css";
import { useState } from "react";

function Skills({ character, setCharacter }) {
  const selectSlide = useSlide(SLIDE.LEFT);
  const [showItemSelect, setShowItemSelect] = useState(true);

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
      {!showItemSelect ? (
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

          <div className="skill-buttons">
            <Button
              text={"Add Skill"}
              onClick={() => {}}
              className={"add-skill"}
            />
          </div>

          <PointDisplay attributePoints={character.skillPointsSpent} />
        </div>
      ) : (
        <SkillsSelect />
      )}
    </Card>
  );

  function SkillsSelect() {
    return (
      <div>
        <div className="">
          <div className="items-container">
            {skillsData.map((skill) => {
              return (
                <Card
                  key={skill.id}
                  className={`item-card`}
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  <div className="item-card-title">
                    {skill.name} ({skill.linkedAttribute})
                  </div>
                  <div>{skill.description}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
