import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PreviewDeck from "../PreviewDeck";
import "./Form.css";

const validationSchema = Yup.object().shape({
  nomeBaralho: Yup.string().required("Campo obrigatório"),
  description: Yup.string()
    .max(150, "Faça uma descrição de até 150 caracteres")
    .required("Por favor, preencha o campo"),
});

const CriaBaralho = () => {
  const [image, setImage] = useState(null);

  return (
    <section className="CreateDeck">
      <Formik
        initialValues={{
          nomeBaralho: "Pastores Violentos",
          description: "Um Deck focado em líderes religiosos que ficam bastante irritados quando são contráriados",
          imagem: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        className="FormikPost"
      >
        {({ values, setFieldValue }) => (
          <>
            <PreviewDeck values={values} image={image} />{" "}
            <Form className="FormPost">
              <Field
                type="text"
                id="nomeBaralho"
                className="NomeBaralho"
                name="nomeBaralho"
                placeholder="Nome do baralho"
              />
              <ErrorMessage name="nomeBaralho" />

              <label htmlFor="novaImagem" className="novaImagem">
                Envie sua nova imagem
              </label>
              <input
                type="file"
                id="novaImagem"
                className="input-file"
                name="imagem"
                accept="image/*"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  setFieldValue("imagem", e.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="imagem" />

              <Field
                as="textarea"
                id="description"
                name="description"
                className="descricaoBaralho"
                placeholder="Enter your description"
              />
              <ErrorMessage name="description" component="div" />

              <button className="FormSubmit" type="submit">
                Criar Baralho
              </button>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};

export default CriaBaralho;
