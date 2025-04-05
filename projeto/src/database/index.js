// src/database/index.js
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

// Configurações do banco de dados usando .env
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// Debug da conexão
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com banco de dados bem sucedida');
    } catch (error) {
        console.error('Erro na conexão:', error.message);
        console.error('Detalhes do erro:', JSON.stringify(error, null, 2));
    }
}

testConnection();

module.exports = { sequelize, DataTypes };