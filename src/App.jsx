import { useState } from "react";
import "./index.css";
import "./App.css";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Hindrances from "./components/Hindrances/Hindrances";
import Attributes from "./components/Attributes/Attributes";

function App() {
  const MIN_STEP = 1;
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState(
    // 0 = d4, 1 = d6, etc.
    {
      name: "",
      concept: "",
      ancestry: null,
      hindrances: [],
      hindrancePoints: 0,
      attributes: {
        agility: 0,
        smarts: 0,
        spirit: 0,
        strength: 0,
        vigor: 0,
      },
      skills: {
        athletics: 0,
        commonKnowledge: 0,
        notice: 0,
        persuasion: 0,
        stealth: 0,
      },
    }
  );

  return (
    <>
      <div className="app-container">
        <h1>Simple Savage</h1>
        {step === 0 && (
          <Button text={"Build Character"} onClick={() => setStep(1)} />
        )}

        {step === 1 && (
          <Details character={character} setCharacter={setCharacter} />
        )}

        {step === 2 && (
          <Hindrances character={character} setCharacter={setCharacter} />
        )}

        {step === 3 && <Attributes />}

        {step > 0 && (
          <div className="side-by-side-buttons">
            <Button
              className={"bottom-nav-button"}
              text={"Previous"}
              onClick={() => setStep((prev) => Math.max(prev - 1, MIN_STEP))}
            />
            <Button
              className={"bottom-nav-button"}
              text={"Next"}
              onClick={() => setStep((prev) => prev + 1)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
