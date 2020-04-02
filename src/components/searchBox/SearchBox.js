import React from "react";

const SearchBox = ({ placeholder, handelChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handelChange}
    />
  );
};

export default SearchBox;
