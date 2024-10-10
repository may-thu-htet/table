import React from "react";

function TableComponent() {
  return (
    <div className="table-container">
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
