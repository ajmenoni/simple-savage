export default function RemoveSkillModal({ onSelect, onCancel }) {
  return (
    <div className="side-by-side-buttons">
      <button onClick={() => onSelect()}>Yes</button>
      <button onClick={() => onCancel()}>No</button>
    </div>
  );
}
