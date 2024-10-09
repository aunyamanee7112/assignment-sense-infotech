import React from "react";
import { IAddressInfo } from "../interface/app";

const Information = ({address}:{address:IAddressInfo} ) => {
  const { city, country, state } = address;
  return (
    <div className="info">
      <p>address information</p>
      <p>city: {city}</p>
      <p>country : {country}</p>
      <p>state :{state}</p>
    </div>
  );
};

export default Information;
