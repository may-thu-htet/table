import TableComponent from "../table/TableComponent";
import amazonData from "../../data/leetcode_amazon_interview_Qs_mixed.json";
import React from "react";

function AmazonList() {
  const columns = ["Title", "Difficulty", "Fees", "Frequency"];
  const renderers = {
    title: columns[0],
    difficulty: columns[1],
    paidOnly: (columns[2] = paidOnly ? "Premium" : "Free"),
    freqBar: (columns[3] = <ProgressBar value={freqBar.value} />),
  };
  return (
    <TableComponent
      data={amazonData.questions}
      columns={columns}
      renderers={renderers}
    />
  );
}

export default AmazonList;
