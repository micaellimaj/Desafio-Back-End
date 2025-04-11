module.exports = (sequelize, DataTypes) => {
  const TeamUser = sequelize.define('TeamUser', {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    relation_type: {
      type: DataTypes.ENUM('CREATOR', 'COLLABORATOR'),
      allowNull: false,
      defaultValue: 'COLLABORATOR'
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });

  return TeamUser;
};
