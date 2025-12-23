import Trashcan from "../Traschcan";
import "./Delete.css";

function Delete({ onClick, label = "Delete", className = "" }) {
  return (
    <button
      type="button"
      className={`icon-button ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <Trashcan className="trashcan" />
    </button>
  );
}

export default Delete;
