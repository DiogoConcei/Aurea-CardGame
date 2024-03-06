import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./Form.css";

const validationSchema = Yup.object().shape({
  nomeBaralho: Yup.string().required('Campo obrigatório'),
  description: Yup.string().max(150, 'Faça uma descrição de até 150 caracteres').required('Por favor, preencha o campo')
})

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
      <Formik
        initialValues={{
          nomeBaralho: "Patos flamejantes",
          descricaoBaralho:
            "Em cada carta deste baralho, há um convite para explorar novos horizontes, desafiar limites e encontrar alegria nas mais inesperadas jogadas da vida.",
          ImageInput: null
        }}
        validationSchema={validationSchema}
        className="FormikPost"
      >
        <Form className="FormPost">
          <Field
            type="text"
            id="nomeBaralho"
            className="NomeBaralho"
            name="nomeBaralho"
            placeholder="Nome do baralho"
          />
          <ErrorMessage name="nomeBaralho" component="div" />

          <label htmlFor="novaImagem" className="novaImagem">
            Envie sua nova imagem
          </label>
          <Field
            type="file"
            id="novaImagem"
            className="input-file"
            name="ImageInput"
            accept="image/*"
          />
          <ErrorMessage name="ImageInput" component="div" />

          <Field
                as="textarea"
                id="description"
                name="description"
                className="descricaoBaralho"
                placeholder="Enter your description"          />
          <ErrorMessage name="description" component="div" />


          <button className="FormSubmit" type="submit">
            Criar Baralho
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default CriaBaralho;
