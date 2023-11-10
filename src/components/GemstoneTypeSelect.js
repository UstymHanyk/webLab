import React from "react";

const GemstoneTypeSelect = ({ value, onChange }) => {
  return (
    <div className="catalog__filters-container__filter-wrapper">
      <label>Type:</label>
      <select
        name="type"
        value={value}
        onChange={(event) => onChange("type", event.target.value)}
      >
        <option value="">All Types</option>
        <option value="Diamond">Diamond</option>
        <option value="Sapphire">Sapphire</option>
        <option value="Ruby">Ruby</option>
        <option value="Amethyst">Amethyst</option>
        <option value="Emerald">Emerald</option>
      </select>
    </div>
  );
};

export default GemstoneTypeSelect;
