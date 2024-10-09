import React from "react";
import "./mycomponent.css";
import { useSearchData } from "../hook/useSearchData";

const SearchComponent = () => {
  const { setSearchItem, searchItem } = useSearchData();
  return (
    <input
      className="search"
      type="search"
      placeholder="search"
      value={searchItem}
      onChange={(e) => setSearchItem && setSearchItem(e.target.value)}
    ></input>
  );
};

export default SearchComponent;
