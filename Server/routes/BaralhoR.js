const express = require('express');
const router = express.Router();
const baralhoController = require('../Controllers/criarBaralho');

router.post('/Baralhos/CriarBaralho', baralhoController.criarBaralho)