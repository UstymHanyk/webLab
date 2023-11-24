import React from "react";

const Select = ({name, label, value, onChange, options }) => {
    return (
      <div className="catalog__filters-container__filter-wrapper">
        <label>{label}:</label>
        <select
          name={name}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
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
  

export default Select;
