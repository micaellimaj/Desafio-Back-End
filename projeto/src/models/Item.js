// models/Item.js
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      image_url: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              isUrl: true
          }
      }
  }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'items'
  });

  Item.associate = (models) => {
      Item.belongsToMany(models.User, {
          through: 'ItemUser',
          foreignKey: 'itemId',
          as: 'users'
      });
      
      Item.belongsToMany(models.Tag, {
          through: 'ItemTag',
          foreignKey: 'itemId',
          as: 'tags'
      });
  };

  return Item;
};