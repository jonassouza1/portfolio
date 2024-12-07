import React, { useContext } from "react";
import { NavBar } from "../navbar";
import "./styled.css";
import { ThemeContext, themes } from "@/theme-context/index";
import ebookSales from "@/assets/vendasEbook.png"
export const Headers = () => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <>
      <header>
        
        <button
          className="button"
          onClick={() => {
            setTheme(theme === themes.light ? themes.dark : themes.light);
          }}
        >
          <img src={`${theme.img}`} />
        </button>
        <div className="divVendas">
          <a href="https://mercadolivre.com/sec/2CCwo1W" target="_blank" rel="noopener noreferrer">
          <img src={`${ebookSales}`} alt="notebook" />
          </a>
          <a href="https://mercadolivre.com/sec/2CCwo1W" target="_blank" rel="noopener noreferrer">
          <p>
          Guia definitivo - JavaScript avançado!
          </p>
          </a>
        </div>
        <NavBar />
      </header>
    </>
  );
};
