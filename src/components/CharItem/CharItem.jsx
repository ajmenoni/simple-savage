import Delete from "../Delete/Delete";

function CharItem({ item, titleExtra, onDelete }) {
  return (
    <div className={`trait-container trait-container--stacked `}>
      <span className="title top-title">
        {item.name} {titleExtra}
      </span>
      <div className="trait-row">
        <span>{item.description}</span>
        <Delete onClick={onDelete} />
      </div>
    </div>
  );
}

export default CharItem;
