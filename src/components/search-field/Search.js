import CountryDetail from "../country-details/CountryDetails";
import React from "react";

const Search = ({filteredCountries, setSearch}) => {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="App">
            <h1>Countries Search List</h1>
            <input
                type="text"
                placeholder="Search Country"
                onChange={handleInputChange}
            />
            {filteredCountries.map((countryName, index) => (
                <CountryDetail key={index} {...countryName} />
            ))}
        </div>
    );
};

export default Search;
