import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Details from "./components/Details";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="app-container">
        <h1>Simple Savage</h1>
        {step === 0 ? (
          <Button text={"Build Character"} onClick={() => setStep(1)} />
        ) : (
          <Details onNext={() => setStep(2)} />
        )}
      </div>
    </>
  );
}

export default App;
