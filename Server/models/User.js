const con = require('../config/database.js')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(con);

const User = sequelize.define('User', {
    Name: {
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
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    
});
