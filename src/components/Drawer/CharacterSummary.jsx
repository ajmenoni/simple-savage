function CharacterSummary({ character }) {
  return (
    <>
      <div className="drawer-section">
        <h3>Name</h3>
        <p>{character.name || "Not set"}</p>
      </div>

      <div className="drawer-section">
        <h3>Concept</h3>
        <p>{character.concept || "Not set"}</p>
      </div>

      <div className="drawer-section">
        <h3>Ancestry</h3>
        <p>{character.ancestry?.name || "Not set"}</p>
      </div>
    </>
  );
}

export default CharacterSummary;
