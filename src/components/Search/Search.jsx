function Search({ value, onChange }) {
  return (
    <input
      id="search"
      type="text"
      className="search"
      placeholder="Search name or description"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Search;
