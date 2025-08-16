import React from "react";

const FilterDropdown = ({ selected, onChange }) => {
  return (
    <div className="filter-dropdown">
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="7d">Last 7 Days</option>
        <option value="24h">Last 24 Hours</option>
        <option value="30d">Last 30 Days</option>
        <option value="6m">Last 6 Months</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
