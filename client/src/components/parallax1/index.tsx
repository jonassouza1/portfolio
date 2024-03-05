import React, { useEffect } from "react";
import "./styled.css"; // Certifique-se de criar este arquivo de estilo

export const Parallax1 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer: any = document.querySelector(
        ".parallax-container1",
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
    <div className="parallax-container1">
      <img src="../../../../assets/parallax1.jpg" alt="" />
    </div>
  );
};
