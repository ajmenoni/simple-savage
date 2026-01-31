import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import Delete from "../Delete/Delete";
import HindranceSelect from "./HindranceSelect";

import { useToggleSelection } from "../../hooks/useToggleSelection";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "./Hindrances.css";
import "../../styles/animation.css";

function Hindrances({ character, setCharacter }) {
  const [showItemSelect, setShowItemSelect] = useState(false);
  const toggleSelection = useToggleSelection(setCharacter);

  const selectSlide = useSlide(SLIDE.LEFT);

  function openSelect() {
    selectSlide.slideIn(SLIDE.LEFT);
    setShowItemSelect(true);
  }

  function handleDone() {
    selectSlide.slideOut(SLIDE.LEFT);
    setTimeout(() => {
      setShowItemSelect(false);
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
        <span className="title top-title">
          {hindrance.name} ({hindrance.selectedSeverity})
        </span>
        <div className="trait-row">
          <span>{hindrance.description}</span>
          <Delete onClick={() => toggleSelection("hindrances", hindrance)} />
        </div>
      </div>
    );
  }

  return (
    <Card className={"slide slide-in-bottom"}>
      {!showItemSelect ? (
        <>
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
        </>
      ) : (
        <HindranceSelect
          character={character}
          slideClass={selectSlide.className}
          toggleSelection={toggleSelection}
          onDone={handleDone}
        />
      )}
    </Card>
  );
}

export default Hindrances;
