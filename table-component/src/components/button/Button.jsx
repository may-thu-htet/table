import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
