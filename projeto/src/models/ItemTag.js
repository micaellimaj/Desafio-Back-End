module.exports = (sequelize, DataTypes) => {
    const ItemTag = sequelize.define('ItemTag', {
      itemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tagId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      tableName: 'ItemTag',
      timestamps: false
    });
  
    return ItemTag;
  };
  