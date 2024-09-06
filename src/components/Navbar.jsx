import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/navbar/logo.png";
import Menu from "../assets/navbar/menu.svg";
import Close from "../assets/navbar/close.svg";

const menuItems = [
  { label: "TRACKS", href: "#" },
  { label: "LICENSE", href: "#" },
  { label: "VIDEOS", href: "#" },
  { label: "CONTACT", href: "#" },
];

const NavbarLinks = ({ className }) => (
  <>
    {menuItems.map((item, index) => (
      <li key={index}>
        <a href={item.href} className={className}>
          {item.label}
        </a>
      </li>
    ))}
    <li>
      <a href="#" className="btn btn-primary">
        SHOP
      </a>
    </li>
  </>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <NavbarLinks className="navbar-link" />
          <li className="menu-icon" onClick={toggleSidebar}>
            <img src={Menu} alt="menu" />
          </li>
        </ul>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="logo" />
          <img
            src={Close}
            alt="Close"
            className="close-icon"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="sidebar-menu">
          <NavbarLinks className="sidebar-link" />
        </ul>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </nav>
  );
};

export default Navbar;
