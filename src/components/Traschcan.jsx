import trashcan from "../assets/trashcan_black.svg";

function Trashcan({ className = "" }) {
  return <img src={trashcan} alt="" className={className} aria-hidden="true" />;
}

export default Trashcan;
