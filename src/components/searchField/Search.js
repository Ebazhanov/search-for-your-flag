import React from "react";
import CountryDetail from "../countryDetails/CountryDetails";
import {NAMES} from "constants/data";

export default function Search({filteredCountries, setSearch}) {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="App">
            <h1>{NAMES.title}</h1>
            <input
                type="text"
                placeholder={NAMES.placeHolder}
                data-testid="searchField"
                onChange={handleInputChange}
            />
            {filteredCountries.map((countryData, index) => (
                <CountryDetail key={index} {...countryData} />
            ))}
        </div>
    );
}
