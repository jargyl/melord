import React, { useState, useEffect } from "react";
import "./Contact.css";
import Mail from "../assets/contact/mail.svg";
import Beatstars from "../assets/contact/beatstars.svg";
import YouTube from "../assets/contact/youtube.svg";
import Spotify from "../assets/contact/spotify.svg";
import Instagram from "../assets/contact/instagram.svg";
import Discord from "../assets/contact/discord.svg";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("mail");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this value as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:john@gmail.com?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <div className="subtitle-wrapper">
        <div className="subtitle-container">
          <img src={Mail} alt="mail" className="icon" />
          <h2>Get In Touch</h2>
        </div>
      </div>
      <h1>
        Contact <span className="gradient-text">me</span>
      </h1>
      {isMobile && (
        <div className="tabs">
          <button
            className={activeTab === "mail" ? "active" : ""}
            onClick={() => setActiveTab("mail")}
          >
            EMAIL
          </button>
          <button
            className={activeTab === "socials" ? "active" : ""}
            onClick={() => setActiveTab("socials")}
          >
            SOCIALS
          </button>
        </div>
      )}
      <div className="form-container">
        {(!isMobile || activeTab === "mail") && (
          <div className="mail">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
        {(!isMobile || activeTab === "socials") && (
          <div className="socials">
            <h3 className="gradient-text">Socials</h3>
            <div className="social-link-container">
              <a href="" className="social-link">
                <img src={Beatstars} alt="beatstars" className="icon" />
                <h2>Beatstars</h2>
              </a>
              <a href="" className="social-link">
                <img src={YouTube} alt="youtube" className="icon" />
                <h2>YouTube</h2>
              </a>
              <a href="" className="social-link">
                <img src={Spotify} alt="spotify" className="icon" />
                <h2>Spotify</h2>
              </a>
              <a href="" className="social-link">
                <img src={Instagram} alt="instagam" className="icon" />
                <h2>Instagram</h2>
              </a>
              <a href="" className="social-link">
                <img src={Discord} alt="discord" className="icon" />
                <h2>Discord</h2>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
