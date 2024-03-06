import React from "react";
import "./styled.css";
export const Footer = () => {
  return (
    <footer>
      <div className="imgContat">
        <img src="../../../../assets/digital.jpg" alt="" />
      </div>
      <div className="infoContat">
        <a
          href="https://www.linkedin.com/in/jonas-souza-dev-fullstack"
          target="_blank"
        >
          <i
            className="fa-brands fa-linkedin"
            style={{ color: " #74C0FC" }}
          ></i>
        </a>
        <a href="https://github.com/jonassouza1" target="_blank">
          <i
            className="fa-brands fa-square-github"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=555196848538&text=Olá%20Gostaria%20de%20mais%20informações"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp" style={{ color: "#63E6BE" }}></i>
        </a>
      </div>
    </footer>
  );
};
