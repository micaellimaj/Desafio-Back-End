module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{
    timestamps: true,
    underscored: true
  });

  User.associate = (models) => {
    User.belongsToMany(models.Item, {
      through: 'ItemUser',
      foreignKey: 'user_id',
      as: 'items'
    });
    
    User.belongsToMany(models.Team, {
      through: models.TeamUser,
      foreignKey: 'user_id',
      as: 'teams'
    });
    
  };

  return User;
};
