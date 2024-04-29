// backend/models/classes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  japanese_name: DataTypes.STRING(30),
  english_name: DataTypes.STRING(30),
  parent_class: DataTypes.INTEGER
}, {
  tableName: 'classes',
  timestamps: false
});

module.exports = Class;