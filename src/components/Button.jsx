import React from "react";
import "./Button.css";

const ButtonTask = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  );
};

export default ButtonTask;
