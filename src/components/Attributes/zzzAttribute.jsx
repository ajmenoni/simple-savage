import React from "react";

function Attribute({ attribute, setAttribute, character }) {
  return (
    <fieldset className="trait-row" key={attribute.id}>
      <span className="trait-name title">{attribute.name}</span>
      <div className="dice-row">
        {["d4", "d6", "d8", "d10", "d12"].map((die) => (
          <React.Fragment key={`${attribute.id}-${die}`}>
            <input
              type="radio"
              id={`${attribute.id}-${die}`}
              name={`trait-${attribute.id}`}
              value={die}
              checked={character.attributes?.[attribute.id] === die}
              onChange={() => setAttribute(attribute.id, die)}
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
  );
}

export default Attribute;
