// models/Tag.js
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      }
    });
  
    Tag.associate = (models) => {
      Tag.belongsToMany(models.Item, {
        through: 'ItemTag',
        foreignKey: 'tag_id',
        as: 'items'
      });
    };
  
    return Tag;
  };