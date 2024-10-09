

interface IData {
  id?:string;
  first_name?: string;
  last_name?: string;
  username?: string;
  address:IAddressInfo;
}
export interface IAddressInfo { 
  city:string,
  country:string,
  state:string,
  street_address:string,
  street_name:string
}

export interface IContextFetch {
  data?:IData[];
  handleFetchData: () => void
}

export interface IContextSearch {
  searchItem?:string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>
  filteredItems?:IData[]
}
export type { IData };
