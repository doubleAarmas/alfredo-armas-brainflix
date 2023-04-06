import Logo from "../../assets/images/BrainFlix-logo.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/images/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="BrainFlix__header">
      <header>
        <div>
          <img src={Logo} className="header__logo" alt="Header-logo"></img>
        </div>
        <input type="text" placeholder="Search" className="header__searchbar" />
        <img src={Mohan} className="header__profile" alt="Header-profile"></img>
        <div className="header__upload--section">
          <button type="submit" className="header__upload--button">
            <img
              src={Upload}
              className="header__upload--icon"
              alt="upload icon"
            ></img>
            UPLOAD
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
