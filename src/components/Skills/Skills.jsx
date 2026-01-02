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
  const [showItemSelect, setShowItemSelect] = useState(false);

  function openSelect() {
    selectSlide.slideIn(SLIDE.LEFT);
    setShowItemSelect(true);
  }

  function handleDone() {
    selectSlide.slideOut(SLIDE.LEFT);
    setTimeout(() => {
      setShowItemSelect(false);
    }, 100);
  }

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

  function addSkill(skill) {
    setCharacter((prev) => {
      const updatedSkills = [
        ...prev.skills,
        {
          ...skill,
          die: "d4",
        },
      ];

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
              onClick={openSelect}
              className={"add-skill"}
            />
          </div>

          <PointDisplay attributePoints={character.skillPointsSpent} />
        </div>
      ) : (
        <SkillsSelect
          slideClass={selectSlide.className}
          onDone={handleDone}
          characterSkills={character.skills}
          addSkill={addSkill}
        />
      )}
    </Card>
  );

  function SkillsSelect({ slideClass, onDone, characterSkills, addSkill }) {
    // move to funtion
    const characterSkillsIds = characterSkills.map((skill) => skill.id);
    const filteredSkills = skillsData.filter(
      (skill) => !characterSkillsIds.includes(skill.id)
    );

    console.log(character.skills);

    return (
      <div>
        <div className={slideClass}>
          <div className="items-container skills">
            {filteredSkills.map((skill) => {
              return (
                <Card
                  key={skill.id}
                  className={`item-card`}
                  onClick={() => {
                    addSkill(skill);
                    onDone();
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
