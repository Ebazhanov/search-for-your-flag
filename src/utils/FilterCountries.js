export default function filterCountries({setFilteredCountries, countries, search}) {
    setFilteredCountries(
        countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase())
        )
    );
}
