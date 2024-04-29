// backend/models/recipes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Recipe = sequelize.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  recipeId: DataTypes.INTEGER,
  name: DataTypes.STRING(255),
  craftLevel: DataTypes.INTEGER,
  type: DataTypes.STRING(255),
  successRate: DataTypes.INTEGER,
  mp_consume: DataTypes.INTEGER,
  production_id: DataTypes.INTEGER,
  production_count: DataTypes.INTEGER,
  rare_production_id: DataTypes.INTEGER,
  rarity: DataTypes.INTEGER
}, {
  tableName: 'recipes',
  timestamps: false
});

module.exports = Recipe;