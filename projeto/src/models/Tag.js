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
    underscored: true
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.Item, {
      through: 'ItemTag',
      foreignKey: 'tag_id',
      as: 'items'
    });
  };

  return Tag;
};
