const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'TESTDB',
  'root',
  'karma&koma',
  {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  }
);

const modelDefiners = [
  require('../models/user'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}


module.exports = sequelize;

