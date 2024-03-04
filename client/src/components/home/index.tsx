import React, { useContext, useState } from "react";
import "./styled.css";
import { Headers } from "../header";
import { ThemeContext } from "../../theme-context";
import { Parallax } from "../paralaxx";
import { Footer } from "../footer";
import { Skills } from "../skills";
import { Projects } from "../projects";
export const Home = () => {
  const { theme }: any = useContext(ThemeContext);

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
          <div className="b1">
            <img src="../../../../assets/developmentweb.jpg" alt="" />
          </div>
          <div className="b2">
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              facere praesentium fuga non aperiam unde quis earum, blanditiis
              voluptates architecto laborum tempore modi numquam exercitationem
              ut nemo quia vero odio.
            </p>
          </div>
        </div>

        <Projects />

        <Parallax />
        <Skills />
        <Footer />
      </section>
    </main>
  );
};
