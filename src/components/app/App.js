import React, {useEffect, useState} from "react";
import './App.css'
import Search from "../search-field/Search";
import fetchCountriesDetails from "../../utils/RouteUtil";
import filterCountriesByEnteredName from "../../utils/FilterCountries";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetchCountriesDetails({setCountries, setLoading})
    }, []);

    useEffect(() => {
        filterCountriesByEnteredName({setFilteredCountries, countries, search})
    }, [search, countries]);

    if (isLoading) {
        return <p>Loading countries...</p>;
    }

    return (
        <Search
            filteredCountries={filteredCountries}
            setSearch={setSearch}
        />
    );
}



