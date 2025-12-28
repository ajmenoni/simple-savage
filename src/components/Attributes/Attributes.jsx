import React from "react";
import Card from "../Card";
import attributes from "../../data/attributes";

import "../../styles/traitRow.css";

function Attributes() {
  return (
    <Card padding="compact">
      <div className="slide slide-in-bottom">
        <h2>Attributes</h2>
        <div className="trait-rows">
          {attributes.map((attribute) => (
            <fieldset className="trait-row" key={attribute.id}>
              <span className="trait-name">{attribute.name}</span>
              <div className="dice-row">
                {["d4", "d6", "d8", "d10", "d12"].map((die) => (
                  <React.Fragment key={`${attribute.id}-${die}`}>
                    <input
                      type="radio"
                      id={`${attribute.id}-${die}`}
                      name={`trait-${attribute.id}`}
                      value={die}
                    />
                    <label
                      htmlFor={`${attribute.id}-${die}`}
                      className={`dice-toggle ${die}`}
                      aria-label={`Select ${die} for ${attribute.name}`}
                    ></label>
                  </React.Fragment>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Attributes;
