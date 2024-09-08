import React from "react";
import "./LicensingCard.css";
import Check from "../assets/licensing/check.svg";
import Tag from "../assets/licensing/price-tag.svg";

export const LicensingCard = () => {
  return (
    <>
      <div className="card">
        <div className="title gradient-text"> Non-Profit (mp3)</div>
        <div className="price">$24.95</div>
        <button className="btn btn-secondary">Read full license</button>
        <div className="feature-list">
          <div className="feature">
            <img src={Check} alt="check" />
            <p>Non-commercial use only</p>
          </div>
          <div className="feature">
            <img src={Check} alt="check" />
            <p>No distribution allowed</p>
          </div>
          <div className="feature">
            <img src={Check} alt="check" />
            <p>No online streaming</p>
          </div>
          <div className="feature">
            <img src={Check} alt="check" />
            <p>No music video rights</p>
          </div>
          <div className="feature">
            <img src={Check} alt="check" />
            <p>Non-profit performances only</p>
          </div>
        </div>
      </div>
      <div className="undercard">
        <div className="undercard-content">
          <img src={Tag} alt="price-tag" />
          <div className="deal">Buy 1 track, get 2 free</div>
        </div>
      </div>
    </>
  );
};
