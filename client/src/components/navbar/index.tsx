import React, { useContext } from "react";
import "./index.css";
import { ThemeContext, themes } from "../../theme-context";

export const NavBar = () => {
  const { theme }: any = useContext(ThemeContext);
  return (
    <nav>
      <ul style={{ background: theme.background, color: theme.color }}>
        <li className="father">
          <a className="children" href="#">
            <h1> Projetos Frontend</h1>
          </a>
          <div className="dropdown">
            <a
              href="https://jonassouza1.github.io/projeto-the-last-of-us/"
              target="_blank"
            >
              The Last Of US
            </a>
            <a
              href="https://jonassouza1.github.io/projeto-inicial-fetch-github-api/"
              target="_blank"
            >
              GitHub API
            </a>
            <a
              href="https://jonassouza1.github.io/validation-form-design/"
              target="_blank"
            >
              Formulário/validação
            </a>
          </div>
        </li>
        <li className="father">
          <a className="children" href="#">
            <h1> Projetos Backend </h1>
          </a>
          <div className="dropdown">
            <a
              href="https://github.com/jonassouza1/movieflix-api"
              target="_blank"
            >
              API/Pg
            </a>
            <a
              href="https://github.com/jonassouza1/movieflix-api-v-orm"
              target="_blank"
            >
              API/Prisma
            </a>
            <a href="https://newcloneapp.com.br/" target="_blank">
              TabNews "em desenvolvimento"
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
