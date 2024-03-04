import React, { useEffect } from "react";
import "./styled.css"; // Certifique-se de criar este arquivo de estilo

export const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer: any = document.querySelector(
        ".parallax-container",
      );
      const scrollValue = window.scrollY;
      parallaxContainer.style.transform = `translateY(${scrollValue * 0.5}px)`; // Ajuste o fator de parallax conforme necessário
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <img src="../../../../assets/background-dev.jpg" alt="" />
    </div>
  );
};
