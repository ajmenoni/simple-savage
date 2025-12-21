import Button from "./Button";
function Details() {
  function beginAncestrySelect() {
    alert("you clicked ancest select");
  }
  return (
    <>
      <h2>Character Details</h2>
      <input type="text" name="charName" id="charName" placeholder="Name" />
      <input type="text" name="concept" id="concept" placeholder="Concept" />
      <Button text={"Choose Ancestry"} onClick={beginAncestrySelect} />
    </>
  );
}

export default Details;
