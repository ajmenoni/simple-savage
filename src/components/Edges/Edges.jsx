import { useState } from "react";

import Card from "../Card";
import Button from "../Button/Button";
import Delete from "../Delete/Delete";

import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "../../styles/animation.css";

function Edges() {
  const [showItemSelect, setShowItemSelect] = useState(false);

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
    <Card>
      <div className="slide slide-in-bottom">
        <h2>Edges</h2>
        <div className="items-container"></div>
      </div>
      <Button text="Select Edges" onClick={openSelect} />
    </Card>
  );
}

function EdgeSelect() {}

export default Edges;
