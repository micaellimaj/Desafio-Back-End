module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'tags'
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.Item, {
      through: 'ItemTag',
      foreignKey: 'tag_id',
      as: 'items',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Tag;
};
