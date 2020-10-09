import React from "react";
import {NAMES} from "constants/data";
import SearchResult from "../search-result/SearchResult";

export default function SearchInputField({filteredCountries, setSearch}) {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="App">
            <h1>{NAMES.title}</h1>
            <input
                type="text"
                placeholder={NAMES.placeHolder}
                data-cy="searchField"
                onChange={handleInputChange}
            />
            <SearchResult
                filteredCountries={filteredCountries}
            />
        </div>
    );
}
