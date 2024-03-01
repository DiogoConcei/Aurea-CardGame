const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('AUREA_CARDGAME', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
  })
  
  sequelize.authenticate().then(() => {
    console.log("Banco de dados ligado")
  }).catch(err => {
    console.err("Banco de dados não ligou, motivo : ", err)
  })

  module.exports = sequelize;