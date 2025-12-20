import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  function beginCreate() {
    alert("you clicked");
  }

  return (
    <>
      <div className="app-container">
        <h1>Simple Savage</h1>
        <Button text={"Build Character"} onClick={beginCreate} />
      </div>
    </>
  );
}

export default App;
