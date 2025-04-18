import React, { useContext } from "react";
import "./styled.css";
import { Headers } from "@/components/header";
import { ThemeContext } from "@/theme-context";
import imageDev from "@/assets/backgroundDev.jpg";
import { Footer } from "@/components/footer";
import Projects2 from "@/components/project2";
import { Projects } from "@/components/projects";
import development from "@/assets/development.png";
import developmentweb from "@/assets/developmentweb.jpg";
import coffe from "@/assets/coffe.gif";

const Home = () => {
  const { theme }: any = useContext(ThemeContext);

  return (
    <main style={{ background: theme.background, color: theme.color }}>
      <Headers />
      <div className="logoDiv">
        <div className="logImg">
          <div className="divCoffe">
            <img src={`${coffe}`} alt="coffe" />
          </div>
          <img src={`${development}`} alt="notebook" />
        </div>
        <div className="logName">
          <div className="animatedheader">
            <span>O</span>
            <span>L</span>
            <span>Á</span>
          </div>
          <h1 className="title">sou Jonas Souza,</h1>
          <h2>Desenvolvedor Web.</h2>
          <p>
            Para mim, os fundamentos da web, assim como em tudo que conheço, são
            alicerces de descobertas e inovações contínuas. Cada linha de código
            reflete a evolução tecnológica, onde entender os princípios do
            passado é fundamental para construir o futuro.
          </p>
        </div>
      </div>
      <section style={{ backgroundImage: `url(${imageDev})` }}>
        <div className="aboutMe">
          <div className="b1">
            <a
              className="textVenda"
              href="https://mercadolivre.com/sec/2ZL9Sn3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Guia definitivo - JavaScript</p>
            </a>

            <img src={`${developmentweb}`} alt="desk" />
          </div>
          <div className="b2">
            <h3>Sobre mim</h3>
            <p>
              aprendo pelo prazer de entender como hardware e software funcionam
              em um nível mais profundo. Meu foco está nas fundações da
              computação, buscando compreender algoritmos e princípios
              essenciais, sempre movido pela curiosidade e pelo desejo de
              resolver os desafios que surgem ao longo do caminho.
            </p>
          </div>
        </div>

        <Projects />

        <Projects2 />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
