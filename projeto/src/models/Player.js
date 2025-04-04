// src/models/Player.js
module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
      name: DataTypes.STRING,
      teamId: DataTypes.INTEGER,
      // ... outros campos
    });
  
    Player.associate = (models) => {
      Player.belongsTo(models.Team, {
        foreignKey: 'teamId',
        as: 'team'
      });
    };
  
    return Player;
  };