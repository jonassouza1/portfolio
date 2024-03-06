import React, { useContext } from "react";
import "./styled.css";
import { Headers } from "../header";
import { ThemeContext } from "../../theme-context";
import { Parallax2 } from "../parallax2";
import { Footer } from "../footer";
import { Skills } from "../skills";
import { Projects } from "../projects";
import { Parallax1 } from "../parallax1";
import development from "../../../../assets/development.png";
import developmentweb from "../../../../assets/developmentweb.jpg";
export const Home = () => {
  const { theme }: any = useContext(ThemeContext);

  return (
    <main style={{ background: theme.background, color: theme.color }}>
      <Headers />
      <div className="logoDiv">
        <div className="logImg">
          <img src={`${development}`} alt="" />
        </div>
        <div className="logName">
          <p className="hey">hey</p>
          <h1 className="title">I´m Jonas Souza</h1>
          <h2>Fullstack Web Developer</h2>
          <p>
            With lines of code as brushes, I design the future of the web.
            Frontend that delights, backend that surprises. Transforming ideas
            into experiences, I am the digital architect who builds bridges
            between dreams and reality.
          </p>
        </div>
      </div>
      <section>
        <Parallax1 />
        <div className="aboutMe">
          <div className="b1">
            <img src={`${developmentweb}`} alt="" />
          </div>
          <div className="b2">
            <h3>About me</h3>
            <p>
              I embarked on this journey in October 2022, converting ideas into
              digital reality. From code conception to final product, I build
              experiences that stand out. My trajectory is marked by constant
              evolution, guided by the incessant search for new challenges and
              innovations.
            </p>
          </div>
        </div>

        <Projects />

        <Parallax2 />
        <Skills />
      </section>
      <Footer />
    </main>
  );
};
