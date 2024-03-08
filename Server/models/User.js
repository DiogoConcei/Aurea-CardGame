const conexao = require('../config/database')
const { Sequelize, DataTypes } = require('sequelize');

const User = conexao.define('User', {
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IsEmailConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    CridadoEm: {

    },
    AtualizadoEm: {

    },
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
});

module.exports = User;