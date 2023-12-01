"use client"
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Link from 'next/link';

const Select = dynamic(() => import("react-select"), {
    ssr: false,
});
function Filter() {
    const [value, setValue] = useState(null)
    const options = [
        { value: "CYP", label: "North Cyprus" },
        { value: "TR", label: "Turkey" },
    ]

    const cities = [
        { value: "AN", label: "Ankara" },
        { value: "IS", label: "Istanbul" },
    ]
    const unis = [
        { value: "AB", label: "Acibadem University" },
        { value: "AU", label: "Altinbas University" },
    ];

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
            <div className="col-md-">
                {/* Start Select Field */}
                <div className='row g-2 d-flex flex-column'>
                    <div className="col-md-12">
                        <div className="search-input">
                            <i className="fa-solid fa-magnifying-glass search-icon" />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your keyword. e.g. Medicine"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                id='test'
                                options={options}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                placeholder="All countries"
                                styles={customSelectStyle}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                id='test'
                                options={cities}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                placeholder="All cities"
                                styles={customSelectStyle}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                id='test'
                                options={unis}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                placeholder="All Universities"
                                styles={customSelectStyle}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                options={optionsTwo}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                styles={customSelectStyle}
                                placeholder="Select Degree"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                options={optionsTwo}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                styles={customSelectStyle}
                                placeholder="Select Language"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                options={optionsThree}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                styles={customSelectStyle}
                                placeholder="Area of Study"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                options={optionsThree}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                styles={customSelectStyle}
                                placeholder="Specialty"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h5 className="fw-semibold text-capitalize mb-0 col">Tuition Fee</h5>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="search-input input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1150.00"
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="275000.00"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-select">
                            <Select
                                options={optionsThree}
                                defaultValue={value}
                                onChange={setValue}
                                isSearchable={true}
                                styles={customSelectStyle}
                                placeholder="Sort by"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="d-flex">
                            <button type="button" className="btn btn-lg btn-primary w-100">
                                Search
                            </button>
                            <button type="button" className="btn btn-lg btn-light w-100 ms-2">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                {/* End Select Field */}
            </div>
        </form>
        // End Form
    );
}

export default Filter;
