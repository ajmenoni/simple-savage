import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import Delete from "../Delete/Delete";
import HindranceSelect from "./HindranceSelect";

import { useToggleSelection } from "../../hooks/useToggleSelection";

import "../../App.css";
import "./Hindrances.css";
import "../../styles/animation.css";

function Hindrances({ character, setCharacter }) {
  const [showItemSelect, setShowItemSelect] = useState(false);
  const [slideIn, setSlideIn] = useState(true);
  const toggleSelection = useToggleSelection(setCharacter);

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

  function CharHindrance({ hindrance, selectedHindrances }) {
    const isSelected = selectedHindrances.some((h) => h.id === hindrance.id);
    return (
      <div
        className={`trait-container trait-container--stacked ${
          isSelected ? "selected" : ""
        }`}
      >
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
          <div className="items-container">
            {character.hindrances.map((hindrance) => (
              <CharHindrance
                key={hindrance.id}
                hindrance={hindrance}
                selectedHindrances={character.hindrances}
              />
            ))}
          </div>

          <Button text="Select Hindrances" onClick={openSelect} />
        </div>
      ) : (
        <HindranceSelect
          hindrances={character.hindrances}
          slideIn={slideIn}
          toggleSelection={toggleSelection}
          onDone={handleDone}
        />
      )}
    </Card>
  );
}

export default Hindrances;
