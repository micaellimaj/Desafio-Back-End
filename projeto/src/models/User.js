// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    User.associate = (models) => {
      User.belongsToMany(models.Item, {
        through: 'ItemUser',
        foreignKey: 'user_id',
        as: 'items'
      });
    };
  
    return User;
  };