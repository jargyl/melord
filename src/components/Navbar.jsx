import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/navbar/logo.png";
import Menu from "../assets/navbar/menu.svg";
import Close from "../assets/navbar/close.svg";
import Spotify from "../assets/navbar/spotify.svg";
import Instagram from "../assets/navbar/instagram.svg";
import Discord from "../assets/navbar/discord.svg";

const menuItems = [
  { label: "TRACKS", href: "#" },
  { label: "LICENSE", href: "#" },
  { label: "VIDEOS", href: "#" },
  { label: "CONTACT", href: "#" },
];

const socialIcons = [
  { name: "Spotify", icon: Spotify, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Discord", icon: Discord, href: "#" },
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
          <li>
            <a href="#" className="btn btn-primary">
              SHOP
            </a>
          </li>
          <li className="menu-icon" onClick={toggleSidebar}>
            <img src={Menu} alt="menu" />
          </li>
        </ul>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="sidebar-logo" />
          <div className="sidebar-close" onClick={toggleSidebar}>
            <img src={Close} alt="Close" className="close-icon" />
          </div>
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-menu">
            <NavbarLinks className="sidebar-link" />
          </ul>
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon.icon} alt={icon.name} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </nav>
  );
};

export default Navbar;
