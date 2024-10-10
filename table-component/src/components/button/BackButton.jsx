import Button from "./Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  let navigate = useNavigate();
  return <Button value="Back" onClick={() => navigate(-1)}></Button>;
};

export default BackButton;
