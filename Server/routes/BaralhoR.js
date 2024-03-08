const express = require('express');
const router = express.Router();
const baralhoController = require('../Controllers/ControllerBaralho');

router.post('/Baralhos/CriarBaralho', baralhoController.criarBaralho)