function Filters({
    transmission,
    setTransmission,
    type,
    setType,
    availableOnly,
    setAvailableOnly,
  }) {
    return (
      <div className="filters">
  
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <option value="All">All Transmissions</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
  
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Economy">Economy</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>
  
        <label>
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(e) => setAvailableOnly(e.target.checked)}
          />
          Available Only
        </label>
  
      </div>
    );
  }
  
  export default Filters;