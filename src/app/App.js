import React, { useEffect, useState } from "react";
import SearchInputField from "../components/search-input-field/SearchInputField";
import fetchCountriesDetails from "utils/RouteUtil";
import filterCountries from "../utils/FilterCountries.js";
import Spinner from "../components/spinner/Spinner";
import SearchResult from "../components/search-result/SearchResult";
import "./App.scss";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetchCountriesDetails({ setCountries, setLoading });
  }, []);

  useEffect(() => {
    filterCountries({ setFilteredCountries, countries, search });
  }, [search, countries]);

  return (
    <div className="app">
      <div>
        <div>
          <SearchInputField
            filteredCountries={filteredCountries}
            setSearch={setSearch}
          />
        </div>
        <Spinner isLoading={isLoading} />
        <SearchResult filteredCountries={filteredCountries} />
      </div>
    </div>
  );
}
