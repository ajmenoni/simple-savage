import { useState } from "react";
import Card from "../Card";
import Button from "../Button/Button";
import CharItem from "../CharItem/CharItem";
import Delete from "../Delete/Delete";
import { useToggleSelection } from "../../hooks/useToggleSelection";
import Modal from "../Modal/Modal";

import "./Gear.css";

function Gear({ character, setCharacter }) {
  const [showModal, setShowModal] = useState(false);
  const toggleSelection = useToggleSelection(setCharacter);

  function openModal() {
    setShowModal(true);
  }

  function handleDone(item) {
    setCharacter((prev) => ({
      ...prev,
      items: [...(prev.items || []), item],
    }));
    setShowModal(false);
  }

  function handleCancel() {
    setShowModal(false);
  }

  return (
    <Card className={"slide slide-in-bottom"}>
      <h2>Gear</h2>

      <div className="items-container">
        {(character.items || []).map((item) => (
          <Item
            key={item.id}
            item={{
              ...item,
              description: item.notes || item.description || "",
            }}
            onDelete={() => toggleSelection("items", item)}
          />
        ))}
      </div>

      <Button text="Add Gear" onClick={openModal} />

      {showModal && (
        <Modal
          type="gear"
          title="Add Gear"
          onSelect={handleDone}
          onCancel={handleCancel}
        />
      )}
    </Card>
  );
}

function armorBuilder(item) {
  return (
    <>
      <div>Armor: {item.armor}</div>
      <div>Min Str: {item.minStr}</div>
    </>
  );
}

function buildPersonalWeapon(item) {
  return (
    <>
      <div>Damage: {item.damage}</div>
      <div>Min Str: {item.minStr}</div>
    </>
  );
}

function buildShield(item) {
  return (
    <>
      <div>Parry: {item.parry}</div>
      <div>Cover: {item.cover}</div>
      <div>Min Str: {item.minStr}</div>
    </>
  );
}

function buildRangedWeapon(item) {
  return (
    <>
      <div>Range: {item.range}</div>
      <div>Damage: {item.damage}</div>
      <div>AP: {item.ap}</div>
      <div>ROF: {item.rof}</div>
      <div>Min Str: {item.minStr}</div>
    </>
  );
}

function buildItem(item) {
  return <></>;
}

function Item({ item, onDelete }) {
  return (
    <div className={`trait-container trait-container--stacked `}>
      <span className="title top-title">{item.name}</span>

      <div className="trait-row">
        <div style={{ minWidth: 341 }}>
          {item.type === "armor" && armorBuilder(item)}
          {item.type === "personalWeapon" && buildPersonalWeapon(item)}
          {item.type === "shield" && buildShield(item)}
          {item.type === "rangedWeapon" && buildRangedWeapon(item)}
          {item.type === "item" && buildItem(item)}
          {item.notes && <div>Notes: {item.notes}</div>}
        </div>
        <Delete onClick={onDelete} />
      </div>
    </div>
  );
}

export default Gear;
