import React, { useContext } from "react";
import "./styled.css";
import { ThemeContext, themes } from "../../theme-context";

export const NavBar = () => {
  const { theme }: any = useContext(ThemeContext);
  return (
    <nav>
      <ul style={{ background: theme.background, color: theme.color }}>
        <li className="father">
          <a href="../../../../assets/curriculum.pdf" target="_blank">
            Curriculum
          </a>
        </li>
        <li className="father">
          <a className="children" href="#">
            Project Backend
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
          </div>
        </li>
      </ul>
    </nav>
  );
};
