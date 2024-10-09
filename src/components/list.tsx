import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./mycomponent.css";
import Information from "./information";

const UserList = ({ ...props }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true)
  }
  return (
    <div className="list-container">
       {toggle && <Information address={props.address} />}
      <div
        onClick={handleToggle}
        className="username"
      >
        username: {props.username}
      </div>
      <div>
        name: {props.first_name} {props.last_name}
      </div>
    </div>
  );
};

export default UserList;
