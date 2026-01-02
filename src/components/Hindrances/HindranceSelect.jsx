import { useState } from "react";
import hindrancesData from "../../data/hindrances";
import Button from "../Button/Button";
import Card from "../Card";
import Modal from "../Modal/Modal";
import { searchData } from "../../utils/searchData";

function HindranceSelect({ hindrances, toggleSelection, slideClass, onDone }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedHindrance, setSelectedHindrance] = useState(null);
  const [search, setSearch] = useState("");
  const filteredHindrances = searchData({
    data: hindrancesData,
    search,
  });

  function getSeverity(severity) {
    const result = severity.join(" / ");
    return result;
  }

  function checkSeverity(field, item, isSelected) {
    if (item.severity.length > 1) {
      setSelectedHindrance(item);
      if (isSelected) {
        toggleSelection(field, {
          ...item,
          selectedSeverity: item.severity[0],
        });
      } else {
        setOpenModal(true);
      }
    } else {
      toggleSelection(field, {
        ...item,
        selectedSeverity: item.severity[0],
      });
    }
  }

  return (
    <div>
      <div className={slideClass}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search name or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="items-container">
          {filteredHindrances.map((hindrance) => {
            const isSelected = hindrances.some((h) => h.id === hindrance.id);

            return (
              <Card
                key={hindrance.id}
                className={`item-card ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  checkSeverity("hindrances", hindrance, isSelected);
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
