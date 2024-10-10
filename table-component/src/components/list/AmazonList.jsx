import TableComponent from "../table/TableComponent";
import amazonData from "../../data/leetcode_amazon_interview_Qs_mixed.json";
import React from "react";
import ProgressBar from "../progressBar/ProgressBar";

function AmazonList() {
  const columns = ["Title", "Difficulty", "Fees", "Frequency"];
  const renderers = {
    Title: (item) => item.title,
    Difficulty: (item) => item.difficulty,
    Fees: (item) => (item.paidOnly ? "Premium" : "Free"),
    Frequency: (item) => <ProgressBar value={item.freqBar} />,
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
