import React, { useContext } from "react";
import "./styled.css";
import { Headers } from "../header";
import { ThemeContext } from "../../theme-context";

export const Home = () => {
  const { theme }: any = useContext(ThemeContext);
  return (
    <main style={{ background: theme.background, color: theme.color }}>
      <Headers />

      <section>
        <p>APP-POKEMON</p>
        <iframe
          id="pokemon"
          src="https://advanced-react-typescript-project.vercel.app/"
        />
      </section>

      <footer>
        <span>contat</span>
      </footer>
    </main>
  );
};
