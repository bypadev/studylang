"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';
function FromApply() {
    const [value, setValue] = useState(null)
    const options = [
        { value: "San Diego", label: "San Diego" },
        { value: "Los Angeles", label: "Los Angeles" },
        { value: "San Francisco", label: "San Francisco" },
    ]
    const optionsTwo = [
        { value: "Offices", label: "Offices" },
        { value: "Apartment", label: "Apartment" },
        { value: "Houses", label: "Houses" },
    ]
    const optionsThree = [
        { value: "Rent", label: "Rent" },
        { value: "Sell", label: "Sell" },
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
        <>
            <div className="alert alert-primary" role="alert">
                You're applying to Bachelor of Artificial Intelligence Engineering (Turkish) at OSTIM Technical University
            </div>
            <form className="row g-2 main-search">
                <div className="col-md-12">
                    <div className="form-group search-input">
                        <label className="required fw-semibold required text-dark">Phone Number</label>
                        <input className="form-control" placeholder="Phone Number" type="number" />
                    </div>
                </div>
            <div className="col-md-12">
                <div className="search-select">
                    <div className="form-group">
                        <label className="required fw-semibold required text-dark">Phone Number</label>
                        <Select
                            options={options}
                            defaultValue={value}
                            onChange={setValue}
                            isSearchable={true}
                            placeholder="Location"
                            styles={customSelectStyle}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="search-select">
                    <Select
                        options={optionsTwo}
                        defaultValue={value}
                        onChange={setValue}
                        isSearchable={true}
                        placeholder="Property"
                        styles={customSelectStyle}
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
                        placeholder="Rent"
                        styles={customSelectStyle}
                    />
                    <i className="fa-solid fa-sack-dollar fs-18 search-icon"></i>
                </div>
            </div>
        </form>
        </>
    );
}

export default FromApply;
