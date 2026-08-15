import { useState } from "react";
import { useEffect } from "react";
import charOutline from "./assets/char_outline.svg";
import "./index.css";
import "./App.css";
import skills from "./data/skills";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Hindrances from "./components/Hindrances/Hindrances";
import Attributes from "./components/Attributes/Attributes";
import Skills from "./components/Skills/Skills";
import Edges from "./components/Edges/Edges";
import Gear from "./components/Gear/Gear";
import Powers from "./components/Powers/Powers";

const coreSkills = skills.filter((skill) => skill.coreSkill === true);

const initCoreSkills = coreSkills.map((skill) => ({
  ...skill,
  die: "d4",
}));

function App() {
  const MIN_STEP = 1;
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    edges: [],
    powers: [],
    items: [],
  });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!done) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [done]);

  return (
    <>
      <div className="app-container">
        <div className="app-header">
          <h1>Simple Savage</h1>
          {step >= 1 && (
            <img
              src={charOutline}
              alt="Character outline illustration"
              className="character-outline"
              onClick={() => setDrawerOpen(true)}
            />
          )}
        </div>

        <div
          className={`drawer-backdrop ${drawerOpen ? "open" : ""}`}
          onClick={() => setDrawerOpen(false)}
          aria-hidden={!drawerOpen}
        />

        <aside className={`side-drawer ${drawerOpen ? "open" : ""}`}>
          <button
            type="button"
            className="drawer-close-button"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </button>
          <div className="drawer-content">
            <h2>Character Outline</h2>
            <p>Drawer contents can go here.</p>
          </div>
        </aside>

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

        {step === 5 && (
          <Edges character={character} setCharacter={setCharacter} />
        )}

        {step === 6 && (
          <Powers character={character} setCharacter={setCharacter} />
        )}

        {step === 7 && (
          <Gear character={character} setCharacter={setCharacter} />
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
