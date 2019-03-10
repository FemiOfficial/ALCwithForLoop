module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    displayName: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    permission: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Roles'),
};
