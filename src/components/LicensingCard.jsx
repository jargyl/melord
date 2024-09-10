import React from "react";
import "./LicensingCard.css";
import Check from "../assets/licensing/check.svg";
import Tag from "../assets/licensing/price-tag.svg";

export const LicensingCard = ({
  title,
  price,
  features,
  deal,
  isHighlighted,
  onReadLicense,
}) => {
  return (
    <div className={`card-container ${isHighlighted ? "highlighted" : ""}`}>
      <div className="card-wrapper">
        <div className="card">
          <div className="title gradient-text">{title}</div>
          <div className="price">${price}</div>
          <button className="btn btn-secondary" onClick={onReadLicense}>
            Read full license
          </button>
          <div className="feature-list">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <img src={Check} alt="check" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {deal && (
        <div className="undercard">
          <div className="undercard-content">
            <img src={Tag} alt="price-tag" />
            <div className="deal">{deal}</div>
          </div>
        </div>
      )}
    </div>
  );
};
