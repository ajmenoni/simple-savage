import Card from "../Card";
import Button from "../Button/Button";
import CharItem from "../CharItem/CharItem";
import PowersSelect from "./PowersSelect";

import { useToggleSelection } from "../../hooks/useToggleSelection";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "../../styles/animation.css";

import { useState } from "react";

function Powers({ character, setCharacter }) {
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

  function handleDetailDisplay(power) {
    return `Rank: ${power.rank}, Power Points: ${power.powerPoints}, Range: ${power.range}, Duration: ${power.duration}`;
  }

  return (
    <Card className={"slide slide-in-bottom"}>
      {!showItemSelect ? (
        <>
          <h2>Powers</h2>
          <div className="items-container">
            {character.powers.map((power) => (
              <CharItem
                key={power.id}
                item={power}
                descriptionExtra={handleDetailDisplay(power)}
                onDelete={() => toggleSelection("powers", power)}
              />
            ))}
          </div>
          <Button text="Select Powers" onClick={openSelect} />
        </>
      ) : (
        <PowersSelect
          slideClass={selectSlide.className}
          onDone={handleDone}
          character={character}
          toggleSelection={toggleSelection}
        />
      )}
    </Card>
  );
}

export default Powers;
