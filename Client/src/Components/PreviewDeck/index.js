  import React, { useState } from "react";
  import axios from "axios";
  import "./PreviewDeck.css";

  const PreviewDeck = ({ values, image }) => {
    const [removedImageUrl, setRemovedImageUrl] = useState("");

    async function handleRemoveBackground() {
      try {
        const response = await axios.post(
          "http://localhost:3000/remove-background",
          { image },
          { responseType: "blob" }
        );
        console.log(response)
        const imageUrl = URL.createObjectURL(response.data);
        setRemovedImageUrl(imageUrl);
      } catch (error) {
        console.error("Erro ao remover o fundo da imagem:", error);
      }
    }

    return (
      <section>
        <div className="BackDeck">
          <h1>{values.nomeBaralho}</h1>
          {image && <img id="visualizacao-imagem" src={image} alt="" />}
          {removedImageUrl && <img src={removedImageUrl} alt="Sem fundo" />}
          <button onClick={handleRemoveBackground}>Remover Fundo</button>
          <p>{values.description}</p>
        </div>
      </section>
    );
  };

  export default PreviewDeck;
