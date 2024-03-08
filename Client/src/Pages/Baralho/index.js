// base react
import React from "react";
import Menu from "../../Components/Menu/index.js";
import CriaBaralho from "../../Components/Form/index.js"
import "./BaralhoStyle.css";
// base react

// icons
import { TbAdjustmentsCog } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
// icons

// redux
import { useDispatch, useSelector } from "react-redux";
import { updateActionConfigButton } from "../../store/actions/index.js";
// redux

const Baralhos = () => {

  const actionConfigButton = useSelector(
    (state) => state.baralhos.actionConfigButton
  );
  const dispatch = useDispatch();


  const handleClick = (buttonName) => {
    dispatch(updateActionConfigButton(buttonName));
    console.log(buttonName)
  };


  const ComponentDinamico = () => {
    switch (actionConfigButton) {
      case 'Criar Baralho':
        return <CriaBaralho />;
      default:
        return null;
    }
  }

  return (
    <section className="UserContent">
      <Menu />
      <section className="ViewContent">
        <ul className="OptionsBTNS">
          <li>
            <button
              className={`BoxBuscaOtimizada ${
                actionConfigButton === "Busca Otimizada" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Otimizada")}
            >
              <TbAdjustmentsCog className="BuscaOtimizada" />
            </button>
          </li>
          <li>
            <button
              className={`BoxCriacoesPessoais ${
                actionConfigButton === "Criacoes Pessoais" ? "active" : ""
              }`}
              onClick={() => handleClick("Criacoes Pessoais")}
            >
              Criações pessoais
            </button>
          </li>
          <li>
            <button
              className={`BuscaPorClasse ${
                actionConfigButton === "Busca Por Classe" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Por Classe")}
            >
              Buscar por classe
            </button>
          </li>
          <li>
            <button
              className={`BoxBuscaGeral ${
                actionConfigButton === "Busca Geral" ? "active" : ""
              }`}
              onClick={() => handleClick("Busca Geral")}
            >
              <VscSearch className="BuscaGeral" />
            </button>
          </li>
          <li>
            <button
              className={`BoxCriarBaralho ${
                actionConfigButton === "Criar Baralho" ? "active" : ""
              }`}
              onClick={() => handleClick("Criar Baralho")}
            >
              <IoCreateOutline className="CriarBaralho" /> Criar Baralho
            </button>
          </li>
        </ul>
        <section className="exibContent">
              {ComponentDinamico()}
        </section>
      </section>
    </section>
  );
};

export default Baralhos;
