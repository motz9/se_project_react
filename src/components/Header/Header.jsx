import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/wtwr-avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add Clothes
      </button>
      <button onClick={toggleMobileMenu} className="header__menu-button">
        {isMobileMenuOpen ? (
          <i className="fa-solid fa-xmark" />
        ) : (
          <i className="fa-solid fa-bars" />
        )}
      </button>
      <Link to="/profile" className="header__link">
        <div
          className={`header__user-container ${
            isMobileMenuOpen ? "opened" : ""
          }`}
        >
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__user-avatar"
            src={avatar}
            alt="Terrence Tegegne"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
