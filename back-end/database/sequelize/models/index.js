const Sequelize = require('sequelize');
const dbConfig = require('../../connection.js');

const db = {};

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true,
  },
  logging: false,
}).production;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.products = require('./products')(sequelize, Sequelize);

module.exports = db;
