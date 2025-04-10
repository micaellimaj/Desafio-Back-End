// src/models/Team.js
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

    Team.belongsToMany(models.User, {
      through: models.TeamUser,
      foreignKey: 'team_id',
      as: 'users'
    });
  };

  return Team;
};
