import React, { useEffect } from "react";
import "./styled.css"; // Certifique-se de criar este arquivo de estilo

export const Parallax2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer: any = document.querySelector(
        ".parallax-container",
      );
      const scrollValue = window.scrollY;
      requestAnimationFrame(() => {
        parallaxContainer.style.transform = `translateY(${scrollValue * 0.3}px)`;
      }); // Ajuste o fator de parallax conforme necessário
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
