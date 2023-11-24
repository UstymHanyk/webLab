import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import noGemstones from "../images/no_gemstones_found_filter.png";
import SearchBar from "./SearchBar";
import GradientAnimatedBackdrop from "./GradientAnimatedBackdrop";
import Select from "./Select";
import "../styles/Catalog.css";
import Gemstone from "./Gemstone";
// import { gemstonesData } from './gemstonesData';
import { fetchAllGemstones,fetchFilteredGemstones } from '../api/apiService';
import diamondImg from "../images/gemstones/diamond.png";
import sapphireImg from "../images/gemstones/sapphire.png";
import rubyImg from "../images/gemstones/ruby.png";
import emeraldImg from "../images/gemstones/emerald.png"
import amethystImg from "../images/gemstones/amethyst.png"



const Catalog = () => {

  const [gemstonesData, setGemstonesData]=useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gemstonesFromApi = await fetchAllGemstones(); // Fetch all gemstones
        setGemstonesData(gemstonesFromApi); // Set the fetched gemstones to state
        console.log("First fetch")
        console.log(gemstonesFromApi)

      } catch (error) {
        console.error("Error fetching gemstones:", error);
      }
    };

    fetchData(); // Fetch all gemstones when the component mounts
  }, []);

  const [filters, setFilters] = useState({
    name: "",
    type: "All Types",
    price: [0, 10000],
    karats: [0, 20],
    hardness: [0, 10],
    sort_by: 'price', 
    sort_direction: 'asc', 
  });  

  const [filteredGemstones, setFilteredGemstones] = useState([]);
  const gemstoneOptions = ["All Types", "Diamond", "Sapphire", "Ruby", "Amethyst", "Emerald"];

  // Handle filter changes for gemstone type and multi-range sliders
  const handleFilterChange = (name, values) => {
    setFilters({
      ...filters,
      [name]: values,
    });
  };

  // const [sortOption, setSortOption] = useState('price');
  // const [sortDirection, setSortDirection] = useState('asc');

  const sortOptionsList = ['price','name','karats','hardness'];

  // const handleSortChange=(name, value)=>{
  //   setSortOption(value);
  // }

  // let sortedGemstones = [...filteredGemstones];

  // useEffect(() => {
  //   const filteredGemstones = gemstonesData.filter((gemstone) => {
  //     return (
  //       (filters.name === "" || gemstone.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) &&
  //       (filters.type === "All Types" || gemstone.type === filters.type) &&
  //       gemstone.price >= filters.price[0] &&
  //       gemstone.price <= filters.price[1] &&
  //       gemstone.karats >= filters.karats[0] &&
  //       gemstone.karats <= filters.karats[1] &&
  //       gemstone.hardness >= filters.hardness[0] &&
  //       gemstone.hardness <= filters.hardness[1]
  //     );
  //   });
  //   setFilteredGemstones(filteredGemstones);

    
  //   console.log(sortOption)
  

  // // Sorting the gemstones based on the selected sortOption and sortDirection
  // filteredGemstones.sort((a, b) => {
  //   const aValue = a[sortOption];
  //   const bValue = b[sortOption];

  //   if (sortDirection === 'asc') {
  //     return aValue - bValue;
  //   } else {
  //     return bValue - aValue;
  //   }
  // });


  // setFilteredGemstones(filteredGemstones);
  // }, [filters, sortOption]);

  const handleApplyFilters = () => {
    setApplyFilters(true); // Trigger filters application
  };

  
  const applyFiltersAndUpdate = async () => {
    try {
      const filteredGemstones = await fetchFilteredGemstones(filters);
      console.log("update filters",filteredGemstones)
      setGemstonesData(filteredGemstones);
    } catch (error) {
      console.error("Error fetching filtered gemstones:", error);
    }

    setFilteredGemstones(filteredGemstones);
  };

  const [applyFilters, setApplyFilters] = useState(false); // State to manage filter application
  useEffect( () =>  {
    if (applyFilters) {
      applyFiltersAndUpdate();
      setApplyFilters(false); // Reset applyFilters state after applying filters
    }
  }, [applyFilters]);



  return (
    <div className="catalog__wrapper">
  <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
  <h2>
        <span className="underline-light_purple">Our Gems</span>
      </h2>    
      <div className="catalog__filters-container">

      <Select name="type" label="Type" value={filters.type} onChange={handleFilterChange} options={gemstoneOptions} />
            <SearchBar onChange={handleFilterChange}></SearchBar>

          <div className="catalog__filters-container__filter-wrapper">
            <Select
              name="sort_by"
              label="Sort By"
              value={filters.sort_by}
              onChange={handleFilterChange}
              options={sortOptionsList}
            />
          </div>

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
          <div className="catalog__filters-container__filter-wrapper">
          <br/>
          <button onClick={handleApplyFilters} className="apply_button">Apply Filters</button>
          </div>

        </div>
      {/* Gemstones Grid */}
      {gemstonesData.length > 0 ? (
      <div className="gemstones-grid">
        {gemstonesData.map((gemstone) => (
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
