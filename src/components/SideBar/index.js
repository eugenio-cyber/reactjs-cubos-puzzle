import ImgLogo from "../../assets/cubos-puzzle.png";
import "./style.css";

function SideBar({ resetCards }) {
  return (
    <div className="sidebar">
      <img className="cursor-pointer" src={ImgLogo} alt="Logo" />
      <button className="btn--reset" onClick={() => resetCards()}>
        Reset
      </button>
    </div>
  );
}

export default SideBar;
