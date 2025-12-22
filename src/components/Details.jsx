import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Ancestries from "./Ancestries";
import "./Details.css";

function Details({ character, setCharacter, onNext }) {
  const [showAncestrySelect, setShowAncestrySelect] = useState(false);
  const { name, concept, ancestry } = character;

  function updateCharacterField(field, value) {
    setCharacter((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleInputEvent(event) {
    if (
      event.type === "blur" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      const { name, value } = event.target;
      updateCharacterField(name, value);
    }
  }

  function handleSelection(id, name, description) {
    updateCharacterField("ancestry", {
      id,
      name,
      description,
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
              onKeyDown={handleInputEvent}
              onBlur={handleInputEvent}
            />
          ) : (
            <>
              <span className="title">Name: </span>
              <p>{name}</p>
            </>
          )}

          {!concept ? (
            <input
              type="text"
              name="concept"
              id="concept"
              placeholder="Concept"
              onKeyDown={handleInputEvent}
              onBlur={handleInputEvent}
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
