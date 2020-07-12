import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css'
import Search from "../search-field/Search";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(result => {
                setCountries(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
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



