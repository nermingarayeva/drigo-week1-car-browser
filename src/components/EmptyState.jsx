function EmptyState({ resetFilters }) {
    return (
      <div className="empty">
        <h2>No cars found</h2>
  
        <button onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    );
  }
  
  export default EmptyState;