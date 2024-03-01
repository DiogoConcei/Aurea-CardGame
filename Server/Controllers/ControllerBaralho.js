const { Baralho } = require("../models/Baralho.js");

exports.criarBaralho = async (req,res) => {
    const { nome, qtdCartas, maxCartas, CriadoEm } = req.body;
    try {
        const novoBaralho = await Baralho.create({ Nome: nome, QtdCartas: qtdCartas, MaxCartas: maxCartas });    
        res.status(201).json(novoBaralho);
    } catch(err) {
        console.err('Baralho não criado: ', err)
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}