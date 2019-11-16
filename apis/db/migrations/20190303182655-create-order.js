module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    isCancelled: {
      type: Sequelize.BOOLEAN,
    },
    isDelivered: {
      type: Sequelize.BOOLEAN,
    },
    quantity: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    catererId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    mealId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Meals',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Orders'),
};
