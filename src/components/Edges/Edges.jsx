import { useState } from "react";

import Card from "../Card";
import Button from "../Button/Button";
import EdgesSelect from "./EdgesSelect";
import Delete from "../Delete/Delete";

import { useToggleSelection } from "../../hooks/useToggleSelection";
import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "../../styles/animation.css";

function Edges({ character, setCharacter }) {
  console.log(character.edges);
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
          <h2>Edges</h2>
          <div className="items-container">
            {character.edges.map((edge) => (
              <CharEdge
                key={edge.id}
                edge={edge}
                toggleSelection={toggleSelection}
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

function CharEdge({ edge, toggleSelection }) {
  return (
    <div className={`trait-container trait-container--stacked `}>
      <span className="title top-title">{edge.name}</span>
      <div className="trait-row">
        <span>{edge.description}</span>
        <Delete onClick={() => toggleSelection("edges", edge)} />
      </div>
    </div>
  );
}

export default Edges;
