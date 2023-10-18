const mysql2 = require('mysql2');
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()

const database = process.env.MYSQL_DB_NAME;
const username = process.env.MYSQL_Db_USER;
const password = process.env.MYSQL_DB_PASSWORD;
const host = process.env.MYSQL_DB_HOST

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database:', error)
  })
const db = {};
db.sequelize = sequelize
db.Sequelize = Sequelize
db.DataTypes = DataTypes


db.sequelize.sync({ force: false})
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });
module.exports = { db }