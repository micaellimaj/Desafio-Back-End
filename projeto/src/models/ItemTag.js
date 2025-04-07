module.exports = (sequelize, DataTypes) => {
    const ItemTag = sequelize.define('ItemTag', {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      tableName: 'ItemTag',
      timestamps: true,
      underscored: true
    });
  
    return ItemTag;
  };
  