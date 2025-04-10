module.exports = (sequelize, DataTypes) => {
  const ItemUser = sequelize.define('ItemUser', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
