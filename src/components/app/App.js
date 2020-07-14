import React, {useEffect, useState} from "react";
import './App.css'
import Search from "../searchField/Search";
import fetchCountriesDetails from 'utils/RouteUtil';
import filterCountries from 'utils/FilterCountries.js';
import Spinner from "../spinner/Spinner";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetchCountriesDetails({setCountries, setLoading})
    }, []);

    useEffect(() => {
        filterCountries({setFilteredCountries, countries, search})
    }, [search, countries]);

    return (
        <>
            <Spinner isLoading={isLoading}/>
            <Search
                filteredCountries={filteredCountries}
                setSearch={setSearch}
            />
        </>
    );
}



