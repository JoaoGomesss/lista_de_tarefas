import React, { useState } from "react";
import "./AddTask.css";
import ButtonTask from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      ></input>
      <div className="add-task-button-container">
        <ButtonTask onClick={handleAddTaskClick}>Adicionar</ButtonTask>
      </div>
    </div>
  );
};

export default AddTask;
