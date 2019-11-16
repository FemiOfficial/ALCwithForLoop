'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    permission: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: true,
    },
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'Role',
    });
    User.hasMany(models.Meal, {
      foreignKey: 'catererId',
      as: 'Meals',
    });
  };
  return User;
};
