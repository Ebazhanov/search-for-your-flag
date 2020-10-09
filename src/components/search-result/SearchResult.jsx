import CountryDetail from "../country-details/CountryDetails";
import React from "react";

export default function SearchResult({filteredCountries}) {
    return (
        filteredCountries.map((countryData, index) => (
            <CountryDetail key={index} {...countryData} />
        ))
    )
}
