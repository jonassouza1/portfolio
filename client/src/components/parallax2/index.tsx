import React, { useEffect } from "react";
import "./styled.css";
import backgrounddev from "../../../../assets/background-dev.jpg";

export const Parallax2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer: any = document.querySelector(
        ".parallax-container",
      );
      const scrollValue = window.scrollY;
      requestAnimationFrame(() => {
        parallaxContainer.style.transform = `translateY(${scrollValue * 0.3}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <img src={`${backgrounddev}`} alt="" />
    </div>
  );
};
