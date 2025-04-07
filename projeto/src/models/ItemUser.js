module.exports = (sequelize, DataTypes) => {
    const ItemUser = sequelize.define('ItemUser', {
      itemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      tableName: 'ItemUser',
      timestamps: false
    });
  
    return ItemUser;
  };
  