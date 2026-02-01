import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import HindranceSelect from "./HindranceSelect";
import CharItem from "../CharItem/CharItem";

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

  return (
    <Card className={"slide slide-in-bottom"}>
      {!showItemSelect ? (
        <>
          <h2>Hindrances</h2>
          <div className="items-container">
            {character.hindrances.map((hindrance) => (
              <CharItem
                key={hindrance.id}
                item={hindrance}
                titleExtra={`(${hindrance.selectedSeverity})`}
                onDelete={() => toggleSelection("hindrances", hindrance)}
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
