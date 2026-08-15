import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import HindranceSelect from "./HindranceSelect";
import CharItem from "../CharItem/CharItem";

import { useSlide } from "../../hooks/useSlide";
import SLIDE from "../../constants/slideDirections";

import "../../App.css";
import "./Hindrances.css";
import "../../styles/animation.css";

function Hindrances({ character, setCharacter }) {
  const [showItemSelect, setShowItemSelect] = useState(false);

  const selectSlide = useSlide(SLIDE.LEFT);

  function getHindranceValue(severity) {
    const normalized = String(severity || "minor").toLowerCase();
    return normalized === "major" ? 2 : 1;
  }

  function toggleSelection(field, item) {
    if (field !== "hindrances") {
      return;
    }

    setCharacter((prev) => {
      const list = Array.isArray(prev[field]) ? prev[field] : [];
      const selectedItem = list.find((entry) => entry.id === item.id);
      const severityValue = getHindranceValue(
        item.selectedSeverity ?? item.severity?.[0] ?? "minor",
      );

      if (selectedItem) {
        const updatedList = list.filter((entry) => entry.id !== item.id);
        const nextPoints =
          (prev.hindrancePoints ?? 0) -
          getHindranceValue(
            selectedItem.selectedSeverity ??
              selectedItem.severity?.[0] ??
              "minor",
          );

        return {
          ...prev,
          [field]: updatedList,
          hindrancePoints: Math.max(0, nextPoints),
        };
      }

      const updatedList = [...list, { ...item }];
      const nextPoints = (prev.hindrancePoints ?? 0) + severityValue;

      return {
        ...prev,
        [field]: updatedList,
        hindrancePoints: nextPoints,
      };
    });
  }

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
