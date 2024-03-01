import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateActiveButton } from '../../store/actions'; 
import './SubMenu.css'

const SubmenuAtual = () => {
  const rota = useLocation();

  const ControlerSubmenus = {
    "/Baralhos": <SubmenuBaralho />,
    "/Baralhos/Cartas": <SubmenuBaralho />,
  };

  const Submenu = () => {
    return ControlerSubmenus[rota.pathname] || null;
  };

  return <Submenu />;
};

const SubmenuBaralho = () => {
  const activeButton = useSelector(state => state.submenu.activeButton)
  const dispatch = useDispatch();

  const handleClick = (buttonName) => {
    dispatch(updateActiveButton(buttonName))
  }

  return (
    <div>
      <ul className="SubMenuBaralho">
        <li>
          <button
            onClick={() => handleClick("Todos os baralhos")}
            className={activeButton === "Todos os baralhos" ? "active" : ""}
          >
            Todos os baralhos
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("Baralhos pessoais")}
            className={activeButton === "Baralhos pessoais" ? "active" : ""}
          >
            Baralhos pessoais
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("Todas as cartas")}
            className={activeButton === "Todas as cartas" ? "active" : ""}
          >
            Baralho amigos
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("Baralhos Pré-montados")}
            className={activeButton === "Baralhos Pré-montados" ? "active" : ""}
          >
            Baralhos Pré-montados
          </button>
        </li>

        <li>
          <button
            onClick={() => handleClick("Cartas")}
            className={activeButton === "Cartas" ? "active" : ""}
          >
            Cartas
          </button>
        </li>
        <div className="options_view"></div>
      </ul>
    </div>
  );
};

export default SubmenuAtual;
