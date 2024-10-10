import React from "react";

function Input({ value, placeholder, type }) {
  return (
    <div className="input-container">
      <input className="input" placeholder={placeholder} type={type}>
        {value}
      </input>
    </div>
  );
}

export default Input;
