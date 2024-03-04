import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="Forma">
      <div className="BackDeck">
        <h1>Patos flamejantes</h1>
        <img src="images/cardFace/IconBack.png" alt="" />
        <p>
          Em cada carta deste baralho, há um convite para explorar novos
          horizontes, desafiar limites e encontrar alegria nas mais inesperadas
          jogadas da vida.
        </p>{" "}
      </div>
      <form className="FormPost">
        <input type="text" id="novoTitulo" placeholder="Novo título" />
        <input type="text" id="novaImagem" placeholder="Nova URL da imagem" />
        <textarea id="novoParagrafo" placeholder="Novo parágrafo"></textarea>
        <button type="button" onclick="atualizarElementos()">
          Atualizar
        </button>
      </form>
    </section>
  );
};

export default Form;
