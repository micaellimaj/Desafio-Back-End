module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    paranoid: true,
    tableName: 'team'
  });

  Team.associate = (models) => {
    Team.hasMany(models.Player, {
      foreignKey: 'teamId',
      as: 'players'
    });

    Team.belongsToMany(models.User, {
      through: models.TeamUser,
      foreignKey: 'team_id',
      as: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Team;
};
