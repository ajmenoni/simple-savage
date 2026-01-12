import Card from "../Card";
import ItemList from "../ItemList";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { searchData } from "../../utils/searchData";

import combatEdges from "../../data/edges/edgesCombat";
import { useState } from "react";

function EdgesSelect({ slideClass, onDone, character, toggleSelection }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={slideClass}>
        <Search value={search} onChange={setSearch} />

        <ItemList
          items={combatEdges}
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
