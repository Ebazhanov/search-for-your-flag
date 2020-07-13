import axios from "axios";

export default function fetchCountriesDetails({setLoading, setCountries}) {
    console.log(setLoading)
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
}
