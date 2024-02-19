import React from "react";
import "./NavBar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={navLogo} className="nav-logo" />
      <img src={navProfile} className="nav-profile" />
    </div>
  );
};

export default NavBar;
