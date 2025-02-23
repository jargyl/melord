import React, { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Licensing.css";
import Checklist from "../assets/licensing/checklist.svg";
import { LicensingCard } from "./LicensingCard";
import LicensePopup from "./LicensePopup";

const licenses = [
  {
    title: "NON-PROFIT (MP3)",
    price: "24.95",
    features: [
      "Non-commercial use only",
      "No distribution allowed",
      "No online streaming",
      "No music video rights",
      "Non-profit performances only",
    ],
    deal: "BUY 1 TRACK, GET 2 FREE!",
  },
  {
    title: "STANDARD (WAV)",
    price: "109.95",
    features: [
      "Commercial use allowed",
      "Up to 5,000 copies",
      "100,000 online streams",
      "1 music video allowed",
      "Non-profit performances only",
      "1 radio station broadcast",
    ],
    deal: "BUY 1 TRACK, GET 1 FREE!",
  },
  {
    title: "UNLIMITED (WAV)",
    price: "174.95",
    features: [
      "Commercial use allowed",
      "Unlimited distribution",
      "Unlimited online streams",
      "2 music videos allowed",
      "For-profit performances",
      "Unlimited radio broadcast",
    ],
  },
  {
    title: "UNLIMITED (STEMS)",
    price: "249.95",
    features: [
      "Commercial use allowed",
      "Unlimited distribution",
      "Unlimited online streams",
      "Unlimited music videos",
      "For-profit performances",
      "Unlimited radio broadcast",
    ],
  },
];

const Licensing = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (license) => {
    setSelectedLicense(license);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedLicense(null);
  };

  const renderLicenseCards = useMemo(
    () =>
      licenses.map((license, index) => (
        <LicensingCard
          key={license.title}
          {...license}
          isHighlighted={index === 2}
          onReadLicense={() => openPopup(license)}
        />
      )),
    []
  );

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
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.3}
          centeredSlides={true}
          cssMode={true}
          pagination={{ clickable: true }}
          className="licensing-swiper"
        >
          {licenses.map((license, index) => (
            <SwiperSlide key={license.title}>
              <div className="swiper-slide-container">
                {renderLicenseCards[index]}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="licensing-cards">{renderLicenseCards}</div>
      )}
      {selectedLicense && (
        <LicensePopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          price={selectedLicense.price}
          title={selectedLicense.title}
        />
      )}
    </div>
  );
};

export default Licensing;
