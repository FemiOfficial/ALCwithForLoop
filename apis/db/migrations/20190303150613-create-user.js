module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    permission: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    password: {
      type: Sequelize.STRING,
    },
    roleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Users'),

};
