import Card from "../Card";
import TraitRow from "../TraitRow/TraitRow";
import PointDisplay from "../PointDisplay/PointDisplay";
import attributes from "../../data/attributes";
import { calcAttributePoints } from "../../utils/calcAttributePoints";
import { calcSkillPoints } from "../../utils/calcSkillPoints";

import "../../styles/traitRow.css";

function Attributes({ character, setCharacter }) {
  function setAttribute(attributeId, die) {
    setCharacter((prev) => {
      const updatedAttributes = {
        ...prev.attributes,
        [attributeId]: die,
      };

      const spent = calcAttributePoints(updatedAttributes);
      const recalculatedSkillPoints = calcSkillPoints(
        character.skills,
        updatedAttributes
      );

      return {
        ...prev,
        attributes: updatedAttributes,
        attributePointsSpent: spent,
        skillPointsSpent: recalculatedSkillPoints,
      };
    });
  }

  return (
    <Card padding="compact">
      <div className="slide slide-in-bottom">
        <h2>Attributes</h2>

        <div className="trait-rows">
          {attributes.map((attribute) => (
            <TraitRow
              key={attribute.id}
              trait={attribute}
              value={character.attributes[attribute.id]}
              onChange={setAttribute}
            />
          ))}
        </div>
      </div>

      <PointDisplay attributePoints={character.attributePointsSpent} />
    </Card>
  );
}

export default Attributes;
