// src/models/Player.js
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  });

  Player.associate = (models) => {
    Player.belongsTo(models.Team, {
      foreignKey: 'teamId',
      as: 'team'
    });
  };

  return Player;
};
