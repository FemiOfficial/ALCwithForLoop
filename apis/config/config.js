require('dotenv').config();

module.exports = {
  local: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
  travis: {
    username: 'root',
    password: '',
    database: 'mealApp',
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
};
