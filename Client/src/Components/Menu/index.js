import React from "react";
import { Link, useLocation } from "react-router-dom";
import SubmenuAtual from "../SubMenu/index.js";
import "./MenuStyle.css";

const Menu = () => {
  const rota = useLocation();

  return (
    <article className="ViewMenu">
      <section className="MenuAlternativo">
        <ul className="MenuAlternativos_Options">
          <li className="">
            <Link to="/" className="MenuLinkGeral">
              <img src="/images/imagens_tela/Inicio_icon.png" alt="" />
              <p>Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="MenuLinkGeral">
              <img src="/images/imagens_tela/Jogar_icon.png" alt="" />
              <p>Jogar</p>
            </Link>
          </li>
          <li className={rota.pathname === "/Baralhos" ? "active" : ""}>
            <Link to="/Baralhos" className="MenuLinkGeral">
              <img src="/images/imagens_tela/Itens_icon.png" alt="" />
              <p>Baralhos</p>
            </Link>
          </li>
          <li className="teste">
            <Link to="/" className="MenuLinkGeral">
              <img src="/images/imagens_tela/Como_Jogar.png" alt="" />
              <p>Como Jogar</p>
            </Link>
          </li>
        </ul>
      </section>
        <SubmenuAtual />
    </article>
  );
};

export default Menu;