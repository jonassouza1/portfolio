import React, { useContext } from "react";
import { NavBar } from "../navbar";
import "./styled.css";
import { ThemeContext, themes } from "@/theme-context/index";
export const Headers = () => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <>
      <header>
        <div>
          <button
            className="button"
            onClick={() => {
              setTheme(theme === themes.light ? themes.dark : themes.light);
            }}
          >
            <img src={`${theme.img}`} />
          </button>
        </div>

        <div className="services">
          <a href="https://relaxed-sundae-1f933c.netlify.app/" target="_blank">
            Serviços
          </a>
        </div>
        <NavBar />
      </header>
    </>
  );
};
