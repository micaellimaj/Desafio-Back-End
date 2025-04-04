// models/Item.js
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING
  });
  
    Item.associate = (models) => {
      Item.belongsToMany(models.User, {
        through: 'ItemUser',
        foreignKey: 'item_id',
        as: 'users'
      });
      
      Item.belongsToMany(models.Tag, {
        through: 'ItemTag',
        foreignKey: 'item_id',
        as: 'tags'
      });
    };
  
    return Item;
  };