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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Orders'),
};
