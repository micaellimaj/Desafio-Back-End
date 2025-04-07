const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

// Seleciona o ambiente de desenvolvimento
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Cria a instância do Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  logging: dbConfig.logging,
  define: {
    timestamps: true,
    freezeTableName: true
  }
});

module.exports = sequelize;
