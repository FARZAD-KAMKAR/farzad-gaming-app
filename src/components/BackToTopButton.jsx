import React, { useState, useEffect } from "react";
import "./BackToTopButton.css";
import { IoIosArrowUp } from "react-icons/io";

export const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    <button
      className={`back-to-top ${showButton ? "active" : ""}`}
      onClick={handleClick}
    >
      <i className="fs-3 mb-2">
        <IoIosArrowUp />
      </i>
    </button>
  );
};
