import React from "react";

export default async function spinner(isLoading){
    if (isLoading) {
        return <p>Loading countries...</p>;
    }
}
