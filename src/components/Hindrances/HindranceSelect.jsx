import hindrancesData from "../../data/hindrances";
import Button from "../Button/Button";
import Card from "../Card";

function HindranceSelect({ hindrances, toggleSelection, slideIn, onDone }) {
  function handleToggle(e, hindrance) {
    // Toggle global state
    toggleSelection("hindrances", hindrance);

    // Remove any lingering focus/active state on mobile by briefly focusing then blurring
    try {
      const el = e.currentTarget;
      if (el && typeof el.focus === "function") el.focus();
      if (el && typeof el.blur === "function") el.blur();
    } catch (err) {
      // ignore
    }
  }

  return (
    <div className={slideIn ? "slide-in-left" : "slide-out-left"}>
      <div className="items-container">
        {hindrancesData.map((hindrance) => {
          const isSelected = hindrances.some((h) => h.id === hindrance.id);

          return (
            <Card
              key={hindrance.id}
              className={`item-card ${isSelected ? "selected" : ""}`}
              onClick={(e) => handleToggle(e, hindrance)}
              tabIndex={-1}
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
