import ItemList from "../ItemList";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { searchData } from "../../utils/searchData";

import backgroundEdges from "../../data/edges/edgesBackground";
import combatEdges from "../../data/edges/edgesCombat";
import leadershipEdges from "../../data/edges/edgesLeadership";
import legendaryEdges from "../../data/edges/edgesLedgendary";
import powerEdges from "../../data/edges/edgesPower";
import professionalEdges from "../../data/edges/edgesProfessional";
import socialEdges from "../../data/edges/edgesSocial";
import weirdEdges from "../../data/edges/edgesWeird";
import { useState } from "react";

import "./Edges.css";

function EdgesSelect({ slideClass, onDone, character, toggleSelection }) {
  console.log(character);
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState([]);

  const allEdges = [
    ...backgroundEdges,
    ...combatEdges,
    ...leadershipEdges,
    ...legendaryEdges,
    ...powerEdges,
    ...professionalEdges,
    ...socialEdges,
    ...weirdEdges,
  ];

  const options = [
    { type: "background", label: "Background" },
    { type: "combat", label: "Combat" },
    { type: "leadership", label: "Leadership" },
    { type: "legendary", label: "Legendary" },
    { type: "power", label: "Power" },
    { type: "professional", label: "Professional" },
    { type: "social", label: "Social" },
    { type: "weird", label: "Weird" },
  ];

  const filteredByType =
    activeTypes.length === 0
      ? allEdges
      : allEdges.filter((edge) => activeTypes.includes(edge.type));

  const searchableEdges = searchData({
    data: filteredByType.toSorted((a, b) => a.name.localeCompare(b.name)),
    search,
  });

  function handleFilter(type) {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  function handleSelection(field, item, selected) {
    toggleSelection(field, item);
  }

  return (
    <>
      <div className={"filter-group"}>
        {options.map((option) => {
          const isActive = activeTypes.includes(option.type);
          return (
            <button
              key={option.type}
              className={`pill edge-pill ${isActive ? "active" : ""}`}
              type="button"
              onClick={() => handleFilter(option.type)}
            >
              {option.label}
            </button>
          );
        })}{" "}
      </div>

      <div className={slideClass}>
        <Search value={search} onChange={setSearch} />

        <ItemList
          items={searchableEdges}
          isSelected={(item) =>
            character.edges.some((edge) => edge.id === item.id)
          }
          onItemClick={(item, selected) => {
            handleSelection("edges", item);
          }}
          renderItem={(item) => (
            <>
              <div className="item-card-title">
                {item.name} ({item.type})
              </div>
              <div className="edge-req">{item.reqDisplay}</div>
              <div>{item.description}</div>
            </>
          )}
        />

        <Button text={"Done"} onClick={onDone} />
      </div>
    </>
  );
}

export default EdgesSelect;
