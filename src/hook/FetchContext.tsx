import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";
import { IContextFetch, IData } from "../interface/app";
import axios from "axios";

// create context
const FetchDataContext = createContext<IContextFetch | undefined>(undefined);

// create provider forwrap
export const FetchProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://random-data-api.com/api/users/random_user?size=5"
      );
      setData((prev) => [...prev, ...data]);
    } catch (error) {
      if( axios.isAxiosError(error)){
        console.log('Unexpected error:',error);
      }
    }
  };

  return (
    <FetchDataContext.Provider value={{ handleFetchData, data }}>
      {children}
    </FetchDataContext.Provider>
  );
};

export const useFetchData = () => {
  const context = useContext(FetchDataContext);
  return {
    handleFetchData: context?.handleFetchData,
    users: context?.data,
  };
};
