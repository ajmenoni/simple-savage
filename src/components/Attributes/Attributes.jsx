import Card from "../Card";
import attributes from "../../data/attributes";

function Attributes() {
  return (
    <Card>
      <div className="slide slide-in-bottom">
        <h2>Attributes</h2>
        <div>
          {attributes.map((attribute) => (
            <div>
              {attribute.name} <input type="checkbox" id="" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Attributes;
