const express = require('express');
const router = express.Router();
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { image } = req.body;

  const formData = new FormData();
  formData.append('image_file', image);

  try {
    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        'X-Api-Key': process.env.API_REMOVEBG,
        ...formData.getHeaders(),
      },
    });

    res.send(response.data);
  } catch (error) {
    console.error('Erro ao remover o fundo da imagem:', error);
    res.status(500).send('Erro ao remover o fundo da imagem');
  }
});


module.exports = router;
