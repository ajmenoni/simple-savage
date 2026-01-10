function Search({ value, onChange }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search name or description"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Search;
