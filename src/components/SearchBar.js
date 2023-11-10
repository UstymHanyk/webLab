import React from "react";
import search from "../images/search.png";
import "../styles/SearchBar.css";

const SearchBar = (onChange) => {


  return (
    <div className="catalog__filters-container__filter-wrapper">
      <label>Search by name:</label>
      <input
        className="search-input"
        placeholder="Search"
        onChange={(event) => onChange("name", event.target.value)}
      />
      <img src={search} alt="Search" className="search-image" />
    </div>
  );
};

export default SearchBar;
