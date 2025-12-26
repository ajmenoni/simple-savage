import "./Modal.css";
import SeverityModal from "./SeverityModal";

export default function Modal({ title, type, onCancel, onSelect }) {
  return (
    <div className={`modal-overlay show`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          {type === "severityModal" && <SeverityModal onSelect={onSelect} />}
        </div>
        <div className="modal-footer">
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
