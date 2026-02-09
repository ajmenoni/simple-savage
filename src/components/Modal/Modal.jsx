import "./Modal.css";
import { useState, useEffect } from "react";
import SeverityModal from "./SeverityModal";
import RemoveSkillModal from "./RemoveSkillModal";
import GearModal from "./GearModal";

export default function Modal({ title, type, onCancel, onSelect }) {
  const [headerTitle, setHeaderTitle] = useState(title);

  useEffect(() => {
    if (type !== "gear") setHeaderTitle(title);
  }, [type, title]);

  return (
    <div className={`modal-overlay show`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{headerTitle}</h2>
        </div>

        <div className="modal-body">
          {type === "severityModal" && <SeverityModal onSelect={onSelect} />}
          {type === "removeSkillModal" && (
            <RemoveSkillModal onSelect={onSelect} onCancel={onCancel} />
          )}
          {type === "gear" && (
            <GearModal
              onSelect={onSelect}
              onCancel={onCancel}
              setTitle={setHeaderTitle}
            />
          )}
        </div>

        {type === "severityModal" && (
          <div className="modal-footer">
            <button onClick={onCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
