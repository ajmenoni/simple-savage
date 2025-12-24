import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import Delete from "../Delete/Delete";
import HindranceSelect from "./HindranceSelect";

import "../../App.css";
import "./Hindrances.css";
import "../../styles/animation.css";

function Hindrances({ character, setCharacter }) {
  const { hindrances = [] } = character;
  const [showItemSelect, setShowItemSelect] = useState(false);
  const [slideIn, setSlideIn] = useState(true);

  function toggleSelection(field, item) {
    setCharacter((prev) => {
      const list = prev[field] ?? [];
      const exists = list.some((i) => i.id === item.id);

      return {
        ...prev,
        [field]: exists
          ? list.filter((i) => i.id !== item.id)
          : [...list, item],
      };
    });
  }

  function openSelect() {
    setSlideIn(true);
    setShowItemSelect(true);
  }

  function handleDone() {
    setSlideIn(false);
    setTimeout(() => {
      setShowItemSelect(false);
      setSlideIn(true);
    }, 300);
  }

  function CharHindrance({ hindrance }) {
    return (
      <div className="trait-container trait-container--stacked">
        <span className="title top-title">{hindrance.name}</span>
        <div className="trait-row">
          <span>{hindrance.description}</span>
          <Delete onClick={() => toggleSelection("hindrances", hindrance)} />
        </div>
      </div>
    );
  }

  return (
    <Card>
      {!showItemSelect ? (
        <div className="slide-in-bottom">
          <h2>Hindrances</h2>

          {hindrances.map((hindrance) => (
            <CharHindrance key={hindrance.id} hindrance={hindrance} />
          ))}

          <Button text="Select Hindrances" onClick={openSelect} />
        </div>
      ) : (
        <HindranceSelect
          hindrances={hindrances}
          slideIn={slideIn}
          toggleSelection={toggleSelection}
          onDone={handleDone}
        />
      )}
    </Card>
  );
}

export default Hindrances;
