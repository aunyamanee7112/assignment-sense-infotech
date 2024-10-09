import React from "react";
import Lists from "../components/lists";
import { useFetchData } from "../hook/FetchContext";
import { useSearchData } from "../hook/useSearchData";
import { HeaderTools } from "../components/header";
const Home = () => {
  const { users } = useFetchData();
  const { filteredItems } = useSearchData();
  return (
    <div>
      <HeaderTools/>
      <Lists data={filteredItems || users} />
    </div>
  );
};

export default Home;
