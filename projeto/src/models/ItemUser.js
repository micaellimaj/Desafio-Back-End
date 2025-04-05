// models/ItemUser.js
// ItemUser migration
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ItemUser', {
          itemId: {
              type: Sequelize.INTEGER,
              references: { model: 'Items' },
              primaryKey: true
          },
          userId: {
              type: Sequelize.INTEGER,
              references: { model: 'Users' },
              primaryKey: true
          }
      });
  }
};