import React from "react";
import "./Spinner.scss";
import { List } from "react-content-loader";

export default function Spinner({ isLoading }) {
  return (
    isLoading && (
      <div className="spinner">
        <h1>Loading ...</h1>
        <div>
          <List />
        </div>
      </div>
    )
  );
}
