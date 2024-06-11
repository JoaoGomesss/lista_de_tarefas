import React from "react";
import ButtonTask from "./Button";
import { useParams, useNavigate } from "react-router-dom";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <ButtonTask onClick={handleBackButtonClick}> Voltar </ButtonTask>
      </div>
      <div className="tasks-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou um
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
