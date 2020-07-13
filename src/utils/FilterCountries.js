export default function filterCountriesByEnteredName({setFilteredCountries, countries, search}) {
    setFilteredCountries(
        countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase())
        )
    );
}
