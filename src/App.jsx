import { useState } from "react";
import "./index.css";
import "./App.css";
import skills from "./data/skills";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Hindrances from "./components/Hindrances/Hindrances";
import Attributes from "./components/Attributes/Attributes";
import Skills from "./components/Skills/Skills";
const coreSkills = skills.filter((skill) => skill.coreSkill === true);
const initCoreSkills = coreSkills.map((skill) => ({
  ...skill,
  die: "d4",
}));

function App() {
  const MIN_STEP = 1;
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState({
    name: "",
    concept: "",
    ancestry: null,
    hindrances: [],
    hindrancePoints: 0,
    attributes: {
      agility: "d4",
      smarts: "d4",
      spirit: "d4",
      strength: "d4",
      vigor: "d4",
    },
    attributePointsSpent: 0,
    skills: initCoreSkills,
    skillPointsSpent: 0,
  });

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

        {step === 3 && (
          <Attributes character={character} setCharacter={setCharacter} />
        )}

        {step === 4 && (
          <Skills character={character} setCharacter={setCharacter} />
        )}

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
