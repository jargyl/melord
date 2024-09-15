import React from "react";
import "./Footer.css";
import Logo from "../assets/navbar/logo.png";
import Mail from "../assets/footer/mail.svg";
import Beatstars from "../assets/footer/beatstars.svg";
import YouTube from "../assets/footer/youtube.svg";
import Spotify from "../assets/footer/spotify.svg";
import Instagram from "../assets/footer/instagram.svg";
import Discord from "../assets/footer/discord.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="row-left">
          <div className="footer-logo-container">
            <img src={Logo} alt="logo" id="logo" />
            <div className="quote">"Knowing yourself is the first step"</div>
          </div>
          <div>
            <a href="mailto:melordbeats@outlook.com" className="flex email">
              <img src={Mail} alt="mail" className="icon" />
              <div>melordbeats@outlook.com</div>
            </a>
            <div className="flex">
              <a
                href="https://www.beatstars.com/prodbymelord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Beatstars} alt="beatstars" className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@melordbeats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YouTube} alt="youtube" className="icon" />
              </a>
              <a
                href="https://open.spotify.com/artist/0URUQY8sVBLUoDtPDaKZIG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Spotify} alt="spotify" className="icon" />
              </a>
              <a
                href="https://www.instagram.com/melord.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="instagram" className="icon" />
              </a>
              <a
                href="https://discordapp.com/users/1138205437292978236"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Discord} alt="discord" className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row-center">
          <a href="#tracks" className="navItem">
            Shop Beats
          </a>
          <a href="#license" className="navItem">
            Usage Rights
          </a>
          <a href="#videos" className="navItem">
            YouTube
          </a>
          <a href="#contact" className="navItem">
            Contact
          </a>
        </div>
        <div className="row-right">
          <div className="tof">Terms of Use • Privacy Policy</div>
          <div className="copyright">© 2024 MELORD. All rights reserved.</div>
          <div>
            Designed and developed by <span>Jari Gielen</span>
          </div>
        </div>
      </div>
    </div>
  );
};
