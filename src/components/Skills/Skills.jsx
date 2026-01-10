import Card from "../Card";
import TraitRow from "../TraitRow/TraitRow";
import PointDisplay from "../PointDisplay/PointDisplay";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SkillsSelect from "./SkillsSelect";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";
import { calcSkillPoints } from "../../utils/calcSkillPoints";

import "../../styles/traitRow.css";
import { useState } from "react";

function Skills({ character, setCharacter }) {
  const selectSlide = useSlide(SLIDE.LEFT);
  const [showItemSelect, setShowItemSelect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [skillToRemove, setSkillToRemove] = useState(null);

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

      const spent = calcSkillPoints(updatedSkills, prev.attributes);

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

      const spent = calcSkillPoints(updatedSkills, prev.attributes);

      return {
        ...prev,
        skills: updatedSkills,
        skillPointsSpent: spent,
      };
    });
  }

  function removeSkill(skillId) {
    setCharacter((prev) => {
      const updatedSkills = prev.skills.filter((skill) => skill.id !== skillId);

      const spent = calcSkillPoints(updatedSkills, prev.attributes);

      return {
        ...prev,
        skills: updatedSkills,
        skillPointsSpent: spent,
      };
    });
  }

  function handleLongPress(skill) {
    setSkillToRemove(skill);
    setShowModal(true);
  }

  function handleRemoveSkill(skillId) {
    removeSkill(skillId);
    setSkillToRemove(null);
    setShowModal(false);
  }

  function handleModalClose() {
    setShowModal(false);
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
                onLongPress={!skill.coreSkill ? handleLongPress : null}
                handleRemove={removeSkill}
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
      {showModal && (
        <Modal
          title={`Remove ${skillToRemove.name}?`}
          type={"removeSkillModal"}
          onCancel={handleModalClose}
          onSelect={() => handleRemoveSkill(skillToRemove.id)}
        />
      )}
    </Card>
  );
}

export default Skills;
