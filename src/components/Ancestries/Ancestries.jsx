import ancestries from "../../data/ancestries";
import Card from "../Card";
import "./Ancestries.css";
import "../../App.css";
import "../../styles/animation.css";
import Button from "../Button/Button";
import { useState } from "react";
import SLIDE from "../../constants/slideDirections";
import { useSlide } from "../../hooks/useSlide";
import { searchData } from "../../utils/searchData";

function Ancestries({ ancestrySelect, handleSelection }) {
  const [selectedId, setSelectedId] = useState(null);
  const ancestrySlide = useSlide(SLIDE.LEFT);
  const [search, setSearch] = useState("");
  const filteredAncestries = searchData({
    data: ancestries,
    search,
  });

  function Ancestry({ id, name, description }) {
    const isSelected = id === selectedId;

    return (
      <Card
        className={`item-card ${isSelected ? "selected" : ""}`}
        onClick={() => {
          setSelectedId(id);
          handleSelection(id, name, description);
        }}
      >
        <div className="item-card-title">{name}</div>
        <div>{description}</div>
      </Card>
    );
  }

  return (
    <>
      <div className={ancestrySlide.className}>
        <h2>Ancestries</h2>
        <input
          type="text"
          className="search"
          placeholder="Search name or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="items-container">
          {filteredAncestries.map((ancestry) => (
            <Ancestry
              key={ancestry.id}
              id={ancestry.id}
              name={ancestry.name}
              description={ancestry.description}
            />
          ))}
        </div>
        <Button
          text="Done"
          onClick={() => {
            ancestrySlide.slideOut(SLIDE.LEFT);
            setTimeout(() => {
              ancestrySelect(false);
            }, 300);
          }}
        />
      </div>
    </>
  );
}

export default Ancestries;
