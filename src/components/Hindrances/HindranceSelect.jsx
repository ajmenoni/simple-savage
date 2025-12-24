import hindrancesData from "../../data/hindrances";
import Button from "../Button/Button";
import Card from "../Card";

function HindranceSelect({ hindrances, toggleSelection, slideClass, onDone }) {
  return (
    <div className={slideClass}>
      <div className="items-container">
        {hindrancesData.map((hindrance) => {
          const isSelected = hindrances.some((h) => h.id === hindrance.id);

          return (
            <Card
              key={hindrance.id}
              className={`item-card ${isSelected ? "selected" : ""}`}
              onClick={() => toggleSelection("hindrances", hindrance)}
            >
              <div className="item-card-title">{hindrance.name}</div>
              <div>{hindrance.description}</div>
            </Card>
          );
        })}
      </div>

      <Button text="Done" onClick={onDone} />
    </div>
  );
}

export default HindranceSelect;
