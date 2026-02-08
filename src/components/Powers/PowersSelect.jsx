import ItemList from "../ItemList";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { searchData } from "../../utils/searchData";

import powers from "../../data/powers";
import { useState } from "react";

import "./Powers.css";

function PowersSelect({ slideClass, onDone, character, toggleSelection }) {
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState([]);

  const allPowers = powers;

  const options = [
    { rank: "N", label: "Novice" },
    { rank: "S", label: "Seasoned" },
    { rank: "V", label: "Veteran" },
    { rank: "H", label: "Heroic" },
    { rank: "L", label: "Legendary" },
  ];

  const filteredByType =
    activeTypes.length === 0
      ? allPowers
      : allPowers.filter((power) => activeTypes.includes(power.rank));

  const searchablePowers = searchData({
    data: filteredByType.toSorted((a, b) => a.name.localeCompare(b.name)),
    search,
  });

  function handleFilter(rank) {
    setActiveTypes((prev) =>
      prev.includes(rank) ? prev.filter((t) => t !== rank) : [...prev, rank],
    );
  }

  function handleSelection(field, item, selected) {
    toggleSelection(field, item);
  }

  function handleDetailDisplay(power) {
    return `Rank: ${power.rank}, Power Points: ${power.powerPoints}, Range: ${power.range}, Duration: ${power.duration}`;
  }

  return (
    <>
      <div className={"filter-group"}>
        {options.map((option) => {
          const isActive = activeTypes.includes(option.rank);
          return (
            <button
              key={option.rank}
              className={`pill power-pill ${isActive ? "active" : ""}`}
              type="button"
              onClick={() => handleFilter(option.rank)}
            >
              {option.label}
            </button>
          );
        })}{" "}
      </div>

      <div className={slideClass}>
        <Search value={search} onChange={setSearch} />

        <ItemList
          items={searchablePowers}
          isSelected={(item) =>
            character.powers.some((power) => power.id === item.id)
          }
          onItemClick={(item, selected) => {
            handleSelection("powers", item);
          }}
          renderItem={(item) => (
            <>
              <div className="item-card-title">
                {item.name} ({item.rank})
              </div>
              <div className="power-req">{handleDetailDisplay(item)}</div>
              {/* come back to below */}
              {/* {item.reqDisplay} */}
              <div>{item.description}</div>
            </>
          )}
        />

        <Button text={"Done"} onClick={onDone} />
      </div>
    </>
  );
}

export default PowersSelect;
