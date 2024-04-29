// backend/models/skill_descriptions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const SkillDescription = sequelize.define('SkillDescription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  skill_id: DataTypes.INTEGER,
  level: DataTypes.INTEGER,
  icon: DataTypes.STRING(55),
  japanese_name: DataTypes.STRING(55),
  english_name: DataTypes.STRING(100),
  japanese_description: DataTypes.TEXT,
  english_description: DataTypes.TEXT,
  enchant_name_english: DataTypes.STRING(45),
  enchant_name_japanese: DataTypes.STRING(35),
  enchant_desc_english: DataTypes.STRING(155),
  enchant_desc_japanese: DataTypes.STRING(55),
  cast_range: DataTypes.INTEGER,
  mp_consume: DataTypes.INTEGER,
  hp_consume: DataTypes.INTEGER,
  is_magic: DataTypes.TINYINT
}, {
  tableName: 'skill_descriptions',
  timestamps: false
});

module.exports = SkillDescription;