import {API_KEY} from "../constants/data";

export default function fetchCountriesDetails({setLoading, setCountries}) {
    setLoading(true);
    fetch(API_KEY)
        .then(response => response.json())
        .then(data => {
            setCountries(data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
}
