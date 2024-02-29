import React from "react";
import { TbAdjustmentsCog } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import Menu from "../Menu";
import "./BaralhoStyle.css";

const Baralhos = () => {



  return (
    <main className="UserContent">
      <Menu />
      <section className="ViewContent">
        <ul className="OptionsBTNS">
          <li>
            <button className="BoxBuscaOtimizada">
              <TbAdjustmentsCog className="BuscaOtimizada" />
            </button>
          </li>
          <li>
            <button className="BoxCriacoesPessoais">Criações pessoais</button>
          </li>
          <li>
            <button className="BuscaPorClasse">Buscar por classe</button>
          </li>
          <li>
            <button className="BoxBuscaGeral">
              <VscSearch className="BuscaGeral" />
            </button>
          </li>
          <li>
            <button className="BoxCriarBaralho">
              <IoCreateOutline className="CriarBaralho" /> Criar Baralho
            </button>
          </li>
        </ul>
        <section className="content"></section>
      </section>
    </main>
  );
};

export default Baralhos;
