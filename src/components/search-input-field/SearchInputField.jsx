import React from "react";
import { NAMES } from "constants/data";
import { BsSearch } from "react-icons/all";
import "./SearchInputField.scss";

export default function SearchInputField({ setSearch }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="field">
        <div>
          <BsSearch color="#424242" />
          <input
            type="text"
            placeholder={NAMES.placeHolder}
            data-cy="searchField"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
