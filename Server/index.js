const express = require("express");
const cors = require('cors')
const removeBgRouter = require("./routes/removeFundo"); // Importe o roteador removeBackground

const app = express();
app.use(cors)

app.use(express.json());

app.use("/removeFundo", removeBgRouter);

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
