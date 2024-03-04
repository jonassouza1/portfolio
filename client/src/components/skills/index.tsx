import React from "react";
import { useState } from "react";
import "./styled.css";

export const Skills = () => {
  const [img, setimg] = useState<number>(0);

  const imgUrls = [
    "../../../../assets/notebook.png",
    "../../../../assets/creative.png",
    "../../../../assets/on-off.png",
    "../../../../assets/disciplined.png",
  ];
  const skills = ["comunicativo", "criativo", "pontual", "organizado"];

  function getFillterImg() {
    setimg((prevIndex) => (prevIndex + 1) % imgUrls.length);
  }

  return (
    <div className="skills">
      <h2>Skills</h2>
      <h3>{skills[img]}</h3>
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
  );
};
