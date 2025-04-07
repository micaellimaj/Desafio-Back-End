// src/database/index.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('time', null, null, {
    storage: './time.db',
    dialect: 'sqlite',
    logging: console.log
});

module.exports = require('../models');

// Teste de conexão
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com o banco de dados "time.db"');
    } catch (error) {
        console.error('Erro na conexão:', error.message);
    }
}

testConnection();

module.exports = sequelize;