'use strict';

const permissions = require('../../config/permission');

const now = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Roles', [
    {
      name: 'super_caterer',
      displayName: 'Main Caterer',
      description: 'The role for the caterer with global capabilities',
      permission: [permissions.GLOBAL],
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'caterer',
      displayName: 'Caterer',
      description: 'The role for the caterers on the app',
      permission: [permissions.READ_MEAL, permissions.READ_MENU,
        permissions.WRITE_MEAL, permissions.WRITE_MENU,
        permissions.READ_ORDER, permissions.READ_ORDER_ITEM, permissions.READ_USER],
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'user',
      displayName: 'User',
      description: 'The role for the regular users (customers) on the app',
      permission: [permissions.READ_MENU,
        permissions.WRITE_ORDER, permissions.WRITE_ORDER_ITEM, permissions.READ_USER],
      createdAt: now,
      updatedAt: now,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
