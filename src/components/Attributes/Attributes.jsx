import Card from "../Card";
import Attribute from "./Attribute";
import PointDisplay from "../PointDisplay/PointDisplay";
import attributes from "../../data/attributes";
import { calcAttributePoints } from "../../utils/calcAttributePoints";

import "../../styles/traitRow.css";

function Attributes({ character, setCharacter }) {
  function setAttribute(attributeId, die) {
    setCharacter((prev) => {
      const updatedAttributes = {
        ...prev.attributes,
        [attributeId]: die,
      };

      const spent = calcAttributePoints(updatedAttributes);

      return {
        ...prev,
        attributes: updatedAttributes,
        attributePointsSpent: spent,
      };
    });
  }

  console.log(character.attributePointsSpent);

  return (
    <Card padding="compact">
      <div className="slide slide-in-bottom">
        <h2>Attributes</h2>
        <div className="trait-rows">
          {attributes.map((attribute) => (
            <Attribute
              key={attribute.id}
              character={character}
              attribute={attribute}
              setAttribute={setAttribute}
            />
          ))}
        </div>
      </div>
      <PointDisplay attributePoints={character.attributePointsSpent} />
    </Card>
  );
}

export default Attributes;
