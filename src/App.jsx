import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  function beginCreate() {
    alert("you clicked");
  }

  function handleNext() {
    alert("Next");
  }

  return (
    <>
      <div className="app-container">
        <h1>Simple Savage</h1>
        <Button text={"Build Character"} onClick={beginCreate} />
        <Card handleNext={handleNext} />
      </div>
    </>
  );
}

export default App;
