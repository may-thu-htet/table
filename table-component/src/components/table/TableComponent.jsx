import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TableComponent({ data, columns, renderers }) {
  return (
    <div className="table-container">
      <h1>Amazon Interview Questions</h1>
      <Input placeholder="Please enter to search" type="text" />
      <table className="table">
        <thead>
          <tr className="table-head-row">
            {columns.map((col) => (
              <th className="table-head-cell" key={col}>
                {col.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((item, index) => {
            return (
              <tr className="table-body-row" key={index}>
                {columns.map((col) => {
                  return (
                    <td className="table-body-cell" key={col}>
                      {renderers[col](item)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
