import React from "react";
import './CountryDetails.css'

export default function CountryDetails({name, flag, region, nativeName}) {
    return (
        <div className={name}>
            <img src={flag} alt={name}/>
            <h1>{name} ({nativeName})</h1>
            <h1>{region}</h1>
        </div>
    );
};
