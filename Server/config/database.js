const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('mysql', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = con;