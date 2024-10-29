import React from "react";
import { IData } from "../interface/app";
import "./mycomponent.css";

const Lists = ({ data }: { data?: IData[] }) => {
  return (
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>firstname</th>
            <th>lastname</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lists;
