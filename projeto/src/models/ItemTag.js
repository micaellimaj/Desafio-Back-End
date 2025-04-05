// models/ItemTag.js
  // ItemTag migration
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ItemTag', {
          itemId: {
              type: Sequelize.INTEGER,
              references: { model: 'Items' },
              primaryKey: true
          },
          tagId: {
              type: Sequelize.INTEGER,
              references: { model: 'Tags' },
              primaryKey: true
          }
      });
  }
};
