require('dotenv').config();

module.exports = {
  secretOrKey: 'themealappkey',
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
    host: 'ec2-75-101-133-29.compute-1.amazonaws.com',
    database: 'dakomnf94rg0f0',
    username: 'byuajfeqfscwwk',
    port: 5432,
    password: 'a9008c79284f647b8bba11b23bbaf49883b547fa08fe305915bab2b3bf65eed4',
    dialect: 'postgres',
    sslmode: require,
    define: {
      timestamps: false,
    },
  },
  travis: {
    username: 'root',
    password: null,
    database: 'travis',
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  },
};
