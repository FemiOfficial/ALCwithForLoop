'use strict';

const now = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Meals', [{
    price: 800.0,
    name: 'Golden delight smoothie',
    description: 'A rich blend of bananan, orange and mango fruits',
    isMenu: true,
    category: 'Salads',
    orderedTimes: 1,
    catererId: 1,
  },
  {
    price: 500.0,
    name: 'Ofada Rice with diced beef stew',
    description: 'A delicious ofada rice with diced beef stew',
    isMenu: false,
    category: 'Salads',
    orderedTimes: 3,
    catererId: 1,
  }], {}),
  down: queryInterface => queryInterface.bulkDelete('Meals', null, {}),
};
