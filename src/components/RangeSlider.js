import React from 'react';
import Slider from '@mui/material/Slider';
import "../styles/RangeSlider.css";

const RangeSlider = ({ min, max, onRangeChange }) => {
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
    onRangeChange(newValue);
  };

  const marks = [
    {
      value: min,
      label: value[0],
    },
    {
      value: max,
      label: value[1],
    },
  ];

  return (
    <Slider
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
      valueLabelDisplay="off"
      color="primary"
      marks={marks}
      className='slider'
    />
  );
};

export default RangeSlider;
