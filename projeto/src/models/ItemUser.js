module.exports = (sequelize, DataTypes) => {
  const ItemUser = sequelize.define('ItemUser', {
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
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    relation_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'RESPONSIBLE'
    }
  }, {
    tableName: 'ItemUser',
    timestamps: true,
    underscored: true
  });

  return ItemUser;
};
