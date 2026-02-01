import { useState } from "react";

import Card from "../Card";
import Button from "../Button/Button";
import EdgesSelect from "./EdgesSelect";
import CharItem from "../CharItem/CharItem";

import { useToggleSelection } from "../../hooks/useToggleSelection";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "../../styles/animation.css";

function Edges({ character, setCharacter }) {
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

  function isArcaneBackground(edge) {
    if (!edge.arcaneSkill) {
      return;
    }

    const arcaneText = `${edge.arcaneSkill}, Starting Powers: ${edge.startingPowers}, Power Points: ${edge.powerPoints}`;
    return arcaneText;
  }

  return (
    <Card className={"slide slide-in-bottom"}>
      {!showItemSelect ? (
        <>
          <h2>Edges</h2>
          <div className="items-container">
            {character.edges.map((edge) => (
              <CharItem
                key={edge.id}
                item={edge}
                descriptionExtra={isArcaneBackground(edge)}
                onDelete={() => toggleSelection("edges", edge)}
              />
            ))}
          </div>
          <Button text="Select Edges" onClick={openSelect} />
        </>
      ) : (
        <EdgesSelect
          slideClass={selectSlide.className}
          onDone={handleDone}
          character={character}
          toggleSelection={toggleSelection}
        />
      )}
    </Card>
  );
}

export default Edges;
