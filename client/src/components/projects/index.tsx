import React from "react";
import { useState } from "react";
import "./styled.css";

export const Projects = () => {
  const [iframe, setiframe] = useState("");
  return (
    <>
      <h2>Projects</h2>
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
              <img src="../../../../assets/githubappimg.jpg" alt="" />
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
              <img src="../../../../assets/thelast.png" alt="" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe("https://jonassouza1.github.io/company-page/");
              }}
            >
              <img src="../../../../assets/logoE.png" alt="" />
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
              <img src="../../../../assets/interface.jpeg" alt="" />
            </a>
          </div>
          <div className="p1">
            <a
              onClick={() => {
                setiframe(
                  "https://jonassouza1.github.io/validation-form-design/",
                );
              }}
            >
              <img src="../../../../assets/form.jpeg" alt="" />
            </a>
          </div>
        </div>
        <div className="projectImg">
          <iframe src={iframe} />
        </div>
      </div>
    </>
  );
};
