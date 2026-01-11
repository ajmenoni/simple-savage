import { useState } from "react";
import ItemList from "../ItemList";
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
        <ItemList
          items={availableSkills}
          onItemClick={(item) => {
            addSkill(item);
            onDone();
          }}
          renderItem={(item) => (
            <>
              <div className="item-card-title">
                {item.name} ({item.linkedAttribute})
              </div>
              <div>{item.description}</div>
            </>
          )}
          className="skills"
        />
      </div>
    </div>
  );
}

export default SkillsSelect;
