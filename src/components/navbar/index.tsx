import React, { useContext } from "react";
import "./styled.css";
import { ThemeContext } from "../../theme-context";
import NavResponsive from "../navresponsive";

export const NavBar = () => {
  const { theme }: any = useContext(ThemeContext);
  return (
    <nav>
      <ul style={{ background: theme.background, color: theme.color }}>
        <li className="father">
          <a
            href="https://www.canva.com/design/DAGlCCGBrds/LUgtz-IHd5qgQ7lKsi37OQ/edit?utm_content=DAGlCCGBrds&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            Curriculo
          </a>
        </li>
        <li className="father">
          <a className="children" href="#">
            Projetos Backend
          </a>
          <div className="dropdown">
            <a
              href="https://movieflix-api-btkn.onrender.com/docs/"
              target="_blank"
            >
              API/Pg
            </a>
            <a
              href="https://movieflix-api-v-orm.onrender.com/docs/"
              target="_blank"
            >
              API/Prisma
            </a>
          </div>
        </li>
      </ul>

      <NavResponsive />
    </nav>
  );
};
