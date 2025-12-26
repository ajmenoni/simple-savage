import { useState } from "react";
import hindrancesData from "../../data/hindrances";
import Button from "../Button/Button";
import Card from "../Card";
import Modal from "../Modal/Modal";

function HindranceSelect({ hindrances, toggleSelection, slideClass, onDone }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedHindrance, setSelectedHindrance] = useState(null);
  const [severity, setSeverity] = useState("");

  function getSeverity(severity) {
    const result = severity.join(" / ");
    return result;
  }

  function checkSeverity(field, item) {
    if (item.severity.length > 1) {
      setSelectedHindrance(item);
      setOpenModal(true);
    } else {
      toggleSelection(field, {
        ...item,
        selectedSeverity: item.severity[0],
      });
      console.log(`from checkSeverity${hindrances}`);
    }
  }

  return (
    <div>
      <div className={slideClass}>
        <div className="items-container">
          {hindrancesData.map((hindrance) => {
            const isSelected = hindrances.some((h) => h.id === hindrance.id);

            return (
              <Card
                key={hindrance.id}
                className={`item-card ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  checkSeverity("hindrances", hindrance);
                }}
              >
                <div className="item-card-title">
                  {hindrance.name} ({getSeverity(hindrance.severity)})
                </div>
                <div>{hindrance.description}</div>
              </Card>
            );
          })}
        </div>

        <Button text="Done" onClick={onDone} />
      </div>
      {openModal && (
        <Modal
          type={"severityModal"}
          title={"Minor or Major?"}
          onSelect={(severity) => {
            toggleSelection("hindrances", {
              ...selectedHindrance,
              selectedSeverity: severity,
            });
            setOpenModal(false);
            setSelectedHindrance(null);
          }}
          onCancel={() => {
            setOpenModal(false);
            setSelectedHindrance(null);
          }}
        />
      )}
    </div>
  );
}

export default HindranceSelect;
