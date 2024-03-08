const {Sequelize} = require('sequelize')


const conexao = new Sequelize('AUREA_CARDGAME', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
  })
  
  conexao.authenticate().then(() => {
    console.log("Banco de dados ligado")
  }).catch(err => {
    console.error("Banco de dados não ligou, motivo : ", err)
  })

  module.exports = conexao;