import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card";
import Ancestries from "../Ancestries/Ancestries";
import "./Details.css";
import Delete from "../Delete/Delete";

function Details({ character, setCharacter }) {
  const [showAncestrySelect, setShowAncestrySelect] = useState(false);
  const [slideIn, setSlidIn] = useState(true);
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
          <div className={slideIn ? "slide-in-top" : ""}>
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
              <div className="trait-container">
                <span className="title">Name: </span>
                <span>{name}</span>
                <Delete onClick={() => updateCharacterField("name", null)} />
              </div>
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
              <div className="trait-container">
                <span className="title">Concept: </span>
                <span>{concept}</span>
                <Delete onClick={() => updateCharacterField("concept", null)} />
              </div>
            )}

            {!ancestry ? (
              <div className="card-actions detail-actions">
                <Button
                  text={"Choose Ancestry"}
                  onClick={() => {
                    {
                      setShowAncestrySelect(true);
                      setSlidIn(false);
                    }
                  }}
                />
              </div>
            ) : (
              <div className="trait-container">
                <span className="title">Ancestry: </span>
                <span>{ancestry.name}</span>
                <Delete
                  onClick={() => updateCharacterField("ancestry", null)}
                />
              </div>
            )}
          </div>
        </Card>
      ) : (
        <Card>
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
