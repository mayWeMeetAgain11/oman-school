require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  dialect: 'mysql',
  benchmark: true,

});

sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = {
  sequelize,
  Sequelize
};
