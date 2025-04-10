// src/models/TeamUser.js
module.exports = (sequelize, DataTypes) => {
    const TeamUser = sequelize.define('TeamUser', {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      relation_type: {
        type: DataTypes.ENUM('CREATOR', 'COLLABORATOR'),
        allowNull: false,
        defaultValue: 'COLLABORATOR'
      }
    }, {
      timestamps: false,
      underscored: true
    });
  
    return TeamUser;
  };
  