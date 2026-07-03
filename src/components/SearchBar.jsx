function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        placeholder="Search car..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search"
      />
    );
  }
  
  export default SearchBar;