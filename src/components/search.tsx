import React, { useEffect, useState } from "react";
import "./mycomponent.css";
import { IData } from "../interface/app";
import { useSearchData } from "../hook/useSearchData";

interface ISearchComponent {
  data?: IData[];
}
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
