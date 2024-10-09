import React from "react";
import ButtonComponent from "./button";
import SearchComponent from "./search";
import { useFetchData } from "../hook/FetchContext";

export const HeaderTools = () => {
  const { handleFetchData } = useFetchData();
  return (
    <div className="headerTools">
      <SearchComponent />
      <ButtonComponent onClick={handleFetchData} label="fetch component" />
    </div>
  );
};
