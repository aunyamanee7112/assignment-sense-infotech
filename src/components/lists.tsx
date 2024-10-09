import React from "react";
import UserList from "./list";
import { IData } from "../interface/app";
import "./mycomponent.css";

const Lists = ({ data }: { data?: IData[] }) => {
  return (
    <div className="lists-container">
      {data &&
        data.map((item) => (
          <UserList
            key={item.id}
            {...item}
          />
        ))}
    </div>
  );
};

export default Lists;
