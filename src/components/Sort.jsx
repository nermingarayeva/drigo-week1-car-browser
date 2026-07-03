function Sort({ sort, setSort }) {
    return (
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Default</option>
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>
    );
  }
  
  export default Sort;