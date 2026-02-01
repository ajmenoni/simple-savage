import Delete from "../Delete/Delete";

import "./CharItem.css";

function CharItem({ item, titleExtra, descriptionExtra, onDelete }) {
  return (
    <div className={`trait-container trait-container--stacked `}>
      <span className="title top-title">
        {item.name} {titleExtra}
      </span>
      {descriptionExtra && (
        <span className="power-desc">{descriptionExtra}</span>
      )}
      <div className="trait-row">
        <span>{item.description}</span>
        <Delete onClick={onDelete} />
      </div>
    </div>
  );
}

export default CharItem;
