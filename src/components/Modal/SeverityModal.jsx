export default function SeverityModal({ onSelect }) {
  return (
    <div className="side-by-side-buttons">
      <button onClick={() => onSelect("minor")}>Minor</button>
      <button onClick={() => onSelect("major")}>Major</button>
    </div>
  );
}
