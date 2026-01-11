import { useState } from "react";
import Card from "../Card";
import Search from "../Search/Search";
import { searchData } from "../../utils/searchData";
import skillsData from "../../data/skills";

function SkillsSelect({ slideClass, onDone, characterSkills, addSkill }) {
  const [search, setSearch] = useState("");
  const characterSkillsIds = characterSkills.map((skill) => skill.id);
  const filteredSkills = skillsData.filter(
    (skill) => !characterSkillsIds.includes(skill.id)
  );
  const availableSkills = searchData({
    data: filteredSkills,
    search,
  });

  return (
    <div>
      <div className={slideClass}>
        <Search value={search} onChange={setSearch} />

        <div className="items-container skills">
          {availableSkills.map((skill) => {
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

export default SkillsSelect;
