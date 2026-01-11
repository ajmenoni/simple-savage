import ancestries from "../../data/ancestries";
import Search from "../Search/Search";
import ItemList from "../ItemList";
import "./Ancestries.css";
import "../../App.css";
import "../../styles/animation.css";
import { useState } from "react";
import SLIDE from "../../constants/slideDirections";
import { useSlide } from "../../hooks/useSlide";
import { searchData } from "../../utils/searchData";

function Ancestries({ ancestrySelect, handleSelection }) {
  const [selectedId, setSelectedId] = useState(null);
  const ancestrySlide = useSlide(SLIDE.LEFT);
  const [search, setSearch] = useState("");
  const filteredAncestries = searchData({
    data: ancestries,
    search,
  });

  return (
    <>
      <div className={ancestrySlide.className}>
        <h2>Ancestries</h2>
        <Search value={search} onChange={setSearch} />
        <ItemList
          items={filteredAncestries}
          isSelected={(item) => item.id === selectedId}
          onItemClick={(item) => {
            setSelectedId(item.id);
            handleSelection(item.id, item.name, item.description);
            ancestrySlide.slideOut(SLIDE.LEFT);
            setTimeout(() => {
              ancestrySelect(false);
            }, 300);
          }}
          renderItem={(item) => (
            <>
              <div className="item-card-title">{item.name}</div>
              <div>{item.description}</div>
            </>
          )}
        />

        {/* <Button
          text="Done"
          onClick={() => {
            ancestrySlide.slideOut(SLIDE.LEFT);
            setTimeout(() => {
              ancestrySelect(false);
            }, 300);
          }}
        /> */}
      </div>
    </>
  );
}

export default Ancestries;
