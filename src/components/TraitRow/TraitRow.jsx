import React from "react";

function TraitRow({ trait, setTrait, characterTraits }) {
  return (
    <fieldset className="trait-row" key={trait.id}>
      <span className="trait-name title">{trait.name}</span>
      <div className="dice-row">
        {["d4", "d6", "d8", "d10", "d12"].map((die) => (
          <React.Fragment key={`${trait.id}-${die}`}>
            <input
              type="radio"
              id={`${trait.id}-${die}`}
              name={`trait-${trait.id}`}
              value={die}
              checked={characterTraits?.[trait.id] === die}
              onChange={() => setTrait(trait.id, die)}
            />
            <label
              htmlFor={`${trait.id}-${die}`}
              className={`dice-toggle ${die}`}
              aria-label={`Select ${die} for ${trait.name}`}
            ></label>
          </React.Fragment>
        ))}
      </div>
    </fieldset>
  );
}

export default TraitRow;
