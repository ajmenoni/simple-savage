import { useState, useEffect } from "react";
import Button from "../Button/Button";

function prettyType(t) {
  if (!t) return "";
  // makes title for each modal
  const withSpaces = t.replace(/([A-Z])/g, " $1");
  return withSpaces
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function GearModal({ onSelect, onCancel, setTitle }) {
  const [stage, setStage] = useState("select");
  const [type, setType] = useState(null);

  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  function choose(t) {
    setType(t);
    setForm({});
    setStage("form");
  }

  useEffect(() => {
    if (setTitle) setTitle("Add Gear");
  }, [setTitle]);

  useEffect(() => {
    if (stage === "form" && type && setTitle) {
      setTitle(`Add ${prettyType(type)}`);
    }
  }, [stage, type, setTitle]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function submit() {
    const name = (form.name || form.itemName || "").trim();
    if (!name) {
      setError("Name is required");
      return;
    }
    setError("");
    //need ids for items
    const now = new Date();
    const id = Math.floor(now.getTime() / 1000).toString();
    const item = { id, name, type, ...form };
    onSelect(item);
  }

  if (stage === "select") {
    return (
      <div className="gear-modal">
        <Button text="Armor" onClick={() => choose("armor")} />
        <Button
          text="Personal Weapon"
          onClick={() => choose("personalWeapon")}
        />
        <Button text="Shield" onClick={() => choose("shield")} />
        <Button text="Ranged Weapon" onClick={() => choose("rangedWeapon")} />
        <Button text="Item" onClick={() => choose("item")} />
        <div style={{ marginTop: 8 }}>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="gear-modal">
      {type === "armor" && (
        <div className="gear-form-row">
          <input
            placeholder="Name"
            value={form.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            placeholder="Armor Value"
            value={form.armor || ""}
            onChange={(e) => update("armor", e.target.value)}
          />
          <input
            placeholder="Min Str."
            value={form.minStr || ""}
            onChange={(e) => update("minStr", e.target.value)}
          />
          <input
            placeholder="Notes"
            value={form.notes || ""}
            onChange={(e) => update("notes", e.target.value)}
          />
          {/* <input
            placeholder="Weight"
            value={form.weight || ""}
            onChange={(e) => update("weight", e.target.value)}
          /> */}
        </div>
      )}

      {type === "shield" && (
        <div className="gear-form-row">
          <input
            placeholder="Name"
            value={form.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            placeholder="Parry"
            value={form.parry || ""}
            onChange={(e) => update("parry", e.target.value)}
          />
          <input
            placeholder="Cover"
            value={form.cover || ""}
            onChange={(e) => update("cover", e.target.value)}
          />
          <input
            placeholder="Min Str"
            value={form.minStr || ""}
            onChange={(e) => update("minStr", e.target.value)}
          />
          <input
            placeholder="Notes"
            value={form.notes || ""}
            onChange={(e) => update("notes", e.target.value)}
          />
          {/* <input
            placeholder="Weight"
            value={form.weight || ""}
            onChange={(e) => update("weight", e.target.value)}
          /> */}
        </div>
      )}

      {type === "personalWeapon" && (
        <div className="gear-form-row">
          <input
            placeholder="Name"
            value={form.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            placeholder="Damage"
            value={form.damage || ""}
            onChange={(e) => update("damage", e.target.value)}
          />
          <input
            placeholder="Min Str."
            value={form.minStr || ""}
            onChange={(e) => update("minStr", e.target.value)}
          />
          {/* <input
            placeholder="Weight"
            value={form.weight || ""}
            onChange={(e) => update("weight", e.target.value)}
          /> */}
          <input
            placeholder="Notes"
            value={form.notes || ""}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>
      )}

      {type === "rangedWeapon" && (
        <div className="gear-form-row">
          <input
            placeholder="Name"
            value={form.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            placeholder="Range"
            value={form.range || ""}
            onChange={(e) => update("range", e.target.value)}
          />
          <input
            placeholder="Damage"
            value={form.damage || ""}
            onChange={(e) => update("damage", e.target.value)}
          />
          <input
            placeholder="AP"
            value={form.ap || ""}
            onChange={(e) => update("ap", e.target.value)}
          />
          <input
            placeholder="ROF"
            value={form.rof || ""}
            onChange={(e) => update("rof", e.target.value)}
          />
          <input
            placeholder="Min Str."
            value={form.minStr || ""}
            onChange={(e) => update("minStr", e.target.value)}
          />
          {/* <input
            placeholder="Weight"
            value={form.weight || ""}
            onChange={(e) => update("weight", e.target.value)}
          /> */}
          <input
            placeholder="Notes"
            value={form.notes || ""}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>
      )}

      {type === "item" && (
        <div className="gear-form-row">
          <input
            placeholder="Name/Item"
            value={form.name || ""}
            onChange={(e) => update("name", e.target.value)}
          />
          {/* <input
            placeholder="Cost"
            value={form.cost || ""}
            onChange={(e) => update("cost", e.target.value)}
          /> */}
          {/* <input
            placeholder="Weight"
            value={form.weight || ""}
            onChange={(e) => update("weight", e.target.value)}
          /> */}
          <input
            placeholder="Notes"
            value={form.notes || ""}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>
      )}

      {error && <div style={{ color: "#ff6b6b", marginTop: 8 }}>{error}</div>}

      <div style={{ marginTop: 8 }}>
        <Button className="gear-modal-button" text="Done" onClick={submit} />
        <button onClick={onCancel} style={{ marginTop: 8 }}>
          Cancel
        </button>
      </div>
    </div>
  );
}
