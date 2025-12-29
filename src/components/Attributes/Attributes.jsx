import Card from "../Card";
import Attribute from "./Attribute";
import attributes from "../../data/attributes";

import "../../styles/traitRow.css";

function Attributes({ character, setCharacter }) {
  function setAttribute(attributeId, die) {
    setCharacter((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [attributeId]: die,
      },
    }));
  }

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
    </Card>
  );
}

export default Attributes;
