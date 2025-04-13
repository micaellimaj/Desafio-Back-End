module.exports = (sequelize, DataTypes) => {
  const ItemTag = sequelize.define('ItemTag', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'items',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    tableName: 'ItemTag',
    timestamps: true,
    underscored: true
  });

  return ItemTag;
};
