'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    isCancelled: DataTypes.BOOLEAN,
    isDelivered: DataTypes.BOOLEAN,
    quantity: DataTypes.STRING,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'catererId',
      as: 'Caterer',
    });
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
    Order.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      as: 'Meal',
    });
  };
  return Order;
};
