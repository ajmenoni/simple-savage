import Button from "./Button";
import Card from "./Card";
import "./Details.css";

function Details({ onNext }) {
  function beginAncestrySelect() {
    alert("you clicked ancest select");
  }
  return (
    <Card>
      <h2>Character Details</h2>
      <input type="text" name="charName" id="charName" placeholder="Name" />
      <input type="text" name="concept" id="concept" placeholder="Concept" />

      <div className="card-actions detail-actions">
        <Button text={"Choose Ancestry"} onClick={beginAncestrySelect} />
        <Button className="next" text={"Next"} onClick={onNext} />
      </div>
    </Card>
  );
}

export default Details;
