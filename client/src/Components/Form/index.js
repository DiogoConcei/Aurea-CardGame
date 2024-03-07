import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./Form.css";

const validationSchema = Yup.object().shape({
  nomeBaralho: Yup.string().required('Campo obrigatório'),
  description: Yup.string().max(150, 'Faça uma descrição de até 150 caracteres').required('Por favor, preencha o campo')
})

const CriaBaralho = () => {
  const [formData, setFormData] = useState({
    nomeBaralho: '',
    description: '',
    imagem: null
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setFormData({ ...formData, [name]: file });

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById('visualizacao-imagem').src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        document.getElementById('visualizacao-imagem').src = 'images/cardFace/IconBack.png'; // Se nenhum arquivo for selecionado, volta para a imagem padrão
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="CreateDeck">
      <div className="BackDeck">
        <h1>{formData.nomeBaralho || "Patos flamejantes"}</h1>
        <img id="visualizacao-imagem" src="images/cardFace/IconBack.png" alt="" />
        <p>{formData.description || "Em cada carta deste baralho, há um convite para explorar novos horizontes, desafiar limites e encontrar alegria nas mais inesperadas jogadas da vida."}</p>
      </div>
      <Formik
        initialValues={{
          nomeBaralho: '',
          description: '',
          ImageInput: null
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        className="FormikPost"
      >
        <Form className="FormPost">
          <Field
            type="text"
            id="nomeBaralho"
            className="NomeBaralho"
            name="nomeBaralho"
            placeholder="Nome do baralho"
            value={formData.nomeBaralho}
            onChange={handleChange}
          />
          <ErrorMessage name="nomeBaralho" component="div" />

          <label htmlFor="novaImagem" className="novaImagem">
            Envie sua nova imagem
          </label>
          <Field
            type="file"
            id="novaImagem"
            className="input-file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
          />
          <ErrorMessage name="imagem" component="div" />

          <Field
            as="textarea"
            id="description"
            name="description"
            className="descricaoBaralho"
            placeholder="Enter your description"
            value={formData.description}
            onChange={handleChange}
          />
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
