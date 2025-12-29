import Card from "../Card";
import { calcAttributePoints } from "../../utils/calcAttributePoints";
import "./PointDisplay.css";

function PointDisplay({ attributePoints }) {
  return (
    <div className="points">
      <span>Points spent:</span>
      <span className="title count">{attributePoints}</span>
    </div>
  );
}

export default PointDisplay;
