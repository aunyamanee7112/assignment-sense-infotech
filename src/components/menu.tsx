import React from "react";
import ButtonComponent from "./button";
import { Link } from "react-router-dom";

const PATH_LIST = [
  { path: "/question2", label: "Todo List" },
  { path: "/question3", label: "Form Data" },
  { path: "/", label: "Data Table" },
];
const Menu = () => {
  return (
    <div className="menu">
      {PATH_LIST.map((item) => (
        <Link to={item.path}>
          <ButtonComponent label={item.label} />
        </Link>
      ))}
    </div>
  );
};

export default Menu;
