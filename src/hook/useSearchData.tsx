import React, { PropsWithChildren, useState,createContext, useContext } from "react";
import { IContextSearch } from "../interface/app";
import { useFetchData } from "./FetchContext";

const SearchContext = createContext<IContextSearch|undefined>(undefined)

export const SearchProvider = ({children}:PropsWithChildren) => {
  const [searchItem, setSearchItem] = useState("");
  const { users } = useFetchData();
  const filteredItems = users?.filter(
    (item) =>
      item.username?.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.first_name?.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.last_name?.toLowerCase().includes(searchItem.toLowerCase())
  );
  
  return (
    <SearchContext.Provider value={{searchItem,setSearchItem,filteredItems}}>
      {children}
    </SearchContext.Provider>
  )
}



export const useSearchData = () => {
  const context = useContext(SearchContext)
  return {
    searchItem: context?.searchItem,
    setSearchItem: context?.setSearchItem,
    filteredItems: context?.filteredItems
  }
}
