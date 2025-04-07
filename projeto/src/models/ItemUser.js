module.exports = (sequelize, DataTypes) => {
  const ItemUser = sequelize.define('ItemUser', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    tableName: 'ItemUser',
    timestamps: true,
    underscored: true
  });
  
    return ItemUser;
  };
  