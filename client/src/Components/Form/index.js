import React from "react";
import { Formik, Form, Field } from "formik";
import "./Form.css";

const CriaBaralho = () => {
  return (
    <section className="CreateDeck">
      <div className="BackDeck">
        <h1>Patos flamejantes</h1>
        <img src="images/cardFace/IconBack.png" alt="" />
        <p>
          Em cada carta deste baralho, há um convite para explorar novos
          horizontes, desafiar limites e encontrar alegria nas mais inesperadas
          jogadas da vida.
        </p>
      </div>
      <form className="FormPost">
        <input type="text" id="nomeBaralho" placeholder="Nome do baralho" />
        <label htmlFor="novaImagem" className="novaImagem">
          Envie sua nova imagem
        </label>
        <input
          type="file"
          id="novaImagem"
          className="input-file"
          accept="image/*"
        />
        <textarea
          id="descricaoBaralho"
          placeholder="Descrição do baralho" spellCheck="false"
        ></textarea>
        <button className="FormSubmit" type="button" onclick="">
          Criar Baralho
        </button>
      </form>
    </section>
  );
};

export default CriaBaralho;
