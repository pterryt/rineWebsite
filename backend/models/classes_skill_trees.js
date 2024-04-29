// backend/models/classes_skill_trees.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const ClassSkillTree = sequelize.define('ClassSkillTree', {
  class_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'classes', // This should be the table name
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

ClassSkillTree.associate = function(models) {
  ClassSkillTree.belongsTo(models.SkillDescription, {
    foreignKey: 'skill_description_id',
    as: 'skillDescription'
  });
  ClassSkillTree.belongsTo(models.Class, {
    foreignKey: 'class_id',
    as: 'class'
  });
};

module.exports = ClassSkillTree;