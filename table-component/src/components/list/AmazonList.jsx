import TableComponent from "../table/TableComponent";
import amazonData from "../../data/leetcode_amazon_interview_Qs_mixed.json";
import React, { Fragment } from "react";
import ProgressBar from "../progressBar/ProgressBar";
import BackButton from "../button/BackButton";

function AmazonList() {
  const columns = ["Title", "Difficulty", "Fees", "Frequency"];
  const renderers = {
    Title: (item) => item.title,
    Difficulty: (item) => item.difficulty,
    Fees: (item) => (item.paidOnly ? "Premium" : "Free"),
    Frequency: (item) => <ProgressBar value={item.freqBar} />,
  };

  return (
    <Fragment>
      <BackButton />
      <TableComponent
        data={amazonData.questions}
        columns={columns}
        renderers={renderers}
      />
    </Fragment>
  );
}

export default AmazonList;
