// backend/models/quest_descriptions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const QuestDescription = sequelize.define('QuestDescription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quest_id: DataTypes.INTEGER,
  level: DataTypes.INTEGER,
  title_japanese: DataTypes.STRING(100),
  title_english: DataTypes.STRING(100),
  sub_name_japanese: DataTypes.STRING(100),
  sub_name_english: DataTypes.STRING(100),
  japanese_description: DataTypes.TEXT,
  english_description: DataTypes.TEXT,
  target_loc: DataTypes.STRING(55),
  lvl_min: DataTypes.INTEGER,
  lvl_max: DataTypes.INTEGER,
  quest_type: DataTypes.INTEGER,
  entity_name_japanese: DataTypes.STRING(55),
  entity_name_english: DataTypes.STRING(100),
  get_item_in_quest: DataTypes.TINYINT,
  start_npc_id: DataTypes.INTEGER,
  start_npc_loc: DataTypes.STRING(55),
  quest_requirement_japanese: DataTypes.STRING(155),
  quest_requirement_english: DataTypes.STRING(255),
  quest_intro_japanese: DataTypes.TEXT,
  quest_intro_english: DataTypes.TEXT,
  class_limit: DataTypes.STRING(255),
  area_id: DataTypes.INTEGER,
  have_item: DataTypes.STRING(55)
}, {
  tableName: 'quest_descriptions',
  timestamps: false
});

module.exports = QuestDescription;