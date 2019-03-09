'use strict';

module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    isMenu: DataTypes.BOOLEAN,
    price: DataTypes.DOUBLE,
    orderedTimes: DataTypes.INTEGER,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId',
      as: 'Caterer',
    });
    Meal.hasMany(models.Order, {
      foreignKey: 'mealId',
      as: 'Order',
    });
  };
  return Meal;
};
