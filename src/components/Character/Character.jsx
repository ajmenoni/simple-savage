import Card from "../Card";
import "./Character.css";
import { powerDetails } from "../../utils/powerDetailDisplay";

function Character({ character }) {
  const attributeLabels = {
    agility: "Agility",
    smarts: "Smarts",
    spirit: "Spirit",
    strength: "Strength",
    vigor: "Vigor",
  };

  function handlePowerDetails(power) {
    const details = powerDetails(power);
    return details;
  }

  function getDieValue(die) {
    if (!die) return 0;
    const match = String(die).match(/d(\d+)/i);
    return match ? Number(match[1]) : 0;
  }

  const fightingSkill = character.skills?.find(
    (skill) => skill.name?.toLowerCase() === "fighting",
  );
  const parry = Math.floor(getDieValue(fightingSkill?.die) / 2) + 2;
  const toughness =
    Math.floor(getDieValue(character.attributes?.vigor) / 2) + 2;

  return (
    <Card className="slide slide-in-bottom">
      <div className="character-sheet">
        <header className="character-sheet__header">
          <h2 className="character-sheet__title">
            {character.name || "Unnamed"}
          </h2>
          <p className="character-sheet__subtitle">
            {character.concept || "No concept entered"}
          </p>
          <div className="character-sheet__ancestry">
            <strong>Ancestry:</strong>{" "}
            {character.ancestry?.name || "Unselected"}
          </div>
        </header>

        <div className="character-sheet__grid">
          <section className="character-sheet__card">
            <div className="character-sheet__section-header">
              <h3>Derived Stats</h3>
              <p className="character-sheet__section-subtext">
                Calculated from attributes and skills
              </p>
            </div>

            <div className="character-sheet__stats character-sheet__stats--derived">
              <div className="character-sheet__stat">
                <strong>Parry</strong>
                <span className="character-sheet__stat-value">{parry}</span>
              </div>
              <div className="character-sheet__stat">
                <strong>Toughness</strong>
                <span className="character-sheet__stat-value">{toughness}</span>
              </div>
            </div>
          </section>

          <section className="character-sheet__card">
            <h3>Hindrances</h3>
            {character.hindrances?.length ? (
              <ul className="character-sheet__list">
                {character.hindrances.map((hindrance) => (
                  <li className="character-sheet__list-item" key={hindrance.id}>
                    <strong>{hindrance.name}</strong> (
                    {hindrance.selectedSeverity})
                    <span className="new-line">{hindrance.description}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="character-sheet__empty">No hindrances selected.</p>
            )}
          </section>

          <section className="character-sheet__card">
            <h3>Attributes</h3>
            <div className="character-sheet__stats">
              {Object.entries(character.attributes || {}).map(
                ([key, value]) => (
                  <div className="character-sheet__stat" key={key}>
                    <strong>{attributeLabels[key] || key}</strong>
                    <span className="character-sheet__stat-value">{value}</span>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className="character-sheet__card">
            <h3>Skills</h3>
            {character.skills?.length ? (
              <ul className="character-sheet__list">
                {character.skills.map((skill) => (
                  <li className="character-sheet__list-item" key={skill.id}>
                    <strong>{skill.name}</strong>: {skill.die}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="character-sheet__empty">No skills selected.</p>
            )}
          </section>

          <section className="character-sheet__card">
            <h3>Edges</h3>
            {character.edges?.length ? (
              <ul className="character-sheet__list">
                {character.edges.map((edge) => (
                  <li className="character-sheet__list-item" key={edge.id}>
                    <strong>{edge.name}</strong>
                    <div style={{ fontSize: "0.7rem" }}>{edge.reqDisplay}</div>
                    <div>{edge.description}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="character-sheet__empty">No edges selected.</p>
            )}
          </section>

          <section className="character-sheet__card">
            <h3>Powers</h3>
            {character.powers?.length ? (
              <ul className="character-sheet__power-list">
                {character.powers.map((power) => (
                  <li className="character-sheet__power-item" key={power.id}>
                    <strong>{power.name}</strong>
                    <span style={{ fontSize: "0.7rem" }}>
                      {powerDetails(power)}
                    </span>
                    <div>{power.description}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="character-sheet__empty">No powers selected.</p>
            )}
          </section>

          <section className="character-sheet__card">
            <h3>Gear & Items</h3>
            {character.items?.length ? (
              <ul className="character-sheet__gear-list">
                {character.items.map((item) => (
                  <li className="character-sheet__gear-item" key={item.id}>
                    <strong>{item.name}</strong>
                    {item.type && <span>Type: {item.type}</span>}
                    {item.armor && <span>Armor: +{item.armor}</span>}
                    {item.damage && <span>Damage: {item.damage}</span>}
                    {item.minStr && (
                      <span>Minimum Strength: d{item.minStr}</span>
                    )}
                    {item.notes && (
                      <span className="character-sheet__notes">
                        {item.notes}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="character-sheet__empty">No gear or items added.</p>
            )}
          </section>
        </div>
      </div>
    </Card>
  );
}

export default Character;
