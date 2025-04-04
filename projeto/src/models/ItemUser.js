// models/ItemUser.js
module.exports = (sequelize, DataTypes) => {
    const ItemUser = sequelize.define('ItemUser', {
      relation_type: {
        type: DataTypes.ENUM('CREATOR', 'REGENER'),
        allowNull: false
      }
    }, {
      timestamps: false
    });
  
    return ItemUser;
  };