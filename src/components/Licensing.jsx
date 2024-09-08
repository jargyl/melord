import React from "react";
import "./licensing.css";
import Checklist from "../assets/licensing/checklist.svg";
import { LicensingCard } from "./LicensingCard";

const Licensing = () => {
  const licenses = [
    {
      title: "Non-Profit (mp3)",
      price: "24.95",
      features: [
        "Non-commercial use only",
        "No distribution allowed",
        "No online streaming",
        "No music video rights",
        "Non-profit performances only",
      ],
      deal: "Buy 1 track, get 2 free",
    },
    {
      title: "Commercial (WAV)",
      price: "49.95",
      features: [
        "Commercial use allowed",
        "Limited distribution",
        "Online streaming allowed",
        "Music video rights included",
        "Unlimited performances",
      ],
      // No deal for this license
    },
  ];

  return (
    <div className="licensing">
      <div className="subtitle-wrapper">
        <div className="subtitle-container">
          <img src={Checklist} alt="shop" className="icon" />
          <h2>Usage Rights</h2>
        </div>
      </div>
      <h1>
        Licensing <span className="gradient-text">Info</span>
      </h1>
      <div className="licensing-cards">
        {licenses.map((license, index) => (
          <LicensingCard key={index} {...license} />
        ))}
      </div>
    </div>
  );
};

export default Licensing;
