import { ReactNode, createContext, useState } from "react";
import React from "react";
import light from "../../../assets/light.png";
import dark from "../../../assets/dark.png";

export const themes = {
  light: {
    background: "white",
    color: "black",
    img: `${light}`,
  },
  dark: {
    background: "#24272c",
    color: "white",
    img: `${dark}`,
  },
};
type Children = {
  children: ReactNode;
};
export const ThemeContext = createContext({});

export const Provider = ({ children }: Children) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
