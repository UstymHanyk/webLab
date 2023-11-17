import React, { useState, useEffect } from "react";
import diamondImg from "../images/gemstones/diamond.png";
import sapphireImg from "../images/gemstones/sapphire.png";
import rubyImg from "../images/gemstones/ruby.png";
import emeraldImg from "../images/gemstones/emerald.png"
import amethystImg from "../images/gemstones/amethyst.png"
import RangeSlider from "./RangeSlider";
import noGemstones from "../images/no_gemstones_found_filter.png";
import SearchBar from "./SearchBar";
import GradientAnimatedBackdrop from "./GradientAnimatedBackdrop";
import GemstoneTypeSelect from "./GemstoneTypeSelect";
import "../styles/Catalog.css";

const Catalog = () => {
  const gemstonesData = [
    {
      id: 1,
      name: "Diamond Zion",
      image: diamondImg,
      price: 10000,
      karats: 11,
      hardness: 10,
      type: "Diamond",
    },
    {
      id: 2,
      name: "Goa Sapphire",
      image: sapphireImg,
      price: 234,
      karats: 4,
      hardness: 7,
      type: "Sapphire",
    },
    {
      id: 3,
      name: "Ruby Lio",
      image: rubyImg,
      price: 223,
      karats: 1,
      hardness: 3,
      type: "Ruby",
    },
    {
        id: 4,
        name: "Sapphire Ezekiel",
        image: sapphireImg,
        price: 1221,
        karats: 6,
        hardness: 8,
        type: "Sapphire",
      },
      {
        id: 5,
        name: "Genryu Amethyst",
        image: amethystImg,
        price: 2223,
        karats: 18,
        hardness: 8,
        type: "Amethyst",
      },
      {
        id: 6,
        name: "Emerald 'Luck' ",
        image: emeraldImg,
        price: 243,
        karats: 4,
        hardness: 3,
        type: "Emerald",
      },
        {
          id: 1,
          name: "Diamond Koi",
          image: diamondImg,
          price:2343,
          karats: 2,
          hardness: 10,
          type: "Diamond",
        },
        {
          id: 2,
          name: "Goa Sapphire",
          image: sapphireImg,
          price: 234,
          karats: 4,
          hardness: 7,
          type: "Sapphire",
        },
        {
          id: 3,
          name: "Western Amethyst",
          image: amethystImg,
          price: 223,
          karats: 1,
          hardness: 3,
          type: "Ruby",
        },
        {
            id: 4,
            name: "Amethyst Ezekiel",
            image: amethystImg,
            price: 1221,
            karats: 6,
            hardness: 8,
            type: "Sapphire",
          },

  ];

  const [filters, setFilters] = useState({
    name: "",
    type: "",
    price: [0, 10000],
    karats: [0, 20],
    hardness: [0, 10],
  });
  const [selectedType, setSelectedType] = useState("");

  const [filteredGemstones, setFilteredGemstones] = useState([]);
  const gemstoneOptions = ["All Types", "Diamond", "Sapphire", "Ruby", "Amethyst", "Emerald"];

  // Handle filter changes for gemstone type and multi-range sliders
  const handleFilterChange = (name, values) => {
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
        (filters.type === "" || gemstone.type === filters.type) &&
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
        
      <GemstoneTypeSelect value={selectedType} onChange={handleFilterChange} options={gemstoneOptions} />
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
          <div key={gemstone.id} className="gemstone-item">
            <img src={gemstone.image} alt={gemstone.name} />
            <div className="gemstone-item-info">
              <p>{gemstone.name}</p>
              <p>Price: <span>${gemstone.price}</span></p>
              <p>Karats: <span>{gemstone.karats}</span></p>
              <p>Hardness: <span>{gemstone.hardness}</span></p>
            </div>
          </div>
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
