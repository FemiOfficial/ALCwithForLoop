'use strict';

const now = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Orders', [{
    isCancelled: false,
    isDelivered: false,
    quantity: 2,
    userId: 1,
    catererId: 1,
    mealId: 2,
  }], {}),
  down: queryInterface => queryInterface.bulkDelete('Meals', null, {}),
};
