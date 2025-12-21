import ancestries from "../data/ancestries";
import Card from "./Card";
import "./Ancestries.css";
import "../App.css";
import Button from "./Button";
import { useState } from "react";

function Ancestries({ ancestrySelect, handleSelection }) {
  const [selectedId, setSelectedId] = useState(null);

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
      <div className="ancestries-container">
        {ancestries.map((ancestry) => (
          <Ancestry
            key={ancestry.id}
            id={ancestry.id}
            name={ancestry.name}
            description={ancestry.description}
          />
        ))}
      </div>
      <Button text="Select" onClick={() => ancestrySelect(false)} />
    </>
  );
}

export default Ancestries;
