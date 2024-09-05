import React from "react";
import "./Navbar.css";
import Logo from "../assets/navbar/logo.png";
import Menu from "../assets/navbar/menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#" className="navbar-link">
              TRACKS
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              LICENSE
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              VIDEOS
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              CONTACT
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary cool-effect">
              SHOP
            </a>
          </li>
          <li className="menu-icon">
            <img src={Menu} alt="menu" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
