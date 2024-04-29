// backend/models/recipes_ingredients.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Recipe = require('./recipes');

const RecipeIngredient = sequelize.define('RecipeIngredient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  recipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Recipe,
      key: 'recipeId'
    }
  },
  ingredientId: DataTypes.INTEGER,
  count: DataTypes.INTEGER
}, {
  tableName: 'recipes_ingredients',
  timestamps: false
});

module.exports = RecipeIngredient;