import React from "react";
import "../styles/Input.css"
const Input = ({ label,placeholder, value, onChange }) => {
  return (
    <div className="catalog__filters-container__filter-wrapper">
    <label>{label}:</label>
    <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
  </div>
      
  );
};

export default Input;
