// models/ItemTag.js
module.exports = (sequelize, DataTypes) => {
    const ItemTag = sequelize.define('ItemTag', {}, {
      timestamps: false
    });
  
    return ItemTag;
  };