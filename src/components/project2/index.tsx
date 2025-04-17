import React from "react";
import { useState } from "react";
import "./styled.css";
import form from "@/assets/form.jpg";
import carroussel from "@/assets/carrossel.gif";
import notebook from "@/assets/notebook.png";
import tv from "@/assets/tv.png";
import pokemonv2 from "@/assets/pokemonv2.gif";

const Project2 = () => {
  const [img, setimg] = useState<number>(0);
  const [url, setUrl] = useState<number>(0);

  const imgUrls = [`${form}`, `${carroussel}`, `${notebook}`, `${pokemonv2}`];
  const titles = [
    "Validação de Formulário",
    "carrossel de imagens",
    "Ecommerce Fullstack",
    "Pokemons App Versão Antiga",
  ];
  const project = [
    "https://jonassouza1.github.io/validation-form-design/",
    "https://jonassouza1.github.io/carousel-slider/",
    "https://jonassouza1.github.io/ecommercejs-frontend-site/",
    "https://jonassouza1.github.io/react-avancado-pokemons",
  ];

  function getFillterImg() {
    setimg((prevIndex) => (prevIndex + 1) % imgUrls.length);
  }
  function getFilterProjectUrl() {
    setUrl((prevIndex) => (prevIndex + 1) % project.length);
  }

  return (
    <div className="containerTv">
      <h2>Mais Projetos</h2>
      <p>
        Use as setas da TV para passar os projetos e clique na tela para
        abri-lo.
      </p>
      <div className="sectionTv" style={{ backgroundImage: `url(${tv})` }}>
        <a href={project[url]} target="_blank" rel="noopener noreferrer">
          <img src={imgUrls[img]} alt={`imagens ${img + 1}`} />
          <h3>{titles[img]}</h3>
        </a>

        <div className="divButtonTv">
          <button
            onClick={() => {
              getFillterImg();
              getFilterProjectUrl();
            }}
          >
            <i
              className="fa-solid fa-play fa-rotate-180"
              style={{ color: "black" }}
            ></i>
          </button>
          <button
            onClick={() => {
              getFillterImg();
              getFilterProjectUrl();
            }}
          >
            <i className="fa-solid fa-play" style={{ color: "black" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
