import React, { useContext } from "react";
import { NavBar } from "../navbar";
import "./index.css";
import { ThemeContext, themes } from "../../theme-context";
export const Headers = () => {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  return (
    <>
      <header>
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
