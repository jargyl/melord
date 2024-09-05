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
        <img src={Beatstars} alt="Beatstars" className="logo logo-beatstars" />
        <img
          src={Soundcloud}
          alt="Soundcloud"
          className="logo logo-soundcloud"
        />
        <img src={Spotify} alt="Spotify" className="logo logo-spotify" />
      </div>
    </div>
  );
};
