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
          <div className="animatedheader">
            <span>O</span>
            <span>L</span>
            <span>Á</span>
          </div>
          <h1 className="title">sou Jonas Souza</h1>
          <h2>Desenvolvedor Web FullStack</h2>
          <p>
            Com linhas de código como pincéis, eu desenho o futuro da web.
            Frontend que encanta, backend que surpreende. Transformando ideias
            em experiências, sou o arquiteto digital que constrói pontes entre
            sonhos e realidade.
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
            <h3>Sobre mim</h3>
            <p>
              Sou um Desenvolvedor web focado em transformar ideias em soluções
              digitais eficazes, alinhadas às regras de negócio e à satisfação
              do cliente. Da concepção ao produto final, crio experiências que
              se destacam e estou sempre em busca de novos desafios e inovações.
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
