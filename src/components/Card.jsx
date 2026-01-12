function Card({ children, className, onClick, padding = "default" }) {
  return (
    <div
      className={`card card--${padding} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
