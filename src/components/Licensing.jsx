import React from "react";
import "./licensing.css";
import Checklist from "../assets/licensing/checklist.svg";
import { LicensingCard } from "./LicensingCard";

const Licensing = () => {
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
      <LicensingCard />
    </div>
  );
};

export default Licensing;
