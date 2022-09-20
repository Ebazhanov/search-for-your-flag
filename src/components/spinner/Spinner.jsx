import React from "react";
import "./Spinner.css";

export default function Spinner({ isLoading }) {
  return isLoading && <p className="spinner">Loading countries...</p>;
}
