module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Team.associate = (models) => {
    Team.hasMany(models.Player, {
      foreignKey: 'teamId',
      as: 'players'
    });
  };

  return Team;
};
