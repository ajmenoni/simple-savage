import Card from "../Card";
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

function EdgesSelect({ slideClass, onDone, character, toggleSelection }) {
  const [search, setSearch] = useState("");
  const [filteredEdges, setFiltered] = useState([
    ...backgroundEdges,
    ...combatEdges,
    ...leadershipEdges,
    ...legendaryEdges,
    ...powerEdges,
    ...professionalEdges,
    ...socialEdges,
    ...weirdEdges,
  ]);

  const searchableEdges = searchData({
    data: sortedEdges(filteredEdges),
    search,
  });

  function sortedEdges(edges) {
    const sortedEdges = edges.toSorted((a, b) => {
      const nameSort = a.name.localeCompare(b.name);
      return nameSort;
    });
    return sortedEdges;
  }

  return (
    <>
      <div className={slideClass}>
        <Search value={search} onChange={setSearch} />

        <ItemList
          items={searchableEdges}
          renderItem={(item) => (
            <>
              <div className="item-card-title">{item.name}</div>
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
