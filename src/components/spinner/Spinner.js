import React from "react";

export default function Spinner({isLoading}) {
    return isLoading && <p>Loading countries...</p>;
}
