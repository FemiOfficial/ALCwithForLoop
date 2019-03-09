require('dotenv').config();

module.exports = {
  local: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME_TEST,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  travis: {
    username: 'postgres',
    password: '',
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres',
  },
};
