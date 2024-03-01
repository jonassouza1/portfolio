import React, { useContext, useState } from "react";
import "./styled.css";
import { Headers } from "../header";
import { ThemeContext } from "../../theme-context";
export const Home = () => {
  const { theme }: any = useContext(ThemeContext);
  const [img, setimg] = useState<number>(0);

  const imgUrls = [
    "../../../../assets/notebook.png",
    "../../../../assets/creative.png",
    "../../../../assets/on-off.png",
    "../../../../assets/disciplined.png",
  ];
  function getFillterImg() {
    setimg((prevIndex) => (prevIndex + 1) % imgUrls.length);
  }

  return (
    <main style={{ background: theme.background, color: theme.color }}>
      <Headers />
      <div className="logoDiv">
        <div className="logImg">
          <img src="../../../../assets/development.png" alt="" />
        </div>
        <div className="logName">
          <p className="hey">hey</p>
          <h1 className="title">I´m Jonas Souza</h1>
          <h2>development web fullstack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
            repellendus, aut ipsa provident eaque excepturi numquam minima
            laudantium odio saepe, alias doloribus tempore, molestias ipsum
            voluptatibus minus velit deserunt!
          </p>
        </div>
      </div>
      <section>
        <div className="aboutMe">
          <div className="b1"></div>
          <div className="b1"></div>
        </div>
        <div className="fatherProject">
          <nav className="navProjects">
            <ul className="ulProjects">
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Node</a>
              </li>
            </ul>
          </nav>
          <div className="projects">
            <div className="projectsDivs">
              <div className="p1"></div>
              <div className="p1"></div>
              <div className="p1"></div>
            </div>
            <div className="projectImg"></div>
          </div>
        </div>

        <div className="skills">
          <div className="skillsDiv">
            <button onClick={() => getFillterImg()}>
              <i
                className="fa-solid fa-play fa-rotate-180"
                style={{ color: "#7733ff" }}
              ></i>
            </button>
            <div className="skillsDivImg">
              <div className="skillsImg">
                <img src={imgUrls[img]} alt={`imagens ${img + 1}`} />
              </div>
            </div>
            <button onClick={() => getFillterImg()}>
              <i className="fa-solid fa-play" style={{ color: "#7733ff" }}></i>
            </button>
          </div>
        </div>
      </section>
      <div className="fundo"></div>
      <footer>
        <div className="imgContat"></div>
        <div className="infoContat"></div>
      </footer>
    </main>
  );
};
