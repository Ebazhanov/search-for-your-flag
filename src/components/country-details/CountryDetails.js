import React from "react";
import './CountryDetails.css'

export default function CountryDetails({name, flag}) {
    return (
        <div>
            <img src={flag} alt={name}/>
            <h1>{name}</h1>
        </div>
    );
};
