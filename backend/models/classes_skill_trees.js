// backend/models/classes_skill_trees.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Class = require('./classes');

const ClassSkillTree = sequelize.define('ClassSkillTree', {
  class_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Class,
      key: 'id'
    }
  },
  skill_id: DataTypes.INTEGER,
  skill_level: DataTypes.INTEGER,
  skill_min_level: DataTypes.INTEGER,
  skill_cost: DataTypes.INTEGER,
  skill_description_id: DataTypes.INTEGER
}, {
  tableName: 'classes_skill_trees',
  timestamps: false
});

module.exports = ClassSkillTree;