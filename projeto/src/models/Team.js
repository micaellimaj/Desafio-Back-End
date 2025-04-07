// src/models/Team.js
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true
  });

  Team.associate = (models) => {
    Team.hasMany(models.Player, {
      foreignKey: 'teamId',
      as: 'players'
    });
  };

  return Team;
};

