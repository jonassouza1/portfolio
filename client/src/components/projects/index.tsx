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
              <img src={`${github}`} alt="" />
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
              <img src={`${thelast}`} alt="" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe("https://jonassouza1.github.io/company-page/");
              }}
            >
              <img src={`${logo}`} alt="" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe(
                  "https://advanced-react-typescript-project-ds5n3f30x.vercel.app/",
                );
              }}
            >
              <img src={`${enterface}`} alt="" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe("https://ecommerce-mu-steel.vercel.app/");
              }}
            >
              <img src={`${leptop}`} alt="" />
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
