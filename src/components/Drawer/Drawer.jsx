function Drawer({ isOpen, onClose, title = "Character Outline", children }) {
  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside className={`side-drawer ${isOpen ? "open" : ""}`}>
        <button
          type="button"
          className="drawer-close-button"
          onClick={onClose}
        >
          Close
        </button>
        <div className="drawer-content">
          <h2>{title}</h2>
          {children || <p>Drawer contents can go here.</p>}
        </div>
      </aside>
    </>
  );
}

export default Drawer;
