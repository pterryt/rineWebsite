const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const db = {}
const models = ('.')

const sequelize = require('../db/connection')
const basename = path.basename(__filename);
// const { DataTypes } = Sequelize;

fs
  .readdirSync(models)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    const model = require(path.join(models, file))(sequelize, DataTypes); // Pass DataTypes object directly
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize; // for accessing static props and functions like Op.or
db.sequelize = sequelize; // for accessing connection props and functions like 'query' or 'transaction'

module.exports = db;