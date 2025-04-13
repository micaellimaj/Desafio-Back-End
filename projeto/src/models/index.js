const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
require('dotenv').config();

// Instância do Sequelize com caminho absoluto do .env
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(process.env.DB_PATH) 
});

// Importação dos modelos
const models = {
  User: require('./User')(sequelize, DataTypes),
  Item: require('./Item')(sequelize, DataTypes),
  Tag: require('./Tag')(sequelize, DataTypes),
  ItemTag: require('./ItemTag')(sequelize, DataTypes),
  ItemUser: require('./ItemUser')(sequelize, DataTypes),
  Team: require('./Team')(sequelize, DataTypes),
  Player: require('./Player')(sequelize, DataTypes),
  TeamUser: require('./TeamUser')(sequelize, DataTypes),
};

// Configuração de relacionamentos (caso existam nos modelos)
Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conexão com SQLite estabelecida com sucesso!');
  } catch (error) {
    console.error('🔴 Erro na conexão com SQLite:', error);
  }
})();

module.exports = {
  ...models,
  sequelize,
  Sequelize
};