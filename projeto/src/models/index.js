const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql' // ou seu banco de dados
  }
);

const models = {
  Item: require('./Item')(sequelize),
  Tag: require('./Tag')(sequelize),
  User: require('./User')(sequelize),
  ItemTag: require('./ItemTag')(sequelize)
};

// Configura relacionamentos
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;