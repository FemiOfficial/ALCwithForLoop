module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Meals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    isMenu: {
      type: Sequelize.BOOLEAN,
    },
    price: {
      type: Sequelize.DOUBLE,
    },
    catererId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    orderedTimes: {
      type: Sequelize.INTEGER,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Meals'),
};
