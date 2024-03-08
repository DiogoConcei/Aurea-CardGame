const conexao = require('../config/database')
const { Sequelize, DataTypes } = require('sequelize');

const Baralho = conexao.define('Baralho', {
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Baralho Personalizado'
    },
    QtdCartas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    } ,
    MaxCartas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 40
    },
    CridadoEm: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false            
    },
    AtualizadoEm: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false            
    },
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    }
})

module.exports = Baralho