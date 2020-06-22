const dbConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...dbConfig,
  },
  test: {
    ...dbConfig,
  },
  production: {
    ...dbConfig,
  },
};
