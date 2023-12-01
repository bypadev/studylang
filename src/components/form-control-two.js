"use client"
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Link from 'next/link';

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});
function Dropdown() {
  const [value, setValue] = useState(null)
  const options = [
    { value: "CYP", label: "North Cyprus" },
    { value: "TR", label: "Turkey" },
  ]
  const optionsTwo = [
    { value: "Associate", label: "Associate" },
    { value: "Bachelor", label: "Bachelor" },
    { value: "Doctorate", label: "Doctorate" },
    { value: "Language", label: "Language Course" },
    { value: "Master", label: "Master" },
    { value: "Training", label: "Training Course" },
  ]
  const optionsThree = [
    { value: "Architecture", label: "Architecture" },
    { value: "IT", label: "Information Technologies" },
  ]
  const customSelectStyle = {
    control: (provided) => ({
      ...provided,
      // Adjust the padding as needed
      minHeight: '68px', // Add min-height
      borderRadius: '0.5rem', // Add border-radius
      border: '0', // Add border
      boxShadow: '0px 0px 40px rgba(29, 58, 83, 0.1)', // Add box-shadow
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: '2.25rem', // Add padding-left
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#00C5D4' : 'white', // Change the background color when an option is selected
      color: state.isSelected ? 'white' : 'black', // Change the text color when an option is selected
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none', // Hide the indicator separator
    }),
  };
  return (
    // Start form
    <form className="row g-2 main-search">
      <div className="col-md-7">
        {/* Start Select Field */}
        <div className='row g-2'>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                id='test'
                options={options}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                placeholder="Select country"
                styles={customSelectStyle}
              />
              <i className="fa-solid fa-location-crosshairs search-icon" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsTwo}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="Select Degree"
              />
              <i className="fa-solid fa-house fs-17 search-icon"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsThree}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="Area of Study"
              />
              <i className="fa-solid fa-sack-dollar fs-18 search-icon"></i>

            </div>
          </div>
        </div>
        {/* End Select Field */}
      </div>
      <div className="col-md-5">
        {/* Start Search Input */}
        <div className="search-input">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search For Properties ....."
          />
          <Link
            href="properties-grid"
            className="btn btn-primary search-btn position-absolute top-50"
          >
            <i className="fa-solid fa-angle-right" />
          </Link>
        </div>
        {/* /.End Search Input */}
      </div>
    </form>
    // End Form
  );
}

export default Dropdown;
