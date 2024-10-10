import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">{value}</div>
    </div>
  );
};

export default ProgressBar;
