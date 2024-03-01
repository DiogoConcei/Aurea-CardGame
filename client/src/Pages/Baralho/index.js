// base react
import React, { useState } from "react";
import Menu from "../../Components/Menu/index.js";
import "./BaralhoStyle.css";
// base react

// icons
import { TbAdjustmentsCog } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
// icons

// redux
import { useSelector, useDispatch } from "react-redux";
import { updateActionConfigButton } from "../../store/actions"; // Importe a ação correta//redux
// redux

const Baralhos = () => {
  const [activeButton, setActiveButton] = useState("");

  const actionConfigButton = useSelector((state) => state.submenu.activeButton);
  const dispatch = useDispatch();

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    dispatch(updateActionConfigButton(buttonName)); // Dispatch da ação correta
  };

  return (
    <section className="UserContent">
      <Menu />
      <section className="ViewContent">
        <ul className="OptionsBTNS">
          <li>
            <button
              className={`BoxBuscaOtimizada ${
                activeButton === "Busca Otimizada" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Otimizada")}
            >
              <TbAdjustmentsCog className="BuscaOtimizada" />
            </button>
          </li>
          <li>
            <button
              className={`BoxCriacoesPessoais ${
                activeButton === "Criacoes Pessoais" ? "active" : ""
              }`}
              onClick={() => handleClick("Criacoes Pessoais")}
            >
              Criações pessoais
            </button>
          </li>
          <li>
            <button
              className={`BuscaPorClasse ${
                activeButton === "Busca Por Classe" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Por Classe")}
            >
              Buscar por classe
            </button>
          </li>
          <li>
            <button
              className={`BoxBuscaGeral ${
                activeButton === "Busca Geral" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Geral")}
            >
              <VscSearch className="BuscaGeral" />
            </button>
          </li>
          <li>
            <button
              className={`BoxCriarBaralho ${
                activeButton === "Criar Baralho" ? "active" : ""
              }`}
              onClick={() => handleClick("Criar Baralho")}
            >
              <IoCreateOutline className="CriarBaralho" /> Criar Baralho
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Baralhos;
