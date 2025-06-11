import React from "react";
import "./SideBar.css";
import avatar from "../../assets/wtwr-avatar.svg";


function SideBar() {
  return (
    <div className="sidebar">
      <p className="sidebar__username">Terrence Tegegne</p>
      <img
        className="sidebar__avatar"
        src={avatar}
        alt="Terrence Tegegne"
      />
    </div>
  );
}

export default SideBar;
