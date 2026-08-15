import { useState } from "react";

function CharacterSummary({ character }) {
  const [spentHindrancePoints, setSpentHindrancePoints] = useState(0);

  function adjustSpentHindrancePoints(amountToAdjust) {
    setSpentHindrancePoints((prev) => Math.max(0, prev + amountToAdjust));
  }

  return (
    <>
      <div className="drawer-section">
        <h3>Name</h3>
        <p>{character.name || "Not set"}</p>
      </div>

      <div className="drawer-section">
        <h3>Concept</h3>
        <p>{character.concept || "Not set"}</p>
      </div>

      <div className="drawer-section">
        <h3>Ancestry</h3>
        <p>{character.ancestry?.name || "Not set"}</p>
      </div>

      <div className="drawer-section">
        <h3>Hindrances</h3>
        {character.hindrances?.length ? (
          <ul>
            {character.hindrances.map((hindrance) => (
              <li key={hindrance.id}>
                {hindrance.name} ({hindrance.selectedSeverity})
              </li>
            ))}
          </ul>
        ) : (
          <p>None selected</p>
        )}
      </div>

      <div className="hindrance-summary-row">
        <div className="drawer-section hindrance-stat-block">
          <h3>Hindrance Points</h3>
          <p>{character.hindrancePoints ?? 0}</p>
        </div>

        <div className="drawer-section hindrance-stat-block">
          <h3>Spent</h3>
          <div className="hindrance-counter">
            <button
              type="button"
              className="drawer-counter-button"
              onClick={() => adjustSpentHindrancePoints(-1)}
              aria-label="Decrease spent hindrance points"
            >
              −
            </button>
            <span>{spentHindrancePoints}</span>
            <button
              type="button"
              className="drawer-counter-button"
              onClick={() => adjustSpentHindrancePoints(1)}
              aria-label="Increase spent hindrance points"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterSummary;
