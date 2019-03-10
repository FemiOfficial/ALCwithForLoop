'use strict';

const permissions = require('../../config/permission');
const hashPassword = require('../../utils/hash.password');

const now = new Date();


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstname: 'Abd-afeez',
    lastname: 'Abd-hamid',
    email: 'dentreal@yahoo.com',
    phoneNumber: '08167558013',
    address: 'No 33, Victoria Street, Ojota Lagos.',
    permission: [permissions.GLOBAL],
    roleId: 1,
    password: hashPassword('oloreofe'),
  },
  {
    firstname: 'John',
    lastname: 'Ortega',
    email: 'museguide@gmail.com',
    phoneNumber: '08167558014',
    address: 'No 30, Victoria Street, Ojota Lagos.',
    permission: [permissions.GLOBAL],
    roleId: 1,
    password: hashPassword('oloreofe'),
  },
  {
    firstname: 'John',
    lastname: 'Jide',
    email: 'alayeguide@gmail.com',
    phoneNumber: '08167558014',
    address: 'No 30, Victoria Street, Ojota Lagos.',
    permission: [permissions.WRITE_ORDER, permissions.READ_MENU, permissions.READ_ORDER],
    roleId: 3,
    password: hashPassword('oloreofe'),
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('People', null, {}),
};
