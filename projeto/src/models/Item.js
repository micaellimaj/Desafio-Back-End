module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', { 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
      timestamps: true,
      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'items'
    });
  
    Item.associate = (models) => {
      Item.belongsToMany(models.User, {
        through: 'ItemUser',
        foreignKey: 'item_id',
        as: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
  
      Item.belongsToMany(models.Tag, {
        through: 'ItemTag',
        foreignKey: 'item_id',
        as: 'tags',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    };
  
    return Item;
  };
  