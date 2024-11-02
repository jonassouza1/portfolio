import React, { useContext } from "react";
import { NavBar } from "../navbar";
import "./styled.css";
import { ThemeContext, themes } from "@/theme-context/index";
export const Headers = () => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <>
      <header>
        <NavBar />
        <button
          className="button"
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
