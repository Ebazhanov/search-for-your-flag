import React from "react";

export default function Spinner({isLoading}) {
    if (isLoading) {
        return <p>Loading countries...</p>;
    }
}
