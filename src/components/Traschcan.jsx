import trashcan from "../assets/trash.svg";

function Trashcan({ className = "" }) {
  return <img src={trashcan} alt="" className={className} aria-hidden="true" />;
}

export default Trashcan;
