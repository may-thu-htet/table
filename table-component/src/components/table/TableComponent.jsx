import React from "react";
import amazonData from "../../data/leetcode_amazon_interview_Qs_mixed.json";
import Input from "../input/Input";

function TableComponent() {
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
