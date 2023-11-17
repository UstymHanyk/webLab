import React from "react";

const GemstoneTypeSelect = ({ value, onChange, options }) => {
    return (
      <div className="catalog__filters-container__filter-wrapper">
        <label>Type:</label>
        <select
          name="type"
          value={value}
          onChange={(event) => onChange("type", event.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  

export default GemstoneTypeSelect;
