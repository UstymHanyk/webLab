import React, { useState, useEffect } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import diamondImg from "../images/gemstones/diamond.png";
import sapphireImg from "../images/gemstones/sapphire.png";
import rubyImg from "../images/gemstones/ruby.png";

const Catalog = () => {
  const gemstonesData = [
    {
      id: 1,
      name: "Diamond Zion",
      image: diamondImg,
      price: 243,
      karats: 4,
      hardness: 10,
      type: "Diamond",
    },
    {
      id: 2,
      name: "Sapphire Goa",
      image: sapphireImg,
      price: 234,
      karats: 4,
      hardness: 10,
      type: "Sapphire",
    },
    {
      id: 3,
      name: "Ruby Lio",
      image: rubyImg,
      price: 223,
      karats: 4,
      hardness: 10,
      type: "Ruby",
    },
    {
        id: 4,
        name: "Sapphire Ezekiel",
        image: sapphireImg,
        price: 213,
        karats: 4,
        hardness: 10,
        type: "Diamond",
      },
      {
        id: 5,
        name: "Sapphire Po",
        image: sapphireImg,
        price: 234,
        karats: 4,
        hardness: 10,
        type: "Sapphire",
      },
      {
        id: 6,
        name: "Eastern Ruby",
        image: rubyImg,
        price: 243,
        karats: 4,
        hardness: 10,
        type: "Ruby",
      },
  ];

  const [filters, setFilters] = useState({
    type: "",
    price: [0, 1000],
    karats: [0, 10],
    hardness: [0, 10],
  });

  const [filteredGemstones, setFilteredGemstones] = useState([]);

  // Handle filter changes for gemstone type and multi-range sliders
  const handleFilterChange = (name, values) => {
    setFilters({
      ...filters,
      [name]: values,
    });
  };

  useEffect(() => {
    const filteredGemstones = gemstonesData.filter((gemstone) => {
      return (
        (filters.type === "" || gemstone.type === filters.type) &&
        gemstone.price >= filters.price[0] &&
        gemstone.price <= filters.price[1] &&
        gemstone.karats >= filters.karats[0] &&
        gemstone.karats <= filters.karats[1] &&
        gemstone.hardness >= filters.hardness['min'] &&
        gemstone.hardness <= filters.hardness['max']
      );
    });
    setFilteredGemstones(filteredGemstones);
  }, [filters]);

  return (
    <div>
      <h1>Gemstone Catalog</h1>

      {/* Filters */}
      <div>
        <select
          name="type"
          value={filters.type}
          onChange={(event) => handleFilterChange("type", event.target.value)}
        >
          <option value="">All Types</option>
          <option value="Diamond">Diamond</option>
          <option value="Sapphire">Sapphire</option>
          <option value="Ruby">Ruby</option>
        </select>
        <div>
          <label>Price Range: ${filters.price[0]} - ${filters.price[1]}</label>
         
        </div>
        <div>
          <label>Karats Range: {filters.karats[0]} - {filters.karats[1]}</label>
          
        </div>
        <div>
          <label>Hardness Range: {filters.hardness[0]} - {filters.hardness[1]}</label>
         
        </div>
      </div>

      {/* Gemstones Grid */}
      <div className="gemstones-grid">
        {filteredGemstones.map((gemstone) => (
          <div key={gemstone.id} className="gemstone-item">
            <img src={gemstone.image} alt={gemstone.name} />
            <h3>{gemstone.name}</h3>
            <p>Price: ${gemstone.price}</p>
            <p>Karats: {gemstone.karats}</p>
            <p>Hardness: {gemstone.hardness}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
