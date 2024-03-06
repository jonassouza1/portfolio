import React, { useContext } from "react";
import { NavBar } from "../navbar";
import "./styled.css";
import { ThemeContext, themes } from "../../theme-context";
import home from "../../../../assets/home.jpg";
export const Headers = () => {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  return (
    <>
      <header>
        <a className="home" href="#">
          <img src={`${home}`} alt="" />
        </a>
        <NavBar />
        <button
          onClick={() => {
            setTheme(theme === themes.light ? themes.dark : themes.light);
          }}
        >
          <img src={`${theme.img}`} />
        </button>
      </header>
    </>
  );
};
