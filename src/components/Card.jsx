import Button from "./Button";
import React from "react";
import Details from "./Details";

function Card({ handleNext }) {
  return (
    <div className="app-container card">
      <Details />
      <Button text={"Next"} onClick={handleNext} />
    </div>
  );
}

export default Card;
