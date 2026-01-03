import React from "react";
import useLongPress from "../../hooks/useLongPress";

function TraitRow({ trait, value, onChange, onLongPress }) {
  const pressHandler = onLongPress
    ? useLongPress(() => onLongPress(trait))
    : {};

  return (
    <fieldset className="trait-row">
      <span className="trait-name title" {...pressHandler}>
        {trait.name}
      </span>

      <div className="dice-row">
        {["d4", "d6", "d8", "d10", "d12"].map((die) => (
          <React.Fragment key={`${trait.id}-${die}`}>
            <input
              type="radio"
              id={`${trait.id}-${die}`}
              name={`trait-${trait.id}`}
              value={die}
              checked={value === die}
              onChange={() => onChange(trait.id, die)}
            />
            <label
              htmlFor={`${trait.id}-${die}`}
              className={`dice-toggle ${die}`}
              aria-label={`Select ${die} for ${trait.name}`}
            />
          </React.Fragment>
        ))}
      </div>
    </fieldset>
  );
}

export default TraitRow;
