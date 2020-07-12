import React from "react";
import './CountryDetails.css'

const CountryDetail = ({name, flag}) => {
    return (
        <div>
            <img src={flag} alt={name}/>
            <h1>{name}</h1>
        </div>
    );
};

export default CountryDetail;
