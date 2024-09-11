import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import YouTube from "../assets/audio-gallery/youtube.svg";
import "./AudioGallery.css";

const videos = [
  "EgZgnb3oLR4",
  "2emEZT1rtM0",
  "npjRvkwZyPI",
  "yGiG_SOpYYY",
  "Zgizk9_BnpU",
];

const Carousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSingle, setShowSingle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSingle(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {showSingle ? (
            <div className="carousel-slide active">
              <iframe
                src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
                title={`YouTube video player ${currentIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="carousel-video"
              ></iframe>
            </div>
          ) : (
            [-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + videos.length) % videos.length;
              return (
                <div
                  key={index}
                  className={`carousel-slide ${
                    offset === 0 ? "active" : "inactive"
                  }`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[index]}`}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="carousel-video"
                  ></iframe>
                </div>
              );
            })
          )}
        </div>
        <div className="carousel-buttons">
          <button onClick={prevSlide} className="carousel-button left">
            {showSingle ? "Back" : <ChevronLeft size={24} />}
          </button>
          <div className="carousel-counter">
            {currentIndex + 1}/{videos.length}
          </div>
          <button onClick={nextSlide} className="carousel-button right">
            {showSingle ? "Next" : <ChevronRight size={24} />}
          </button>
        </div>
      </div>
    </>
  );
};

export const AudioGallery = () => {
  return (
    <div className="gallery">
      <div className="subtitle-wrapper">
        <div className="subtitle-container">
          <img src={YouTube} alt="youtube" className="icon" />
          <h2>YouTube</h2>
        </div>
      </div>
      <h1>
        Audio <span className="gradient-text">Gallery</span>
      </h1>
      <Carousel videos={videos} />
    </div>
  );
};
