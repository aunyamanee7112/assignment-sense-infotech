import React, { useState } from "react";
import "./mycomponent.css";

const UserList = ({ ...props }) => {
  return (
    <div className="list-container">
      {/* <div
        className="username"
      >
        username: {props.username}
      </div>
      <div>
        name: {props.first_name} {props.last_name}
      </div> */}
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.username}</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
