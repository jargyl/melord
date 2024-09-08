import React from "react";
import "./Store.css";
import Shop from "../assets/store/shop.svg";
import Headphones from "../assets/store/headphones.svg";
import Secure from "../assets/store/secure.svg";
import Lightning from "../assets/store/lightning.svg";
import PayPal from "../assets/store/paypal.svg";
import Visa from "../assets/store/visa.svg";
import MasterCard from "../assets/store/mastercard.svg";
import Stripe from "../assets/store/stripe.svg";

export const Store = () => {
  return (
    <div className="store">
      <div className="subtitle-wrapper">
        <div className="subtitle-container">
          <img src={Shop} alt="shop" className="icon" />
          <h2>Shop Beats</h2>
        </div>
      </div>
      <h1>
        Buy 2 Get <span className="gradient-text">1 free</span>
      </h1>
      <p className="subtext">
        simply add 3 beats with the same license option and watch the cart
        automatically update giving you 1 free beat.
      </p>
      <div>
        <iframe src="https://player.beatstars.com/?storeId=148557" id="shop" />
        <div className="iframe-footer">
          <div className="footer-btn">
            <img src={Headphones} alt="headphones" className="icon" />
            <div>Explore Beats</div>
          </div>
          <div className="footer-btn">
            <img src={Secure} alt="secure" className="icon" />
            <div>Secure Checkout</div>
          </div>
          <div className="footer-btn">
            <img src={Lightning} alt="lightning" className="icon" />
            <div>Immediate Access</div>
          </div>
        </div>
        <div className="payment-options">
          <img src={PayPal} alt="paypal" />
          <img src={Visa} alt="visa" />
          <img src={MasterCard} alt="mastercard" />
          <img src={Stripe} alt="stripe" />
        </div>
      </div>
    </div>
  );
};
