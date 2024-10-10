import React from "react";
import Input from "../input/Input";

function TableComponent({ data, columns, renderers }) {
  return (
    <div className="table-container">
      <h1>Amazon Interview Questions</h1>
      <Input placeholder="Please enter to search" type="text"></Input>
      <table className="table">
        <thead>
          <tr className="table-head-row">
            <th className="table-head-cell"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="table-body-row">
            <td className="table-body-cell"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
