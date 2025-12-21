import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Ancestries from "./Ancestries";
import "./Details.css";

function Details({ onNext }) {
  const [showAncestrySelect, setShowAncestrySelect] = useState(false);
  const [name, setName] = useState("");
  const [concept, setConcept] = useState("");
  const [ancestry, setAncestry] = useState(null);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const input = event.target;
      if (input.name === "name") {
        setName(input.value);
      } else if (input.name === "concept") {
        setConcept(input.value);
      }
    }
  }

  function handleSelection(id, name, description) {
    setAncestry({
      id: id,
      name: name,
      description: description,
    });
  }
  return (
    <>
      {!showAncestrySelect ? (
        <Card>
          <h2>Character Details</h2>

          {!name ? (
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p>{name}</p>
          )}

          {!concept ? (
            <input
              type="text"
              name="concept"
              id="concept"
              placeholder="Concept"
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p>{concept}</p>
          )}

          {!ancestry ? (
            <div className="card-actions detail-actions">
              <Button
                text={"Choose Ancestry"}
                onClick={() => {
                  setShowAncestrySelect(true);
                }}
              />
              <Button className="next" text={"Next"} onClick={onNext} />
            </div>
          ) : (
            <p>{ancestry.name}</p>
          )}
        </Card>
      ) : (
        <Card>
          <h2>Ancestries</h2>
          <Ancestries
            ancestrySelect={setShowAncestrySelect}
            handleSelection={handleSelection}
          />
        </Card>
      )}
    </>
  );
}

export default Details;
