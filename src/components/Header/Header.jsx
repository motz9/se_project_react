import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/wtwr-avatar.svg";

function Header() {
    return <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <p className="header__date-and-location">DATE LOCATION</p>
        <button className="header__add-clothes-btn">+ Add Clothes</button>
        <div className="header__user-container">
            <p className="header__username">Terrence Tegegne</p>
            <img className="header__user-avatar" src={avatar} alt="Terrence Tegegne" />
        </div>
    </header>;
};

export default Header