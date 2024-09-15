import React from "react";
import "./Hero.css";

import Beatstars from "../assets/hero/beatstars.svg";
import Soundcloud from "../assets/hero/soundcloud.svg";
import Spotify from "../assets/hero/spotify.svg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="subtitle-wrapper">
        <div className="subtitle-container">
          <h2>Mix ✦ Master</h2>
        </div>
      </div>
      <h1 className="hero-title">
        Crafting the <span className="gradient-text">soundtrack</span> to your
        vision
      </h1>
      <div className="logo-container">
        <a
          href="https://www.beatstars.com/prodbymelord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Beatstars}
            alt="Beatstars"
            className="logo logo-beatstars"
          />
        </a>
        <a
          href="https://soundcloud.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Soundcloud}
            alt="Soundcloud"
            className="logo logo-soundcloud"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/0URUQY8sVBLUoDtPDaKZIG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Spotify} alt="Spotify" className="logo logo-spotify" />
        </a>
      </div>
    </div>
  );
};
