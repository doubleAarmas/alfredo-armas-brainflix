import Logo from "../../assets/images/BrainFlix-logo.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/images/upload.svg";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="BrainFlix__header">
      <div className="BrainFlix__header--container">
        <NavLink to="/home">
          <img src={Logo} className="header__logo" alt="Header-logo"></img>
        </NavLink>
      </div>
      <div className="header__subcontainer">
        <input type="text" placeholder="Search" className="header__searchbar" />
        <div className="header__upload--section">
          <Link to="/upload" className="upload__link">
            <button
              type="submit"
              className="header__upload--button-large-resolution"
            >
              <img
                src={Upload}
                className="header__upload--icon"
                alt="upload icon"
              ></img>
              UPLOAD
            </button>
          </Link>
        </div>
        <div className="header__profile"></div>
      </div>

      <div className="header__upload--section">
        <Link to="/upload" className="upload__link">
          <button
            type="submit"
            className="header__upload--button-small-resolution"
          >
            <img
              src={Upload}
              className="header__upload--icon"
              alt="upload icon"
            ></img>
            UPLOAD
          </button>{" "}
        </Link>
      </div>
    </header>
  );
}

export default Header;
