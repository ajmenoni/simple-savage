import Card from "./Card";

function ItemList({ items, isSelected, onItemClick, renderItem }) {
  return (
    <div className="items-container">
      {items.map((item) => {
        const selected = isSelected(item);

        return (
          <Card
            key={item.id}
            className={`item-card ${selected ? "selected" : ""}`}
            onClick={() => onItemClick(item, selected)}
          >
            {renderItem(item)}
          </Card>
        );
      })}
    </div>
  );
}

export default ItemList;
