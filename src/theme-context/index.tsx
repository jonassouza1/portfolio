import { ReactNode, createContext, useState } from "react";
import React from "react";
import light from "@/assets/light.png";
import dark from "@/assets/dark.png";

export const themes = {
  light: {
    background: "#fdffff",
    color: "#9178c0",
    img: `${light}`,
  },
  dark: {
    background: "black",
    color: "white",
    img: `${dark}`,
  },
};
type Children = {
  children: ReactNode;
};
export const ThemeContext = createContext({});

const Provider = ({ children }: Children) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
