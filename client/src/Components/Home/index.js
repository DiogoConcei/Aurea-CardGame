import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!audioStarted) {
        const audio = document.getElementById("audio");
        audio.play();
        setAudioStarted(true);
      }
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [audioStarted]);

  return (
    <main className="TelaPrincipal">
      <nav className="Menu">
        <div className="logo">
          <img src="images/imagens_tela/Logo2.png" alt="" />
        </div>
        <ul className="opcoes">
          <li>
            <Link className="MenuLink" to="/">
              Login
            </Link>
          </li>
          <li>
            <Link className="MenuLink" to="/">
              Online
            </Link>
          </li>
          <li>
            <Link className="MenuLink" to="/Baralhos">
              Baralhos
            </Link>
          </li>
          <li>
            <Link className="MenuLink" to="/">
              Regras do Jogo
            </Link>
          </li>
        </ul>
        <div className="config">
          <ul>
            <li>
              <img src="images/imagens_tela/gear.png" alt="" />
            </li>

            <li>
              <img src="images/imagens_tela/volume.png" alt="" />
            </li>
          </ul>
        </div> 
      </nav>
    </main>
  );
};

export default Home;
