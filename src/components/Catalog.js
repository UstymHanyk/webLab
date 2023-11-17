import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import noGemstones from "../images/no_gemstones_found_filter.png";
import SearchBar from "./SearchBar";
import GradientAnimatedBackdrop from "./GradientAnimatedBackdrop";
import Select from "./Select";
import "../styles/Catalog.css";
import Gemstone from "./Gemstone";
import { gemstonesData } from './gemstonesData';



const Catalog = () => {

  const [filters, setFilters] = useState({
    name: "",
    type: "All Types",
    price: [0, 10000],
    karats: [0, 20],
    hardness: [0, 10],
  });

  const [filteredGemstones, setFilteredGemstones] = useState([]);
  const gemstoneOptions = ["All Types", "Diamond", "Sapphire", "Ruby", "Amethyst", "Emerald"];

  // Handle filter changes for gemstone type and multi-range sliders
  const handleFilterChange = (name, values) => {
    console.log(values)
    setFilters({
      ...filters,
      [name]: values,
    });
  };

  const handleRangeChange = (name, values) => {
    setFilters({
      ...filters,
      [name]: values,
    });
  };

  useEffect(() => {
    const filteredGemstones = gemstonesData.filter((gemstone) => {
      return (
        (filters.name === "" || gemstone.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) &&
        (filters.type === "All Types" || gemstone.type === filters.type) &&
        gemstone.price >= filters.price[0] &&
        gemstone.price <= filters.price[1] &&
        gemstone.karats >= filters.karats[0] &&
        gemstone.karats <= filters.karats[1] &&
        gemstone.hardness >= filters.hardness[0] &&
        gemstone.hardness <= filters.hardness[1]
      );
    });
    setFilteredGemstones(filteredGemstones);
  }, [filters]);

  return (
    <div className="catalog__wrapper">
  <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
  <h2>
        <span className="underline-light_purple">Our Gems</span>
      </h2>    
      <div className="catalog__filters-container">
        
      <Select lbael="Type" value={filters.type} onChange={handleFilterChange} options={gemstoneOptions} />
            <SearchBar onChange={handleFilterChange}></SearchBar>
          <div className="catalog__filters-container__filter-wrapper">
            <label>Price:</label>
            <RangeSlider
            min={0}
            max={10000}
            onRangeChange={(values) => handleFilterChange('price', values)}
          />
          </div>
          <div className="catalog__filters-container__filter-wrapper">
            <label>Karats:</label>
            <RangeSlider
            min={0}
            max={20}
            onRangeChange={(values) => handleFilterChange('karats', values)}
          />
          </div>
          <div className="catalog__filters-container__filter-wrapper">
            <label>Hardness:</label>
            <RangeSlider
            min={0}
            max={10}
            onRangeChange={(values) => handleFilterChange('hardness', values)}
          />
          </div>
        </div>
      {/* Gemstones Grid */}
      {filteredGemstones.length > 0 ? (
      <div className="gemstones-grid">
        {filteredGemstones.map((gemstone) => (
           <Gemstone
           key={gemstone.id}
           id={gemstone.id}
           name={gemstone.name}
           image={gemstone.type}
           price={gemstone.price}
           karats={gemstone.karats}
           hardness={gemstone.hardness}
         />
        ))}
      </div>

        ) : (
          <div className="no-gemstones-image-wrapper">

          <img src={noGemstones} className="no-gemstones-image-cover"></img>
            <div>
              No gemstones fit your criteria
            </div>
          </div>
        )}
    </div>
  );
};

export default Catalog;
