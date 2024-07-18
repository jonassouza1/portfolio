import React from "react";
import { useState } from "react";
import "./styled.css";
import github from "../../../../assets/githubappimg.jpg";
import thelast from "../../../../assets/thelast.png";
import logo from "../../../../assets/logoE.png";
import enterface from "../../../../assets/interface.jpg";
import leptop from "../../../../assets/leptop.jpg";

export const Projects = () => {
  const [iframe, setiframe] = useState("");
  return (
    <>
      <h2 style={{ zIndex: "1", marginTop: "200px" }}>Projetos</h2>
      <div className="projects">
        <div className="projectsDivs">
          <div className="p1">
            <a
              onClick={() => {
                setiframe(
                  "https://jonassouza1.github.io/projeto-inicial-fetch-github-api/",
                );
              }}
            >
              <img src={`${github}`} alt="APP baseado no GitHub" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe(
                  "https://jonassouza1.github.io/projeto-the-last-of-us/",
                );
              }}
            >
              <img src={`${thelast}`} alt="imagem do the last of us" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe("https://jonassouza1.github.io/company-page/");
              }}
            >
              <img src={`${logo}`} alt="logo do site" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe(
                  "https://jonassouza1.github.io/advanced-react-typescript-project",
                );
              }}
            >
              <img src={`${enterface}`} alt="interface" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe("https://ecommerce-ivory-ten.vercel.app/");
              }}
            >
              <img src={`${leptop}`} alt="leotop" />
            </a>
          </div>
        </div>
        <a className="fullscreen" href={iframe} target="_blank">
          Ver em tela cheia
        </a>
        <div className="projectImg">
          <iframe src={iframe} />
        </div>
      </div>
    </>
  );
};
