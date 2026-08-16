import { useState } from "react";
import CharItem from "../CharItem/CharItem";
import { powerDetails } from "../../utils/powerDetailDisplay";

const noSelectionMessage = (
  <>
    <i>No info entered yet</i>
  </>
);

function CharacterSummary({ character }) {
  const [spentHindrancePoints, setSpentHindrancePoints] = useState(0);

  function adjustSpentHindrancePoints(amountToAdjust) {
    setSpentHindrancePoints((prev) => Math.max(0, prev + amountToAdjust));
  }

  function edgeReqs(edge) {
    const reqs = [
      edge.req.tier,
      ...edge.req.skills,
      ...edge.req.attributes,
      ...edge.req.edges,
    ];

    return `Req: ${reqs.join(", ")}`;
  }

  function handlePowerDetails(power) {
    const details = powerDetails(power);
    return details;
  }

  return (
    <>
      <div className="drawer-section">
        <h3>Name</h3>
        <p>{character.name || noSelectionMessage}</p>
      </div>

      <div className="drawer-section">
        <h3>Concept</h3>
        <p>{character.concept || noSelectionMessage}</p>
      </div>

      <div className="drawer-section">
        <h3>Ancestry</h3>
        <p>{character.ancestry?.name || noSelectionMessage}</p>
      </div>

      <div className="drawer-section">
        <h3>Hindrances</h3>
        {character.hindrances?.length ? (
          // <ul>
          //   {character.hindrances.map((hindrance) => (
          //     <li key={hindrance.id}>
          //       {hindrance.name} ({hindrance.selectedSeverity})
          //     </li>
          //   ))}
          // </ul>
          <div className="char-info">
            {character.hindrances.map((hindrance) => (
              <CharItem
                key={hindrance.id}
                item={hindrance}
                titleExtra={`(${hindrance.selectedSeverity})`}
                canDelete={false}
              />
            ))}
          </div>
        ) : (
          <p>
            <i>No Hindrances selected</i>
          </p>
        )}
      </div>

      <div className="hindrance-summary-row">
        <div className="drawer-section hindrance-point-info">
          <h3>Hindrance Points</h3>
          <p>{character.hindrancePoints ?? 0}</p>
        </div>

        <div className="drawer-section hindrance-point-info">
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

      <div className="drawer-section">
        <h3>Attributes</h3>
        <div>
          {Object.entries(character.attributes).map(([name, value]) => (
            <div key={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}: {value}
            </div>
          ))}
        </div>
      </div>

      <div className="drawer-section">
        <h3>Skills</h3>
        <div>
          {character.skills.map((skill) => (
            <div key={skill.id}>
              {skill.name}: {skill.die}
            </div>
          ))}
        </div>
      </div>

      <div className="drawer-section">
        <h3>Edges</h3>
        {character.edges?.length ? (
          <div className="char-info">
            {character.edges.map((edge) => (
              <CharItem
                key={edge.id}
                item={edge}
                titleExtra={`(${edge.type})`}
                descriptionExtra={edgeReqs(edge)}
                canDelete={false}
              />
            ))}
          </div>
        ) : (
          <p>
            <i>No Edges selected</i>
          </p>
        )}
      </div>

      <div className="drawer-section">
        <h3>Powers</h3>
        {character.edges?.length ? (
          <div className="char-info">
            {character.edges.map((edge) => (
              <CharItem
                key={edge.id}
                item={edge}
                titleExtra={`(${edge.type})`}
                descriptionExtra={edgeReqs(edge)}
                canDelete={false}
              />
            ))}
          </div>
        ) : (
          <p>
            <i>No Edges selected</i>
          </p>
        )}
      </div>

      <div className="drawer-section">
        <h3>Powers</h3>
        {character.powers?.length ? (
          <div className="char-info">
            {character.powers.map((power) => (
              <CharItem
                key={power.id}
                item={power}
                // titleExtra={`(${edge.type})`}
                descriptionExtra={handlePowerDetails(power)}
                canDelete={false}
              />
            ))}
          </div>
        ) : (
          <p>
            <i>No Powers selected</i>
          </p>
        )}
      </div>
    </>
  );
}

export default CharacterSummary;
