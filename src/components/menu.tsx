import React from "react";
import ButtonComponent from "./button";
import { Link } from "react-router-dom";

const PATH_LIST = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Contact", label: "Contact" },
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
